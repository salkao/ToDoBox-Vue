<template>
  <div class="main">
    <input type="checkbox"
            name="checkbox"
            checked
            @click="removeDoneTask(), $event.target.checked=true">
    <label for="checkbox">{{ task.title }} </label>
  </div>
</template>

<script>
export default {
  name: 'DoneTask',
  props: {
    task: Object,
    index: Number,
  },
  methods: {
    removeDoneTask() {
      this.$store.dispatch('removeDoneTask', this.index);
      this.$store.dispatch('addToDoTask', this.task);
    },
  },
};
</script>

<style lang="scss" scoped>
  .main {
    background-color: #ffffff;
    label {
      width: 100%;
    }
  }
</style>
