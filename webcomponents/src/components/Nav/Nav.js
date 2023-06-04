const template = `
<nav>
    <sh-router-link class="active" to="me">Me</sh-router-link>
    <sh-router-link to="blogs">Blogs</sh-router-link>
    <sh-router-link to="projects">Projects</sh-router-link>
    <sh-router-link to="github">Github</sh-router-link>
    <sh-router-link to="twitter">Twitter</sh-router-link>
</nav>
`

const style = `
<style>

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

.active {
    color: #2dd4bf;
}
</style>
`


class Nav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        const navAll = this.shadowRoot.querySelectorAll('sh-router-link')
        console.log(navAll)
        navAll.forEach(nav => {
            nav.addEventListener("click", function () {
                navAll.forEach(item => item.classList.remove("active"))
                nav.classList.add("active")
            })
        })
    }

    render() {
        this.shadowRoot.innerHTML = `${style}${template}`
    }
}

customElements.define("sh-nav", Nav)