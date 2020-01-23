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
  doneTask({ commit }, index) {
    commit('ADD_DONE_TASK', index);
  },
  removeDoneTask({ commit }, index) {
    commit('REMOVE_DONE_TASK', index);
  },
};
