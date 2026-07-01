import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface AppMenuContainerProps {
	children?: ReactNode;
}

export default function AppMenuContainer({ children }: AppMenuContainerProps) {
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
			ref={ref}
			className={`menu-container ${exposed ? "exposed" : ""}`}
			onClick={() => setExposed(prev => !prev)}
		>
			{children}
		</div>
	);
}
