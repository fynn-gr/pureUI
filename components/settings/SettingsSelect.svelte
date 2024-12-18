<script lang="ts">
import { uiPlatform } from "@/ts/Stores";

interface Props {
	name: string,
	value: any,
	options: Array<selectionOption>,
	onChange: Function
}

let { name, value, options, onChange}: Props = $props();

type selectionOption = { value: any; name: string };
</script>

<div class="option">
	<p class="name">{name}</p>
	<div class="select-container">
		<select bind:value onchange={onChange}>
			{#each options as option}
				<option value={option.value}>{option.name}</option>
			{/each}
		</select>
		{#if $uiPlatform == "mac"}
			<div class="arrow">
				<img src="./icons/std/select_arrow.svg" alt="" />
			</div>
		{/if}
	</div>
</div>
