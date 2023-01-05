(function(){"use strict";var e={5846:function(e,t,r){var n=r(144),a=r(998),o=r(3059),s=function(){var e=this,t=e._self._c;return t(a.Z,[t("Header",{attrs:{isSearchQuery:e.isSearchQuery}}),e.isSearchQuery?t(o.Z,[t("router-view")],1):e._e(),e.isSearchQuery?t("Footer"):e._e(),t("Snackbar")],1)},i=[],c=r(629),u=r(4611),l=r(6190),p=r(9258),h=function(){var e=this,t=e._self._c;return t(p.Z,{attrs:{color:e.snackbar.color},scopedSlots:e._u([{key:"action",fn:function({attrs:r}){return[t(l.Z,e._b({attrs:{text:"",timeout:e.snackbar.timeout},on:{click:e.hideSnackbar}},"v-btn",r,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v(" "+e._s(e.snackbar.text)+" ")])},d=[];const f="setSnackbar",m="setSearchQuery",g="setSearchList",v="setPopularList",y="setPackageData";var k={name:"SnackbarComponent",data:()=>({showSnackbar:!1,color:"",timeout:null,text:""}),computed:{...(0,c.Se)({snackbar:u.AT})},methods:{...(0,c.OI)([f]),hideSnackbar(){this[f]({show:!1})}}},b=k,_=r(1001),S=(0,_.Z)(b,h,d,!1,null,null,null),w=S.exports,x=r(6232),Z=r(2150),C=r(7953),P=function(){var e=this,t=e._self._c;return t(x.Z,{class:["header",{header__center:!e.isSearchQuery}],attrs:{app:"",absolute:"",elevation:"0",height:e.isSearchQuery?60:100,dark:e.isSearchQuery}},[t(Z.Z,[t(C.qW,[t("router-link",{attrs:{to:"/"}},[t("b",[e._v("JSDelivr")])])],1),t("div",{staticClass:"header_search"},[t("SearchInput")],1)],1)],1)},L=[],j=r(3602),O=function(){var e=this,t=e._self._c;return t(j.Z,{attrs:{placeholder:"search npm package",solo:"",flat:"",light:"","hide-details":"","prepend-inner-icon":"mdi-magnify",maxlength:"100",value:e.searchQuery},on:{"update:value":function(t){e.searchQuery=t},input:e.onSearch,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)}}})},Q=[],T={name:"SearchInputComponent",computed:{...(0,c.Se)({searchQuery:u.Sm})},watch:{"$route.query.query":{handler(e,t){this[m](e||""),!e&&t&&this[g]()},immediate:!0}},methods:{...(0,c.OI)([m,g]),onSearch(e){e.target&&(e=e.target.value),this[m](e),e=this.searchQuery||void 0,this.$router.replace({path:"/",query:{...this.$route.query,query:e}}).catch((()=>{}))}}},D=T,$=(0,_.Z)(D,O,Q,!1,null,null,null),q=$.exports,A={name:"HeaderComponent",computed:{...(0,c.Se)({searchQuery:u.Sm}),isSearchQuery(){return Boolean(this.searchQuery||"home"!==this.$route.name)}},components:{SearchInput:q}},E=A,N=(0,_.Z)(E,P,L,!1,null,null,null),B=N.exports,F=r(8271),I=function(){var e=this,t=e._self._c;return t(F.Z,{staticClass:"mt-3",attrs:{padless:"",dark:""}},[t(Z.Z,{staticClass:"text-center"},[t("div",[e._v(" "+e._s((new Date).getFullYear())+" "),t("strong",[e._v("JSDelivr")]),e._v(" — inspired by "),t("a",{attrs:{href:"https://www.jsdelivr.com/",target:"_blank"}},[e._v(" jsdelivr.com ")])]),t("small",[e._v(" Real-time search by "),t("a",{staticClass:"search-by",attrs:{target:"_blank",rel:"noopener",href:"https://www.algolia.com"}},[e._v(" Algolia ")])])])],1)},U=[],H={name:"FooterComponent"},M=H,R=(0,_.Z)(M,I,U,!1,null,"5f209708",null),G=R.exports,z={name:"App",computed:{...(0,c.Se)({searchQuery:u.Sm}),isSearchQuery(){return Boolean(this.searchQuery||"home"!==this.$route.name)}},components:{Snackbar:w,Header:B,Footer:G}},J=z,K=(0,_.Z)(J,s,i,!1,null,null,null),W=K.exports,Y=r(8345),V=function(){var e=this,t=e._self._c;return t(Z.Z,[t("SearchList")],1)},X=[];let ee=0,te=0;var re=async(e,t=100,...r)=>{if(!(Date.now()-te<t))return clearTimeout(ee),new Promise((n=>{ee=setTimeout((async()=>{te=Date.now(),n(await e(...r))}),t)}))},ne=r(458),ae=r(5372),oe=function(){var e=this,t=e._self._c;return t("div",[e._l(e.pkgs,(function(e){return t("Card",{key:e.name,attrs:{pkg:e}})})),e.isPagination?t(ae.Z,{attrs:{length:e.pages,"total-visible":5,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}):e._e(),e.isLoading||e.isPkgs?e._e():t("div",{staticClass:"text-center my-5"},[t("div",{staticClass:"text-h3 mb-3"},[e._v("No packages")]),t("div",{staticClass:"text-h6"},[e._v("Try another search request")])])],2)},se=[],ie=r(3423),ce=r(1154),ue=r(9582),le=r(4886),pe=r(4127),he=r(9043),de=r(4324),fe=r(6566),me=function(){var e=this,t=e._self._c;return t(ue.Z,{staticClass:"mt-2 mb-5",attrs:{outlined:""}},[e.pkg.name?t(le.EB,{staticClass:"text-h5 d-flex flex-column align-start flex-sm-row justify-sm-space-between"},[t("div",[t("router-link",{staticClass:"d-flex align-center",attrs:{to:{path:`package/npm/${e.pkg.name}`}}},[e.pkg.owner.avatar?t(ie.Z,{staticClass:"mr-2",attrs:{size:"40"}},[t("img",{attrs:{src:e.pkg.owner.avatar}})]):e._e(),t("span",{staticClass:"mr-2"},[e._v(e._s(e.pkg.name))]),e.pkg.deprecated?t(ce.Z,{attrs:{inline:"",color:"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("deprecated")]},proxy:!0}],null,!1,3423150633)}):e._e(),e.searchQuery===e.pkg.name?t(ce.Z,{attrs:{inline:"",color:"primary"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("exact match")]},proxy:!0}],null,!1,8736608)}):e._e()],1)],1),t("div",{staticClass:"mt-2 mt-sm-0"},[e.pkg.repository&&e.pkg.repository.url?t(fe.Z,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:r,attrs:n}){return[t(l.Z,e._g(e._b({staticClass:"mr-2",attrs:{href:e.pkg.repository.url,target:"_blank",outlined:"",tile:"",icon:"",color:"grey"}},"v-btn",n,!1),r),[t(de.Z,{staticClass:"black--text"},[e._v("mdi-github")])],1)]}}],null,!1,1653716006)},[t("span",[e._v("GitHub")])]):e._e(),t(fe.Z,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:r,attrs:n}){return[t(l.Z,e._g(e._b({staticClass:"mr-2",attrs:{href:`https://www.npmjs.com/package/${e.pkg.name}`,target:"_blank",outlined:"",tile:"",icon:"",color:"grey"}},"v-btn",n,!1),r),[t(de.Z,{staticClass:"black--text"},[e._v("mdi-npm")])],1)]}}],null,!1,275123173)},[t("span",[e._v("NPM")])]),t(fe.Z,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:r,attrs:n}){return[t(l.Z,e._g(e._b({attrs:{href:e._f("packageDownloadUrl")([e.pkg.name,e.pkg.version]),outlined:"",tile:"",icon:"",color:"grey"}},"v-btn",n,!1),r),[t(de.Z,{staticClass:"black--text"},[e._v("mdi-download")])],1)]}}],null,!1,2009398235)},[t("span",[e._v("Download")])])],1)]):e._e(),e.pkg.description?t(le.ZB,[e._v(" "+e._s(e.pkg.description)+" ")]):e._e(),e.pkg.keywords&&e.pkg.keywords.length?t("div",{staticClass:"flex-wrap px-4"},[t(he.Z,{attrs:{column:""}},e._l(e.pkg.keywords,(function(r,n){return t(pe.Z,{key:n,staticClass:"mr-2 my-1",attrs:{label:"",link:"",outlined:""}},[e._v(" "+e._s(r)+" ")])})),1)],1):e._e()],1)},ge=[],ve={name:"SearchListCardComponent",props:{pkg:{type:Object,required:!0}},computed:{...(0,c.Se)({searchQuery:u.Sm})}},ye=ve,ke=(0,_.Z)(ye,me,ge,!1,null,null,null),be=ke.exports,_e={name:"SearchListComponent",data:()=>({page:1}),computed:{...(0,c.Se)({searchQuery:u.Sm,searchList:u.Um}),pkgs(){return this.searchList.hits||[]},pages(){return this.searchList.nbPages||1},isLoading(){return Boolean(!Object.values(this.searchList).length||this.searchList.loading)},isPkgs(){return Boolean(this.pkgs.length)},isPagination(){return Boolean(this.isPkgs&&this.pages>1)}},watch:{page:{handler(e){Number(e)<=1&&(e=void 0),this.$router.replace({query:{...this.$route.query,page:e}}).catch((()=>{}))}}},methods:{...(0,c.OI)([m]),...(0,c.nv)([ne.ix])},components:{Card:be}},Se=_e,we=(0,_.Z)(Se,oe,se,!1,null,null,null),xe=we.exports,Ze={name:"HomePage",watch:{$route:{async handler(e){const{query:t,page:r}=e.query;t&&(await re(this[ne.ix],200,{query:t,page:r}),setTimeout((()=>{this.$vuetify.goTo(0)}),150))},immediate:!0,deep:!0}},methods:{...(0,c.nv)([ne.ix]),...(0,c.OI)([m])},components:{SearchList:xe}},Ce=Ze,Pe=(0,_.Z)(Ce,V,X,!1,null,null,null),Le=Pe.exports,je=function(){var e=this,t=e._self._c;return t(Z.Z,{staticClass:"text-center pt-10 pb-10"},[t("h1",[e._v("404")]),t("h3",[e._v("Page not found")])])},Oe=[],Qe={name:"NotFoundPage"},Te=Qe,De=(0,_.Z)(Te,je,Oe,!1,null,null,null),$e=De.exports;n.ZP.use(Y.ZP);const qe=[{path:"/",name:"home",component:Le},{path:"/:path/:type",redirect:{name:"home"}},{path:"/:path/:type/:name(.*)*",name:"package",component:()=>r.e(459).then(r.bind(r,3459)),beforeEnter(e,t,r){e.params.pathMatch?r({name:"not-found"}):r()}},{path:"/404",name:"404",component:$e,props:!0},{path:"*",redirect:{name:"404",params:{resource:"page"}}}],Ae=new Y.ZP({mode:"hash",base:"/jsdelivr/",routes:qe});var Ee=Ae;const Ne={snackbar:{}},Be={async[ne.AR]({commit:e},{color:t,timeout:r,text:n}){const a={color:t||"success",timeout:r||2e3,text:n||"Success",show:!0};return e(f,a),a}},Fe={[f](e,t){e.snackbar=t}},Ie={[u.AT](e){return e.snackbar}};var Ue={state:Ne,actions:Be,mutations:Fe,getters:Ie};const He=r(4955),Me=He("OFCNCOG2CU","f54e21fa3a2a0160595bb058179bfb1e",{protocol:"https:"}),Re=Me.initIndex("npm-search"),Ge="https://data.jsdelivr.com/v1";async function ze(e,t){try{const r=await fetch(Ge+e,Object.assign({},t,{method:"GET"}));return r.json()}catch(r){return[r]}}async function Je(e){try{return await Re.getObject(e)}catch(t){return[t]}}async function Ke(e,t,r){const n={page:t,hitsPerPage:r,attributesToHighlight:[],attributesToRetrieve:["deprecated","description","githubRepo","homepage","keywords","license","name","objectID","owner","version","popular","created","modified","repository","lastPublisher","changelogFilename"],analyticsTags:["jsdelivr"]};try{return Re.search(e,n).then((t=>({response:t,query:e})))}catch(a){return[a]}}var We={$search:Ke,$get:ze,$package:Je};const Ye={search({query:e,page:t,perPage:r}){return We.$search(e,t||0,r||10)},popular(e="month"){return We.$get(`/stats/packages/${e}`)},package(e){return We.$package(e)}},Ve={searchQuery:"",searchList:{},popularList:[],popularListType:"",popularListDate:"",packageData:{}},Xe={async[ne.ix]({state:e,commit:t},{query:r,page:n,perPage:a}){n=n<=1?0:n-1,a=a<10?10:a>200?200:a,e.searchList.hits||t(g,{loading:!0});const{response:o}=await Ye.search({query:r,page:n,perPage:a});return t(g,o),o},async[ne.eg]({state:e,commit:t},{period:r,type:n,count:a}){if(Date.now()-e.popularListDate<36e5&&e.popularList.length&&e.popularListType===n)return e.popularList;let o=await Ye.popular(r||"month");return e.popularListDate=Date.now(),n&&(e.popularListType=n,o=o.filter((e=>e.type===n))),o=o.sort(((e,t)=>t.hits-e.hits)).slice(0,a||10),t(v,o),o},async[ne.Ud]({state:e,commit:t},{name:r}){let n=e.packageData.name===r?e.packageData:{};return Object.values(n).length||(n=await Ye["package"](r)),t(y,n),n}},et={[m](e,t){e.searchQuery=t?t.trim().replaceAll("  "," "):t},[g](e,t){e.searchList=t||{}},[v](e,t){e.popularList=t},[y](e,t){e.packageData=t}},tt={[u.Sm](e){return e.searchQuery},[u.Um](e){return e.searchList},[u.cu](e){return e.popularList},[u.dk](e){return e.packageData}};var rt={state:Ve,actions:Xe,mutations:et,getters:tt};n.ZP.use(c.ZP);var nt=new c.ZP.Store({modules:{common:Ue,packages:rt}}),at=r(8864);n.ZP.use(at.Z);var ot=new at.Z({options:{}}),st=([e,t])=>e?(e=e.toString(),t&&(t=`-${t.toString()}`),`https://registry.npmjs.org/${e}/-/${e}${t}.tgz`):"";n.ZP.config.productionTip=!1,n.ZP.use(r(2513)),n.ZP.filter("packageDownloadUrl",st),new n.ZP({router:Ee,store:nt,vuetify:ot,render:e=>e(W)}).$mount("#app")},458:function(e,t,r){r.d(t,{AR:function(){return n},Ud:function(){return s},eg:function(){return o},ix:function(){return a}});const n="addSnackbar",a="fetchSearchList",o="fetchPopularList",s="fetchPackageData"},4611:function(e,t,r){r.d(t,{AT:function(){return n},Sm:function(){return a},Um:function(){return o},cu:function(){return s},dk:function(){return i}});const n="getSnackbar",a="getSearchQuery",o="getSearchList",s="getPopularList",i="getPackageData"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,o){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],o=e[l][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(l--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+".ba5974a3.js"}}(),function(){r.miniCssF=function(e){return"css/"+e+".dbe55f67.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="jsdelivr:";r.l=function(n,a,o,s){if(e[n])e[n].push(a);else{var i,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+o){i=p;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[a];var h=function(t,r){i.onerror=i.onload=null,clearTimeout(d);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(r)})),t)return t(r)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/jsdelivr/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(r){if(o.onerror=o.onload=null,"load"===r.type)n();else{var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,o.parentNode.removeChild(o),a(c)}};return o.onerror=o.onload=s,o.href=t,r?r.parentNode.insertBefore(o,r.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){a=s[n],o=a.getAttribute("data-href");if(o===e||o===t)return a}},n=function(n){return new Promise((function(a,o){var s=r.miniCssF(n),i=r.p+s;if(t(s,i))return a();e(n,i,null,a,o)}))},a={143:0};r.f.miniCss=function(e,t){var r={459:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};r.f.j=function(t,n){var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(r,n){a=e[t]=[r,n]}));n.push(a[2]=o);var s=r.p+r.u(t),i=new Error,c=function(n){if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,a[1](i)}};r.l(s,c,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,s=n[0],i=n[1],c=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var l=c(r)}for(t&&t(n);u<s.length;u++)o=s[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(l)},n=self["webpackChunkjsdelivr"]=self["webpackChunkjsdelivr"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(5846)}));n=r.O(n)})();
//# sourceMappingURL=app.e6b8d8e1.js.map