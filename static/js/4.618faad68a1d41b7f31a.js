webpackJsonp([4],{443:function(e,t,n){function o(e){n(470)}var s=n(27)(n(453),n(485),o,"data-v-42239575",null);e.exports=s.exports},453:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{renderedMarkdown:""}},methods:{getReadme:function(){var e=this;this.$gitHubApi.getReadme(this).then(function(t){t.data&&(e.renderedMarkdown=e.$marked(t.data))})}},mounted:function(){this.$nextTick(function(){this.getReadme()})}}},462:function(e,t,n){t=e.exports=n(441)(!0),t.push([e.i,".about-me[data-v-42239575]{padding:30px;overflow:scroll}","",{version:3,sources:["C:/Users/Administrator/Desktop/参考/githubPage/BGAIssueBlog-Web-master/src/views/AboutMe.vue"],names:[],mappings:"AACA,2BACE,aAAc,AACd,eAAiB,CAClB",file:"AboutMe.vue",sourcesContent:["\n.about-me[data-v-42239575] {\n  padding: 30px;\n  overflow: scroll;\n}\n"],sourceRoot:""}])},470:function(e,t,n){var o=n(462);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(442)("dc167d8a",o,!0)},485:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about-me"},[n("article",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.renderedMarkdown)}})])},staticRenderFns:[]}}});
//# sourceMappingURL=4.618faad68a1d41b7f31a.js.map