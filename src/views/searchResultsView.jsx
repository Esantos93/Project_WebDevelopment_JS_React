import "/src/style.css"

export function SearchResultsView(props) {
    //return (<div>"__Search Result View__"</div>);

    return(
        <div className="searchResultsView">
        <h2>Search Results</h2>
            {props.searchResults.map(function resultsCB(result) {

                    function dishClickACB(natEvt) {props.dishClick(result)}

                    return(    
                    <span key={result.id} className="result" onClick={dishClickACB}>
                        <img src={result.image} height="100"></img>
                            <div>
                                {result.title}
                            </div>
                    </span>)
                })}
        </div>
    )
}