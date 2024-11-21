<script lang="ts">
export let name: string;
export let icon: string | null = null;
export let onClick: Function;
export let active: boolean;
</script>

<button
	class="nav-item"
	class:active
	on:click={() => {
		active = !active;
		onClick();
	}}
>
	{#if icon}
		<img src={`./icons/top_bar/${icon}.svg`} alt="" class="icon" />
	{/if}
	<p>{name}</p>
</button>
