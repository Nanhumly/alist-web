import{j as e,D as s,h as t,r as a,R as r,C as n,V as l,ae as o,af as c,I as i,A as u}from"./vendor.a4c78c95.js";import{j as m,e as d}from"./index.1a375fd9.js";import"./index.bc788cc5.js";const p=()=>{const{t:p}=e(),g=s(),f=t(),[E,h]=a.exports.useState(""),j=()=>{m(E),d.get("login").then((e=>{const s=e.data;200===s.code?(f({title:p(s.message),status:"success",duration:3e3,isClosable:!0}),g.push("settings/0")):f({title:p(s.message),status:"error",duration:3e3,isClosable:!0})}))};return r.createElement(n,{p:"4",h:"full"},r.createElement(l,{w:{base:"full",md:"50%"}},r.createElement(o,{isRequired:!0},r.createElement(c,null,p("password")),r.createElement(i,{type:"password",value:E,onChange:e=>h(e.target.value),onKeyUp:e=>{"Enter"===e.key&&j()}})),r.createElement(u,{onClick:j},p("login"))))};export{p as default};