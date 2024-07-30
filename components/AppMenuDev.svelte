<script lang="ts">
import { uiPlatform, theme } from "@/ts/Stores";
import AppMenu from "./AppMenu.svelte";
</script>

<AppMenu name="Dev">
	<button
		class="app-menu-item"
		on:click={() => {
			$uiPlatform = "mac";
		}}
	>
		{#if $uiPlatform == "mac"}
			<img src="./icons/menu_win/checked.svg" alt="" />
		{/if}
		<p class="name">mac</p>
	</button>
	<button
		class="app-menu-item"
		on:click={() => {
			$uiPlatform = "win";
		}}
	>
		{#if $uiPlatform == "win"}
			<img src="./icons/menu_win/checked.svg" alt="" />
		{/if}
		<p class="name">win</p>
	</button>
	<button
		class="app-menu-item"
		on:click={() => {
			$uiPlatform = "web";
		}}
	>
		{#if $uiPlatform == "web"}
			<img src="./icons/menu_win/checked.svg" alt="" />
		{/if}
		<p class="name">web</p>
	</button>
	<div class="seperator" />
	<button
		class="app-menu-item"
		on:click={() => {
			$theme = "dark";
		}}
	>
		{#if $theme == "dark"}
			<img src="./icons/menu_win/checked.svg" alt="" />
		{/if}
		<p class="name">dark</p>
	</button>
	<button
		class="app-menu-item"
		on:click={() => {
			$theme = "light";
		}}
	>
		{#if $theme == "light"}
			<img src="./icons/menu_win/checked.svg" alt="" />
		{/if}
		<p class="name">light</p>
	</button>

	<slot />
</AppMenu>
