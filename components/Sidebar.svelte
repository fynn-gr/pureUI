<script lang="ts">

interface Props {
  width: number;
  show: boolean;
}
let { width, show }: Props = $props();
</script>

<div class="sidebar" style={`width: ${show ? width : 0}px;`}>
  <div class="siebar-inner">
    <slot />
  </div>
</div>