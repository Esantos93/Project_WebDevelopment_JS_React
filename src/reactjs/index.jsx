import React, {createElement, Fragment} from "react";
window.React= {createElement:createElement, Fragment:Fragment}; // needed in the lab because it works with both React and Vue

import { createRoot } from "react-dom/client";
import {ReactRoot} from "./ReactRoot.jsx" // We import the root component
import {reactiveModel} from "/src/mobxReactiveModel.js" // We import the reactive model

// BOOTSTRAPING #1: We instantite our REACTIVE model
// BOOTSTRAPING #2: We pass the reactive model to the ROOT
const rootJSX = <ReactRoot model={reactiveModel}/> 


// mount the app in the browser page. Test at http://localhost:8080/react.html
// and render the reactive model
createRoot(document.getElementById('root')).render(rootJSX);//render("Hello React world!"); BOOTSTRAPING #3: We mount ROOT