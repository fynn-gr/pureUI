import { Dynamic } from "solid-js/web";

function AppMenuDev(props: { name: string; children?: any }) {
	return (
		<div className="app-menu">
			<button className="app-menu-btn">{props.name}</button>
			<div className="menu-content">{props.children}</div>
		</div>
	);
}

export default AppMenuDev;
