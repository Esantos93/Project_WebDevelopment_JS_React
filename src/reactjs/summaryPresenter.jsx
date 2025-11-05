import { observer } from "mobx-react-lite";
import { SummaryView } from "/src/views/summaryView.jsx";

import { shoppingList } from "../utilities.js";

const Summary = observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function SummaryRender(props){
        return <SummaryView people={props.model.numberOfGuests} //"TODO pass the relevant field from props.model"
                            ingredients={shoppingList(props.model.dishes)}/>; //"TODO call shoppingList imported from utilities, pass the model menu as parameter"
    }
);

export { Summary };
