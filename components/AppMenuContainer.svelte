<script lang="ts">
import { clickOutside } from "../modules/utils";

let exposed = $state(false);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class="menu-container"
	onclick={e => {
		exposed = !exposed;
	}}
	use:clickOutside={() => {
		exposed = false;
	}}
>
	<slot />
</div>
