import { For } from 'solid-js';
import ToolBarButton from './ToolBarButton';

export default function (props:any) {
    return (
        <div class="toolBarSelector">
            <For each={props.buttons}>
                {(item, index) => <ToolBarButton
                    event={props.buttons[index()].event}
                    icon={props.buttons[index()].icon}/>}
            </For>
        </div>
    );
}