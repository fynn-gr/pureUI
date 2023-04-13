<script lang="ts">
    import { onMount } from "svelte";

	export let uiPlatform: string;
	export let icon: string;
	export let iconActive: string = null;
	export let active: boolean;
	export let activeColor: string = null;
	export let toolTip: string;
	export let disabled = false;

	let self: HTMLElement;
    let topBarType;
    let topBarShort;
	let iconPath;
	let iconPathActive;

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

		iconPath = `../pureUI/icons/${topBarShort}_${uiPlatform}/${icon}.svg`

		if (iconActive == null) {
			iconPathActive = iconPath;
		} else {
			iconPathActive = `../pureUI/icons/${topBarShort}_${uiPlatform}/${iconActive}.svg`
		}
    })
	
</script>

<button
	bind:this={self}
	class={topBarType}
	on:click={() => {!disabled ? active = !active : active = active}}
	disabled={disabled}
	style={`background-color: ${active ? activeColor : 'none'};`}
>

	<img
		src={active ? iconPathActive : iconPath}
		alt={toolTip}
	>

</button>