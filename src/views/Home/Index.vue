<template>
  <div class="kanban__container w-screen h-screen flex">
    <div class="p-3" v-for="(component, index) in listsComponents" :key="index">
      <draggable
        class="bg-white bg-opacity-90 pt-5 rounded w-60 min-h-[100px]"
        :list="lists[index].cards"
        :item-key="String(index)"
        :key="index"
        :group="{ name: 'people' }"
      >
        <template #header>
          <ListHeader
            :title="lists[index]?.title"
            :key="lists[index]?.title"
            :index="index"
          />
        </template>

        <template #item="{ element }" class="space-y-3">
          <ListBody
            :title="element?.title"
            @delete-card="handleDeleteCard"
            @dblclick="toggleEditCard(element, index, row)"
            :index="index"
            :id="element?.id"
          />
        </template>

        <template #footer>
          <ListFooter
            :listID="lists[index]?.id"
            @create-card="handleCreateCard"
        /></template>
      </draggable>
    </div>
    <CardEdit
      v-if="editCard"
      :editCard="editCard"
      @close="editCard = null"
      @update-card="handleUpdateCard($event)"
    />

    <div class="ml-auto mt-10 mr-5">
      <div
        class="text-white font-bold p-2 bg-red-700 rounded-md"
        @click="logout()"
      >
        Sair
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import draggable from "vuedraggable";
import ListHeader from "../../components/molecules/ListHeader/Index.vue";
import ListBody from "../../components/molecules/ListBody/Index.vue";
import ListFooter from "../../components/molecules/ListFooter/Index.vue";
import CardEdit from "../../components/molecules/CardEdit/Index.vue";
import useLists from "../../composables/lists/useLists";
import { useRouter } from "vue-router";
export default {
  components: { draggable, ListHeader, ListBody, CardEdit, ListFooter },
  setup() {
    const router = useRouter();
    const { loadAll, create, remove } = useLists();
    const lists = ref([]);
    const editIndex = ref(null);

    const listsComponents = computed(() => lists.value.length);
    const editCard = ref(null);

    onMounted(async () => {
      lists.value = await loadAll();
    });

    const handleCreateCard = async (card) => {
      const createdCard = await create(card);

      const index = lists.value.findIndex(
        (list) => list.id === createdCard.listID
      );

      lists.value[index].cards.push(createdCard);
    };

    const handleDeleteCard = ({ index, id }) => {
      remove(id);
      lists.value[index].cards = lists.value[index].cards.filter(
        (card) => card.id !== id
      );
    };

    const handleUpdateCard = (card) => {
      const idx = lists.value[editIndex.value].cards.findIndex(
        ({ id }) => id === card.id
      );

      lists.value[editIndex.value].cards[idx] = { ...card };
    };

    const toggleCreateList = () => {
      isCreateNewList.value = !isCreateNewList.value;
    };

    const toggleEditCard = (card, index) => {
      editCard.value = card;
      editIndex.value = index;
    };

    const logout = () => {
      sessionStorage.removeItem("trtst");
      router.push("/login");
    };

    return {
      lists,
      listsComponents,
      handleCreateCard,
      handleDeleteCard,
      handleUpdateCard,
      editCard,
      logout,
    };
  },
};
</script>

<style lang="postcss" scoped>
.kanban__container {
  background-image: url("../../assets/bg.svg");
}
</style>