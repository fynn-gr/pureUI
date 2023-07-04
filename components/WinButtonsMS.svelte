<script lang="ts">
  import { appWindow } from "@tauri-apps/api/window";
</script>

<div class="win-buttons-ms" data-tauri-drag-region>
  <button
    on:click={() => {appWindow.minimize()}}>
    <object data="./pureUI/icons/winButtonsMSMin.svg">
  </button>
  <button
    on:click={() => {appWindow.toggleMaximize()}}>
    <object data="./pureUI/icons/winButtonsMSMax.svg">
  </button>
  <button
    on:click={() => {appWindow.close()}}>
    <object data="./pureUI/icons/winButtonsMSClose.svg">
  </button>
</div>