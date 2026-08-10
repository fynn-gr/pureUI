import { useAppState } from "@/ts/Stores";

interface SelectionOption {
	value: any;
	name: string;
}

interface SettingsSelectProps {
	name: string;
	value: any;
	options: SelectionOption[];
	onChange: (value: any) => void;
}

function optionValue(option: SelectionOption) {
	return typeof option.value === "object"
		? JSON.stringify(option.value)
		: String(option.value);
}

export default function SettingsSelect({
	name,
	value,
	options,
	onChange,
}: SettingsSelectProps) {
	const uiPlatformValue = useAppState(s => s.uiPlatform);
	const currentValue =
		typeof value === "object" ? JSON.stringify(value) : String(value);

	return (
		<div className="option">
			<p className="name">{name}</p>
			<div className="select-container">
				<select
					value={currentValue}
					onChange={e => {
						const selected = options.find(
							option => optionValue(option) === e.target.value,
						);
						if (selected) {
							onChange(selected.value);
						}
					}}
				>
					{options.map((option, index) => (
						<option key={index} value={optionValue(option)}>
							{option.name}
						</option>
					))}
				</select>
				{uiPlatformValue === "mac" ? (
					<div className="arrow">
						<img src="./icons/std/select_arrow.svg" alt="" />
					</div>
				) : null}
			</div>
		</div>
	);
}
