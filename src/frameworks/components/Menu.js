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

import "./Menu.css";
import type {Component} from "./Component";
import {Components} from "../commons/Components";
import uuid from "uuid/v1";

/**
 * Menu
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Menu implements Component {

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

        let menuWidget = document.createElement("div");
        $this.element = menuWidget;
        menuWidget.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        menuWidget.classList.add("widget-menu");
        menuWidget.classList.add("clearfix");

        let menuBar = document.createElement("div");
        menuBar.classList.add("menu-bar");
        menuWidget.appendChild(menuBar);

        let items = options["items"];
        if(items) {
            items.forEach(function (item, index, objs) {
                let menuBarItem = document.createElement("div");
                menuBarItem.classList.add("menu-bar-item");
                menuBarItem.appendChild(document.createTextNode(item["title"]));

                // events
                let events = item["events"];
                if (events) {
                    for (let prop in events) {
                        if (events.hasOwnProperty(prop)) {
                            menuBarItem.addEventListener(prop, events[prop])
                        }
                    }
                }

                menuBar.appendChild(menuBarItem);

                let menu = document.createElement("div");
                menu.classList.add("menu");
                menuWidget.appendChild(menu);

                let children = item["children"];
                if(children) {
                    children.forEach(function (item, index, objs) {
                        if(item["type"] === "separator") {
                            let separator = document.createElement("span");
                            separator.classList.add("separator");
                            menu.appendChild(separator);
                        } else {
                            let menuItem = document.createElement("div");
                            menuItem.appendChild(document.createTextNode(item["title"]));
                            menuItem.classList.add("menu-item");

                            // events
                            let events = item["events"];
                            if (events) {
                                for (let prop in events) {
                                    if (events.hasOwnProperty(prop)) {
                                        menuItem.addEventListener(prop, events[prop])
                                    }
                                }
                            }
                            menu.appendChild(menuItem);
                        }
                    });
                }

                menuBarItem.addEventListener("mouseover", function (event) {
                    menu.style["display"] = "inline-block";
                    menu.style["position"] = "absolute";
                    menu.style["top"] = menuBarItem.offsetTop + menuBarItem.clientHeight + "px";
                    menu.style["left"] = menuBarItem.offsetLeft + "px";
                    menu.style["z-index"] = "9999";
                });

                menuBarItem.addEventListener("mouseout", function (event) {
                    menu.style["display"] = "none";
                });

                menu.addEventListener("mouseover", function (event) {
                    menu.style["display"] = "inline-block";
                });

                menu.addEventListener("mouseout", function (event) {
                    menu.style["display"] = "none";
                });
            })
        }

        if (options["parent"]) {
            // console.log(this.options["parent"]);
            if(options["parent"] instanceof HTMLElement) {
                options["parent"].appendChild(menuWidget);
            } else {
                options["parent"].getElement().appendChild(menuWidget);
            }
        } else {
            // document.body.appendChild(button);
        }

        return $this.element;
    }

    getElement() {
        return this.element;
    }
}

export {Menu};
