import{a as r,b as n,t as a,c as t,i as c,F as l}from"./index-DIYKXNar.js";import{a as d}from"./app-BkGBZZHc.js";import{L as u,T as m,P as v}from"./TaskListItem-Cw970YRd.js";const f={};var p=a("<div>");const _=()=>(()=>{var s=p();return r(()=>n(s,f.container)),s})(),$={};var b=a("<div>");const g={label:"List of your friends"},L=()=>{const{store:s}=d;return[t(u,{get children(){return g.label}}),(()=>{var e=b();return c(e,t(l,{get each(){return s.friends},children:i=>t(_,{})})),r(()=>n(e,$.list)),e})()]},k="_tasks_61xam_1",F={tasks:k};var h=a("<div>");const I=()=>{const{store:s}=d;return(()=>{var e=h();return c(e,t(l,{get each(){return s.invite_tasks},children:i=>t(m,i)})),r(()=>n(e,F.tasks)),e})()},o={title:"Invite friends!",subtitle:"You and your friend will receive bonuses"},T=()=>[t(v,{get title(){return o.title},get subtitle(){return o.subtitle}}),t(I,{}),t(L,{})];export{T as default};