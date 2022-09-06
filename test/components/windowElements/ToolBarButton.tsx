export default function (props:any) {
    return (
        <button class="toolBarButton" onClick={props.event}>
            <object class="icon" data={props.icon}></object>
        </button>
    );
}