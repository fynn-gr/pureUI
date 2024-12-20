<script lang="ts">
import type { MouseEventHandler } from "svelte/elements";

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

<div class="win-buttons-ms" data-tauri-drag-region>
	{#if !CloseOnly}
		<button onclick={onMin} class:disabled={CanMinimize == false}>
			<img src="./icons/native/winButtonsMSMin.svg" alt="" draggable="false" />
		</button>
		<button onclick={onMax} class:disabled={CanMaximise == false}>
			<img src="./icons/native/winButtonsMSMax.svg" alt="" draggable="false" />
		</button>
	{/if}
	<button onclick={onClose} class="close" class:disabled={CanClose == false}>
		<img src="./icons/native/winButtonsMSClose.svg" alt="" draggable="false" />
	</button>
</div>
