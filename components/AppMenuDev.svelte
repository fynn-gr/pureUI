<script lang="ts">
import { uiPlatform, theme, settings } from "@/ts/Stores.svelte";
import AppMenu from "./AppMenu.svelte";
import { saveSettings } from "@/ts/SaveLoad.svelte";

interface Props {
	platforms?: Array<"mac" | "win" | "web" | "tahoe">;
	themes?: boolean;
	appName: string;
	children?: any;
}

let {
	platforms = ["mac", "win", "web", "tahoe"],
	themes = true,
	appName,
	children,
}: Props = $props();
</script>

<AppMenu name="Dev">
	{#if platforms.includes("mac")}
		<button
			class="app-menu-item"
			onclick={() => {
				$uiPlatform = "mac";
				saveSettings($settings, $uiPlatform, appName);
			}}
		>
			{#if $uiPlatform == "mac"}
				<img src="./icons/app_menu/checked.svg" alt="" />
			{/if}
			<p class="name">mac</p>
		</button>
	{/if}
	{#if platforms.includes("tahoe")}
		<button
			class="app-menu-item"
			onclick={() => {
				$uiPlatform = "tahoe";
				saveSettings($settings, $uiPlatform, appName);
			}}
		>
			{#if $uiPlatform == "tahoe"}
				<img src="./icons/app_menu/checked.svg" alt="" />
			{/if}
			<p class="name">tahoe</p>
		</button>
	{/if}
	{#if platforms.includes("win")}
		<button
			class="app-menu-item"
			onclick={() => {
				$uiPlatform = "win";
				saveSettings($settings, $uiPlatform, appName);
			}}
		>
			{#if $uiPlatform == "win"}
				<img src="./icons/app_menu/checked.svg" alt="" />
			{/if}
			<p class="name">win</p>
		</button>
	{/if}
	{#if platforms.includes("web")}
		<button
			class="app-menu-item"
			onclick={() => {
				$uiPlatform = "web";
				saveSettings($settings, $uiPlatform, appName);
			}}
		>
			{#if $uiPlatform == "web"}
				<img src="./icons/app_menu/checked.svg" alt="" />
			{/if}
			<p class="name">web</p>
		</button>
	{/if}
	{#if themes}
		<div class="seperator"></div>
		<button
			class="app-menu-item"
			onclick={() => {
				$theme = "dark";
			}}
		>
			{#if $theme == "dark"}
				<img src="./icons/app_menu/checked.svg" alt="" />
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
				<img src="./icons/app_menu/checked.svg" alt="" />
			{/if}
			<p class="name">light</p>
		</button>
	{/if}

	{@render children?.()}
</AppMenu>
