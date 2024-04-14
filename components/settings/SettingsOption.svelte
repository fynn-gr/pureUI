<script lang="ts">
	export let type: optionType;
	export let name: string;
	export let value: any;
	export let checkboxName: string = "";
	export let options: Array<selectionOption> = [];
	export let onChange = () => {};

	type optionType = "checkbox" | "select";
	type selectionOption = { value: any; name: string };
</script>

<div class="option">
	<p class="name">{name}</p>
	{#if type == "checkbox"}
		<input type="checkbox" bind:checked={value} on:change={onChange} />
		<p class="checkbox-name">{checkboxName}</p>
	{:else if type == "select"}
		<div class="select-container">
			<select bind:value on:change={onChange}>
				{#each options as option}
					<option value={option.value}>{option.name}</option>
				{/each}
			</select>
			<div class="arrow">
				<img src="./icons/std/select_arrow.svg" alt="" />
			</div>
		</div>
	{/if}
</div>
