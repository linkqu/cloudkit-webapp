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

import "./Select.css";
import type {Component} from "./Component";
import {Components} from "../commons/Components";
import uuid from "uuid/v1";

/**
 * Select selection
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Select implements Component {

    options: JSON;

    element: HTMLElement;

    children: Map = new Map();

    selectList: Array = [];

    data: Array = [];

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

        let selectWidget = document.createElement("div");
        $this.element = selectWidget;
        selectWidget.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        selectWidget.classList.add("widget-select");

        let input = document.createElement("input");
        input.type = "text";
        // input.readOnly = true;
        if(options["name"]) {
            input.name = options["name"];
        }

        if(options["id"]) {
            input.id = options["id"];
        }
        // propertychange
        input.addEventListener("input", function () {
            if(input.value) {
                let data = [];
                $this.data.forEach(function (row, index, objs) {
                    if(row["name"].startsWith(input.value)) {
                        data.push(row);
                    }
                    // $this.loadData(data);
                });
            } else {
                $this.loadData($this.data);
            }
        });
        input.addEventListener("keyup", function (event) {
            let keyCode = event.keyCode;

            // Tab键展开
            if(keyCode === 9){

            }
        });
        input.addEventListener("keydown", function (event) {
            let keyCode = event.keyCode;
            // Tab键隐藏
            if(keyCode === 9){

            }

            // Up 键
            if(keyCode === 38) {

            }

            // Down 键
            if(keyCode === 40){

            }

            // Enter 键
            if(keyCode === 13){
                event.preventDefault();
                // click
            }
        });

        selectWidget.appendChild(input);

        let arrowDownIcon = document.createElement("span");
        arrowDownIcon.classList.add("arrow-down");
        // language=HTML
        arrowDownIcon.innerHTML = `<svg class="glyph-icon" style="width: 16px; height: 16px;"><use xlink:href="#icon-arrow-down"/></svg>`;

        arrowDownIcon.addEventListener("click", function () {
            selectDropdown.style["display"] = "inline-block";
            selectDropdown.style["position"] = "absolute";
            selectDropdown.style["top"] = selectWidget.offsetTop + selectWidget.clientHeight + "px";
            selectDropdown.style["left"] = selectWidget.offsetLeft + "px";
            selectDropdown.style["z-index"] = "9999";
            arrowDownIcon.style.fill = "#2d8cf0";
            selectWidget.style.borderBottomColor = "#2d8cf0";
            event.stopPropagation();
        });
        selectWidget.appendChild(arrowDownIcon);

        let selectDropdown = document.createElement("div");
        selectDropdown.classList.add("select-dropdown");
        selectDropdown.classList.add("clearfix");
        if(options["dropdownHeight"]) {
            selectDropdown.style.height = options["dropdownHeight"] + "px";
        }
        selectWidget.appendChild(selectDropdown);

        let data = options["data"];
        $this.data = data;
        $this.loadData(data);
        $this.selectList.forEach(function (item, index, objs) {
            item.addEventListener("click", function (event) {

                let row = JSON.parse(item.getAttribute("data-item"));
                let text = "";
                let fields = $this.options["fields"];
                fields.forEach(function (field, index, objs) {
                    if(index === 0) {
                        text += row[field];
                    } else {
                        text += ", " + row[field];
                    }
                });

                input.value = text;
                input.setAttribute("data-value", item.getAttribute("data-item"));
                selectDropdown.style["display"] = "none";
                event.stopPropagation();
            });
            selectDropdown.appendChild(item);
        });

        selectWidget.addEventListener("click", function (event) {
            selectDropdown.style["display"] = "inline-block";
            selectDropdown.style["position"] = "absolute";
            selectDropdown.style["top"] = selectWidget.offsetTop + selectWidget.clientHeight + "px";
            selectDropdown.style["left"] = selectWidget.offsetLeft + "px";
            selectDropdown.style["z-index"] = "9999";

            arrowDownIcon.style.fill = "#2d8cf0";
            selectWidget.style.borderBottomColor = "#2d8cf0";
            event.stopPropagation();
        });

        document.addEventListener("click", function (event) {
            selectDropdown.style["display"] = "none";
            arrowDownIcon.style.fill = "#000000";
            selectWidget.style.borderBottomColor = "#dcdee2";
        });

        // renderTo
        if (options["parent"]) {
            // console.log(options["parent"]);
            if(options["parent"] instanceof HTMLElement) {
                options["parent"].appendChild(selectWidget);
            } else {
                options["parent"].getElement().appendChild(selectWidget);
            }
        } else {
            // document.body.appendChild(component);
        }

        document.addEventListener("DOMContentLoaded", function () {
            selectDropdown.style.width = selectWidget.clientWidth - 2 + "px";
        });

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

    loadData(data:Array) {
        let $this = this;

        if(data) {
            data.forEach(function (row, index, objs) {
                let selectListItem = document.createElement("div");
                selectListItem.classList.add("select-list-item");

                let text = "";
                let fields = $this.options["fields"];
                fields.forEach(function (field, index, objs) {
                    if(index === 0) {
                        text += row[field];
                    } else {
                        text += "," + row[field];
                    }
                });
                selectListItem.appendChild(document.createTextNode(text));
                selectListItem.setAttribute("data-item", JSON.stringify(row));
                selectListItem.setAttribute("tabindex", -1);
                $this.selectList.push(selectListItem);
            });
        }
    }
}

export {Select};
