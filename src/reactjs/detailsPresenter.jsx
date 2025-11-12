import { observer } from "mobx-react-lite";
import { DetailsView } from "/src/views/detailsView";
import { SuspenseView } from "../views/suspenseView";
//import { model } from "../DinnerModel";

const Details = observer(
    function DetailsRender(props) {
        /*if (props.model.currentDishPromiseState.promise && !(props.model.currentDishPromiseState.data || props.model.currentDishPromiseState.error)){
            return <SuspenseView/>
        }
        if (props.model.currentDishPromiseState.data && !(props.model.currentDishPromiseState.promis || props.model.currentDishPromiseState.error)){
            return <DetailsView/>;
        }*/

        function isDishMenuACB() {
            function arrayCheckerCB(dish){
               return dish.id === props.model.currentDishId
            }

          if (props.model.dishes.find(arrayCheckerCB) === undefined)
            return false
          return true
        }

        function dishAddToMenuACB() {
          //console.log("The custom event (Add to Menu) has been fired")
          props.model.addToMenu(props.model.currentDishPromiseState.data)
        }

        return props.model.currentDishPromiseState.data && 
        <DetailsView dishData = {props.model.currentDishPromiseState.data}
                        guests = {props.model.numberOfGuests}
                        isDishInMenu = {isDishMenuACB()}
                        //onAddToMenuClick = {function(){console.log("Yes, the user wants to add!")}}
                        onAddToMenuClick = {dishAddToMenuACB}                     
                        /> 
        || <SuspenseView promise = {props.model.currentDishPromiseState.promise}
                            error = {props.model.currentDishPromiseState.error}
                            />

    }

);

export {Details}