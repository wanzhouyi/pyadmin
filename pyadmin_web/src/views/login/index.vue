<template>
  <div class="login_main">
    <div class="area_input">
      <div class="title"><p>登录</p></div>
      <!-- 登录表单区域，model-表单数据对象，rules-表单验证规则 -->
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm">
        <!--用户名-->
        <el-form-item prop="username">
          <el-input
            clearable
            placeholder="用户名"
            prefix-icon="el-icon-user"
            v-model="loginForm.username"
          />
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
          <el-input
            clearable
            placeholder="密码"
            show-password
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
          />
        </el-form-item>
        <!--按钮区域-->
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('loginForm')"
            >登陆</el-button
          >

          <el-button type="info" @click="resetForm('loginForm')"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
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
        username: "wanzhouyi",
        password: "wanzhouyi",
      },
      // 1.在需要校验的表单上绑定校验规则：:rules="loginFormRules"；
      // 2.在data中定义loginFormRules规则对象：校验规则参见https://github.com/yiminghe/async-validator
      // 3.在需要校验的具体表单上添加prop="username"属性。
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log(formName);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      console.log(formName);

      this.$refs[formName].resetFields();
    },
  },
};
</script>
