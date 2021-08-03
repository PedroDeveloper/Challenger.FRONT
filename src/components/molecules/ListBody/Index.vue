<template>
  <Card>
    <template #title>
      {{ title }}
    </template>

    <template #icon>
      <PencilSVG @click="$emit('delete-card', { index, id })" />
    </template>
  </Card>
</template>

<script>
import Card from "../../atoms/cards/Card.vue";
import PencilSVG from "../../atoms/svgs/Pencil.vue";
export default {
  components: { Card, PencilSVG },
  emits: ["delete-card"],
  props: {
    title: String,
    index: Number,
    id: Number,
  },
};
</script>

<style lang="postcss" scoped>
</style>