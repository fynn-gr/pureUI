<script lang="ts">
import { clickOutside } from "../modules/utils";

export let name: string;
let exposed: boolean = false;

function handleOpenMenu(e) {
	exposed = !exposed;
}
</script>

<div
	class="app-menu"
	use:clickOutside={() => {
		exposed = false;
		console.log("c outside");
	}}
>
	<button on:click={handleOpenMenu} class="app-menu-btn">{name}</button>
	{#if exposed}
		<div class="menu-content">
			<slot />
		</div>
	{/if}
</div>
