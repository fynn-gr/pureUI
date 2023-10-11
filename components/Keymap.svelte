<script lang="ts">
	import { onMount } from "svelte";
	import KeymapKey from "./KeymapKey.svelte";


	export let keySize: number;
	export let configStandart: any;
	export let configCmd: any;
	export let configAlt: any;
	export let modifier: string;
	let config: any;

	onMount(() => {

	})

	$: if (modifier == "standart") config = configStandart;
		else if (modifier == "cmd") config = configCmd;
		else if (modifier == "alt") config = configAlt;

</script>

<div
	class="keymap"
	>
	<div class="row">
		<div class="key">^</div>
		<div class="key">1</div>
		<div class="key">2</div>
		<div class="key">3</div>
		<div class="key">4</div>
		<div class="key">5</div>
		<div class="key">6</div>
		<div class="key">7</div>
		<div class="key">8</div>
		<div class="key">9</div>
		<div class="key">0</div>
		<div class="key">ß</div>
		<div class="key">´</div>
		<div class="key" style="width: 56px;">Back</div>
	</div>
	<div class="row">
		<div class="key" style="width: 56px;">Tab</div>
		<KeymapKey key="Q" operator=""/>
		<KeymapKey key="W" operator={config.W || ""}/>
		<div class="key">E</div>
		<div class="key">R</div>
		<div class="key">T</div>
		<div class="key">Z</div>
		<div class="key">U</div>
		<div class="key">I</div>
		<KeymapKey key="O" operator={config.O || ""}/>
		<KeymapKey key="P" operator={config.P || ""}/>
		<div class="key">Ü</div>
		<div class="key">+</div>
		<div class="key" style="">#</div>
	</div>
	<div class="row">
		<div class="key" style="width: 68px;">Caps</div>
		<KeymapKey key="A" operator={config.A || ""}/>
		<KeymapKey key="S" operator={config.S || ""}/>
		<KeymapKey key="D" operator={config.D || ""}/>
		<div class="key">F</div>
		<div class="key">G</div>
		<div class="key">H</div>
		<div class="key">J</div>
		<div class="key">K</div>
		<div class="key">L</div>
		<div class="key">Ö</div>
		<div class="key">Ä</div>
		<div class="key" style="width: 64px;">Enter</div>
	</div>
	<div class="row">
		<div class="key" style="width: 46px;">Shift</div>
		<div class="key">{`<`}</div>
		<div class="key">Y</div>
		<div class="key">X</div>
		<div class="key">C</div>
		<KeymapKey key="V" operator={config.V || ""}/>
		<div class="key">B</div>
		<div class="key">N</div>
		<div class="key">M</div>
		<div class="key">,</div>
		<div class="key">.</div>
		<div class="key">-</div>
		<div class="key" style="width: 86px;">Shift</div>
	</div>
	<div class="row">
		<div class="key" style="width: 42px;">ctrl</div>
		<div class="key" style="width: 42px;">alt</div>
		<div class="key" style="width: 42px;">cmd</div>
		<div class="key" style="width: 228px;"> </div>
		<div class="key" style="width: 40px;">cmd</div>
		<div class="key" style="width: 40px;">alt</div>
		<div class="arrows">
			<KeymapKey key="" operator={config.ArrowUp || ""}/>
			<KeymapKey key="" operator={config.ArrowLeft || ""}/>
			<KeymapKey key="" operator={config.ArrowDown || ""}/>
			<KeymapKey key="" operator={config.ArrowRight || ""}/>
		</div>
	</div>
</div>
