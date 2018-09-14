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

import "./Tooltip.css";
import type {Component} from "./Component";

/**
 * Tooltip
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Tooltip implements Component {

    options: JSON;

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

        let tooltip = document.createElement("div");
        tooltip.classList.add("widget-tooltip");

        let arrow = document.createElement("div");
        arrow.classList.add("tooltip-arrow");
        tooltip.appendChild(arrow);

        let text = document.createElement("div");
        text.classList.add("tooltip-text");
        text.appendChild(document.createTextNode(options["text"]));
        tooltip.appendChild(text);

        let parent = options["parent"];
        if (parent) {
            // console.log(parent);
            parent.appendChild(tooltip);
        } else {
            document.body.appendChild(tooltip);
        }

        let target = options["target"];
        if(target) {
            let targetElement = target.getElement();
            tooltip.style["position"] = "absolute";
            tooltip.style["top"] = (targetElement.offsetTop - tooltip.clientHeight) + "px";
            tooltip.style["left"] = (targetElement.offsetLeft - 6) + "px";
            tooltip.style["z-index"] = "9999";
        }

        return this.element = tooltip;
    }

    getElement() {
        return this.element;
    }
}

export {Tooltip};
