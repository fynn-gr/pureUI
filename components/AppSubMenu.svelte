<script lang="ts">

interface Props { name: string };
let { name }: Props = $props();

</script>

<div class="aubMenu">
	<button class="subMenuBtn">{name}</button>
	<div class="menuContent">
		<slot />
	</div>
</div>
