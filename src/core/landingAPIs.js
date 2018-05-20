import store from './index.js';
import '../fragments/header-element.js';
import '../fragments/user-form.js';
import '../fragments/user-detail.js';
/*console.log('Inside landingAPIs module...');
store.dispatch({ type: 'INCREMENT' });
//callTestFunction();
function callTestFunction(){
    alert('This is the test function for global level '+ this);
}*/

let customTemplate = `
    <style>
        .display-body{
            display:flex;
            justify-content:flex-start;
            min-height:100vh;
        }
        .user-form{
            flex:1;
            order:1;
        }
        .user-detail{
            flex:1;
            order:2;
        }
    </style>
    <bmw-header-element></bmw-header-element>
    <div class="display-body">
        <div class="user-form">
            <bmw-user-form></bmw-user-form>
        </div>
        <div class="user-detail">
            <bmw-user-detail></bmw-user-detail>
        </div>
    </div>
    
    `;
class CustomCoreElement extends HTMLElement{
    constructor(){
        super();
        // Create a new header element.
       // let headInstance = new BmwHeaderElement();
        
        this.attachShadow({mode:'open'}).innerHTML = customTemplate;

        store.subscribe(()=>{console.log(store.getState(), " Subscribed from a custom element")});
        store.dispatch({type: 'INCREMENT'});
        //setTimeout(()=>{store.dispatch({type: 'INCREMENT'})}, 5000);
    }
}

window.customElements.define('custom-core-element', CustomCoreElement);