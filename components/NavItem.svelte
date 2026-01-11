<script lang="ts">
interface Props {
	name: string;
	icon: string | null;
	onClick: Function;
	active: boolean;
	depth?: number;
}

let { name, icon, onClick, active, depth = 0 }: Props = $props();
</script>

<button
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
	{#if icon}
		<img src={`./icons/topbar/${icon}.svg`} alt="" class="icon" />
	{/if}
	<p>{name}</p>
</button>
