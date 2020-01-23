export default {
  ADD_TODO_TASK(state, toDoTask) {
    state.toDoList.unshift(toDoTask);
  },
  UPDATE_TODO_TASK(state, task, index) {
    state.toDoList[index] = state;
  },
  DELETE_TODO_TASK(state, index) {
    state.toDoList.splice(index, 1);
  },
  ADD_DONE_TASK(state, index) {
    state.doneList.push(state.toDoList[index]);
  },
  REMOVE_DONE_TASK(state, index) {
    state.doneList[index].status = false;
    state.doneList.splice(index, 1);
  },
};
