<script lang="ts">
	export let name: string;
	export let collapsed = false;
</script>

<div class="panel" class:collapsed>
	<button
		class="panel-name"
		on:click={() => {
			collapsed = !collapsed;
		}}
	>
		<img src="../../pureUI/icons/panelIcon.svg" alt={name} />
		<p>{name}</p>
	</button>

	<slot />
</div>
