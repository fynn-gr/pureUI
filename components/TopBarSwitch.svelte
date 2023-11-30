<script lang="ts">
	import { uiPlatform } from "@/stores";
	import { onMount } from "svelte";

	export let buttons: Array<button>;
	export let state: string;

	interface button {
		icon: string;
		value: string;
		toolTip: string;
		disabled?: boolean;
	}

	let self: HTMLElement;
	let topBarType;
	let topBarShort;

	onMount(() => {
		let cls = self;
		while (cls.parentElement) {
			cls = cls.parentElement;

			if (cls.classList.contains("toolbar")) {
				topBarType = "toolbar-button"
				topBarShort = "tb"
			} else if (cls.classList.contains("buttonbar")) {
				topBarType = "buttonbar-button"
				topBarShort = "bb"
			}
		}
	});
</script>


<div class="topbar-group">

	{#each buttons as b, i}
	<button
		bind:this={self}
		class="topbar-button"
		class:active={state === b.value}
		class:disabled={b.disabled}
		disabled={b.disabled}
		on:click={() => {
			if (state === b.value) {
				state = ""
			} else {
				state = b.value
			}
		}}
	>
	
		<img src={topBarShort ? `./icons/${topBarShort}_${$uiPlatform}/${b.icon}.svg` : ''} alt={b.toolTip}>
	
	</button>
	{/each}
</div>
