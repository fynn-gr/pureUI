<script lang="ts">
import { onMount } from "svelte";

interface Props {
	icon: string;
	iconActive?: string | null;
	active?: boolean;
	onChange?: Function;
	activeColor?: string | null;
	toolTip: string;
	disabled?: boolean;
}

let {
	icon,
	iconActive = null,
	active = $bindable(),
	onChange = (active: boolean) => {},
	activeColor = null,
	toolTip,
	disabled = false,
}: Props = $props();

let self: HTMLElement;
let iconPath: string;
let iconPathActive: string;

iconPath = `./icons/top_bar/${icon}.svg`;

if (iconActive == null) {
	iconPathActive = iconPath;
} else {
	iconPathActive = `./icons/top_bar/${iconActive}.svg`;
}
</script>

<button
	bind:this={self}
	class="topbar-button"
	class:disabled
	onclick={() => {
		!disabled ? (active = !active) : (active = active);
		onChange(active);
	}}
	{disabled}
	title={toolTip}
	style={`background-color: ${active ? activeColor : "transparent"};`}
>
	<img src={active ? iconPathActive : iconPath} alt={toolTip} />
</button>
