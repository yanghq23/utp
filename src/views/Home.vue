<template>
  <router-view />
  <van-tabbar route>
    <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">分类</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 0,
    };
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
