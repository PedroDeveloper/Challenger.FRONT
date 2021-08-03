import ListsService from "../../../domain/list/lists.service";

const listsService = new ListsService();

const loadAll = async ({ commit }) => {
  const { data: lists } = await listsService.get();
  commit("SET_LISTS", lists);
};

export default { loadAll };
