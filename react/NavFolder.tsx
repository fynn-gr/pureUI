import type { ReactNode } from "react";
import { useEffect, useState } from "react";

interface NavFolderProps {
	name: string;
	icon: string | null;
	onClick?: () => void;
	active: boolean;
	exposed: boolean;
	depth?: number;
	children?: ReactNode;
}

export default function NavFolder({
	name,
	icon,
	onClick = () => {},
	active,
	exposed,
	depth = 0,
	children,
}: NavFolderProps) {
	const [isExposed, setIsExposed] = useState(exposed);

	useEffect(() => {
		setIsExposed(exposed);
	}, [exposed]);

	return (
		<div
			className={`nav-folder ${isExposed ? "exposed" : ""} ${depth % 2 === 1 ? "odd" : ""}`}
		>
			<div
				className={`nav-item ${active ? "active" : ""}`}
				onClick={() => onClick()}
			>
				<button
					className="expander"
					onClick={e => {
						e.stopPropagation();
						setIsExposed(prev => !prev);
					}}
				>
					<img src="./icons/std/dropdown_arrow.svg" alt="" />
				</button>
				{icon ? (
					<img src={`./icons/topbar/${icon}.svg`} alt="" className="icon" />
				) : null}
				<p>{name}</p>
			</div>
			{isExposed ? <div className="content">{children}</div> : null}
		</div>
	);
}
