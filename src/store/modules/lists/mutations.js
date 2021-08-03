const SET_LISTS = (state, lists) => (state.all = lists);

const UPDATE_TITLE = (state, { index, value }) =>
  (state.all[index].title = value);

const UPDATE_LIST = (state, { index, value }) =>
  (state.all[index].cards = value);

export default { SET_LISTS, UPDATE_TITLE, UPDATE_LIST };
