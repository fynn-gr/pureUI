import { Show } from "solid-js";
import WinButtonsMS from '../windowElements/winButtonsMS';
import WinButtonsMac from '../windowElements/winButtonsMac';

export default function TopBar(props:any) {

  console.log(props.platform);

  return (
    <div class={"topBar " + props.type} data-tauri-drag-region>
      <div class="topBarContainer">
        <Show when={props.platform === 'dev' ||
                    props.platform === 'macos'}>
          <WinButtonsMac/>
        </Show>

        <props.content/>

        <Show when={props.platform === 'dev' ||
                    props.platform === 'win' ||
                    props.platform === 'linux'}>
          <WinButtonsMS/>
        </Show>
      </div>
    </div>
  );
}
