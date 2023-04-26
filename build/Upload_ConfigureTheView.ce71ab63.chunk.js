"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[9514],{87532:(st,v,t)=>{t.r(v),t.d(v,{default:()=>X});var e=t(67294),h=t(86896),z=t(18446),B=t.n(z),N=t(45697),d=t.n(N),I=t(17034),O=t(185),W=t(53979),$=t(29728),P=t(49066),r=t(81849),G=t(67109),y=t(85018),H=t(41580),b=t(11276),E=t(74571),p=t(48302),C=t(82562),l=t(15537),D=t(49826);const S=({sort:s="",pageSize:i=10,onChange:n})=>{const{formatMessage:o}=(0,h.Z)();return e.createElement(H.x,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(b.r,{gap:4},e.createElement(E.P,{s:12,col:6},e.createElement(p.P,{label:o({id:(0,l.Z)("config.entries.title"),defaultMessage:"Entries per page"}),hint:o({id:(0,l.Z)("config.entries.note"),defaultMessage:"Number of assets displayed by default in the Media Library"}),onChange:a=>n({target:{name:"pageSize",value:a}}),name:"pageSize",value:i,"test-pageSize":i,"data-testid":"pageSize-select"},D.ay.map(a=>e.createElement(C.W,{"data-testid":`pageSize-option-${a}`,key:a,value:a},a)))),e.createElement(E.P,{s:12,col:6},e.createElement(p.P,{label:o({id:(0,l.Z)("config.sort.title"),defaultMessage:"Default sort order"}),hint:o({id:(0,l.Z)("config.note"),defaultMessage:"Note: You can override this value in the media library."}),onChange:a=>n({target:{name:"sort",value:a}}),name:"sort",value:s,"test-sort":s,"data-testid":"sort-select"},D.Fo.map(a=>e.createElement(C.W,{"data-testid":`sort-option-${a.value}`,key:a.key,value:a.value},o({id:(0,l.Z)(a.key),defaultMessage:`${a.value}`})))))))};S.propTypes={sort:d().string.isRequired,pageSize:d().number.isRequired,onChange:d().func.isRequired};var U=t(18172),j=t(36968),x=t.n(j),F=t(27361),V=t.n(F),m=t(55994);const Z=`${m.Z}/ON_CHANGE`,M=`${m.Z}/SET_LOADED`,c={initialData:{},modifiedData:{}},L=s=>({...c,initialData:s,modifiedData:s}),Q=(s=c,i)=>(0,U.ZP)(s,n=>{switch(i.type){case Z:{x()(n,["modifiedData",...i.keys.split(".")],i.value);break}case M:{const o=L(V()(n,["modifiedData"],{}));n.initialData=o.initialData,n.modifiedData=o.modifiedData;break}default:return n}}),Y=({name:s,value:i})=>({type:Z,keys:s,value:i}),J=()=>({type:M});var K=t(60862);const T=({config:s})=>{const{trackUsage:i}=(0,r.rS)(),{formatMessage:n}=(0,h.Z)(),o=(0,r.lm)(),{mutateConfig:a}=(0,K.Z)(),{isLoading:A}=a,[k,w]=(0,e.useState)(!1),f=()=>w(g=>!g),[q,R]=(0,e.useReducer)(Q,c,()=>L(s)),{initialData:_,modifiedData:u}=q,tt=g=>{g.preventDefault(),f()},et=async()=>{i("willEditMediaLibraryConfig"),await a.mutateAsync(u),f(),R(J()),o({type:"success",message:{id:"notification.form.success.fields",defaultMessage:"Changes saved"}})},at=({target:{name:g,value:nt}})=>{R(Y({name:g,value:nt}))};return(0,r.go)(),e.createElement(I.A,null,e.createElement(O.o,{"aria-busy":A},e.createElement("form",{onSubmit:tt},e.createElement(W.T,{navigationAction:e.createElement(r.rU,{startIcon:e.createElement(G.Z,null),to:`/plugins/${m.Z}`,id:"go-back"},n({id:(0,l.Z)("config.back"),defaultMessage:"Back"})),primaryAction:e.createElement($.z,{size:"S",startIcon:e.createElement(y.Z,null),disabled:B()(u,_),type:"submit"},n({id:"global.save",defaultMessage:"Save"})),subtitle:n({id:(0,l.Z)("config.subtitle"),defaultMessage:"Define the view settings of the media library."}),title:n({id:(0,l.Z)("config.title"),defaultMessage:"Configure the view - Media Library"})}),e.createElement(P.D,null,e.createElement(S,{"data-testid":"settings",pageSize:u.pageSize||"",sort:u.sort||"",onChange:at})),e.createElement(r.QH,{bodyText:{id:(0,l.Z)("config.popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:e.createElement(y.Z,null),isConfirmButtonLoading:A,isOpen:k,onToggleDialog:f,onConfirm:et,variantRightButton:"success-light"}))))};T.propTypes={config:d().shape({pageSize:d().number,sort:d().string}).isRequired};const X=T}}]);
