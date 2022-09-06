import { Show } from "solid-js";
import WinButtonsMS from '../windowElements/winButtonsMS';
import WinButtonsMac from '../windowElements/winButtonsMac';

export default function TopBar(props:any) {

  return (
    <div class="topBar" data-tauri-drag-region>
      <div class="topBarContainer">
        <Show when={props.platform === 'dev' ||
                    props.platform === 'macos'}>
          <WinButtonsMac/>
        </Show>

        <props.content/>

        <Show when={props.plaform === 'dev' ||
                    props.plaform === 'win' ||
                    props.plaform === 'linux'}>
          <WinButtonsMS/>
        </Show>
      </div>
    </div>
  );
}
