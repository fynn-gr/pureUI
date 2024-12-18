<script lang="ts">
let hover = false;

interface Props {
	onMin: Function;
	onMax: Function;
	onClose: Function;
	CanMaximise?: boolean;
	CanMinimize?: boolean;
	CanClose?: boolean;
	CloseOnly?: boolean;
}

let {
	onMin,
	onMax,
	onClose,
	CanMaximise,
	CanMinimize,
	CanClose,
	CloseOnly,
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
