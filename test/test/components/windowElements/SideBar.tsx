export default function (props:any) {
    return(
        <div
            class={props.status + " sideBar"}
            style={{"width": `${props.width}px`}}>
        </div>
    );
}