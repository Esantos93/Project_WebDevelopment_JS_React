import { observer } from "mobx-react-lite";
import { SidebarView } from "/src/views/sidebarView.jsx";

function numberChangeButtonACB(){
    console.log("Number change custom event fired")
}

function dishClickACB(){
    console.log("Dish click custom event fired")
}

function dishRemoveACB(){
    console.log("Dish remove custom event fired")
}

const Sidebar = observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function SidebarRender(props){
        return <SidebarView number={props.model.numberOfGuests} 
                            dishes={props.model.dishes}
                            onNumberChange={numberChangeButtonACB}
                            onDishClick={dishClickACB}
                            onDishRemove={dishRemoveACB}/>;
    }
);

export { Sidebar };
