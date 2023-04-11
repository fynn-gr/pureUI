<script lang="ts">
    import Icon from './Icon.svelte';

    export let uiPlatform: string;
    export let icon: string;
    export let onClick: Function
    export let toolTip: string;
    export let disabled = false;

</script>

<button
    on:click={!disabled ? onClick() : null}
    disabled={disabled}
>

    <Icon {icon} {uiPlatform}/>

</button>