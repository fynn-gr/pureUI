<script lang="ts">
import SettingsContent from "@/lib/SettingsContent.svelte";
import "@/pureUI/scss/_settingsWebContainer.scss";
import { settings } from "@/ts/Stores";

function onChange() {}
</script>

<dialog class="settings">
	<div class="topbar web-settings" data-tauri-drag-region>
		<p class="window-title" data-tauri-drag-region>Settings</p>
		<div class="win-buttons-web">
			<button
				on:click={() => {
					document.querySelector("dialog")?.close();
				}}
			>
				<img src="/icons/native/winButtonsWebClose.svg" alt="" />
			</button>
		</div>
	</div>

	<SettingsContent {settings} {onChange}/>
</dialog>
