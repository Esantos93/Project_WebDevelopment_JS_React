import {dishType} from "../utilities.js"
import { sortDishes } from "../utilities.js";
import { menuPrice } from "../utilities.js";

import "/src/style.css"

export function SidebarView(props){
    //return "SidebarView stub: number is "+props.number + " and we have "+props.dishes.length+ " dishes";
    return (
    <div>
        <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16}}>
            <button disabled={props.number<=1}>-</button>
            <div>{props.number}</div>
            <button>+</button>
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
        return <tr key={dish.id } >
                 <td><button>x</button></td>
                 <td><a href="#">{dish.title}</a></td>
                 <td>{dishType(dish)}</td>
                 <td className="numbersRightAlign">{(dish.pricePerServing*props.number).toFixed(2)}</td>
               </tr>;
    }
}
