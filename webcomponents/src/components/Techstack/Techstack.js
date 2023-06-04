import './Tech.js'

const style = `
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
        grid-template-columns: 1fr;
    }
}

</style>
`

class TechStack extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        fetch('http://127.0.0.1:8088/js')
            .then(response => response.json())
            .then(data => {
                const html = data.map((tech) => {
                    return `<sh-techstack-tech>${tech}</sh-techstack-tech>`
                }).join(" ")
                console.log(html)
                this.render(html);
            })
    }

    render(html) {
        this.shadowRoot.innerHTML = `
        ${style}
        <section>
            <h2 class="tech-stack">Technology stack</h2>
            <ul class="tech-wrapper">
                ${html}
            </ul>
        </section>
        `
    }
}

customElements.define("sh-me-techstack", TechStack)