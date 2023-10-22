import{f as o,j as t,r as c,o as a,M as r,w as i,a as l}from"./app-3e6d2d9d.js";import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";const d="1coins-blog",u="1.4.0",h="乾元的个人博客",v="MIT",_="module",b={build:"vuepress build src",dev:"vuepress dev src --clean-cache",preview:"go run ./shell/main.go",update:"pnpm dlx vp-update","deploy-blog":"bash ./shell/deploy-blog.sh","sync-blog":"bash ./shell/sync-blog.sh","deploy-git":"bash ./shell/deploy-git.sh","sync-git":"bash ./shell/sync-git.sh"},g={"@vuepress/client":"2.0.0-beta.66",aplayer:"^1.10.1",axios:"^1.4.0",vue:"^3.3.4",vuepress:"2.0.0-beta.66","vuepress-theme-hope":"2.0.0-beta.235"},m={"@types/store":"^2.0.2",store:"^2.0.12","vue-router":"^4.2.4","vuepress-plugin-search-pro":"2.0.0-beta.235"},y={name:d,version:u,description:h,license:v,type:_,scripts:b,devDependencies:g,dependencies:m},f=l("div",{class:"none"},"版本打印",-1),x=`   
███╗   ███╗ ██████╗ ███████╗
████╗ ████║██╔═══██╗╚════██║
██╔████╔██║██║   ██║    ██╔╝
██║╚██╔╝██║██║   ██║   ██╔╝ 
██║ ╚═╝ ██║╚██████╔╝   ██║  
╚═╝     ╚═╝ ╚═════╝    ╚═╝`,P=o({__name:"PrintVersion",setup(C){const e=()=>{console.info(x+y.version)};return t(()=>{e()}),(s,k)=>{const n=c("ClientOnly");return a(),r(n,null,{default:i(()=>[f]),_:1})}}}),w=p(P,[["__file","PrintVersion.vue"]]);export{w as default};
