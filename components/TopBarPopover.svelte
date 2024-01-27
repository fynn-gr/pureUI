<script lang="ts">
	import { onMount } from "svelte";
	import { uiPlatform } from "@/stores";
	import { clickOutside } from "@/utils";

	export let icon: string;
	export let toolTip: string;
	export let disabled = false;

	let self: HTMLElement;
	let topBarType;
	let topBarShort;
	let exposed = false;

	onMount(() => {
		let cls = self;
		while (cls.parentElement) {
			cls = cls.parentElement;

			if (cls.classList.contains("toolbar")) {
				topBarType = "toolbar-button";
				topBarShort = "tb";
			} else if (cls.classList.contains("buttonbar")) {
				topBarType = "buttonbar-button";
				topBarShort = "bb";
			}
		}
	});
</script>

<div
	class="topbar-popover"
	class:exposed
	use:clickOutside
	on:clickOutside={() => {
		exposed = false;
		console.log("clicked outside");
	}}
>
	<button
		bind:this={self}
		class="topbar-button"
		class:disabled
		on:click={(e) => {
			exposed = !exposed;
		}}
		{disabled}
		title={toolTip}
	>
		<img
			src={topBarShort
				? `./icons/${topBarShort}_${$uiPlatform}/${icon}.svg`
				: ""}
			alt={toolTip}
		/>
	</button>

	{#if exposed}
		<div class="popover">
			<slot />
		</div>
	{/if}
</div>
