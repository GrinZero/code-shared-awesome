(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{8936:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return e(45965)}])},45965:function(n,t,e){"use strict";function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):function(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})),n}e.r(t),e.d(t,{default:function(){return m}});var i=e(97458),c=e(31631),u=e(52983),a=e(51886),s=e.n(a),l=e(70238),f=e(87875),d=e(34909),g=e(54170),m=function(){var n=(0,c.useRouter)(),t=(0,u.useState)({account:"",password:""}),e=t[0],a=t[1],m=(0,u.useState)(!1),p=m[0],h=m[1],y=function(n,t){var i=t.target.name,c=r(function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){o(n,t,e[t])}))}return n}({},e),o({},i,n));a(c)};return(0,i.jsx)("div",{className:s().login,children:(0,i.jsxs)("div",{className:s().form,children:[(0,i.jsx)("h2",{className:s().title,children:"login"}),(0,i.jsx)("div",{children:(0,i.jsx)(f.Z,{placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7\u3001\u624b\u673a\u53f7\u3001\u90ae\u7bb1",name:"account",onChange:y})}),(0,i.jsxs)("div",{children:[(0,i.jsx)(f.Z.Password,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",name:"password",onChange:y}),(0,i.jsxs)("div",{className:s().find,children:[(0,i.jsx)("span",{onClick:function(){return n.push("/register")},children:"\u6ce8\u518c!"}),(0,i.jsx)("span",{children:"\u5fd8\u8bb0\u5bc6\u7801?"})]})]}),(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{onClick:function(){h(!0),(0,l.x4)().then((function(t){console.log(t),(0,g.o4)(t.data.token),n.push("/"),h(!1)}))},loading:p,children:"\u767b\u5f55"})})]})})}},54170:function(n,t,e){"use strict";function o(n){window.localStorage.setItem("code_token",n),window.localStorage.setItem("code_login_status","1"),console.log(n)}function r(){return"1"===window.localStorage.getItem("code_login_status")}function i(){console.log(1),window.localStorage.clear()}e.d(t,{Jb:function(){return r},iA:function(){return i},o4:function(){return o}})},70238:function(n,t,e){"use strict";e.d(t,{X6:function(){return m},qv:function(){return h},PQ:function(){return d},DA:function(){return s},d7:function(){return g},bG:function(){return p},x4:function(){return c},z2:function(){return i}});var o=e(60947),r=e(64062),i=function(){var n=(0,o.Z)((function(){return(0,r.__generator)(this,(function(n){return[2,{status:"ok",data:{id:"xxx"}}]}))}));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,o.Z)((function(){return(0,r.__generator)(this,(function(n){return[2,{status:"ok",data:{account:"12345678",token:"hancjkdsnkjafdjksfnakjdvbkjdabvkdsbvdsakljvbsdklbsdaf"}}]}))}));return function(){return n.apply(this,arguments)}}(),u=[{id:"0",author:"lijiayan",det:"\u771f\u4e0d\u9519",time:"1 hour ago",getLike:32,getcollect:10},{id:"1",author:"lijiayan",det:"\u771f\u4e0d\u9519",time:"1 hour ago",getLike:32,getcollect:10},{id:"2",author:"lijiayan",det:"\u771f\u4e0d\u9519",time:"1 hour ago",getLike:32,getcollect:10},{id:"3",author:"lijiayan",det:"\u771f\u4e0d\u9519",time:"1 hour ago",getLike:32,getcollect:10},{id:"4",author:"lijiayan",det:"\u771f\u4e0d\u9519",time:"1 hour ago",getLike:32,getcollect:10},{id:"5",author:"lijiayan",det:"\u771f\u4e0d\u9519",time:"1 hour ago",getLike:32,getcollect:10}],a=[{id:1,type:0,title:"React\u6e90\u7801\u8fd9\u91cc\u7684\u5904\u7406\u592a\u5999\u4e86\uff01",time:"\u4e00\u5468\u524d",user:"\u6492\u51b7\u624d\u4e0d\u662f\u5c0f\u5c0f\u8499",introduce:"\u5173\u4e8eReact\u7684\u6e90\u7801\uff0c\u4e00\u76f4\u662f\u4e3a\u5927\u5bb6\u6d25\u6d25\u4e50\u9053\u7684,\u4eca\u5929\u6211\u4eec\u5c31\u6765\u4e00\u8d77\u7814\u7a76\u4e00\u4e0b\u5173\u4e8eVue\u6e90\u7801\u4e2d\u54cd\u5e94\u5f0f\u7684\u90e8\u5206...",getLikes:120,comment:49,code:"\n      console.log(abc);\n      console.log(abc);\n      console.log(abc);\n      xxx.forEach(item=>{console.log(1)})"},{id:2,type:0,title:"React \u65b0\u63d0\u6848 useEvent \u5df2\u6b7b\uff1f\u4e0d\uff0c\u5b83\u5c06\u6d85\u76d8\u91cd\u751f\u3002",time:"\u4e00\u5468\u524d",user:"\u54c8\u54c8\u54c8\u54c8\u54c8",introduce:"key\u662fvue\u4e2d\u865a\u62dfdom\u6807\u8bb0\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u901a\u8fc7\u8fd9\u4e2akey\uff0cdiff\u7b97\u6cd5\u80fd\u66f4\u52a0\u51c6\u786e\u548c\u5feb\u6377\u3002\u4e0d\u4f7f\u7528key\u7684\u60c5\u51b5\u4e0b\uff0c\u56e0\u4e3avue\u7684\u5c31\u5730\u66f4\u65b0\u4f1a\u9009\u62e9\u590d\u7528\u8282\u70b9\uff0c\u4e4b\u524d\u7684\u72b6\u6001\u88ab\u4fdd\u5b58\uff0c\u53ef\u80fd\u4f1a\u4ea7\u751f\u4e00\u7cfb\u5217\u7684bug",getLikes:140,comment:43,code:'var str1="HELLO"\n      var str2="123HELLO"\n      num1 = Number( str1 );\n      num2 = Number( str2 );\n      console.log(num1);\n      console.log(num2);'},{id:3,type:0,title:"\u524d\u7aef\u4e5f\u5b66\u4e00\u4e0b Lua \u5440",time:"2022\u5e743\u670810\u65e5",user:"\u5065\u5eb7\u5927\u6570\u636e",introduce:"\u73b0\u5728\uff0c\u6211\u4eec\u60f3\u6401\u7f6e\u5f53\u524d\u7684 RFC\uff0c\u8ba1\u5212\u53d1\u5e03\u4e00\u4e2a\u4e0d\u540c\u7684\u3001\u8303\u56f4\u66f4\u5c0f\u7684 RFC \u6765\u53d6\u4ee3\u8fd9\u4e2a RFC\u3002\u7531\u4e8e\u65b0\u7684 RFC \u7684\u4f5c\u7528\u57df\u4e0d\u540c\uff0c\u6211\u4eec\u4e5f\u8bb8\u4f1a\u7ed9 useEvent \u4e00\u4e2a\u4e0d\u540c\u7684\u540d\u5b57\u3002",getLikes:140,comment:43,code:'function fn_name(params,fn)\n      -- your lua function code\n  end\n  fn_name("a", function(p)\n      return a\n   end\n   );'},{id:4,type:1,title:"React\u6e90\u7801\u8fd9\u91cc\u7684\u5904\u7406\u592a\u5999\u4e86\uff01",time:"\u4e00\u5468\u524d",user:"\u5c0f\u8499",introduce:"\u4eca\u5929\u6211\u4eec\u5c31\u6765\u4e00\u8d77\u7814\u7a76\u4e00\u4e0b\u5173\u4e8eVue\u6e90\u7801\u4e2d\u54cd\u5e94\u5f0f\u7684\u90e8\u5206...",getLikes:100,comment:40,code:"console.log(abc);\n      console.log(abc);\n      console.log(abc);\n      xxx.forEach(item=>{console.log(1)})"},{id:5,type:2,title:"\u9762\u8bd5\u5b98\u4e3a\u5565\u603b\u662f\u8ba9\u6211\u4eec\u624b\u6495call\u3001apply\u3001bind?",time:"\u4e09\u5929\u524d",user:"\u6d3b\u52a8\u7a7a\u95f4\u5c0f\u5c0f",introduce:"\u6211\u53d1\u73b0\u4e86\u4e00\u4e2aReact\u3001Vue\u7b49\u6240\u6709\u524d\u7aef\u6846\u67b6\u90fd\u5b58\u5728\u7684\u9690\u79d8Bug\uff1f",getLikes:140,comment:43,code:"console.log(abc);\n      console.log(abc);\n      console.log(abc);\n      xxx.forEach(item=>{console.log(1)})"},{id:6,type:3,title:"React\u6e90\u7801\u8fd9\u91cc\u7684\u5904\u7406\u592a\u5999\u4e86\uff01",time:"2022\u5e749\u67088\u65e5",user:"\u5c0f\u592a\u9633",introduce:"\u5176\u5b9e\u4e0a\u9762\u8fd9\u6bb5\u8bdd\u5df2\u7ecf\u5f88\u597d\u5730\u9053\u51fa\u4e86call\u7684\u771f\u6b63\u4f5c\u7528\uff0c\u6539\u53d8\u51fd\u6570\u7684\u4f5c\u7528\u57df\u3002\u8fd9\u91cc\u5148\u8bf4\u4e00\u4e0b\uff0c\u4e0d\u7ba1\u662fcall,\u8fd8\u662fapply\u90fd\u662f\u5192\u7528\u501f\u5145\u51fd\u6570\u3002",getLikes:140,comment:43,code:"const mbs = {\n        name: '\u9ebb\u4e0d\u70e7',\n        say(prefix, age) {\n          console.log(sssss)\n        }\n      }\n      const A = {\n        name:'\u5c0f\u4e01'\n      }\n      mbs.say.call(A,'hello',3) // 'hello,my name is \u5c0f\u4e01,i am 3 year old'\n      "},{id:7,type:4,title:"\u8de8\u57df\u8bf7\u6c42\u5982\u4f55\u643a\u5e26cookie?",time:"2022\u5e749\u67089\u65e5",user:"\u5c0f\u592a\u9633",introduce:"\u5728\u524d\u7aef\u8bf7\u6c42\u7684\u65f6\u5019\u8bbe\u7f6erequest\u5bf9\u8c61\u7684\u5c5e\u6027withCredentials\u4e3atrue\u3002",getLikes:140,comment:43,code:"const mbs = {\n        name: '\u9ebb\u4e0d\u70e7',\n        say(prefix, age) {\n          console.log(sssss)\n        }\n      }\n      const A = {\n        name:'\u5c0f\u4e01'\n      }\n      mbs.say.call(A,'hello',3) // 'hello,my name is \u5c0f\u4e01,i am 3 year old'\n      "}],s=function(){var n=(0,o.Z)((function(){return(0,r.__generator)(this,(function(n){return[2,{status:"ok",data:a}]}))}));return function(){return n.apply(this,arguments)}}(),l=function(n){var t=n.id,e=parseInt(t);return a.filter((function(n){return n.id==e}))[0]},f=function(n){return u.filter((function(t){return t.id===n}))},d=function(){var n=(0,o.Z)((function(n){return(0,r.__generator)(this,(function(t){return[2,{status:"ok",data:l(n)}]}))}));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,o.Z)((function(n){return(0,r.__generator)(this,(function(t){return[2,{status:"ok",data:f(n)}]}))}));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,o.Z)((function(n){return(0,r.__generator)(this,(function(t){return[2,{status:"ok",data:(e=n,u.push(e),f(e.id))}];var e}))}));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,o.Z)((function(){return(0,r.__generator)(this,(function(n){return[2,{status:"ok",data:{id:12345678,name:"\u5f20\u4e09",account:"12233335555"}}]}))}));return function(){return n.apply(this,arguments)}}(),h=(function(){var n=(0,o.Z)((function(){return(0,r.__generator)(this,(function(n){return[2,{status:"ok",data:{id:"xxx"}}]}))}))}(),function(){var n=(0,o.Z)((function(n){return(0,r.__generator)(this,(function(n){return[2,{status:"ok",data:{info:"success"}}]}))}));return function(t){return n.apply(this,arguments)}}())},51886:function(n){n.exports={login:"login_login__nnXkC",form:"login_form__PYpQo",title:"login_title__D7qjs",find:"login_find__5Z6ny"}}},function(n){n.O(0,[402,326,774,888,179],(function(){return t=8936,n(n.s=t);var t}));var t=n.O();_N_E=t}]);