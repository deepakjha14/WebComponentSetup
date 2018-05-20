import store from '../core/index';

function increaseCount(){
    store.dispatch({ type: 'INCREMENT' })
    console.log(store.getState());
  }

let storeValue;
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
This is details element.
<div id="uddivid">${storeValue}</div>
<button id="udbutid" onclick="increaseCount()">Increase</button>
`;
export class BmwUserDetail extends HTMLElement{
    constructor(){
        super();
        let shadow = this.attachShadow({mode:'open'});
        shadow.innerHTML = customTemplate;
    }
    connectedCallback() {
        console.log('Connected callback called of BMW User Detail', store.getState());
        store.subscribe(()=>{
            this.storeValue = store.getState(); 
            console.log(store.getState(), " These are the values")
        });
        console.dir(this);
        store.dispatch({ type: 'INCREMENT' });
      }
}


window.customElements.define('bmw-user-detail', BmwUserDetail);