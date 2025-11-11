import {dishType} from "../utilities.js"
import { sortDishes } from "../utilities.js";
import { menuPrice } from "../utilities.js";

import "/src/style.css"

export function SidebarView(props){
    //return "SidebarView stub: number is "+props.number + " and we have "+props.dishes.length+ " dishes";
    
    function buttonPosACB(evt){ //Handler for native clicking on the + button
        console.log(props.number+1);
        props.onNumberChange(props.number+1);
    }


    function buttonNegACB(evt){ //Handler for native cliking on the - button
        console.log(props.number-1);
        props.onNumberChange(props.number-1);
    }

    return (
    <div className="sidebarView">
        <h2>Sidebar</h2>
        <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16}}>
            <button disabled={props.number<=1} onClick={buttonNegACB}>-</button>
            <div>{props.number}</div>
            <button onClick={buttonPosACB}>+</button>
        </div>

        <table>
            <tbody>
                { //  <---- in JSX/HTML, with this curly brace, we go back to JavaScript
                // Here Array Rendering is used to generate a table row for each element of the dishes prop (an array) 
                sortDishes(props.dishes).map(dishesTableRowCB)
                }
                <tr>
                    <td></td>
                    <td>Total:</td>
                    <td></td>
                    <td className="numbersRightAlign">{(menuPrice(props.dishes)*props.number).toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )

    /* callback for Array Rendering in TW 1.3 */
    function dishesTableRowCB(dish){
        
        function buttonXACB(evt){
            console.log("Element deleted")
            props.onDishRemove(dish)
        }

        function linkACB(evt){
            console.log("Link was clicked")
            props.onDishClick(dish)
        }
        
        return <tr key={dish.id } >
                 <td><button onClick={buttonXACB}>x</button></td>
                 <td><a onClick={linkACB} href="#">{dish.title}</a></td>
                 <td>{dishType(dish)}</td>
                 <td className="numbersRightAlign">{(dish.pricePerServing*props.number).toFixed(2)}</td>
               </tr>;
    }
}
