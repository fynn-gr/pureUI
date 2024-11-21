<script lang="ts">
import { onMount } from "svelte";

export let id: string = "btn";
export let icon: string;
export let onClick: Function;
export let toolTip: string;
export let disabled = false;

let self: HTMLElement;

onMount(() => {});
</script>

<button
	id={`btn-${id}`}
	bind:this={self}
	class="topbar-button"
	class:disabled
	on:click={!disabled ? onClick() : null}
	{disabled}
>
	<img src={`./icons/top_bar/${icon}.svg`} alt={toolTip} />
</button>
