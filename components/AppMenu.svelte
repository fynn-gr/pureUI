<script lang="ts">
interface Props { name: string };
let { name }: Props = $props();
</script>

<div class="app-menu">
	<button class="app-menu-btn">{name}</button>
	<div class="menu-content">
		<slot />
	</div>
</div>
