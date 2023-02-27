<template>
  <div class="app">
    <div>网络请求测试</div>
  </div>
</template>

<script>
import { loginRequest } from "@/api/testRequest";
export default {
  data() {
    return {};
  },
  methods: {
    getRequestTest() {
      const param = {
        userId: "xxx",
      };
      //登录
      loginRequest(param)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          this.$toast("获取接口信息失败");
        });
    },
  },
  components: {},
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
