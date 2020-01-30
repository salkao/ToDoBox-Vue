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
          <h4 class="navText userText">Username</h4>
          <md-menu md-size="medium"
              :md-offset-x="-120"
              :md-offset-y="6">
              <img md-menu-trigger class="userImage" src="../assets/userImage.png" alt="Logo">
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
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: #232C33;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .col {
      padding-top: 15px;
      width: 555px;
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
    bottom: 5px;
    margin-right: 10px;
  }
  #logoBox {
    text-align: left;
  }
  .userImage {
    background-size: 100%;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    margin-bottom: 15px;

    cursor: pointer;
  }
  .userInfo {
    text-align: right;
  }
</style>
