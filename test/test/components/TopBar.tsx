export default function TopBar(props:any) {
  return (
  <div class="topBar" data-tauri-drag-region>
    {props.type == "toolBar" ? <div class="toolBar" data-tauri-drag-region>
      
    </div> : null }
  </div>
  );
}
