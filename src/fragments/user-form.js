import store from '../core/index';

let customTemplate = `
<style>
    :host {
        background-color:#fff;
        height:30%;
        padding-top:20px;
        display: inline-block;
        margin-top: 67px;
        max-width: 30%;
        position: fixed !important;
        z-index: 1;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    }
</style>
This is the form element!!!
<label for="firstName">Enter Name</input>
<input id="firstName" placeholder="Enter Name"/>
`;
export class BmwUserForm extends HTMLElement{
    constructor(){
        super();
        let shadow = this.attachShadow({mode:'open'});
        shadow.innerHTML = customTemplate;
    }
}

window.customElements.define('bmw-user-form', BmwUserForm);