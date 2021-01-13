<template>
  <div>我的</div>
  <van-tabbar route>
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onChange(event) {
      console.log(event);
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail });
    },
  },
};
</script>

<style scoped></style>