var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const i=document.querySelector(".form"),l=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');i.addEventListener("submit",function(e){e.preventDefault();let t=Number(l.value),o=Number(u.value),n=Number(a.value);for(let e=1;e<=n;e+=1)(function(e,t){let o={position:e,delay:t},n=Math.random()>.3;return new Promise((e,r)=>{setTimeout(()=>{n?e(o):r(o)},t)})})(e,t+=o).then(({position:e,delay:t})=>{(0,r.Notify).success(`✅ Fulfilled promise ${e} in ${t}ms`)}).catch(({position:e,delay:t})=>{(0,r.Notify).failure(`❌ Rejected promise ${e} in ${t}ms`)})});
//# sourceMappingURL=03-promises.d49f9e6c.js.map
