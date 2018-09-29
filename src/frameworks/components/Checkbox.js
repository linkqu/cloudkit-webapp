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
import {Components} from "../commons/Components";
import uuid from "uuid/v1";

/**
 * Checkbox
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Checkbox implements Component {

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

        let checkboxWidget = document.createElement("div");
        $this.element = checkboxWidget;
        checkboxWidget.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        checkboxWidget.classList.add("widget-checkbox");

        let inputCheckbox = document.createElement("input");
        inputCheckbox.setAttribute("type", "checkbox");
        inputCheckbox.id = options["id"] ? options["id"] : null;
        inputCheckbox.name = options["name"] ? options["name"] : null;
        if(options["disabled"] !== undefined) {
            inputCheckbox.setAttribute("disabled", options["disabled"]);
        }
        checkboxWidget.appendChild(inputCheckbox);

        let label = document.createElement("label");
        label.setAttribute("for", inputCheckbox.id);
        checkboxWidget.appendChild(label);

        let checkboxIcon = document.createElement("span");
        checkboxIcon.classList.add("checkbox-rectangle");
        // language=HTML
        checkboxIcon.innerHTML =
            "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"14\" height=\"14\">" +
            "    <path d=\"M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z\"" +
            "        fill=\"none\"" +
            "    />" +
            "</svg>";
        label.appendChild(checkboxIcon);

        let checkboxText = document.createElement("span");
        checkboxText.appendChild(document.createTextNode(
            (options["text"] ? options["text"] : "")
        ));
        label.appendChild(checkboxText);

        if (options["parent"]) {
            // console.log(options["parent"]);
            if(options["parent"] instanceof HTMLElement) {
                options["parent"].appendChild(checkboxWidget);
            } else {
                options["parent"].getElement().appendChild(checkboxWidget);
            }
        } else {
            // document.body.appendChild(table);
        }

        return $this.element;
    }

    getElement() {
        return this.element;
    }
}

export {Checkbox};
