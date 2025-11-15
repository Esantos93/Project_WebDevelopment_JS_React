import "/src/teacherFetch.js"; // protection against fetch() in infinite loops
import { observable, configure, reaction } from "mobx";
import {model} from "./DinnerModel.js" // We import the DinnnerModel
import { connectToPersistence } from "./firestoreModel.js"; // To make our model persistent
import {dishesConst} from "/src/dishesConst.js";


 /*     Our REACTIVE MODEL      */

export const reactiveModel= observable(model) // "make a reactive object out of the model exported from DinnerModel";
configure({ enforceActions: "never", });  // we don't use Mobx actions in the Lab


/*     SIDE EFFECTS installation     */                 // BOOTSTRAPING #4: Install side effects

// Reactive Object side effect exercise (TW 2.2.3)
reaction(function relevantSelectionACB() { return reactiveModel.currentDishId; },
        function sideEffectACB() { return reactiveModel.currentDishEffect(); })


/*      PERSISTENCE of our reactive model       */

connectToPersistence(reactiveModel, reaction)


/*      INITIAL SEARCH          */              //BOOTSTRAPING #5

 reactiveModel.doSearch({}) // To see the change from SuspenseView to SearchResultsView when the App (re)loads (TW2.3.1)
// reactiveModel.currentDishId=715446 --> DEACTIVATED ON TW2.4.5 // To see the change from SuspenseView to DetailsView when the App reloads (TW2.3.1)


/*      LAB DEBUGGING   */

window.myModel= reactiveModel; // making the reactive model available at the browser JavasScript Console
//myModel.addToMenu(dishesConst[2]); //You can test with more/different dishes
window.dishesConst= dishesConst; // making some example dishes available 
