<script lang="ts">
	export let onMin = () => {};
	export let onMax = () => {};
	export let onClose = () => {};
	export let CanMaximise = true;
	export let CanMinimize = true;
	export let CanClose = true;
	export let CloseOnly = false;
</script>

<div class="win-buttons-ms" data-tauri-drag-region>
	{#if !CloseOnly}
		<button on:click={onMin} class:disabled={CanMinimize == false}>
			<img src="./icons/winButtonsMSMin.svg" alt="" draggable="false" />
		</button>
		<button on:click={onMax} class:disabled={CanMaximise == false}>
			<img src="./icons/winButtonsMSMax.svg" alt="" draggable="false" />
		</button>
	{/if}
	<button on:click={onClose} class="close" class:disabled={CanClose == false}>
		<img src="./icons/winButtonsMSClose.svg" alt="" draggable="false" />
	</button>
</div>
