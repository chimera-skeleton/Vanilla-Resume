import '../pages/Me.js';
import '../pages/Blogs.js';

class RouterLink extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.addEventListener('click', this.toAnchor);
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.toAnchor);
    }

    toAnchor(event) {
        event.preventDefault();
        const anchor = this.getAttribute("to")
        location.hash = anchor
    }
}

class RouterView extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const _this = this

        location.hash = "me"
        _this.innerHTML = `<sh-me></sh-me>`

        window.onhashchange = function () {
            const hash = location.hash.substring(1)
            _this.innerHTML = `<sh-${hash}></sh-${hash}>`
        }
    }

}
customElements.define("sh-router-view", RouterView)
customElements.define('sh-router-link', RouterLink);