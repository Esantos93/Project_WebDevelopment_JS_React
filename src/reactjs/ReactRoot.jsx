import { Sidebar } from "/src/reactjs/sidebarPresenter";
import { Summary } from "/src/reactjs/summaryPresenter";
import { Details } from "/src/reactjs/detailsPresenter";
import { Search } from "/src/reactjs/searchPresenter";
import { SuspenseView } from "/src/views/suspenseView";
import { observer } from "mobx-react-lite";
import {  createHashRouter,  RouterProvider} from "react-router-dom";
import "/src/style.css"

const ReactRoot = observer(   //  will be added in week 3 --> ADDED
    function ReactRoot(props){
        if (props.model.ready) {
        return (
                <div className="flexParent">
                    <div><Sidebar model={props.model} /></div>
                    <div><RouterProvider router={makeRouter(props.model)}/></div>
                </div>
            );
        }
        else {return (<div><SuspenseView promise = {props.model.currentDishPromiseState?.promise ?? "loading"}
                            error = {props.model.currentDishPromiseState?.error ?? null}/></div>)}
    }
)

export function makeRouter(model){
    return createHashRouter([
    {
        path: "/",
        element: <Search model={model}/>,
    },
    {
        path: "/search",
        element: <Search model={model}/>,
    },
    {
        path: "/summary",
        element: <Summary model={model}/>,
    },
    {   
        path:"/details",
        element: <Details model={model}/>
    }

])
}

export { ReactRoot }
