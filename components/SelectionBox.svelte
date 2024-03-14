<script lang="ts">
	import { uiPlatform } from "@/stores";

	type option = { name: string; value: any };

	export let options: Array<option>;
	export let onChange = () => {};
	export let selected: any;
	let selectedObj: option | undefined;
	let selectedName: string = "";
	selectionChange(selected);

	let exposed = false;

	function selectionChange(sel: any) {
		if (selected) {
			selectedObj = options.find(x => x.value == selected);
			console.log(selectedObj);
			selectedName = selectedObj.name;
		}
		console.log("change selected");
	}
	$: selectionChange(selected);

	function selectionObjChange(sel: any) {
		if (selectedObj) {
			selected = selectedObj.value;
			selectedName = selectedObj.name;
		}
	}
	$: selectionObjChange(selectedObj);
</script>

{#if $uiPlatform == "mac"}
	<!--default html selection box used on macOS-->
	<select bind:value={selected}>
		{#each options as option}
			<option value={option.value}>{option.name}</option>
		{/each}
	</select>
{:else}
	<!--custom selection box used on windows and web-->
	<div class="select">
		<button
			class="select-btn"
			on:click={() => {
				exposed = true;
			}}>{selectedName}</button
		>
		<div class="option-container" class:exposed>
			{#each options as option}
				<button
					class:selected={selected == option}
					on:click={() => {
						selectedObj = option;
					}}
				>
					{option.name}
				</button>
			{/each}
		</div>
	</div>
{/if}
