<template>
  <div class="flex space-x-2 mx-2">
    <NameInput
      :value="value"
      @input="(event) => (value = event.target.value)"
      @blur="$store.commit('lists/UPDATE_TITLE', { index, value })"
    />
    <DotsSVG />
  </div>
</template>

<script>
import NameInput from "../../atoms/inputs/Name.vue";
import DotsSVG from "../../atoms/svgs/Dots.vue";
import { ref } from "vue";
export default {
  components: {
    NameInput,
    DotsSVG,
  },
  props: {
    title: String,
    index: Number,
  },
  setup({ title }) {
    const value = ref(title ?? "");
    return { value };
  },
};
</script>

<style lang="postcss" scoped>
</style>