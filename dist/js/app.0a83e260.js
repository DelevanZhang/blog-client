(function(e){function t(t){for(var r,a,c=t[0],s=t[1],i=t[2],f=0,l=[];f<c.length;f++)a=c[f],o[a]&&l.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(l.length)l.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0c82cff5":"05b27e77","chunk-0c9a65d2":"47e94916","chunk-3a1f278f":"38bf9b9f","chunk-45ff5e28":"a56f1475","chunk-5c6b9906":"38b84631","chunk-70bc2974":"4a88efa3","chunk-a301d394":"0de0a299","chunk-e2169a82":"16b3c921"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0c82cff5":1,"chunk-0c9a65d2":1,"chunk-3a1f278f":1,"chunk-45ff5e28":1,"chunk-5c6b9906":1,"chunk-70bc2974":1,"chunk-a301d394":1,"chunk-e2169a82":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0c82cff5":"af9e9f17","chunk-0c9a65d2":"58636956","chunk-3a1f278f":"1f666add","chunk-45ff5e28":"92296ae3","chunk-5c6b9906":"a6cebc29","chunk-70bc2974":"4a86ff91","chunk-a301d394":"278612fa","chunk-e2169a82":"879f0d47"}[e]+".css",o=s.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){i=l[c],f=i.getAttribute("data-href");if(f===r||f===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=u);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=c(e),i=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:f})},12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/blog-client/dist/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"33bf":function(e,t,n){e.exports=n.p+"img/pencil.c664d44b.svg"},"4c48":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("bc3a"),a=n.n(r),o=n("5c96");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r,u){var c={url:e,method:t};"get"===t.toLowerCase()?c.params=n:c.data=n,a()(c).then(function(e){"ok"===e.data.status?r(e.data):(o["Message"].error(e.data.msg),u(e.data))}).catch(function(e){o["Message"].error("网络异常"),u({msg:"网络异常"})})})}a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",a.a.defaults.baseURL="https://blog-server.hunger-valley.com",a.a.defaults.withCredentials=!0},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Top",{attrs:{id:"header"}}),n("main",{attrs:{id:"main"}},[n("router-view")],1),n("Bottom",{attrs:{id:"footer"}})],1)},o=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[e.isLogin?r("div",{staticClass:"login"},[r("span",{staticClass:"login-letter"},[r("router-link",{attrs:{to:"/"}},[e._v("LET'S SHARE")])],1),r("router-link",{staticClass:"pen",attrs:{to:"/Create"}},[r("img",{staticClass:"pen",attrs:{src:n("33bf")}})]),r("menu",[r("img",{staticClass:"avatar",attrs:{src:e.user.avatar}}),r("ul",{staticClass:"menu"},[r("li",[r("router-link",{attrs:{to:"/my"}},[e._v("我的")])],1),r("li",[r("a",{attrs:{href:"#"},on:{click:e.onLogout}},[e._v("注销")])])])])],1):r("div",{staticClass:"no-login"},[r("span",{staticClass:"letter"},[e._v("LET'S SHARE")]),r("span",{staticClass:"good"},[e._v("精品博客汇聚")]),r("div",[r("el-button",{attrs:{type:"success"}},[r("router-link",{attrs:{to:"/Login"}},[e._v("立即登录")])],1),r("el-button",{attrs:{type:"success"}},[r("router-link",{attrs:{to:"/Register"}},[e._v("注册账号")])],1)],1)])])},c=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("4c48"),f={REGISTER:"/auth/register",LOGIN:"/auth/login",ISLOGIN:"/auth",LOGOUT:"/auth/logout"},l={register:function(e){var t=e.username,n=e.password;return Object(i["a"])(f.REGISTER,"post",{username:t,password:n})},login:function(e){var t=e.username,n=e.password;return Object(i["a"])(f.LOGIN,"post",{username:t,password:n})},isLogin:function(){return Object(i["a"])(f.ISLOGIN,"get")},logout:function(){return Object(i["a"])(f.LOGOUT,"get")}},p=n("2f62");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}window.auth=l;var g={data:function(){return{}},computed:d({},Object(p["c"])(["isLogin","user"])),created:function(){this.checkLogin()},methods:d({},Object(p["b"])(["checkLogin","logOut"]),{onLogout:function(){this.logOut(),this.$router.push({path:"/"})}})},b=g,m=(n("f9e4"),n("2877")),v=Object(m["a"])(b,u,c,!1,null,"441a5cca",null),k=v.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("p",[e._v("https://github.com/DelevanZhang")])])}],y={},L=y,j=(n("be03"),Object(m["a"])(L,w,O,!1,null,"4c4438fe",null)),_=j.exports,E={name:"app",components:{Top:k,Bottom:_}},C=E,T=(n("5c0b"),Object(m["a"])(C,a,o,!1,null,null,null)),x=T.exports,S=n("8c4f"),P=(n("96cf"),n("3b8d")),R={user:null,isLogin:!1},A={user:function(e){return e.user},isLogin:function(e){return e.isLogin}},I={setUser:function(e,t){e.user=t.user},setLogin:function(e,t){e.isLogin=t.isLogin}},D={checkLogin:function(){var e=Object(P["a"])(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!r.isLogin){e.next=5;break}return e.abrupt("return",!0);case 5:return e.next=7,l.isLogin();case 7:if(a=e.sent,!a.isLogin){e.next=14;break}return n("setLogin",{isLogin:a.isLogin}),n("setUser",{user:a.data}),e.abrupt("return",!0);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),logOut:function(){var e=Object(P["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,l.logout();case 3:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),login:function(e,t){var n=e.commit,r=t.username,a=t.password;return l.login({username:r,password:a}).then(function(e){console.log("TCL: login -> res",e),n("setUser",{user:e.data}),n("setLogin",{isLogin:!0})})},register:function(){var e=Object(P["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,o,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.username,o=n.password,e.next=4,l.register({username:a,password:o});case 4:u=e.sent,console.log("TCL: register ->  res",u),r("setUser",{user:u.data}),r("setLogin",{isLogin:!0});case 8:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},M={state:R,getters:A,mutations:I,actions:D},U={state:{},getters:{},mutations:{},actions:{}};r["default"].use(p["a"]);var G=new p["a"].Store({modules:{Auth:M,Blog:U}});r["default"].use(S["a"]);var N=new S["a"]({routes:[{path:"/",component:function(){return n.e("chunk-70bc2974").then(n.bind(null,"64eb"))}},{path:"/Login",component:function(){return n.e("chunk-e2169a82").then(n.bind(null,"4824"))}},{path:"/Detail/:blogId",component:function(){return n.e("chunk-45ff5e28").then(n.bind(null,"fe00"))}},{path:"/Create",component:function(){return n.e("chunk-5c6b9906").then(n.bind(null,"9ecd"))},meta:{requiresAuth:!0}},{path:"/Edit/:blogId",component:function(){return n.e("chunk-3a1f278f").then(n.bind(null,"ae89"))},meta:{requiresAuth:!0}},{path:"/My",component:function(){return n.e("chunk-0c9a65d2").then(n.bind(null,"bc94"))},meta:{requiresAuth:!0}},{path:"/Register",component:function(){return n.e("chunk-0c82cff5").then(n.bind(null,"b40b"))}},{path:"/User/:userId",component:function(){return n.e("chunk-a301d394").then(n.bind(null,"7216"))}}]});N.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.requiresAuth})?G.dispatch("checkLogin").then(function(t){t?n():n({path:"/Login",query:{redirect:e.fullPath}})}):n()});var q=N,B=n("5c96"),$=n.n(B);n("0fae");r["default"].use($.a);var H=n("7618");function J(e){var t="object"===Object(H["a"])(e)?e:new Date(e),n=t.getTime(),r=Date.now(),a=r-n,o="";switch(!0){case a<6e4:o="刚刚";break;case a<36e5:o=Math.floor(a/6e4)+"分钟前";break;case a<864e5:o=Math.floor(a/36e5)+"小时前";break;case a<31104e6:o=Math.floor(a/864e5)+"天前";break;default:o=Math.floor(a/31104e6)+"年前"}return o}var F={install:function(e,t){e.prototype.friendlyDate=J}};r["default"].config.productionTip=!1,r["default"].use(F),new r["default"]({router:q,store:G,render:function(e){return e(x)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},6499:function(e,t,n){},"90d2":function(e,t,n){},be03:function(e,t,n){"use strict";var r=n("90d2"),a=n.n(r);a.a},f9e4:function(e,t,n){"use strict";var r=n("6499"),a=n.n(r);a.a}});
//# sourceMappingURL=app.0a83e260.js.map