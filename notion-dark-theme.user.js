// ==UserScript==
// @name        notion-dark-theme
// @version     0.0.1
// @license     MIT
// @homepage    https://crashmax-dev.github.io/notion-dark-theme/
// @match       https://*.notion.site/*
// @updateURL   https://crashmax-dev.github.io/notion-dark-theme/notion-dark-theme.meta.js
// @downloadURL https://crashmax-dev.github.io/notion-dark-theme/notion-dark-theme.user.js
// ==/UserScript==

(function(){"use strict";async function c(){return new Promise(e=>{document.readyState=="loading"?document.addEventListener("DOMContentLoaded",()=>e(),{once:!0}):e()})}function r(e,t,n){const o=new MutationObserver((s,i)=>{for(const u of s)t(u,i)});return o.observe(e,{childList:!0,subtree:!0,...n}),o}c().then(()=>{const e=d();r(document.body,()=>e())});function d(){const e=new KeyboardEvent("keydown",{key:"l",keyCode:76,code:"KeyL",which:76,shiftKey:!0,ctrlKey:!0,metaKey:!1});return()=>{try{const t=localStorage.getItem("theme");if(!t)return;const{mode:n}=JSON.parse(t);n==="light"&&window.dispatchEvent(e)}catch(t){console.log(t)}}}})();
