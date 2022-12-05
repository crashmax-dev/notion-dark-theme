// ==UserScript==
// @name        notion-dark-theme
// @version     0.0.1
// @license     MIT
// @homepage    https://crashmax-dev.github.io/notion-dark-theme/
// @match       https://*.notion.site/*
// @updateURL   https://crashmax-dev.github.io/notion-dark-theme/notion-dark-theme.meta.js
// @downloadURL https://crashmax-dev.github.io/notion-dark-theme/notion-dark-theme.user.js
// ==/UserScript==

var d=(t,o,s)=>{if(!o.has(t))throw TypeError("Cannot "+s)},h=(t,o,s)=>(d(t,o,"read from private field"),s?s.call(t):o.get(t)),f=(t,o,s)=>{if(o.has(t))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(t):o.set(t,s)},p=(t,o,s,l)=>(d(t,o,"write to private field"),l?l.call(t,s):o.set(t,s),s);(function(){var t;async function o(){return new Promise(i=>{document.readyState=="loading"?document.addEventListener("DOMContentLoaded",()=>i(),{once:!0}):i()})}function s(i,e,n){const r=new MutationObserver((a,c)=>{for(const y of a)e(y,c)});return r.observe(i,{childList:!0,subtree:!0,...n}),r}class l{constructor(){f(this,t,{})}on(e,n){const r=h(this,t)[e];return r?r.push(n):h(this,t)[e]=[n],this}addListener(e,n){return this.on(e,n)}once(e,n){const r=(...a)=>{this.off(e,r),n(...a)};return this.on(e,r),this}emit(e,...n){const r=h(this,t)[e]||[];for(let a=0;a<r.length;a++)r[a](...n);return Boolean(r.length)}off(e,n){return h(this,t)[e]&&(h(this,t)[e]=h(this,t)[e].filter(r=>r!==n)),this}removeListener(e,n){return this.off(e,n)}removeAllListeners(e){return e?delete h(this,t)[e]:p(this,t,{}),this}eventNames(){return Reflect.ownKeys(h(this,t))}listeners(e){return h(this,t)[e]}listenerCount(e){var n,r;return(r=(n=h(this,t)[e])==null?void 0:n.length)!=null?r:0}}t=new WeakMap;class u extends l{constructor(){super();const{history:e,location:n}=window,{pushState:r,replaceState:a}=e;e.pushState=(...c)=>{r.apply(e,c),this.emit("pushState",n,c[0])},e.replaceState=(...c)=>{a.apply(e,c),this.emit("replaceState",n,c[0])},window.addEventListener("popstate",({state:c})=>{this.emit("popState",n,c)})}}new u,o().then(()=>{const i=m();s(document.body,()=>i())});function m(){const i=new KeyboardEvent("keydown",{key:"l",keyCode:76,code:"KeyL",which:76,shiftKey:!0,ctrlKey:!0,metaKey:!1});return()=>{try{const e=localStorage.getItem("theme");if(!e)return;const{mode:n}=JSON.parse(e);n==="light"&&window.dispatchEvent(i)}catch(e){console.log(e)}}}})();
