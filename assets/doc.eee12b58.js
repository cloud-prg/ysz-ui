import{_ as p,a as d,b as _,g as m,o as g,c as u,d as t,w as a,s as h,v as f,h as c,l as v,e as k,q as x,k as i}from"./index.63b4d7e7.js";const w={};function N(e,s){const o=d("c-backtop");return _(),m(o,{right:"2",bottom:"25",target:".router-view"})}const S=p(w,[["render",N]]);const y=e=>(h("data-v-eb33d529"),e=e(),f(),e),B={class:"testBacktop"},$=y(()=>c("div",{class:"slot-class"},[c("i",{class:"c-icon-arrow-up"})],-1)),I={__name:"demo2",setup(e){return g(()=>{for(let s=0;s<10;s++){const o=document.createElement("p");o.innerText="\u2193___scroll___\u2193",document.querySelector(".testBacktop").appendChild(o)}}),(s,o)=>{const r=d("c-backtop");return _(),u("div",B,[t(r,{right:"10",bottom:"5",target:".testBacktop"},{default:a(()=>[$]),_:1})])}}},V=p(I,[["__scopeId","data-v-eb33d529"]]);const C={},q=e=>(h("data-v-05c174d9"),e=e(),f(),e),A=q(()=>c("div",{class:"slot-class"},"\u63D2\u69FD",-1));function E(e,s){const o=d("c-backtop");return _(),m(o,{right:"2",bottom:"15",target:".router-view"},{default:a(()=>[A]),_:1})}const T=p(C,[["render",E],["__scopeId","data-v-05c174d9"]]),M={__name:"Attributes",setup(e){const s=v({dataSource:{fields:[{field:"attr",title:"\u53C2\u6570"},{field:"type",title:"\u7C7B\u578B"},{field:"red",title:"\u8BF4\u660E"},{field:"sel",title:"\u53EF\u9009\u503C"},{field:"def",title:"\u9ED8\u8BA4\u503C"}],datas:[{attr:"target",type:"String",red:"\u7236\u7EA7\u5BB9\u5668\u7684id\u6216class\u503C",sel:"\u2014\u2014",def:"body"},{attr:"right",type:"Number",red:"\u56FE\u6807\u76F8\u5BF9\u4E8E\u7236\u7EA7\u5BB9\u5668\u53F3\u8FB9\u6846\u7684\u8DDD\u79BB(\u767E\u5206\u6BD4)",sel:"\u2014\u2014",def:"2"},{attr:"bottom",type:"Number",red:"\u56FE\u6807\u76F8\u5BF9\u4E8E\u7236\u7EA7\u5BB9\u5668\u5E95\u8FB9\u6846\u7684\u8DDD\u79BB(\u767E\u5206\u6BD4)",sel:"\u2014\u2014",def:"5"}]}}),{dataSource:o}=s;return(r,b)=>{const n=d("c-table");return _(),m(n,{dataSource:k(o)},null,8,["dataSource"])}}},j={class:"markdown-body"},z=x("<h1>Backtop \u56DE\u5230\u9876\u90E8</h1><p>\u7528\u4E8E\u5FEB\u6377\u8FD4\u56DE\u5230\u9875\u9762\u9876\u90E8\u7684\u7EC4\u4EF6(\u901F\u5EA6\u7531\u6162\u5230\u5FEB)</p><h1>\u6CE8\u610F\u4E8B\u9879</h1><p>\u4E3A\u4FDD\u8BC1 <strong>\u56DE\u5230\u9876\u90E8</strong> \u56FE\u6807\u76F8\u5BF9\u4E8E <strong>\u7236\u7EA7\u5BB9\u5668</strong> \u3002 <strong>\u7236\u7EA7\u5BB9\u5668</strong> \u7684<code>css</code>\u8BBE\u7F6E\u9700\u8981\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6<strong>\u4E4B\u4E00</strong>:</p><ul><li><code>transform</code>\u4E0D\u4E3A<code>none</code>\u3002</li><li><code>perspective</code>\u4E0D\u4E3A<code>none</code>\u3002</li><li><code>filter</code>\u4E0D\u4E3A<code>none</code>\u3002</li></ul><h2>\u57FA\u672C\u4F7F\u7528</h2><p><code>Backtop</code>\u7EC4\u4EF6\u57FA\u672C\u4F7F\u7528\u793A\u4F8B\u3002(\u6587\u6863\u9875\u4E3A<code>.router-view</code>,<code>right</code>\u3001<code>bottom</code>\u4E3A\u767E\u5206\u6BD4)</p>",7),D=c("h2",null,"\u7ED1\u5B9A\u6307\u5B9A\u5143\u7D20",-1),F=c("h4",null,"\u7ED1\u5B9A\u6307\u5B9A\u5143\u7D20\u76D1\u6D4B\u6EDA\u52A8\u6765\u89E6\u53D1\u3002",-1),G=c("h2",null,"\u81EA\u5B9A\u4E49\u5143\u7D20\u5C55\u793A",-1),H=c("p",null,[i("\u901A\u8FC7\u63D2\u69FD\u7684\u65B9\u5F0F\u81EA\u5B9A\u4E49\u5143\u7D20\u5C55\u793A(\u82E5\u6CA1\u6709"),c("code",null,"domString"),i("\u6216 "),c("strong",null,"\u8282\u70B9"),i(" \u6DFB\u5165\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u7F6E\u9876\u56FE\u6807)")],-1),J=c("h2",null,"Attributes \u53C2\u6570",-1),L={__name:"doc",setup(e,{expose:s}){return s({frontmatter:{}}),(r,b)=>{const n=d("preview"),l=d("preview-box");return _(),u("div",j,[z,t(l,null,{default:a(()=>[t(S),t(n,{comName:"backtop",demoName:"demo1"})]),_:1}),D,F,t(l,null,{default:a(()=>[t(V),t(n,{comName:"backtop",demoName:"demo2"})]),_:1}),G,H,t(l,null,{default:a(()=>[t(T),t(n,{comName:"backtop",demoName:"demo3"})]),_:1}),J,t(M)])}}};export{L as default};
