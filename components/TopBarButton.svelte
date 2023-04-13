<script lang="ts">
    import { onMount } from "svelte";

    export let uiPlatform: string;
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
            console.log(cls, cls.classList.contains("buttonBar"))
            cls = cls.parentElement;

            if (cls.classList.contains("toolBar")) {
                topBarType = "toolBarButton"
                topBarShort = "tb"
            } else if (cls.classList.contains("buttonBar")) {
                topBarType = "buttonBarButton"
                topBarShort = "bb"
            }
        }

    })

</script>

<button
    bind:this={self}
    class={topBarType}
    on:click={!disabled ? onClick() : null}
    disabled={disabled}
>

    <img src={`../pureUI/icons/${topBarShort}_${uiPlatform}/${icon}.svg`} alt={toolTip}>

</button>