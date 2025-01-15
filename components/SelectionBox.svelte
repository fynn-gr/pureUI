<script lang="ts">
import { uiPlatform } from "@/ts/Stores.svelte";

interface Props {
	options: Array<{ name: string; value: any }>;
	onChange?: Function;
	selected: any;
}
let { options, onChange = () => {}, selected = $bindable() }: Props = $props();

let selectedObj: { name: string; value: any } = $state.raw(options[0]);
let exposed: boolean = $state(false);

$inspect(selectedObj);
</script>

<!--custom selection box used on windows and web-->
<div class="select">
	<button
		class="select-btn"
		onclick={() => {
			exposed = !exposed;
			onChange();
		}}>{selectedObj.name}</button
	>
	<div class="option-container" class:exposed>
		{#each options as option}
			<button
				class:selected={selectedObj == option}
				onclick={() => {
					selectedObj = option;
					exposed = false;
				}}
			>
				{option.name}
			</button>
		{/each}
	</div>
</div>
