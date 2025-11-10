import { observer } from "mobx-react-lite";
import { SuspenseView } from "/src/views/suspenseView.jsx";
import {SearchFormView} from "/src/views/searchFormView.jsx"
import {SearchResultsView} from "/src/views/searchResultsView.jsx"

const Search = observer(
    function SearchRender(props) {
        
        return (
        <div>
            <SearchFormView dishTypeOptions = {["starter","main course","dessert"]}
                            text = {props.model.searchParams.query}
                            type = {props.model.searchParams.type}/>
            {props.model.searchResultsPromiseState.data && <SearchResultsView searchResults = {props.model.searchResultsPromiseState.data}/> 
            || <SuspenseView promise = {props.model.searchResultsPromiseState.promise}
                            error = {props.model.searchResultsPromiseState.error}/>}
        </div>
        )
    }

);

export {Search}