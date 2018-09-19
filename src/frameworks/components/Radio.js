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

import "./Radio.css";
import type {Component} from "./Component";

/**
 * Radio
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Radio implements Component {

    options: JSON;

    element: HTMLElement;

    /**
     * constructor
     *
     * @param options
     */
    constructor(options: JSON) {

        // default setting
        this.defaultSetting = {};
        this.options = options;
        this.build();
    }

    /**
     * build
     */
    build() {
        let $this = this, options = this.options;

        let widgetRadio = document.createElement("div");
        widgetRadio.classList.add("widget-radio");

        let input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.id = options["id"] ? options["id"] : null;
        input.name = options["name"] ? options["name"] : null;
        if(options["disabled"] !== undefined) {
            input.setAttribute("disabled", options["disabled"]);
        }
        widgetRadio.appendChild(input);

        let label = document.createElement("label");
        label.setAttribute("for", input.id);
        widgetRadio.appendChild(label);

        let radioCircle = document.createElement("span");
        radioCircle.classList.add("radio-circle");
        radioCircle.innerHTML = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"" +
            " viewBox=\"0 0 16 16\">" +
            "<path fill=\"#040000\" d=\"M8,4C5.8,4,4,5.8,4,8s1.8,4,4,4s4-1.8,4-4S10.2,4,8,4z M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8" +
            "c4.4,0,8-3.6,8-8C16,3.6,12.4,0,8,0z M8,14.4c-3.52,0-6.4-2.881-6.4-6.4c0-3.52,2.88-6.4,6.4-6.4c3.52,0,6.4,2.88,6.4,6.4" +
            "C14.4,11.52,11.52,14.4,8,14.4z\"/>" +
            "</svg>";
        label.appendChild(radioCircle);

        let textSpan = document.createElement("span");
        textSpan.appendChild(document.createTextNode(
            (options["text"] ? options["text"] : "")
        ));
        label.appendChild(textSpan);

        if (options["parent"]) {
            // console.log(options["parent"]);
            options["parent"].appendChild(widgetRadio);
        } else {
            // document.body.appendChild(table);
        }

        return this.element = widgetRadio;
    }

    getElement() {
        return this.element;
    }
}

export {Radio};
