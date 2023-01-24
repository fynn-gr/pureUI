<script lang="ts">
  import { appWindow } from "@tauri-apps/api/window";
</script>

<div class="winButtonsMS" data-tauri-drag-region>
  <button
    on:click={() => {appWindow.minimize()}}>
    <object data="../src-tauri/icons/winButtonsMSMin.svg">
  </button>
  <button
    on:click={() => {appWindow.toggleMaximize()}}>
    <object data="../src-tauri/icons/winButtonsMSMax.svg">
  </button>
  <button
    on:click={() => {appWindow.close()}}>
    <object data="../src-tauri/icons/winButtonsMSClose.svg">
  </button>
</div>