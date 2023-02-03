<template>
  <div class="app">
    <van-button type="primary" block size="small">主要按钮</van-button>
    <van-button type="info" size="small">信息按钮</van-button>
    <van-button type="default" block>默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button plain type="primary">朴素按钮</van-button>

    <!-- 按钮 -->
    <van-button plain type="info">朴素按钮</van-button>

    <!-- 组头cell -->
    <van-cell title="单一单元格"></van-cell>
    <p></p>
    <van-cell-group title="单组表头">
      <van-cell title="单组单元格" value="内容" />
    </van-cell-group>
    <p></p>

    <!-- 图标 -->
    <van-icon name="chat-o"></van-icon>
    <p></p>

    <!-- 图片 -->
    <van-image
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
      width="100px"
      height="100px"
    ></van-image>
    <p></p>

    <!-- 每行按照24栅格等分,span代表所占比例 -->
    <section class="demo-col">
      <van-row justify="space-around" type="flex">
        <van-col class="van-col van-col--8" span="8">测试1col</van-col>
        <van-col class="van-col van-col--8" span="8">测试2col</van-col>
        <van-col class="van-col van-col--8" span="6">测试3col</van-col>
      </van-row>
    </section>

    <p></p>
    <van-cell value="内容" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">单元格</span>
        <van-tag type="danger">标签</van-tag>
      </template>
    </van-cell>

    <van-cell title="单元格" icon="shop-o">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-icon name="search" class="search-icon" />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
.app {
  margin-left: 20px;
  margin-top: 30px;
}

.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}

.search-icon {
  font-size: 16px;
  line-height: inherit;
}
.demo-col .van-col:nth-child(odd) {
  background-color: #39a9ed;
}
.demo-col .van-col {
  margin-bottom: 10px;
  color: #fff;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  background-clip: content-box;
}
.van-col--8 {
  width: 33.33333333%;
}
.van-col {
  float: left;
  /* box-sizing: border-box; */
  min-height: 1px;
}
div {
  display: block;
}
</style>
