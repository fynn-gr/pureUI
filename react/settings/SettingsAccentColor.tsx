import React from "react";

interface SettingsAccentColorProps {
	name: string;
	value: string;
	customDefault?: string;
	onChange: (value: string) => void;
}

const accentColors = [
	{ name: "Blue", value: "var(--sys-blue)" },
	{ name: "Purple", value: "var(--sys-purple)" },
	{ name: "Pink", value: "var(--sys-pink)" },
	{ name: "Red", value: "var(--sys-red)" },
	{ name: "Orange", value: "var(--sys-orange)" },
	{ name: "Yellow", value: "var(--sys-yellow)" },
	{ name: "Green", value: "var(--sys-green)" },
];

export default function SettingsAccentColor({
	name,
	value,
	customDefault,
	onChange,
}: SettingsAccentColorProps) {
	return (
		<div className="settings-accent-color option">
			<p className="name">{name}</p>
			<div className="color-selector">
				{customDefault ? (
					<div
						className={`color ${value === "mono" ? "active" : ""}`}
						onClick={() => onChange("mono")}
						style={{
							background: "linear-gradient(to bottom, white 50%, black 50%)",
						}}
					>
						<div
							style={{
								position: "absolute",
								inset: "5px",
								background: "linear-gradient(to bottom, black 50%, white 50%)",
								borderRadius: "50%",
							}}
						/>
					</div>
				) : null}
				{accentColors.map(color => (
					<div
						key={color.value}
						className={`color ${value === color.value ? "active" : ""}`}
						onClick={() => onChange(color.value)}
						style={{ backgroundColor: color.value }}
					/>
				))}
			</div>
		</div>
	);
}
