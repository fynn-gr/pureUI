import SettingsContent from "@/lib/SettingsContent";
import "@/pureUI/scss/_settingsWebContainer.scss";

export default function SettingsWebContainer() {
	function onChange() {
		return;
	}

	return (
		<dialog className="settings">
			<div className="topbar web-settings" data-tauri-drag-region>
				<p className="window-title" data-tauri-drag-region>
					Settings
				</p>
				<div className="win-buttons-web">
					<button
						onClick={() => {
						(document.querySelector("dialog") as HTMLDialogElement | null)?.close();
						}
					}
					>
						<img src="/icons/native/winButtonsWebClose.svg" alt="" />
					</button>
				</div>
			</div>

			<SettingsContent onChange={onChange} version="0.1" />
		</dialog>
	);
}
