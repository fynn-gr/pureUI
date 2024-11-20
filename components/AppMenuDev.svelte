<script lang="ts">
import { uiPlatform, theme } from "@/ts/Stores";
import AppMenu from "./AppMenu.svelte";
import { saveSettings } from "@/ts/SaveLoad";

export let platforms = ["mac", "win", "web"];
export let themes = true;
</script>

<AppMenu name="Dev">
	{#if platforms.includes("mac")}
		<button
			class="app-menu-item"
			on:click={() => {
				$uiPlatform = "mac";
				saveSettings();
			}}
		>
			{#if $uiPlatform == "mac"}
				<img src="./icons/menu_win/checked.svg" alt="" />
			{/if}
			<p class="name">mac</p>
		</button>
	{/if}
	{#if platforms.includes("win")}
		<button
			class="app-menu-item"
			on:click={() => {
				$uiPlatform = "win";
				saveSettings();
			}}
		>
			{#if $uiPlatform == "win"}
				<img src="./icons/menu_win/checked.svg" alt="" />
			{/if}
			<p class="name">win</p>
		</button>
	{/if}
	{#if platforms.includes("web")}
		<button
			class="app-menu-item"
			on:click={() => {
				$uiPlatform = "web";
				saveSettings();
			}}
		>
			{#if $uiPlatform == "web"}
				<img src="./icons/menu_win/checked.svg" alt="" />
			{/if}
			<p class="name">web</p>
		</button>
	{/if}
	{#if themes}
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
	{/if}

	<slot />
</AppMenu>
