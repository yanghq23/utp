<template>
  <router-view />
   <van-tabbar route>
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/classify" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item to="/mine" icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "App",
};
</script>
