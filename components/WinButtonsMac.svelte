<script lang="ts">
  import { invoke } from "@tauri-apps/api/tauri"
  import { appWindow } from '@tauri-apps/api/window'
  
  let hover = false;
</script>

<div class="winButtonsMac" data-tauri-drag-region>
  <button
    on:mouseenter={() => {hover = true}}
    on:mouseleave={() => {hover = false}}
    on:click={() => {appWindow.close()}}>
    <object data="../src-tauri/icons/winButtonsMacClose.svg" aria-label="">
  </button>
  <button 
    on:mouseenter={() => {hover = true}}
    on:mouseleave={() => {hover = false}}
    on:click={() => {appWindow.minimize()}}>
    <object data="../src-tauri/icons/winButtonsMacMin.svg" aria-label="">
  </button>
  <button
    on:mouseenter={() => {hover = true}}
    on:mouseleave={() => {hover = false}}
    on:click={() => {appWindow.toggleMaximize()}}>
    <object data="../src-tauri/icons/winButtonsMacMax.svg" aria-label="">
  </button>
</div>