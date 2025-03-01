<script lang="ts">
interface Props {
	name: string;
	checked?: boolean;
	onChange?: Function;
	disabled?: boolean;
}
let { name, checked = $bindable(), onChange = () => {}, disabled = false}: Props = $props();
</script>

<button class="item" class:disabled={disabled} onclick={() => {
		//checked = !checked;
		onChange();
	}}>
	{#if checked == undefined}
		<img src="" alt="" style="visibility: hidden;" />
	{:else if checked == true}
		<img src="./icons/app_menu/checked.svg" alt="" />
	{:else if checked == false}
		<img src="" alt="" style="visibility: hidden;" />
	{/if}
	<p class="name">{name}</p>
</button>
