export default function Properties() {
	return(
		<div class="topBarContent" data-tauri-drag-region>
			<div style="flex: 1;" data-tauri-drag-region></div>
			<div class="tabContainer">
				<button class="active">Frame</button>
				<button class="">Screen</button>
				<button class="">Color</button>
			</div>
			<div style="flex: 1;" data-tauri-drag-region></div>
		</div>
	);
}