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

import "./FlexLayout.css";
import {Components} from "../commons/Components";
import uuid from "uuid/v1";
import {Panel} from "../components/Panel";

/**
 * AbsoluteLayout
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class FlexLayout {

    options: JSON;

    element: HTMLElement;

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

        let flexLayoutWidget = document.createElement("div");
        $this.element = flexLayoutWidget;
        flexLayoutWidget.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        flexLayoutWidget.setAttribute("layout", "flex-layout");
        let width = options["width"], height = options["height"];
        flexLayoutWidget.style.width = width ? width + "px" : null;
        flexLayoutWidget.style.height = height ? height + "px" : null;
        flexLayoutWidget.classList.add("widget-flex-layout");

        let css = options["css"];
        if (css) {
            for (let key in css) {
                if (css.hasOwnProperty(key)) {
                    flexLayoutWidget.style[key] = css[key];
                }
            }
        }

        let items = options["items"];
        items.forEach(function (item, index, objs) {
            Components.buildComponent({
                type: Panel,
                parent: $this,
                options: item
            });
        });

        // renderTo
        if (options["parent"]) {
            // console.log(options["parent"]);
            if(options["parent"] instanceof HTMLElement) {
                options["parent"].appendChild(flexLayoutWidget);
            } else {
                options["parent"].getElement().appendChild(flexLayoutWidget);
            }
        } else {
            // document.body.appendChild(component);
        }

        return $this.element;
    }

    getElement() {
        return this.element;
    }
}

export {FlexLayout};
