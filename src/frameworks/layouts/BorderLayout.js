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

import "./BorderLayout.css"
import {Components} from "../commons/Components";
import type {Component} from "../components/Component";
import uuid from "uuid/v1";
import {Panel} from "../components/Panel";

/**
 * BorderLayout
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class BorderLayout implements Component {

    options: JSON;

    element: HTMLElement;

    childObjects: Map = new Map();

    /**
     * constructor
     *
     * @param options
     */
    constructor(options: JSON) {
        // default setting
        // collapsible
        // border
        // split
        this.defaultSetting = {};
        this.options = options;
        this.build();
    }

    /**
     * build
     */
    build() {
        let $this = this, options = this.options;

        let borderLayout = document.createElement("div");
        $this.element = borderLayout;
        borderLayout.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        borderLayout.setAttribute("layout", "border-layout");
        let width = options["width"], height = options["height"];
        borderLayout.style.width = width ? width + "px" : null;
        borderLayout.style.height = height ? height + "px" : null;
        borderLayout.classList.add("border-layout");

        let panels = {};
        let items = options["items"];
        items.forEach(function (item, index, objs) {

            let panel = Components.buildComponent({
                type: Panel,
                viewId: item["viewId"],
                options: {
                    attributes: {
                        region: item["region"],
                        title: item["title"]
                    },
                    width: item["width"] + "px",
                    height: item["height"] + "px"
                },
                hidden: item["hidden"]
            });

            if (item["viewId"]) {
                $this.childObjects.set(item["viewId"], panel);
            }

            if (item["items"]) {
                item["items"].forEach(function (item, index, objs) {
                    let component = Components.buildComponent({
                        parent: panel,
                        viewId: item["viewId"],
                        type: item["type"],
                        options: item["options"]
                    });
                    panel.addChild(item["viewId"], component);
                });
            }

            panels[item["region"]] = panel;
        });

        // CENTER、EAST、WEST、NORTH、SOUTH
        let northPanel = panels["north"], southPanel = panels["south"];
        let westPanel = panels["west"], centerPanel = panels["center"], eastPanel = panels["east"];

        if (northPanel) {
            northPanel.getElement().classList.add("north");
            borderLayout.appendChild(northPanel.getElement());
        }

        if (westPanel || eastPanel) {
            let mainPanel = document.createElement("div");
            mainPanel.classList.add("border-layout");
            mainPanel.classList.add("has-side");
            borderLayout.appendChild(mainPanel);

            if (westPanel) {
                westPanel.getElement().classList.add("west");
                mainPanel.appendChild(westPanel.getElement());
            }

            if (centerPanel) {
                centerPanel.getElement().classList.add("center");
                mainPanel.appendChild(centerPanel.getElement());
            }

            if (eastPanel) {
                eastPanel.getElement().classList.add("east");
                mainPanel.appendChild(eastPanel.getElement());
            }
        } else {
            if (centerPanel) {
                centerPanel.getElement().classList.add("center");
                borderLayout.appendChild(centerPanel.getElement());
            }
        }

        if (southPanel) {
            southPanel.getElement().classList.add("south");
            borderLayout.appendChild(southPanel.getElement());
        }

        if (options["parent"]) {
            // console.log(this.options["parent"]);
            if (options["parent"] instanceof HTMLElement) {
                options["parent"].appendChild(borderLayout);
            } else {
                options["parent"].getElement().appendChild(borderLayout);
            }
        } else {
            // document.body.appendChild(table);
        }

        return $this.element;
    }

    getElement() {
        return this.element;
    }

    getChildren() {
        return this.childObjects;
    }

    setChildren(objects: Map<string, Component>) {
        this.childObjects = objects;
    }

    getChild(key:string) {
        return this.childObjects.get(key);
    }

    addChild(key: string, object: Component) {
        this.childObjects.set(id, object);
    }

    removeChild(key: string) {
        this.childObjects.delete(key)
    }
}

export {BorderLayout};
