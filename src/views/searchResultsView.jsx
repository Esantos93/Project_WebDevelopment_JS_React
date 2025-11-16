import "/src/style.css"

export function SearchResultsView(props) {
    //return (<div>"__Search Result View__"</div>);

    return(
        <div className="searchResultsView">

            {props.searchResults.map(function resultsCB(result) {

                    function dishClickACB() {
                        props.dishClick(result)
                        window.location.hash="#/details"
                    }

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