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

import "./TextField.css";
import type {Component} from "./Component";
import {Components} from "../commons/Components";
import uuid from "uuid/v1";

/**
 * TextField
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class TextField implements Component {

    options: JSON;

    element: HTMLElement;

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
        let $this = this, options = this.options;

        let textFieldWidget = document.createElement("input");
        $this.element = textFieldWidget;
        textFieldWidget.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        let type = options["type"];
        if(type === "password") {
            textFieldWidget.setAttribute("type", type);
        } else {
            textFieldWidget.setAttribute("type", "text");
        }
        let fragment = document.createDocumentFragment();

        let width = options["width"];
        if (width) {
            textFieldWidget.style["width"] = width;
        }

        // Add default class
        textFieldWidget.classList.add("widget-text-field");

        // Add class
        let classes = options["classes"];
        if (classes) {
            classes.forEach(function (value) {
                textFieldWidget.classList.add(value);
            });
        }

        textFieldWidget.appendChild(fragment);

        let events = options["events"];
        if (events) {
            for (let prop in events) {
                if (events.hasOwnProperty(prop)) {
                    textFieldWidget.addEventListener(prop, events[prop])
                }
            }
        }

        if (options["parent"]) {
            // console.log(options["parent"]);
            if(options["parent"] instanceof HTMLElement) {
                options["parent"].appendChild(textFieldWidget);
            } else {
                options["parent"].getElement().appendChild(textFieldWidget);
            }
        } else {
            // document.body.appendChild(button);
        }

        let css = options["css"];
        if (css) {
            for (let key in css) {
                if (css.hasOwnProperty(key)) {
                    textFieldWidget.style[key] = css[key];
                }
            }
        }

        return $this.element;
    }

    getElement() {
        return this.element;
    }
}

export {TextField};
