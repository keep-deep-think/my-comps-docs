import{u as _,a as l}from"./theme.f7fa2fdb.js";import{d as p,h as u,z as t,j as f,o as m,c as b,_ as v}from"./framework.e1a44ae9.js";const A=p({__name:"VPCarbonAds",props:{carbonAds:{}},setup(r){const d=r,{page:i}=_(),s=d.carbonAds,{isAsideEnabled:a}=l(),c=u();let n=!1;function o(){if(!n){n=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${s.code}&placement=${s.placement}`,e.async=!0,c.value.appendChild(e)}}return t(()=>i.value.relativePath,()=>{var e;n&&a.value&&((e=window._carbonads)==null||e.refresh())}),s&&f(()=>{a.value?o():t(a,e=>e&&o())}),(e,h)=>(m(),b("div",{class:"VPCarbonAds",ref_key:"container",ref:c},null,512))}});const x=v(A,[["__scopeId","data-v-c46c9d59"]]);export{x as default};
