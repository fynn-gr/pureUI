export default function Properties(props:any) {
    return(
        <div
			class={props.status + " properties"}
			style={{"width": `${props.width}px`}}>
			<div class="propertieRow">
				<p class="propName">Number</p>
				<input class="propValue" type="number" value="15168"></input>
			</div>
            <div class="propertieRow">
				<p class="propName">klick me</p>
				<button class="propValue">klick here</button>
			</div>
			<div class="propertieRow">
				<p class="propName">test String</p>
				<input class="propValue" type="text" value="Foo Bar Spam eggs"></input>
			</div>

			<div class="panel">
				<button class="panelName">
                    <object data="../src-tauri/icons/panelIcon.svg"></object>
                    <input class="panelCheckbox" type="checkbox"></input>
                    <p>This is a Panel</p>
                </button>
				<div class="propertieRow">
					<p class="propName">test slider</p>
					<input class="propValue" type="range" value="1"></input>
				</div>
		
				<div class="panelSub">
                <button class="panelName">
                <object data="../src-tauri/icons/panelIcon.svg"></object>
                    <p>This is a Panel</p>
                </button>
					<div class="propertieRow">
						<p class="propName">checkbox</p>
						<input class="propValue" type="checkbox" value="true"></input>
                        <p class="propDescription">explination</p>
					</div>
                    <div class="propertieRow inactive">
                        <p class="propName">A new Row</p>
                        <input class="propValue"type="text"></input>
                    </div>
                    <div class="propertieRow">
                        <p class="propName">color picker</p>
                        <input class="propValue" type="color" value="#567812"></input>
                    </div>

				</div>
			</div>

			<div class="panel">
                <button class="panelName">
                <object data="../src-tauri/icons/panelIcon.svg"></object>
                    <p>This is a Panel</p>
                </button>
				<div class="propertieRow">
					<p class="propName">Number</p>
					<input class="propValue" type="number" value="15168"></input>
				</div>
			</div>
		</div>
    );
}