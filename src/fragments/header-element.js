let customTemplate = `
<style>
    :host {
        display: block;
        top:0;
        left:0;
        position:fixed;
        background-color:#24292e;
        color:#2b89f6;
        text-align:center;
        width:100%;
        z-index: 2;
        height:50px;
    }
</style>
<div class="headContainer">This is the header element !!!</div>
`;
export class BmwHeaderElement extends HTMLElement{
    constructor(){
        super();
        let shadow = this.attachShadow({mode:'open'});
        shadow.innerHTML = customTemplate;
    }
}

window.customElements.define('bmw-header-element', BmwHeaderElement);