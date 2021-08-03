<template>
  <transition name="slide-fade" mode="out-in">
    <slot></slot>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(2px);
  opacity: 0;
}
</style>