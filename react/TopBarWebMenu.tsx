import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface TopBarWebMenuProps {
	active: string;
	name: string;
}

export default function TopBarWebMenu({ active, name }: TopBarWebMenuProps) {
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
		<div className={`topbar-webmenu ${exposed ? "exposed" : ""}`} ref={ref}>
			<button
				className="webmenu-btn"
				onClick={() => setExposed(prev => !prev)}
				title="Main Menu"
			>
				<p>
					snug<b>{name}</b>
				</p>
			</button>
			{exposed ? (
				<div className="popover">
					<a href="https://github.com/Fynn-G">
						<img className="svg-icon" src="./icons/web/home.svg" alt="" />
						<p>Fynn Gr.</p>
					</a>
					<a href="https://github.com/Fynn-gr">
						<img className="svg-icon" src="./icons/web/apps.svg" alt="" />
						<p>All Apps</p>
					</a>
					<a href="" className={active === "stagetune" ? "active" : ""}>
						<img className="svg-icon" src="./icons/web/stagetune.png" alt="" />
						<p>Stragetune</p>
						<p className="tag" style={{ backgroundColor: "#FF2D55" }}>
							Beta
						</p>
					</a>
					<a href="" className={active === "fairytale" ? "active" : ""}>
						<img className="svg-icon" src="./icons/web/fairytale.png" alt="" />
						<p>Fairytale</p>
						<p className="tag" style={{ backgroundColor: "#FF9500" }}>
							Alpha
						</p>
					</a>
					<a href="" className={active === "refsheet" ? "active" : ""}>
						<img className="svg-icon" src="./icons/web/refsheet.png" alt="" />
						<p>Refsheet</p>
						<p className="tag" style={{ backgroundColor: "#4F4F4F" }}>
							Alpha
						</p>
					</a>
					<a href="" className={active === "timeless" ? "active" : ""}>
						<img className="svg-icon" src="./icons/web/timeless.png" alt="" />
						<p>Timeless</p>
						<p className="tag" style={{ backgroundColor: "#00C7BE" }}>
							Alpha
						</p>
					</a>
				</div>
			) : null}
		</div>
	);
}
