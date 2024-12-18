<script lang="ts">
import { uiPlatform, theme } from "@/ts/Stores";
import AppMenu from "./AppMenu.svelte";
import { saveSettings } from "@/ts/SaveLoad";

interface Props {
	platforms: "mac" | "win" | "web";
	themes: boolean;
}

let { platforms, themes }: Props = $props();

let state = $state();
</script>

<AppMenu name="Dev">
	{#if platforms.includes("mac")}
		<button
			class="app-menu-item"
			onclick={() => {
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
			onclick={() => {
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
			onclick={() => {
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
			onclick={() => {
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
			onclick={() => {
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
