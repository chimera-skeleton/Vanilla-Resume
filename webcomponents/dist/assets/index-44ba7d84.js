(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const c=`
<nav>
    <sh-router-link to="me">Me</sh-router-link>
    <sh-router-link to="blogs">Blogs</sh-router-link>
    <sh-router-link to="projects">Projects</sh-router-link>
    <sh-router-link to="github">Github</sh-router-link>
    <sh-router-link to="twitter">Twitter</sh-router-link>
</nav>
`,a=`
<style>

* {
    margin: 0;
    padding: 0;
    list-style: none;
    color: white;
    text-decoration: none;
    box-sizing: content-box;
}

nav {
    width: 721px;
    height: 40px;
    display: flex;
    padding: 0 20px;
    margin: auto;
    margin-bottom: 64px;
    background-color: #212124;
    border-radius: 20px;
    border:1px solid rgba(63, 63, 70, 0.8);
}

nav sh-router-link {
    display: block;
    flex-grow: 1;
    font-weight: 600;
    font-size: 14px;
    color: #E4E4E7;
    height: 40px;
    line-height: 40px;
    text-align: center;
}

nav sh-router-link:hover {
    transition: background-color 0.15s ease;
    background-color: #303035;
    cursor: pointer;
}
</style>
`;class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`${a}${c}`}}customElements.define("sh-nav",h);const l=`
<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    color: white;
    text-decoration: none;
    box-sizing: content-box;
}

.information {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.left-wrapper {
    width: 512px;
    height: 162px;
}

.name {
    height: 40px;
    line-height: 40px;
    font-size: 36px;
    margin-bottom: 4px;
    color: #fff;
}

.career {
    height: 24px;
    line-height: 24px;
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 16px;
    color: #D4D4D8;
}

.intro {
    height: 78px;
    line-height: 26px;
    color: #A1A1AA;
    font-size: 16px;
    font-weight: 300;
}

.right-wrapper {
    width: 160px;
    height: 160px;
    background-color: #A1A1AA;
    border-radius: 20px;
}

.avatar{
    width: inherit;
    height: inherit;
    border-radius: 20px;
}
</style>
`;class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        ${l}
        <section class="information">
            <div class="left-wrapper">
                <h1 class="name">Heart Sco</h1>
                <h2 class="career">Front-End Developer</h2>
                <p class="intro">Hi, here ! I'm Scoheart, a student studying at the JS University. In my free time, I
                    like to
                    explore unknown domain, such as JavaScript on the Front-End, Java on the Back-End.</p>
            </div>
            <div class="right-wrapper">
                <img class="avatar" src="scoheart.jpg" alt="">
            </div>
        </section>
        `}}customElements.define("sh-me-information",d);const p=`
<section class="saying">
    <h2>Running in the Dark</h2>
    <p class="zh">何来人间惊鸿客，不过尘世一俗人。</p>
    <p class="en">" There is no time for what was left behind, it is a maiden voyage after all. All the pretty
        sinners, All the medal winners. Overachievers aiming for their prize, I can feel it coming. "</p>
    <p class="conclusion">I could be dreaming but I feel so wide awake.</p>
</section>
`,m=`
<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    color: white;
    text-decoration: none;
    box-sizing: content-box;
}

.saying {
    margin-top: 48px;
}

.saying h2 {
    height: 24px;
    line-height: 24px;
    font-size: 24px;
    color: #D4D4D8;
    margin-bottom: 4px;
}

.saying .zh {
    line-height: 26px;
    color: #D4D4D8;
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 16px;
}

.saying .en {
    line-height: 26px;
    color: #A1A1AA;
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 16px;
}

.saying .conclusion {
    line-height: 26px;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 48px;
    color: #D4D4D8;
}

</style>
`;class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`${m} ${p}`}}customElements.define("sh-me-saying",g);const u=`
<style>
.tech {
    display: flex;
    gap: 16px;
    align-items: center;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    border-top: 1px solid #3f3f46;
    background-color: #27272a;
}

.icon img{
    display: block;
    width: 28px;
    height: 28px;
}

.tech-name {
    font-size: 18px;
    color: #A1A1AA;
}
</style>
`;class x extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=this.textContent;this.shadowRoot.innerHTML=`
        ${u} 
        <li class="tech">
            <span class="icon">
                <img src="${e.toLowerCase()}-color.svg" alt="">
            </span>
            <p class="tech-name">${e}</p>
        </li>
        `}}customElements.define("sh-techstack-tech",x);const f=`
<style>
.tech-stack {
    height: 24px;
    line-height: 24px;
    font-size: 24px;
    color: #D4D4D8;
    margin-bottom: 20px;
}

.tech-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

@media (max-width:780px) {
    .tech-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
    }
}

</style>
`;class y extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){fetch("http://127.0.0.1:8088/js").then(e=>e.json()).then(e=>{const o=e.map(i=>`<sh-techstack-tech>${i}</sh-techstack-tech>`).join(" ");console.log(o),this.render(o)})}render(e){this.shadowRoot.innerHTML=`
        ${f}
        <section>
            <h2 class="tech-stack">Technology stack</h2>
            <ul class="tech-wrapper">
                ${e}
            </ul>
        </section>
        `}}customElements.define("sh-me-techstack",y);const w=`
<main>
<sh-me-information></sh-me-information>
<sh-me-saying></sh-me-saying>
<sh-me-techstack></sh-me-techstack>
</main>
`,b=`
<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    color: white;
    text-decoration: none;
    box-sizing: content-box;
}

main {
    width: 768px;
    margin: auto;
}
</style>
`;class k extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`${b} ${w}`}}customElements.define("sh-me",k);class v extends HTMLElement{constructor(){super()}connectedCallback(){this.addEventListener("click",this.toAnchor)}disconnectedCallback(){this.removeEventListener("click",this.toAnchor)}toAnchor(e){e.preventDefault();const o=this.getAttribute("to");location.hash=o}}class L extends HTMLElement{constructor(){super()}connectedCallback(){const e=this;location.hash="me",e.innerHTML="<sh-me></sh-me>",window.onhashchange=function(){const o=location.hash.substring(1);e.innerHTML=`<sh-${o}></sh-${o}>`}}}customElements.define("sh-router-view",L);customElements.define("sh-router-link",v);const E=`
<sh-nav></sh-nav>
<sh-router-view></sh-router-view>
`;document.querySelector("#root").innerHTML=E;
