<script lang="ts">

interface Props {
  value: string;
  inactive: boolean;
}
let { value, inactive = false }: Props = $props();

</script>

<input class="prop" type="text" bind:value />
