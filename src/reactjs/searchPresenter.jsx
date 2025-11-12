import { observer } from "mobx-react-lite";
import { SuspenseView } from "/src/views/suspenseView.jsx";
import {SearchFormView} from "/src/views/searchFormView.jsx"
import {SearchResultsView} from "/src/views/searchResultsView.jsx"

const Search = observer(
    function SearchRender(props) {
    
        // ACBs for Search Form View
        function searchQueryACB(query){props.model.setSearchQuery(query)}
        function searchTypeACB(type){props.model.setSearchType(type)}
        function searchClickACB(){props.model.doSearch(props.model.searchParams)}

        // ACBS for Search Results View
        function resultsACB(selectedDish){
            //console.log("Custom event handled")
            props.model.setCurrentDishId(selectedDish.id)
        }

        return (
        <div>
            <SearchFormView dishTypeOptions = {["starter","main course","dessert"]}
                            text = {props.model.searchParams.query}
                            type = {props.model.searchParams.type}
                            onInputChange = {searchQueryACB}
                            onSelectChange = {searchTypeACB}
                            onButtonClick = {searchClickACB}/>
            {props.model.searchResultsPromiseState.data 
            && <SearchResultsView searchResults = {props.model.searchResultsPromiseState.data || []}
                                    dishClick={resultsACB}/> 
            || <SuspenseView promise = {props.model.searchResultsPromiseState.promise}
                            error = {props.model.searchResultsPromiseState.error}/>}
        </div>
        )
    }

);

export {Search}