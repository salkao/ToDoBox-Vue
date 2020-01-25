<template>
  <div id="main" @mouseover="hover = true"
                  @mouseleave="hover = false"
                  :class="hover || clicked? 'main mainActive':'main'">
    <div class="col">
    <md-checkbox @change="doneTask()" v-model="task.status"
                  class="md-primary"></md-checkbox>
    <input v-model="task.title" type="text"
            id="todoText"
            contenteditable="true"
            for="checkbox"
            @change="toDoTaskTiteUpdate">
    </div>
    <md-menu md-size="medium"
              :md-offset-x="127"
              :md-offset-y="-36">
      <i md-menu-trigger
          @click="clicked = true"
          :class="hover || clicked ? 'material-icons optionsBtnActive'
                      :'material-icons noDisplay'">
        more_vert
      </i>
      <md-menu-content>
        <md-menu-item class="item">
          <i class="material-icons">image</i>
          <h5 class="menuItemText">Image</h5>
        </md-menu-item>
        <md-menu-item @click="deleteToDoTask(index)" class="item">
          <i class="material-icons">delete_sweep</i>
          <h5 class="menuItemText">Delete</h5>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
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
      hover: false,
      clicked: false,
    };
  },
  directives: {

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
    fun() {
      console.log('brlucina');
    },
  },
};
</script>

<style lang="scss" scoped>
.mainActive {
  background-color: #F1F1F1 !important;
  input {
    background-color: #F1F1F1;
  }
}
#main {
  height: 32px;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 1px 5px;
  width: 95%;
  margin: auto;
  display: flex;
  .col {
    flex: 1 0 auto;
  }
  // &:hover {
  //   background-color: #F1F1F1;
  //   input {
  //     background-color: #F1F1F1;
  //   }
  // }
}
.md-primary {
  margin: 0;
  position: relative;
  top: 5px;
}
#todoText {
  border: none;
  outline: none;
  // color: #222222;
  color: #2c3e50;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  margin-left: 10px;
}
.menuItemText {
  position: relative;
  right: 140px;
}
.item {
  width: 240px;
  height: 48px;
  &:hover {
    background-color: #F1F1F1;
  }
}
.taskActive {
  background-color: yellow;
}
.taskDefColor {
  background-color: #ffffff;
}
.optionsBtnActive {
  display: inline;
}
.noDisplay {
  display: none;
}
</style>
