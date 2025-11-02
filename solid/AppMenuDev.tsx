import { Show } from "solid-js";
import AppMenu from "./AppMenu";
import { setUiPlatform, uiPlatform } from "../../ts/Stores";

function AppMenuDev(props: {
	platforms?: Array<"mac" | "win" | "web">;
	themes?: boolean;
	children?: any;
}) {
	return (
		<AppMenu name="Dev">
			<Show when={props.platforms?.includes("mac")}>
				<button
					className="app-menu-item"
					onClick={() => {
						setUiPlatform("mac");
					}}
				>
					<Show when={uiPlatform() === "mac"}>
						<img src="./icons/app_menu/checked.svg" alt="" />
					</Show>
					<p className="name">mac</p>
				</button>
			</Show>
			<Show when={props.platforms?.includes("win")}>
				<button
					className="app-menu-item"
					onClick={() => {
						setUiPlatform("win");
					}}
				>
					<Show when={uiPlatform() === "win"}>
						<img src="./icons/app_menu/checked.svg" alt="" />
					</Show>
					<p className="name">win</p>
				</button>
			</Show>
			<Show when={props.platforms?.includes("web")}>
				<button
					className="app-menu-item"
					onClick={() => {
						setUiPlatform("web");
					}}
				>
					<Show when={uiPlatform() === "web"}>
						<img src="./icons/app_menu/checked.svg" alt="" />
					</Show>
					<p className="name">web</p>
				</button>
			</Show>
		</AppMenu>
	);
}

export default AppMenuDev;
