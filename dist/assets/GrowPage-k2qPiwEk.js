import{c as o,C as B,a as d,d as P,t as u,S as q,R as p,s as v,i as g,b as _,e as Z,f as G,o as Y,g as W,h as D,j as J,m as K,k as V,u as I,F as O,l as z}from"./index-66bnHxk7.js";import{a as C,f as Q,d as ee}from"./app-DEvyPu1B.js";import{c as te}from"./chevron_right_24-DzArCaY4.js";const re="/daisy-frontend/assets/energy_19.02x24-BJ5CZXmv.png",ne="_chip_10qn9_1",ae={chip:ne},M=n=>o(B,{get class(){return ae.chip},get children(){return n.children}}),se="_bar_ysrb2_1",le="_progress_ysrb2_1",oe="_blue_ysrb2_10",ie="_yellow_ysrb2_13",L={bar:se,progress:le,blue:oe,yellow:ie};var ce=u("<div><div>");const S=n=>{const a=()=>{const s=n.max-n.min,e=n.value-n.min;return Math.floor(e/s)};return(()=>{var s=ce(),e=s.firstChild;return d(t=>{var l={[L.bar]:!0,[L[n.variant]]:!0},i=`${a()}%`,m={[L.progress]:!0,[L[n.variant]]:!0};return t.e=P(s,l,t.e),i!==t.t&&((t.t=i)!=null?e.style.setProperty("width",i):e.style.removeProperty("width")),t.a=P(e,m,t.a),t},{e:void 0,t:void 0,a:void 0}),s})()},de="_container_1ijse_1",ue="_row_1ijse_10",_e="_energy_1ijse_16",ge="_username_1ijse_16",ve="_avatar_1ijse_25",w={container:de,row:ue,energy:_e,username:ge,avatar:ve};var me=u("<img draggable=false width=19.02 height=24>"),fe=u("<div>/"),j=u("<div>");const he=()=>{const{store:n}=C,a=()=>n.energy!==null&&n.water_power!==null,s=()=>500*(1+n.water_power);return o(p,{get class(){return w.container},get children(){return[o(M,{get children(){return o(q,{get when(){return a()},get children(){return[o(p,{get class(){return w.row},get children(){return[(()=>{var e=me();return v(e,"src",re),e})(),(()=>{var e=fe(),t=e.firstChild;return g(e,()=>n.energy,t),g(e,s,null),d(()=>_(e,w.energy)),e})()]}}),o(S,{min:0,get value(){return n.energy},get max(){return s()},variant:"blue"})]}})}}),o(M,{get children(){return o(q,{get when(){return a()},get children(){return[o(p,{get class(){return w.row},get children(){return[(()=>{var e=j();return g(e,()=>{var t;return(t=n.initData.user)==null?void 0:t.username}),d(()=>_(e,w.username)),e})(),(()=>{var e=j();return d(()=>_(e,w.avatar)),e})()]}}),o(S,{min:1,value:1,max:12,variant:"yellow"})]}})}})]}})};function we(n,{ease:a=e=>e,duration:s=100}){const[e,t]=Z(n());let l,i,m,r;function c(h){const f=h-l;f<s?(t(i+a(f/s)*m),r=requestAnimationFrame(c)):t(n())}return G(Y(n,()=>{l=performance.now(),i=e(),m=n()-i,r=requestAnimationFrame(c),W(()=>cancelAnimationFrame(r))},{defer:!0})),e}const $e=()=>{const{store:n}=C,a=we(()=>n.coins||0,{duration:250}),s=()=>Math.round(a());return{formattedCoinBalance:()=>Q(s()),coinBalanceFontSize:()=>`${56-2*Math.log10(n.coins||1)}px`}},pe="/daisy-frontend/assets/dz_64x64_3x-DKj55EYD.png",Ce="_container_16o4z_1",be="_text_16o4z_10",E={container:Ce,text:be};var ye=u("<img draggable=false width=64 height=64>"),xe=u("<div>");const Le=()=>{const{formattedCoinBalance:n,coinBalanceFontSize:a}=$e();return o(p,{get class(){return E.container},get children(){return[(()=>{var s=ye();return v(s,"src",pe),s})(),(()=>{var s=xe();return g(s,n),d(e=>{var t=E.text,l=a();return t!==e.e&&_(s,e.e=t),l!==e.t&&((e.t=l)!=null?s.style.setProperty("font-size",l):s.style.removeProperty("font-size")),e},{e:void 0,t:void 0}),s})()]}})},qe="data:image/svg+xml,%3csvg%20width='280'%20height='281'%20viewBox='0%200%20280%20281'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M171.411%20213.83C194.798%20295.994%20125.002%20306.287%20129.41%20218.549C108.104%20304.082%2041.9824%20273.201%2091.941%20201.829C30.2274%20265.113%20-14.5887%20209.234%2068.2457%20169.653C-22.6703%20189.381%20-21.2009%20121.004%2063.4161%20128.355C-23.405%20104.093%202.30917%2044.5373%2079.0779%2091.5925C19.9417%2025.4207%2067.8202%20-8.21643%20111.043%2066.5939C89.7372%20-22.3707%20156.594%20-20.1658%20151.451%2061.2743C174.227%20-17.9601%20235.94%201.15741%20189.917%2076.8875C246.961%2017.333%20291.042%2068.8007%20215.554%20110.586C298.389%2087.182%20302.797%20154.09%20220.491%20151.148C302.797%20169.653%20275.614%20234.968%20204.149%20189.381C260.92%20250.408%20215.554%20287.906%20171.411%20213.83Z'%20fill='white'/%3e%3ccircle%20cx='140.787'%20cy='140.803'%20r='28.3146'%20fill='%23FFD600'/%3e%3c/svg%3e",Ie="_daisy_1078s_1",Fe="_particle_1078s_14",k={daisy:Ie,particle:Fe,"float-and-fade":"_float-and-fade_1078s_1","particle-text":"_particle-text_1078s_21"};var ke=u("<img draggable=false width=280 height=280>");const U=(n,a,s)=>{const e=document.createElement("div");e.classList.add(k["particle-text"]),e.textContent=`+${s}`;const t=document.createElement("div");t.classList.add(k.particle),t.style.position="absolute",t.style.left=`${n}px`,t.style.top=`${a}px`,t.addEventListener("animationend",t.remove),t.appendChild(e),document.body.appendChild(t)},Be=()=>{const{store:n,tap:a}=C,s=t=>{n.multi_flower&&(U(t.clientX,t.clientY,n.multi_flower),a())},e=t=>{if(t.preventDefault(),n.multi_flower){for(const l of t.changedTouches)U(l.clientX,l.clientY,n.multi_flower);a()}};return(()=>{var t=ke();return t.$$touchend=e,t.$$mouseup=s,v(t,"src",qe),d(()=>_(t,k.daisy)),t})()};D(["mouseup","touchend"]);const De="/daisy-frontend/assets/farm_48x46.76_3x-PHbG5kdH.png",Pe="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_33_9114)'%3e%3cpath%20d='M14%2028C21.6589%2028%2028%2021.6451%2028%2014C28%206.34117%2021.6451%200%2013.9863%200C6.34117%200%200%206.34117%200%2014C0%2021.6451%206.35489%2028%2014%2028Z'%20fill='black'%20fill-opacity='0.04'/%3e%3cpath%20opacity='0.5'%20d='M9.17282%2020C8.51489%2020%208%2019.4702%208%2018.8115C8%2018.4964%208.11441%2018.1957%208.34326%2017.9808L12.3051%2014L8.34326%2010.0334C8.11441%209.8043%208%209.51789%208%209.20286C8%208.52982%208.51489%208.02864%209.17282%208.02864C9.50178%208.02864%209.75923%208.14319%209.98807%208.35799L13.9785%2012.3389L17.9976%208.34367C18.2407%208.10024%2018.4982%208%2018.8128%208C19.4707%208%2020%208.51551%2020%209.17422C20%209.50358%2019.8998%209.76133%2019.6423%2010.0191L15.6663%2014L19.6281%2017.9666C19.8713%2018.1814%2019.9856%2018.482%2019.9856%2018.8115C19.9856%2019.4702%2019.4565%2020%2018.7842%2020C18.4553%2020%2018.1549%2019.8855%2017.9403%2019.6563L13.9785%2015.6754L10.031%2019.6563C9.80214%2019.8855%209.50178%2020%209.17282%2020Z'%20fill='black'%20fill-opacity='0.8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_33_9114'%3e%3crect%20width='28'%20height='28'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",ze="_overlay_1w6sy_1",Me="_drawer_1w6sy_16",Se="_closeIcon_1w6sy_23",F={overlay:ze,drawer:Me,closeIcon:Se};var je=u("<img draggable=false width=28 height=28>"),Ee=u("<div>");const X=n=>{const[a,s]=J(n,["children","onClose","class","classList"]);return(()=>{var e=Ee();return e.$$click=()=>a.onClose(),g(e,o(B,K(s,{onClick:t=>t.stopPropagation(),get classList(){return{[F.drawer]:!0,...a.class?{[a.class]:!0}:{},...a.classList??{}}},get children(){return[(()=>{var t=je();return t.$$click=()=>a.onClose(),v(t,"src",Pe),d(()=>_(t,F.closeIcon)),t})(),V(()=>a.children)]}}))),d(()=>_(e,F.overlay)),e})()};D(["click"]);const Ue="/daisy-frontend/assets/farm_82.13x80_3x-DUl_NfRy.png",He="_container_mq5wa_1",Re="_textContainer_mq5wa_13",Te="_title_mq5wa_18",Ae="_subtitle_mq5wa_27",Ne="_chevronLabel_mq5wa_36",y={container:He,textContainer:Re,title:Te,subtitle:Ae,chevronLabel:Ne};var Xe=u("<img draggable=false>"),Ze=u("<div><div></div><div> lvl"),H=u("<img draggable=false width=24 height=24>"),Ge=u("<div>");const Ye=n=>{const{store:a}=C,s=()=>a.upgrades.find(({id:l})=>l===n.id),e=()=>{if(n.id==="multi_flower")return a.multi_flower;if(n.id==="water_power")return a.water_power},t=I();return o(p,{get class(){return y.container},onClick:()=>t(`/grow/farm/${s().id}`),get children(){return[(()=>{var l=Xe();return d(i=>{var m=s().iconWidth,r=s().iconHeight,c=s().icon;return m!==i.e&&v(l,"width",i.e=m),r!==i.t&&v(l,"height",i.t=r),c!==i.a&&v(l,"src",i.a=c),i},{e:void 0,t:void 0,a:void 0}),l})(),(()=>{var l=Ze(),i=l.firstChild,m=i.nextSibling,r=m.firstChild;return g(i,()=>s().title),g(m,e,r),d(c=>{var h=y.textContainer,f=y.title,b=y.subtitle;return h!==c.e&&_(l,c.e=h),f!==c.t&&_(i,c.t=f),b!==c.a&&_(m,c.a=b),c},{e:void 0,t:void 0,a:void 0}),l})(),(()=>{var l=H();return v(l,"src",ee),l})(),(()=>{var l=Ge();return g(l,()=>s().cost(e())),d(()=>_(l,y.chevronLabel)),l})(),(()=>{var l=H();return v(l,"src",te),l})()]}})},We="_title_1ji7f_1",Je="_subtitle_1ji7f_11",R={title:We,subtitle:Je};var Ke=u("<img draggable=false width=82.13 height=80>"),T=u("<div>");const A={title:"Farm",subtitle:"How a farm works"},Ve=()=>{const{store:n}=C;return[(()=>{var a=Ke();return v(a,"src",Ue),a})(),(()=>{var a=T();return g(a,()=>A.title),d(()=>_(a,R.title)),a})(),(()=>{var a=T();return g(a,()=>A.subtitle),d(()=>_(a,R.subtitle)),a})(),o(O,{get each(){return n.upgrades},children:a=>o(Ye,{get id(){return a.id}})})]},Oe=()=>{const n=I();return o(X,{onClose:()=>n("/grow"),get children(){return o(Ve,{})}})},Qe="/daisy-frontend/assets/dz_32x32_3x-CfX2yuM1.png",et="_title_ftqiv_1",tt="_description_ftqiv_11",rt="_effect_ftqiv_21",nt="_cost_ftqiv_31",at="_level_ftqiv_41",st="_button_ftqiv_51",$={title:et,description:tt,effect:rt,cost:nt,level:at,button:st};var lt=u("<img draggable=false>"),x=u("<div>"),ot=u("<img draggable=false width=40 height=40>"),it=u("<div> lvl");const ct={submit:"Go ahead"},dt=n=>{const{store:a,setStore:s}=C,e=()=>a.upgrades.find(({id:r})=>r===n.id),t=I(),l=()=>{if(n.id==="multi_flower")return a.multi_flower;if(n.id==="water_power")return a.water_power},i=()=>t("/grow/farm/"),m=()=>{n.id==="multi_flower"&&a.multi_flower!==null&&a.coins!==null&&(s("coins",r=>r-e().cost(l())),s("multi_flower",r=>r+1),i()),n.id==="water_power"&&a.water_power!==null&&a.coins!==null&&(s("coins",r=>r-e().cost(l())),s("water_power",r=>r+1),i())};return o(X,{onClose:i,get children(){return[(()=>{var r=lt();return d(c=>{var h=e().imageWidth,f=e().imageHeight,b=e().image;return h!==c.e&&v(r,"width",c.e=h),f!==c.t&&v(r,"height",c.t=f),b!==c.a&&v(r,"src",c.a=b),c},{e:void 0,t:void 0,a:void 0}),r})(),(()=>{var r=x();return g(r,()=>e().title),d(()=>_(r,$.title)),r})(),(()=>{var r=x();return g(r,()=>e().description),d(()=>_(r,$.description)),r})(),(()=>{var r=x();return g(r,()=>e().effect.replace("{{level}}",String(l()))),d(()=>_(r,$.effect)),r})(),o(p,{get children(){return[(()=>{var r=ot();return v(r,"src",Qe),r})(),(()=>{var r=x();return g(r,()=>e().cost(l())),d(()=>_(r,$.cost)),r})(),(()=>{var r=it(),c=r.firstChild;return g(r,()=>l()+1,c),d(()=>_(r,$.level)),r})()]}}),(()=>{var r=x();return r.$$click=m,g(r,()=>ct.submit),d(()=>_(r,$.button)),r})()]}})};D(["click"]);const ut="_button_1mduq_1",_t="_label_1mduq_11",N={button:ut,label:_t};var gt=u("<img draggable=false width=48 height=46.76>"),vt=u("<div>");const mt={label:"Farm"},ft=()=>{const n=I(),a=()=>n("/grow/farm"),s=z(()=>"/daisy-frontend/grow/farm"),e=z(()=>"/daisy-frontend/grow/farm/:upgrade");return[o(B,{get class(){return N.button},onClick:a,get children(){return[(()=>{var t=gt();return v(t,"src",De),t})(),(()=>{var t=vt();return g(t,()=>mt.label),d(()=>_(t,N.label)),t})()]}}),o(q,{get when(){return!!s()},get children(){return o(Oe,{})}}),o(q,{get when(){return!!e()},get children(){return o(dt,{get id(){return e().params.upgrade}})}})]},pt=()=>[o(he,{}),o(Le,{}),o(Be,{}),o(ft,{})];export{pt as default};
