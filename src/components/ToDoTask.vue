<template>
  <div id="main">
    <!-- <input @click="doneTask(), $event.target.checked = false"
          type="checkbox"
          name="checkbox"
          :checked="task.status"> -->
    <md-checkbox @change="doneTask()" v-model="task.status"
                  class="md-primary"></md-checkbox>
    <input v-model="task.title" type="text"
            id="todoText"
            contenteditable="true"
            for="checkbox"
            class="transparentTextInput"
            @change="toDoTaskTiteUpdate">
    <span @click="deleteToDoTask(index)">Delete task</span>
  </div>
</template>

<script>
export default {
  name: 'ToDoTask',
  props: {
    task: Object,
    index: Number,
  },
  data() {
    return {

    };
  },
  methods: {
    toDoTaskTiteUpdate() {
      const updatedTask = {
        title: this.task.title,
      };
      this.$store.dispatch('updateToDoTask', updatedTask, this.index);
    },
    deleteToDoTask() {
      this.$store.dispatch('deleteToDoTask', this.index);
    },
    doneTask() {
      this.task.status = true;
      this.$store.dispatch('doneTask', this.index);
      this.$store.dispatch('deleteToDoTask', this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
#main {
  height: 32px;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 1px 5px;
  width: 95%;
  margin: auto;
  &:hover {
    background-color: #F1F1F1;
    input {
      background-color: #F1F1F1;
    }
  }
}
.md-primary {
  margin: 0;
  position: relative;
  top: 5px;
}
#todoText {
  border: none;
  outline: none;
  color: #222222;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  margin-left: 10px;
}
</style>
