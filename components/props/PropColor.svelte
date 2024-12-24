<script lang="ts">

interface Props {
  value: string,
  inactive: boolean,
}
let { value, inactive }: Props = $props();

</script>

<input class="prop" type="color" bind:value={value} />
