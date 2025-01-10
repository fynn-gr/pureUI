<script lang="ts">
import { settings } from "@/ts/Stores.svelte";

interface Props {
	code: string;
	name: string;
	icon: string;
	shape?: string;
	width: number;
	selected: any;
	modifier: string;
}
let {
	code,
	name,
	icon,
	shape = "",
	width,
	selected,
	modifier,
}: Props = $props();

let modifierKeys = [
	"MetaLeft",
	"MetaRight",
	"ControlLeft",
	"ControlRight",
	"AltLeft",
	"AltRight",
];
let binded = $settings.keymap.find(e => {
	e.key == code;
});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class="key"
	class:binded
	class:selected={selected == code}
	class:modifier={modifier == code}
	style={`width: ${width || 36}px;`}
	onclick={() => {
		if (modifierKeys.includes(code)) {
			if (modifier == code) {
				modifier = "standart";
			} else {
				modifier = code;
			}
		} else {
			selected.code = code;
			selected.name = name;
		}
	}}
>
	{name}
	{#if icon}
		<img
			class="icon"
			src={`./icons/keys/${icon}.svg`}
			alt=""
			draggable="false"
		/>
	{:else if shape}
		<img
			class="shape"
			src={`./icons/keys/shape_${shape}.svg`}
			alt=""
			draggable="false"
		/>
	{/if}
</div>
