import{a as u,I as _,B as f,_ as j,r as s,o as w,c as P,e as c,f as e,g as l,j as B,v,F as I}from"./index.6b721bd6.js";import{A as h}from"./AppModal.3961ff28.js";import{A}from"./AppEmptyState.513176b4.js";const M={name:"ProjectView",components:{BaseButton:u,Icon:_,AppModal:h,BaseTextInput:f,AppEmptyState:A},data:()=>({showProjectModal:!1,addProject:{name:"",description:"",url:"",image:"",github:"",technologies:""}})};const b={class:"header"};function g(t,o,y,$,x,C){const r=s("IconPlus"),a=s("BaseButton"),p=s("AppEmptyState"),i=s("Icon"),n=s("BaseTextInput"),m=s("AppModal");return w(),P(I,null,[c("div",b,[e(a,{text:"add new",class:"add-new-button",onClick:o[0]||(o[0]=d=>t.showProjectModal=!0)},{default:l(()=>[e(r)]),_:1})]),e(p),e(a,{text:"",class:"add-new-fab",onClick:o[1]||(o[1]=d=>t.showProjectModal=!0)},{default:l(()=>[e(i,{icon:"mdi:plus"})]),_:1}),B(e(m,{onCloseModal:o[3]||(o[3]=d=>t.showProjectModal=!1),title:"Add New Project"},{content:l(()=>[c("form",{action:"",onClick:o[2]||(o[2]=()=>{})},[e(n,{label:"name",type:"text",placeholder:"project name",model:t.addProject.name,class:"field"},null,8,["model"]),e(n,{placeholder:" project description",label:"description",model:t.addProject.description,class:"field"},null,8,["model"]),e(n,{placeholder:"github url",label:"Repository URL",model:t.addProject.description,class:"field"},null,8,["model"]),e(a,{text:"add project",class:"field"})])]),_:1},512),[[v,t.showProjectModal]])],64)}const S=j(M,[["render",g],["__scopeId","data-v-c3d70c54"]]);export{S as default};
