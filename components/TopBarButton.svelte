<script lang="ts">

    export let icon: string;
    export let onClick: Function
    export let toolTip: string;
    export let disabled = false;

</script>

<button
    on:click={!disabled ? onClick() : null}
    disabled={disabled}
>

    <img src={icon} alt={toolTip}>

</button>