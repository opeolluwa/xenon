import{B as u,I as _,f,_ as w,r as s,o as j,a as B,b as c,e,w as l,j as P,v as h,F as v}from"./index.946627cc.js";import{A as I,a as M}from"./AppEmptyState.affe5d6e.js";const b={name:"ProjectView",components:{BaseButton:u,Icon:_,AppModal:I,BaseTextInput:f,AppEmptyState:M},data:()=>({showProjectModal:!1,addProject:{name:"",description:"",url:"",image:"",github:"",technologies:""}})};const A={class:"header"};function y(o,t,$,g,x,C){const p=s("IconPlus"),a=s("BaseButton"),r=s("AppEmptyState"),i=s("Icon"),n=s("BaseTextInput"),m=s("AppModal");return j(),B(v,null,[c("div",A,[e(a,{text:"add new",class:"add-new-button",onClick:t[0]||(t[0]=d=>o.showProjectModal=!0)},{default:l(()=>[e(p)]),_:1})]),e(r),e(a,{text:"",class:"add-new-fab",onClick:t[1]||(t[1]=d=>o.showProjectModal=!0)},{default:l(()=>[e(i,{icon:"mdi:plus"})]),_:1}),P(e(m,{onCloseModal:t[2]||(t[2]=d=>o.showProjectModal=!1),title:"Add New Project"},{content:l(()=>[c("form",null,[e(n,{label:"name",type:"text",placeholder:"project name",model:o.addProject.name,class:"field"},null,8,["model"]),e(n,{placeholder:" project description",label:"description",model:o.addProject.description,class:"field"},null,8,["model"]),e(n,{placeholder:"github url",label:"Repository URL",model:o.addProject.description,class:"field"},null,8,["model"]),e(a,{text:"add project",class:"field"})])]),_:1},512),[[h,o.showProjectModal]])],64)}const k=w(b,[["render",y],["__scopeId","data-v-36626892"]]);export{k as default};
