<script lang="ts">
  export let min = () => {}
  export let max = () => {}
  export let close = () => {}
  let hover = false;

</script>

<div class="win-buttons-mac" data-tauri-drag-region>
  <button
    on:mouseenter={() => {hover = true}}
    on:mouseleave={() => {hover = false}}
    on:click={close}>
    <img src="./pureUI/icons/winButtonsMacClose.svg" alt="">
  </button>
  <button 
    on:mouseenter={() => {hover = true}}
    on:mouseleave={() => {hover = false}}
    on:click={min}>
    <img src="./pureUI/icons/winButtonsMacMin.svg" alt="">
  </button>
  <button
    on:mouseenter={() => {hover = true}}
    on:mouseleave={() => {hover = false}}
    on:click={max}>
    <img src="./pureUI/icons/winButtonsMacMax.svg" alt="">
  </button>
</div>