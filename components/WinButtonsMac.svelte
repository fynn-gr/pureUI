<script lang="ts">
import type { MouseEventHandler } from "svelte/elements";

let hover = false;

interface Props {
	onMin?: MouseEventHandler<HTMLElement>;
	onMax?: MouseEventHandler<HTMLElement>;
	onClose?: MouseEventHandler<HTMLElement>;
	CanMaximise?: boolean;
	CanMinimize?: boolean;
	CanClose?: boolean;
	CloseOnly?: boolean;
}

let {
	onMin = () => {},
	onMax = () => {},
	onClose = () => {},
	CanMaximise = true,
	CanMinimize = true,
	CanClose = true,
	CloseOnly = true,
}: Props = $props();
</script>

<div class="win-buttons-mac" data-tauri-drag-region>
	<button
		onmouseenter={() => {
			hover = true;
		}}
		onmouseleave={() => {
			hover = false;
		}}
		onclick={onClose}
		class:disabled={CanClose == false}
	>
		<img src="./icons/native/winButtonsMacClose.svg" alt="" />
	</button>
	<button
		onmouseenter={() => {
			hover = true;
		}}
		onmouseleave={() => {
			hover = false;
		}}
		onclick={onMin}
		class:disabled={CanMinimize == false}
	>
		<img src="./icons/native/winButtonsMacMin.svg" alt="" />
	</button>
	<button
		onmouseenter={() => {
			hover = true;
		}}
		onmouseleave={() => {
			hover = false;
		}}
		onclick={onMax}
		class:disabled={CanMaximise == false}
	>
		<img src="./icons/native/winButtonsMacMax.svg" alt="" />
	</button>
</div>
