<script lang="ts">
import { uiPlatform } from "@/ts/Stores";

export let name: string;
export let value: any;
export let options: Array<selectionOption>;
export let onChange = () => {};

type selectionOption = { value: any; name: string };

</script>

<div class="option">
	<p class="name">{name}</p>
	<div class="select-container">
		<select bind:value on:change={onChange}>
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
