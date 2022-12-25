import ToolBarButton from "./windowElements/ToolBarButton";
import ToolBarSelector from "./windowElements/ToolBarSelector";

export default function Properties() {
	return(
		<div class="topBarContent" data-tauri-drag-region>
			<ToolBarButton icon={'../../src-tauri/icons/tb_sidebar.svg'}/>
			<div class="toolBarSpacer" data-tauri-drag-region></div>
			<ToolBarButton icon={'../../src-tauri/icons/tb_start.svg'}/>
			<ToolBarButton icon={'../../src-tauri/icons/tb_play.svg'}/>
			<ToolBarButton icon={'../../src-tauri/icons/tb_end.svg'}/>
			<div class="toolBarSpacer" data-tauri-drag-region></div>
			<ToolBarSelector
				buttons={[
					{"icon": '../src-tauri/icons/tb_start.svg'},
					{"icon": '../src-tauri/icons/tb_properties.svg'}
				]}/>
		</div>
	);
}