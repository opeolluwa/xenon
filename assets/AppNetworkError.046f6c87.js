import{d as c,B as a,I as p,_,r as t,o as d,c as i,a as o,b as s,w as l,p as m,e as u}from"./index.6a4c3616.js";const f=c({name:"AppEmptyState",props:{message:{type:String,default:"There is error in your network connection. Please check your connection and try again."}},components:{BaseButton:a,Icon:p},methods:{refreshPage(){window.location.reload()}}}),h="/assets/network-error.3fc7fca8.svg";const k=e=>(m("data-v-cec126d1"),e=e(),u(),e),w={class:"network__error"},B=k(()=>o("img",{src:h,alt:"empty state"},null,-1)),g=["innerHTML"];function v(e,y,I,C,S,x){const n=t("Icon"),r=t("BaseButton");return d(),i("div",w,[B,o("div",null,[o("p",{innerHTML:e.message},null,8,g)]),s(r,{text:"refresh",class:"refresh__button",onClick:e.refreshPage},{default:l(()=>[s(n,{icon:"mdi:refresh"})]),_:1},8,["onClick"])])}const E=_(f,[["render",v],["__scopeId","data-v-cec126d1"]]);export{E as A};
