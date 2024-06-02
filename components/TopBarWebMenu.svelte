<script lang="ts">
import { onMount } from "svelte";
import { clickOutside } from "@/pureUI/modules/utils";

let self: HTMLElement;
let exposed = false;

onMount(() => {

});
</script>

<div
	class="topbar-webmenu"
	class:exposed
	use:clickOutside={() => {
		exposed = false;
	}}
>
	<button
		bind:this={self}
		class="topbar-button"
		on:click={e => {
			exposed = !exposed;
		}}
		title={"App Menu"}
	>
		<p class="logo">poly <b>Refsheet</b></p>
	</button>

	{#if exposed}
		<div class="popover">
			<a href="">Home</a>
            <a href="">Fairytale</a>
		</div>
	{/if}
</div>
