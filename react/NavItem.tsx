interface NavItemProps {
	name: string;
	icon: string | null;
	onClick: () => void;
	active: boolean;
	depth?: number;
}

export default function NavItem({
	name,
	icon,
	onClick,
	active,
	depth = 0,
}: NavItemProps) {
	return (
		<button
			className={`nav-item ${active ? "active" : ""} ${depth % 2 === 1 ? "odd" : ""}`}
			onClick={onClick}
		>
			{icon ? (
				<img src={`./icons/topbar/${icon}.svg`} alt="" className="icon" />
			) : null}
			<p>{name}</p>
		</button>
	);
}
