import "/src/style.css"

export function DetailsView(props) {
    //return <div>"__Details View__"</div>;

    function onAddToMenuClickACB(natEvt) {props.onAddToMenuClick();}

    //console.log("DEBUG - props.isDishInMenu:", props.isDishInMenu);

    return(
        <div className="details-view">
            <h2>Dish Details</h2>
            <div>
                <button className="detailsButton" name="add to menu" disabled={props.isDishInMenu} style={{marginLeft: "0px"}} onClick={onAddToMenuClickACB}>add to menu</button>
                <button className="detailsButton" name="cancel">Cancel</button>
            </div>
            <span>{props.dishData.title}</span>
            <div className="details-container">
                    <img className="detailsImage" src={props.dishData.image}/>
                    <div className="price-info">
                        <span>Price: {props.dishData.pricePerServing}</span>
                        <span>For {props.guests} guests: {props.guests*props.dishData.pricePerServing}</span>
                    </div>
            </div>

            <div>
            <h3>Ingredientes:</h3>
            <ul>
                {props.dishData.extendedIngredients.map(function(ingredient) {
                return (
                    <li key={ingredient.id}>
                    {ingredient.amount} {ingredient.unit} of {ingredient.name}
                    </li>
                );
                })}
            </ul>
            </div>

            {props.dishData.instructions && (
            <div>
                <h3>Cooking Instructions</h3>
                <div>{props.dishData.instructions}</div>
            </div>
            )}
            <br/>
            <div>
            <a href={props.dishData.sourceUrl}>More Information</a>    
            </div>
        </div>
    )
}