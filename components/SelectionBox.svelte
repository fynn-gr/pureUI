<script lang="ts">


interface Props {
	options: Array<{ name: string; value: any }>;
	onChange?: Function;
	selected: any;
}
let { options, onChange = () => {}, selected = $bindable() }: Props = $props();

let selectedObj: { name: string; value: any } = $state.raw(options[0]);
let exposed: boolean = $state(false);

$inspect(selectedObj);
</script>

<!--custom selection box used on windows and web-->
<div class="select">
	<button
		class="select-btn"
		onclick={() => {
			exposed = !exposed;
			onChange();
		}}>
		<div class="options">
			{#each options as e}
				<p class:sel={selectedObj == e}>{e.name}</p>
			{/each}
		</div>
			<img src="./icons/std/select_arrow.svg" alt="">
		</button
	>
	<div class="option-container" class:exposed>
		{#each options as option}
			<button
				class:selected={selectedObj == option}
				onclick={() => {
					selectedObj = option;
					exposed = false;
				}}
			>
				{option.name}
			</button>
		{/each}
	</div>
</div>
