import React, {createElement, Fragment} from "react";
window.React= {createElement:createElement, Fragment:Fragment}; // needed in the lab because it works with both React and Vue

import { createRoot } from "react-dom/client";

import {ReactRoot} from "./ReactRoot.jsx" // We import the root component
import {reactiveModel} from "/src/mobxReactiveModel.js" // We import the reactive model
const rootJSX = <ReactRoot model={reactiveModel}/>

// mount the app in the browser page. Test at http://localhost:8080/react.html
// and render the reactive model
createRoot(document.getElementById('root')).render(rootJSX);//render("Hello React world!");

// To see the change from SuspenseView to DetailsView when the App reloads (TW2.3.1)
//myModel.currentDishId=715446 
// To see the change from SuspenseView to SearchResultsView when the App (re)loads (TW2.3.1)
//myModel.doSearch()