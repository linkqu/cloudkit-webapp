/*
 * Copyright (c) 2018, Linkqu and/or its affiliates. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *
 *   - Neither the name of Linkqu or the names of its
 *     contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import "./Button.css";

/**
 * Button
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Button {

    options: JSON;

    /**
     * constructor
     *
     * @param options
     */
    constructor(options: JSON) {

        // default setting
        this.defaultSetting = {
            type: null,
            text: "Button",
            visible: false,
            width: 0,
            height: 0,
            css: [],
            // parent: ,
            classes: ["button"]
        };
        this.options = options;
        this.build();
    }

    /**
     * build
     */
    build() {
        let button = document.createElement("button");
        let fragment = document.createDocumentFragment();

        // Add default class
        button.classList.add("widget-button");

        // Add type class
        if (this.options["type"]) {
            button.classList.add("button-" + this.options["type"]);
        }

        // classes
        let classes = this.options["classes"];
        if (classes) {
            classes.forEach(function (value) {
                button.classList.add(value);
            });
        }

        // text
        if (this.options["text"]) {
            let text = document.createTextNode(this.options["text"]);
            /**
             * 参考
             * Node.removeChild()
             * Node.replaceChild()
             * Node.appendChild()
             * Node.insertBefore()
             * Node.hasChildNodes()
             */
            fragment.appendChild(text);
        }
        button.appendChild(fragment);

        // events
        let events = this.options["events"];
        if (events) {
            for (let prop in events) {
                if (events.hasOwnProperty(prop)) {
                    button.addEventListener(prop, events[prop])
                }
            }
        }

        if (this.options["parent"]) {
            // console.log(this.options["parent"]);
            this.options["parent"].appendChild(button);
        } else {
            // document.body.appendChild(button);
        }

        let css = this.options["css"];
        if (css) {
            for (let key in css) {
                if (css.hasOwnProperty(key)) {
                    button.style[key] = css[key];
                }
            }
        }

        // button.nextElementSibling
        // button.nextSibling
        // button.parentElement
        // button.previousElementSibling
        // button.previousSibling

        return button;
    }
}

export {Button};
