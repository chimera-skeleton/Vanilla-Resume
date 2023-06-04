const template = `
<section class="saying">
    <h2>Running in the Dark</h2>
    <p class="zh">何来人间惊鸿客，不过尘世一俗人。</p>
    <p class="en">" There is no time for what was left behind, it is a maiden voyage after all. All the pretty
        sinners, All the medal winners. Overachievers aiming for their prize, I can feel it coming. "</p>
    <p class="conclusion">I could be dreaming but I feel so wide awake.</p>
</section>
`

const style = `
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
    margin-top: 32px;
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
`

class Saying extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `${style} ${template}`
    }
}

customElements.define("sh-me-saying", Saying)