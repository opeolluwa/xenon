import{d as f,B as h,a as g,S as v,_ as B,r as t,o as w,c as b,e as s,t as R,w as S,f as a,g as i,i as l,j as d,v as r,p as V,k}from"./index.6b721bd6.js";const y=f({name:"AuthView",components:{BaseTextInput:h,BaseButton:g,Spinner:v},data:()=>({form:{email:""},isLoading:!1,apiResponse:{message:"",token:""}}),computed:{disabledState(){return this.isLoading===!0},apiResponseMsg(){return this.apiResponse.message}},methods:{requestPasswordReset(){console.log("requested"),this.$router.push({name:"confirm-otp"})},goBack(){this.$router.go(-1)}}});const p=e=>(V("data-v-34dab7eb"),e=e(),k(),e),I={id:"password__reset__page"},L={class:"container"},P=p(()=>s("div",null,null,-1)),$=p(()=>s("div",{class:"title"},[s("h1",null,"Account Recovery"),s("p",{class:"sub__hero__text"}," Please provide your registered email address. ")],-1)),x={class:"error"},T={class:"goto__sign__up"},q=l("Already have an account? "),C=l("Login ");function A(e,o,M,N,D,j){const u=t("BaseTextInput"),_=t("Spinner"),c=t("BaseButton"),m=t("RouterLink");return w(),b("div",I,[s("div",L,[P,s("div",null,[$,s("small",x,R(e.apiResponseMsg),1),s("form",{action:"",method:"post",onSubmit:o[1]||(o[1]=S((...n)=>e.requestPasswordReset&&e.requestPasswordReset(...n),["prevent"]))},[a(u,{placeholder:"example@mailer.com",label:"email",modelValue:e.form.email,"onUpdate:modelValue":o[0]||(o[0]=n=>e.form.email=n),type:"email",class:"field"},null,8,["modelValue"]),a(c,{text:"",disabled:e.disabledState},{default:i(()=>[d(s("span",null,"Continue",512),[[r,!e.isLoading]]),d(a(_,{"animation-duration":1e3,size:30,color:"#ffffff"},null,512),[[r,e.isLoading]])]),_:1},8,["disabled"]),s("small",T,[q,a(m,{to:{name:"login"}},{default:i(()=>[C]),_:1})])],32)])])])}const E=B(y,[["render",A],["__scopeId","data-v-34dab7eb"]]);export{E as default};
