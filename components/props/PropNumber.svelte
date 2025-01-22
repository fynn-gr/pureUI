<script lang="ts">
interface Props {
	value: number;
	min: number;
	max: number;
	softMin?: number;
	softMax?: number;
	decimalDisplay?: number;
	step?: number;
	unit?: string;
	disabled?: boolean;
	onFocus?: Function;
	onBlur?: Function;
	title: string;
}
let {
	value = $bindable(),
	min,
	max,
	softMin = min,
	softMax = max,
	decimalDisplay = 2,
	step = 1,
	unit = "",
	disabled = false,
	onFocus = () => {},
	onBlur = () => {},
	title,
}: Props = $props();

let dispValue: number = $state(0);

function handleChange() {}

$effect(() => {
	if (decimalDisplay == 0) {
		dispValue = Math.round(value);
	} else {
		dispValue = Math.round(value * decimalDisplay) / decimalDisplay;
	}
});
</script>

<div class="prop-number">
	<p class="display">{dispValue} {unit}</p>
	<input
		type="number"
		{disabled}
		onchange={handleChange}
		bind:value
		{step}
		{max}
		{min}
		onfocus={() => {
			onFocus;
		}}
		onblur={() => {
			onBlur;
		}}
	/>
	<span>
		<button
			onclick={() => {
				value = value + step;
			}}
		>
			<img class="arrow-icon" src="./icons/std/number_arrow_up.svg" alt="" />
		</button>
		<button
			onclick={() => {
				value = value - step;
			}}
		>
			<img class="arrow-icon" src="./icons/std/number_arrow_down.svg" alt="" />
		</button>
	</span>
</div>
