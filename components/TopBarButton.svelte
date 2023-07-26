<script lang="ts">
    import { onMount } from "svelte";
    import { uiPlatform } from "@/stores";

    export let icon: string;
    export let onClick: Function
    export let toolTip: string;
    export let disabled = false;

    let self: HTMLElement;
    let topBarType;
    let topBarShort;


    onMount(() => {
        let cls = self;
        while (cls.parentElement) {
            cls = cls.parentElement;

            if (cls.classList.contains("toolbar")) {
                topBarType = "toolbar-button"
                topBarShort = "tb"
            } else if (cls.classList.contains("buttonbar")) {
                topBarType = "buttonbar-button"
                topBarShort = "bb"
            }
        }

    })

</script>

<button
    bind:this={self}
    class="topbar-button"
    on:click={!disabled ? onClick() : null}
    disabled={disabled}
>

    <img src={`./icons/${topBarShort}_${$uiPlatform}/${icon}.svg`} alt={toolTip}>

</button>