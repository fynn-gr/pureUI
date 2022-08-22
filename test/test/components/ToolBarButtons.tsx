export default function (icons:String, icon:String, onClick:any) {
    return (
        <button class="toolBarButton" onClick={onClick}>
            <object class="icon" data={icons + "" + icon + ".svg"}></object>
        </button>
    );
}