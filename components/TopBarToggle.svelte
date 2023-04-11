<script lang="ts">

	export let icon: string;
	export let iconActive: string = null;
	export let active: boolean;
	export let activeColor: string = null;
	export let toolTip: string;
	export let disabled = false;

</script>

<button
	on:click={() => {!disabled ? active = !active : active = active}}
	disabled={disabled}
	style={`background-color: ${active ? activeColor : 'none'};`}
>

	{#if active}
		<img
			src={iconActive != null ? iconActive : icon}
			alt={toolTip}
		>
	{:else}
		<img
			src={icon}
			alt={toolTip}
		>
	{/if}

</button>