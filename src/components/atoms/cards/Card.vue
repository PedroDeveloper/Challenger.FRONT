<template>
  <div
    class="
      cursor-pointer
      shadow
      border-2
      rounded
      bg-white
      py-4
      px-2
      mx-2
      flex
      items-center
    "
  >
    <slot />
    <h1 class="flex-1"><slot name="title"></slot></h1>
    <slot class="hidden" name="icon"></slot>
  </div>
</template>

<script>
export default {
  name: "list-card",
};
</script>

<style lang="postcss" scoped>
</style>