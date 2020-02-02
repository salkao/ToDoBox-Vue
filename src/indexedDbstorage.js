import Dexie from 'dexie';

// all tasks are stored in same store, there is property status to indicate is task done.
const db = new Dexie('MyDatabase');
db.version(1).stores({
  tasks: 'id, status, title, image, timestamp',
});

export default {
  saveTask(task) {
    db.tasks.add(task);
  },
  updateTask(id, title) {
    db.tasks.update(id, { title });
  },
  deleteTask(id) {
    db.tasks.delete(id);
  },
  deleteAllDoneTasks() {
    db.tasks.where('status').equals(1).toArray().then((res) => {
      res.forEach((task) => {
        db.tasks.delete(task.id);
      });
    });
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
};
