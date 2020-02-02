<template>
  <div class="main">
    <div class="nav">
      <div class="col">
        <div id="logoBox">
          <img src="../assets/logo.svg" alt="Logo">
          <h4 class="navText logoText">Todobox</h4>
        </div>
      </div>
      <div class="col">
        <div class="userInfo">
          <h4 class="navText userText">{{ username }}</h4>
          <div :class="userImageActive ? 'imageBox imageBoxActive' : 'imageBox'">
            <md-menu md-size="medium"
              :md-offset-x="-98"
              :md-offset-y="10">
              <img md-menu-trigger
                    tabindex="-1"
                    @focusout="userImageActive = false"
                    @click="userImageActive = !userImageActive, showSidebar()"
                    :class="userImageActive ? 'userImage userInfoActive' : 'userImage'"
                    src="../assets/userImage.png"
                    alt="User image">
              <md-menu-content class="menuContent">
                <md-menu-item @click="logout" class="item">
                  <i class="material-icons">input</i>
                  <h5 class="menuItemText">Log out</h5>
                </md-menu-item>
              </md-menu-content>
            </md-menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import widthMixin from '../mixins/widthMixin';

export default {
  name: 'NavBar',
  mixins: [widthMixin],
  data() {
    return {
      userImageActive: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    },
    showSidebar() {
      if (this.width < 768) {
        this.$emit('sidebar', this.width);
      }
    },
  },
  computed: {
    username() {
      return this.$store.getters.getLoggedUser.username;
    },
  },
};
</script>

<style lang="scss" scoped>
  .nav {
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: #232C33;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .col {
      width: 580px;
    }
  }
  .navText {
    display: inline-block;
    color: #FFFFFF;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
  }
  .imageBox {
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80px;
  }
  .imageBoxActive {
    background-color: #353D43;
  }
  .material-icons {
    position: relative;
    bottom: 10px;
  }
  .md-menu-content-container {
    overflow: hidden !important;
  }
  .menuContent {
    height: 65px;
    overflow: hidden;
  }
  .menuItemText {
    position: relative;
    right: 60px;
    bottom: 10px;
  }
  .item {
    max-height: 48px !important;
    overflow: hidden;
    &:hover {
      background-color: #F1F1F1;
    }
    cursor: pointer;
  }
  .logoText {
    margin-left: 10px;
    margin-top: 15px;
    position: absolute;
    text-align: left;
  }
  .userText {
    position: relative;
    top: 10px;
    margin-right: 10px;
  }
  #logoBox {
    text-align: left;
    padding-top: 15px;
  }
  .userImage {
    box-sizing: content-box;
    position: relative;
    top: 7px;
    background-size: 100%;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    margin-bottom: 15px;
    cursor: pointer;
  }
  .userInfo {
    text-align: right;
    height: 100%;
  }
  .userInfoActive {
    border: 3px solid #ffffff;
  }
</style>
