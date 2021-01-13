<template>
  <van-sidebar v-model="active">
    <van-sidebar-item title="标签名称" dot />
    <van-sidebar-item title="标签名称" />
    <van-sidebar-item title="标签名称" />
    <van-sidebar-item title="标签名称" />
    <van-sidebar-item title="标签名称" />
    <van-sidebar-item title="标签名称" />
    <van-sidebar-item title="标签名称" />
    <van-sidebar-item title="标签名称" />
    <van-sidebar-item title="标签名称" />
    <van-sidebar-item title="标签名称" />
    <van-sidebar-item title="标签名称" />
    <van-sidebar-item title="标签名称" />
  </van-sidebar>
  <div>分类</div>
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
