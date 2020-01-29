import Dexie from 'dexie';

const db = new Dexie('MyDatabase');
db.version(1).stores({
  tasks: 'id, status, title, image',
});


export default {
  saveTask(task) {
    db.tasks.add(task);
  },
  updateTask(id, title) {
    db.tasks.update(id, { title: title }); // eslint-disable-line
  },
  doneTask(id) {
    db.tasks.update(id, { status: 1 });
  },
  toDoTask(id) {
    db.tasks.update(id, { status: 0 });
  },
  addImage(id, image) {
    db.tasks.update(id, { image });
  },
  getToDoList() {
    return db.tasks.where('status').equals(0).toArray();
  },
  getDoneList() {
    return db.tasks.where('status').equals(1).toArray();
  },
  saveData(tasks) {
    console.log(tasks, 'taskovi');
  },
};
