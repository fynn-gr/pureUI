<script lang="ts">
	import { settings } from "@/stores";

	export let code: string;
	export let name: string;
	export let icon: string;
	export let shape: string = "";
	export let width: number;
	export let selected: any;
	export let modifier: string;
	let modifierKeys = [
		"MetaLeft",
		"MetaRight",
		"ControlLeft",
		"ControlRight",
		"AltLeft",
		"AltRight",
	];
	let binded = $settings.keymap.find((e) => {
		e.key == code;
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="key"
	class:binded
	class:selected={selected == code}
	class:modifier={modifier == code}
	style={`width: ${width || 36}px;`}
	on:click={() => {
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
