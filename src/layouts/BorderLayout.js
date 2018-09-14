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

/**
 * BorderLayout
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class BorderLayout {

    options: JSON;

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
        let borderLayout = document.createElement("div");

        borderLayout.setAttribute("layout", "border-layout");
        let width = this.options["width"], height = this.options["height"];
        borderLayout.style.width = width ? width + "px" : null;
        borderLayout.style.height = height ? height + "px" : null;
        borderLayout.classList.add("border-layout");

        let panels = {};
        let items = this.options["items"];
        items.forEach(function (item, index, objs) {
            let panel = document.createElement("div");
            panel.setAttribute("region", item["region"]);

            panel.setAttribute("title", item["title"]);

            // let text = document.createTextNode(item["title"]);
            // panel.appendChild(text);

            let width = item["width"], height = item["height"];
            // console.log("width: %d, height: %d", width, height);
            panel.style.width = width ? width + "px" : null;
            panel.style.height = height ? height + "px" : null;
            // console.log("panel width: %d, panel height: %d", panel.style.width, panel.style.height);

            let css = item["css"];
            if (css) {
                for (let key in css) {
                    if (css.hasOwnProperty(key)) {
                        panel.style[key] = css[key];
                    }
                }
            }

            if(item["items"]) {
                item["items"].forEach(function (item, index, objs) {
                    Components.buildComponent(
                        panel,
                        item["type"],
                        item["options"]
                    ).getElement();
                });
            }

            panels[item["region"]] = panel;
        });

        // CENTER、EAST、WEST、NORTH、SOUTH
        let northPanel = panels["north"], southPanel = panels["south"];
        let westPanel = panels["west"], centerPanel = panels["center"], eastPanel = panels["east"];

        if (northPanel) {
            northPanel.classList.add("north");
            borderLayout.appendChild(northPanel);
        }

        if (westPanel || eastPanel) {
            let mainPanel = document.createElement("div");
            mainPanel.classList.add("border-layout");
            mainPanel.classList.add("has-side");
            borderLayout.appendChild(mainPanel);

            if (westPanel) {
                westPanel.classList.add("west");
                mainPanel.appendChild(westPanel);
            }

            if (centerPanel) {
                centerPanel.classList.add("center");
                mainPanel.appendChild(centerPanel);
            }

            if (eastPanel) {
                eastPanel.classList.add("east");
                mainPanel.appendChild(eastPanel);
            }
        } else {
            if (centerPanel) {
                centerPanel.classList.add("center");
                borderLayout.appendChild(centerPanel);
            }
        }

        if (southPanel) {
            southPanel.classList.add("south");
            borderLayout.appendChild(southPanel);
        }

        if (this.options["parent"]) {
            // console.log(this.options["parent"]);
            this.options["parent"].appendChild(borderLayout);
        } else {
            // document.body.appendChild(table);
        }

        return borderLayout;
    }
}

export {BorderLayout};
