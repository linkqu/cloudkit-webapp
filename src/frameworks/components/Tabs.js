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
import {Panel} from "./Panel";

/**
 * Tabs TabbedPane
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Tabs implements Component {

    options: JSON;

    element: HTMLElement;

    childObjects: Map = new Map();

    activeIndex:string = "";

    linkBarItems: Map = new Map();

    viewContentBlocks: Map = new Map();

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

        let tabsWidget = document.createElement("div");
        $this.element = tabsWidget;
        tabsWidget.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        tabsWidget.classList.add("widget-tabs");

        let linkBar = document.createElement("div");
        linkBar.classList.add("link-bar");
        tabsWidget.appendChild(linkBar);

        let viewContent = document.createElement("div");
        viewContent.classList.add("view-content");
        tabsWidget.appendChild(viewContent);

        let items = options["items"];

        // let linkBarItems:Array = new Array(items.length);
        if(items) {
            items.forEach(function (item, index) {

                let linkBarItem = document.createElement("div");
                linkBarItem.classList.add("link-bar-item");
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
                    let currentContent = viewContent.querySelector("div[data-index=" + item["index"] + "]");
                    if(currentContent) {
                        currentContent.classList.add("active");
                    }
                });

                // let viewContentBlock = document.createElement("div");
                // viewContentBlock.classList.add("view-content-block");
                // viewContentBlock.setAttribute("data-index", item["index"]);
                // viewContentBlock.appendChild(document.createTextNode(item["content"] ? item["content"] : ""));

                let viewContentBlock = Components.buildComponent({
                    parent: viewContent,
                    type: Panel,
                    options: {
                        classes: ["view-content-block"],
                        attributes: {
                            "data-index": item["index"],
                        },
                        content: item["content"] ? item["content"] : ""
                    }
                });
                // viewContent.appendChild(viewContentBlock);
                $this.viewContentBlocks.set(item["index"], viewContentBlock);

                if(item["closable"]) {
                    // linkBarItem.style["padding-right"] = "32px";
                    let close = document.createElement("span");
                    close.classList.add("close");
                    // language=HTML
                    close.innerHTML =
                        `
                        <svg class="glyph-icon" style="width: 16px; height: 16px;" fill="#dcdee2">
                            <use xlink:href="#icon-close-circle"/>
                        </svg>
                        `;

                    close.addEventListener("click", function () {

                    });
                    linkBarItem.appendChild(close);
                    close.addEventListener("click", function (event) {
                        // 阻止冒泡
                        // w3c的方法是e.stopPropagation()，IE则是使用e.cancelBubble = true；
                        // 阻止默认行为
                        // w3c的方法是e.preventDefault()，IE则是使用e.returnValue = false;
                        event.stopPropagation();

                        if($this.linkBarItems.size > 1) {
                            linkBarItem.remove();
                            $this.linkBarItems.delete(item["index"]);
                            viewContentBlock.getElement().remove();
                            $this.viewContentBlocks.delete(item["index"]);

                            $this.activeTab($this.linkBarItems.keys().next().value);
                        } else {
                            tabsWidget.remove();
                        }
                    });
                }
                linkBar.appendChild(linkBarItem);
                $this.linkBarItems.set(item["index"], linkBarItem);

                if (item["items"]) {
                    item["items"].forEach(function (item, index, objs) {
                        let component = Components.buildComponent({
                            parent: viewContentBlock,
                            viewId: item["viewId"],
                            type: item["type"],
                            options: item["options"]
                        });

                        $this.childObjects.set(item["viewId"], component)
                    });
                }

                if(index === options["activeTab"]) {
                    // linkBarItem.classList.add("active");
                    // viewContentBlock.getElement().classList.add("active");
                    // $this.activeIndex = options["activeTab"];
                    $this.activeTab(item["index"]);
                }
            });
        }

        if (this.options["parent"]) {
            // console.log(this.options["parent"]);
            if(options["parent"] instanceof HTMLElement) {
                options["parent"].appendChild(tabsWidget);
            } else {
                options["parent"].getElement().appendChild(tabsWidget);
            }
        } else {
            // document.body.appendChild(button);
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

    activeTab(index: string) {
        let $this = this;
        this.linkBarItems.forEach(function (item, index, objs) {
            item.classList.remove("active");
            $this.viewContentBlocks.get(index).getElement().classList.remove("active");
        });
        let linkBarItem = this.linkBarItems.get(index);
        if(linkBarItem) {
            linkBarItem.classList.add("active");
            this.viewContentBlocks.get(index).getElement().classList.add("active");
            this.activeIndex = index;
        }
    }
}

export {Tabs};
