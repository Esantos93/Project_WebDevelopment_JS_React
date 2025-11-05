import { observer } from "mobx-react-lite";
import { SidebarView } from "/src/views/sidebarView.jsx";



const Sidebar = observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function SidebarRender(props){
        
        function numberChangeButtonACB(number){
            //console.log("Number change custom event fired")
            props.model.setNumberOfGuests(number)
        }

        function dishClickACB(dish){
            //console.log("Dish click custom event fired")
            props.model.setCurrentDishId(dish.id)
        }

        function dishRemoveButtonACB(dish){
            //console.log("Dish remove custom event fired")
            props.model.removeFromMenu(dish)
        }
        
        return <SidebarView number={props.model.numberOfGuests} 
                            dishes={props.model.dishes}
                            onNumberChange={numberChangeButtonACB}
                            onDishClick={dishClickACB}
                            onDishRemove={dishRemoveButtonACB}/>;
    }
);

export { Sidebar };
