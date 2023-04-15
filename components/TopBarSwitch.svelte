<script lang="ts">
	import { onMount } from "svelte";

	export let uiPlatform: string;
	export let buttons: Array<button>;
	export let state: number;

	interface button {
		icon: string,
		toolTip: string,
		disabled?: boolean,
	}

	let self: HTMLElement;
	let topBarType;
	let topBarShort;


	onMount(() => {
		let cls = self;
		while (cls.parentElement) {
			console.log(cls, cls.classList.contains("buttonBar"))
			cls = cls.parentElement;

			if (cls.classList.contains("toolBar")) {
				topBarType = "toolBarButton"
				topBarShort = "tb"
			} else if (cls.classList.contains("buttonBar")) {
				topBarType = "buttonBarButton"
				topBarShort = "bb"
			}
		}
	})

</script>


<div class="toolBarSwitch">

	{#each buttons as b, i}
	<button
		bind:this={self}
		class={topBarType}
		disabled={b.disabled}
		on:click={() => {
			state == i ? state = 0 : state = i;
		}}
	>
	
		<img src={`../pureUI/icons/${topBarShort}_${uiPlatform}/${b.icon}.svg`} alt={b.toolTip}>
	
	</button>
	{/each}

</div>