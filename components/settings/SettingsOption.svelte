<script lang="ts">
	import { uiPlatform } from "@/stores";

	export let type: optionType;
	export let name: string;
	export let value: any = null;
	export let checked: boolean = false;
	export let checkboxName: string = "";
	export let options: Array<selectionOption> = [];
	export let onChange = () => {};

	type optionType = "checkbox" | "select";
	type selectionOption = { value: any; name: string };
</script>

<div class="option">
	<p class="name">{name}</p>
	{#if type == "checkbox"}
		<input type="checkbox" bind:checked on:change={onChange} />
		<p class="checkbox-name">{checkboxName}</p>
	{:else if type == "select"}
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
	{/if}
</div>
