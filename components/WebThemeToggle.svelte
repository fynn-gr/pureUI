<script lang="ts">
import { theme } from "@/ts/Stores";
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
	class:dark={$theme == "dark"}
	on:click={() => {
		$theme == "dark" ? ($theme = "light") : ($theme = "dark");
	}}
>
	<img
		src={topBarShort ? `./icons/${topBarShort}/sun.svg` : ""}
		alt={"toggle Theme"}
		id="sun"
	/>
	<img
		src={topBarShort ? `./icons/${topBarShort}/moon.svg` : ""}
		alt={"toggle Theme"}
		id="moon"
	/>
</button>
