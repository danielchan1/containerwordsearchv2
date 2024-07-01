(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7957:function(e,t,n){Promise.resolve().then(n.bind(n,9315))},9315:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7437),o=n(2265),i=n(6463),s=e=>{let{onSubmit:t}=e;var n=(0,i.useSearchParams)().get("prompt");let o=async e=>{let r=new FormData(e.currentTarget).get("prompt");n||(n=""),r&&r!=n&&t(r)};return(0,r.jsx)("form",{onSubmit:o,children:(0,r.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,r.jsxs)("label",{style:{marginRight:"10px"},children:["Enter a prompt:",(0,r.jsx)("input",{type:"text",name:"prompt",style:{marginLeft:"10px",padding:"5px",borderRadius:"4px",border:"1px solid #ccc",minWidth:"200px"},maxLength:3,minLength:2,required:!0})]}),(0,r.jsx)("button",{type:"submit",style:{padding:"5px 10px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Search"})]})})};n(4378);var a=e=>{let{show:t,onClose:n,content:o}=e;return t?(0,r.jsx)("div",{className:"modal-overlay",children:(0,r.jsxs)("div",{className:"modal-content",children:[(0,r.jsx)("h2",{children:o[0]}),(0,r.jsx)("p",{children:o[1]}),(0,r.jsx)("button",{onClick:n,children:"Close"})]})}):null},l=n(6648);function c(){let e="https://containerwordsearch.pythonanywhere.com",t=(0,i.useRouter)(),[n,c]=(0,o.useState)(null),[d,h]=(0,o.useState)([]),[u,p]=(0,o.useState)(null),[f,x]=(0,o.useState)(!0),[m,g]=(0,o.useState)(!1),[j,y]=(0,o.useState)(null),[b,w]=(0,o.useState)(!1),S=async t=>{try{let n=await fetch("".concat(e,"/api/search"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:t})});if(!n.ok)throw Error("Network response failed.");let r=await n.json();h(r)}catch(e){console.error("Error fetching words:",e),y("There was a problem with the fetch operation: ".concat(e))}finally{x(!1)}},v=async t=>{p(null),g(!0);try{let n=await fetch("".concat(e,"/api/definition?word=").concat(t.toLowerCase()));if(!n.ok)throw Error("HTTP error! Status: ".concat(n.status));let r=(await n.json()).definition;r?p([t,r]):p([t,"Definition not found."])}catch(e){console.error("Error fetching definition:",e),p([t,"Error fetching definition."])}},C=()=>{g(!1)};(0,o.useEffect)(()=>{let e=new URLSearchParams(location.search).get("prompt");e&&(c(e),k(n))},[]),(0,o.useEffect)(()=>{if(n)k(n),S(n);else{x(!1);return}},[n]);let k=e=>{document.title="Container Word Search",e&&(document.title+=" - ".concat(e))};return(0,r.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-between",children:(0,r.jsxs)("div",{style:{fontFamily:"Arial, sans-serif",maxWidth:"600px",margin:"auto",padding:"20px"},children:[(0,r.jsx)("button",{onClick:()=>{y(null),c(null),h([]),C(),k(null),t.push("/")},children:(0,r.jsx)("h1",{style:{marginBottom:"20px",fontSize:"30px"},children:"Container Word Search"})}),(0,r.jsx)(o.Suspense,{children:(0,r.jsx)(s,{onSubmit:e=>{x(!0),y(null),h([]),C(),t.push("/?prompt=".concat(e))}})}),f&&(0,r.jsx)("div",{children:"Loading..."}),j&&(0,r.jsxs)("div",{children:["Error: ",j]}),!f&&!j&&(0,r.jsxs)("div",{children:[n&&(0,r.jsxs)("h2",{style:{marginTop:"20px"},children:["Words ",n?"containing":""," ",n," (",d.length," found)",d.length>0?":":""]}),(0,r.jsx)("ul",{style:{listStyleType:"none",padding:"0"},children:d.map((e,t)=>(0,r.jsx)("li",{style:{marginBottom:"5px",backgroundColor:"#f0f0f0",padding:"10px",borderRadius:"4px"},children:(0,r.jsx)("button",{onClick:()=>v(e),children:e.toLowerCase()})},t))})]}),(0,r.jsx)(a,{show:m,onClose:C,content:u||["","Loading..."]}),(0,r.jsx)("button",{onClick:()=>{window.scroll({top:b?0:document.body.offsetHeight,left:0,behavior:"smooth"}),w(!b)},style:{position:"fixed",bottom:"20px",left:"50%",background:"transparent",border:"none",cursor:"pointer"},children:(0,r.jsx)(l.default,{src:b?"/up.svg":"/down.svg",alt:"",width:24,height:24})})]})})}},4378:function(){}},function(e){e.O(0,[563,595,971,23,744],function(){return e(e.s=7957)}),_N_E=e.O()}]);