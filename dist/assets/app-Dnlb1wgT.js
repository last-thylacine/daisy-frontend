import{$ as a,l as I,n as O,p as L,d as N,q as R,e as C,_ as P}from"./index-CvbV0aT7.js";const S=Symbol("store-raw"),u=Symbol("store-node"),l=Symbol("store-has"),p=Symbol("store-self");function $(n){let e=n[a];if(!e&&(Object.defineProperty(n,a,{value:e=new Proxy(n,K)}),!Array.isArray(n))){const o=Object.keys(n),t=Object.getOwnPropertyDescriptors(n);for(let s=0,i=o.length;s<i;s++){const c=o[s];t[c].get&&Object.defineProperty(n,c,{enumerable:t[c].enumerable,get:t[c].get.bind(e)})}}return e}function y(n){let e;return n!=null&&typeof n=="object"&&(n[a]||!(e=Object.getPrototypeOf(n))||e===Object.prototype||Array.isArray(n))}function g(n,e=new Set){let o,t,s,i;if(o=n!=null&&n[S])return o;if(!y(n)||e.has(n))return n;if(Array.isArray(n)){Object.isFrozen(n)?n=n.slice(0):e.add(n);for(let c=0,f=n.length;c<f;c++)s=n[c],(t=g(s,e))!==s&&(n[c]=t)}else{Object.isFrozen(n)?n=Object.assign({},n):e.add(n);const c=Object.keys(n),f=Object.getOwnPropertyDescriptors(n);for(let r=0,h=c.length;r<h;r++)i=c[r],!f[i].get&&(s=n[i],(t=g(s,e))!==s&&(n[i]=t))}return n}function A(n,e){let o=n[e];return o||Object.defineProperty(n,e,{value:o=Object.create(null)}),o}function _(n,e,o){if(n[e])return n[e];const[t,s]=N(o,{equals:!1,internal:!0});return t.$=s,n[e]=t}function T(n,e){const o=Reflect.getOwnPropertyDescriptor(n,e);return!o||o.get||!o.configurable||e===a||e===u||(delete o.value,delete o.writable,o.get=()=>n[a][e]),o}function k(n){O()&&_(A(n,u),p)()}function v(n){return k(n),Reflect.ownKeys(n)}const K={get(n,e,o){if(e===S)return n;if(e===a)return o;if(e===I)return k(n),o;const t=A(n,u),s=t[e];let i=s?s():n[e];if(e===u||e===l||e==="__proto__")return i;if(!s){const c=Object.getOwnPropertyDescriptor(n,e);O()&&(typeof i!="function"||n.hasOwnProperty(e))&&!(c&&c.get)&&(i=_(t,e,i)())}return y(i)?$(i):i},has(n,e){return e===S||e===a||e===I||e===u||e===l||e==="__proto__"?!0:(O()&&_(A(n,l),e)(),e in n)},set(){return!0},deleteProperty(){return!0},ownKeys:v,getOwnPropertyDescriptor:T};function w(n,e,o,t=!1){if(!t&&n[e]===o)return;const s=n[e],i=n.length;o===void 0?(delete n[e],n[l]&&n[l][e]&&s!==void 0&&n[l][e].$()):(n[e]=o,n[l]&&n[l][e]&&s===void 0&&n[l][e].$());let c=A(n,u),f;if((f=_(c,e,s))&&f.$(()=>o),Array.isArray(n)&&n.length!==i){for(let r=n.length;r<i;r++)(f=c[r])&&f.$();(f=_(c,"length",i))&&f.$(n.length)}(f=c[p])&&f.$()}function D(n,e){const o=Object.keys(e);for(let t=0;t<o.length;t+=1){const s=o[t];w(n,s,e[s])}}function E(n,e){if(typeof e=="function"&&(e=e(n)),e=g(e),Array.isArray(e)){if(n===e)return;let o=0,t=e.length;for(;o<t;o++){const s=e[o];n[o]!==s&&w(n,o,s)}w(n,"length",t)}else D(n,e)}function d(n,e,o=[]){let t,s=n;if(e.length>1){t=e.shift();const c=typeof t,f=Array.isArray(n);if(Array.isArray(t)){for(let r=0;r<t.length;r++)d(n,[t[r]].concat(e),o);return}else if(f&&c==="function"){for(let r=0;r<n.length;r++)t(n[r],r)&&d(n,[r].concat(e),o);return}else if(f&&c==="object"){const{from:r=0,to:h=n.length-1,by:j=1}=t;for(let b=r;b<=h;b+=j)d(n,[b].concat(e),o);return}else if(e.length>1){d(n[t],e,[t].concat(o));return}s=n[t],o=[t].concat(o)}let i=e[0];typeof i=="function"&&(i=i(s,o),i===s)||t===void 0&&i==null||(i=g(i),t===void 0||y(s)&&y(i)&&!Array.isArray(i)?D(s,i):w(n,t,i))}function W(...[n,e]){const o=g(n||{}),t=Array.isArray(o),s=$(o);function i(...c){L(()=>{t&&c.length===1?E(o,c[0]):d(o,c)})}return[s,i]}const Y=n=>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),Z="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.29161%203.79225C7.68214%203.40173%208.3153%203.40173%208.70583%203.79225L16.2058%2011.2923C16.5963%2011.6828%2016.5963%2012.3159%2016.2058%2012.7065L8.70583%2020.2065C8.3153%2020.597%207.68214%2020.597%207.29161%2020.2065C6.90109%2019.8159%206.90109%2019.1828%207.29161%2018.7923L14.0845%2011.9994L7.29161%205.20647C6.90109%204.81594%206.90109%204.18278%207.29161%203.79225Z'%20fill='%2328A8EA'/%3e%3c/svg%3e",V="/daisy-frontend/assets/dz_24x24_3x-DHbKkjpf.png",F="/daisy-frontend/assets/flower_40x31.22_3x-Kxz-f1nH.png",H="/daisy-frontend/assets/power_40x37.6_3x-BrQL0dfy.png",z=[{name:"Multi Flower",level:1,cost:1e3,icon:F,iconWidth:"40",iconHeight:"31.22"},{name:"Water Power",level:1,cost:1e3,icon:H,iconWidth:"40",iconHeight:"37.6"}],x="/daisy-frontend/assets/task_tg_40x40_3x-GxiWM9f5.png",B="/daisy-frontend/assets/task_ig_40x40_3x-DmngdHnf.png",G="/daisy-frontend/assets/task_x_40x40_3x-BhROfK-0.png",M="/daisy-frontend/assets/task_friends_40x40_3x-fS0xxXeg.png",X=[{icon:x,title:"Join our TG channel",value:1e5},{icon:x,title:"Join our TG chat",value:5e3},{icon:G,title:"Follow our X account",value:5e3},{icon:B,title:"Follow our Instagram",value:5e3},{icon:M,title:"Invite 3 friends",value:1e5}],q=16512372,J=14,U=()=>{const{initData:n,initDataUnsafe:e}=P;return console.log({WebApp:P}),console.log({initData:n,initDataUnsafe:e}),n!==""?e:{user:{allows_write_to_pm:!0,first_name:"there is nothing to do",id:1181857472,language_code:"en",last_name:"",username:"abacaba123"}}};function m(){const[n,e]=W({coins:q,coins_per_tap:J,initData:U(),upgrades:z,tasks:X}),o=()=>e("coins",n.coins+n.coins_per_tap);return C(()=>{console.log({...n.initData.user})}),{store:n,tap:o}}const nn=R(m);export{nn as a,Z as c,V as d,Y as f};
