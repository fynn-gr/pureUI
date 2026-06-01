interface TopBarDropdownItemProps {
	name: string;
	checked?: boolean;
	onChange?: () => void;
	disabled?: boolean;
}

export default function TopBarDropdownItem({ name, checked, onChange = () => {}, disabled = false }: TopBarDropdownItemProps) {
	return (
		<button className={`item ${disabled ? "disabled" : ""}`} onClick={() => onChange()} disabled={disabled}>
			{checked === undefined ? (
				<img src="" alt="" style={{ visibility: "hidden" }} />
			) : checked ? (
				<img src="./icons/app_menu/checked.svg" alt="" />
			) : (
				<img src="" alt="" style={{ visibility: "hidden" }} />
			)}
			<p className="name">{name}</p>
		</button>
	);
}
