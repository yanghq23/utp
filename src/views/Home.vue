<template>
  <div class="home-top">
    <div class="home-top__title">UTP</div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      class="home-top__btn"
      input-align="center"
    />
  </div>

  <van-swipe :autoplay="3000" :height="150" class="home-swipe">
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
  <van-tabbar route>
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home-top{
  display: flex;
  &__title{
    width: 40px;
    margin-left: 8px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
  }
  &__btn{
    flex: 1;
  }
}
.home-swipe {
  margin: 0 10px;
  border-radius: 10px;
}
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
