(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{200:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"h",(function(){return m})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return v})),n.d(e,"a",(function(){return _}));var r=n(68),o=(n(89),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return console.log(t),Object(r.b)({method:"GET",url:"/api/articles",params:t})}),c=function(t){return Object(r.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(r.b)({method:"GET",url:"/api/articles",params:t})},d=function(t){return Object(r.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(r.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(r.b)({method:"GET",url:"/api/articles/".concat(t)})},v=function(t){return Object(r.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},_=function(t){return console.log(t),Object(r.b)({method:"POST",url:"/api/articles",data:t})}},276:function(t,e,n){"use strict";n.r(e);var r=n(4),article=(n(36),n(200)),o={middleware:"noUser",name:"EditorIndex",data:function(){return{article_content:{title:"",description:"",body:"",tagList:""}}},methods:{addArticle:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.article_content),n=Object(article.a)({title:t.article_content.title,description:t.article_content.description,body:t.article_content.body,tagList:[]}),console.log(n),n.data&&t.$router.push({name:"article",params:{slug:n.data.article.slug}});case 4:case"end":return e.stop()}}),e)})))()}}},c=n(30),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-page"},[n("div",{staticClass:"container page"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[n("form",[n("fieldset",[n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.article_content.title,expression:"article_content.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title"},domProps:{value:t.article_content.title},on:{input:function(e){e.target.composing||t.$set(t.article_content,"title",e.target.value)}}})]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.article_content.description,expression:"article_content.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?"},domProps:{value:t.article_content.description},on:{input:function(e){e.target.composing||t.$set(t.article_content,"description",e.target.value)}}})]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article_content.body,expression:"article_content.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article_content.body},on:{input:function(e){e.target.composing||t.$set(t.article_content,"body",e.target.value)}}})]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.article_content.tagList,expression:"article_content.tagList"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.article_content.tagList},on:{input:function(e){e.target.composing||t.$set(t.article_content,"tagList",e.target.value)}}}),n("div",{staticClass:"tag-list"})]),t._v(" "),n("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"button"},on:{click:t.addArticle}},[t._v("\n                Publish Article\n            ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);