(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-498574b5"],{"0402":function(t,e,r){"use strict";r("7e24")},"0cb2":function(t,e,r){var n=r("7b0b"),a=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,c,u,f){var d=r+t.length,l=c.length,h=s;return void 0!==u&&(u=n(u),h=o),i.call(f,h,(function(n,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(d);case"<":o=u[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>l){var f=a(s/10);return 0===f?n:f<=l?void 0===c[f-1]?i.charAt(1):c[f-1]+i.charAt(1):n}o=c[s-1]}return void 0===o?"":o}))}},"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),i=r("17c2"),o=r("9112");for(var s in a){var c=n[s],u=c&&c.prototype;if(u&&u.forEach!==i)try{o(u,"forEach",i)}catch(f){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),i=a("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),a=r("825a"),i=r("d039"),o=r("ad6d"),s="toString",c=RegExp.prototype,u=c[s],f=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=s;(f||d)&&n(RegExp.prototype,s,(function(){var t=a(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?o.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"4d63":function(t,e,r){var n=r("83ab"),a=r("da84"),i=r("94ca"),o=r("7156"),s=r("9bf2").f,c=r("241c").f,u=r("44e7"),f=r("ad6d"),d=r("9f7f"),l=r("6eeb"),h=r("d039"),g=r("69f3").set,v=r("2626"),p=r("b622"),b=p("match"),y=a.RegExp,m=y.prototype,E=/a/g,A=/a/g,w=new y(E)!==E,k=d.UNSUPPORTED_Y,O=n&&i("RegExp",!w||k||h((function(){return A[b]=!1,y(E)!=E||y(A)==A||"/a/i"!=y(E,"i")})));if(O){var S=function(t,e){var r,n=this instanceof S,a=u(t),i=void 0===e;if(!n&&a&&t.constructor===S&&i)return t;w?a&&!i&&(t=t.source):t instanceof S&&(i&&(e=f.call(t)),t=t.source),k&&(r=!!e&&e.indexOf("y")>-1,r&&(e=e.replace(/y/g,"")));var s=o(w?new y(t,e):y(t,e),n?this:m,S);return k&&r&&g(s,{sticky:r}),s},x=function(t){t in S||s(S,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},$=c(y),I=0;while($.length>I)x($[I++]);m.constructor=S,S.prototype=m,l(a,"RegExp",S)}v("RegExp")},"4de4":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").filter,i=r("1dde"),o=i("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("50c4"),o=r("a691"),s=r("1d80"),c=r("8aa5"),u=r("0cb2"),f=r("14c3"),d=Math.max,l=Math.min,h=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=n.REPLACE_KEEPS_$0,p=g?"$":"$0";return[function(r,n){var a=s(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!g&&v||"string"===typeof n&&-1===n.indexOf(p)){var s=r(e,t,this,n);if(s.done)return s.value}var b=a(t),y=String(this),m="function"===typeof n;m||(n=String(n));var E=b.global;if(E){var A=b.unicode;b.lastIndex=0}var w=[];while(1){var k=f(b,y);if(null===k)break;if(w.push(k),!E)break;var O=String(k[0]);""===O&&(b.lastIndex=c(y,i(b.lastIndex),A))}for(var S="",x=0,$=0;$<w.length;$++){k=w[$];for(var I=String(k[0]),D=d(l(o(k.index),y.length),0),j=[],P=1;P<k.length;P++)j.push(h(k[P]));var N=k.groups;if(m){var R=[I].concat(j,D,y);void 0!==N&&R.push(N);var _=String(n.apply(void 0,R))}else _=u(I,y,D,j,N,n);D>=x&&(S+=y.slice(x,D)+_,x=D+I.length)}return S+y.slice(x)}]}))},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");var n=r("ade3");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),a=r("5899"),i="["+a+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5f65":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"new-address"},[r("van-nav-bar",{attrs:{title:t.title,"left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),r("van-address-edit",{attrs:{"area-list":t.addressList,"address-info":t.addressInfo,"show-set-default":t.isDefault,"show-delete":t.isDelete,"show-postal":t.isPostal,"save-button-text":"保存地址","delete-button-text":"删除地址","detail-rows":"2","detail-maxlength":"100"},on:{save:t.saveAddress,delete:t.deleteAddress}})],1)},a=[],i=r("5530"),o=(r("a9e3"),r("2f62")),s=r("fa7d"),c={name:"NewAddress",data:function(){return{addressInfo:{aid:"",name:"",tel:"",province:"",city:"",county:"",addressDetail:"",areaCode:"",postalCode:"",isDefault:!1}}},created:function(){var t=this;if(this.isLogin){var e=this.$route.query;if(0==e.isAdd){var r=localStorage.getItem("_t");this.$toast.loading({forbidClick:!0,duration:0,message:"正在加载..."}),this.axios({method:"GET",url:"/findAddressByAid",params:{appkey:this.appkey,tokenString:r,aid:e.aid}}).then((function(e){t.$toast.clear();var r=e.data.result[0];for(var n in r.isDefault=Boolean(r.isDefault),t.addressInfo)t.addressInfo[n]=r[n];var a=Object.assign({},t.addressInfo);t.$store.commit("newAddressModule/changeData",{key:"temporaryAddressData",value:a})})).catch((function(e){t.$toast.clear()}))}this.$store.commit("newAddressModule/changeData",{key:"isAdd",value:e.isAdd}),this.$store.commit("newAddressModule/changeData",{key:"aid",value:e.aid}),this.$store.commit("newAddressModule/changeData",{key:"isDelete",value:!e.isAdd}),this.$store.commit("newAddressModule/changeData",{key:"title",value:0==e.isAdd?"编辑地址":"新增地址"})}else this.$router.push({name:"Login"})},computed:Object(i["a"])({isLogin:function(){return this.$store.state.isLogin}},Object(o["b"])("newAddressModule",["isAdd","aid","isDefault","isDelete","isPostal","addressList","title","temporaryAddressData"])),methods:{back:function(){this.$router.go(-1)},isSame:function(t,e){for(var r in e)if(e[r]!=t[r])return!1;return!0},saveAddress:function(t){var e=this;delete t.country;var r=Object.assign({},t),n="";if(1==this.isAdd)delete r.aid,n="/addAddress";else{if(this.isSame(t,this.temporaryAddressData))return this.$router.push({name:"Address"});n="/editAddress"}var a=localStorage.getItem("_t");r.tokenString=a,r.appkey=this.appkey,r.isDefault=Number(r.isDefault),this.$toast.loading({forbidClick:!0,duration:0,message:"正在加载..."}),this.axios({method:"POST",url:n,data:r,transformRequest:s["a"].transformRequest}).then((function(t){e.$toast.clear(),e.back()})).catch((function(t){e.$toast.clear()}))},deleteAddress:function(){var t=this,e=localStorage.getItem("_t");this.$toast.loading({forbidClick:!0,duration:0,message:"正在加载..."}),this.axios({method:"POST",url:"/deleteAddress",data:{appkey:this.appkey,tokenString:e,aid:this.aid},transformRequest:s["a"].transformRequest}).then((function(e){t.$toast.clear(),t.$router.push({name:"Address"})})).catch((function(e){t.$toast.clear()}))}}},u=c,f=(r("0402"),r("2877")),d=Object(f["a"])(u,n,a,!1,null,"e49a9fe0",null);e["default"]=d.exports},7156:function(t,e,r){var n=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var i,o;return a&&"function"==typeof(i=e.constructor)&&i!==r&&n(o=i.prototype)&&o!==r.prototype&&a(t,o),t}},"7e24":function(t,e,r){},a15b:function(t,e,r){"use strict";var n=r("23e7"),a=r("44ad"),i=r("fc6a"),o=r("a640"),s=[].join,c=a!=Object,u=o("join",",");n({target:"Array",proto:!0,forced:c||!u},{join:function(t){return s.call(i(this),void 0===t?",":t)}})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,r){"use strict";var n=r("83ab"),a=r("da84"),i=r("94ca"),o=r("6eeb"),s=r("5135"),c=r("c6b6"),u=r("7156"),f=r("c04e"),d=r("d039"),l=r("7c73"),h=r("241c").f,g=r("06cf").f,v=r("9bf2").f,p=r("58a8").trim,b="Number",y=a[b],m=y.prototype,E=c(l(m))==b,A=function(t){var e,r,n,a,i,o,s,c,u=f(t,!1);if("string"==typeof u&&u.length>2)if(u=p(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(i=u.slice(2),o=i.length,s=0;s<o;s++)if(c=i.charCodeAt(s),c<48||c>a)return NaN;return parseInt(i,n)}return+u};if(i(b,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var w,k=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof k&&(E?d((function(){m.valueOf.call(r)})):c(r)!=b)?u(new y(A(e)),r,k):A(e)},O=n?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;O.length>S;S++)s(y,w=O[S])&&!s(k,w)&&v(k,w,g(y,w));k.prototype=m,m.constructor=k,o(a,b,k)}},ade3:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},b64b:function(t,e,r){var n=r("23e7"),a=r("7b0b"),i=r("df75"),o=r("d039"),s=o((function(){i(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return i(a(t))}})},bee2:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return a}))},d4ec:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},dbb4:function(t,e,r){var n=r("23e7"),a=r("83ab"),i=r("56ef"),o=r("fc6a"),s=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),a=s.f,u=i(n),f={},d=0;while(u.length>d)r=a(n,e=u[d++]),void 0!==r&&c(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),a=r("d039"),i=r("fc6a"),o=r("06cf").f,s=r("83ab"),c=a((function(){o(1)})),u=!s||c;n({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},fa7d:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("d4ec"),a=r("bee2"),i=(r("159b"),r("a15b"),r("d3b7"),r("25f0"),r("4d63"),r("ac1f"),r("5319"),r("fb6a"),function(){function t(){Object(n["a"])(this,t)}return Object(a["a"])(t,[{key:"transformRequest",value:function(t){var e="";for(var r in t)e+=r+"="+t[r]+"&";return e}},{key:"getCookies",value:function(t,e){var r={};return t.forEach((function(t){r[t]=e.$cookies.get(t)})),r}},{key:"getToken",value:function(t){var e=["t0","t1","t2"],r=[];return e.forEach((function(e){r.push(t.$cookies.get(e))})),r.join(".")}},{key:"formatDate",value:function(t,e){var r=t.getFullYear().toString();if(/(y+)/.test(e)){var n=RegExp.$1;e=e.replace(n,r.slice(r.length-n.length))}var a={M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()};for(var i in a){var o=new RegExp("(".concat(i,"{1,2})"));if(o.test(e)){var s=RegExp.$1,c=a[i]>=10||1==s.length?a[i]:"0"+a[i];e=e.replace(s,c)}}return e}}]),t}()),o=new i}}]);
//# sourceMappingURL=chunk-498574b5.dbbd61cd.js.map