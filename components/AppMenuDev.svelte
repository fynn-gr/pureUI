<script lang="ts">
	import { uiPlatform, theme } from "@/stores";
	import AppMenu from "./AppMenu.svelte";
</script>

<AppMenu name="Dev">
	<button
		class="app-menu-item"
		on:click={() => {
			$uiPlatform = "mac";
		}}
	>
		<p class="name">mac</p>
	</button>
	<button
		class="app-menu-item"
		on:click={() => {
			$uiPlatform = "win";
		}}
	>
		<p class="name">win</p>
	</button>
	<button
		class="app-menu-item"
		on:click={() => {
			$uiPlatform = "web";
		}}
	>
		<p class="name">web</p>
	</button>
	<div class="seperator" />
	<button
		class="app-menu-item"
		on:click={() => {
			$theme = "dark";
		}}
	>
		<p class="name">dark</p>
	</button>
	<button
		class="app-menu-item"
		on:click={() => {
			$theme = "light";
		}}
	>
		<p class="name">light</p>
	</button>
</AppMenu>
