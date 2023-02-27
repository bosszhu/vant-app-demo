<template>
  <div class="loginView">
    <van-form @submit="onSubmit" class="mainView">
      <van-field
        class="nameField"
        v-model="username"
        left-icon="true"
        name="用户名"
        label="用户名"
        placeholder="请输入天启平台账户"
        :rules="[{ required: true, message: '请填写用户名' }]"
      >
        <van-icon slot="left-icon" v-bind:name="user_imgUrl" />
      </van-field>

      <van-field
        class="pwdField"
        v-model="password"
        left-icon="ic_login_pwd"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入您账号的密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      >
        <van-icon slot="left-icon" v-bind:name="pwd_imgUrl" />
      </van-field>
      <div class="checkView">
        <van-checkbox v-model="checked" shape="square">
          我已阅读并同意<span class="priacyText">《用户隐私协议》</span
          ><span class="forgetpwdText" @click="forgetAction()">忘记密码</span>
        </van-checkbox>
      </div>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import pwd_imgUrl from "../assets/img/ic_login_pwd@3x.png";
import user_imgUrl from "../assets/img/ic_login_user@3x.png";
export default {
  data() {
    return {
      username: "",
      password: "",
      username: "",
      user_imgUrl,
      pwd_imgUrl,
      checked: false,
    };
  },
  methods: {
    onSubmit(values) {
      this.username = "zhulei_jfw";
      this.password = "Pwd@1234";
      //登录接口调用
      console.log("submit", values);
    },
    forgetAction(label) {
      console.log("点击忘记密码");
    },
  },
};
</script>

<style>
.loginView {
  background-image: url(src/assets/img/ic_login_bg@3x.png);
  background-size: 100% 100%;
  /*按比例缩放*/
  background-repeat: no-repeat;
  width: 100%;
  height: calc(100vh - 0px);
}
.mainView {
  width: 80%;
  margin: 0px auto;
  padding-top: 350px;
}
.checkView {
  margin-top: 35px;
}
.pwdField {
  margin-top: 30px;
}
/* 设置圆角 */
.van-field {
  border-radius: 20px; /* 设置圆角的大小 */
  background-color: rgba(1, 1, 1, 0.1);
}
.priacyText {
  color: blue;
}

.forgetpwdText {
  position: absolute;
  right: 10%;
  color: blue;
}

/* 修改图标位置 */
.van-field__left-icon {
  margin-top: 0px;
  margin-right: 4px; /* 设置图标右边距 */
}

.van-icon__image {
  width: 24px;
  height: 24px;
}

.van-checkbox__icon {
  vertical-align: top;
  margin-top: 2px; /* 调整图标与文字之间的距离 */
}

.van-checkbox__label {
  display: inline-block;
  vertical-align: top;
  margin-left: 6px; /* 调整文字与图标之间的距离 */
  max-width: 100%; /* 使文字在容器内换行 */
  word-break: break-all; /* 允许单词内换行 */
  font-size: 15px;
}
</style>
