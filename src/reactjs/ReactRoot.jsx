import { Sidebar } from "/src/reactjs/sidebarPresenter";
import { Summary } from "/src/reactjs/summaryPresenter";
import { Details } from "/src/reactjs/detailsPresenter";
import { Search } from "/src/reactjs/searchPresenter";
import { SuspenseView } from "/src/views/suspenseView";
import { observer } from "mobx-react-lite";
//import { searchDishes } from '/src/dishSource';

const ReactRoot = observer(   //  will be added in week 3 --> ADDED
    function ReactRoot(props){
        if (props.model.ready) {
        return (
                <div>
                    <div><Sidebar model={props.model} /></div>
                    <div>
                        <Summary model={props.model}/>
                        <Details model={props.model}/>
                        <Search model={props.model}/>
                    </div>
                </div>
            );
        }
        else {return (<div><SuspenseView promise = {props.model.currentDishPromiseState?.promise ?? "loading"}
                            error = {props.model.currentDishPromiseState?.error ?? null}/></div>)}
    }
)

export { ReactRoot }
