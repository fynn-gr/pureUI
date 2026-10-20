import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface TopBarDropdownProps {
	icon: string | null;
	toolTip: string;
	disabled?: boolean;
	children?: ReactNode;
}

export default function TopBarDropdown({
	icon,
	toolTip,
	disabled = false,
	children,
}: TopBarDropdownProps) {
	const [exposed, setExposed] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		function onClick(event: MouseEvent) {
			if (!ref.current?.contains(event.target as Node)) {
				setExposed(false);
			}
		}
		document.body.addEventListener("click", onClick);
		return () => document.body.removeEventListener("click", onClick);
	}, []);

	return (
		<div
			className={`topbar-dropdown ${icon == null ? "attached" : ""} ${exposed ? "exposed" : ""}`}
			ref={ref}
		>
			<button
				className={`topbar-button ${disabled ? "disabled" : ""}`}
				onClick={() => setExposed(prev => !prev)}
				disabled={disabled}
				title={toolTip}
			>
				{icon != null ? (
					<img src={`./icons/topbar/${icon}.svg`} alt={toolTip} />
				) : null}
				<img src="./icons/std/dropdown_arrow.svg" alt="" className="arrow" />
			</button>
			{exposed ? <div className="dropdown">{children}</div> : null}
		</div>
	);
}
