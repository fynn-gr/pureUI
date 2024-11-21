<script lang="ts">
import { theme } from "@/ts/Stores";
import { onMount } from "svelte";

let self: HTMLElement;

onMount(() => {});
</script>

<button
	bind:this={self}
	class="topbar-button theme-toggle"
	class:dark={$theme == "dark"}
	on:click={() => {
		$theme == "dark" ? ($theme = "light") : ($theme = "dark");
	}}
>
	<img src={`./icons/top_bar/sun.svg`} alt={"toggle Theme"} id="sun" />
	<img src={`./icons/top_bar/moon.svg`} alt={"toggle Theme"} id="moon" />
</button>
