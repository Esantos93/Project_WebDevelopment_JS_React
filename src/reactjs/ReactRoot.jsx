import { Sidebar } from "/src/reactjs/sidebarPresenter";
import { Summary } from "/src/reactjs/summaryPresenter";
import { Details } from "/src/reactjs/detailsPresenter";
import { Search } from "/src/reactjs/searchPresenter";
import { searchDishes } from '/src/dishSource';

// const ReactRoot = observer(   //  will be added in week 3
function ReactRoot(props){
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
// )

export { ReactRoot }
