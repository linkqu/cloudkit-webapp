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

import "./Header.css";
import type {Component} from "./Component";
import {Components} from "../commons/Components";
import uuid from "uuid/v1";

/**
 * Header
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Header implements Component {

    options: JSON;

    element: HTMLElement;

    children: Map = new Map();

    /**
     * constructor
     *
     * @param options
     */
    constructor(options: JSON) {

        // default setting
        this.defaultSetting = {

        };
        this.options = options;
        this.build();
    }

    /**
     * build
     */
    build() {
        let $this = this, options = this.options;

        let component = document.createElement("div");
        $this.element = component;
        component.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        component.classList.add("widget-header");

        let brandElement = document.createElement("div");
        brandElement.classList.add("brand");
        component.appendChild(brandElement);

        let brandLinkElement = document.createElement("a");
        brandElement.appendChild(brandLinkElement);

        let brandLogoElement = document.createElement("div");
        brandLogoElement.classList.add("logo");
        brandLinkElement.appendChild(brandLogoElement);

        let brandIconLogoElement = document.createElement("img");
        brandIconLogoElement.classList.add("icon-logo");
        brandIconLogoElement.src = "data:image/png;base64,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";
        brandIconLogoElement.setAttribute("alt", "Logo");
        brandLogoElement.appendChild(brandIconLogoElement);

        let brandTextElement = document.createElement("span");
        brandTextElement.classList.add("text");
        brandTextElement.appendChild(document.createTextNode("SCM.APP"));
        brandLogoElement.appendChild(brandTextElement);

        // renderTo
        if (options["parent"]) {
            // console.log(options["parent"]);
            if(options["parent"] instanceof HTMLElement) {
                options["parent"].appendChild(component);
            } else {
                options["parent"].getElement().appendChild(component);
            }
        } else {
            // document.body.appendChild(component);
        }

        return $this.element;
    }

    getElement() {
        return this.element;
    }

    getParent() {
        return this.options["parent"];
    }

    getChildren() {
        return this.childObjects;
    }

    setChildren(objects: Map<string, Component>) {
        this.childObjects = objects;
    }

    getChild(key: string) {
        return this.childObjects.get(key);
    }

    addChild(key: string, object: Component) {
        this.childObjects.set(key, object);
    }

    removeChild(key: string) {
        this.childObjects.delete(key)
    }
}

export {Header};
