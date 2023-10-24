<script lang="ts">
	export let name: string;
</script>

<div class="app-menu">
	<button class="app-menu-btn">{name}</button>
	<div class="menu-content">
		<slot />
	</div>
</div>
