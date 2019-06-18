// import {a} from './xxx.js'

class Checkbox extends HTMLElement {

    // {x = 1 ,y = 2} = {}
    constructor() {
        // Always call super first in constructor
        super();
        // console.log("x："+x ,"y："+ y);

        // Create a shadow root
        const shadow = this.attachShadow({mode: 'open'});

        // Create spans
        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        const icon = document.createElement('span');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tabindex', 0);

        const info = document.createElement('span');
        info.setAttribute('class', 'info');

        // Take attribute content and put it inside the info span
        info.textContent = this.getAttribute('data-text');

        // Insert icon
        let imgUrl;
        if(this.hasAttribute('img')) {
            imgUrl = this.getAttribute('img');
        } else {
            imgUrl = 'resources/images/default.png';
        }

        const img = document.createElement('img');
        img.src = imgUrl;
        icon.appendChild(img);

        // Create some CSS to apply to the shadow dom
        const style = document.createElement('style');
        console.log(style.isConnected);

        style.textContent = `
            .wrapper {
                position: relative;
            }
            .info {
                font-size: 0.8rem;
                width: 200px;
                display: inline-block;
                border: 1px solid black;
                padding: 10px;
                background: white;
                border-radius: 10px;
                opacity: 0;
                transition: 0.6s all;
                position: absolute;
                bottom: 20px;
                left: 10px;
                z-index: 3;
            }
            img {
                width: 1.2rem;
            }
            .icon:hover + .info, .icon:focus + .info {
                opacity: 1;
            }
        `;

        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        console.log(style.isConnected);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);

    }

    connectedCallback() {
        console.log('Custom square element added to page.');
    }

    disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }

    adoptedCallback() {
        console.log('Custom square element moved to new page.');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom square element attributes changed.');
    }
}

// Define the new element
customElements.define('popup-info', Checkbox);

// export default Checkbox;
