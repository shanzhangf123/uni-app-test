<template>
  <view class="w100">
    <view
      class="logout-warp"
      v-if="!hasLogin"
    >
      <button
        type="primary"
        class="log-out"
        @tap="routerLogin"
      >您还未登录,请登录</button>
    </view>
    <view
      class="logout-warp"
      v-if="hasLogin"
    >
      <view class="user-detail">
        <view class="img-bg">
          <image
            class="user-avatar"
            :src="userInfo.avatarUrl"
          ></image>
        </view>
        <view class="user-ul">
          <text>用户名</text>
          <text>{{userInfo.nickName}}</text>
        </view>
        <view class="user-ul">
          <text>性别</text>
          <text>{{userInfo.gender == 1?'男':'女'}}</text>
        </view>
        <view class="user-ul">
          <text>城市</text>
          <text>{{userInfo.city}}</text>
        </view>
        <view class="user-ul">
          <text>国家</text>
          <text>{{userInfo.country}}</text>
        </view>
      </view>
      <button
        type="warn"
        class="log-out"
        @tap="bindLogout"
      >退出登录</button>
    </view>
  </view>
</template>


<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["hasLogin", "forcedLogin", "userInfo"])
  },
  methods: {
    ...mapMutations(["logout"]),
    bindLogout() {
      this.logout();
      /**
       * 如果需要强制登录跳转回登录页面
       */
      if (this.forcedLogin) {
        uni.redirectTo({
          url: "../login/login"
        });
      } else {
        uni.switchTab({
          url: "/pages/mine/mine"
        });
      }
    },
    routerLogin() {
      uni.redirectTo({
        url: "../login/login"
      });
    }
  },
  onLoad() {
    console.log("...onload");
  }
};
</script>


<style>
.w100 {
  width: 100%;
}
.logout-warp {
  /* display: flex; */
  /* flex-direction: row; */
  /* width: 100%; */
  padding: 20px;
  margin-top: 20upx;
}

.log-out {
  /* flex: 1; */
  width: 100%;
  margin-top: 30upx;
}

.user-detail {
  text-align: center;
}

.user-avatar {
  width: 150upx;
  height: 150upx;
  border-radius: 150upx;
}

.user-ul {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ddd;
  padding: 30upx;
}

.user-ul text {
  flex: 1;
  text-align: left;
  color: #505d6b;
  font-size: 14px;
}

.img-bg{
  background: #ddd;
}
</style>
