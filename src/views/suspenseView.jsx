import "/src/style.css"

 export function SuspenseView(props) {
    //return (<div>"__Suspense View__"</div>);

    return (
        <div>
            {!props.promise && <span>no data</span>}
            {props.promise && props.error && <span>{props.error.toString()}</span> }
            {props.promise && !props.error && <img src="https://brfenergi.se/iprog/loading.gif"/>}
        </div>
    )
}