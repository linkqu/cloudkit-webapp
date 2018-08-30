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

/**
 * TextField
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class TextField {

    options: JSON;

    /**
     * constructor
     *
     * @param options
     */
    constructor(options: JSON) {

        // default setting
        this.defaultSetting = {
            visible: false,
            width: 0,
            height: 0,
            css: [],
            // parent: ,
            classes: ["widget-text-field"]
        };
        this.options = options;
        this.build();
    }

    /**
     * build
     */
    build() {
        let input = document.createElement("input");
        let fragment = document.createDocumentFragment();

        let width = this.options["width"];
        if (width) {
            input.style["width"] = width;
        }

        // Add default class
        input.classList.add("widget-text-field");

        // Add class
        let classes = this.options["classes"];
        if (classes) {
            classes.forEach(function (value) {
                input.classList.add(value);
            });
        }

        input.appendChild(fragment);

        let events = this.options["events"];
        if (events) {
            for (let prop in events) {
                if (events.hasOwnProperty(prop)) {
                    input.addEventListener(prop, events[prop])
                }
            }
        }

        if (this.options["parent"]) {
            // console.log(this.options["parent"]);
            this.options["parent"].appendChild(input);
        } else {
            // document.body.appendChild(button);
        }

        let css = this.options["css"];
        if (css) {
            for (let key in css) {
                if (css.hasOwnProperty(key)) {
                    input.style[key] = css[key];
                }
            }
        }

        return input;
    }
}

export {TextField};
