import {
	useUiPlatform,
	useTheme,
	useSettings,
	setUiPlatform,
	setTheme as setStoreTheme,
} from "@/ts/Stores";
import AppMenu from "./AppMenu";
import { saveSettings } from "@/ts/SaveLoad";

interface AppMenuDevProps {
	platforms?: Array<"mac" | "win" | "web" | "tahoe">;
	themes?: boolean;
	appName: string;
}

export default function AppMenuDev({ platforms = ["mac", "win", "web", "tahoe"], themes = true, appName }: AppMenuDevProps) {
	const uiPlatformValue = useUiPlatform();
	const themeValue = useTheme();
	const settingsValue = useSettings();

	function setPlatform(value: "mac" | "win" | "web" | "tahoe") {
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
					{uiPlatformValue === "mac" && <img src="./icons/app_menu/checked.svg" alt="" />}
					<p className="name">mac</p>
				</button>
			)}
			{platforms.includes("tahoe") && (
				<button className="app-menu-item" onClick={() => setPlatform("tahoe")}>
					{uiPlatformValue === "tahoe" && <img src="./icons/app_menu/checked.svg" alt="" />}
					<p className="name">tahoe</p>
				</button>
			)}
			{platforms.includes("win") && (
				<button className="app-menu-item" onClick={() => setPlatform("win")}>
					{uiPlatformValue === "win" && <img src="./icons/app_menu/checked.svg" alt="" />}
					<p className="name">win</p>
				</button>
			)}
			{platforms.includes("web") && (
				<button className="app-menu-item" onClick={() => setPlatform("web")}>
					{uiPlatformValue === "web" && <img src="./icons/app_menu/checked.svg" alt="" />}
					<p className="name">web</p>
				</button>
			)}
			{themes && (
				<>
					<div className="seperator" />
					<button className="app-menu-item" onClick={() => setTheme("dark")}>
						{themeValue === "dark" && <img src="./icons/app_menu/checked.svg" alt="" />}
						<p className="name">dark</p>
					</button>
					<button className="app-menu-item" onClick={() => setTheme("light")}>
						{themeValue === "light" && <img src="./icons/app_menu/checked.svg" alt="" />}
						<p className="name">light</p>
					</button>
				</>
			)}
		</AppMenu>
	);
}
