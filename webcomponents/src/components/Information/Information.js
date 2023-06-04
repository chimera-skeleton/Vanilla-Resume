
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

@media (min-width:780px) {
    .information {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

.left-wrapper {
    width: 160px;
    height: 160px;
    background-color: #A1A1AA;
    border-radius: 20px;
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
    width: 512px;
    height: 162px;
}

@media (max-width:780px) {
    .right-wrapper {
       margin-top: 16px;
    }
}

.avatar{
    width: inherit;
    height: inherit;
    border-radius: 20px;
}
</style>
`

class Information extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        ${style}
        <section class="information">
            <div class="left-wrapper">
                <img class="avatar" src="scoheart.jpg" alt="">
            </div>
            <div class="right-wrapper">
            <h1 class="name">Heart Sco</h1>
            <h2 class="career">Front-End Developer</h2>
            <p class="intro">Hi, here ! I'm Scoheart, a student studying at the JS University. In my free time, I
                like to
                explore unknown domain, such as JavaScript on the Front-End, Java on the Back-End.</p>
        </div>
        </section>
        `;
    }
}

customElements.define("sh-me-information", Information);