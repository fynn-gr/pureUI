import type { ReactNode } from "react";

interface AppMenuProps {
	name: string;
	children?: ReactNode;
}

export default function AppMenu({ name, children }: AppMenuProps) {
	return (
		<div className="app-menu">
			<button className="app-menu-btn">{name}</button>
			<div className="menu-content">{children}</div>
		</div>
	);
}
