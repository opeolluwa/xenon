import{d as B,B as h,s as b,m as w,h as y,_ as v,r as a,o as d,c as r,b as s,g as V,a as n,A as l,C as S,w as g,v as C,D as i,p as M,e as N}from"./index.6a4c3616.js";import{B as k}from"./BaseTextarea.8f11b227.js";import{E as T}from"./style.24b26588.js";import{u}from"./notes.c1806401.js";const I=B({name:"CreateNewNoteEntry",data:()=>({note:{title:"",content:""},useMdEditor:!1,mdToolBarExclude:["github"]}),components:{BaseButton:h,BaseTextInput:b,BaseTextarea:k,MdEditor:T},methods:{...w(u,["createNewEntry"]),async addEntry(){await this.createNewEntry({...this.note})&&(Object.assign(this.note,{title:"",content:""}),this.$router.replace({name:"all-notes"}))}},computed:{...y(u,["isLoading"]),disabledState(){return this.isLoading===!0}}});const p=e=>(M("data-v-65485a7d"),e=e(),N(),e),U={key:1,id:"md__editor"},x=p(()=>n("label",{for:"Content"},"Content",-1)),$={id:"editor__type"},L=["toolbarsExclude"],R=p(()=>n("label",{for:"editor-style"},"Use Markdown Editor",-1));function q(e,t,A,D,j,z){const m=a("BaseTextInput"),c=a("BaseTextarea"),f=a("MdEditor"),E=a("Spinner"),_=a("BaseButton");return d(),r("form",{onSubmit:t[4]||(t[4]=C((...o)=>e.addEntry&&e.addEntry(...o),["prevent"]))},[s(m,{label:"title",type:"text",placeholder:"Ex: how to create repo",modelValue:e.note.title,"onUpdate:modelValue":t[0]||(t[0]=o=>e.note.title=o),class:"field"},null,8,["modelValue"]),e.useMdEditor?(d(),r("div",U,[x,s(f,{modelValue:e.note.content,"onUpdate:modelValue":t[2]||(t[2]=o=>e.note.content=o),preview:!1,language:"en-US",placeholder:"provide note details here",style:{"margin-bottom":"20px"}},null,8,["modelValue"])])):(d(),V(c,{key:0,placeholder:"provide note details here",label:"content",modelValue:e.note.content,"onUpdate:modelValue":t[1]||(t[1]=o=>e.note.content=o)},null,8,["modelValue"])),n("div",$,[l(n("input",{type:"checkbox",name:"editor-style",id:"","onUpdate:modelValue":t[3]||(t[3]=o=>e.useMdEditor=o),toolbarsExclude:e.mdToolBarExclude,showCodeRowNumber:!0},null,8,L),[[S,e.useMdEditor]]),R]),s(_,{text:"",disabled:e.disabledState},{default:g(()=>[l(n("span",null,"Update Password",512),[[i,!e.isLoading]]),l(s(E,{"animation-duration":1e3,size:30,color:"#101010"},null,512),[[i,e.isLoading]])]),_:1},8,["disabled"])],32)}const H=v(I,[["render",q],["__scopeId","data-v-65485a7d"]]);export{H as default};
