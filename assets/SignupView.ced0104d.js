import{d as h,B as w,a as S,S as B,b as V,_ as b,r as i,o as y,c as L,e,t as U,w as I,f as n,g as p,h as R,i as u,j as r,v as m,p as k,k as M}from"./index.6b721bd6.js";import{_ as N,a as T,b as $}from"./twitter.b4c20ffe.js";const C=h({name:"AuthView",components:{BaseTextInput:w,BaseButton:S,Spinner:B},data:()=>({form:{email:"",password:"",fullname:""},isLoading:!1,apiResponseMsg:""}),methods:{async signUp(){this.isLoading=!0;const{email:a,password:s,fullname:d}=this.form;try{const{data:t}=await V.post("/auth/sign-up",{email:a,fullname:d,password:s});console.log(JSON.stringify(t)),this.apiResponseMsg=t.message,this.isLoading=!1}catch(t){const c=t.response.data;console.log({error:t.response.data}),this.apiResponseMsg=c.message,this.isLoading=!1}}},computed:{disabledState(){return this.isLoading===!0}}});const _=a=>(k("data-v-6c66ac42"),a=a(),M(),a),D={id:"sign__up__page"},j={class:"container"},x=_(()=>e("div",null,null,-1)),A=R('<div class="title" data-v-6c66ac42><h1 data-v-6c66ac42>Sign Up</h1><p class="sub__her__text" data-v-6c66ac42>Proceed with your social account</p></div><div class="social__login__icons" data-v-6c66ac42><div class="icon" data-v-6c66ac42><img src="'+N+'" alt="google" data-v-6c66ac42></div><div class="icon" data-v-6c66ac42><img src="'+T+'" alt="github" data-v-6c66ac42></div><div class="icon" data-v-6c66ac42><img src="'+$+'" alt="twitter" data-v-6c66ac42></div></div><small class="continue__with__email" data-v-6c66ac42><span class="divider__line" data-v-6c66ac42> ------------------ </span><span data-v-6c66ac42> continue with email </span><span class="divider__line" data-v-6c66ac42> ---------------- </span></small>',3),J={class:"error"},z=_(()=>e("hr",null,null,-1)),E={class:"goto__sign__up"},O=u("Already have an account? "),P=u("Login ");function q(a,s,d,t,c,F){const l=i("BaseTextInput"),f=i("Spinner"),g=i("BaseButton"),v=i("RouterLink");return y(),L("div",D,[e("div",j,[x,e("div",null,[A,e("small",J,U(a.apiResponseMsg),1),e("form",{action:"",method:"post",onSubmit:s[3]||(s[3]=I((...o)=>a.signUp&&a.signUp(...o),["prevent"]))},[n(l,{placeholder:"Jane Doe",label:"fullname",modelValue:a.form.fullname,"onUpdate:modelValue":s[0]||(s[0]=o=>a.form.fullname=o),type:"text",class:"field"},null,8,["modelValue"]),n(l,{placeholder:"jane@mailer.com",label:"email",modelValue:a.form.email,"onUpdate:modelValue":s[1]||(s[1]=o=>a.form.email=o),type:"email",class:"field"},null,8,["modelValue"]),n(l,{placeholder:"password",type:"password",label:"password",modelValue:a.form.password,"onUpdate:modelValue":s[2]||(s[2]=o=>a.form.password=o),class:"field"},null,8,["modelValue"]),n(g,{text:"",disabled:a.disabledState},{default:p(()=>[r(e("span",null,"Sign Up",512),[[m,!a.isLoading]]),r(n(f,{"animation-duration":1e3,size:30,color:"#ffffff"},null,512),[[m,a.isLoading]])]),_:1},8,["disabled"])],32),z,e("small",E,[O,n(v,{to:{name:"login"}},{default:p(()=>[P]),_:1})])])])])}const K=b(C,[["render",q],["__scopeId","data-v-6c66ac42"]]);export{K as default};
