<script lang="ts">
import { contextMenu } from "@/ts/Stores";
import { clickOutside } from "@/pureUI/modules/utils";
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
{#if $contextMenu != null}
	<div
		class="context-menu"
		style={`inset: ${$contextMenu.position.y}px auto auto ${$contextMenu.position.x}px;`}
		use:clickOutside={() => {
			$contextMenu = null;
		}}
		onclick={e => {
			$contextMenu = null;
		}}
	>
		{#each $contextMenu.content as item}
			{#if item.name}
				<button class="item" onclick={item.action}>
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
				<div class="seperator"></div>
			{/if}
		{/each}
	</div>
{/if}
