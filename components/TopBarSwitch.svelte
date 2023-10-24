<script lang="ts">
	import { onMount } from "svelte";

	export let uiPlatform: string;
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

			if (cls.classList.contains("toolBar")) {
				topBarType = "toolBarButton";
				topBarShort = "tb";
			} else if (cls.classList.contains("buttonBar")) {
				topBarType = "buttonBarButton";
				topBarShort = "bb";
			}
		}
	});
</script>

<div class="topBarGroup">
	{#each buttons as b, i}
		<button
			bind:this={self}
			class="topBarButton"
			class:active={state === b.value}
			disabled={b.disabled}
			on:click={() => {
				if (state === b.value) {
					state = "";
				} else {
					state = b.value;
				}
			}}
		>
			<img
				src={`../pureUI/icons/${topBarShort}_${uiPlatform}/${b.icon}.svg`}
				alt={b.toolTip}
			/>
		</button>
	{/each}
</div>
