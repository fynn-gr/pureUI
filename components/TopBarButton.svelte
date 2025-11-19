<script lang="ts">
import { onMount } from "svelte";

interface Props {
	id: string;
	icon: string;
	onClick: Function;
	toolTip: string;
	disabled?: boolean;
	addClass?: string;
}

let {
	id = "btn",
	icon,
	onClick,
	toolTip,
	disabled = false,
	addClass = "",
}: Props = $props();

let self: HTMLElement;

onMount(() => {});
</script>

<button
	id={`btn-${id}`}
	bind:this={self}
	class={`topbar-button ${addClass}`}
	class:disabled
	title={toolTip}
	onclick={() => {
		!disabled ? onClick() : console.log("false");
	}}
	{disabled}
>
	<img src={`./icons/topbar/${icon}.svg`} alt={toolTip} />
</button>
