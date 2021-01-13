<template>
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    input-align="center"
  />
  <van-swipe :autoplay="3000" :height="150">
    <van-swipe-item class="s-item1">1</van-swipe-item>
    <van-swipe-item class="s-item2">2</van-swipe-item>
    <van-swipe-item class="s-item3">3</van-swipe-item>
    <van-swipe-item class="s-item4">4</van-swipe-item>
  </van-swipe>
  <van-card
    num="2"
    tag="标签"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    origin-price="10.00"
  />
  <van-card
    num="2"
    tag="标签"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    origin-price="10.00"
  />
  <van-card
    num="2"
    tag="标签"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    origin-price="10.00"
  />
  <van-card
    num="2"
    tag="标签"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    origin-price="10.00"
  />
  <van-card
    num="2"
    tag="标签"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    origin-price="10.00"
  />
  <van-card
    num="2"
    tag="标签"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    origin-price="10.00"
  />
  <div>我是首页</div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 0,
    };
  },
  methods: {},
};
</script>

<style scoped>
.s-item1 {
  background: turquoise;
}
.s-item2 {
  background: rebeccapurple;
}
.s-item3 {
  background: fuchsia;
}
.s-item4 {
  background: salmon;
}
</style>
