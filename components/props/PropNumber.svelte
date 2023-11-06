<script lang="ts">
	import { isEditing } from "@/stores";

	export let value: number;
	export let min: number;
	export let max: number;
	export let softMin: number = null;
	export let softMax: number = null;
	export let decimalDisplay: number = 2;
	export let decimalValue: number = null;
	export let step: number = null;
	export let unit = "";
	export let inactive = false;
	export let onFocus = () => {};
	export let onBlur = () => {};

	function handleChange() {}
</script>

<div
	class="prop-number"
>
	<p class="display">{Math.round(value)}{unit}</p>
	<input
		type="number"
		disabled={inactive}
		on:change={handleChange}
		bind:value
		{step}
		{max}
		{min}
		on:focus={onFocus}
		on:blur={onBlur}
	/>
</div>
