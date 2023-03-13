import{_ as te}from"./index.vue_vue_type_style_index_0_lang.8a042d89.js";import{d as U,q as c,f as S,g as v,aP as ne,aL as ae,aI as se,bk as le,p as oe,o as H,c as ie,l as A,B as de,L as re,e as pe,w as F,a as y,i as B,j as T,b as me,r as b}from"./index.35bc5619.js";function ce(n,o,f="modelValue",i){return v({get:()=>n[f],set:t=>{o(`update:${f}`,i?i(t):t)}})}var L=U({name:"vue3-danmaku",components:{},props:{danmus:{type:Array,required:!0,default:()=>[]},channels:{type:Number,default:0},autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},useSlot:{type:Boolean,default:!1},debounce:{type:Number,default:100},speeds:{type:Number,default:200},randomChannel:{type:Boolean,default:!1},fontSize:{type:Number,default:18},top:{type:Number,default:4},right:{type:Number,default:0},isSuspend:{type:Boolean,default:!1},extraStyle:{type:String,default:""}},emits:["list-end","play-end","update:danmus"],setup(n,{emit:o,slots:f}){let i=c(document.createElement("div")),t=c(document.createElement("div"));const d=c(0),r=c(0);let l=0;const E=c(0),x=c(0),h=c(0),p=c(!1),_=c(!1),k=c({}),m=ce(n,o,"danmus"),C=S({channels:v(()=>n.channels||E.value),autoplay:v(()=>n.autoplay),loop:v(()=>n.loop),useSlot:v(()=>n.useSlot),debounce:v(()=>n.debounce),randomChannel:v(()=>n.randomChannel)}),g=S({height:v(()=>x.value),fontSize:v(()=>n.fontSize),speeds:v(()=>n.speeds),top:v(()=>n.top),right:v(()=>n.right)});ne(()=>{N()}),ae(()=>{R()});function N(){z(),n.isSuspend&&j(),C.autoplay&&W()}function z(){d.value=i.value.offsetWidth,r.value=i.value.offsetHeight}function W(){_.value=!1,l||(l=setInterval(()=>I(),C.debounce))}function I(){if(!_.value&&m.value.length)if(h.value>m.value.length-1){const a=t.value.children.length;C.loop&&a<h.value&&(o("list-end"),h.value=0,$())}else $()}function $(a){const s=C.loop?h.value%m.value.length:h.value,u=a||m.value[s];let e=document.createElement("div");C.useSlot?e=M(u,s).$el:(e.innerHTML=u,e.setAttribute("style",n.extraStyle),e.style.fontSize=`${g.fontSize}px`,e.style.lineHeight=`${g.fontSize}px`),e.classList.add("dm"),t.value.appendChild(e),e.style.opacity="0",se(()=>{g.height||(x.value=e.offsetHeight),C.channels||(E.value=Math.floor(r.value/(g.height+g.top)));let D=X(e);if(D>=0){const w=e.offsetWidth,ue=g.height;e.classList.add("move"),e.dataset.index=`${s}`,e.style.opacity="1",e.style.top=D*(ue+g.top)+"px",e.style.width=w+g.right+"px",e.style.setProperty("--dm-scroll-width",`-${d.value+w}px`),e.style.left=`${d.value}px`,e.style.animationDuration=`${d.value/g.speeds}s`,e.addEventListener("animationend",()=>{Number(e.dataset.index)===m.value.length-1&&!C.loop&&o("play-end",e.dataset.index),t.value&&t.value.removeChild(e)}),h.value++}else t.value.removeChild(e)})}function M(a,s){return le({render(){return oe("div",{},[f.dm&&f.dm({danmu:a,index:s})])}}).mount(document.createElement("div"))}function X(a){let s=[...Array(C.channels).keys()];C.randomChannel&&(s=s.sort(()=>.5-Math.random()));for(let u of s){const e=k.value[u];if(e&&e.length)for(let D=0;D<e.length;D++){const w=P(e[D])-10;if(w<=(a.offsetWidth-e[D].offsetWidth)*.88||w<=0)break;if(D===e.length-1)return k.value[u].push(a),a.addEventListener("animationend",()=>k.value[u].splice(0,1)),u%C.channels}else return k.value[u]=[a],a.addEventListener("animationend",()=>k.value[u].splice(0,1)),u%C.channels}return-1}function P(a){const s=a.offsetWidth||parseInt(a.style.width),u=a.getBoundingClientRect().right||t.value.getBoundingClientRect().right+s;return t.value.getBoundingClientRect().right-u}function V(){clearInterval(l),l=0}function j(){let a=[];t.value.addEventListener("mousemove",s=>{let u=s.target;u.className.includes("dm")||(u=u.closest(".dm")||u),u.className.includes("dm")&&(u.classList.add("pause"),a.push(u))}),t.value.addEventListener("mouseout",s=>{let u=s.target;u.className.includes("dm")||(u=u.closest(".dm")||u),u.className.includes("dm")&&(u.classList.remove("pause"),a.forEach(e=>{e.classList.remove("pause")}),a=[])})}function R(){V(),h.value=0}function q(){x.value=0,N()}function G(){k.value={},t.value.innerHTML="",_.value=!0,p.value=!1,R()}function J(){_.value=!0}function K(a){if(h.value===m.value.length)return m.value.push(a),m.value.length-1;{const s=h.value%m.value.length;return m.value.splice(s,0,a),s+1}}function O(a){return m.value.push(a),m.value.length-1}function Q(){return!_.value}function Y(){p.value=!1}function Z(){p.value=!0}function ee(){z();const a=t.value.getElementsByClassName("dm");for(let s=0;s<a.length;s++){const u=a[s];u.style.setProperty("--dm-scroll-width",`-${d.value+u.offsetWidth}px`),u.style.left=`${d.value}px`,u.style.animationDuration=`${d.value/g.speeds}s`}}return{container:i,dmContainer:t,hidden:p,paused:_,danmuList:m,getPlayState:Q,resize:ee,play:W,pause:J,stop:G,show:Y,hide:Z,reset:q,add:K,push:O,insert:$}}});const fe={ref:"container",class:"vue-danmaku"};function ve(n,o,f,i,t,d){return H(),ie("div",fe,[A("div",{ref:"dmContainer",class:de(["danmus",{show:!n.hidden},{paused:n.paused}])},null,2),re(n.$slots,"default")],512)}function he(n,o){o===void 0&&(o={});var f=o.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",f==="top"&&i.firstChild?i.insertBefore(t,i.firstChild):i.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}}var Ce=`.vue-danmaku {
  position: relative;
  overflow: hidden;
}
.vue-danmaku .danmus {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.vue-danmaku .danmus.show {
  opacity: 1;
}
.vue-danmaku .danmus.paused .dm.move {
  animation-play-state: paused;
}
.vue-danmaku .danmus .dm {
  position: absolute;
  font-size: 20px;
  color: #ddd;
  white-space: pre;
  transform: translateX(0);
  transform-style: preserve-3d;
}
.vue-danmaku .danmus .dm.move {
  will-change: transform;
  animation-name: moveLeft;
  animation-timing-function: linear;
  animation-play-state: running;
}
.vue-danmaku .danmus .dm.pause {
  animation-play-state: paused;
  z-index: 10;
}
@keyframes moveLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(var(--dm-scroll-width));
  }
}
@-webkit-keyframes moveLeft {
  from {
    -webkit-transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(var(--dm-scroll-width));
  }
}`;he(Ce);L.render=ve;L.__file="src/lib/Danmaku.vue";function Ee(n,o){return n.value={...n.value,...o},{speedUp:r=>{o.speeds+=r},speedDown:r=>{o.speeds-=r},gapUp:r=>{o.top+=r,o.right+=r},gapDown:r=>{o.top-=r,o.right-=r}}}const ge={class:"app-danmaku-title"},Fe={class:"ml-5 flex"},ye={class:"mr-5"},De={class:""},Be={class:"flex"},Ae=U({__name:"index",setup(n){const o="\u6625\u6C5F\u6F6E\u6C34\u8FDE\u6D77\u5E73,\u6D77\u4E0A\u660E\u6708\u5171\u6F6E\u751F, \u6EDF\u6EDF\u968F\u6CE2\u5343\u4E07\u91CC,\u4F55\u5904\u6625\u6C5F\u65E0\u6708\u660E, \u6C5F\u6D41\u5B9B\u8F6C\u7ED5\u82B3\u7538,\u6708\u7167\u82B1\u6797\u7686\u4F3C\u9730, \u7A7A\u91CC\u6D41\u971C\u4E0D\u89C9\u98DE,\u6C40\u4E0A\u767D\u6C99\u770B\u4E0D\u89C1, \u6C5F\u5929\u4E00\u8272\u65E0\u7EA4\u5C18,\u768E\u768E\u7A7A\u4E2D\u5B64\u6708\u8F6E, \u6C5F\u7554\u4F55\u4EBA\u521D\u89C1\u6708,\u6C5F\u6708\u4F55\u5E74\u521D\u7167\u4EBA, \u4EBA\u751F\u4EE3\u4EE3\u65E0\u7A77\u5DF2,\u6C5F\u6708\u5E74\u5E74\u671B\u76F8\u4F3C, \u4E0D\u77E5\u6C5F\u6708\u5F85\u4F55\u4EBA,\u4F46\u89C1\u957F\u6C5F\u9001\u6D41\u6C34, \u767D\u4E91\u4E00\u7247\u53BB\u60A0\u60A0,\u9752\u67AB\u6D66\u4E0A\u4E0D\u80DC\u6101, \u8C01\u5BB6\u4ECA\u591C\u6241\u821F\u5B50,\u4F55\u5904\u76F8\u601D\u660E\u6708\u697C, \u53EF\u601C\u697C\u4E0A\u6708\u5F98\u5F8A,\u5E94\u7167\u79BB\u4EBA\u5986\u955C\u53F0, \u7389\u6237\u5E18\u4E2D\u5377\u4E0D\u53BB,\u6363\u8863\u7827\u4E0A\u62C2\u8FD8\u6765, \u6B64\u65F6\u76F8\u671B\u4E0D\u76F8\u95FB,\u613F\u9010\u6708\u534E\u6D41\u7167\u541B, \u9E3F\u96C1\u957F\u98DE\u5149\u4E0D\u5EA6,\u9C7C\u9F99\u6F5C\u8DC3\u6C34\u6210\u6587, \u6628\u591C\u95F2\u6F6D\u68A6\u843D\u82B1,\u53EF\u601C\u6625\u534A\u4E0D\u8FD8\u5BB6, \u6C5F\u6C34\u6D41\u6625\u53BB\u6B32\u5C3D,\u6C5F\u6F6D\u843D\u6708\u590D\u897F\u659C, \u659C\u6708\u6C89\u6C89\u85CF\u6D77\u96FE,\u78A3\u77F3\u6F47\u6E58\u65E0\u9650\u8DEF, \u4E0D\u77E5\u4E58\u6708\u51E0\u4EBA\u5F52,\u843D\u6708\u6447\u60C5\u6EE1\u6C5F\u6811".split(","),f=c(o),i=c(null),t=c({}),d=S({autoplay:!0,loop:!0,speeds:150,top:100,right:0});return t.value=Ee(i,d),(r,l)=>{const E=b("a-button"),x=b("a-button-group"),h=b("a-space");return H(),pe(te,{class:"app-page"},{default:F(()=>[A("div",ge,[y(h,null,{default:F(()=>[y(x,null,{default:F(()=>[y(E,{status:"success",onClick:l[0]||(l[0]=p=>i.value.play())},{default:F(()=>[B("\u64AD\u653E")]),_:1}),y(E,{status:"warning",onClick:l[1]||(l[1]=p=>i.value.pause())},{default:F(()=>[B("\u6682\u505C")]),_:1}),y(E,{status:"danger",onClick:l[2]||(l[2]=p=>i.value.stop())},{default:F(()=>[B("\u6E05\u7A7A")]),_:1}),y(E,{onClick:l[3]||(l[3]=p=>t.value.speedUp(100))},{default:F(()=>[B("\u52A0\u901F>>")]),_:1}),y(E,{onClick:l[4]||(l[4]=p=>t.value.speedDown(100))},{default:F(()=>[B("\u51CF\u901F<<")]),_:1}),y(E,{onClick:l[5]||(l[5]=p=>t.value.gapUp(50))},{default:F(()=>[B("\u95F4\u8DDD\u62C9\u957F")]),_:1}),y(E,{onClick:l[6]||(l[6]=p=>t.value.gapDown(50))},{default:F(()=>[B("\u95F4\u8DDD\u7F29\u77ED")]),_:1})]),_:1}),A("ul",Fe,[A("li",ye," \u901F\u5EA6: "+T(d.speeds),1),A("li",De," \u6C34\u5E73/\u5782\u76F4\u95F4\u8DDD: "+T(`(${d.right} , ${d.top})`),1)])]),_:1})]),A("div",Be,[y(me(L),{ref_key:"danmakuRef",ref:i,speeds:d.speeds,top:d.top,right:d.right,autoplay:d.autoplay,loop:d.loop,danmus:f.value,"onUpdate:danmus":l[7]||(l[7]=p=>f.value=p),class:"app-page__danmaku"},null,8,["speeds","top","right","autoplay","loop","danmus"])])]),_:1})}}});export{Ae as default};
