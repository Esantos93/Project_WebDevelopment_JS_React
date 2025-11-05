export function SidebarView(props){
    //return "SidebarView stub: number is "+props.number + " and we have "+props.dishes.length+ " dishes";
    return (
    <div>
        <button disabled={props.number<=1}>-</button>
        <div>{props.number}</div>
        <button>+</button>
    </div>
    )
}
