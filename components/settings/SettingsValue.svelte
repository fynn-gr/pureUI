<script lang="ts">
import PropNumber from "../props/PropNumber.svelte";

interface Props {
	name: string;
	value: number;
	min: number;
	max: number;
	softMin?: number;
	softMax?: number;
	decimalDisplay?: number;
	step: number;
	unit?: string;
	onChange: Function;
}

let {
	name,
	value = $bindable(),
	min,
	max,
	softMin = min,
	softMax = max,
	decimalDisplay = 2,
	step = 1,
	unit = "",
	onChange,
}: Props = $props();

let dispValue: number = $state(0);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div class="option">
	<p class="name">{name}</p>
	<PropNumber
		title={name}
		bind:value
		{min}
		{max}
		{softMax}
		{softMin}
		{decimalDisplay}
		{step}
		{unit}
		onFocus={() => {}}
		onBlur={() => {}}
		{onChange}
	/>
</div>
