<script lang="ts">
export let name: string;
export let icon: string | null = null;
export let onClick: Function = () => {};
export let active: boolean;
export let exposed: boolean = false;
</script>

<div class="nav-folder" class:exposed>
	<button class="nav-item" class:active on:click={() => {
        active = !active;
        onClick();
    }}>
		<button
			class="expander"
			on:click={e => {
                e.stopPropagation();
				exposed = !exposed;
			}}
		>
			<img src="./icons/std/dropdown_arrow.svg" alt="" />
		</button>
		{#if icon}
			<img src={`./icons/tool_bar/${icon}.svg`} alt="" class="icon" />
		{/if}
		<p>{name}</p>
	</button>

	{#if exposed}
		<div class="content">
			<slot />
		</div>
	{/if}
</div>
