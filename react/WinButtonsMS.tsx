interface WinButtonsMSProps {
	onMin?: () => void;
	onMax?: () => void;
	onClose?: () => void;
	CanMaximise?: boolean;
	CanMinimize?: boolean;
	CanClose?: boolean;
	CloseOnly?: boolean;
}

export default function WinButtonsMS({
	onMin = () => {},
	onMax = () => {},
	onClose = () => {},
	CanMaximise = true,
	CanMinimize = true,
	CanClose = true,
	CloseOnly = false,
}: WinButtonsMSProps) {
	return (
		<div className="win-buttons-ms" data-tauri-drag-region>
			{!CloseOnly && (
				<button
					onClick={onMin}
					className={CanMinimize ? "" : "disabled"}
					disabled={!CanMinimize}
				>
					<img
						src="./icons/native/winButtonsMSMin.svg"
						alt=""
						draggable="false"
					/>
				</button>
			)}
			{!CloseOnly && (
				<button
					onClick={onMax}
					className={CanMaximise ? "" : "disabled"}
					disabled={!CanMaximise}
				>
					<img
						src="./icons/native/winButtonsMSMax.svg"
						alt=""
						draggable="false"
					/>
				</button>
			)}
			<button
				onClick={onClose}
				className={`close ${!CanClose ? "disabled" : ""}`}
				disabled={!CanClose}
			>
				<img
					src="./icons/native/winButtonsMSClose.svg"
					alt=""
					draggable="false"
				/>
			</button>
		</div>
	);
}
