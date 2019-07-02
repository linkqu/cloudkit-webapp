// import {a} from './xxx.js'
// import buttonCss from "../themes/Button.css.js";

import {Component} from "./Component";
import type {Structure} from "./Component";

const template = document.createElement('template');
template.innerHTML = `
    <style></style>
    <!--<a href="#">Link</a>-->
`;

const buttonStructure = {
    'type': 'button'
};

interface Properties {
    ripple: boolean,
    raised: boolean,
    dense: boolean,
    icon: string
}

interface Data {

}

class Button extends Component<Properties, Data> {

    static defaultProperties = {
        ripple: true
    };

    getStructure(): Array<Structure> {
        let structure: Array<Structure> = [];
        Object.assign(buttonStructure, structure);
        return structure;
    }

    // constructor() {
    //     // Always call super first in constructor
    //     super();
    //
    //     // Create a shadow root. open/closed
    //     const shadow = this.attachShadow({mode: 'open'});
    //
    //     // Create button
    //     const button = document.createElement('button');
    //     button.setAttribute('class', 'ui button');
    //     button.classList.add(this.getAttribute('data-style'));
    //
    //     const icon = document.createElement('i');
    //     icon.setAttribute('class', 'spider icon');
    //     // icon.setAttribute('tabindex', 0);
    //     // icon.removeAttribute();
    //
    //     // Take attribute content and put it inside the info span
    //     button.textContent = this.getAttribute('data-text');
    //
    //     // Create some CSS to apply to the shadow dom
    //     const style = document.createElement('style');
    //     console.log(style.isConnected);
    //
    //     button.addEventListener('click', (e) => {
    //         alert("Hello!")
    //     });
    //
    //     style.textContent = `@import "./resources/stylesheets/Button.css"`;
    //
    //     // Templates
    //     // template.content;
    //     // const template = document.getElementById('element-details-template').content;
    //     // const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.cloneNode(true));
    //     shadow.appendChild(template.content);
    //
    //     // Attach the created elements to the shadow dom
    //     shadow.appendChild(style);
    //     shadow.appendChild(button);
    //     button.appendChild(icon);
    //
    //     // const button = document.querySelector('button');
    //     // const root = button.createShadowRoot();
    //     // root.innerHTML = '<style>' +
    //     //     ':host { text-transform: uppercase; }' +
    //     //     '</style>' +
    //     //     '<content></content>';
    // }
}

export default {Button};

// Define the new element
customElements.define('ui-button', Button);
