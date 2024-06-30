<script lang="ts">

export let name: string;
export let checked: boolean;
export let checkboxName: string;
export let onChange = () => {};

</script>

<div class="option">
	<p class="name">{name}</p>
	<input type="checkbox" bind:checked on:change={onChange} />
	<p class="checkbox-name">{checkboxName}</p>
</div>
