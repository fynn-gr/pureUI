<script lang="ts">
import { onMount } from "svelte";

export let id: string = "btn";
export let icon: string;
export let iconActive: string | null = null;
export let active: boolean;
export let onChange = (active: boolean) => {};
export let activeColor: string | null = null;
export let toolTip: string;
export let disabled = false;

let self: HTMLElement;
let topBarType;
let topBarShort: string;
let iconPath: string;
let iconPathActive: string;

onMount(() => {
	let cls = self;
	while (cls.parentElement) {
		cls = cls.parentElement;

		if (cls.classList.contains("toolbar")) {
			topBarType = "toolbar-button";
			topBarShort = "tool_bar";
		} else if (cls.classList.contains("buttonbar")) {
			topBarType = "buttonbar-button";
			topBarShort = "button_bar";
		}
	}

	iconPath = `./icons/${topBarShort}/${icon}.svg`;

	if (iconActive == null) {
		iconPathActive = iconPath;
	} else {
		iconPathActive = `./icons/${topBarShort}/${iconActive}.svg`;
	}
});
</script>

<button
	bind:this={self}
	id={`btn-${id}`}
	class="topbar-button"
	class:disabled
	on:click={() => {
		!disabled ? (active = !active) : (active = active);
		onChange(active);
	}}
	{disabled}
	title={toolTip}
	style={`background-color: ${active ? activeColor : "transparent"};`}
>
	<img src={active ? iconPathActive : iconPath} alt={toolTip} />
</button>
