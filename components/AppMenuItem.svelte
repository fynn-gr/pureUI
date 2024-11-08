<script lang="ts">
import { menuHandler } from "@/ts/Stores";

export let id: string;
export let name: string;
export let accelerator: string | null = null;
export let disabled: boolean = false;
export let icon: string | null = null;
export let checked: string | null = null;
</script>

<button
	class="app-menu-item"
	class:disabled
	on:click={() => {
		$menuHandler.handle(id);
	}}
>
	{#if checked == "true"}
		<img src="./icons/menu_win/checked.svg" alt="" />
	{:else if checked == "false"}
		<img src="" alt="" style="visibility: hidden;" />
	{:else if icon != null}
		<img src={icon} alt="" />
	{/if}
	<p class="name">{name}</p>
	{#if accelerator != null}
		<p class="accelerator">{accelerator}</p>
	{/if}
</button>
