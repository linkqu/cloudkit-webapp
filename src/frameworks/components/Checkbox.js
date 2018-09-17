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

import "./Checkbox.css";
import type {Component} from "./Component";

/**
 * Checkbox
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Checkbox implements Component {

    options: JSON;

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
        let widgetCheckbox = document.createElement("div");
        widgetCheckbox.classList.add("widget-checkbox");

        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.id = this.options["id"] ? this.options["id"] : null;
        input.name = this.options["name"] ? this.options["name"] : null;
        if(this.options["disabled"] !== undefined) {
            input.setAttribute("disabled", this.options["disabled"]);
        }
        widgetCheckbox.appendChild(input);

        let label = document.createElement("label");
        label.setAttribute("for", input.id);
        widgetCheckbox.appendChild(label);

        let checkboxRectangle = document.createElement("span");
        checkboxRectangle.classList.add("checkbox-rectangle");
        // language=HTML
        checkboxRectangle.innerHTML =
            "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"14\" height=\"14\">" +
            "    <path d=\"M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z\"" +
            "        fill=\"none\"" +
            "    />" +
            "</svg>";
        label.appendChild(checkboxRectangle);

        let textSpan = document.createElement("span");
        textSpan.appendChild(document.createTextNode(
            " " + (this.options["text"] ? this.options["text"] : "")
        ));
        label.appendChild(textSpan);

        if (this.options["parent"]) {
            // console.log(this.options["parent"]);
            this.options["parent"].appendChild(widgetCheckbox);
        } else {
            // document.body.appendChild(table);
        }

        return widgetCheckbox;
    }
}

export {Checkbox};
