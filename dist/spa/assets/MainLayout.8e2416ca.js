import{v as _t,c as He,g as Tt,a as St,u as Et,b as Bt,Q as $t}from"./QBtn.0e91dbed.js";import{c as $,h as W,a as lt,b as zt,d as Ae,e as Vt}from"./render.772bb6ce.js";import{c as v,h as C,r as _,i as it,o as U,a as F,n as Ee,d as Y,g as P,l as V,e as Be,f as O,w as k,j as re,H as Re,k as z,s as $e,m as Pt,p as Qt,P as Ot,q as Mt,t as oe,u as he,v as Ne,x as pe,y as Le,z as be,A as Dt,B as at,C as Ht,D as ne,E as At,F as Rt,G as rt,_ as ut,I as xe,J as _e,K as N,L as j,M as Te,N as Fe,O as We,Q as Ie}from"./index.537e3619.js";var To=$({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:n.value},W(o.default))}}),So=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:n.value,role:"toolbar"},W(o.default))}});function Nt(){const e=_(!it.value);return e.value===!1&&U(()=>{e.value=!0}),e}const st=typeof ResizeObserver!="undefined",Xe=st===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Se=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,i,t={width:-1,height:-1};function l(d){d===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),i){const{offsetWidth:d,offsetHeight:c}=i;(d!==t.width||c!==t.height)&&(t={width:d,height:c},o("resize",t))}}const{proxy:f}=P();if(f.trigger=l,st===!0){let d;const c=a=>{i=f.$el.parentNode,i?(d=new ResizeObserver(l),d.observe(i),s()):a!==!0&&Y(()=>{c(!0)})};return U(()=>{c()}),F(()=>{n!==null&&clearTimeout(n),d!==void 0&&(d.disconnect!==void 0?d.disconnect():i&&d.unobserve(i))}),Ee}else{let a=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",l,V.passive),c=void 0)},w=function(){a(),i&&i.contentDocument&&(c=i.contentDocument.defaultView,c.addEventListener("resize",l,V.passive),s())};const d=Nt();let c;return U(()=>{Y(()=>{i=f.$el,i&&w()})}),F(a),()=>{if(d.value===!0)return C("object",{style:Xe.style,tabindex:-1,type:"text/html",data:Xe.url,"aria-hidden":"true",onLoad:w})}}}}),Eo=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:i}}=P(),t=Be(re,O);if(t===O)return console.error("QHeader needs to be child of QLayout"),O;const l=_(parseInt(e.heightHint,10)),s=_(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||i.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?l.value:0;const u=l.value-t.scroll.value.position;return u>0?u:0}),c=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),a=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const u=t.rows.value.top,p={};return u[0]==="l"&&t.left.space===!0&&(p[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(p[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function m(u,p){t.update("header",u,p)}function h(u,p){u.value!==p&&(u.value=p)}function T({height:u}){h(l,u),m("size",u)}function L(u){a.value===!0&&h(s,!0),n("focusin",u)}k(()=>e.modelValue,u=>{m("space",u),h(s,!0),t.animate()}),k(d,u=>{m("offset",u)}),k(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),k(s,u=>{t.animate(),n("reveal",u)}),k(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",l.value),m("space",e.modelValue),m("offset",d.value),F(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=lt(o.default,[]);return e.elevated===!0&&u.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(C(Se,{debounce:0,onResize:T})),C("header",{class:w.value,style:q.value,onFocusin:L},u)}}}),je=$({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const n=v(()=>parseInt(e.lines,10)),i=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>C("div",{style:t.value,class:i.value},W(o.default))}});const ze={dark:{type:Boolean,default:null}};function Ve(e,o){return v(()=>e.dark===null?o.dark.isActive:e.dark)}var Bo=$({name:"QList",props:{...ze,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const n=P(),i=Ve(e,n.proxy.$q),t=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:t.value},W(o.default))}});function Ft(e,o,n){let i;function t(){i!==void 0&&(Re.remove(i),i=void 0)}return F(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>n.value===!0,handler:o},Re.add(i)}}}const Wt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},It=["beforeShow","show","beforeHide","hide"];function Xt({showing:e,canShow:o,hideOnRouteChange:n,handleShow:i,handleHide:t,processOnMount:l}){const s=P(),{props:f,emit:d,proxy:c}=s;let a;function w(u){e.value===!0?h(u):q(u)}function q(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!0),a=u,Y(()=>{a===u&&(a=void 0)})),(f.modelValue===null||p===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,d("beforeShow",u),i!==void 0?i(u):d("show",u))}function h(u){if(f.disable===!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!1),a=u,Y(()=>{a===u&&(a=void 0)})),(f.modelValue===null||p===!1)&&T(u)}function T(u){e.value!==!1&&(e.value=!1,d("beforeHide",u),t!==void 0?t(u):d("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:T)(a)}k(()=>f.modelValue,L),n!==void 0&&_t(s)===!0&&k(()=>c.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),l===!0&&U(()=>{L(f.modelValue)});const g={show:q,hide:h,toggle:w};return Object.assign(c,g),g}const jt=[null,document,document.body,document.scrollingElement,document.documentElement];function Ut(e,o){let n=Tt(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return jt.includes(n)?window:n}function ct(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function dt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let le;function ye(){if(le!==void 0)return le;const e=document.createElement("p"),o=document.createElement("div");He(e,{width:"100%",height:"200px"}),He(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let i=e.offsetWidth;return n===i&&(i=o.clientWidth),o.remove(),le=n-i,le}function Yt(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let J=0,ge,we,Z,qe=!1,Ue,Ye,Ke,R=null;function Kt(e){Gt(e)&&$e(e)}function Gt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Pt(e),n=e.shiftKey&&!e.deltaX,i=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||i?e.deltaY:e.deltaX;for(let l=0;l<o.length;l++){const s=o[l];if(Yt(s,i))return i?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ge(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ie(e){qe!==!0&&(qe=!0,requestAnimationFrame(()=>{qe=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:i}=document.scrollingElement;(Z===void 0||o!==window.innerHeight)&&(Z=n-o,document.scrollingElement.scrollTop=i),i>Z&&(document.scrollingElement.scrollTop-=Math.ceil((i-Z)/8))}))}function Je(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(o);ge=dt(window),we=ct(window),Ue=o.style.left,Ye=o.style.top,Ke=window.location.href,o.style.left=`-${ge}px`,o.style.top=`-${we}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,z.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ie,V.passiveCapture),window.visualViewport.addEventListener("scroll",ie,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ge,V.passiveCapture))}z.is.desktop===!0&&z.is.mac===!0&&window[`${e}EventListener`]("wheel",Kt,V.notPassive),e==="remove"&&(z.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",ie,V.passiveCapture),window.visualViewport.removeEventListener("scroll",ie,V.passiveCapture)):window.removeEventListener("scroll",Ge,V.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Ue,o.style.top=Ye,window.location.href===Ke&&window.scrollTo(ge,we),Z=void 0)}function Jt(e){let o="add";if(e===!0){if(J++,R!==null){clearTimeout(R),R=null;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(o="remove",z.is.ios===!0&&z.is.nativeMobile===!0){R!==null&&clearTimeout(R),R=setTimeout(()=>{Je(o),R=null},100);return}}Je(o)}function Zt(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,Jt(o))}}}function eo(){let e=null;const o=P();function n(){e!==null&&(clearTimeout(e),e=null)}return Qt(n),F(n),{removeTimeout:n,registerTimeout(i,t){n(),St(o)===!1&&(e=setTimeout(i,t))}}}const Pe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},to=Object.keys(Pe);Pe.all=!0;function Ze(e){const o={};for(const n of to)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?Pe:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const oo=["INPUT","TEXTAREA"];function et(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&oo.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function no(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ot.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ke(e,o,n){const i=Le(e);let t,l=i.left-o.event.x,s=i.top-o.event.y,f=Math.abs(l),d=Math.abs(s);const c=o.direction;c.horizontal===!0&&c.vertical!==!0?t=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=s<0?"up":"down":c.up===!0&&s<0?(t="up",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.down===!0&&s>0?(t="down",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.left===!0&&l<0?(t="left",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down"))):c.right===!0&&l>0&&(t="right",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,a=!0,t==="left"||t==="right"?(i.left-=l,f=0,l=0):(i.top-=s,d=0,s=0)}return{synthetic:a,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:i,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:f,y:d},offset:{x:l,y:s},delta:{x:i.left-o.event.lastX,y:i.top-o.event.lastY}}}}let lo=0;var Ce=zt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&z.has.touch!==!0)return;function i(l,s){n.mouse===!0&&s===!0?$e(l):(n.stop===!0&&pe(l),n.prevent===!0&&Ne(l))}const t={uid:"qvtp_"+lo++,handler:o,modifiers:n,direction:Ze(n),noop:Ee,mouseStart(l){et(l,t)&&Mt(l)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(et(l,t)){const s=l.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,s){if(z.is.firefox===!0&&he(e,!0),t.lastEvt=l,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Ne(c),l.cancelBubble===!0&&pe(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:c}}pe(l)}const{left:f,top:d}=Le(l);t.event={x:f,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(l){if(t.event===void 0)return;const s=Le(l),f=s.left-t.event.x,d=s.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=l;const c=t.event.mouse===!0,a=()=>{i(l,c);let m;n.preserveCursor!==!0&&n.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),no(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{T(),h()},50):T()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(l,t.event.mouse);const{payload:m,synthetic:h}=ke(l,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(l);return}const w=Math.abs(f),q=Math.abs(d);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&d<0||t.direction.down===!0&&w<q&&d>0||t.direction.left===!0&&w>q&&f<0||t.direction.right===!0&&w>q&&f>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,s){if(t.event!==void 0){if(be(t,"temp"),z.is.firefox===!0&&he(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ke(l===void 0?t.lastEvt:l,t).payload);const{payload:f}=ke(l===void 0?t.lastEvt:l,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const l=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}z.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Ze(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),be(o,"main"),be(o,"temp"),z.is.firefox===!0&&he(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function ae(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const tt=150;var $o=$({name:"QDrawer",inheritAttrs:!1,props:{...Wt,...ze,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...It,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:i}){const t=P(),{proxy:{$q:l}}=t,s=Ve(e,l),{preventBodyScroll:f}=Zt(),{registerTimeout:d,removeTimeout:c}=eo(),a=Be(re,O);if(a===O)return console.error("QDrawer needs to be child of QLayout"),O;let w,q=null,m;const h=_(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),T=v(()=>e.mini===!0&&h.value!==!0),L=v(()=>T.value===!0?e.miniWidth:e.width),g=_(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=v(()=>e.persistent!==!0&&(h.value===!0||ft.value===!0));function p(r,y){if(H(),r!==!1&&a.animate(),B(0),h.value===!0){const S=a.instances[ee.value];S!==void 0&&S.belowBreakpoint===!0&&S.hide(!1),M(1),a.isContainer.value!==!0&&f(!0)}else M(0),r!==!1&&fe(!1);d(()=>{r!==!1&&fe(!0),y!==!0&&n("show",r)},tt)}function b(r,y){K(),r!==!1&&a.animate(),M(0),B(I.value*L.value),ve(),y!==!0?d(()=>{n("hide",r)},tt):c()}const{show:x,hide:E}=Xt({showing:g,hideOnRouteChange:u,handleShow:p,handleHide:b}),{addToHistory:H,removeFromHistory:K}=Ft(g,E,u),A={belowBreakpoint:h,hide:E},Q=v(()=>e.side==="right"),I=v(()=>(l.lang.rtl===!0?-1:1)*(Q.value===!0?1:-1)),Qe=_(0),X=_(!1),ue=_(!1),Oe=_(L.value*I.value),ee=v(()=>Q.value===!0?"left":"right"),se=v(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),ce=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(Q.value?"R":"L")>-1||l.platform.is.ios===!0&&a.isContainer.value===!0),G=v(()=>e.overlay===!1&&g.value===!0&&h.value===!1),ft=v(()=>e.overlay===!0&&g.value===!0&&h.value===!1),vt=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&X.value===!1?" hidden":"")),mt=v(()=>({backgroundColor:`rgba(0,0,0,${Qe.value*.4})`})),Me=v(()=>Q.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),ht=v(()=>Q.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),pt=v(()=>{const r={};return a.header.space===!0&&Me.value===!1&&(ce.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&ht.value===!1&&(ce.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),bt=v(()=>{const r={width:`${L.value}px`,transform:`translateX(${Oe.value}px)`};return h.value===!0?r:Object.assign(r,pt.value)}),yt=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),gt=v(()=>`q-drawer q-drawer--${e.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(X.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${T.value===!0?"mini":"standard"}`+(ce.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Me.value===!0?" q-drawer--top-padding":""))),wt=v(()=>{const r=l.lang.rtl===!0?e.side:ee.value;return[[Ce,Lt,void 0,{[r]:!0,mouse:!0}]]}),qt=v(()=>{const r=l.lang.rtl===!0?ee.value:e.side;return[[Ce,De,void 0,{[r]:!0,mouse:!0}]]}),kt=v(()=>{const r=l.lang.rtl===!0?ee.value:e.side;return[[Ce,De,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function de(){xt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}k(h,r=>{r===!0?(w=g.value,g.value===!0&&E(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?(B(0),M(0),ve()):x(!1))}),k(()=>e.side,(r,y)=>{a.instances[y]===A&&(a.instances[y]=void 0,a[y].space=!1,a[y].offset=0),a.instances[r]=A,a[r].size=L.value,a[r].space=G.value,a[r].offset=se.value}),k(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&de()}),k(()=>e.behavior+e.breakpoint,de),k(a.isContainer,r=>{g.value===!0&&f(r!==!0),r===!0&&de()}),k(a.scrollbarWidth,()=>{B(g.value===!0?0:void 0)}),k(se,r=>{D("offset",r)}),k(G,r=>{n("onLayout",r),D("space",r)}),k(Q,()=>{B()}),k(L,r=>{B(),me(e.miniToOverlay,r)}),k(()=>e.miniToOverlay,r=>{me(r,L.value)}),k(()=>l.lang.rtl,()=>{B()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ct(),a.animate())}),k(T,r=>{n("miniState",r)});function B(r){r===void 0?Y(()=>{r=g.value===!0?0:L.value,B(I.value*r)}):(a.isContainer.value===!0&&Q.value===!0&&(h.value===!0||Math.abs(r)===L.value)&&(r+=I.value*a.scrollbarWidth.value),Oe.value=r)}function M(r){Qe.value=r}function fe(r){const y=r===!0?"remove":a.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function Ct(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,q=setTimeout(()=>{q=null,ue.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Lt(r){if(g.value!==!1)return;const y=L.value,S=ae(r.distance.x,0,y);if(r.isFinal===!0){S>=Math.min(75,y)===!0?x():(a.animate(),M(0),B(I.value*y)),X.value=!1;return}B((l.lang.rtl===!0?Q.value!==!0:Q.value)?Math.max(y-S,0):Math.min(0,S-y)),M(ae(S/y,0,1)),r.isFirst===!0&&(X.value=!0)}function De(r){if(g.value!==!0)return;const y=L.value,S=r.direction===e.side,te=(l.lang.rtl===!0?S!==!0:S)?ae(r.distance.x,0,y):0;if(r.isFinal===!0){Math.abs(te)<Math.min(75,y)===!0?(a.animate(),M(1),B(0)):E(),X.value=!1;return}B(I.value*te),M(ae(1-te/y,0,1)),r.isFirst===!0&&(X.value=!0)}function ve(){f(!1),fe(!0)}function D(r,y){a.update(e.side,r,y)}function xt(r,y){r.value!==y&&(r.value=y)}function me(r,y){D("size",r===!0?e.miniWidth:y)}return a.instances[e.side]=A,me(e.miniToOverlay,L.value),D("space",G.value),D("offset",se.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),U(()=>{n("onLayout",G.value),n("miniState",T.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?p:b)(!1,!0)};if(a.totalWidth.value!==0){Y(r);return}m=k(a.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?x(!1):r()})}),F(()=>{m!==void 0&&m(),q!==null&&(clearTimeout(q),q=null),g.value===!0&&ve(),a.instances[e.side]===A&&(a.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push(Dt(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),wt.value)),r.push(Ae("div",{ref:"backdrop",class:vt.value,style:mt.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>kt.value)));const y=T.value===!0&&o.mini!==void 0,S=[C("div",{...i,key:""+y,class:[yt.value,i.class]},y===!0?o.mini():W(o.default))];return e.elevated===!0&&g.value===!0&&S.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ae("aside",{ref:"content",class:gt.value,style:bt.value},S,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>qt.value)),C("div",{class:"q-drawer-container"},r)}}}),io=$({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=P(),i=Be(re,O);if(i===O)return console.error("QPageContainer needs to be child of QLayout"),O;at(Ht,!0);const t=v(()=>{const l={};return i.header.space===!0&&(l.paddingTop=`${i.header.size}px`),i.right.space===!0&&(l[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(l.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(l[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),l});return()=>C("div",{class:"q-page-container",style:t.value},W(o.default))}});const{passive:ot}=V,ao=["both","horizontal","vertical"];var ro=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ao.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,l;k(()=>e.scrollTarget,()=>{d(),f()});function s(){i!==null&&i();const w=Math.max(0,ct(t)),q=dt(t),m={top:w-n.position.top,left:q-n.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";n.position={top:w,left:q},n.directionChanged=n.direction!==h,n.delta=m,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function f(){t=Ut(l,e.scrollTarget),t.addEventListener("scroll",c,ot),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,ot),t=void 0)}function c(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(i===null){const[q,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];i=()=>{m(q),i=null}}}const{proxy:a}=P();return k(()=>a.$q.lang.rtl,s),U(()=>{l=a.$el.parentNode,f()}),F(()=>{i!==null&&i(),d()}),Object.assign(a,{trigger:c,getPosition:()=>n}),Ee}}),uo=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:i}}=P(),t=_(null),l=_(i.screen.height),s=_(e.container===!0?0:i.screen.width),f=_({position:0,direction:"down",inflectionPoint:0}),d=_(0),c=_(it.value===!0?0:ye()),a=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),q=v(()=>c.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=v(()=>c.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function h(b){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};f.value=x,e.onScroll!==void 0&&n("scroll",x)}}function T(b){const{height:x,width:E}=b;let H=!1;l.value!==x&&(H=!0,l.value=x,e.onScrollHeight!==void 0&&n("scrollHeight",x),g()),s.value!==E&&(H=!0,s.value=E),H===!0&&e.onResize!==void 0&&n("resize",b)}function L({height:b}){d.value!==b&&(d.value=b,g())}function g(){if(e.container===!0){const b=l.value>d.value?ye():0;c.value!==b&&(c.value=b)}}let u=null;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:l,containerHeight:d,scrollbarWidth:c,totalWidth:v(()=>s.value+c.value),rows:v(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(b,x,E){p[b][x]=E}};if(at(re,p),ye()>0){let E=function(){b=null,x.classList.remove("hide-scrollbar")},H=function(){if(b===null){if(x.scrollHeight>i.screen.height)return;x.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(E,300)},K=function(A){b!==null&&A==="remove"&&(clearTimeout(b),E()),window[`${A}EventListener`]("resize",H)},b=null;const x=document.body;k(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),At(()=>{K("remove")})}return()=>{const b=Vt(o.default,[C(ro,{onScroll:h}),C(Se,{onResize:T})]),x=C("div",{class:a.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(Se,{onResize:L}),C("div",{class:"absolute-full",style:q.value},[C("div",{class:"scroll",style:m.value},[x])])]):x}}}),nt=$({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:n.value},W(o.default))}}),so=$({name:"QItem",props:{...ze,...Et,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:i}}=P(),t=Ve(e,i),{hasLink:l,linkAttrs:s,linkClass:f,linkTag:d,navigateOnClick:c}=Bt(),a=_(null),w=_(null),q=v(()=>e.clickable===!0||l.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&q.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=v(()=>{if(e.insetLevel===void 0)return null;const p=i.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function L(p){m.value===!0&&(w.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===a.value?w.value.focus():document.activeElement===w.value&&a.value.focus()),c(p))}function g(p){if(m.value===!0&&Rt(p,[13,32])===!0){$e(p),p.qKeyEvent=!0;const b=new MouseEvent("click",p);b.qKeyEvent=!0,a.value.dispatchEvent(b)}n("keyup",p)}function u(){const p=lt(o.default,[]);return m.value===!0&&p.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:w})),p}return()=>{const p={ref:a,class:h.value,style:T.value,role:"listitem",onClick:L,onKeyup:g};return m.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,s.value)):q.value===!0&&(p["aria-disabled"]="true"),C(d.value,p,u())}}});const co=rt({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function fo(e,o,n,i,t,l){return xe(),_e(so,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:N(()=>[e.icon?(xe(),_e(nt,{key:0,avatar:""},{default:N(()=>[j($t,{name:e.icon},null,8,["name"])]),_:1})):Te("",!0),j(nt,null,{default:N(()=>[j(je,null,{default:N(()=>[Fe(We(e.title),1)]),_:1}),j(je,{caption:""},{default:N(()=>[Fe(We(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var vo=ut(co,[["render",fo]]);const mo=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],ho=rt({name:"MainLayout",components:{EssentialLink:vo},setup(){const e=_(!1);return{essentialLinks:mo,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function po(e,o,n,i,t,l){const s=Ie("EssentialLink"),f=Ie("router-view");return xe(),_e(uo,{view:"lHh Lpr lFf"},{default:N(()=>[Te("",!0),Te("",!0),j(io,null,{default:N(()=>[j(f)]),_:1})]),_:1})}var zo=ut(ho,[["render",po]]);export{zo as default};
