<script lang="ts">

    export let name: string;

</script>

<div class="appMenu">
    <button class="appMenuBtn">{name}</button>
    <div class="menuContent">
      <slot />
    </div>
  </div>