import "/src/style.css"

export function SearchResultsView(props) {
    //return (<div>"__Search Result View__"</div>);

    return(
        <div>
            {props.searchResults.map(function resultsCB(result) {

                    function dishClickACB(natEvt) {props.dishClick(result)}

                    return(    
                    <span key={result.id} className="resultView" onClick={dishClickACB}>
                        <img src={result.image} height="100"></img>
                            <div>
                                {result.title}
                            </div>
                    </span>)
                })}
        </div>
    )
}