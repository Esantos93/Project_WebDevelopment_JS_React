import "/src/teacherFetch.js"; // protection against fetch() in infinite loops
import { observable, configure, reaction } from "mobx";
configure({ enforceActions: "never", });  // we don't use Mobx actions in the Lab

import {model} from "./DinnerModel.js" // We import the DinnnerModel
export const reactiveModel= observable(model) //"make a reactive object out of the model exported from DinnerModel";

import { connectToPersistence } from "./firestoreModel.js";

// Reactive Object side effect exercise (TW 2.2.3)
reaction(function relevantSelectionACB() { return reactiveModel.currentDishId; },
        function sideEffectACB() { return reactiveModel.currentDishEffect(); })



// To see the change from SuspenseView to SearchResultsView when the App (re)loads (TW2.3.1) --> Initial EMPTY search 
reactiveModel.doSearch({})

// To see the change from SuspenseView to DetailsView when the App reloads (TW2.3.1)
// myModel.currentDishId=715446  --> DEACTIVATED ON TW2.4.5



// ------ for Lab debug purposes ----------
// making the reactive model available at the browser JavasScript Console
window.myModel= reactiveModel;

// making some example dishes available 
import {dishesConst} from "/src/dishesConst.js";
window.dishesConst= dishesConst;

//myModel.addToMenu(dishesConst[2]); //You can test with more/different dishes
