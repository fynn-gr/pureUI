<script lang="ts">
import { onMount } from "svelte";

let self: HTMLElement;
let topBarType;
let topBarShort;

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
	bind:this={self}
	class="topbar-button theme-toggle"
	on:click={() => {

    }}
>
	<img
		src={topBarShort ? `./icons/${topBarShort}/sun.svg` : ""}
		alt={"toggle Theme"}
	/>
	<img
		src={topBarShort ? `./icons/${topBarShort}/moon.svg` : ""}
		alt={"toggle Theme"}
	/>
</button>
