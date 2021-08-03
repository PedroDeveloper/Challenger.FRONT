<template>
  <ModalBasic>
    <NameInput
      :value="card.title"
      @input="(event) => (card.title = event.target.value)"
    />
    <TextArea
      :value="card.description"
      @input="(event) => (card.description = event.target.value)"
    />
    <div class="flex space-x-4 mx-2 py-4">
      <BlueButton @click="$emit('close')">Cancelar</BlueButton>
      <BlueButton @click="$emit('update-card', card)">Editar</BlueButton>
    </div>
  </ModalBasic>
</template>

<script>
import ModalBasic from "../../atoms/modal/Basic.vue";
import NameInput from "../../atoms/inputs/Name.vue";
import TextArea from "../../atoms/inputs/TextArea.vue";
import BlueButton from "../../atoms/buttons/Blue.vue";
import { ref } from "vue";
export default {
  components: { ModalBasic, NameInput, TextArea, BlueButton },
  props: { editCard: Object },
  emits: ["close", "update-card"],
  setup({ editCard }) {
    const card = ref(editCard ?? {});

    return { card };
  },
};
</script>

<style lang="postcss" scoped>
</style>