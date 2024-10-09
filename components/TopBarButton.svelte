<script lang="ts">
import { onMount } from "svelte";

export let id: string = "btn";
export let icon: string;
export let onClick: Function;
export let toolTip: string;
export let disabled = false;

let self: HTMLElement;
let topBarType;
let topBarShort: string;

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

<button
	id={`btn-${id}`}
	bind:this={self}
	class="topbar-button"
	class:disabled
	on:click={!disabled ? onClick() : null}
	{disabled}
>
	<img
		src={topBarShort ? `./icons/${topBarShort}/${icon}.svg` : ""}
		alt={toolTip}
	/>
</button>
