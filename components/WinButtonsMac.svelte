<script lang="ts">
	export let onMin = () => {};
	export let onMax = () => {};
	export let onClose = () => {};
	export let CanMaximise = true;
	export let CanMinimize = true;
	export let CanClose = true;
	let hover = false;
</script>

<div class="win-buttons-mac" data-tauri-drag-region>
	<button
		on:mouseenter={() => {
			hover = true;
		}}
		on:mouseleave={() => {
			hover = false;
		}}
		on:click={onClose}
		class:disabled={CanClose == false}
	>
		<img src="./icons/winButtonsMacClose.svg" alt="" />
	</button>
	<button
		on:mouseenter={() => {
			hover = true;
		}}
		on:mouseleave={() => {
			hover = false;
		}}
		on:click={onMin}
		class:disabled={CanMinimize == false}
	>
		<img src="./icons/winButtonsMacMin.svg" alt="" />
	</button>
	<button
		on:mouseenter={() => {
			hover = true;
		}}
		on:mouseleave={() => {
			hover = false;
		}}
		on:click={onMax}
		class:disabled={CanMaximise == false}
	>
		<img src="./icons/winButtonsMacMax.svg" alt="" />
	</button>
</div>
