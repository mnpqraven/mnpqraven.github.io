var c=Object.defineProperty;var f=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var o=(n,e,t)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,p=(n,e)=>{for(var t in e||(e={}))l.call(e,t)&&o(n,t,e[t]);if(f)for(var t of f(e))h.call(e,t)&&o(n,t,e[t]);return n};import{e as s,f as C,h as i,C as g}from"./entry-3345d122.mjs";var S=s({props:{path:{type:String,required:!1,default:"/"},query:{type:Object,required:!1,default:void 0}},render(n){const e=C(),{path:t,query:y}=n,m=Object.assign(y||{},{path:t}),a=(u,r)=>i("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:u,data:r},null,2));return i(g,m,{default:e!=null&&e.default?({data:u,refresh:r,isPartial:d})=>e==null?void 0:e.default(p({list:u,refresh:r,isPartial:d},this.$attrs)):({data:u})=>a("default",u),empty:u=>e!=null&&e.empty?e.empty(u):({data:r})=>a("default",r),"not-found":u=>{var r;return e!=null&&e["not-found"]?(r=e==null?void 0:e["not-found"])==null?void 0:r.call(e,u):({data:d})=>a("not-found",d)}})}});export{S as default};
