interface SettingsCheckboxProps {
	name: string;
	checked: boolean;
	checkboxName: string;
	onChange: () => void;
}

export default function SettingsCheckbox({
	name,
	checked,
	checkboxName,
	onChange,
}: SettingsCheckboxProps) {
	return (
		<div className="option">
			<p className="name">{name}</p>
			<input type="checkbox" checked={checked} onChange={onChange} />
			<p className="checkbox-name" onClick={onChange}>
				{checkboxName}
			</p>
		</div>
	);
}
