<script lang="ts">
	import { onMount } from "svelte";
	import KeymapKey from "./KeymapKey.svelte";

	export let configStandart: any;
	export let configCmd: any;
	export let configAlt: any;
	export let configCtrl: any;
	let modifier: string = "standart";
	let selectedKey: any = { code: "", name: "" };
	let config: any = configStandart;
	let layoutISO = [
		[
			{ code: "Escape", name: "esc", width: 50 },
			{ code: "F1", name: "F1" },
			{ code: "F2", name: "F2" },
			{ code: "F3", name: "F3" },
			{ code: "F4", name: "F4" },
			{ code: "F5", name: "F5" },
			{ code: "F6", name: "F6" },
			{ code: "F7", name: "F7" },
			{ code: "F8", name: "F8" },
			{ code: "F9", name: "F9" },
			{ code: "F10", name: "F10" },
			{ code: "F11", name: "F11" },
			{ code: "F12", name: "F12" },
			{ code: "F13", name: "F13" },
			{ code: "F14", name: "F14" },
			{ code: "Delete", name: "DEL" },
		],
		[
			{ code: "IntlBackslash", name: "^" },
			{ code: "Digit1", name: "1" },
			{ code: "Digit2", name: "2" },
			{ code: "Digit3", name: "3" },
			{ code: "Digit4", name: "4" },
			{ code: "Digit5", name: "5" },
			{ code: "Digit6", name: "6" },
			{ code: "Digit7", name: "7" },
			{ code: "Digit8", name: "8" },
			{ code: "Digit9", name: "9" },
			{ code: "Digit0", name: "0" },
			{ code: "Minus", name: "ß" },
			{ code: "Equal", name: "´" },
			{ code: "Backspace", name: "Back", width: 90 },
			{ code: "PageUp", name: "UP" },
		],
		[
			{ code: "Tab", name: "Tab", width: 56 },
			{ code: "KeyQ", name: "Q" },
			{ code: "KeyW", name: "W" },
			{ code: "KeyE", name: "E" },
			{ code: "KeyR", name: "R" },
			{ code: "KeyT", name: "T" },
			{ code: "KeyY", name: "Z" },
			{ code: "KeyU", name: "U" },
			{ code: "KeyI", name: "I" },
			{ code: "KeyO", name: "O" },
			{ code: "KeyP", name: "P" },
			{ code: "BracketLeft", name: "Ü" },
			{ code: "BracketRight", name: "+" },
			{ code: "spacer", width: 70 },
			{ code: "PageDown", name: "DN" },
		],
		[
			{ code: "CapsLock", name: "Caps", width: 70 },
			{ code: "KeyA", name: "A" },
			{ code: "KeyS", name: "S" },
			{ code: "KeyD", name: "D" },
			{ code: "KeyF", name: "F" },
			{ code: "KeyG", name: "G" },
			{ code: "KeyH", name: "H" },
			{ code: "KeyJ", name: "J" },
			{ code: "KeyK", name: "K" },
			{ code: "KeyL", name: "L" },
			{ code: "Semicolon", name: "Ö" },
			{ code: "Quote", name: "Ä" },
			{ code: "Hash", name: "#", width: 36 },
			{ code: "Enter", name: "", width: 56, shape: "enter" },
			{ code: "Home", name: "HO" },
		],
		[
			{ code: "ShiftLeft", name: "Shift", width: 52 },
			{ code: "Backquote", name: "<" },
			{ code: "KeyZ", name: "Y" },
			{ code: "KeyX", name: "X" },
			{ code: "KeyC", name: "C" },
			{ code: "KeyV", name: "V" },
			{ code: "KeyB", name: "B" },
			{ code: "KeyN", name: "N" },
			{ code: "KeyM", name: "M" },
			{ code: "Comma", name: "," },
			{ code: "Period", name: "." },
			{ code: "Slash", name: "-" },
			{ code: "ShiftRight", name: "Shift", width: 74 },
			{ code: "ArrowUp", name: "", icon: "up" },
			{ code: "END", name: "END" },
		],
		[
			{ code: "ControlLeft", name: "CTRL", width: 48 },
			{ code: "AltLeft", name: "ALT", width: 48 },
			{ code: "MetaLeft", name: "CMD", width: 48 },
			{ code: "Space", name: "", width: 218 },
			{ code: "MetaRight", name: "CMD", width: 48 },
			{ code: "AltRight", name: "ALT", width: 48 },
			{ code: "ControlRight", name: "CTRL", width: 48 },
			{ code: "ArrowLeft", name: "", icon: "left" },
			{ code: "ArrowDown", name: "", icon: "down" },
			{ code: "ArrowRight", name: "", icon: "right" },
		],
	];
	let layoutANSI = [
		[
			{ code: "Escape", name: "esc", width: 50 },
			{ code: "F1", name: "F1" },
			{ code: "F2", name: "F2" },
			{ code: "F3", name: "F3" },
			{ code: "F4", name: "F4" },
			{ code: "F5", name: "F5" },
			{ code: "F6", name: "F6" },
			{ code: "F7", name: "F7" },
			{ code: "F8", name: "F8" },
			{ code: "F9", name: "F9" },
			{ code: "F10", name: "F10" },
			{ code: "F11", name: "F11" },
			{ code: "F12", name: "F12" },
			{ code: "F13", name: "F13" },
			{ code: "F14", name: "F14" },
			{ code: "Delete", name: "DEL" },
		],
		[
			{ code: "IntlBackslash", name: "^" },
			{ code: "Digit1", name: "1" },
			{ code: "Digit2", name: "2" },
			{ code: "Digit3", name: "3" },
			{ code: "Digit4", name: "4" },
			{ code: "Digit5", name: "5" },
			{ code: "Digit6", name: "6" },
			{ code: "Digit7", name: "7" },
			{ code: "Digit8", name: "8" },
			{ code: "Digit9", name: "9" },
			{ code: "Digit0", name: "0" },
			{ code: "Minus", name: "-" },
			{ code: "Equal", name: "=" },
			{ code: "Backspace", name: "Back", width: 90 },
			{ code: "PageUp", name: "UP" },
		],
		[
			{ code: "Tab", name: "Tab", width: 56 },
			{ code: "KeyQ", name: "Q" },
			{ code: "KeyW", name: "W" },
			{ code: "KeyE", name: "E" },
			{ code: "KeyR", name: "R" },
			{ code: "KeyT", name: "T" },
			{ code: "KeyY", name: "Y" },
			{ code: "KeyU", name: "U" },
			{ code: "KeyI", name: "I" },
			{ code: "KeyO", name: "O" },
			{ code: "KeyP", name: "P" },
			{ code: "BracketLeft", name: "[" },
			{ code: "BracketRight", name: "]" },
			{ code: "Backslash", name: "\\", width: 70 },
			{ code: "PageDown", name: "DN" },
		],
		[
			{ code: "CapsLock", name: "Caps", width: 70 },
			{ code: "KeyA", name: "A" },
			{ code: "KeyS", name: "S" },
			{ code: "KeyD", name: "D" },
			{ code: "KeyF", name: "F" },
			{ code: "KeyG", name: "G" },
			{ code: "KeyH", name: "H" },
			{ code: "KeyJ", name: "J" },
			{ code: "KeyK", name: "K" },
			{ code: "KeyL", name: "L" },
			{ code: "Semicolon", name: ";" },
			{ code: "Quote", name: "'" },
			{ code: "Enter", name: "Enter", width: 96 },
			{ code: "Home", name: "HO" },
		],
		[
			{ code: "ShiftLeft", name: "Shift", width: 92 },
			{ code: "KeyZ", name: "Z" },
			{ code: "KeyX", name: "X" },
			{ code: "KeyC", name: "C" },
			{ code: "KeyV", name: "V" },
			{ code: "KeyB", name: "B" },
			{ code: "KeyN", name: "N" },
			{ code: "KeyM", name: "M" },
			{ code: "Comma", name: "," },
			{ code: "Period", name: "." },
			{ code: "Slash", name: "/" },
			{ code: "ShiftRight", name: "Shift", width: 74 },
			{ code: "ArrowUp", name: "", icon: "up" },
			{ code: "END", name: "END" },
		],
		[
			{ code: "ControlLeft", name: "CTRL", width: 48 },
			{ code: "AltLeft", name: "ALT", width: 48 },
			{ code: "MetaLeft", name: "CMD", width: 48 },
			{ code: "Space", name: "", width: 218 },
			{ code: "MetaRight", name: "CMD", width: 48 },
			{ code: "AltRight", name: "ALT", width: 48 },
			{ code: "ControlRight", name: "CTRL", width: 48 },
			{ code: "ArrowLeft", name: "", icon: "left" },
			{ code: "ArrowDown", name: "", icon: "down" },
			{ code: "ArrowRight", name: "", icon: "right" },
		],
	];
	let modifierKeys = [
		"MetaLeft",
		"MetaRight",
		"ControlLeft",
		"ControlRight",
		"AltLeft",
		"AltRight",
	];

	onMount(() => {
		document.addEventListener("keydown", e => {
			console.log(e.code);
			if (e.code == "MetaRight" || e.code == "MetaLeft") {
				config = configCmd;
			} else if (e.code == "ControlRight" || e.code == "ControlLeft") {
				config = configCtrl;
			} else if (e.code == "AltRight" || e.code == "AltLeft") {
				config = configAlt;
			} else {
				config = configStandart;
			}
		});
		document.addEventListener("keydown", e => {
			if (modifierKeys.includes(e.code)) {
				config = configStandart;
			}
		});
	});

	$: configChange(modifier);

	function configChange(modifier) {
		if (modifier == "MetaRight" || modifier == "MetaLeft") {
			console.log(modifier);
			config = configCmd;
		} else if (modifier == "ControlRight" || modifier == "ControllLeft") {
			config = configCtrl;
		} else if (modifier == "AltRight" || modifier == "AltLeft") {
			config = configAlt;
		} else {
			config = configStandart;
		}
	}
</script>

<div class="keymap">
	{#each layoutANSI as row}
		<div class="row">
			{#each row as key}
				{#if key.code == "spacer"}
					<div style={`width: ${key.width}px;`}></div>
				{:else}
					<KeymapKey
						code={key.code}
						name={key.name}
						icon={key.icon ? key.icon : undefined}
						shape={key.shape ? key.shape : undefined}
						width={key.width ? key.width : undefined}
						binded={config[key.code] != undefined}
						bind:modifier
						bind:selected={selectedKey}
					/>
				{/if}
			{/each}
		</div>
	{/each}

	<div class="active-selection">
		<p class="key-name">{selectedKey.name || "No key selected"}</p>
		<p class="key-function">{config[selectedKey.code] || ""}</p>
	</div>
</div>
