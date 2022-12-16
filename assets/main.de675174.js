import{_ as h,p as B,c as A,a as m,s as j,i as M,b as F,l as R,d as S,e as q,f as V,g as z}from"./iframe-router.9978bed4.js";import{c as C,n as p,a as r,r as u,o as i,F as y,b as $,d,t as f,e as v,f as g,g as I,h as Y,w as b,T as W,i as w,j as U,v as G,p as J,k as K,l as Q,m as X,q as Z,s as ee}from"./vue-libs.fbc88d2e.js";const te={name:"VanDocNavLink",props:{base:String,item:Object},computed:{itemName(){const e=(this.item.title||this.item.name).split(" ");return`${e[0]} <span>${e.slice(1).join(" ")}</span>`},path(){return`${this.base}${this.item.path}`},active(){return this.$route.path===this.path?!0:this.item.path==="home"?this.$route.path===this.base:!1}},watch:{active(){this.scrollIntoView()}},mounted(){this.scrollIntoView()},methods:{scrollIntoView(){this.active&&this.$el&&this.$el.scrollIntoViewIfNeeded&&this.$el.scrollIntoViewIfNeeded()}}},ne=["href","innerHTML"],oe=["innerHTML"];function se(e,n,t,a,s,o){const c=u("router-link");return t.item.path?(i(),C(c,{key:0,class:p({active:o.active}),to:o.path,innerHTML:o.itemName},null,8,["class","to","innerHTML"])):t.item.link?(i(),r("a",{key:1,href:t.item.link,innerHTML:o.itemName},null,8,ne)):(i(),r("a",{key:2,innerHTML:o.itemName},null,8,oe))}var x=h(te,[["render",se]]);const ae={name:"VanDocNav",components:{[x.name]:x},props:{lang:String,navConfig:Array},data(){return{top:64,bottom:0}},computed:{style(){return{top:this.top+"px",bottom:this.bottom+"px"}},base(){return this.lang?`/${this.lang}/`:"/"}},created(){window.addEventListener("scroll",this.onScroll),this.onScroll()},methods:{onScroll(){const{pageYOffset:e}=window;this.top=Math.max(0,64-e)}}},ie={class:"van-doc-nav__title"};function re(e,n,t,a,s,o){const c=u("van-doc-nav-link");return i(),r("div",{class:"van-doc-nav",style:I(o.style)},[(i(!0),r(y,null,$(t.navConfig,(l,_)=>(i(),r("div",{class:"van-doc-nav__group",key:_},[d("div",ie,f(l.title),1),l.items?(i(!0),r(y,{key:0},$(l.items,(k,T)=>(i(),r("div",{key:T,class:"van-doc-nav__item"},[v(c,{item:k,base:o.base},null,8,["item","base"])]))),128)):g("",!0)]))),128))],4)}var ce=h(ae,[["render",re]]);const le="modulepreload",H={},de="/vant-weapp/",N=function(n,t){return!t||t.length===0?n():Promise.all(t.map(a=>{if(a=`${de}${a}`,a in H)return;H[a]=!0;const s=a.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${o}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":le,s||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),s)return new Promise((l,_)=>{c.addEventListener("load",l),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>n())};const ue={name:"VanDocSearch",props:{lang:String,searchConfig:Object},watch:{lang(){this.initDocsearch()}},mounted(){this.initDocsearch()},methods:{initDocsearch(){this.searchConfig&&(N(()=>Promise.resolve({}),["assets/style.37bc7816.css"]),N(()=>import("./index.3665b69b.js"),[]).then(e=>{e.default({...this.searchConfig,container:"#docsearch"})}))}}},he={id:"docsearch"};function _e(e,n,t,a,s,o){return i(),r("div",he)}var me=h(ue,[["render",_e]]);const ge={name:"VanDocHeader",components:{SearchInput:me},props:{lang:String,config:Object,versions:Array,langConfigs:Array},data(){return{packageVersion:B,showVersionPop:!1}},computed:{langLink(){return`#${this.$route.path.replace(this.lang,this.anotherLang.lang)}`},langLabel(){return this.anotherLang.label},anotherLang(){const e=this.langConfigs.filter(n=>n.lang!==this.lang);return e.length?e[0]:{}},searchConfig(){return this.config.searchConfig}},methods:{toggleVersionPop(){const e=!this.showVersionPop,n=e?"add":"remove";document.body[`${n}EventListener`]("click",this.checkHideVersionPop),this.showVersionPop=e},checkHideVersionPop(e){this.$refs.version.contains(e.target)||(this.showVersionPop=!1)},onSwitchLang(e){this.$router.push(this.$route.path.replace(e.from,e.to))},onSwitchVersion(e){e.link&&(location.href=e.link)}}},fe={class:"van-doc-header"},ve={class:"van-doc-row"},pe={class:"van-doc-header__top"},ye={class:"van-doc-header__logo"},we=["src"],ke={class:"van-doc-header__title"},Se={key:0,class:"van-doc-header__subtitle"},$e={class:"van-doc-header__top-nav"},be=["href"],Ce=["src"],Le={key:1},Te={key:0,ref:"version",class:"van-doc-header__top-nav-item"},Ve={key:0,class:"van-doc-header__version-pop"},xe=["onClick"],He={key:1,class:"van-doc-header__top-nav-item"},Ne=["href"];function De(e,n,t,a,s,o){const c=u("search-input");return i(),r("div",fe,[d("div",ve,[d("div",pe,[d("a",ye,[d("img",{src:t.config.logo},null,8,we),d("span",ke,f(t.config.title),1),t.config.subtitle?(i(),r("span",Se,f(t.config.subtitle),1)):g("",!0)]),d("ul",$e,[(i(!0),r(y,null,$(t.config.links,(l,_)=>(i(),r("li",{key:_,class:"van-doc-header__top-nav-item"},[d("a",{class:"van-doc-header__link",target:"_blank",href:l.url},[l.logo?(i(),r("img",{key:0,src:l.logo},null,8,Ce)):l.text?(i(),r("span",Le,f(l.text),1)):g("",!0)],8,be)]))),128)),t.versions?(i(),r("li",Te,[d("span",{class:"van-doc-header__cube van-doc-header__version",onClick:n[0]||(n[0]=(...l)=>o.toggleVersionPop&&o.toggleVersionPop(...l))},[Y(f(s.packageVersion)+" ",1),v(W,{name:"van-doc-dropdown"},{default:b(()=>[s.showVersionPop?(i(),r("div",Ve,[(i(!0),r(y,null,$(t.versions,(l,_)=>(i(),r("div",{key:_,class:"van-doc-header__version-pop-item",onClick:k=>o.onSwitchVersion(l)},f(l.label),9,xe))),128))])):g("",!0)]),_:1})])],512)):g("",!0),o.langLabel&&o.langLink?(i(),r("li",He,[d("a",{class:"van-doc-header__cube",href:o.langLink},f(o.langLabel),9,Ne)])):g("",!0),o.searchConfig?(i(),C(c,{key:2,lang:t.lang,"search-config":o.searchConfig},null,8,["lang","search-config"])):g("",!0)])])])])}var Pe=h(ge,[["render",De]]);const Ae={name:"VanDocContent",computed:{currentPage(){const{path:e}=this.$route;return e?e.split("/").slice(-1)[0]:this.$route.name}},watch:{$route(e,n){n.path!==e.path&&setTimeout(()=>{this.copyAction()})}},mounted(){this.copyAction()},methods:{onClick({target:e}){["H2","H3","H4","H5"].includes(e.tagName)&&this.scrollToAnchor(e)},scrollToAnchor(e){e.id&&this.$router.push({name:this.$route.name,hash:"#"+e.id})},copyAction(){const e=document.querySelectorAll(".van-doc-card pre code");if(!(!e||!e.length))for(let n=0;n<e.length;n++){const t=e[n];let a=null;t.addEventListener("click",()=>{if(a)return;const s=t.innerText;A(s),t.classList.add("code-copy-success"),a=setTimeout(()=>{t.classList.remove("code-copy-success"),a=null},1400)})}}}};function Ie(e,n,t,a,s,o){return i(),r("div",{class:p(["van-doc-content",`van-doc-content--${o.currentPage}`]),onClick:n[0]||(n[0]=(...c)=>o.onClick&&o.onClick(...c))},[w(e.$slots,"default")],2)}var Ee=h(Ae,[["render",Ie]]);const Oe={name:"VanDocContainer",props:{hasSimulator:Boolean}};function Be(e,n,t,a,s,o){return i(),r("div",{class:p(["van-doc-container van-doc-row",{"van-doc-container--with-simulator":t.hasSimulator}])},[w(e.$slots,"default")],2)}var je=h(Oe,[["render",Be]]);const Me={name:"VanDocSimulator",props:{src:String},data(){return{scrollTop:window.scrollY,windowHeight:window.innerHeight}},computed:{isFixed(){return this.scrollTop>60},simulatorStyle(){return{height:Math.min(640,this.windowHeight-90)+"px"}}},mounted(){window.addEventListener("scroll",()=>{this.scrollTop=window.scrollY}),window.addEventListener("resize",()=>{this.windowHeight=window.innerHeight})}},Fe=["src"];function Re(e,n,t,a,s,o){return i(),r("div",{class:p(["van-doc-simulator",{"van-doc-simulator-fixed":o.isFixed}])},[d("iframe",{ref:"iframe",src:t.src,style:I(o.simulatorStyle),frameborder:"0"},null,12,Fe)],2)}var qe=h(Me,[["render",Re]]);const ze={name:"VanDoc",components:{DocNav:ce,DocHeader:Pe,DocContent:Ee,DocContainer:je,DocSimulator:qe},props:{lang:String,versions:Array,simulator:String,hasSimulator:Boolean,langConfigs:Array,config:{type:Object,required:!0},base:{type:String,default:""}},emits:["switch-version"],watch:{$route(){this.setNav()}},created(){this.setNav(),this.keyboardHandler()},methods:{setNav(){const{nav:e}=this.config,n=e.reduce((s,o)=>s.concat(o.items),[]),t=this.$route.path.split("/").pop();let a;for(let s=0,o=n.length;s<o;s++)if(n[s].path===t){a=s;break}this.leftNav=n[a-1],this.rightNav=n[a+1]},keyboardNav(e){if(/win(32|64)/.test(navigator.userAgent.toLocaleLowerCase()))return;const n=e==="prev"?this.leftNav:this.rightNav;n.path&&this.$router.push(this.base+n.path)},keyboardHandler(){window.addEventListener("keyup",e=>{switch(e.keyCode){case 37:this.keyboardNav("prev");break;case 39:this.keyboardNav("next");break}})}}},Ye={class:"van-doc"};function We(e,n,t,a,s,o){const c=u("doc-header"),l=u("doc-nav"),_=u("doc-content"),k=u("doc-container"),T=u("doc-simulator");return i(),r("div",Ye,[v(c,{lang:t.lang,config:t.config,versions:t.versions,"lang-configs":t.langConfigs,onSwitchVersion:n[0]||(n[0]=O=>e.$emit("switch-version",O))},null,8,["lang","config","versions","lang-configs"]),v(l,{lang:t.lang,"nav-config":t.config.nav},null,8,["lang","nav-config"]),v(k,{"has-simulator":t.hasSimulator},{default:b(()=>[v(_,null,{default:b(()=>[w(e.$slots,"default")]),_:3})]),_:3},8,["has-simulator"]),t.hasSimulator?(i(),C(T,{key:0,src:t.simulator},null,8,["src"])):g("",!0)])}var Ue=h(ze,[["render",We]]);const Ge={components:{VanDoc:Ue},data(){return{hasSimulator:!0}},computed:{simulator(){var n,t;return(n=m.site.simulator)!=null&&n.url?(t=m.site.simulator)==null?void 0:t.url:`${location.pathname.replace(/\/index(\.html)?/,"/")}mobile.html${location.hash}`},lang(){const{lang:e}=this.$route.meta;return e||""},langConfigs(){const{locales:e={}}=m.site;return Object.keys(e).map(n=>({lang:n,label:e[n].langLabel||""}))},config(){const{locales:e}=m.site;return e?e[this.lang]:m.site},versions(){return m.site.versions||null}},watch:{"$route.path"(){this.setTitleAndToogleSimulator()},lang(e){j(e),this.setTitleAndToogleSimulator()},config:{handler(e){e&&this.setTitleAndToogleSimulator()},immediate:!0}},mounted(){this.$route.hash&&this.$nextTick(()=>{const e=document.querySelector(this.$route.hash);e&&e.scrollIntoView()})},methods:{setTitleAndToogleSimulator(){let{title:e}=this.config;const t=this.config.nav.reduce((a,s)=>[...a,...s.items],[]).find(a=>a.path===this.$route.meta.name);t&&t.title?e=t.title+" - "+e:this.config.description&&(e+=` - ${this.config.description}`),document.title=e,this.hasSimulator=!(m.site.hideSimulator||this.config.hideSimulator||t&&t.hideSimulator)}}},Je={class:"app"};function Ke(e,n,t,a,s,o){const c=u("router-view"),l=u("van-doc");return i(),r("div",Je,[o.config?(i(),C(l,{key:0,lang:o.lang,config:o.config,versions:o.versions,simulator:o.simulator,"has-simulator":s.hasSimulator,"lang-configs":o.langConfigs},{default:b(()=>[v(c)]),_:1},8,["lang","config","versions","simulator","has-simulator","lang-configs"])):g("",!0)])}var Qe=h(Ge,[["render",Ke]]);const Xe={name:"DemoPlayground",props:{originCode:String,codeSnippet:String,transform:Boolean,compact:Boolean,inline:Boolean},data(){return{showSource:!1,copyStatus:"ready"}},methods:{unescape,toggleSource(){this.showSource=!this.showSource},copySourceCode(){A(unescape(this.originCode)),this.copyStatus="copied",setTimeout(()=>{this.copyStatus="ready"},2e3)}}},Ze=e=>(J("data-v-356bb874"),e=e(),K(),e),et={class:"demo-playground--code"},tt={class:"demo-playground--code--actions"},nt=Ze(()=>d("span",null,null,-1)),ot=["data-status"],st=["innerHTML"];function at(e,n,t,a,s,o){return i(),r("div",{class:p({"demo-playground":!t.inline,transform:t.transform})},[t.inline?w(e.$slots,"default",{key:0},void 0,!0):(i(),r(y,{key:1},[d("div",{class:p(["demo-playground--previewer",{compact:t.compact}])},[w(e.$slots,"default",{},void 0,!0)],2),d("div",et,[d("div",tt,[nt,d("button",{title:"Copy source code",class:"action-icon",role:"copy","data-status":s.copyStatus,onClick:n[0]||(n[0]=(...c)=>o.copySourceCode&&o.copySourceCode(...c))},null,8,ot),d("button",{title:"Toggle source code panel",class:"action-icon",role:"source",onClick:n[1]||(n[1]=(...c)=>o.toggleSource&&o.toggleSource(...c))})]),U(d("div",{innerHTML:o.unescape(t.codeSnippet),class:"demo-playground--code--content"},null,8,st),[[G,s.showSource]])])],64))],2)}var D=h(Xe,[["render",at],["__scopeId","data-v-356bb874"]]);M&&location.replace("mobile.html"+location.hash);const{locales:E,defaultLang:it}=m.site;F(it);function rt(e){if(e.indexOf("_")!==-1){const n=e.split("_"),t=n.shift();return{component:`${V(t)}`,lang:n.join("-")}}return{component:`${V(e)}`,lang:""}}function ct(e){const n=e.path.split("/")[1];return Object.keys(E).indexOf(n)!==-1?n:z()}function lt(){const e=[],n=Object.keys(S);E?e.push({name:"notFound",path:"/:path(.*)+",redirect:a=>({name:ct(a)})}):e.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"home"}});function t(a,s){e.push({name:s||"home",path:`/${s||""}`,component:a,meta:{lang:s}})}return n.forEach(a=>{const{component:s,lang:o}=rt(a);s==="home"&&t(S[a],o),o?e.push({name:`${o}/${s}`,path:`/${o}/${s}`,component:S[a],meta:{lang:o,name:s}}):e.push({name:`${s}`,path:`/${s}`,component:S[a],meta:{name:s}})}),e}const L=Q({history:X(),routes:lt(),scrollBehavior(e){return e.hash?{el:e.hash}:{top:0}}});L.afterEach(()=>{Z(q)});var P;((P=m.site.simulator)==null?void 0:P.syncPathFromSimulator)!==!1&&R(L);window.vueRouter=L;window.app=ee(Qe).use(L).component(D.name,D);setTimeout(()=>{window.app.mount("#app")},0);