<template>
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    input-align="center"
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

<style scoped></style>
