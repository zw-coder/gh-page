(function(n){function e(e){for(var r,o,a=e[0],s=e[1],i=e[2],f=0,d=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);l&&l(e);while(d.length)d.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,o=1;o<t.length;o++){var a=t[o];0!==c[a]&&(r=!1)}r&&(u.splice(e--,1),n=s(s.s=t[0]))}return n}var r={},o={app:0},c={app:0},u=[];function a(n){return s.p+"js/"+({}[n]||n)+"."+{"chunk-0bcf1e52":"a32193ae","chunk-0db94b41":"03d320ed","chunk-12b18df7":"c4e6706c","chunk-2c3d8995":"4b8465a1","chunk-2d0e502f":"fbfdf318","chunk-056324ac":"9d4f5ed6","chunk-0985ed55":"0aad79b5","chunk-6671ed40":"49aa2cee","chunk-67909224":"02ba7e0b","chunk-2e1fc2d8":"861853f4","chunk-7c9c04bb":"2cf47391","chunk-a67c2934":"8becad58","chunk-bc02232e":"468a6930","chunk-eb9643f8":"557038a5","chunk-f178fc66":"1c02e506"}[n]+".js"}function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(n){var e=[],t={"chunk-0bcf1e52":1,"chunk-0db94b41":1,"chunk-12b18df7":1,"chunk-2c3d8995":1,"chunk-056324ac":1,"chunk-0985ed55":1,"chunk-6671ed40":1,"chunk-67909224":1,"chunk-2e1fc2d8":1,"chunk-7c9c04bb":1,"chunk-a67c2934":1,"chunk-bc02232e":1,"chunk-eb9643f8":1,"chunk-f178fc66":1};o[n]?e.push(o[n]):0!==o[n]&&t[n]&&e.push(o[n]=new Promise((function(e,t){for(var r="css/"+({}[n]||n)+"."+{"chunk-0bcf1e52":"4fc1245c","chunk-0db94b41":"adaf0e6f","chunk-12b18df7":"e54fe4e1","chunk-2c3d8995":"cca089a2","chunk-2d0e502f":"31d6cfe0","chunk-056324ac":"3fe52b6a","chunk-0985ed55":"8dbbcd23","chunk-6671ed40":"fdc9885e","chunk-67909224":"2aab918e","chunk-2e1fc2d8":"3e1c7074","chunk-7c9c04bb":"8415a39c","chunk-a67c2934":"75bcda81","chunk-bc02232e":"ea295c71","chunk-eb9643f8":"a829bc95","chunk-f178fc66":"9cdc529a"}[n]+".css",c=s.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var i=u[a],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===c))return e()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){i=d[a],f=i.getAttribute("data-href");if(f===r||f===c)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var r=e&&e.target&&e.target.src||c,u=new Error("Loading CSS chunk "+n+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[n],l.parentNode.removeChild(l),t(u)},l.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){o[n]=0})));var r=c[n];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,t){r=c[n]=[e,t]}));e.push(r[2]=u);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=a(n);var d=new Error;i=function(e){f.onerror=f.onload=null,clearTimeout(l);var t=c[n];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+n+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}c[n]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(e)},s.m=n,s.c=r,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)s.d(t,r,function(e){return n[e]}.bind(null,r));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="",s.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=f;u.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"199a":function(n,e,t){"use strict";t("f0dd")},"31e9":function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r="U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA="},"3d39":function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("139e"),t("fae9"),t("3ff7"),t("d6dc");var r=t("a593"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],u=(t("5c0b"),t("5d22")),a={},s=Object(u["a"])(a,o,c,!1,null,null,null),i=s.exports,f=(t("402f"),t("a81e")),d=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"login"},[r("van-row",{staticClass:"nav"},[r("van-col",{staticClass:"store-logo",attrs:{span:"2",offset:"2"}},[r("img",{attrs:{src:t("c654"),height:"40",width:"40"}})]),r("van-col",{staticClass:"store-name",attrs:{span:"4",offset:"2"}},[n._v("COFFE")]),r("van-col",{staticClass:"store-link",attrs:{span:"4",offset:"8"},on:{click:n.toHomePage}},[n._v("先逛逛")])],1),r("van-row",{staticClass:"logo",attrs:{type:"flex",justify:"center"}},[r("van-col",[r("img",{attrs:{src:t("c654"),height:"200px"}})])],1),r("van-form",[r("van-field",{attrs:{name:"手机号",label:"手机号",placeholder:"手机号"},model:{value:n.userLogin.phone,callback:function(e){n.$set(n.userLogin,"phone",e)},expression:"userLogin.phone"}}),r("van-field",{attrs:{type:n.ispassword?"password":"text",name:"密码",label:"密码",placeholder:"密码","right-icon":n.ispassword?"closed-eye":"eye-o"},on:{"click-right-icon":n.onprassword},model:{value:n.userLogin.password,callback:function(e){n.$set(n.userLogin,"password",e)},expression:"userLogin.password"}}),r("div",{staticClass:"mima",on:{click:function(e){n.show1=!0}}},[n._v("忘记密码？")]),r("van-popup",{style:{height:"32%",paddingTop:"20px"},attrs:{round:"",position:"bottom"},model:{value:n.show1,callback:function(e){n.show1=e},expression:"show1"}},[r("van-form",[r("van-field",{attrs:{name:"手机号",label:"手机号",placeholder:"手机号"},model:{value:n.find.phone,callback:function(e){n.$set(n.find,"phone",e)},expression:"find.phone"}}),r("van-field",{attrs:{type:n.isFindpassword?"password":"text",name:"密码",label:"新密码",placeholder:"新密码","right-icon":n.isFindpassword?"closed-eye":"eye-o"},on:{"click-right-icon":n.onFindprassword},model:{value:n.find.password,callback:function(e){n.$set(n.find,"password",e)},expression:"find.password"}}),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",color:"#0c34ba",type:"primary","native-type":"submit"},on:{click:n.Find}},[n._v("设置密码")])],1)],1)],1),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"info",color:"#0c34ba","native-type":"submit"},on:{click:n.login}},[n._v("登录")])],1),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{staticClass:"login-btn",style:{color:"#000"},attrs:{round:"",block:"",type:"info",color:"#E2E2E2","native-type":"submit"},on:{click:n.showPopup}},[n._v("注册")]),r("van-popup",{style:{height:"32%",paddingTop:"20px"},attrs:{round:"",position:"bottom"},model:{value:n.show,callback:function(e){n.show=e},expression:"show"}},[r("van-form",[r("van-field",{attrs:{name:"昵称",label:"昵称",placeholder:"昵称"},model:{value:n.userRegister.nickname,callback:function(e){n.$set(n.userRegister,"nickname",e)},expression:"userRegister.nickname"}}),r("van-field",{attrs:{name:"手机号",label:"手机号",placeholder:"手机号"},model:{value:n.userRegister.phone,callback:function(e){n.$set(n.userRegister,"phone",e)},expression:"userRegister.phone"}}),r("van-field",{attrs:{type:n.ispassword?"password":"text",name:"密码",label:"密码",placeholder:"密码","right-icon":n.ispassword?"closed-eye":"eye-o"},on:{"click-right-icon":n.onprassword},model:{value:n.userRegister.password,callback:function(e){n.$set(n.userRegister,"password",e)},expression:"userRegister.password"}}),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",color:"#0c34ba",type:"primary","native-type":"submit"},on:{click:n.register}},[n._v("注册")])],1)],1)],1)],1)],1)],1)},l=[],p=(t("13cf"),t("6a61"),t("2e91")),h=t("31e9"),m=t("8982"),b={data:function(){return{userRegister:{nickname:"",password:"",phone:""},userLogin:{password:"",phone:""},ispassword:!0,show:!1,show1:!1,isFindpassword:!0,find:{password:"",phone:""}}},methods:{onprassword:function(){this.ispassword=!this.ispassword},onFindprassword:function(){this.isFindpassword=!this.isFindpassword},showPopup:function(){this.show=!0},toHomePage:function(){this.$router.push("/home")},Find:function(){var n=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.find.password&&n.find.phone){e.next=3;break}return n.$notify("手机或密码不能为空"),e.abrupt("return");case 3:return e.next=5,Object(m["x"])({appkey:h["a"],phone:n.find.phone,password:n.find.password});case 5:t=e.sent,n.$toast(t.msg),"L001"==t.code&&(n.userLogin.phone=n.find.phone,n.userLogin.password=n.find.password,n.show1=!1);case 8:case"end":return e.stop()}}),e)})))()},login:function(){var n=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={phone:n.userLogin.phone,password:n.userLogin.password},n.$toast.loading({duration:0,forbidClick:!0,message:"正在登陆"}),e.next=4,Object(m["p"])(t);case 4:r=e.sent,200==r.code?(n.$toast.success({duration:500,forbidClick:!0,message:"登陆成功"}),sessionStorage.setItem("token",r.token),n.$toast.clear(),n.$router.push("home")):n.$toast.fail({duration:500,forbidClick:!0,message:"登陆失败"});case 6:case"end":return e.stop()}}),e)})))()},register:function(){var n=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={phone:n.userRegister.phone,password:n.userRegister.password,nickname:n.userRegister.nickname},n.$toast.loading({duration:0,forbidClick:!0,message:"正在注册"}),e.next=4,Object(m["u"])(t);case 4:r=e.sent,100==r.code?(n.$toast.success({duration:500,forbidClick:!0,message:"注册成功"}),n.userLogin.password=n.userRegister.password,n.userLogin.phone=n.userRegister.phone,n.show=!1,n.$toast.clear()):n.$toast.fail({duration:1e3,forbidClick:!0,message:r.msg});case 6:case"end":return e.stop()}}),e)})))()}}},k=b,w=(t("199a"),Object(u["a"])(k,d,l,!1,null,"a145eeac",null)),g=w.exports;r["a"].use(f["a"]);var v=[{path:"/",name:"Login",component:g},{path:"/main",name:"main",component:function(){return t.e("chunk-0db94b41").then(t.bind(null,"7f94"))},redirect:"/home",children:[{path:"/menu",name:"Menu",component:function(){return Promise.all([t.e("chunk-2d0e502f"),t.e("chunk-67909224")]).then(t.bind(null,"da40"))}},{path:"/home",name:"Homepage",component:function(){return Promise.all([t.e("chunk-2d0e502f"),t.e("chunk-6671ed40")]).then(t.bind(null,"7a35"))}},{path:"/shop",name:"Shopbag",component:function(){return t.e("chunk-0bcf1e52").then(t.bind(null,"3a23"))}},{path:"/about",name:"My",component:function(){return t.e("chunk-eb9643f8").then(t.bind(null,"b93c"))}}]},{path:"account",name:"Account",component:function(){return t.e("chunk-7c9c04bb").then(t.bind(null,"b5c4"))}},{path:"/like",name:"Like",component:function(){return t.e("chunk-f178fc66").then(t.bind(null,"e74e"))}},{path:"/address",name:"Address",component:function(){return t.e("chunk-2e1fc2d8").then(t.bind(null,"7984"))}},{path:"/secure",name:"Secure",component:function(){return t.e("chunk-a67c2934").then(t.bind(null,"76b9"))}},{path:"/order",name:"Order",component:function(){return t.e("chunk-12b18df7").then(t.bind(null,"dbf5"))}},{path:"/detail",name:"Detail",component:function(){return Promise.all([t.e("chunk-2d0e502f"),t.e("chunk-0985ed55")]).then(t.bind(null,"1000"))}},{path:"/search",name:"Search",component:function(){return Promise.all([t.e("chunk-2d0e502f"),t.e("chunk-056324ac")]).then(t.bind(null,"4e22"))}},{path:"pay",name:"Pay",component:function(){return t.e("chunk-2c3d8995").then(t.bind(null,"76e0"))}},{path:"newAddress",name:"NewAddress",component:function(){return t.e("chunk-bc02232e").then(t.bind(null,"66a7"))}}],y=new f["a"]({mode:"history",base:"",routes:v}),P=y,x=t("cf6b"),S={taken:"",banner:[],coffeList:[]},C={setToken:function(n,e){n.token=e},setBanner:function(n,e){n.banner=e},setCoffeList:function(n,e){n.coffeList=e}};r["a"].use(x["a"]);var L=new x["a"].Store({state:S,mutations:C}),O=(t("3fcf"),t("6252")),j=(t("5896"),t("70ee")),A=(t("fd94"),t("d77c")),R=(t("4346"),t("0585")),$=(t("4a8a"),t("49cf")),_=(t("52b8"),t("13f4")),E=(t("95f1"),t("5b49")),F=(t("61d7"),t("3e55")),T=(t("9617"),t("569f")),N=(t("c132"),t("8f8d")),B=(t("4da5"),t("cec5")),M=(t("acb2"),t("2b96")),D=(t("610c"),t("ee2d")),H=(t("325a"),t("f55b")),U=(t("7b5d"),t("f787")),q=(t("59d1"),t("c20b")),I=(t("634e"),t("167b")),G=(t("ec32"),t("8cca")),J=(t("62b0"),t("2ccd")),V=(t("dc80"),t("65b6")),z=(t("0030"),t("d339")),K=(t("0ac8"),t("0230")),Q=(t("9f7c"),t("d17c")),W=(t("92eb"),t("1e1c")),X=(t("92d9"),t("033f")),Z=(t("a0bd"),t("e3f7")),Y=(t("e772"),t("6354")),nn=(t("3265"),t("3710")),en=(t("b8e1"),t("7ff6")),tn=(t("4531"),t("f910")),rn=(t("b7ba"),t("cd1c")),on=(t("a87b"),t("feed")),cn=(t("c301"),t("8728")),un=(t("e428"),t("72cc")),an=(t("fca1"),t("e8a5")),sn=(t("231a"),t("371c")),fn=(t("b024"),t("410c")),dn=(t("b8bb"),t("2ddf")),ln=(t("2b59"),t("532a")),pn=(t("db64"),t("c454"));t("4757");r["a"].use(pn["a"]),r["a"].use(ln["a"]),r["a"].use(dn["a"]),r["a"].use(fn["a"]),r["a"].use(sn["a"]),r["a"].use(an["a"]),r["a"].use(un["a"]),r["a"].use(cn["a"]),r["a"].use(on["a"]),r["a"].use(rn["a"]),r["a"].use(tn["a"]),r["a"].use(en["a"]),r["a"].use(nn["a"]),r["a"].use(Y["a"]),r["a"].use(Z["a"]),r["a"].use(X["a"]),r["a"].use(W["a"]),r["a"].use(Q["a"]),r["a"].use(K["a"]),r["a"].use(z["a"]),r["a"].use(V["a"]),r["a"].use(J["a"]),r["a"].use(G["a"]),r["a"].use(I["a"]),r["a"].use(q["a"]),r["a"].use(U["a"]),r["a"].use(H["a"]),r["a"].use(D["a"]),r["a"].use(M["a"]),r["a"].use(B["a"]),r["a"].use(N["a"]),r["a"].use(T["a"]),r["a"].use(F["a"]),r["a"].use(E["a"]),r["a"].use(_["a"]),r["a"].use($["a"]),r["a"].use(R["a"]),r["a"].use(A["a"]),r["a"].use(j["a"]),r["a"].use(O["a"]);t("44ce"),t("508f"),t("3d39");var hn=t("3aae"),mn=t.n(hn);r["a"].use(mn.a),r["a"].config.productionTip=!1,new r["a"]({router:P,store:L,render:function(n){return n(i)}}).$mount("#app")},"5c0b":function(n,e,t){"use strict";t("ac27")},8982:function(n,e,t){"use strict";t.d(e,"E",(function(){return p})),t.d(e,"G",(function(){return h})),t.d(e,"H",(function(){return m})),t.d(e,"F",(function(){return b})),t.d(e,"p",(function(){return k})),t.d(e,"u",(function(){return w})),t.d(e,"g",(function(){return g})),t.d(e,"l",(function(){return v})),t.d(e,"y",(function(){return y})),t.d(e,"o",(function(){return P})),t.d(e,"k",(function(){return x})),t.d(e,"n",(function(){return S})),t.d(e,"b",(function(){return C})),t.d(e,"j",(function(){return L})),t.d(e,"r",(function(){return O})),t.d(e,"w",(function(){return j})),t.d(e,"h",(function(){return A})),t.d(e,"i",(function(){return R})),t.d(e,"a",(function(){return $})),t.d(e,"d",(function(){return _})),t.d(e,"B",(function(){return E})),t.d(e,"A",(function(){return F})),t.d(e,"z",(function(){return T})),t.d(e,"C",(function(){return N})),t.d(e,"q",(function(){return B})),t.d(e,"e",(function(){return M})),t.d(e,"D",(function(){return D})),t.d(e,"f",(function(){return H})),t.d(e,"s",(function(){return U})),t.d(e,"c",(function(){return q})),t.d(e,"m",(function(){return I})),t.d(e,"t",(function(){return G})),t.d(e,"v",(function(){return J})),t.d(e,"x",(function(){return V}));t("445a"),t("402f");var r=t("73ef"),o=t.n(r),c=t("a593"),u=t("3814"),a=t.n(u),s=t("1cfa"),i=t.n(s),f=t("31e9");function d(n){o.a.get(n.url+"&appkey="+f["a"]).then((function(e){n.success(e.data)})).catch((function(e){n.error(e)}))}function l(n){o.a.post(n.url,i.a.stringify(n.data),{headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then((function(e){n.success(e.data)})).catch((function(e){n.error(e)}))}function p(){return new Promise((function(n,e){d({url:"/banner?",success:function(e){n(e)},error:function(n){e(n)}})}))}function h(){return new Promise((function(n,e){d({url:"/typeProducts?key=isHot&value=1",success:function(e){n(e)},error:function(n){e(n)}})}))}function m(n,e){var t=new Promise((function(t,r){d({url:"/typeProducts?key=".concat(n,"&value=").concat(e),success:function(n){t(n)},error:function(n){r(n)}})}));return t}function b(n){return new Promise((function(e,t){d({url:"/productDetail?pid=".concat(n),success:function(n){e(n)},error:function(n){t(n)}})}))}function k(n){return new Promise((function(e,t){n.appkey=f["a"],l({url:"/login",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function w(n){return new Promise((function(e,t){n.appkey=f["a"],l({url:"/register",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function g(n){return new Promise((function(e,t){d({url:"/findAccountInfo?tokenString=".concat(n),success:function(n){e(n)},error:function(n){t(n)}})}))}function v(n){return new Promise((function(e,t){d({url:"/findMy?tokenString=".concat(n),success:function(n){e(n)},error:function(n){t(n)}})}))}function y(n){return new Promise((function(e,t){d({url:"/search?name=".concat(n),success:function(n){e(n)},error:function(n){t(n)}})}))}function P(n,e){var t=n?"like":"notlike";return new Promise((function(n,r){l({url:"/".concat(t),data:e,success:function(e){n(e)},error:function(n){r(n)}})}))}function x(n,e){var t=e?"findlike":"findAllLike";return new Promise((function(r,o){d({url:"/".concat(t,"?pid=").concat(e,"&tokenString=").concat(n),success:function(n){r(n)},error:function(n){o(n)}})}))}function S(n){return new Promise((function(e,t){d({url:"/shopcartCount?tokenString=".concat(n),success:function(n){e(n)},error:function(n){t(n)}})}))}function C(n){return new Promise((function(e,t){l({url:"/addShopcart",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function L(n){return new Promise((function(e,t){d({url:"/findAllShopcart?tokenString=".concat(n),success:function(n){e(n)},error:function(n){t(n)}})}))}function O(n){return new Promise((function(e,t){l({url:"/modifyShopcartCount",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function j(n){return new Promise((function(e,t){l({url:"/removeShopcart",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function A(n){return new Promise((function(e,t){d({url:"/findAddress?tokenString=".concat(n),success:function(n){e(n)},error:function(n){t(n)}})}))}function R(n,e){return new Promise((function(t,r){d({url:"/findAddressByAid?tokenString=".concat(e,"&aid=").concat(n),success:function(n){t(n)},error:function(n){r(n)}})}))}function $(n){return new Promise((function(e,t){l({url:"/addAddress",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function _(n){return new Promise((function(e,t){l({url:"/deleteAddress",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function E(n){return new Promise((function(e,t){l({url:"/updateNickName",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function F(n){return new Promise((function(e,t){l({url:"/updateDesc",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function T(n){return new Promise((function(e,t){l({url:"/updateAvatar",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function N(n){return new Promise((function(e,t){l({url:"/updatePassword",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function B(n){return new Promise((function(e,t){l({url:"/logout",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function M(n){return new Promise((function(e,t){l({url:"/destroyAccount",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function D(n){return new Promise((function(e,t){l({url:"/updateUserBg",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function H(n){return new Promise((function(e,t){l({url:"/editAddress",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function U(n){return new Promise((function(e,t){l({url:"/pay",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function q(n,e){return new Promise((function(t,r){d({url:"/commitShopcart?tokenString=".concat(n,"&sids=").concat(e),success:function(n){t(n)},error:function(n){r(n)}})}))}function I(n,e){return new Promise((function(t,r){d({url:"/findOrder?tokenString=".concat(n,"&status=").concat(e),success:function(n){t(n)},error:function(n){r(n)}})}))}function G(n){return new Promise((function(e,t){l({url:"/receive",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function J(n){return new Promise((function(e,t){l({url:"/removeOrder",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}function V(n){return new Promise((function(e,t){l({url:"/retrievePassword",data:n,success:function(n){e(n)},error:function(n){t(n)}})}))}c["a"].use(a.a,o.a),o.a.defaults.withCredentials=!0,o.a.defaults.baseURL="http://www.kangliuyong.com:10002/"},ac27:function(n,e,t){},c654:function(n,e,t){n.exports=t.p+"img/125.0cc06338.png"},f0dd:function(n,e,t){}});
//# sourceMappingURL=app.7d8bae1b.js.map