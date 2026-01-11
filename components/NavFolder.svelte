<script lang="ts">
	interface Props {
		name: string;
		icon: string | null;
		onClick?: Function;
		active: boolean;
		exposed: boolean;
		depth?: number;
		children?: any;
	}
	let {
		name,
		icon,
		onClick = () => {},
		active,
		exposed,
		depth = 0,
		children
	}: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="nav-folder" class:exposed>
	<div
		class="nav-item"
		class:active
		onclick={() => {
			active = !active;
			onClick();
		}}
	>
		{#each Array(depth) as _, i}
			<div class="indent" style={`width: 14px;`}></div>
		{/each}
		<button
			class="expander"
			onclick={(e) => {
				e.stopPropagation();
				exposed = !exposed;
			}}
		>
			<img src="./icons/std/dropdown_arrow.svg" alt="" />
		</button>
		{#if icon}
			<img src={`./icons/topbar/${icon}.svg`} alt="" class="icon" />
		{/if}
		<p>{name}</p>
	</div>

	{#if exposed}
		<div class="content">
			{@render children()}
		</div>
	{/if}
</div>
