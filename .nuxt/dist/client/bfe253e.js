(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{201:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return l}));var o=r(68);function n(e){return Object(o.b)({url:"/api/users/login",method:"POST",data:{user:e}})}function c(e){return Object(o.b)({url:"/api/users",method:"POST",data:{user:e}})}function l(e){return Object(o.b)({url:"/api/user",method:"PUT",data:{user:e}})}},202:function(e,t,r){e.exports=function(){"use strict";function e(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)e[t]=source[t]}return e}function t(r,o){function n(t,n,c){if("undefined"!=typeof document){"number"==typeof(c=e({},o,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var m in c)c[m]&&(l+="; "+m,!0!==c[m]&&(l+="="+c[m].split(";")[0]));return document.cookie=t+"="+r.write(n,t)+l}}function c(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},i=0;i<t.length;i++){var n=t[i].split("="),c=n.slice(1).join("=");try{var l=decodeURIComponent(n[0]);if(o[l]=r.read(c,l),e===l)break}catch(e){}}return e?o[e]:o}}return Object.create({set:n,get:c,remove:function(t,r){n(t,"",e({},r,{expires:-1}))},withAttributes:function(r){return t(this.converter,e({},this.attributes,r))},withConverter:function(r){return t(e({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(r)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},275:function(e,t,r){"use strict";r.r(t);r(37),r(23),r(24),r(49),r(50);var o=r(4),n=r(19),c=(r(36),r(38)),l=r(201);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=r(202),v={middleware:"noUser",name:"SettingsIndex",data:function(){return{message:{email:"18203555753@qq.com",username:"王晋鹏1",bio:"",image:"https://www.baidu.com/img/flexible/logo/pc/result.png",password:"wjp665752"}}},methods:d(d({},Object(c.b)(["setUser"])),{},{logout:function(){f.remove("user"),this.setUser(null),this.$router.push("/")},updateUser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(l.c)(e.message);case 3:r=t.sent,data=r.data,console.log(data.user),e.setUser(data.user),f.set("user",JSON.stringify(data.user)),e.$router.push("profile/wjp123"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.dir(t.t0),e.errors=t.t0.response.data.errors;case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()}})},w=r(30),component=Object(w.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"settings-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Your Settings")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.updateUser.apply(null,arguments)}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.message.image,expression:"message.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:e.message.image},on:{input:function(t){t.target.composing||e.$set(e.message,"image",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.message.username,expression:"message.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.message.username},on:{input:function(t){t.target.composing||e.$set(e.message,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message.bio,expression:"message.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:e.message.bio},on:{input:function(t){t.target.composing||e.$set(e.message,"bio",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.message.email,expression:"message.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.message.email},on:{input:function(t){t.target.composing||e.$set(e.message,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.message.password,expression:"message.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.message.password},on:{input:function(t){t.target.composing||e.$set(e.message,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n                Update Settings\n              ")])])]),e._v(" "),r("button",{staticClass:"btn btn-outline-danger",on:{click:e.logout}},[e._v("\n          退出登陆\n        ")])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);