import{m}from"./tools-cdd47e6d.js";import{f as l,j as d,L as a,l as u,r as p,o as C,M as _,w as f,a as y}from"./app-3e6d2d9d.js";import{_ as w}from"./plugin-vue_export-helper-c27b6911.js";import"./commonjsHelpers-de833af9.js";const h=y("div",{class:"none"},"评论区隐藏按钮",-1),B=l({__name:"CommentHideBtn",setup(E){const s=()=>{const e=document.querySelector(".waline-wrapper");e&&(e.classList.add("show"),e.classList.remove("hide"),m.set("CommentIsDisplay",!0))},c=()=>{const e=document.querySelector(".waline-wrapper");e&&(e.classList.add("hide"),e.classList.remove("show"),m.set("CommentIsDisplay",!1))},i=()=>{const e=document.querySelector(".waline-wrapper");if(!e)return;m.get("CommentIsDisplay")?s():c(),e.style.opacity="1"},r=()=>{const e=document.querySelector(".waline-wrapper");if(!e)return;if(!document.getElementById("ShowComment")){const t=document.createElement("button");t.id="ShowComment",t.innerHTML="显示评论区",e.appendChild(t)}if(!document.getElementById("HideComment")){const t=document.createElement("button");t.id="HideComment",t.innerHTML="隐藏评论区",e.appendChild(t)}const n=document.getElementById("ShowComment"),o=document.getElementById("HideComment");n&&o&&(n.onclick=s,o.onclick=c)};return d(()=>{a(()=>{r(),i()}),u().beforeEach(n=>{a(()=>{setTimeout(()=>{r(),i()},500)})})}),(e,n)=>{const o=p("ClientOnly");return C(),_(o,null,{default:f(()=>[h]),_:1})}}});const v=w(B,[["__file","CommentHideBtn.vue"]]);export{v as default};
