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

import "./Toolbar.css";
import {Button} from "./Button";
import {Separator} from "./Separator";
import type {Component} from "./Component";
import {Components} from "../commons/Components";
import uuid from "uuid/v1";

/**
 * Toolbar
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Toolbar implements Component {

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

        let toolbar = document.createElement("div");
        toolbar.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        toolbar.classList.add("widget-toolbar");
        if(options["id"]) {
            toolbar.id = options["id"];
        }

        let items = options["items"];
        if(items) {
            items.forEach(function (item, index, objs) {

                let component = Components.buildComponent({
                    parent: toolbar,
                    type: item["type"],
                    options: item["options"]
                });

                // let button = new Button({
                //     parent: toolbar,
                //     text: "Button"
                // });
                //
                // new Separator({
                //     parent: toolbar
                // });

                // events
                let events = item["events"];
                if (events) {
                    for (let prop in events) {
                        if (events.hasOwnProperty(prop)) {
                            component.getElement().addEventListener(prop, events[prop])
                        }
                    }
                }
            });
        }

        if (options["parent"]) {
            // console.log(this.options["parent"]);
            options["parent"].appendChild(toolbar);
        } else {
            // document.body.appendChild(toolbar);
        }

        return this.element = toolbar;
    }

    getElement() {
        return this.element;
    }
}

export {Toolbar};
