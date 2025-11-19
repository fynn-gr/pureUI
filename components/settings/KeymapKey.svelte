<script lang="ts">
import { keymap } from "@/ts/Keymap.svelte";

interface Props {
	code: string;
	name: string;
	icon: string | undefined;
	shape?: string;
	width: number | undefined;
	selected: any;
	modifier: string;
}
let {
	code,
	name,
	icon,
	shape = "",
	width,
	selected = $bindable(),
	modifier = $bindable(),
}: Props = $props();

let modifierKeys = [
	"MetaLeft",
	"MetaRight",
	"ControlLeft",
	"ControlRight",
	"AltLeft",
	"AltRight",
];

let binded: boolean = $state(
	$keymap.some(e => e.key === code)
);
$effect(() => {
	binded = $keymap.some(e => e.key === code);
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
