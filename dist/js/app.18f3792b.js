(function(){"use strict";var e={7855:function(e,t,r){var n=r(144),a=r(998),o=r(3059),s=function(){var e=this,t=e._self._c;return t(a.Z,[t("Header",{attrs:{isSearchQuery:e.isSearchQuery}}),e.isSearchQuery?t(o.Z,[t("router-view")],1):e._e(),e.isSearchQuery?t("Footer"):e._e(),t("Snackbar",{ref:"snackbar"})],1)},i=[],u=r(629),c=r(4611),l=r(6190),h=r(9258),p=function(){var e=this,t=e._self._c;return t(h.Z,{attrs:{color:e.color},scopedSlots:e._u([{key:"action",fn:function({attrs:r}){return[t(l.Z,e._b({attrs:{text:"",timeout:e.timeout},on:{click:function(t){e.showSnackbar=!1}}},"v-btn",r,!1),[e._v(" Close ")])]}}]),model:{value:e.showSnackbar,callback:function(t){e.showSnackbar=t},expression:"showSnackbar"}},[e._v(" "+e._s(e.text)+" ")])},f=[],d={name:"SnackbarComponent",data:()=>({showSnackbar:!1,color:"",timeout:null,text:""}),methods:{show(e){const{color:t,timeout:r,text:n}=e;this.color=t||"success",this.timeout=r||2e3,this.text=n,this.showSnackbar=!0}}},m=d,g=r(1001),v=(0,g.Z)(m,p,f,!1,null,null,null),y=v.exports,b=r(6232),_=r(2150),k=r(7953),S=function(){var e=this,t=e._self._c;return t(b.Z,{class:["header",{header__center:!e.isSearchQuery}],attrs:{app:"",absolute:"",elevation:"0",height:e.isSearchQuery?60:100,dark:e.isSearchQuery}},[t(_.Z,[t(k.qW,[t("router-link",{attrs:{to:"/"}},[t("b",[e._v("JSDelivr")])])],1),t("div",{staticClass:"header_search"},[t("SearchInput")],1)],1)],1)},w=[],x=r(3602),Z=function(){var e=this,t=e._self._c;return t(x.Z,{attrs:{placeholder:"search npm package",solo:"",flat:"",light:"","hide-details":"","prepend-inner-icon":"mdi-magnify",maxlength:"100",value:e.searchQuery},on:{"update:value":function(t){e.searchQuery=t},input:e.onSearch,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)}}})},L=[];const C="setSearchQuery",P="setSearchList",j="setPopularList",Q="setPackageData";var O={name:"SearchInputComponent",computed:{...(0,u.Se)({searchList:c.Um,searchQuery:c.Sm})},watch:{"$route.query.query":{handler(e){this[C](e||"")},immediate:!0}},methods:{...(0,u.OI)([C,P]),onSearch(e){e.target&&(e=e.target.value),this[C](e),this.$router.replace({path:"/",query:{...this.$route.query,query:this.searchQuery?this.searchQuery:void 0}}).catch((()=>{}))}}},T=O,$=(0,g.Z)(T,Z,L,!1,null,null,null),D=$.exports,q={name:"HeaderComponent",computed:{...(0,u.Se)({searchQuery:c.Sm}),isSearchQuery(){return Boolean(this.searchQuery||"home"!==this.$route.name)}},components:{SearchInput:D}},E=q,A=(0,g.Z)(E,S,w,!1,null,null,null),N=A.exports,F=r(8271),U=function(){var e=this,t=e._self._c;return t(F.Z,{staticClass:"mt-3",attrs:{padless:"",dark:""}},[t(_.Z,{staticClass:"text-center"},[t("div",[e._v(" "+e._s((new Date).getFullYear())+" "),t("strong",[e._v("JSDelivr")]),e._v(" — inspired by "),t("a",{attrs:{href:"https://www.jsdelivr.com/",target:"_blank"}},[e._v(" jsdelivr.com ")])]),t("small",[e._v(" Real-time search by "),t("a",{staticClass:"search-by",attrs:{target:"_blank",rel:"noopener",href:"https://www.algolia.com"}},[e._v(" Algolia ")])])])],1)},B=[],I={name:"FooterComponent"},H=I,M=(0,g.Z)(H,U,B,!1,null,"5f209708",null),G=M.exports,R={name:"App",computed:{...(0,u.Se)({searchQuery:c.Sm}),isSearchQuery(){return Boolean(this.searchQuery||"home"!==this.$route.name)}},mounted(){this.$root.snackbar=this.$refs.snackbar},components:{Snackbar:y,Header:N,Footer:G}},z=R,J=(0,g.Z)(z,s,i,!1,null,null,null),K=J.exports,W=r(8345),Y=function(){var e=this,t=e._self._c;return t(_.Z,[t("SearchList")],1)},V=[];let X=0,ee=0;var te=async(e,t=100,...r)=>{if(!(Date.now()-ee<t))return clearTimeout(X),new Promise((n=>{X=setTimeout((async()=>{ee=Date.now(),n(await e(...r))}),t)}))},re=r(458),ne=r(3423),ae=r(1154),oe=r(9582),se=r(4886),ie=r(4127),ue=r(9043),ce=r(4324),le=r(5372),he=r(6566),pe=function(){var e=this,t=e._self._c;return t("div",[e.searchList.hits?[e._l(e.searchList.hits,(function(r){return t(oe.Z,{key:r.name,staticClass:"mt-2 mb-5",attrs:{outlined:""}},[t(se.EB,{staticClass:"text-h5 d-flex flex-column align-start flex-sm-row justify-sm-space-between"},[t("div",[t("router-link",{staticClass:"d-flex align-center",attrs:{to:{path:`package/npm/${r.name}`}}},[r.owner.avatar?t(ne.Z,{staticClass:"mr-2",attrs:{size:"40"}},[t("img",{attrs:{src:r.owner.avatar}})]):e._e(),t("span",{staticClass:"mr-2"},[e._v(e._s(r.name))]),r.deprecated?t(ae.Z,{attrs:{inline:"",color:"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("deprecated")]},proxy:!0}],null,!0)}):e._e(),e.searchQuery===r.name?t(ae.Z,{attrs:{inline:"",color:"primary"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("exact match")]},proxy:!0}],null,!0)}):e._e()],1)],1),t("div",{staticClass:"mt-2 mt-sm-0"},[r.repository.url?t(he.Z,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:n,attrs:a}){return[t("a",e._g(e._b({staticClass:"v-btn v-btn--icon v-btn--outlined v-btn--round v-btn--tile theme--light v-size--default grey--text mr-2",attrs:{href:r.repository.url,target:"_blank"}},"a",a,!1),n),[t(ce.Z,{staticClass:"black--text"},[e._v("mdi-github")])],1)]}}],null,!0)},[t("span",[e._v("GitHub")])]):e._e(),r.repository.url?t(he.Z,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:n,attrs:a}){return[t("a",e._g(e._b({staticClass:"v-btn v-btn--icon v-btn--outlined v-btn--round v-btn--tile theme--light v-size--default grey--text",attrs:{href:`https://www.npmjs.com/package/${r.name}`,target:"_blank"}},"a",a,!1),n),[t(ce.Z,{staticClass:"black--text"},[e._v("mdi-npm")])],1)]}}],null,!0)},[t("span",[e._v("NPM")])]):e._e()],1)]),r.description?t(se.ZB,[e._v(" "+e._s(r.description)+" ")]):e._e(),r.keywords.length?t("div",{staticClass:"flex-wrap px-4"},[t(ue.Z,{attrs:{column:""}},e._l(r.keywords,(function(r,n){return t(ie.Z,{key:n,staticClass:"mr-2 my-1",attrs:{label:"",link:"",outlined:""}},[e._v(" "+e._s(r)+" ")])})),1)],1):e._e()],1)})),t(le.Z,{attrs:{length:e.pages,"total-visible":5,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})]:e.searchList||e.searchList.loading||e.searchList.hits?e._e():t("h2",[e._v(" No packages ")])],2)},fe=[],de={name:"SearchListComponent",data:()=>({page:1}),computed:{...(0,u.Se)({searchQuery:c.Sm,searchList:c.Um}),isSearchList(){return Boolean(this.searchList.hits&&this.searchList.hits.length)},pages(){return this.searchList.nbPages||1}},watch:{page:{handler(e){Number(e)<=1&&(e=void 0),this.$router.replace({query:{...this.$route.query,page:e}}).catch((()=>{}))}}},methods:{...(0,u.OI)([C]),...(0,u.nv)([re.ix])}},me=de,ge=(0,g.Z)(me,pe,fe,!1,null,null,null),ve=ge.exports,ye={name:"HomePage",data:()=>({}),computed:{...(0,u.Se)({searchQuery:c.Sm,searchList:c.Um,popular:c.GET_POPULAR})},watch:{$route:{async handler(e){const{query:t,page:r}=e.query;t?(await te(this[re.ix],200,{query:t,page:r}),setTimeout((()=>{this.$vuetify.goTo(0)}),150)):this[C]("")},immediate:!0,deep:!0}},methods:{...(0,u.nv)([re.ix]),...(0,u.OI)([C,P])},components:{SearchList:ve}},be=ye,_e=(0,g.Z)(be,Y,V,!1,null,null,null),ke=_e.exports,Se=function(){var e=this,t=e._self._c;return t(_.Z,{staticClass:"text-center pt-10 pb-10"},[t("h1",[e._v("404")]),t("h3",[e._v("Page not found")])])},we=[],xe={name:"NotFoundPage"},Ze=xe,Le=(0,g.Z)(Ze,Se,we,!1,null,null,null),Ce=Le.exports;n.ZP.use(W.ZP);const Pe=[{path:"/",name:"home",component:ke},{path:"/package",component:()=>r.e(606).then(r.bind(r,9606)),children:[{path:":type",children:[{path:":name(.*)*",name:"package"}]}],beforeEnter(e,t,r){const{params:n}=e;n.type&&n.name?r():r("/")}},{path:"/:pathMatch(.*)*",name:"not-found",component:Ce}],je=new W.ZP({mode:"history",base:"/gh-pages/",routes:Pe});var Qe=je;const Oe=r(4955),Te=Oe("OFCNCOG2CU","f54e21fa3a2a0160595bb058179bfb1e",{protocol:"https:"}),$e=Te.initIndex("npm-search"),De="https://data.jsdelivr.com/v1";async function qe(e,t){try{const r=await fetch(De+e,Object.assign({},t,{method:"GET"}));return r.json()}catch(r){return[r]}}async function Ee(e){try{const t=await $e.getObject(e);return console.log("$package",t),t}catch(t){return[t]}}async function Ae(e,t,r){const n={page:t,hitsPerPage:r,attributesToHighlight:[],attributesToRetrieve:["deprecated","description","githubRepo","homepage","keywords","license","name","objectID","owner","version","popular","created","modified","repository","lastPublisher","changelogFilename"],analyticsTags:["jsdelivr"]};try{return $e.search(e,n).then((t=>({response:t,query:e})))}catch(a){return[a]}}var Ne={$search:Ae,$get:qe,$package:Ee};const Fe={search({query:e,page:t,perPage:r}){return Ne.$search(e,t||0,r||10)},popular(e="month"){return Ne.$get(`/stats/packages/${e}`)},package(e){return Ne.$package(e)}},Ue={searchQuery:"",searchList:[],popularList:[],popularListType:"",popularListDate:"",packageData:{}},Be={async[re.ix]({state:e,commit:t},{query:r,page:n,perPage:a}){n=n<=1?0:n-1,a=a<10?10:a>200?200:a,e.searchList.hits||t(P,[{loading:!0}]);const{response:o}=await Fe.search({query:r,page:n,perPage:a});return t(P,o),o},async[re.eg]({state:e,commit:t},{period:r,type:n,count:a}){if(Date.now()-e.popularListDate<36e5&&e.popularList.length&&e.popularListType===n)return e.popularList;let o=await Fe.popular(r||"month");return e.popularListDate=Date.now(),n&&(e.popularListType=n,o=o.filter((e=>e.type===n))),o=o.sort(((e,t)=>t.hits-e.hits)).slice(0,a||10),t(j,o),o},async[re.Ud]({state:e,commit:t},{name:r}){let n=e.packageData.name===r?e.packageData:{};return Object.values(n).length||(n=await Fe["package"](r)),t(Q,n),n}},Ie={[C](e,t){e.searchQuery=t?t.trim().replaceAll("  "," "):t},[P](e,t){e.searchList=t},[j](e,t){e.popularList=t},[Q](e,t){e.packageData=t}},He={[c.Sm](e){return e.searchQuery},[c.Um](e){return e.searchList},[c.cu](e){return e.popularList},[c.dk](e){return e.packageData}};var Me={state:Ue,actions:Be,mutations:Ie,getters:He};n.ZP.use(u.ZP);var Ge=new u.ZP.Store({modules:{packages:Me}}),Re=r(8864);n.ZP.use(Re.Z);var ze=new Re.Z({options:{}});n.ZP.config.productionTip=!1,n.ZP.use(r(2513)),new n.ZP({router:Qe,store:Ge,vuetify:ze,render:e=>e(K)}).$mount("#app")},458:function(e,t,r){r.d(t,{Ud:function(){return o},eg:function(){return a},ix:function(){return n}});const n="fetchSearchList",a="fetchPopularList",o="fetchPackageData"},4611:function(e,t,r){r.d(t,{Sm:function(){return n},Um:function(){return a},cu:function(){return o},dk:function(){return s}});const n="getSearchQuery",a="getSearchList",o="getPopularList",s="getPackageData"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,o){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],o=e[l][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(i=!1,o<s&&(s=o));if(i){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+".f729f02f.js"}}(),function(){r.miniCssF=function(e){return"css/"+e+".dbe55f67.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="jsdelivr:";r.l=function(n,a,o,s){if(e[n])e[n].push(a);else{var i,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var h=c[l];if(h.getAttribute("src")==n||h.getAttribute("data-webpack")==t+o){i=h;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[a];var p=function(t,r){i.onerror=i.onload=null,clearTimeout(f);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/gh-pages/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(r){if(o.onerror=o.onload=null,"load"===r.type)n();else{var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,o.parentNode.removeChild(o),a(u)}};return o.onerror=o.onload=s,o.href=t,r?r.parentNode.insertBefore(o,r.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){a=s[n],o=a.getAttribute("data-href");if(o===e||o===t)return a}},n=function(n){return new Promise((function(a,o){var s=r.miniCssF(n),i=r.p+s;if(t(s,i))return a();e(n,i,null,a,o)}))},a={143:0};r.f.miniCss=function(e,t){var r={606:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};r.f.j=function(t,n){var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(r,n){a=e[t]=[r,n]}));n.push(a[2]=o);var s=r.p+r.u(t),i=new Error,u=function(n){if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,a[1](i)}};r.l(s,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,s=n[0],i=n[1],u=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(u)var l=u(r)}for(t&&t(n);c<s.length;c++)o=s[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(l)},n=self["webpackChunkjsdelivr"]=self["webpackChunkjsdelivr"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(7855)}));n=r.O(n)})();
//# sourceMappingURL=app.18f3792b.js.map