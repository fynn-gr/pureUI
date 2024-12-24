<script lang="ts">

interface Props {
	name: string,
	collapsed: boolean
}
let { name, collapsed }: Props = $props();

</script>

<div class="panel" class:collapsed>
	<button
		class="panel-name"
		onclick={() => {
			collapsed = !collapsed;
		}}
	>
		<img src="../../pureUI/icons/panelIcon.svg" alt={name} />
		<p>{name}</p>
	</button>

	<slot />
</div>
