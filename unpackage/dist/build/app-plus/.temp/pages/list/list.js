require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],[,,,,,,,,,,,function(t,e,n){"use strict";var i=s(n(1)),a=s(n(12));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),a=n.n(i),s=n(22);var r=function(t){n(13)},o=n(0)(a.a,s.a,r,null,null);e.default=o.exports},function(t,e){},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=s(n(15)),a=s(n(18));function s(t){return t&&t.__esModule?t:{default:t}}function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function i(a,s){try{var r=e[a](s),o=r.value}catch(t){return void n(t)}if(!r.done)return Promise.resolve(o).then(function(t){i("next",t)},function(t){i("throw",t)});t(o)}("next")})}}e.default={components:{listBlock:a.default},data:function(){return{loadingText:{contentdown:"上拉加载更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},scrollLeft:0,refreshing:!1,refreshText:"下拉可以刷新",newsList:[],tabIndex:0,tabBars:[{name:"最新",id:0,ref:"new"},{name:"大公司",id:23,ref:"company"},{name:"内容",id:223,ref:"content"},{name:"消费",id:221,ref:"xiaofei"},{name:"娱乐",id:225,ref:"yule"},{name:"区块链",id:208,ref:"qukuailian"}]}},onLoad:function(){var t=this;this.tabBars.forEach(function(e){t.newsList.push({data:[],requestParams:{columnId:e.id,minId:0,pageSize:10,column:"id,post_id,title,author_name,cover,published_at,comments_count"},loadingText:"加载中..."})}),this.getList()},methods:{getList:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=this.newsList[this.tabIndex];i.requestParams.time=(new Date).getTime()+"",1===n&&(i.requestParams.minId=0),t.request({url:"https://unidemo.dcloud.net.cn/api/news",data:i.requestParams,success:function(t){if(200==t.statusCode){var a=t.data.map(function(t){return{id:t.id,article_type:1,published_at:t.published_at,title:t.title,image_url:t.cover,source:t.author_name,comment_count:t.comments_count,post_id:t.post_id}});1===n?(i.data=a,e.refreshing=!1):a.forEach(function(t){i.data.push(t)}),i.requestParams.minId=a[a.length-1].id}}})},goDetail:function(e){console.log("我只低调低调"),t.navigateTo({url:"/pages/detail/detail?query="+encodeURIComponent(JSON.stringify(e))})},dislike:function(e,n){var i=this;t.showModal({content:"不感兴趣？",success:function(t){t.confirm&&i.newsList[e].data.splice(n,1)}})},loadMore:function(){this.getList(2)},changeTab:function(e){var n=this;return r(i.default.mark(function a(){var s,r,o,c,u,l,f,d,m;return i.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(s=e.detail.current,!n.isClickChange){i.next=5;break}return n.tabIndex=s,n.isClickChange=!1,i.abrupt("return");case 5:return i.next=7,n.getElSize("tab-bar");case 7:r=i.sent,o=r.scrollLeft,c=0,u=0;case 11:if(!(u<s)){i.next=19;break}return i.next=14,n.getElSize(n.tabBars[u].ref);case 14:l=i.sent,c+=l.width;case 16:u++,i.next=11;break;case 19:return f=t.getSystemInfoSync().windowWidth,i.next=22,n.getElSize(n.tabBars[s].ref);case 22:d=i.sent,m=d.width,c+m-o>f&&(n.scrollLeft=c+m-f),c<o&&(n.scrollLeft=c),n.isClickChange=!1,n.tabIndex=s,0===n.newsList[n.tabIndex].data.length&&n.getList();case 30:case"end":return i.stop()}},a,n)}))()},getNodeSize:function(t){return new Promise(function(e,n){dom.getComponentRect(t,function(t){e(t.size)})})},onRefresh:function(t){this.refreshText="正在刷新...",this.refreshing=!0,this.getList()},getElSize:function(e){return new Promise(function(n,i){t.createSelectorQuery().select("#"+e).fields({size:!0,scrollOffset:!0},function(t){n(t)}).exec()})},tapTab:function(t){var e=this;return r(i.default.mark(function n(){var a,s;return i.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.tabIndex!==t){n.next=4;break}return n.abrupt("return",!1);case 4:return n.next=6,e.getElSize("tab-bar");case 6:a=n.sent,s=a.scrollLeft,e.scrollLeft=s,e.isClickChange=!0,e.tabIndex=t,0===e.newsList[e.tabIndex].data.length&&e.getList();case 13:case"end":return n.stop()}},n,e)}))()}}}}).call(e,n(2).default)},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(20),a=n.n(i),s=n(21);var r=function(t){n(19)},o=n(0)(a.a,s.a,r,null,null);e.default=o.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"list-block",props:["newsItem"],data:function(){return{data:1}},created:function(){},methods:{routerDetail:function(){console.log("routerDetail"),this.$emit("goDetail")}},computed:{},watch:{}}},function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"view-list",attrs:{eventid:"j26-0"},on:{click:function(e){t.routerDetail()}}},[n("view",{staticClass:"view-block"},[n("image",{staticClass:"img-section",attrs:{src:t.newsItem.image_url}}),n("text",{staticClass:"list-title"},[t._v(t._s(t.newsItem.title))])]),n("view",[n("text",{staticClass:"info-text"},[t._v(t._s(t.newsItem.source))]),n("text",{staticClass:"info-text"},[t._v(t._s(t.newsItem.comment_count)+"条评论")]),n("text",{staticClass:"info-text"},[t._v(t._s(t.newsItem.published_at))])])])},staticRenderFns:[]};e.a=i},function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-tab-bar"},[n("scroll-view",{staticClass:"uni-swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabBars,function(e,i){return n("view",{key:e.ref,class:["swiper-tab-list",t.tabIndex==i?"active":""],attrs:{id:e.ref,"data-current":i,eventid:"jjn-0-"+i},on:{click:function(e){t.tapTab(i)}}},[t._v(t._s(e.name))])})),n("swiper",{staticClass:"swiper-box",attrs:{current:t.tabIndex,duration:"300",eventid:"bLY-3"},on:{change:t.changeTab}},t._l(t.newsList,function(e,i){return n("swiper-item",{key:i,attrs:{mpcomid:"0FN-1-"+i}},[n("scroll-view",{staticClass:"list",attrs:{"scroll-y":"",eventid:"SHu-2-"+i},on:{scrolltolower:function(e){t.loadMore(i)}}},t._l(e.data,function(e,a){return n("block",{key:a},[n("list-block",{attrs:{newsItem:e,eventid:"U3L-1-"+i+"-"+a,mpcomid:"q7A-0-"+i+"-"+a},on:{goDetail:function(n){t.goDetail(e)}}})],1)}))],1)}))],1)},staticRenderFns:[]};e.a=i}],[11]);