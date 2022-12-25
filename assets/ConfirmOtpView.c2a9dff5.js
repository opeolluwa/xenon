import{d as I,Z as O,V as $,s as q,B as R,S as A,l as F,q as H,_ as P,r as a,o as m,c as _,a as e,t as y,v as X,b as r,w as f,g as x,f as l,A as M,D as b,p as z,e as U}from"./index.a834be1f.js";/*! vue-countdown v2.1.0 | (c) 2018-present Chen Fengyuan | MIT */const u=1e3,d=60*u,h=60*d,S=24*h,v="abort",E="end",w="progress",C="start",T="visibilitychange";var G=I({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:t=>t>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:t=>t>=0},transform:{type:Function,default:t=>t}},emits:[v,E,w,C],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/S)},hours(){return Math.floor(this.totalMilliseconds%S/h)},minutes(){return Math.floor(this.totalMilliseconds%h/d)},seconds(){return Math.floor(this.totalMilliseconds%d/u)},milliseconds(){return Math.floor(this.totalMilliseconds%u)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/h)},totalMinutes(){return Math.floor(this.totalMilliseconds/d)},totalSeconds(){return Math.floor(this.totalMilliseconds/u)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(T,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(T,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit(C),document.visibilityState==="visible"&&this.continue())},continue(){if(!this.counting)return;const t=Math.min(this.totalMilliseconds,this.interval);if(t>0){let s,i;const c=n=>{s||(s=n),i||(i=n);const p=n-s;p>=t||p+(n-i)/2>=t?this.progress():this.requestId=requestAnimationFrame(c),i=n};this.requestId=requestAnimationFrame(c)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){!this.counting||(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit(w,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){!this.counting||(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(v))},end(){!this.counting||(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(E))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},restart(){this.pause(),this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.counting=!1,this.start()},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return O(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}});const g=$(),Y=I({name:"AuthView",components:{BaseTextInput:q,BaseButton:R,Spinner:A,VueCountdown:G},data:()=>({form:{otp:""},isLoading:!1,counting:!1,inputFieldProps:{pattern:"[0-9]",type:"number"},apiResponse:{message:"",token:""}}),computed:{disabledState(){return this.isLoading===!0},apiResponseMsg(){return this.apiResponse.message}},methods:{requestPasswordReset(){console.log("requested")},requestNewToken(){console.log("requested")},startCountdown:function(){this.counting=!0},onCountdownEnd:function(){this.counting=!1},async confirmOtp(){try{const{otp:t}=this.form,s=await F("confirm-account-token");this.isLoading=!0;const{data:i}=await H.post("/auth/verify-email",{token:t},{headers:{Authorization:`Bearer ${s}`}});if(console.log(JSON.stringify(i)),i.success){this.$router.push({name:"login"}),g.success(i.message);return}else g.error(i.message);this.isLoading=!1}catch(t){this.isLoading=!1;const{data:s}=t.response;s.success||g.error(s.message)}},goBack(){this.$router.go(-1)}}});const B=t=>(z("data-v-1b2b1230"),t=t(),U(),t),J={id:"password__reset__confirm__otp__page"},Z={class:"container"},j=B(()=>e("div",null,null,-1)),K=B(()=>e("div",{class:"title"},[e("h1",null,"Confirm OTP"),e("p",{class:"sub__hero__text"},"Confirm the token sent to your email")],-1)),Q={class:"error"},W={style:{"font-size":"13px"}},tt={key:1,class:"goto__sign__up"},st={class:"goto__sign__up"};function et(t,s,i,c,n,p){const V=a("BaseTextInput"),L=a("Spinner"),k=a("BaseButton"),N=a("VueCountdown"),D=a("RouterLink");return m(),_("div",J,[e("div",Z,[j,e("div",null,[K,e("small",Q,y(t.apiResponseMsg),1),e("form",{action:"",method:"post",onSubmit:s[2]||(s[2]=X((...o)=>t.confirmOtp&&t.confirmOtp(...o),["prevent"]))},[r(V,{placeholder:"XXXXXX",label:"Token",modelValue:t.form.otp,"onUpdate:modelValue":s[0]||(s[0]=o=>t.form.otp=o),type:"text",maxlength:6,class:"field","input-attributes":t.inputFieldProps,disabled:t.counting||t.isLoading},null,8,["modelValue","input-attributes","disabled"]),r(k,{text:"",disabled:t.disabledState},{default:f(()=>[M(e("span",null,"Proceed",512),[[b,!t.isLoading]]),M(r(L,{"animation-duration":1e3,size:30,color:"#ffffff"},null,512),[[b,t.isLoading]])]),_:1},8,["disabled"]),t.counting?(m(),x(N,{key:0,time:6e4,onEnd:t.onCountdownEnd,style:{color:"var(--secondary)"}},{default:f(({seconds:o})=>[e("small",null,[l(" Request new OTP after "),e("strong",W,y(o),1),l(" seconds. ")])]),_:1},8,["onEnd"])):(m(),_("button",tt,[l(" Didn't receive any token? "),e("small",{class:"emphasis",style:{"font-size":"13px"},onClick:s[1]||(s[1]=(...o)=>t.startCountdown&&t.startCountdown(...o))},"request new ")]))],32),e("button",st,[l(" Go back "),r(D,{to:{name:"sign-up"},class:"emphasis",style:{"font-size":"13px"}},{default:f(()=>[l("Sign Up ")]),_:1})])])])])}const ot=P(Y,[["render",et],["__scopeId","data-v-1b2b1230"]]);export{ot as default};
