<script lang="ts">
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

onMount(() => {});
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
			<img src={`./icons/top_bar/${b.icon}.svg`} alt={b.toolTip} />
		</button>
	{/each}
</div>
