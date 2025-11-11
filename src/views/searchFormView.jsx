import "/src/style.css"

export function SearchFormView(props) {
    //return (<div>"__Search Form View__"</div>)

    function onChangeInputFormViewACB(natEvt) {props.onInputChange(natEvt.target.value)}
    function onChangeSelectFormViewACB(natEvt) {props.onSelectChange(natEvt.target.value)}
    function onClickButtonFormViewACB(natEvt) {props.onButtonClick()}

    return(
        <div>
            <input value={props.text || ""} onChange={onChangeInputFormViewACB}/>
            <select value ={props.type || ""} onChange={onChangeSelectFormViewACB}>
                <option value="">Choose:</option>
                {props.dishTypeOptions.map(function optionsCB(option) {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
            <button title="search" value="Search!" onClick={onClickButtonFormViewACB}/>
        </div>
    )
}