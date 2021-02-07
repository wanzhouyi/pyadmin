<template>
  <div class="login_main">
    <div class="area_input">
      <div class="title"><p>登录</p></div>
      <el-input
        name="txt_username"
        clearable
        placeholder="用户名"
        prefix-icon="el-icon-user"
        v-model="loginForm.username"
      />
      <el-input
        name="txt_password"
        clearable
        placeholder="密码"
        show-password
        prefix-icon="el-icon-lock"
        v-model="loginForm.password"
      />
      <el-button type="primary">提交</el-button>
    </div>
    <ribbon />
  </div>
</template>
<style scoped>
.login_main {
  width: 500px;
  height: 300px;
  box-sizing: border-box;
  padding: 0 50px;
  border-radius: 5px;
  box-shadow: 0px 2px 12px 0px rgba(105, 105, 105, 0.07);
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: mymove 1s ease-in-out alternate;
  overflow: hidden;
  transition: 1.5s;
}
.area_input {
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  font-weight: bold;
  color: #606266;
}
.el-input {
  margin-bottom: 25px;
}
.el_button {
  margin-top: 10px;
}
.el-button--primary {
  width: 100%;
}
</style>
<script>
import { ribbon } from "../../../public/js/ribbon.js";
export default {
  name: "Login",
  components: {
    ribbon,
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
};
</script>