<script lang="ts">
import { onMount } from "svelte";
import { clickOutside } from "@/pureUI/modules/utils";

interface Props {
	active: string;
	name: string;
}

let { active, name }: Props = $props();

let self: HTMLElement;
let exposed = $state(false);

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
		onclick={e => {
			exposed = !exposed;
		}}
		title={"Main Menu"}
	>
		<p>snug<b>{name}</b></p>
	</button>

	{#if exposed}
		<div class="popover">
			<a href="https://github.com/Fynn-G">
				<img class="svg-icon" src="./icons/web/home.svg" alt="" />
				<p>Fynn Gr.</p>
			</a>
			<a href="https://github.com/Fynn-gr">
				<img class="svg-icon" src="./icons/web/apps.svg" alt="" />
				<p>All Apps</p>
			</a>
			<a href="" class:active={active == "stagetune"}>
				<img src="./icons/web/stagetune.png" alt="" />
				<p>Stragetune</p>
				<p class="tag" style="background-color: #FF2D55;">Beta</p>
			</a>
			<a href="" class:active={active == "fairytale"}>
				<img src="./icons/web/fairytale.png" alt="" />
				<p>Fairytale</p>
				<p class="tag" style="background-color: #FF9500;">Alpha</p>
			</a>
			<a href="" class:active={active == "refsheet"}>
				<img src="./icons/web/refsheet.png" alt="" />
				<p>Refsheet</p>
				<p class="tag" style="background-color: #4F4F4F;">Alpha</p>
			</a>
			<a href="" class:active={active == "timeless"}>
				<img src="./icons/web/timeless.png" alt="" />
				<p>Timeless</p>
				<p class="tag" style="background-color: #00C7BE;">Alpha</p>
			</a>
		</div>
	{/if}
</div>
