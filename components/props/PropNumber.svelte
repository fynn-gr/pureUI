<script lang="ts">
export let value: number;
export let min: number;
export let max: number;
export let softMin: number = min;
export let softMax: number = max;
export let decimalDisplay: number = 2;
export let step: number = 1;
export let unit = "";
export let disabled = false;
export let onFocus = () => {};
export let onBlur = () => {};
export let title: string;
let dispValue: number = 0;

function handleChange() {}

$: if (decimalDisplay == 0) {
	dispValue = Math.round(value);
} else {
	dispValue = Math.round(value * decimalDisplay) / decimalDisplay;
}
</script>

<div class="prop-number">
	<p class="display">{dispValue} {unit}</p>
	<input
		type="number"
		{disabled}
		on:change={handleChange}
		bind:value
		{step}
		{max}
		{min}
		on:focus={onFocus}
		on:blur={onBlur}
	/>
	<span>
		<button
			on:click={() => {
				value = value + step;
			}}>
				<img class="arrow-icon" src="./icons/std/number_arrow_up.svg" alt="">
			</button
		>
		<button
			on:click={() => {
				value = value - step;
			}}>
				<img class="arrow-icon" src="./icons/std/number_arrow_down.svg" alt="">
			</button
		>
	</span>
</div>
