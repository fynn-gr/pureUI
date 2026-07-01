import { useEffect, useState } from "react";

interface SelectionBoxProps {
	options: Array<{ name: string; value: any }>;
	selected: any;
	onChange?: (value: any) => void;
}

export default function SelectionBox({
	options,
	selected,
	onChange = () => {},
}: SelectionBoxProps) {
	const [selectedObj, setSelectedObj] = useState(options[0]);
	const [exposed, setExposed] = useState(false);

	useEffect(() => {
		const found = options.find(option => option.value === selected);
		if (found) {
			setSelectedObj(found);
		}
	}, [options, selected]);

	return (
		<div className="select">
			<button
				className="select-btn"
				onClick={() => {
					setExposed(prev => !prev);
					onChange(selectedObj.value);
				}}
			>
				<div className="options">
					{options.map((e, i) => (
						<p key={i} className={selectedObj === e ? "sel" : ""}>
							{e.name}
						</p>
					))}
				</div>
				<img src="./icons/std/select_arrow.svg" alt="" />
			</button>
			<div className={`option-container ${exposed ? "exposed" : ""}`}>
				{options.map((option, index) => (
					<button
						key={index}
						className={selectedObj === option ? "selected" : ""}
						onClick={() => {
							setSelectedObj(option);
							setExposed(false);
							onChange(option.value);
						}}
					>
						{option.name}
					</button>
				))}
			</div>
		</div>
	);
}
