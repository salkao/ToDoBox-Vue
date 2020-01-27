<template>
  <div class="main">
    <img v-if="task.image" :src="task.image" alt="">
    <div :class="task.image?'addPadding':''">
      <md-checkbox @change="removeDoneTask($event)"
                    v-model="task.status"
                    class="md-primary">
      </md-checkbox>
      <label id="doneText">{{ task.title }} </label>
    </div>
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
    min-height: 32px;
    background-color: #ffffff;
    padding: 1px 5px;
    width: 95%;
    margin: 10px auto;
    border-radius: 4px;
    &:hover {
    background-color: #F1F1F1;
  }
    label {
      width: 100%;
    }
  }
  img {
  height: 160px;
  width: 100%;
  border-radius: 8px 8px 0 0;
}
.addPadding {
  padding-bottom: 5px;
}
  .md-primary {
  margin: 0;
  position: relative;
  top: 6px;
  }
  #doneText {
    color: #2c3e50;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-align: left;
    margin-left: 10px;
  }
</style>
