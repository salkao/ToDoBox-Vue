export default {
  addToDoTask({ commit }, task) {
    commit('ADD_TODO_TASK', task);
  },
  updateToDoTask({ commit }, task, index) {
    commit('UPDATE_TODO_TASK', task, index);
  },
  deleteToDoTask({ commit }, index) {
    commit('DELETE_TODO_TASK', index);
  },
  doneTask({ commit }, task) {
    commit('ADD_DONE_TASK', task);
  },
  removeDoneTask({ commit }, index) {
    commit('REMOVE_DONE_TASK', index);
  },
  updateToDoList({ commit }, value) {
    commit('UPDATE_TODO_LIST', value);
  },
  updateDoneList({ commit }, value) {
    commit('UPDATE_DONE_LIST', value);
  },
};
