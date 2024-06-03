<script lang="ts">
import { onMount } from "svelte";
import { clickOutside } from "@/pureUI/modules/utils";

export let active: string;
let self: HTMLElement;
let exposed = false;

onMount(() => {});
</script>

<div
	class="topbar-webmenu"
	class:exposed
	use:clickOutside={() => {
		exposed = false;
	}}
>
	<button
		class="webmenu-btn"
		bind:this={self}
		on:click={e => {
			exposed = !exposed;
		}}
		title={"Main Menu"}
	>
		<p>snug<b>Refsheet</b></p>
	</button>

	{#if exposed}
		<div class="popover">
			<a href="https://github.com/Fynn-G">
				<img src="./icons/web/home.svg" alt="" />
				<p>Fynn Gr.</p>
			</a>
			<a href="">
				<img src="./icons/web/apps.svg" alt="" />
				<p>All Tools</p>
			</a>
			<a href="" class:active={active == "stagetune"}>
				<img src="./icons/web/stagetune.svg" alt="" />
				<p>Stragetune</p>
				<p class="tag" style="background-color: #FF2D55;">Beta</p>
			</a>
			<a href="" class:active={active == "fairytale"}>
				<img src="./icons/web/fairytale.svg" alt="" />
				<p>Fairytale</p>
				<p class="tag" style="background-color: #FF9500;">Alpha</p>
			</a>
			<a href="" class:active={active == "refsheet"}>
				<img src="./icons/web/refsheet.svg" alt="" />
				<p>Refsheet</p>
				<p class="tag" style="background-color: #4F4F4F;">Alpha</p>
			</a>
		</div>
	{/if}
</div>
