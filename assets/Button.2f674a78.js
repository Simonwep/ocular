import{_ as y,d as _,v as f,g as p,c as b,o as l,j as r,a as k,n as a,B as i,A as C,b as s}from"./index.7e9efac6.js";import{I as h}from"./Icon.14da40a4.js";import{u as v}from"./useThemeStyles.28f3ed14.js";const B="_3j _3k _3m _3p _3r _3t _3u _3w _3y _3z",I="_3l",M="_3n",O="_3o _3s",$="_3q",g="_3v _3x _40";var j={button:B,iconOnly:I,hasIcon:M,text:O,icon:$,textual:g};const z=_({props:{class:null,iconClass:null,icon:null,text:null,color:{default:"primary"},textual:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:m}){const o=e;f(n=>({"1e0c8cd4":s(t).color.base,"40ade098":s(t).text.base,"6ec8c97e":s(t).focus,"16b0ddad":s(t).pure.base,"2e986f17":s(t).color.hover,"552daf56":s(t).text.hover,"80746440":s(t).pure.hover}));const c=p(),t=v(()=>o.color),x=b(()=>[o.class,c.button,{[c.hasIcon]:o.icon,[c.textual]:o.textual,[c.iconOnly]:o.icon&&!o.text}]);return(n,u)=>(l(),r("button",{class:a(s(x)),onClick:u[0]||(u[0]=d=>m("click",d))},[e.icon?(l(),k(h,{key:0,class:a([n.$style.icon,e.iconClass]),icon:e.icon},null,8,["class","icon"])):i("",!0),e.text?(l(),r("span",{key:1,class:a(n.$style.text)},C(e.text),3)):i("",!0)],2))}}),S={$style:j};var A=y(z,[["__cssModules",S]]);export{A as B};