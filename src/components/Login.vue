<template>
  <div class="main">
    <div class="loginForm">
        <div>
          <img src="../assets/LoginImage.png" alt="">
        </div>
        <input v-model="email" type="text" placeholder="Email" class="formItem textInput">
        <div class="passInput">
          <input v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Password"
                  class="formItem textInput"
                  id="passInput">
          <i @click="showPassword = !showPassword"
              :class="showPassword ? 'material-icons icon iconActive' : 'material-icons icon'"
              class="material-icons icon">
            remove_red_eye
          </i>
        </div>
          <div id="inputBox" class="formItem">
            <div class="col" id="first">
              <input v-model="rememberMe" type="checkbox" name="rememberMe">
              <label for="rememberMe" id="rememberMe">Remember me</label>
            </div>
            <div class="col" id="second">
              <a href="" id="forgotPassword">Forgot password?</a>
            </div>
          </div>
          <button class="formItem"
                  id="loginButton"
                  @click="Login()">Login</button>
    </div>
  </div>
</template>

<script>
import authentication from '../authentication';

export default {
  name: 'Login',
  props: {

  },
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      showPassword: false,
    };
  },
  methods: {
    Login() {
      const user = authentication.login(this.email, this.password, this.rememberMe);
      if (user !== null) {
        this.$store.dispatch('login', user);
        this.$router.push('/lists');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#first {
  text-align: left;
}
#second {
  text-align: right;
}
  body {
    margin: 0px;
    padding: 0px;
  }
  .main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loginForm {
    // font-family: 'Roboto', sans-serif;
    // font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 440px;
    padding: 50px;
    background-color: #ffffff;
    box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.75);
    border-radius: 4px;
    .textInput {
      width: 95%;
      border: 1px solid #747474;
      border-radius: 4px;
      font-size: 16px;
      padding: 2px 10px;
      &:focus{
        outline: none;
        border: 2px solid #006BF5;
      }
    }
    #inputBox {
      display: flex;
      flex-direction: row;
      width: 100%;
      .col {
        width: 100%;
      }
    }
  }
  #loginButton {
    border: none;
    border-radius: 4px;
    background-color: #425BD9;
    width: 90%;
    height: 40px;
    color: #FFFFFF;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    text-align: center;
  }
  .formItem {
    height: 40px;
    margin-top: 30px;
  }
  #forgotPassword {
    text-decoration: none;
    color: #425BD9;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    text-align: right;
  }
  #rememberMe {
  color: #222222;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  }
  .passInput {
    position: relative;
  }
  .icon {
    position: absolute;
    top: 40px;
    right: 15px;
    cursor: pointer;
    opacity: 0.300000011920929;
  }
  .iconActive {
    opacity: 1;
  }
</style>

+
