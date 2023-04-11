<script lang="ts">

    export let value: number;
    export let min: number;
    export let max: number;
    export let softMin: number = null;
    export let softMax: number = null;
    export let float = false;
    export let inactive = false;

</script>

<input
    class="prop"
    type="number"
    {value}
    max={max}
    min={min}/>