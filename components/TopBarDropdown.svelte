<script lang="ts">
import { onMount } from "svelte";
import { clickOutside } from "@/pureUI/modules/utils";

export let icon: string | null;
export let toolTip: string;
export let disabled = false;

let self: HTMLElement;
let topBarType;
let topBarShort: string;
let exposed = false;

onMount(() => {
	let cls = self;
	while (cls.parentElement) {
		cls = cls.parentElement;

		if (cls.classList.contains("toolbar")) {
			topBarType = "toolbar-button";
			topBarShort = "tool_bar";
		} else if (cls.classList.contains("buttonbar")) {
			topBarType = "buttonbar-button";
			topBarShort = "button_bar";
		}
	}
});
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
		on:click={e => {
			exposed = !exposed;
		}}
		{disabled}
		title={toolTip}
	>
		{#if icon != null}
			<img
				src={topBarShort ? `./icons/${topBarShort}/${icon}.svg` : ""}
				alt={toolTip}
			/>
		{/if}
		<img src="./icons/std/dropdown_arrow.svg" alt="" class="arrow" />
	</button>

	{#if exposed}
		<div class="dropdown">
			<slot />
		</div>
	{/if}
</div>
