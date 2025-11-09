import { Sidebar } from "./sidebarPresenter.jsx";
import { Summary } from "./summaryPresenter.jsx";
import { searchDishes } from '../dishSource.js';

// const ReactRoot = observer(   //  will be added in week 3
function ReactRoot(props){
    return (<div>
                <div><Sidebar model={props.model} /></div>
                <div><Summary model={props.model} /></div>
            </div>
           );
}
// )

export { ReactRoot }
