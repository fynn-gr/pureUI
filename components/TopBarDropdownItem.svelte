<script lang="ts">
interface Props {
	name: string;
	checked?: boolean;
	onChange?: Function;
}
let { name, checked = $bindable(), onChange = () => {} }: Props = $props();
</script>

<button
	class="item"
	onclick={() => {
		//checked = !checked;
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
