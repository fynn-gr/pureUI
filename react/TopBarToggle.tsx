import React from "react";

interface TopBarToggleProps {
  id: string;
  icon: string;
  iconActive?: string | null;
  active: boolean;
  onChange?: (active: boolean) => void;
  activeColor?: string | null;
  toolTip: string;
  disabled?: boolean;
}

export default function TopBarToggle({
  id,
  icon,
  iconActive = null,
  active,
  onChange = () => {},
  activeColor = null,
  toolTip,
  disabled = false,
}: TopBarToggleProps) {
  const iconPath = `./icons/topbar/${icon}.svg`;
  const iconPathActive = iconActive ? `./icons/topbar/${iconActive}.svg` : iconPath;

  return (
    <button
      id={id}
      className={`topbar-button ${disabled ? "disabled" : ""} ${active ? "active" : ""}`}
      disabled={disabled}
      title={toolTip}
      onClick={() => {
        if (!disabled) {
          onChange(!active);
        }
      }}
      style={activeColor && active ? { color: activeColor } : undefined}
    >
      <img src={active ? iconPathActive : iconPath} alt={toolTip} />
    </button>
  );
}
