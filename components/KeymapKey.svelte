<script lang="ts">

    export let code: string;
    export let name: string;
    export let width: number;
    export let selected: any;
    export let binded: boolean;
    export let modifier: string;
    let modifierKeys = [
        "MetaLeft", "MetaRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight"
    ]

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="key"
    class:binded={binded}
    class:selected={selected == code}
    class:modifier={modifier == code}
    style={`width: ${width || 36}px;`}
    on:click={() => {
        if(modifierKeys.includes(code)) {
            if (modifier == code) {
                modifier = "standart"
            } else {
                modifier = code;
            }
        } else {
            selected.code = code;
            selected.name = name;
        }
    }}
>
    {name}
</div>