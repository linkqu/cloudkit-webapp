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

import type {Component} from "./Component";
import {Components} from "../commons/Components";
import uuid from "uuid/v1";

/**
 * Panel
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Panel implements Component {

    options: JSON;

    element: HTMLElement;

    children: Map = new Map();

    /**
     * constructor
     *
     * @param options
     */
    constructor(options: JSON) {
        // Horizontal Vertical

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

        let panelWidget = document.createElement("div");
        $this.element = panelWidget;
        panelWidget.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        if(options["id"]) {
            panelWidget.id = options["id"];
        }
        let width = options["width"], height = options["height"];
        panelWidget.style.width = width ? width + "px" : null;
        panelWidget.style.height = height ? height + "px" : null;

        if(options["hidden"]) {
            panelWidget.hidden = options["hidden"];
        }

        let attributes = options["attributes"];
        if (attributes) {
            for (let key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    panelWidget.setAttribute(key, attributes[key])
                }
            }
        }

        // classes
        let classes = options["classes"];
        if (classes) {
            classes.forEach(function (value) {
                panelWidget.classList.add(value);
            });
        }

        let css = options["css"];
        if (css) {
            for (let key in css) {
                if (css.hasOwnProperty(key)) {
                    panelWidget.style[key] = css[key];
                }
            }
        }

        document.addEventListener("DOMContentLoaded", function () {
            let items = options["items"];
            if(items) {
                items.forEach(function (item, index, objs) {
                    let component = Components.buildComponent({
                        parent: $this,
                        viewId: item["viewId"],
                        type: item["type"],
                        options: item["options"]
                    });

                    $this.children.set(item["viewId"], component);
                });
            }
        });

        if (options["parent"]) {
            // console.log(options["parent"]);
            if(options["parent"] instanceof HTMLElement) {
                options["parent"].appendChild(panelWidget);
            } else {
                options["parent"].getElement().appendChild(panelWidget);
            }
        } else {
            // document.body.appendChild(panel);
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
        return this.children;
    }

    setChildren(objects: Map<string, Component>) {
        this.children = objects;
    }

    getChild(key: string) {
        return this.children.get(key);
    }

    addChild(key: string, object: Component) {
        this.children.set(key, object);
    }

    removeChild(key: string) {
        this.children.delete(key)
    }

    hide() {
        this.element.hidden = true;
    }

    show() {
        this.element.hidden = false;
    }

    toggle() {
        this.element.hidden = !this.element.hidden;
    }
}

export {Panel};
