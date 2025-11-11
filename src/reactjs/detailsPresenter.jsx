import { observer } from "mobx-react-lite";
import { DetailsView } from "/src/views/detailsView.jsx";
import { SuspenseView } from "../views/suspenseView";
import { model } from "../DinnerModel";

const Details = observer(
    function DetailsRender(props) {
        /*if (props.model.currentDishPromiseState.promise && !(props.model.currentDishPromiseState.data || props.model.currentDishPromiseState.error)){
            return <SuspenseView/>
        }
        if (props.model.currentDishPromiseState.data && !(props.model.currentDishPromiseState.promis || props.model.currentDishPromiseState.error)){
            return <DetailsView/>;
        }*/

        function isDishMenu() {
            function arrayCheckerCB(dish){
               return dish.id === props.model.currentDishId
            }

          if (props.model.dishes.find(arrayCheckerCB) === undefined)
            return false
          return true
        }

        return props.model.currentDishPromiseState.data && 
        <DetailsView dishData = {props.model.currentDishPromiseState.data}
                        guests = {props.model.numberOfGuests}
                        isDishInMenu = {isDishMenu()}
                        onButtonClick = {function(){console.log("Yes, the user wants to add!")}}  
                        /> 
        || <SuspenseView promise = {props.model.currentDishPromiseState.promise}
                            error = {props.model.currentDishPromiseState.error}
                            />

    }

);

export {Details}