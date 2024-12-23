<script lang="ts">
import "../../scss/index.scss";
import { tick } from "svelte";

import WinButtonsMac from "../WinButtonsMac.svelte";
import WinButtonsMs from "../WinButtonsMS.svelte";
import SettingsContent from "@/lib/SettingsContent.svelte";
import { writable } from "svelte/store";
import type { Settings } from "../../../ts/Types";
import { loadSettings, saveSettings } from "../../../ts/SaveLoad";
import { getTauriVersion, getVersion } from "@tauri-apps/api/app";
import { getCurrentWindow, LogicalSize } from "@tauri-apps/api/window";
import { settingsDefault } from "@/ts/SettingsDefault";

const settings = writable<Settings>(settingsDefault);
const theme = writable<string>("dark");
const uiPlatform = writable<"mac" | "win" | "web">("mac");
const appWindow = getCurrentWindow();

let version: string | undefined = $state();
let tauriVersion: string | undefined = $state();
getVersion().then(e => {
	version = e;
});
getTauriVersion().then(e => {
	tauriVersion = e;
});

async function setWindowHeight() {
	if ($uiPlatform == "mac") {
		let content: HTMLElement = document.querySelector(".content")!;
		await tick();
		let height = content.offsetHeight;
		console.log("window height", appWindow);
		appWindow.setSize(new LogicalSize(800, height + 80));
	} else {
		appWindow.setSize(new LogicalSize(800, 500));
	}
}

function onChange() {
	setWindowHeight();
	saveSettings($settings, $uiPlatform, "Refsheet");
}

loadSettings("Refsheet").then(e => {
	$settings = e.settings;
	$uiPlatform = e.uiPlatform;
});

$effect(() => {
	if ($settings.theme == "system") {
		$theme = window.matchMedia("(prefer-color-scheme: dark)").matches
			? "dark"
			: "light";
	} else {
		$theme = $settings.theme;
	}
});
</script>

<main class={`window-body settings  ${$theme} ${$uiPlatform}`}>
	<div class="topbar title-bar" data-tauri-drag-region>
		<div class="topbar-container" data-tauri-drag-region>
			{#if $uiPlatform == "mac"}
				<WinButtonsMac
					CanMaximise={false}
					CanMinimize={false}
					CloseOnly={true}
					onClose={() => {
						appWindow.close();
					}}
				/>
			{/if}

			<p class="window-title" data-tauri-drag-region>Settings</p>

			{#if $uiPlatform == "win"}
				<WinButtonsMs
					CanMaximise={false}
					CanMinimize={false}
					onClose={() => {
						appWindow.close();
					}}
					CloseOnly={true}
				/>
			{/if}
		</div>
	</div>

	<SettingsContent {settings} {onChange} {version} {tauriVersion} />

	{#if $uiPlatform == "mac"}
		<div class="window-rim"></div>
	{/if}
</main>
