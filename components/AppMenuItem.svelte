<script lang="ts">
	import { emit } from "@tauri-apps/api/event";

	export let id: string;
	export let name: string;
	export let accelerator: string;
</script>

<button
	class="app-menu-item"
	on:click={() => {
		emit("menu", id);
	}}
>
	<p class="name">{name}</p>
	<p class="accelerator">{accelerator}</p>
</button>
