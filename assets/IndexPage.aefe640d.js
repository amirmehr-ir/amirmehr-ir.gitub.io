import{c as p,h as g}from"./render.24b5331c.js";import{e as c,f as t,c as i,h as f,j as h,C as m,g as y,_ as x,G as C,I as _,J as v,K as $,R as P}from"./index.65cf1b6b.js";var Q=p({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:r}){const{proxy:{$q:o}}=y(),e=c(h,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(c(m,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const s=i(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return n.styleFn(a,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":o.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":o.screen.height-a+"px"}}),d=i(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>f("main",{class:d.value,style:s.value},g(r.default))}});const b=C({name:"IndexPage"}),F=P("div",{class:"p-10 bg-slate-100 rounded-lg border-2 border-dashed"}," Coming Soon .. ",-1);function B(n,r,o,e,l,s){return _(),v(Q,{class:"flex flex-center"},{default:$(()=>[F]),_:1})}var H=x(b,[["render",B]]);export{H as default};