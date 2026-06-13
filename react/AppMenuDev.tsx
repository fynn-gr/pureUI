import useStore from "@/ts/Stores";
import AppMenu from "./AppMenu";
import { saveSettings } from "@/ts/SaveLoad";

interface AppMenuDevProps {
	platforms?: Array<"mac" | "win" | "web" | "liquidGlass">;
	themes?: boolean;
	appName: string;
}

export default function AppMenuDev({
	platforms = ["mac", "win", "web", "liquidGlass"],
	themes = true,
	appName,
}: AppMenuDevProps) {
	const uiPlatformValue = useStore((s) => s.uiPlatform);
	const themeValue = useStore((s) => s.theme);
	const settingsValue = useStore((s) => s.settings);
	const setUiPlatform = useStore((s) => s.setUiPlatform);
	const setStoreTheme = useStore((s) => s.setTheme);

	function setPlatform(value: "mac" | "win" | "web" | "liquidGlass") {
		setUiPlatform(value);
		saveSettings(settingsValue, value, appName);
	}

	function setTheme(value: "dark" | "light") {
		setStoreTheme(value);
	}

	return (
		<AppMenu name="Dev">
			{platforms.includes("mac") && (
				<button className="app-menu-item" onClick={() => setPlatform("mac")}>
					{uiPlatformValue === "mac" && (
						<img src="./icons/app_menu/checked.svg" alt="" />
					)}
					<p className="name">mac</p>
				</button>
			)}
			{platforms.includes("liquidGlass") && (
				<button
					className="app-menu-item"
					onClick={() => setPlatform("liquidGlass")}
				>
					{uiPlatformValue === "liquidGlass" && (
						<img src="./icons/app_menu/checked.svg" alt="" />
					)}
					<p className="name">liquidGlass</p>
				</button>
			)}
			{platforms.includes("win") && (
				<button className="app-menu-item" onClick={() => setPlatform("win")}>
					{uiPlatformValue === "win" && (
						<img src="./icons/app_menu/checked.svg" alt="" />
					)}
					<p className="name">win</p>
				</button>
			)}
			{platforms.includes("web") && (
				<button className="app-menu-item" onClick={() => setPlatform("web")}>
					{uiPlatformValue === "web" && (
						<img src="./icons/app_menu/checked.svg" alt="" />
					)}
					<p className="name">web</p>
				</button>
			)}
			{themes && (
				<>
					<div className="seperator" />
					<button className="app-menu-item" onClick={() => setTheme("dark")}>
						{themeValue === "dark" && (
							<img src="./icons/app_menu/checked.svg" alt="" />
						)}
						<p className="name">dark</p>
					</button>
					<button className="app-menu-item" onClick={() => setTheme("light")}>
						{themeValue === "light" && (
							<img src="./icons/app_menu/checked.svg" alt="" />
						)}
						<p className="name">light</p>
					</button>
				</>
			)}
		</AppMenu>
	);
}
