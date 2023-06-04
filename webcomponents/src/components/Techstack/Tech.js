
const style = `
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
`

class Tech extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const tech_name = this.textContent
        this.shadowRoot.innerHTML = `
        ${style} 
        <li class="tech">
            <span class="icon">
                <img src="${tech_name.toLowerCase()}-color.svg" alt="">
            </span>
            <p class="tech-name">${tech_name}</p>
        </li>
        `
    }
}

customElements.define("sh-techstack-tech", Tech)