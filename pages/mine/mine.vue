<template>
  <view class="center">
    <view
      class="logo"
      @click="goLogin"
      :hover-class="!hasLogin ? 'logo-hover' : ''"
    >
      <image
        class="logo-img"
        :src="hasLogin ? userInfo.avatarUrl :avatarUrl"
      ></image>
      <view class="logo-title">
        <text class="uer-name">Hi，{{hasLogin ? userInfo.nickName : '您未登录'}}</text>
        <text
          class="go-login navigat-arrow"
          v-if="!hasLogin"
        >&#xe65e;</text>
      </view>
    </view>
    <view class="center-list">
      <view class="center-list-item border-bottom">
        <text class="list-icon">&#xe60f;</text>
        <!-- <text class="list-text">账号管理</text> -->
        <navigator
          class="list-text"
          url="../accout/accout"
        >
          账号管理
        </navigator>
        <text class="navigat-arrow">&#xe65e;</text>
      </view>
      <view class="center-list-item">
        <text class="list-icon">&#xe639;</text>
        <text class="list-text">新消息通知</text>
        <text class="navigat-arrow">&#xe65e;</text>
      </view>
    </view>
    <view class="center-list">
      <view
        class="center-list-item border-bottom"
        @tap="linkOut"
      >
        <text class="list-icon">&#xe60b;</text>
        <!-- <text class="list-text">帮助与反馈</text> -->
        <navigator
          class="list-text"
          url="../help/help"
        >
        帮助与反馈
        </navigator>
        <text class="navigat-arrow">&#xe65e;</text>
      </view>
      <view class="center-list-item">
        <text class="list-icon">&#xe65f;</text>
        <!-- <navigator
          class="list-text"
          url="../privacy/privacy"
        >
        </navigator> -->
        <text
          class="list-text"
          @tap="showPrivacy"
        >服务条款及隐私</text>
        <!-- <text class="navigat-arrow">&#xe65e;</text> -->
      </view>
    </view>
    <view class="center-list">
      <view class="center-list-item">
        <text class="list-icon">&#xe614;</text>
        <navigator
          class="list-text"
          url="../about/about"
        >
          关于我们
        </navigator>
        <text class="navigat-arrow">&#xe65e;</text>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["forcedLogin", "hasLogin", "userInfo"]),
  data() {
    return {
      avatarUrl: "/static/img/logo.png"
    };
  },
  methods: {
    goLogin() {
      if (!this.hasLogin) {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      }
    }
  },
  onLoad() {
    console.log("...onload", this.hasLogin);
  },
  created() {},
  methods: {
    showPrivacy() {
      uni.showModal({
        title: "提示",
        content: ` App隐私政策
      您的隐私权对我们很重要。当您通过我们的网站提供信息时，我们将依据政策保护您提供的信息。如果您有任何问题，请立即告知我们。
      修订和联系信息
      我们一直在更新App的功能，以便为您和我们所有的客户提供更好的服务，因此该政策也可能会随时修订。可能会在不事先通知的情况下修改此政策，并且任何修改发布到此处时便会立即生效。使用我们的App表示您理解并接受在您使用App时发布的政策和条款。
      版权、商标
      本公司及其下属机构对本App中所示的任何商标、公司标志及服务标志拥有所有权。未经本公司的书面批准，任何人不得使用。本App所涉及的资料受版权保护。
      未经本公司书面同意，该资料任何部分均不得修改、复制、储存于检索系统、传送、抄袭、分发或用于任何商业和公开用途。
      保证
      本公司并就以下事项作出声明和保证：本App可供使用符合阁下的要求；使用本App时不会中断，出现延误，故障，错误或遗漏或丢失传送的资料；或不会传播病毒或其他污染或毁灭性的产物；或阁下的电脑系统不会受害，阁下须负全责为数据和/或设备作充分保护和备份，并负全责采取合理而适当的预防措施以扫描电脑病毒或其他毁灭性产物。本公司在编制本App所载信息和资料时已力求审慎，但本公司只能按目前现状提供有关信息，并不作任何明示或暗示的保证，尤其不作不侵犯版权、资料保密、准确性、合适性或不含计算机病毒等担保。
      互联网传输
      互联网传输可能会受到干扰、中断、延迟或数据错误，本公司对于非本公司能控制的通讯设施故障可能引起的数据之准确性或及时性不负任何责任或者做出任何明示的保证。尤其是不作不侵犯版权、资料保密、准确性、合适性或不含计算机病毒等担保。
      下载软件
      本公司不为于本App使用的任何第三方软件的准确性、安全性、功能或性能作任何声明或保证。`,
        success: function(res) {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    }
  },
  watch: {
    hasLogin() {
      console.log("监听login变化", this.hasLogin, this.userInfo);
    }
  }
};
</script>

<style>
@font-face {
  font-family: texticons;
  font-weight: normal;
  font-style: normal;
  src: url("https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf")
    format("truetype");
}

page,
view {
  display: flex;
}

page {
  background-color: #f8f8f8;
}

.center {
  flex-direction: column;
}

.logo {
  width: 750upx;
  height: 240upx;
  padding: 20upx;
  box-sizing: border-box;
  background-color: #2f85fc;
  flex-direction: row;
  align-items: center;
}

.logo-hover {
  opacity: 0.8;
}

.logo-img {
  width: 150upx;
  height: 150upx;
  border-radius: 150upx;
}

.logo-title {
  height: 150upx;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 20upx;
}

.uer-name {
  height: 60upx;
  line-height: 60upx;
  font-size: 38upx;
  color: #ffffff;
}

.go-login.navigat-arrow {
  font-size: 38upx;
  color: #ffffff;
}

.login-title {
  height: 150upx;
  align-items: self-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 20upx;
}

.center-list {
  background-color: #ffffff;
  margin-top: 20upx;
  width: 750upx;
  flex-direction: column;
}

.center-list-item {
  height: 90upx;
  width: 750upx;
  box-sizing: border-box;
  flex-direction: row;
  padding: 0upx 20upx;
}

.border-bottom {
  border-bottom-width: 1upx;
  border-color: #c8c7cc;
  border-bottom-style: solid;
}

.list-icon {
  width: 40upx;
  height: 90upx;
  line-height: 90upx;
  font-size: 34upx;
  color: #2f85fc;
  text-align: center;
  font-family: texticons;
  margin-right: 20upx;
}

.list-text {
  height: 90upx;
  line-height: 90upx;
  font-size: 34upx;
  color: #555;
  flex: 1;
  text-align: left;
}

.navigat-arrow {
  height: 90upx;
  width: 40upx;
  line-height: 90upx;
  font-size: 34upx;
  color: #555;
  text-align: right;
  font-family: texticons;
}
</style>
