import{h as e,D as s,j as t,r as a,R as r,C as o,V as l,ad as n,ae as i,P as m,v as c}from"./vendor.cc756816.js";import{c as d,a as u}from"./index.f6d98861.js";import"./index.b40903f7.js";import"./index.c208b2a1.js";import"./index.esm.53a17f20.js";import"./useTitle.ba04131e.js";const p=()=>{const{t:p}=e(),f=s(),g=t(),[j,b]=a.exports.useState("");return r.createElement(o,{p:"4",h:"full"},r.createElement(l,{w:{base:"full",md:"50%"}},r.createElement(n,{isRequired:!0},r.createElement(i,null,p("password")),r.createElement(m,{type:"password",value:j,onChange:e=>b(e.target.value)})),r.createElement(c,{onClick:()=>{d(j),u.get("login").then((e=>{const s=e.data;200===s.code?(g({title:p(s.message),status:"success",duration:3e3,isClosable:!0}),f.push("settings")):g({title:p(s.message),status:"error",duration:3e3,isClosable:!0})}))}},p("login"))))};export{p as default};