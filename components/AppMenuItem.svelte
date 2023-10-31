<script lang="ts">
	import { emit } from "@tauri-apps/api/event";

	export let id: string;
	export let name: string;
	export let accelerator: string = null;
	export let disabled: boolean = false;
	export let icon: string = null;
	export let checked: string = null;
</script>

<button
	class="app-menu-item"
	class:disabled
	on:click={() => {
		emit("menu", id);
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
