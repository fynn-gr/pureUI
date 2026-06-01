interface WinButtonsMacProps {
	onMin?: () => void;
	onMax?: () => void;
	onClose?: () => void;
	CanMaximise?: boolean;
	CanMinimize?: boolean;
	CanClose?: boolean;
	CloseOnly?: boolean;
}

export default function WinButtonsMac({
	onMin = () => {},
	onMax = () => {},
	onClose = () => {},
	CanMaximise = true,
	CanMinimize = true,
	CanClose = true,
	CloseOnly = true,
}: WinButtonsMacProps) {
	return (
		<div className="win-buttons-mac" data-tauri-drag-region>
			<button onMouseEnter={() => {}} onMouseLeave={() => {}} onClick={onClose} className={CanClose ? "" : "disabled"} disabled={!CanClose}>
				<img src="./icons/native/winButtonsMacClose.svg" alt="" />
			</button>
			<button onMouseEnter={() => {}} onMouseLeave={() => {}} onClick={onMin} className={CanMinimize ? "" : "disabled"} disabled={!CanMinimize}>
				<img src="./icons/native/winButtonsMacMin.svg" alt="" />
			</button>
			<button onMouseEnter={() => {}} onMouseLeave={() => {}} onClick={onMax} className={CanMaximise ? "" : "disabled"} disabled={!CanMaximise}>
				<img src="./icons/native/winButtonsMacMax.svg" alt="" />
			</button>
		</div>
	);
}
