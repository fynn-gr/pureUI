import { useMenuHandler } from "@/ts/Stores";

interface AppMenuItemProps {
	id: string;
	name: string;
	accelerator?: string | null;
	disabled?: boolean;
	icon?: string | null;
	checked?: string | null;
}

export default function AppMenuItem({
	id,
	name,
	accelerator,
	disabled = false,
	icon,
	checked,
}: AppMenuItemProps) {
	const handler = useMenuHandler();

	return (
		<button
			className={`app-menu-item ${disabled ? "disabled" : ""}`}
			onClick={() => {
				handler.handle(id);
			}}
			disabled={disabled}
		>
			{checked === "true" ? (
				<img src="./icons/app_menu/checked.svg" alt="" />
			) : icon ? (
				<img src={icon} alt="" />
			) : (
				<img alt="" style={{ visibility: "hidden" }} />
			)}
			<p className="name">{name}</p>
			{accelerator ? <p className="accelerator">{accelerator}</p> : null}
		</button>
	);
}
