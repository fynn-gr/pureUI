<script lang="ts">
import type { ChangeEventHandler } from "svelte/elements";

interface Props {
	name: string;
	checked: boolean;
	checkboxName: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

let { name, checked = $bindable(), checkboxName, onChange }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div class="option">
	<p class="name">{name}</p>
	<input type="checkbox" bind:checked onchange={onChange} />
	<p
		class="checkbox-name"
		onclick={(e: MouseEvent) => {
			checked = !checked;
			onChange(e);
		}}
	>
		{checkboxName}
	</p>
</div>
