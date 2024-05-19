<script lang="ts">
export let name: string;
</script>

<div class="aubMenu">
	<button class="subMenuBtn">{name}</button>
	<div class="menuContent">
		<slot />
	</div>
</div>
