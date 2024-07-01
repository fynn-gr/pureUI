<script lang="ts">
export let name: string;
export let checked: boolean = false;
export let onChange;
</script>

<button
	class="item"
	on:click={() => {
		checked = !checked;
		onChange();
	}}
>
	{#if checked == true}
		<img src="./icons/menu_win/checked.svg" alt="" />
	{:else if checked == false}
		<img src="" alt="" style="visibility: hidden;" />
	{/if}
	<p class="name">{name}</p>
</button>
