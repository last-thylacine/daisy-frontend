import{i,a as u,b as c,t as l,c as s,R as h,s as d,d as z,e as E,o as R,f as S,g as D,h as j,j as H,m as M,C as P,F as N,k as b}from"./index-CI0BAm-S.js";import{a as $,f as T,d as U}from"./app-DKTsvsUs.js";import{c as q}from"./chevron_right_24-DzArCaY4.js";const G="/daisy-frontend/assets/energy_19.02x24-BJ5CZXmv.png",Z="_chip_1hip9_1",J={chip:Z};var K=l("<div>");const w=r=>(()=>{var e=K();return i(e,()=>r.children),u(()=>c(e,J.chip)),e})(),V="_container_nfigl_6",p={container:V};var W=l("<img draggable=false width=19.02 height=24>"),X=l("<div>/");const Y=()=>{const{store:r}=$;return s(h,{get class(){return p.container},get children(){return[s(w,{get children(){return s(h,{get children(){return[(()=>{var e=W();return d(e,"src",G),e})(),(()=>{var e=X(),t=e.firstChild;return i(e,()=>r.energy,t),i(e,()=>r.max_energy,null),u(()=>c(e,p.energy)),e})()]}})}}),s(w,{})]}})};function O(r,{ease:e=n=>n,duration:t=100}){const[n,o]=z(r());let a,_,g,v;function f(A){const C=A-a;C<t?(o(_+e(C/t)*g),v=requestAnimationFrame(f)):o(r())}return E(R(r,()=>{a=performance.now(),_=n(),g=r()-_,v=requestAnimationFrame(f),S(()=>cancelAnimationFrame(v))},{defer:!0})),n}const Q=()=>{const{store:r}=$,e=O(()=>r.coins||0,{duration:250}),t=()=>Math.round(e());return{formattedCoinBalance:()=>T(t()),coinBalanceFontSize:()=>`${56-2*Math.log10(r.coins||1)}px`}},ee="/daisy-frontend/assets/dz_64x64_3x-DKj55EYD.png",te="_container_1ynp8_6",re="_text_1ynp8_10",x={container:te,text:re};var ne=l("<img draggable=false width=64 height=64>"),ae=l("<div>");const se=()=>{const{formattedCoinBalance:r,coinBalanceFontSize:e}=Q();return s(h,{get class(){return x.container},get children(){return[(()=>{var t=ne();return d(t,"src",ee),t})(),(()=>{var t=ae();return i(t,r),u(n=>{var o=x.text,a=e();return o!==n.e&&c(t,n.e=o),a!==n.t&&((n.t=a)!=null?t.style.setProperty("font-size",a):t.style.removeProperty("font-size")),n},{e:void 0,t:void 0}),t})()]}})},le="data:image/svg+xml,%3csvg%20width='280'%20height='281'%20viewBox='0%200%20280%20281'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M171.411%20213.83C194.798%20295.994%20125.002%20306.287%20129.41%20218.549C108.104%20304.082%2041.9824%20273.201%2091.941%20201.829C30.2274%20265.113%20-14.5887%20209.234%2068.2457%20169.653C-22.6703%20189.381%20-21.2009%20121.004%2063.4161%20128.355C-23.405%20104.093%202.30917%2044.5373%2079.0779%2091.5925C19.9417%2025.4207%2067.8202%20-8.21643%20111.043%2066.5939C89.7372%20-22.3707%20156.594%20-20.1658%20151.451%2061.2743C174.227%20-17.9601%20235.94%201.15741%20189.917%2076.8875C246.961%2017.333%20291.042%2068.8007%20215.554%20110.586C298.389%2087.182%20302.797%20154.09%20220.491%20151.148C302.797%20169.653%20275.614%20234.968%20204.149%20189.381C260.92%20250.408%20215.554%20287.906%20171.411%20213.83Z'%20fill='white'/%3e%3ccircle%20cx='140.787'%20cy='140.803'%20r='28.3146'%20fill='%23FFD600'/%3e%3c/svg%3e";var oe=l("<img draggable=false width=280 height=280>");const ce=()=>{const{tap:r}=$;return(()=>{var e=oe();return j(e,"click",r,!0),d(e,"src",le),e})()};D(["click"]);const ie="/daisy-frontend/assets/farm_48x46.76_3x-PHbG5kdH.png",de="/daisy-frontend/assets/farm_82.13x80_3x-DUl_NfRy.png",ue="_overlay_10jce_1",_e="_drawer_10jce_16",y={overlay:ue,drawer:_e};var ve=l("<div>");const ge=r=>{const[e,t]=H(r,["children","onClose","class","classList"]);return(()=>{var n=ve();return n.$$click=()=>e.onClose(),i(n,s(P,M(t,{onClick:o=>o.stopPropagation(),get classList(){return{[y.drawer]:!0,...e.class?{[e.class]:!0}:{},...e.classList??{}}},get children(){return e.children}}))),u(()=>c(n,y.overlay)),n})()};D(["click"]);const me="_container_1a46d_6",he="_textContainer_1a46d_18",$e="_title_1a46d_23",fe="_subtitle_1a46d_33",Ce="_chevronLabel_1a46d_42",m={container:me,textContainer:he,title:$e,subtitle:fe,chevronLabel:Ce};var be=l("<img draggable=false>"),we=l("<div><div></div><div> lvl"),F=l("<img draggable=false width=24 height=24>"),pe=l("<div>");const xe=r=>s(h,{get class(){return m.container},get children(){return[(()=>{var e=be();return u(t=>{var n=r.iconWidth,o=r.iconHeight,a=r.icon;return n!==t.e&&d(e,"width",t.e=n),o!==t.t&&d(e,"height",t.t=o),a!==t.a&&d(e,"src",t.a=a),t},{e:void 0,t:void 0,a:void 0}),e})(),(()=>{var e=we(),t=e.firstChild,n=t.nextSibling,o=n.firstChild;return i(t,()=>r.name),i(n,()=>r.level,o),u(a=>{var _=m.textContainer,g=m.title,v=m.subtitle;return _!==a.e&&c(e,a.e=_),g!==a.t&&c(t,a.t=g),v!==a.a&&c(n,a.a=v),a},{e:void 0,t:void 0,a:void 0}),e})(),(()=>{var e=F();return d(e,"src",U),e})(),(()=>{var e=pe();return i(e,()=>r.cost),u(()=>c(e,m.chevronLabel)),e})(),(()=>{var e=F();return d(e,"src",q),e})()]}}),ye="_title_petuw_1",Fe="_subtitle_petuw_11",k={title:ye,subtitle:Fe};var ke=l("<img draggable=false width=82.13 height=80>"),I=l("<div>");const B={title:"Farm",subtitle:"How a farm works"},Ie=r=>{const{store:e}=$;return s(ge,{get onClose(){return r.onClose},get children(){return[(()=>{var t=ke();return d(t,"src",de),t})(),(()=>{var t=I();return i(t,()=>B.title),u(()=>c(t,k.title)),t})(),(()=>{var t=I();return i(t,()=>B.subtitle),u(()=>c(t,k.subtitle)),t})(),s(N,{get each(){return e.upgrades},children:t=>s(xe,t)})]}})},Be="_button_1mo88_1",Le="_label_1mo88_11",L={button:Be,label:Le};var ze=l("<img draggable=false width=48 height=46.76>"),De=l("<div>");const Pe={label:"Farm"},Ae=()=>{const[r,e]=z(!1);return[s(P,{get class(){return L.button},onClick:()=>e(!0),get children(){return[(()=>{var t=ze();return d(t,"src",ie),t})(),(()=>{var t=De();return i(t,()=>Pe.label),u(()=>c(t,L.label)),t})()]}}),b(()=>b(()=>!!r())()&&s(Ie,{onClose:()=>e(!1)}))]},je=()=>[s(Y,{}),s(se,{}),s(ce,{}),s(Ae,{})];export{je as default};
