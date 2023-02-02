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
    <object data="./icons/winButtonsMacClose.svg" aria-label="">
  </button>
  <button 
    on:mouseenter={() => {hover = true}}
    on:mouseleave={() => {hover = false}}
    on:click={() => {appWindow.minimize()}}>
    <object data="./icons/winButtonsMacMin.svg" aria-label="">
  </button>
  <button
    on:mouseenter={() => {hover = true}}
    on:mouseleave={() => {hover = false}}
    on:click={() => {appWindow.toggleMaximize()}}>
    <object data="./icons/winButtonsMacMax.svg" aria-label="">
  </button>
</div>