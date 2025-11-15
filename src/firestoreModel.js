// initialize Firebase app
import { initializeApp } from "firebase/app";
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore";

// uncomment the following lines when you have your firebaseConfig. Understand what the lines are doing!
import {firebaseConfig} from "/src/firebaseConfig.js";
import { error } from "happy-dom/lib/PropertySymbol";
const app= initializeApp(firebaseConfig);
const db= getFirestore(app);
window.db= db

// make doc and setDoc available at the Console for testing
window.doc= doc        
window.setDoc= setDoc


/* Replace NN with your TW2_TW3 group number! */
const COLLECTION="dinnerModel747";

export function connectToPersistence(reactiveModel, watcherFunc) {
    //console.log("Persistence function triggered")

    // Side Effect for Persistance: WRITE to Firestore
    const coreDoc = doc(db,COLLECTION,"modelCore")
    watcherFunc(function relevantSelectionACB() { return {guests:reactiveModel.numberOfGuests, 
                                                        dishes:reactiveModel.dishes, 
                                                        currentDishId:reactiveModel.currentDishId} },
                function sideEffectACB() { 
                    if (reactiveModel.ready) {
                        console.log("sideEffectACB function triggered")
                        const dataForCloud = {guests:reactiveModel.numberOfGuests ?? 0,
                                            dishes:reactiveModel.dishes ?? [],
                                            currentDishId:reactiveModel.currentDishId ?? null}
                        setDoc(coreDoc,dataForCloud,{merge:true})/*.catch(function(error) {
                            console.log("The data could not be writen due to the following error:", error)
                            })*/ 
                        }
                })

    function persistenceResultsACB(snap) {
        const dataFromCloud = snap.data()
        //console.log("Data from the cloud: <pre>"+JSON.stringify(dataFromCloud)+"</pre>") --> Debugging
        reactiveModel.numberOfGuests = dataFromCloud.guests ?? 2;
        reactiveModel.dishes = dataFromCloud.dishes ?? [];
        reactiveModel.currentDishId = dataFromCloud.currentDishId ?? null;
        reactiveModel.ready = true
    }

    function errorACB (error) {console.log("The data from Firestore could not be read during the bootstraping:", error)}

    // READ from Firestore (Persistence)
    reactiveModel.ready = false
    getDoc(coreDoc).then(persistenceResultsACB).catch(errorACB)
}