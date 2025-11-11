import "/src/style.css"

export function SearchFormView(props) {
    //return (<div>"__Search Form View__"</div>)

    function onChangeInputACB(natEvt) {props.onInputChange(natEvt.target.value)}
    function onChangeSelectACB(natEvt) {props.onSelectChange(natEvt.target.value)}
    function onClickButtonACB(natEvt) {props.onButtonClick()}

    return(
        <div className="searchFormView">
            <h2>Search Form</h2>
            <input value={props.text || ""} onChange={onChangeInputACB}/>
            <select className="searchFormButton" value ={props.type || ""} onChange={onChangeSelectACB} style={{marginLeft: "30px"}}>
                <option value="">Choose:</option>
                {props.dishTypeOptions.map(function optionsCB(option) {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
            <button className="searchFormButton" title="search" value="Search!" onClick={onClickButtonACB}>Search!</button>
        </div>
    )
}