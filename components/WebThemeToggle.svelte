<script lang="ts">
import { theme } from "@/ts/Stores.svelte";
import { onMount } from "svelte";

let self: HTMLElement;

onMount(() => {});
</script>

<button
	bind:this={self}
	class="topbar-button theme-toggle"
	class:dark={$theme == "dark"}
	onclick={() => {
		$theme == "dark" ? ($theme = "light") : ($theme = "dark");
	}}
>
	<img src={`./icons/topbar/sun.svg`} alt={"toggle Theme"} id="sun" />
	<img src={`./icons/topbar/moon.svg`} alt={"toggle Theme"} id="moon" />
</button>
