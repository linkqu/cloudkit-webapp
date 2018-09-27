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

import "./Tabs.css";
import type {Component} from "./Component";
import {Components} from "../commons/Components";
import uuid from "uuid/v1";

/**
 * Tabs TabbedPane
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Tabs implements Component {

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

        let tabs = document.createElement("div");
        tabs.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        tabs.classList.add("widget-tabs");

        let linkBar = document.createElement("div");
        linkBar.classList.add("link-bar");
        tabs.appendChild(linkBar);

        let viewContent = document.createElement("div");
        viewContent.classList.add("view-content");
        tabs.appendChild(viewContent);

        let items = options["items"];

        // let linkBarItems:Array = new Array(items.length);
        if(items) {
            items.forEach(function (item, index) {
                let linkBarItem = document.createElement("div");
                linkBarItem.classList.add("link-bar-item");
                let dataViewId = "data-view-id";
                linkBarItem.setAttribute(Components.VIEW_ID_KEY, item["viewId"] ? item["viewId"] : uuid());
                linkBarItem.setAttribute("data-index", item["index"]);
                linkBarItem.appendChild(document.createTextNode(item["title"] ? item["title"] : ""));
                linkBarItem.addEventListener("click", function (event) {
                    linkBar.childNodes.forEach(function (node, index) {
                        node.classList.remove("active");
                    });
                    linkBarItem.classList.add("active");
                    viewContent.childNodes.forEach(function (node, index) {
                        node.classList.remove("active");
                    });
                    viewContent.querySelector("div[data-index=" + item["index"] + "]").classList.add("active");
                });
                linkBar.appendChild(linkBarItem);

                let viewContentBlock = document.createElement("div");
                viewContentBlock.classList.add("view-content-block");
                viewContentBlock.setAttribute("data-index", item["index"]);
                viewContentBlock.appendChild(document.createTextNode(item["content"] ? item["content"] : ""));

                if (item["items"]) {
                    item["items"].forEach(function (item, index, objs) {
                        Components.buildComponent({
                            parent: viewContentBlock,
                            type: item["type"],
                            options: item["options"]
                        });
                    });
                }

                viewContent.appendChild(viewContentBlock);

                if(index === options["activeTab"]) {
                    linkBarItem.classList.add("active");
                    viewContentBlock.classList.add("active");
                }
            });
        }

        if (this.options["parent"]) {
            // console.log(this.options["parent"]);
            this.options["parent"].appendChild(tabs);
        } else {
            // document.body.appendChild(button);
        }
        
        return this.element = tabs;
    }

    getElement() {
        return this.element;
    }
}

export {Tabs};
