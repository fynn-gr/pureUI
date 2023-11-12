<script lang="ts">
	import { contextMenu } from "@/stores";
	import { clickOutside } from "@/utils";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="context-menu"
	style={`inset: ${$contextMenu.position.y}px auto auto ${$contextMenu.position.x}px;`}
	use:clickOutside
	on:click_outside={() => {
		$contextMenu = null;
	}}
	on:click={e => {
		$contextMenu = null;
	}}
>
	{#each $contextMenu.content as item}
		{#if item.name}
			<button class="item" on:click={item.action}>
				{#if item.icon}
					<img
						src={item.icon}
						alt=""
						style={item.iconColor ? "" : "filter: invert(1);"}
					/>
				{/if}
				<p class="name">{item.name}</p>
				{#if item.accelerator != null}
					<p class="accelerator">{item.accelerator}</p>
				{/if}
			</button>
		{:else}
			<div class="seperator" />
		{/if}
	{/each}
</div>
