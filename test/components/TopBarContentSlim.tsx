export default function Properties() {
	return(
		<div class="topBarContent" data-tauri-drag-region>
			<div style="flex: 1;" data-tauri-drag-region></div>
			<div class="tabContainer">
				<button class="active">Frame</button>
				<button class="">Screen</button>
				<button class="">Color</button>
			</div>

			<div class="buttonBarSelector">
				<button class="buttonBarButton">
					<object class="icon" data="../../src-tauri/icons/tb_sidebar.svg"></object>
				</button>
				<button class="buttonBarButton active">
					<object class="icon" data="../../src-tauri/icons/tb_play.svg"></object>
				</button>
			</div>

			<div style="flex: 1;" data-tauri-drag-region></div>
		</div>
	);
}