import "../components/Information/Information.js";
import "../components/Saying/Saying.js";
import '../components/Techstack/Techstack.js';

const template = `
<main>
<sh-me-information></sh-me-information>
<sh-me-saying></sh-me-saying>
<sh-me-techstack></sh-me-techstack>
</main>
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

main {
    width: 768px;
    padding: 0 10px;
    margin: auto;
}
</style>
`

class Me extends HTMLElement {
    constructor () {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
    }

    connectedCallback () {
        this.render();
    }

    render () {
        this.shadowRoot.innerHTML = `${style} ${template}`
    }
}

customElements.define("sh-me", Me)