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
          <img class="userImage" src="../assets/userImage.png" alt="Logo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: #232C33;
    // display: flex;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .col {
      padding-top: 15px;
      // padding-left: 14%;
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
    // position: absolute;
    // left: 200px;
  }
  .userImage {
    background-size: 100%;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    margin-bottom: 15px;
  }
  .userInfo {
    text-align: right;
  }
</style>
