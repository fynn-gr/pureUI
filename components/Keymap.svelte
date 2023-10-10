<script lang="ts">

	export let keySize: number;
	export let config: any;
	let layout = [
		[]
	]

</script>

<div
	class="keymap"
	>
	<div class="row">
		<div class="key">^</div>
		<div class="key">1</div>
		<div class="key">2</div>
		<div class="key">3</div>
		<div class="key">4</div>
		<div class="key">5</div>
		<div class="key">6</div>
		<div class="key">7</div>
		<div class="key">8</div>
		<div class="key">9</div>
		<div class="key">0</div>
		<div class="key">ß</div>
		<div class="key">´</div>
		<div class="key" style="width: 42px;">Back</div>
	</div>
	<div class="row">
		<div class="key" style="width: 56px;">Tab</div>
		<div class="key">Q</div>
		<div class="key">W</div>
		<div class="key">E</div>
		<div class="key">R</div>
		<div class="key">T</div>
		<div class="key">Z</div>
		<div class="key">U</div>
		<div class="key">I</div>
		<div class="key">O</div>
		<div class="key">P</div>
		<div class="key">Ü</div>
		<div class="key">+</div>
		<div class="key" style="">#</div>
	</div>
	<div class="row">
		<div class="key" style="width: 68px;">Caps</div>
		<div class="key">A</div>
		<div class="key">S</div>
		<div class="key">D</div>
		<div class="key">F</div>
		<div class="key">G</div>
		<div class="key">H</div>
		<div class="key">J</div>
		<div class="key">K</div>
		<div class="key">L</div>
		<div class="key">Ö</div>
		<div class="key">Ä</div>
		<div class="key" style="">Enter</div>
	</div>
	<div class="row">
		<div class="key" style="width: 46px;">Shift</div>
		<div class="key">{`<`}</div>
		<div class="key">Y</div>
		<div class="key">X</div>
		<div class="key">C</div>
		<div class="key">V</div>
		<div class="key">B</div>
		<div class="key">N</div>
		<div class="key">M</div>
		<div class="key">,</div>
		<div class="key">.</div>
		<div class="key">-</div>
		<div class="key" style="">Shift</div>
	</div>
	<div class="row">
		<div class="key" style="width: 42px;">ctrl</div>
		<div class="key" style="width: 42px;">alt</div>
		<div class="key" style="width: 42px;">cmd</div>
		<div class="key" style="width: 228px;"> </div>
		<div class="key" style="width: 40px;">cmd</div>
		<div class="key" style="width: 40px;">alt</div>
		<div class="arrows">
			<div class="key"></div>
			<div class="key"></div>
			<div class="key"></div>
			<div class="key"></div>
		</div>
	</div>
</div>

<style lang="scss">

	.keymap {
		box-sizing: border-box;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 4px;

		.row {
			display: flex;
			gap: 4px;

			.key {
				width: 36px;
				height: 36px;
				border: 2px solid white;
				border-radius: 4px;	
				font-size: 12px;
				padding: 0 3px;
			}

			.arrows {
				.key {
					height: 16px;

					&:nth-child(1) {
						margin: 0 auto;
					}
				}
			}
		}
	}

</style>