<script lang="ts">
import { clickOutside } from "../modules/utils";

let exposed = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="menu-container"
	on:click={e => {
		exposed = !exposed;
	}}
  use:clickOutside={() => {
    exposed = false;
  }}
>
	<slot />
</div>
