import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as n}from"./assets/vendor-77e16229.js";const u=document.querySelector("section");u.classList.add("section");const a=document.querySelector("a");a.classList.add("to-home-link");const t=document.querySelector(".form"),r=t.querySelector("label");r.classList.add("delay-label");const d=r.querySelector('input[name="delay"]'),l=t.querySelector("fieldset"),m=l.querySelector('input[value="fulfilled"]');l.querySelector('input[value="rejected"]');t.querySelector('button[type="submit"]');let s=!0;l.addEventListener("click",p);function p(o){return o.target===m?s=!0:s=!1}t.addEventListener("submit",f);function f(o){o.preventDefault(),new Promise((e,c)=>{const i=d.value;setTimeout(()=>{s?e(`Fulfilled promise in ${i}ms`):c(`Rejected promise in ${i}ms`)},i)}).then(e=>n.success({position:"topRight",icon:"",title:"✅",message:e})).catch(e=>n.error({position:"topRight",icon:"",title:"❌",message:e}))}
//# sourceMappingURL=commonHelpers2.js.map
