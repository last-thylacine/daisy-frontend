import{$ as f,l as S,n as w,p as k,d as T,_ as b,q as m,e as I}from"./index-UP3kxxUs.js";const O=Symbol("store-raw"),d=Symbol("store-node"),a=Symbol("store-has"),P=Symbol("store-self");function D(e){let n=e[f];if(!n&&(Object.defineProperty(e,f,{value:n=new Proxy(e,M)}),!Array.isArray(e))){const t=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let i=0,s=t.length;i<s;i++){const r=t[i];o[r].get&&Object.defineProperty(e,r,{enumerable:o[r].enumerable,get:o[r].get.bind(n)})}}return n}function C(e){let n;return e!=null&&typeof e=="object"&&(e[f]||!(n=Object.getPrototypeOf(e))||n===Object.prototype||Array.isArray(e))}function g(e,n=new Set){let t,o,i,s;if(t=e!=null&&e[O])return t;if(!C(e)||n.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):n.add(e);for(let r=0,c=e.length;r<c;r++)i=e[r],(o=g(i,n))!==i&&(e[r]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):n.add(e);const r=Object.keys(e),c=Object.getOwnPropertyDescriptors(e);for(let l=0,h=r.length;l<h;l++)s=r[l],!c[s].get&&(i=e[s],(o=g(i,n))!==i&&(e[s]=o))}return e}function A(e,n){let t=e[n];return t||Object.defineProperty(e,n,{value:t=Object.create(null)}),t}function _(e,n,t){if(e[n])return e[n];const[o,i]=T(t,{equals:!1,internal:!0});return o.$=i,e[n]=o}function V(e,n){const t=Reflect.getOwnPropertyDescriptor(e,n);return!t||t.get||!t.configurable||n===f||n===d||(delete t.value,delete t.writable,t.get=()=>e[f][n]),t}function $(e){w()&&_(A(e,d),P)()}function R(e){return $(e),Reflect.ownKeys(e)}const M={get(e,n,t){if(n===O)return e;if(n===f)return t;if(n===S)return $(e),t;const o=A(e,d),i=o[n];let s=i?i():e[n];if(n===d||n===a||n==="__proto__")return s;if(!i){const r=Object.getOwnPropertyDescriptor(e,n);w()&&(typeof s!="function"||e.hasOwnProperty(n))&&!(r&&r.get)&&(s=_(o,n,s)())}return C(s)?D(s):s},has(e,n){return n===O||n===f||n===S||n===d||n===a||n==="__proto__"?!0:(w()&&_(A(e,a),n)(),n in e)},set(){return!0},deleteProperty(){return!0},ownKeys:R,getOwnPropertyDescriptor:V};function y(e,n,t,o=!1){if(!o&&e[n]===t)return;const i=e[n],s=e.length;t===void 0?(delete e[n],e[a]&&e[a][n]&&i!==void 0&&e[a][n].$()):(e[n]=t,e[a]&&e[a][n]&&i===void 0&&e[a][n].$());let r=A(e,d),c;if((c=_(r,n,i))&&c.$(()=>t),Array.isArray(e)&&e.length!==s){for(let l=e.length;l<s;l++)(c=r[l])&&c.$();(c=_(r,"length",s))&&c.$(e.length)}(c=r[P])&&c.$()}function H(e,n){const t=Object.keys(n);for(let o=0;o<t.length;o+=1){const i=t[o];y(e,i,n[i])}}function F(e,n){if(typeof n=="function"&&(n=n(e)),n=g(n),Array.isArray(n)){if(e===n)return;let t=0,o=n.length;for(;t<o;t++){const i=n[t];e[t]!==i&&y(e,t,i)}y(e,"length",o)}else H(e,n)}function u(e,n,t=[]){let o,i=e;if(n.length>1){o=n.shift();const r=typeof o,c=Array.isArray(e);if(Array.isArray(o)){for(let l=0;l<o.length;l++)u(e,[o[l]].concat(n),t);return}else if(c&&r==="function"){for(let l=0;l<e.length;l++)o(e[l],l)&&u(e,[l].concat(n),t);return}else if(c&&r==="object"){const{from:l=0,to:h=e.length-1,by:j=1}=o;for(let p=l;p<=h;p+=j)u(e,[p].concat(n),t);return}else if(n.length>1){u(e[o],n,[o].concat(t));return}i=e[o],t=[o].concat(t)}let s=n[0];typeof s=="function"&&(s=s(i,t),s===i)||o===void 0&&s==null||(s=g(s),o===void 0||C(i)&&C(s)&&!Array.isArray(s)?H(i,s):y(e,o,s))}function K(...[e,n]){const t=g(e||{}),o=Array.isArray(t),i=D(t);function s(...r){k(()=>{o&&r.length===1?F(t,r[0]):u(t,r)})}return[i,s]}const o2=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),i2="/daisy-frontend/assets/dz_24x24_3x-DHbKkjpf.png",v="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='40'%20height='40'%20rx='20'%20fill='%2328A8EA'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.0543%2011.2351C17.7299%2011.1008%2017.373%2011.0656%2017.0287%2011.1341C16.6844%2011.2026%2016.3681%2011.3717%2016.1199%2011.6199C15.8716%2011.8682%2015.7026%2012.1844%2015.6341%2012.5287C15.5656%2012.8731%2015.6008%2013.2299%2015.7351%2013.5543C15.8695%2013.8786%2016.097%2014.1558%2016.3889%2014.3509C16.6808%2014.5459%2017.0239%2014.65%2017.375%2014.65H19.15V12.875C19.15%2012.524%2019.0459%2012.1808%2018.8509%2011.8889C18.6558%2011.597%2018.3786%2011.3695%2018.0543%2011.2351ZM20%2010.598C19.6479%2010.192%2019.205%209.87171%2018.7048%209.66454C18.0698%209.40153%2017.3711%209.33271%2016.6971%209.4668C16.023%209.60088%2015.4038%209.93184%2014.9178%2010.4178C14.4318%2010.9038%2014.1008%2011.523%2013.9668%2012.1971C13.8327%2012.8712%2013.9015%2013.5699%2014.1645%2014.2049C14.4275%2014.8398%2014.8729%2015.3825%2015.4444%2015.7644C16.0158%2016.1462%2016.6877%2016.35%2017.375%2016.35H22.625C23.3123%2016.35%2023.9841%2016.1462%2024.5556%2015.7644C25.1271%2015.3825%2025.5725%2014.8398%2025.8355%2014.2049C26.0985%2013.5699%2026.1673%2012.8712%2026.0332%2012.1971C25.8991%2011.523%2025.5682%2010.9038%2025.0822%2010.4178C24.5962%209.93184%2023.977%209.60088%2023.3029%209.4668C22.6289%209.33271%2021.9301%209.40153%2021.2952%209.66454C20.795%209.87171%2020.3521%2010.192%2020%2010.598ZM20.85%2012.875V14.65H22.625C22.9761%2014.65%2023.3192%2014.5459%2023.6111%2014.3509C23.903%2014.1558%2024.1305%2013.8786%2024.2649%2013.5543C24.3992%2013.2299%2024.4344%2012.8731%2024.3659%2012.5287C24.2974%2012.1844%2024.1283%2011.8681%2023.8801%2011.6199C23.6319%2011.3717%2023.3156%2011.2026%2022.9713%2011.1341C22.627%2011.0656%2022.2701%2011.1008%2021.9457%2011.2351C21.6214%2011.3695%2021.3442%2011.597%2021.1491%2011.8889C20.9541%2012.1808%2020.85%2012.524%2020.85%2012.875Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.5%2016.35C12.141%2016.35%2011.85%2016.641%2011.85%2017V19.25C11.85%2019.609%2012.141%2019.9%2012.5%2019.9H27.5C27.859%2019.9%2028.15%2019.609%2028.15%2019.25V17C28.15%2016.641%2027.859%2016.35%2027.5%2016.35H12.5ZM10.15%2017C10.15%2015.7022%2011.2021%2014.65%2012.5%2014.65H27.5C28.7979%2014.65%2029.85%2015.7022%2029.85%2017V19.25C29.85%2020.5479%2028.7979%2021.6%2027.5%2021.6H12.5C11.2021%2021.6%2010.15%2020.5479%2010.15%2019.25V17Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20%2014.65C20.4694%2014.65%2020.85%2015.0306%2020.85%2015.5V28.9H25.25C25.6213%2028.9%2025.9774%2028.7525%2026.2399%2028.49C26.5025%2028.2274%2026.65%2027.8713%2026.65%2027.5V20.75C26.65%2020.2806%2027.0306%2019.9%2027.5%2019.9C27.9694%2019.9%2028.35%2020.2806%2028.35%2020.75V27.5C28.35%2028.3222%2028.0234%2029.1107%2027.442%2029.6921C26.8607%2030.2734%2026.0722%2030.6%2025.25%2030.6H14.75C13.9278%2030.6%2013.1393%2030.2734%2012.558%2029.6921C11.9766%2029.1107%2011.65%2028.3222%2011.65%2027.5V20.75C11.65%2020.2806%2012.0306%2019.9%2012.5%2019.9C12.9694%2019.9%2013.35%2020.2806%2013.35%2020.75V27.5C13.35%2027.8713%2013.4975%2028.2274%2013.76%2028.49C14.0226%2028.7525%2014.3787%2028.9%2014.75%2028.9H19.15V15.5C19.15%2015.0306%2019.5306%2014.65%2020%2014.65Z'%20fill='white'/%3e%3c/svg%3e",N="/daisy-frontend/assets/flower_40x31.22_3x-Kxz-f1nH.png",G="/daisy-frontend/assets/power_40x37.6_3x-BrQL0dfy.png",L=[{name:"Multi Flower",level:1,cost:1e3,icon:N,iconWidth:"40",iconHeight:"31.22"},{name:"Water Power",level:1,cost:1e3,icon:G,iconWidth:"40",iconHeight:"37.6"}],x="/daisy-frontend/assets/task_tg_40x40_3x-GxiWM9f5.png",Z="/daisy-frontend/assets/task_ig_40x40_3x-DmngdHnf.png",E="/daisy-frontend/assets/task_x_40x40_3x-BhROfK-0.png",U="/daisy-frontend/assets/task_friends_40x40_3x-fS0xxXeg.png",W=[{icon:x,title:"Join our TG channel",value:1e5},{icon:x,title:"Join our TG chat",value:5e3},{icon:E,title:"Follow our X account",value:5e3},{icon:Z,title:"Follow our Instagram",value:5e3},{icon:U,title:"Invite 3 friends",value:1e5}],z=[{icon:v,title:"Invite a friend",value:5e3,subtitle:"for you and your friend"},{icon:v,title:"Invite a friend with Telegram Premium",value:25e3,subtitle:"for you and your friend"}],B="query_id=AAHAtnFGAAAAAMC2cUZo1LLG&user=%7B%22id%22%3A1181857472%2C%22first_name%22%3A%22there%20is%20nothing%20to%20do%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22abacaba123%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1718855668&hash=59c34aac98273af8503760a7e85b22019161c7fad103ec06e653655689f4ce52",q={auth_date:"1718855668",hash:"59c34aac98273af8503760a7e85b22019161c7fad103ec06e653655689f4ce52",query_id:"AAHAtnFGAAAAAMC2cUZo1LLG",user:{allows_write_to_pm:!0,first_name:"there is nothing to do",id:1181857472,language_code:"en",last_name:"",username:"abacaba123"}},X="https://e97ebf99a4d64e.lhr.life/api",J=()=>{const{initData:e}=b;return e||B},Q=async()=>{let e;try{const t=await(await fetch(`${X}/users/init`,{method:"POST",body:decodeURIComponent(J())})).json();console.log({initResponse:t}),e={coins_per_tap:t.coins_per_tap,balance:t.player.coins,energy:t.player.energy,max_energy:t.player.max_energy,energy_level:t.player.energy_level,tap_level:t.player.tap_level}}catch(n){console.warn("API error ignored:",n),e={coins_per_tap:1,balance:0,energy:1e3,max_energy:1e3,energy_level:0,tap_level:0}}return console.log({initResult:e}),e},Y={init:Q},e2=()=>{const{initData:e,initDataUnsafe:n}=b;return console.log({initData:e,initDataUnsafe:n,WebApp:b}),e!==""?n:q};function n2(){const[e,n]=K({coins:null,coins_per_tap:null,initData:e2(),upgrades:L,tasks:W,invite_tasks:z,friends:[]}),t=()=>{e.coins!=null&&e.coins_per_tap!=null&&n("coins",e.coins+e.coins_per_tap)};return I(()=>{console.log({...e.initData.user})}),I(()=>{Y.init().then(o=>n(i=>({...i,...o})))}),{store:e,tap:t}}const s2=m(n2);export{s2 as a,i2 as d,o2 as f,v as g};
