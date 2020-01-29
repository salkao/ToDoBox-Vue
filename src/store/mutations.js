import indexedDb from '../indexedDbstorage';

const ID = () => `${Math.random().toString(36).substr(2, 9)}`;
// Math.random should be unique because of its seeding algorithm.
// Convert it to base 36 (numbers + letters), and grab the first 9 characters
// after the decimal.

export default {
  ADD_TODO_TASK(state, toDoTask) {
    const task = toDoTask;
    task.id = ID();
    state.toDoList.unshift(task);
    task.status = task.status ? 1 : 0;
    indexedDb.saveTask(task);
  },
  UPDATE_TODO_TASK(state, updatedTask) {
    const { id, title, status } = updatedTask.task;
    state.toDoList[updatedTask.index].title = title;
    state.toDoList[updatedTask.index].status = status;
    indexedDb.updateTask(id, title);
  },
  DELETE_TODO_TASK(state, index) {
    const task = state.toDoList[index];
    state.toDoList.splice(index, 1);
    if (!task.status) {
      indexedDb.deleteTask(task.id);
    }
  },
  ADD_DONE_TASK(state, task) {
    state.doneList.push(task);
    indexedDb.doneTask(task.id);
  },
  REMOVE_DONE_TASK(state, index) {
    state.doneList[index].status = false;
    state.toDoList.unshift(state.doneList[index]);
    indexedDb.toDoTask(state.doneList[index].id);
    state.doneList.splice(index, 1);
  },
  UPDATE_TODO_LIST(state, value) {
    value.forEach((task) => {
      indexedDb.toDoTask(task.id);
    });
    state.toDoList = value;
  },
  UPDATE_DONE_LIST(state, value) {
    value.forEach((task) => {
      indexedDb.doneTask(task.id);
    });
    state.doneList = value;
  },
  DELETE_ALL_DONE_TASKS(state) {
    state.doneList = [];
    state.doneList.length = 0;
    indexedDb.deleteAllDoneTasks();
  },
  ADD_TASK_IMAGE(state, data) {
    state.toDoList[data.index].image = data.image;
    indexedDb.addImage(state.toDoList[data.index].id, data.image);
  },
};
