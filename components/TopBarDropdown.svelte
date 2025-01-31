<script lang="ts">
import { onMount } from "svelte";
import { clickOutside } from "@/pureUI/modules/utils";

interface Props {
	icon: string | null;
	toolTip: string;
	disabled?: boolean;
}
let { icon, toolTip, disabled = false }: Props = $props();

let self: HTMLElement;
let exposed = $state(false);

onMount(() => {});
</script>

<div
	class="topbar-dropdown"
	class:attached={icon == null}
	class:exposed
	use:clickOutside={() => {
		exposed = false;
		console.log("clicked outside");
	}}
>
	<button
		bind:this={self}
		class="topbar-button"
		class:disabled
		onclick={e => {
			exposed = !exposed;
		}}
		{disabled}
		title={toolTip}
	>
		{#if icon != null}
			<img src={`./icons/topbar/${icon}.svg`} alt={toolTip} />
		{/if}
		<img src="./icons/std/dropdown_arrow.svg" alt="" class="arrow" />
	</button>

	{#if exposed}
		<div class="dropdown">
			<slot />
		</div>
	{/if}
</div>
