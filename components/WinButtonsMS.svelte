<script lang="ts">
  import { appWindow } from "@tauri-apps/api/window";
</script>

<div class="winButtonsMS" data-tauri-drag-region>
  <button
    on:click={() => {appWindow.minimize()}}>
    <object data="./icons/winButtonsMSMin.svg">
  </button>
  <button
    on:click={() => {appWindow.toggleMaximize()}}>
    <object data="./icons/winButtonsMSMax.svg">
  </button>
  <button
    on:click={() => {appWindow.close()}}>
    <object data="./icons/winButtonsMSClose.svg">
  </button>
</div>