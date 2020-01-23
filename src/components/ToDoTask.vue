<template>
  <div class="main">
    <input @click="doneTask(), $event.target.checked = false"
          type="checkbox"
          name="checkbox"
          :checked="task.status">
    <input v-model="task.title" type="text"
          ref="itemText"
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
.main {
  background-color: #ffffff;
}
</style>
