<template>
  <div class="main">
    <!-- <input type="checkbox"
            name="checkbox"
            checked
            @click="removeDoneTask(), $event.target.checked=true"> -->
        <md-checkbox @change="removeDoneTask($event)" v-model="task.status"
                  class="md-primary"></md-checkbox>
    <label id="doneText">{{ task.title }} </label>
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
    removeDoneTask(event) {
      console.log(event);
      this.$store.dispatch('removeDoneTask', this.index);
      this.$store.dispatch('addToDoTask', this.task);
    },
  },
};
</script>

<style lang="scss" scoped>
  .main {
    height: 32px;
    background-color: #ffffff;
    padding: 1px 5px;
    width: 95%;
    margin: auto;
    border-radius: 4px;
    &:hover {
    background-color: #F1F1F1;
    // input {
    //   background-color: #F1F1F1;
    // }
  }
    label {
      width: 100%;
    }
  }
  .md-primary {
  margin: 0;
  position: relative;
  top: 6px;
  }
  #doneText {
    color: #222222;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-align: left;
    margin-left: 10px;
  }
</style>
