<script lang="ts">

    export let key: string;
    export let operator: string ="";

</script>

<div
    class="key"
    class:active={operator != ""}
>
    {key}
    <p
        class="operator"
        style={`opacity: ${operator == "" ? "0%" : "100%"};`}
    >
        {operator}
    </p>
</div>