<script lang="ts">
interface Props {
	name: String;
	value: string;
	customDefault?: String;
	onChange: Function;
}
let { name, value, customDefault, onChange }: Props = $props();
const accentColors = [
	{ name: "Blue", value: "var(--sys-blue)" },
	{ name: "Purple", value: "var(--sys-purple)" },
	{ name: "Pink", value: "var(--sys-pink)" },
	{ name: "Red", value: "var(--sys-red)" },
	{ name: "Orange", value: "var(--sys-orange)" },
	{ name: "Yellow", value: "var(--sys-yellow)" },
	{ name: "Green", value: "var(--sys-green)" },
];
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="settings-accent-color option">
	<p class="name">{name}</p>
	<div class="color-selector">
		{#if customDefault}
			<div
				class="color"
        class:active={value == "mono"}
        onclick={() => {
					value = "mono";
				}}
				style="background: linear-gradient(to bottom, white 50%, black 50%);"
			>
				<div
					style="position: absolute; inset: 5px; background: linear-gradient(to bottom, black 50%, white 50%); border-radius: 50%;"
				></div>
			</div>
		{/if}
		{#each accentColors as color}
			<div
        onclick={() => {
          value = color.value;
        }}
				class="color"
        class:active={value == color.value}
				style="background-color: {color.value};"
			></div>
		{/each}
	</div>
</div>
