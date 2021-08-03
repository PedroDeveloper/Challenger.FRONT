<template>
  <div
    class="
      absolute
      top-1/2
      left-1/2
      transform
      -translate-x-1/2 -translate-y-1/2
      w-96
      bg-white
      z-50
    "
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Modal Basic",
};
</script>

<style lang="postcss" scoped>
</style>