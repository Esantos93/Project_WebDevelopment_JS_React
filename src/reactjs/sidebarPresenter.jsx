import { observer } from "mobx-react-lite";
import { SidebarView } from "/src/views/sidebarView.jsx";

const Sidebar = observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function SidebarRender(props){
        return <SidebarView number={props.model.numberOfGuests} 
                            dishes={props.model.dishes}/>;
    }
);

export { Sidebar };
