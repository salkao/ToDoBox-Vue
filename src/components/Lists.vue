<template>
  <div class="main">
    <nav-bar/>
    <div class="background">
      <div class="mainTitle column1">
        <h1>Manage your to do list</h1>
        <h6>Click on checkbox or drag and drop to done</h6>
      </div>
      <div class="image column2">
        <!-- <img src="../assets/backgroundImage.svg" alt=""> -->
      </div>
    </div>
    <div id="lists">
      <div class="list">
        <div class="listHeader">
          <h4 class="col">To do</h4>
          <div @click="onAddButtonClicked">
            <i class="material-icons icon">
              add_box
            </i>
          </div>
        </div>
        <hr>
        <div v-if="addingNewTask" id="newTask">
          <md-checkbox v-model="isDone"
                        class="md-primary">
          </md-checkbox>
          <input ref="taskTitle"
                type="text"
                @blur="addNewToDoTask"
                v-model="newTaskTitle">
        </div>
        <draggable element='div' class="list-group"
                    v-model="toDoList"
                    :options="options">
          <to-do-task class="list-group-item"  v-for="(task, index) in toDoList"
                    :key="task.id"
                    :task="task"
                    :index="index"
        />
        </draggable>
      </div>
      <div class="list">
        <div class="listHeader">
            <h4 class="col">Done</h4>
            <div @click="deleteAllDoneTasks">
              <i class="material-icons icon">
                delete_sweep
              </i>
            </div>
        </div>
        <hr>
        <draggable element='div' class="list-group" v-model="doneList"
          :options="options">
            <done-task class="list-group-item" v-for="(task, index) in doneList"
                    :key="task.id" :task="task" :index="index"
          />
        </draggable>
      </div>
  </div>
</div>

</template>

<script>
import draggable from 'vuedraggable';
import ToDoTask from './ToDoTask.vue';
import doneTask from './DoneTask.vue';
import navBar from './NavBar.vue';

export default {
  name: 'HelloWorld',
  components: {
    ToDoTask,
    doneTask,
    navBar,
    draggable,
  },
  data() {
    return {
      newTaskTitle: '',
      isDone: false,
      addingNewTask: false,
      isDragging: false,
      delayedDragging: false,
      options: {
        animation: 200,
        group: 'list',
        clone: () => false,
      },
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
      if (this.newTaskTitle === '') {
        this.addingNewTask = false;
        return;
      }
      const task = {
        title: this.newTaskTitle,
        status: this.isDone,
      };
      this.addingNewTask = false;
      this.newTaskTitle = '';
      this.$store.dispatch('addToDoTask', task);
    },
    deleteAllDoneTasks() {
      this.$store.dispatch('deleteAllDoneTasks');
    },
  },
  beforeMount() {
    if (this.$store.getters.getLoggedUser === null) {
      this.$router.push({ name: 'login' });
    }
  },
  computed: {
    // toDoList() {
    //   return this.$store.getters.getToDoList;
    // },
    // doneList() {
    //   return this.$store.getters.getDoneList;
    // },
    toDoList: {
      get() {
        return this.$store.getters.getToDoList;
      },
      set(value) {
        value.forEach((element) => {
          element.status = false; // eslint-disable-line no-param-reassign
        });
        this.$store.dispatch('updateToDoList', value);
      },
    },
    doneList: {
      get() {
        return this.$store.getters.getDoneList;
      },
      set(value) {
        value.forEach((element) => {
          element.status = true; // eslint-disable-line no-param-reassign
        });
        this.$store.dispatch('updateDoneList', value);
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .list-group {
    min-height: 50px;
  }
  #lists {
    position: relative;
    bottom: 250px;
    padding-bottom: 60px;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    .list {
      background-color: #ffffff;
      max-width: 555px;
      flex: 50;
      text-align: left;
      padding-bottom: 15px;
      min-height: 150px auto;
      border-radius: 4px;
    }
    .list+.list {
      margin-left: 30px;
    }
  }
  .listHeader {
    padding: 20px 20px 10px 20px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    .col {
      margin: 0;
      flex: 1 0 auto;
      text-align: left;
    }
  }
  .md-primary {
    margin: 0;
    position: relative;
    top: 6px;
  }
  #newTask {
    height: 32px;
    width: 95%;
    margin: auto;
    padding-left: 5px;
    background-color: #F1F1F1;
    input {
      border: none;
      outline: none;
      color: #2c3e50;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      text-align: left;
      margin-left: 10px;
      background-color: #F1F1F1;
    }
  }
  .icon {
    cursor: pointer;
    color: #A4A4A4;
    &:hover {
      color: #2c3e50;
    }
  }
  hr {
    width: 90%;
    background-color: #F1F1F1;
    border: 1px solid #F1F1F1;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(30px);
  }
  .background {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .mainTitle {
    color: #222222;
    max-width: 555px;
    flex: 50;
    text-align: left;
    padding-top: 120px;
    padding-bottom: 290px;
    font-size: 20px;
    white-space: nowrap;
  }
  .image {
    position: relative;
    left: 50px;
    max-width: 555px;
    flex: 50;
    background-image: url('../assets/backgroundImage.svg');
    background-size: 500px 100%;
    background-repeat: no-repeat;
  }
  @media only screen and (max-width: 768px) {
    #lists {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .list {
      width: 95%;
    }
    .list+.list {
      margin-left: 0;
      margin-top: 30px;
    }
  }
    .mainTitle {
      h1 {
        font-size: 25px;
      }
      h6 {
        font-size: 10px;
      }
    }
    .image {
      background-position-x: -100px;
    }
  }
  @media only screen and (max-width: 550px) {
    .mainTitle {
      background-position-x: 150px;
      background-repeat: no-repeat;
      background-size: 400px 500px;
      width: 100%;
      background-image: url('../assets/backgroundImage.svg');
    }
    .image {
      display: none;
    }
  }
</style>
