import _ from 'lodash'

export interface Event {
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
}

export interface Structure {
    type: string,
    text?: string,
    attributes?: Map,
    events?: Array<Event>,
    children?: Array<Structure>,
}

class Component extends HTMLElement {

    // get structure(): Array<Structure>;

    // set structure(value: Array<Structure>);

    constructor(properties, data?) {
        // Always call super first in constructor
        super();

        // const firstName = message?.body?.user?.firstName || 'default';

        this.properties = Object.assign(
            structureProperties(properties),
            this.constructor.defaultProperties
        );

        this.data = data || {};
    }

    connectedCallback() {
        console.log('Custom square element added to page.');

        // Create a shadow root. open/closed
        const shadow = this.attachShadow({mode: 'open'});
        buildStructure(this.getStructure());
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

    getStructure(): Array<Structure> {

    }

    removeAttribute(key) {
        super.removeAttribute(key);
    }

    setAttribute(key, value) {
        if (value && typeof value === 'object') {
            super.setAttribute(key, JSON.stringify(value));
        } else {
            super.setAttribute(key, value);
        }
    }

    initialize() {

    }

    update() {

    }

    dispose() {

    }

    before() {

    }

    after() {

    }

}

export function buildStructure(structure: Array<Structure>): HTMLElement {

    if(structure) return {};

    let elementObject: HTMLElement;

    structure.forEach($ => {
        elementObject = document.createElement($.type);

        if ($.attributes) {
            $.attributes.forEach((key, value) => {
                elementObject.setAttribute(
                    key, $.attributes[value]
                );
            });
        }

        if ($.text) {
            let textNode = document.createTextNode(text);
            elementObject.appendChild(textNode);
        }

        if ($.events) {
            $.events.forEach((key, value) => {
                elementObject.addEventListener(
                    key, $.events[value]
                );
            });
        }

        if ($.children) {
            elementObject.appendChild(this.buildStructure($.children));
        }
    });
    return elementObject? elementObject : {};
}

export function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
}

export function structureProperties(props) {
    if (!props || isArray(props)) return {};
    const result = {};
    Object.keys(props).forEach(key => {
        result[key] = props[key].value
    });
    return result
}

export {Component};
