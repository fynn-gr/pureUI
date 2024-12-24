<script lang="ts">
import { onMount } from "svelte";

interface Props {
	id: string;
	icon: string;
	onClick: Function;
	toolTip: string;
	disabled?: boolean;
}

let { id = "btn", icon, onClick, toolTip, disabled = false }: Props = $props();

let self: HTMLElement;

onMount(() => {});
</script>

<button
	id={`btn-${id}`}
	bind:this={self}
	class="topbar-button"
	class:disabled
	onclick={() => {
		!disabled ? onClick() : console.log("false");
	}}
	{disabled}
>
	<img src={`./icons/top_bar/${icon}.svg`} alt={toolTip} />
</button>
