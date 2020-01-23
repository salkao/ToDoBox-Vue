<template>
  <div class="main">
    <div class="nav">
      <div class="col">
        <div id="logoBox">
          <img src="../assets/logo.svg" alt="Logo">
          <h4 class="title">Todobox</h4>
        </div>
      </div>
      <div class="col">

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
    display: flex;
    .col {
      padding-top: 15px;
      flex: 1;
    }
  }
  .title {
    margin-left: 10px;
    margin-top: 15px;
    position: absolute;
    display: inline-block;
    color: #FFFFFF;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: left;
  }
  #logoBox {
    position: absolute;
    left: 200px;
  }
</style>
