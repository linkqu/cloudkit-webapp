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

import "./Accordion.css";
import uuid from "uuid/v1";
import type {Component} from "./Component";

/**
 * Accordion
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Accordion implements Component {

    options: JSON;

    element: HTMLElement;

    /**
     * constructor
     *
     * @param options
     */
    constructor(options: JSON) {
        // Horizontal Vertical

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

        let accordion = document.createElement("div");
        accordion.classList.add("widget-accordion");
        if(options["id"]) {
            accordion.id = options["id"];
        }

        let items = $this.options["items"];
        if (items) {
            items.forEach(function (item, index, objs) {
                let accordionItem = document.createElement("div");
                accordionItem.classList.add("accordion-item");
                accordion.appendChild(accordionItem);

                let itemCheckbox = document.createElement("input");
                itemCheckbox.setAttribute("type", "checkbox");
                itemCheckbox.classList.add("item-checkbox");
                itemCheckbox.id = item["id"];
                accordionItem.appendChild(itemCheckbox);

                let title = document.createElement("label");
                title.classList.add("title");
                title.setAttribute("for", itemCheckbox.id);
                title.appendChild(document.createTextNode(item["title"]));
                accordionItem.appendChild(title);

                let childContainer = document.createElement("div");
                childContainer.classList.add("child-container");
                accordionItem.appendChild(childContainer);

                let children = item["children"];
                if (item["children"]) {
                    children.forEach(function (item, index, objs) {
                        let childItem = document.createElement("div");
                        childItem.classList.add("child-item");

                        let itemCheckbox = document.createElement("input");
                        itemCheckbox.setAttribute("type", "checkbox");
                        itemCheckbox.classList.add("item-checkbox");
                        itemCheckbox.id = uuid();
                        childItem.appendChild(itemCheckbox);

                        let title = document.createElement("label");
                        title.classList.add("title");
                        title.setAttribute("for", itemCheckbox.id);
                        title.appendChild(document.createTextNode(item["title"]));
                        childItem.appendChild(title);

                        let article = document.createElement("article");
                        article.classList.add("item-text");
                        article.innerHTML = item["text"];
                        childItem.appendChild(article);

                        childContainer.appendChild(childItem);
                    });
                }
            });
        }

        if (this.options["parent"]) {
            // console.log(this.options["parent"]);
            this.options["parent"].appendChild(accordion);
        } else {
            // document.body.appendChild(button);
        }

        this.element = accordion;
        return this.element;
    }

    getElement() {
        return this.element;
    }
}
export {Accordion};
