<script lang="ts">
import { uiPlatform } from "@/ts/Stores";
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
			topBarType = "toolbar-button";
			topBarShort = "tool_bar";
		} else if (cls.classList.contains("buttonbar")) {
			topBarType = "buttonbar-button";
			topBarShort = "button_bar";
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
					state = "";
				} else {
					state = b.value;
				}
			}}
		>
			<img
				src={topBarShort ? `./icons/${topBarShort}/${b.icon}.svg` : ""}
				alt={b.toolTip}
			/>
		</button>
	{/each}
</div>
