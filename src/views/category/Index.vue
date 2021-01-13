<template>
  <div class="classify">
    <van-row>
      <van-col span="6">
        <div class="classify-one-list">
          <van-sidebar v-model="active" @change="onChange">
            <van-sidebar-item title="手机" />
            <van-sidebar-item title="数码" />
            <van-sidebar-item title="电脑办公" />
            <van-sidebar-item title="家电" />
            <van-sidebar-item title="玩具乐器" />
            <van-sidebar-item title="运动户外" />
            <van-sidebar-item title="家具厨具" />
            <van-sidebar-item title="生活旅行" />
            <van-sidebar-item title="图书文娱" />
            <van-sidebar-item title="美妆护肤" />
            <van-sidebar-item title="男装" />
            <van-sidebar-item title="女装" />
            <van-sidebar-item title="箱包" />
          </van-sidebar></div
      ></van-col>
      <van-col span="18">
          <div class="classify-right">123</div>
      </van-col>
    </van-row>
  </div>

  <van-tabbar route>
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";
import { Toast } from "vant";

export default {
  setup() {
    const active = ref(0);
    const onChange = (index) => {
      Toast(`标签名 ${index + 1}`);
    };

    return {
      active,
      onChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.classify {
//   --sidebar-width: 90px;
  .classify-one-list {
    overflow-y: auto;
    overflow-x: hidden;
    overflow: auto;
    .van-sidebar {
      width: 100% !important;
      width: auto !important;
      view {
        display: inline-block !important;
      }
    }
  }
  .classify-right{
      height: 100%;
      background: salmon;
  }
}

::v-deep .classify-one-list .van-hairline--top-bottom {
  display: inline-block !important;
  width: var(--sidebar-width, 100%) !important;
  height: 100% !important;
}
</style>
