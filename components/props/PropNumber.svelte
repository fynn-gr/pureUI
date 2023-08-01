<script lang="ts">

    export let value: number;
    export let min: number;
    export let max: number;
    export let softMin: number = null;
    export let softMax: number = null;
    export let decimalDisplay: number = 2;
    export let decimalValue: number = null;
    export let unit = "";
    export let inactive = false;

    function handleChange()  {
        
    }

</script>

<input
    class="prop"
    type="number"
    disabled={inactive}
    on:change={handleChange}
    bind:value={value}
    max={max}
    min={min}
/>