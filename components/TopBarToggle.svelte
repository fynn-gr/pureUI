<script lang="ts">
import { onMount } from "svelte";

interface Props {
	id: string;
	icon: string;
	iconActive?: string | null;
	active?: boolean;
	onChange?: Function;
	activeColor?: string | null;
	toolTip: string;
	disabled?: boolean;
}

let {
	id,
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

iconPath = `./icons/topbar/${icon}.svg`;

if (iconActive == null) {
	iconPathActive = iconPath;
} else {
	iconPathActive = `./icons/topbar/${iconActive}.svg`;
}
</script>

<button
	bind:this={self}
	{id}
	class="topbar-button"
	class:disabled
	onclick={() => {
		!disabled ? (active = !active) : (active = active);
		onChange(active);
	}}
	{disabled}
	title={toolTip}
	class:active={active}
>
	<img src={active ? iconPathActive : iconPath} alt={toolTip} />
</button>
