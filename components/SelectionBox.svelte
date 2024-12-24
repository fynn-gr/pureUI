<script lang="ts">
import { uiPlatform } from "@/ts/Stores";

interface Props {
	options: Array<{ name: string; value: any }>;
	onChange?: Function;
	selected: any;
}
let { options, onChange = () => {}, selected }: Props = $props();

let selectedObj: { name: string; value: any };
let selectedName: string;
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
$effect(() => {
	selectionChange(selected);
});

function selectionObjChange(sel: any) {
	if (selectedObj) {
		selected = selectedObj.value;
		selectedName = selectedObj.name;
	}
}
$effect(() => {
	selectionObjChange(selectedObj);
});
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
			onclick={() => {
				exposed = true;
			}}>{selectedName}</button
		>
		<div class="option-container" class:exposed>
			{#each options as option}
				<button
					class:selected={selected == option}
					onclick={() => {
						selectedObj = option;
					}}
				>
					{option.name}
				</button>
			{/each}
		</div>
	</div>
{/if}
