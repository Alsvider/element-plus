import{g as r,aa as t,M as $,_,r as p,o as u,c as m,a as i,w as n,F as g,d as s,f as h}from"./app.22a8c146.js";const b=r({setup(){return{open1:()=>{t({title:"Title",message:$("i",{style:"color: teal"},"This is a reminder")})},open2:()=>{t({title:"Prompt",message:"This is a message that does not automatically close",duration:0})}}}}),C=s(" Closes automatically "),k=s(" Won't close automatically ");function T(e,a,l,c,f,d){const o=p("el-button");return u(),m(g,null,[i(o,{plain:"",onClick:e.open1},{default:n(()=>[C]),_:1},8,["onClick"]),i(o,{plain:"",onClick:e.open2},{default:n(()=>[k]),_:1},8,["onClick"])],64)}var S=_(b,[["render",T]]),Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const y=r({setup(){return{open1:()=>{t({title:"Success",message:"This is a success message",type:"success"})},open2:()=>{t({title:"Warning",message:"This is a warning message",type:"warning"})},open3:()=>{t({title:"Info",message:"This is an info message",type:"info"})},open4:()=>{t({title:"Error",message:"This is an error message",type:"error"})}}}}),v=s(" Success "),M=s(" Warning "),w=s(" Info "),j=s(" Error ");function I(e,a,l,c,f,d){const o=p("el-button");return u(),m(g,null,[i(o,{plain:"",onClick:e.open1},{default:n(()=>[v]),_:1},8,["onClick"]),i(o,{plain:"",onClick:e.open2},{default:n(()=>[M]),_:1},8,["onClick"]),i(o,{plain:"",onClick:e.open3},{default:n(()=>[w]),_:1},8,["onClick"]),i(o,{plain:"",onClick:e.open4},{default:n(()=>[j]),_:1},8,["onClick"])],64)}var z=_(y,[["render",I]]),Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});const H=r({setup(){return{open:()=>{t.success({title:"Info",message:"This is a message without close button",showClose:!1})}}}}),L=s(" Hide close button ");function O(e,a,l,c,f,d){const o=p("el-button");return u(),h(o,{plain:"",onClick:e.open},{default:n(()=>[L]),_:1},8,["onClick"])}var B=_(H,[["render",O]]),x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const P=r({setup(){return{open:()=>{t.success({title:"Success",message:"This is a success message",offset:100})}}}}),E=s(" Notification with offset ");function N(e,a,l,c,f,d){const o=p("el-button");return u(),h(o,{plain:"",onClick:e.open},{default:n(()=>[E]),_:1},8,["onClick"])}var W=_(P,[["render",N]]),ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});const F=r({setup(){return{open1:()=>{t({title:"Custom Position",message:"I'm at the top right corner"})},open2:()=>{t({title:"Custom Position",message:"I'm at the bottom right corner",position:"bottom-right"})},open3:()=>{t({title:"Custom Position",message:"I'm at the bottom left corner",position:"bottom-left"})},open4:()=>{t({title:"Custom Position",message:"I'm at the top left corner",position:"top-left"})}}}}),R=s(" Top Right "),U=s(" Bottom Right "),V=s(" Bottom Left "),q=s(" Top Left ");function A(e,a,l,c,f,d){const o=p("el-button");return u(),m(g,null,[i(o,{plain:"",onClick:e.open1},{default:n(()=>[R]),_:1},8,["onClick"]),i(o,{plain:"",onClick:e.open2},{default:n(()=>[U]),_:1},8,["onClick"]),i(o,{plain:"",onClick:e.open3},{default:n(()=>[V]),_:1},8,["onClick"]),i(o,{plain:"",onClick:e.open4},{default:n(()=>[q]),_:1},8,["onClick"])],64)}var D=_(F,[["render",A]]),oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const G=r({setup(){return{open:()=>{t({title:"HTML String",dangerouslyUseHTMLString:!0,message:"<strong>This is <i>HTML</i> string</strong>"})}}}}),J=s(" Use HTML String ");function K(e,a,l,c,f,d){const o=p("el-button");return u(),h(o,{plain:"",onClick:e.open},{default:n(()=>[J]),_:1},8,["onClick"])}var Q=_(G,[["render",K]]),te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});export{Y as _,Z as a,x as b,ee as c,oe as d,te as e};
