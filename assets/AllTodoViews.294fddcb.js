import{d as f,I as T,Z as P,_ as g,r as d,o as n,l as h,g as B,V as q,e as o,f as c,t as A,j as C,v as L,a as b,c as l,p as E,k as N,B as z,S as j,u as H,s as k,z as R,x as I,F as S,y as O}from"./index.6b721bd6.js";import{A as Z}from"./AppModal.3961ff28.js";import{A as x}from"./AppEmptyState.513176b4.js";import{u as w}from"./todo.d60ee802.js";let u=!0;const G=f({name:"AppTodoItem",components:{Icon:T,AppListItem:P},data:()=>({}),props:{todo:{type:Object,required:!0,default:()=>({title:"Todo title",description:"Todo description"})}},computed:{isSelected(){return u},priority(){const e=this.todo.priority.toLowerCase().trim();return e==="urgent"?"todo__item--urgent":e==="delicate"?"todo__item--delicate":e==="not-urgent"?"todo__item--not__urgent":e==="delete"?"todo__item--delete":"todo__item--normal"}},mounted(){const e=document.getElementsByClassName("todo__item"),t=1300;for(const s of e)s.addEventListener("mousedown",function(_){setTimeout(r,t);function r(){u=!1,console.log("long press ",u),s.classList.add("is__selected")}}),s.addEventListener("mouseup",function(_){setTimeout(r,t);function r(){console.log("long press"),s.classList.add("is__selected")}})}});const J={class:"todo__item"},K={class:"todo__item__header__actions__delete"},Q={class:"todo__item__header trim__text"},U={class:"todo__item__header__title"},W={class:"todo__item__content"},X={class:"trim__text"};function Y(e,t,s,_,r,v){const i=d("Icon"),a=d("AppListItem");return n(),h(a,{class:q(e.priority)},{default:B(()=>[o("div",J,[o("div",K,[c(i,{icon:"mdi:close-circle-outline",onClick:t[0]||(t[0]=p=>e.$emit("delete-todo"))})]),o("div",null,[o("div",Q,[o("div",U,[o("h3",null,A(e.todo.title),1)])]),o("div",W,[o("p",X,A(e.todo.description),1)])]),C(o("div",{class:"todo__item__header__actions",onClick:t[1]||(t[1]=p=>e.$emit("show-options"))},[c(i,{icon:"mdi:dots-vertical",class:"d-none"})],512),[[L,e.isSelected]])])]),_:1},8,["class"])}const ee=g(G,[["render",Y],["__scopeId","data-v-7bcf3f8b"]]),oe=f({name:"AppEmptyState",props:{message:{type:String,default:"There is error in your network connection. Please check your connection and try again."}},components:{BaseButton:b,Icon:T},methods:{refreshPage(){window.location.reload()}}}),te="/assets/network-error.3fc7fca8.svg";const se=e=>(E("data-v-cec126d1"),e=e(),N(),e),ne={class:"network__error"},de=se(()=>o("img",{src:te,alt:"empty state"},null,-1)),re=["innerHTML"];function ie(e,t,s,_,r,v){const i=d("Icon"),a=d("BaseButton");return n(),l("div",ne,[de,o("div",null,[o("p",{innerHTML:e.message},null,8,re)]),c(a,{text:"refresh",class:"refresh__button",onClick:e.refreshPage},{default:B(()=>[c(i,{icon:"mdi:refresh"})]),_:1},8,["onClick"])])}const ae=g(oe,[["render",ie],["__scopeId","data-v-cec126d1"]]),ce=f({name:"TodoView",components:{BaseButton:b,Icon:T,AppModal:Z,BaseTextInput:z,AppEmptyState:x,AppTodoItem:ee,AppNetworkError:ae,Spinner:j},data:()=>({showTodoModal:!1,todo:{title:"",description:"",date:"",priority:""}}),mounted(){console.log("mounted")},created(){this.makeTodoRequest(),console.log("created hook")},methods:{...H(w,{makeTodoRequest:"fetchAllTodo",createTodo:"createTodo",deleteTodo:"deleteTodo"}),async makeCreateTodo(){this.createTodo({...this.todo}),this.showTodoModal=!1},editTodo(e){this.$router.push({name:"edit-todo",params:{noteId:String(e)}})}},computed:{...k(w,["todoArray","isLoading","isFetchingTodoArray","errorFetchingTodo"]),...k(R,{bearerToken:"authorizationToken"}),disabledState(){return this.isLoading===!0}}});const _e=e=>(E("data-v-0144a6cb"),e=e(),N(),e),le={class:"fetching__todo"},pe=_e(()=>o("p",null,"fetching tasks",-1)),me={key:1};function ue(e,t,s,_,r,v){var y,$;const i=d("Spinner"),a=d("AppEmptyState"),p=d("AppTodoItem");return n(),l(S,null,[C(o("div",le,[c(i),pe],512),[[L,e.isFetchingTodoArray]]),((y=e.todoArray)==null?void 0:y.length)==0?(n(),h(a,{key:0})):I("",!0),Number(($=e.todoArray)==null?void 0:$.length)>0&&!e.isFetchingTodoArray?(n(),l("div",me,[(n(!0),l(S,null,O(e.todoArray,({title:V,description:F,id:m,priority:M})=>(n(),h(p,{todo:{title:V,description:F,id:m,priority:M},onDeleteTodo:D=>e.deleteTodo(m),onClick:D=>e.editTodo(m)},null,8,["todo","onDeleteTodo","onClick"]))),256))])):I("",!0)],64)}const ve=g(ce,[["render",ue],["__scopeId","data-v-0144a6cb"]]);export{ve as default};
