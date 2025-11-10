import "/src/teacherFetch.js"; // protection against fetch() in infinite loops
import { observable, configure } from "mobx";
configure({ enforceActions: "never", });  // we don't use Mobx actions in the Lab

import {model} from "./DinnerModel.js" // We import the DinnnerModel
export const reactiveModel= observable(model) //"make a reactive object out of the model exported from DinnerModel";

// Initial search
model.doSearch({})




// ------ for Lab debug purposes ----------
// making the reactive model available at the browser JavasScript Console
window.myModel= reactiveModel;

// making some example dishes available 
import {dishesConst} from "/src/dishesConst.js";
window.dishesConst= dishesConst;

//myModel.addToMenu(dishesConst[2]); //You can test with more/different dishes
