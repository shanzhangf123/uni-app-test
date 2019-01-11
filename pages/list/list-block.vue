<template>
  <view
    class="view-list"
    @click="routerDetail()"
  >
    <view class="view-block">
      <image
        class="img-section"
        :src="newsItem.image_url"
      ></image>
      <text class="list-title">{{newsItem.title}}</text>
    </view>
    <view>
      <text class="info-text">{{newsItem.source}}</text>
      <text class="info-text">{{newsItem.comment_count}}条评论</text>
      <text class="info-text">{{newsItem.published_at}}</text>
    </view>
  </view>
</template>


<script>
export default {
  name: "list-block",
  props: ["newsItem"],
  data() {
    return {
      data: 1
    };
  },
  created: function() {
    // console.log("组件创建", this.newsItem);
  },
  methods: {
    routerDetail() {
      console.log("routerDetail");
      this.$emit("goDetail");
    }
  },
  computed: {},
  watch: {}
};
</script>


<style>
.view-list {
  border-bottom-width: 1upx;
  border-bottom-style: solid;
  border-bottom-color: #c8c7cc;
}

.view-block {
  display: flex;
  flex-direction: row;
  padding: 20upx 0;
}
.list-title {
  text-overflow: ellipsis;
  font-size: 28upx;
  color: #555555;
  flex: 2;
  margin-left: 30upx;
}
.img-section {
  width: 225upx;
  height: 146upx;
  flex: 1;
}
.info-text {
  margin-right: 10upx;
  color: #999999;
  font-size: 24upx;
  margin-left: 20upx;
}
</style>

