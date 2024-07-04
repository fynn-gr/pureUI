<script lang="ts">
export let name: string;
export let checked: boolean;
export let checkboxName: string;
export let onChange = () => {};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class="option">
	<p class="name">{name}</p>
	<input type="checkbox" bind:checked on:change={onChange} />
	<p
		class="checkbox-name"
		on:click={() => {
			checked = !checked;
			onChange();
		}}
	>
		{checkboxName}
	</p>
</div>
