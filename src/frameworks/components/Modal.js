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

import "./Modal.css";
import {Button} from "./Button";
import type {Component} from "./Component";
import {Components} from "../commons/Components";
import uuid from "uuid/v1";

/**
 * Modal
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Modal implements Component {

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
        this.defaultSetting = {};
        this.options = options;
        this.build();
    }

    /**
     * build
     */
    build() {
        let $this = this, options = this.options;

        let modal = document.createElement("div");
        modal.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        modal.classList.add("widget-modal");
        if(options["id"]) {
            modal.id = options["id"];
        }
        if (options["width"]) {
            modal.style["width"] = options["width"] + "px";
        }
        if (options["height"]) {
            modal.style["height"] = options["height"] + "px";
        }

        let close = document.createElement("span");
        close.classList.add("modal-close");
        // language=HTML
        close.innerHTML =
            "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width='16' height='16'>" +
            "    <path d=\"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z\"/>" +
            "</svg>";

        close.addEventListener("click", function () {
            modal.remove();
        });
        modal.appendChild(close);

        let title = document.createElement("div");
        title.classList.add("modal-title");
        if (options["title"]) {
            title.appendChild(document.createTextNode(options["title"]));
        }
        modal.appendChild(title);

        let content = document.createElement("div");
        content.classList.add("modal-content");
        if (options["content"]) {
            content.appendChild(document.createTextNode(options["content"]));
        }
        modal.appendChild(content);

        if (options["parent"]) {
            // console.log(options["parent"]);
            options["parent"].appendChild(modal);
        } else {
            // document.body.appendChild(modal);
        }

        let footer = document.createElement("div");
        footer.classList.add("modal-footer");

        let buttons = options["buttons"];
        buttons.forEach(function (item, index, objs) {
            let buttons = Components.buildComponent({
                parent: footer,
                type: Button,
                options: {
                    type: item["type"],
                    text: item["text"],
                    events: item["events"]
                }
            });

        });
        modal.appendChild(footer);

        window.addEventListener('resize', function () {
            modal.style["position"] = "fixed";
            modal.style["z-index"] = "9999";
            modal.style["top"] = (window.innerHeight - modal.clientHeight) / 2 - 60 + "px";
            modal.style["left"] = (window.innerWidth - modal.clientWidth) / 2 + "px";
        });

        title.addEventListener('mousedown', function () {

        });
        title.addEventListener('mousemove', function () {

        });
        title.addEventListener('mouseup', function () {

        });

        return this.element = modal;
    }

    getElement() {
        return this.element;
    }

    show() {
        let modal = this.element;
        let title = modal.querySelector(".modal-title");
        let close = modal.querySelector(".modal-close");
        let footer = modal.querySelector(".modal-footer");
        // console.log("%o, %o, %o, %o", modal, title, close, footer);

        modal.style["display"] = "block";
        modal.style["position"] = "fixed";
        modal.style["z-index"] = "9999";
        modal.style["top"] = (window.innerHeight - modal.clientHeight) / 2 - 60 + "px";
        modal.style["left"] = (window.innerWidth - modal.clientWidth) / 2 + "px";

        close.style["top"] = (title.clientHeight - close.clientHeight) / 2 + "px";
        close.style["left"] = (modal.clientWidth - close.clientWidth) - 16 + "px";

        footer.style["top"] = modal.clientHeight - footer.clientHeight + "px";
        // footer.style["left"] = (modal.clientWidth - footer.clientWidth) + "px";
        footer.style["width"] = modal.clientWidth + "px";
    }

    hide() {
        this.element.style["display"] = "none";
    }

    close() {
        let modal = this.element;
        modal.remove();
    }

    resize() {

    }
}

export {Modal};
