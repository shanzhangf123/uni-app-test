require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{46:function(t,e,n){"use strict";var a=s(n(1)),i=s(n(47));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},47:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(49),i=n.n(a),s=n(50);var l=function(t){n(48)},o=n(0)(i.a,s.a,l,null,null);e.default=o.exports},48:function(t,e){},49:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});i(n(3));var a=i(n(4));function i(t){return t&&t.__esModule?t:{default:t}}e.default={components:{mInput:a.default},data:function(){return{email:""}},methods:{findPassword:function(){this.email.length<3||!~this.email.indexOf("@")?t.showToast({icon:"none",title:"邮箱地址不合法"}):t.showToast({icon:"none",title:"已发送重置邮件至注册邮箱，请注意查收。",duration:3e3})}}}}).call(e,n(2).default)},50:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"input-group"},[n("view",{staticClass:"input-row"},[n("text",{staticClass:"title"},[t._v("邮箱：")]),n("m-input",{attrs:{type:"text",focus:"",clearable:"",placeholder:"请输入邮箱",eventid:"8H1-0",mpcomid:"VOZ-0"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"gdE-1"},on:{tap:t.findPassword}},[t._v("提交")])],1)])},staticRenderFns:[]};e.a=a}},[46]);