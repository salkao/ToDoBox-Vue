<template>
<div class="main">
  <div id="lists">
    <div class="list">
        <div class="listHeader">
          <h4 class="col">To do</h4>
          <div @click="onAddButtonClicked">+</div>
        </div>
        <div v-if="addingNewTask">
          <input v-model="isDone" type="checkbox">
          <input ref="taskTitle"
                type="text"
                @blur="addNewToDoTask"
                v-model="newTaskTitle">
        </div>
        <to-do-task v-for="(task, index) in toDoList"
                    :key="task.Id"
                    :task="task"
                    :index="index"
        />
    </div>
    <div class="list">
      <div class="listHeader">
          <h4 class="col">Done</h4>
          <div @click="onAddButtonClicked">-</div>
      </div>
      <done-task v-for="(task, index) in doneList"
                  :key="task.Id" :task="task" :index="index"
      />
    </div>
  </div>
</div>

</template>

<script>
import ToDoTask from './ToDoTask.vue';
import doneTask from './DoneTask.vue';

export default {
  name: 'HelloWorld',
  components: {
    ToDoTask,
    doneTask,
  },
  data() {
    return {
      newTaskTitle: '',
      isDone: false,
      addingNewTask: false,
    };
  },
  methods: {
    onAddButtonClicked() {
      this.addingNewTask = true;
      this.$nextTick(() => {
        this.$refs.taskTitle.focus();
      });
    },
    addNewToDoTask() {
      const task = {
        title: this.newTaskTitle,
        status: this.isDone,
      };
      this.addingNewTask = false;
      this.newTaskTitle = '';
      this.$store.dispatch('addToDoTask', task);
    },
  },
  computed: {
    toDoList() {
      return this.$store.getters.getToDoList;
    },
    doneList() {
      return this.$store.getters.getDoneList;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#lists {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .list {
    background-color: #ffffff;
    height: auto;
    width: 445px;
    text-align: left;
  }
  .list+.list {
    margin-left: 30px;
  }
}
.listHeader {
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  .col {
    margin: 0;
    flex: 1 0 auto;
    text-align: left;
  }
}
</style>
