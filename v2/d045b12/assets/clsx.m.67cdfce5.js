import{n as r,o as e,p as a,q as s,r as t,s as o,t as n,u as i,v as f,w as c,x as u,y as p,z as d,A as l}from"./index.91978b09.js";import{a as x}from"./index.esm.bde4a21d.js";import{I as m}from"./index.c4aa7dbf.js";const b={"dmg,ipa":c,exe:u,"zip,gz,rar,7z,tar,jar,xz":p,apk:x,db:d,md:l},g=(c,u)=>{for(const[r,e]of Object.entries(b))if(r.split(",").includes(u.toLowerCase()))return e;switch(c){case 1:return m;case 2:return"doc"===u||"docx"===u?o:"xls"===u||"xlsx"===u?n:"ppt"===u||"pptx"===u?i:f;case 3:return t;case 4:return s;case 5:return a;case 6:return e;default:return r}};function j(r){var e,a,s="";if("string"==typeof r||"number"==typeof r)s+=r;else if("object"==typeof r)if(Array.isArray(r))for(e=0;e<r.length;e++)r[e]&&(a=j(r[e]))&&(s&&(s+=" "),s+=a);else for(e in r)r[e]&&(s&&(s+=" "),s+=e);return s}function y(){for(var r,e,a=0,s="";a<arguments.length;)(r=arguments[a++])&&(e=j(r))&&(s&&(s+=" "),s+=e);return s}var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});export{z as a,y as c,g};