import { Show } from "solid-js";
import WinButtonsMS from '../windowElements/winButtonsMS';

export default function TopBar(props:any) {

  console.log(props.content)
  console.log(props.type)

  return (
    <div class="topBar" data-tauri-drag-region>
      <props.content/>
      <Show when={props.platform === 'win32' || 
                  props.platform === 'dev' ||
                  props.platform === 'linux'}>
        <WinButtonsMS/>
      </Show>
    </div>
  );
}
