export default function Properties() {
	return(
		<div class="navList">
			<p class="category">default</p>
			<button>
				<object data="../../src-tauri/icons/tb_play.svg"></object>
				<p>Full HD</p>
			</button>
			<button class="active">
				<object data="../../src-tauri/icons/tb_play.svg"></object>
				<p>WQHD</p>
			</button>
			<button>
				<object data="../../src-tauri/icons/tb_play.svg"></object>
				<p>UHD</p>
			</button>
		</div>
	);
}