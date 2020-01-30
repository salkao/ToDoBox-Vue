<template>
  <div id="main" @mouseover="hover = true"
                  @mouseleave="hover = false"
                  :class="hover || clicked? 'main mainActive':'main'">
    <div>
      <img v-if="task.image" :src="task.image" alt="">
    </div>
    <div class="row">
      <div class="col">
        <md-checkbox @change="doneTask()" v-model="task.status"
                    class="md-primary">
        </md-checkbox>
        <input  v-model="task.title" type="text"
              class="todoText"
              ref="editingTask"
              @blur="update"
        >
      </div>
      <div class="col" style="text-align:right">
        <md-menu md-size="medium"
              :md-offset-x="127"
              :md-offset-y="-36"
              class="">
          <i md-menu-trigger
              @click="clicked = true"
              :class="hover || clicked ? 'material-icons optionsBtnActive'
                          :'material-icons noDisplay'">
            more_vert
          </i>
          <div v-click-outside="onClickOutside">
            <md-menu-content >
              <md-menu-item class="item" @click="clickOnUploadBtn()">
                <input type="file" name="image"
                        ref="uploadImgInput"
                        style="display:none"
                        @change="uploadImage($event)"
                >
                <i class="material-icons">image</i>
                <h5 class="menuItemText">Image</h5>
              </md-menu-item>
              <md-menu-item @click="deleteToDoTask(index)" class="item">
                <i class="material-icons">delete_sweep</i>
                <h5 class="menuItemText">Delete</h5>
              </md-menu-item>
            </md-menu-content>
          </div>
        </md-menu>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

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
      editedTitle: this.task.title,
      image: null,
      editing: false,
    };
  },
  directives: {
    ClickOutside,
  },
  methods: {
    update() {
      const updatedTask = {
        title: this.$refs.editingTask.value,
        status: this.task.status,
        id: this.task.id,
      };
      this.$store.dispatch('updateToDoTask', { task: updatedTask, index: this.index });
      this.editing = false;
    },
    toDoTaskTiteUpdate() {
      const updatedTask = {
        title: this.editedTitle,
        status: this.task.status,
      };
      this.$store.dispatch('updateToDoTask', { task: updatedTask, index: this.index });
      this.$refs.editingTask.focus();
    },
    deleteToDoTask() {
      this.$store.dispatch('deleteToDoTask', this.index);
    },
    doneTask() {
      this.task.status = true;
      this.$store.dispatch('doneTask', this.task);
      this.$store.dispatch('deleteToDoTask', this.index);
    },
    onClickOutside() {
      if (this.clicked) {
        this.clicked = false;
      }
    },
    clickOnUploadBtn() {
      this.$refs.uploadImgInput.click();
    },
    uploadImage(event) {
      const reader = new FileReader();
      const file = event.target.files[0];
      if (event.target.files && event.target.files[0]) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.image = reader.result;
          this.$store.dispatch('addTaskImage', { image: this.image.toString(), index: this.index });
        };
      }
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
.row {
  display: flex;
  .col {
    flex: 1 0 auto;
  }
}
.material-icons {
  cursor: pointer;
}
#main {
  min-height: 32px;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 1px 5px;
  width: 95%;
  margin: 10px auto;
}
.md-primary {
  margin: 0;
  position: relative;
  top: 5px;
}
.todoText {
  border: none;
  outline: none;
  color: #2c3e50;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  margin-left: 10px;
  width: 80%;
}
img {
  height: 160px;
  width: 100%;
  border-radius: 8px 8px 0 0;
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
.optionsBtnActive {
  display: inline;
}
.noDisplay {
  display: none;
}
</style>
