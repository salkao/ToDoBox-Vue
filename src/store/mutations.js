export default {
  ADD_TODO_TASK(state, toDoTask) {
    state.toDoList.unshift(toDoTask);
  },
  UPDATE_TODO_TASK(state, updatedTask) {
    state.toDoList[updatedTask.index].title = updatedTask.task.title;
    state.toDoList[updatedTask.index].status = updatedTask.task.status;
  },
  DELETE_TODO_TASK(state, index) {
    state.toDoList.splice(index, 1);
  },
  ADD_DONE_TASK(state, task) {
    state.doneList.push(task);
  },
  REMOVE_DONE_TASK(state, index) {
    state.doneList[index].status = false;
    state.doneList.splice(index, 1);
  },
  UPDATE_TODO_LIST(state, value) {
    state.toDoList = value;
  },
  UPDATE_DONE_LIST(state, value) {
    state.doneList = value;
  },
  DELETE_ALL_DONE_TASKS(state) {
    state.doneList = [];
    state.doneList.length = 0;
  },
  ADD_TASK_IMAGE(state, data) {
    state.toDoList[data.index].image = data.image;
  },
};
