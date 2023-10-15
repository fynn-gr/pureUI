<script lang="ts">

    export let type: optionType;
    export let name: string;
    export let value: any;
    export let checkboxName: string = "";
    export let options: Array<selectionOption> = [];
    export let onChange = () => {};

    type optionType =  "checkbox" | "select";
    type selectionOption = { value: any, name: string };

</script>

<div class="option">
    <p class="name">{name}</p>
    {#if type == "checkbox"}
        <input type="checkbox" bind:checked={value} on:change={onChange}>
        <p class="checkbox-name">{checkboxName}</p>
    {:else if type == "select"}
        <select bind:value={value}>
            {#each options as option}
                <option value={option.value}>{option.name}</option>
            {/each}
        </select>
    {/if}
</div>