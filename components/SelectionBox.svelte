<script lang="ts">
	export let uiPlatform = "win";
	export let options: Array<string>;
	export let optionNames = options;
	export let selected: string;
</script>

{#if uiPlatform == "mac"}
	<!--default html selection box used on macOS-->
	<select bind:value={selected}>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
{:else}
	<!--custom selection box used on windows and web-->
	<div class="select">
		<button class="selectBtn">{selected}</button>
		<div class="optionContainer">
			{#each options as option, i}
				<button
					class:selected={selected == option}
					on:click={() => {
						selected = option;
					}}
				>
					{option}
				</button>
			{/each}
		</div>
	</div>
{/if}
