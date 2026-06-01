interface TopBarButtonProps {
	id: string;
	icon: string;
	onClick: () => void;
	toolTip: string;
	disabled?: boolean;
	addClass?: string;
}

export default function TopBarButton({ id, icon, onClick, toolTip, disabled = false, addClass = "" }: TopBarButtonProps) {
	return (
		<button
			id={`btn-${id}`}
			className={`topbar-button ${addClass} ${disabled ? "disabled" : ""}`}
			title={toolTip}
			onClick={() => {
				if (!disabled) {
					onClick();
				}
			}}
			disabled={disabled}
		>
			<img src={`./icons/topbar/${icon}.svg`} alt={toolTip} />
		</button>
	);
}
