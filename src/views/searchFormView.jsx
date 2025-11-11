import "/src/style.css"

export function SearchFormView(props) {
    //return (<div>"__Search Form View__"</div>)

    function onChangeInputACB(natEvt) {props.onInputChange(natEvt.target.value)}
    function onChangeSelectACB(natEvt) {props.onSelectChange(natEvt.target.value)}
    function onClickButtonACB(natEvt) {props.onButtonClick()}

    return(
        <div>
            <input value={props.text || ""} onChange={onChangeInputACB}/>
            <select value ={props.type || ""} onChange={onChangeSelectACB}>
                <option value="">Choose:</option>
                {props.dishTypeOptions.map(function optionsCB(option) {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
            <button title="search" value="Search!" onClick={onClickButtonACB}/>
        </div>
    )
}