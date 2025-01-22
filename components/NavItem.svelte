<script lang="ts">
interface Props {
	name: string;
	icon: string | null;
	onClick: Function;
	active: boolean;
}

let { name, icon, onClick, active }: Props = $props();
</script>

<button
	class="nav-item"
	class:active
	onclick={() => {
		active = !active;
		onClick();
	}}
>
	{#if icon}
		<img src={`./icons/top_bar/${icon}.svg`} alt="" class="icon" />
	{/if}
	<p>{name}</p>
</button>
