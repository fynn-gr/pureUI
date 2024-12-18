<script lang="ts">

interface Props {
	name: string,
	icon: string | null,
	onClick: Function,
	active: boolean,
	exposed: boolean
}

let {
	name, icon, onClick, active, exposed
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
		<button
			class="expander"
			onclick={e => {
				e.stopPropagation();
				exposed = !exposed;
			}}
		>
			<img src="./icons/std/dropdown_arrow.svg" alt="" />
		</button>
		{#if icon}
			<img src={`./icons/top_bar/${icon}.svg`} alt="" class="icon" />
		{/if}
		<p>{name}</p>
	</div>

	{#if exposed}
		<div class="content">
			<slot />
		</div>
	{/if}
</div>
