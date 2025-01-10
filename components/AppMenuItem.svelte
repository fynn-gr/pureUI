<script lang="ts">
import { menuHandler } from "@/ts/Stores.svelte";

interface Props {
	id: string;
	name: string;
	accelerator?: string | null;
	disabled?: boolean;
	icon?: string | null;
	checked?: string | null;
}

let { id, name, accelerator, disabled, icon, checked }: Props = $props();
</script>

<button
	class="app-menu-item"
	class:disabled
	onclick={() => {
		$menuHandler.handle(id);
	}}
>
	{#if checked == "true"}
		<img src="./icons/app_menu/checked.svg" alt="" />
	{:else if checked == "false"}
		<img src="" alt="" style="visibility: hidden;" />
	{:else if icon != null}
		<img src={icon} alt="" />
	{/if}
	<p class="name">{name}</p>
	{#if accelerator != null}
		<p class="accelerator">{accelerator}</p>
	{/if}
</button>
