import{a as g,S as L,i as u}from"./assets/vendor-da186403.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const s={form:document.querySelector(".search-form"),input:document.querySelector(".form-input"),btn:document.querySelector(".form-btn"),gallery:document.querySelector(".gallery"),load_more:document.querySelector(".load-more-button"),loader:document.querySelector(".load")};async function m(r,t,o){s.loader.classList.add("loader");const l="42331479-49dc52f8d5778d01c5913f31a";return await g.get("https://pixabay.com/api/",{params:{key:l,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:o,page:t}})}function b(r){return r.hits.map(({webformatURL:o,largeImageURL:l,tags:e,likes:a,views:n,comments:p,downloads:y})=>`<li class="gallery-item">
    <a href="${l}"><img src="${o}" alt="${e}"/>
    <ul class="item-data-list">
    <li class="data-list-item">
    <h3 class="data-item-header">Likes</h3>
    <p class="data-item-text">${a}</p>
    </li>
    <li class="data-list-item">
    <h3 class="data-item-header">Views</h3>
    <p class="data-item-text">${n}</p>
    </li>
    <li class="data-list-item">
    <h3 class="data-item-header">Comments</h3>
    <p class="data-item-text">${p}</p>
    </li>
    <li class="data-list-item">
    <h3 class="data-item-header">Downloads</h3>
    <p class="data-item-text">${y}</p>
    </li>
    </ul>
    </a>
    </li>`).join("")}function f(r){const t=b(r);s.gallery.insertAdjacentHTML("beforeend",t),new L(".gallery a").refresh()}function h(){s.load_more.classList.add("hidden")}function v(){s.load_more.classList.remove("hidden")}let d=9,i,c;function w(r){r.preventDefault(),h(),c=r.target.elements.form_input.value.trim(),i=1,s.gallery.innerHTML="",c!==""&&m(c,i,d).then(t=>{const{data:o}=t;if(o.hits.length!==0){f(o);let l=s.gallery.firstChild.getBoundingClientRect().height;window.scrollBy({behavior:"smooth",top:l}),Math.ceil(o.totalHits/d)<=i?u.show({message:"We're sorry, but you've reached the end of search results."}):v()}else u.show({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>console.log(t)).finally(s.loader.classList.remove("loader")),r.target.reset()}function S(){i+=1,m(c,i,d).then(r=>{const{data:t}=r;f(t),Math.ceil(t.totalHits/d)===i&&(h(),u.show({message:"We're sorry, but you've reached the end of search results."}))}).finally(s.loader.classList.remove("loader"))}s.form.addEventListener("submit",w);s.load_more.addEventListener("click",S);
//# sourceMappingURL=commonHelpers.js.map
