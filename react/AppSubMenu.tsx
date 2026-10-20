import type { ReactNode } from "react";

interface AppSubMenuProps {
	name: string;
	children?: ReactNode;
}

export default function AppSubMenu({ name, children }: AppSubMenuProps) {
	return (
		<div className="aubMenu">
			<button className="subMenuBtn">{name}</button>
			<div className="menuContent">{children}</div>
		</div>
	);
}
