<template>
  <FadeTransition>
    <BasicButton v-if="showCreateForm" @click="toggleForm()"
      >Adicionar um Cartão</BasicButton
    >
    <Form v-else @submit.prevent="handleCreateCard()">
      <TextArea
        v-model="value"
        :value="value"
        @input="(e) => (value = e.target.value)"
      />
      <div class="flex items-center space-x-3">
        <BlueButton> Adicionar a lista </BlueButton>
        <XSVG @click="toggleForm()" />
      </div>
    </Form>
  </FadeTransition>
</template>

<script>
import FadeTransition from "../../atoms/transitions/fade.vue";
import XSVG from "../../atoms/svgs/X.vue";
import BasicButton from "../../atoms/buttons/basic.vue";
import BlueButton from "../../atoms/buttons/Blue.vue";
import TextArea from "../../atoms/inputs/TextArea.vue";
import Form from "../../atoms/forms/List.vue";

import { ref } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    FadeTransition,
    BasicButton,
    BlueButton,
    TextArea,
    Form,
    XSVG,
  },
  props: {
    listID: Number,
  },
  emits: ["create-card"],
  setup({ listID }, { emit }) {
    const showCreateForm = ref(false);
    const toggleForm = () => (showCreateForm.value = !showCreateForm.value);
    const value = ref("");

    const store = useStore();

    const handleCreateCard = () => {
      const payload = {
        listID,
        title: value.value,
        description: "",
      };
      emit("create-card", payload);
      toggleForm();
    };

    return { showCreateForm, value, toggleForm, handleCreateCard };
  },
};
</script>

<style lang="postcss" scoped>
</style>