<script lang="ts">
    import AppMenu from "./AppMenu.svelte";

    export let uiPlatform;
    export let theme;

</script>

<AppMenu name="Dev">
    <button on:click={() => {uiPlatform = "mac"}}>mac</button>
    <button on:click={() => {uiPlatform = "win"}}>win</button>
    <button on:click={() => {uiPlatform = "web"}}>web</button>
    <div class="seperator" />
    <button on:click={() => {theme = "dark"}}>dark</button>
    <button on:click={() => {theme = "light"}}>light</button>
</AppMenu>