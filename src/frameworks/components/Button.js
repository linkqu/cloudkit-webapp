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

import "./Button.css";
import type {Component} from "./Component";
import {Components} from "../commons/Components";
import {Tooltip} from "./Tooltip";
import {Icon} from "./Icon";
import uuid from "uuid/v1";

/**
 * Button
 * SplitButton
 * CycleButton
 * ButtonGroup
 * Slider
 * ProgressBar
 * ColorPalette
 * DatePicker
 *
 * Window
 * ViewPort
 * BoxComponent
 * Component
 * Container
 * Panel
 * TabPanel
 * TreePanel
 * GridPanel
 * EditorGridPanel
 * PropertyGrid
 * Editor
 * DataView
 * ListView
 * PagingToolbar
 * Toolbar
 * Separator
 * Spacer
 * Menu
 * ColorMenu
 * DateMenu
 * Checkbox
 * ComboBox
 * DateField
 * TimeField
 * Field
 * FieldSet
 * Hidden
 * HtmlEditor
 * Label
 * NumberField
 * Radio
 * TextArea
 * TextField
 * CheckBoxGroup
 * RadioGroup
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Button implements Component {

    options: {
        type: number,
        text: string,
        classes: Array,
        css: JSON,
        parent: HTMLElement,
        events: JSON
    };

    element: HTMLElement;

    /**
     * constructor
     *
     * @param options
     */
    constructor(options: JSON) {

        // default setting
        this.defaultSetting = {
            type: null,
            text: "Button",
            visible: false,
            width: 0,
            height: 0,
            css: [],
            // parent: ,
            classes: ["button"]
        };
        this.options = options;
        this.build();
    }

    /**
     * build
     */
    build() {
        let $this = this, options = this.options;

        let buttonWidget = document.createElement("button");
        $this.element = buttonWidget;
        buttonWidget.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        let fragment = document.createDocumentFragment();

        // Add default class
        buttonWidget.classList.add("widget-button");

        // Add type class
        if (options["type"]) {
            buttonWidget.classList.add("button-" + options["type"]);
        }

        // classes
        let classes = options["classes"];
        if (classes) {
            classes.forEach(function (value) {
                buttonWidget.classList.add(value);
            });
        }

        let icon = options["icon"];
        if(icon) {
            let iconComponent = Components.buildComponent({
                parent: buttonWidget,
                type: Icon,
                options: {
                    content: icon["content"]
                }
            });

            if (options["text"]) {
                iconComponent.css({
                    "margin-right": "4px"
                });
            }
        }

        // text
        if (options["text"]) {
            let text = document.createTextNode(options["text"]);
            /**
             * 参考
             * Node.removeChild()
             * Node.replaceChild()
             * Node.appendChild()
             * Node.insertBefore()
             * Node.hasChildNodes()
             */
            fragment.appendChild(text);
        }

        buttonWidget.appendChild(fragment);

        // events
        let events = options["events"];
        if (events) {
            for (let prop in events) {
                if (events.hasOwnProperty(prop)) {
                    buttonWidget.addEventListener(prop, function (event:Event) {
                        events[prop](event, $this, options["parent"]);
                    })
                }
            }
        }

        let css = options["css"];
        if (css) {
            for (let key in css) {
                if (css.hasOwnProperty(key)) {
                    buttonWidget.style[key] = css[key];
                }
            }
        }

        let tooltipText = options["tooltip"];
        if(options["tooltip"]) {
            let component = Components.buildComponent({
                parent : document.body,
                type: Tooltip,
                options: {
                    target: buttonWidget,
                    text: tooltipText
                }
            });

            buttonWidget.addEventListener("mouseover", function () {
                component.show();
            });

            buttonWidget.addEventListener("mouseout", function () {
                component.hide();
            });
        }

        // renderTo
        if (options["parent"]) {
            // console.log(options["parent"]);
            if(options["parent"] instanceof HTMLElement) {
                options["parent"].appendChild(buttonWidget);
            } else {
                options["parent"].getElement().appendChild(buttonWidget);
            }
        } else {
            // document.body.appendChild(button);
        }

        // developer.mozilla.org/zh-CN/docs/Web/Events
        // DOMElementNameChanged
        // DOMNodeInserted
        // DOMNodeRemoved
        // DOMAttributeNameChanged
        // DOMAttrModified
        document.addEventListener("DOMContentLoaded", function(){

        });

        // button.nextElementSibling
        // button.nextSibling
        // button.parentElement
        // button.previousElementSibling
        // button.previousSibling

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

export {Button};
