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

import "./Tree.css";
import type {Component} from "./Component";

/**
 * Tree
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Tree implements Component {

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
        let tree = document.createElement("ul");
        tree.classList.add("widget-tree");

        let data = this.options["data"];
        if(data) {
            Tree.buildNode(tree, data);
        }

        if (this.options["parent"]) {
            // console.log(this.options["parent"]);
            this.options["parent"].appendChild(tree);
        } else {
            // document.body.appendChild(tree);
        }
    }

    static buildNode(parent, data) {
        data.forEach(function (item, index, objs) {
            let node = document.createElement("li");
            parent.appendChild(node);
            if(item["leaf"]) {
                node.classList.add("leaf");
                if(index + 1 === data.length) {
                    node.classList.add("last-leaf");
                }
            } else {
                node.classList.add("branch");

                if(index + 1 === data.length) {
                    node.classList.add("last-branch");
                }
            }

            let rootSystem = document.createElement("span");
            if(item["children"]) {
                rootSystem.classList.add(item["expanded"]? "icon-expand" : "icon-collapse");
                if(item["expanded"]) {
                    rootSystem.innerHTML = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\">\n" +
                        "    <path d=\"M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z\" fill=\"#333333\"/>\n" +
                        "    <path d=\"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z\" fill=\"#333333\"/>\n" +
                        "</svg>";
                } else {
                    rootSystem.innerHTML = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\">\n" +
                        "    <path d=\"M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z\" fill=\"#333333\"/>\n" +
                        "    <path d=\"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z\" fill=\"#333333\"/>\n" +
                        "</svg>";
                }

            } else {
                rootSystem.classList.add("icon-fibre");
            }
            node.appendChild(rootSystem);

            let noteContent = document.createElement("a");
            let noteIcon = document.createElement("span");
            noteIcon.classList.add("icon");
            if(item["leaf"]) {

                noteIcon.innerHTML ="<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\">\n" +
                    "    <path d=\"M853.333333 960H170.666667V64h469.333333l213.333333 213.333333z\" fill=\"#90CAF9\"></path>\n" +
                    "    <path d=\"M821.333333 298.666667H618.666667V96z\" fill=\"#E1F5FE\"></path>\n" +
                    "</svg>";
            } else {
                noteIcon.innerHTML = "<svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\">\n" +
                    "    <path d=\"M977.6 238.4c-9.6-9.6-21.6-14.4-33.6-14.4H472L366.4 118.4c-4-4-9.6-8-15.2-10.4-6.4-2.4-12-4-18.4-4H80c-12 0-24.8 4.8-33.6 14.4S32 140 32 152v280h960V272c0-12-4.8-24.8-14.4-33.6z\" fill=\"#FFD766\"></path>\n" +
                    "    <path d=\"M944 912H80c-26.4 0-48-21.6-48-48V352h960v512c0 26.4-21.6 48-48 48z\" fill=\"#FFAC33\"></path>\n" +
                    "</svg>";
            }
            noteContent.appendChild(noteIcon);
            let noteText = document.createElement("span");
            noteText.classList.add("node-text");
            if(item["text"]) {
                noteText.appendChild(document.createTextNode(item["text"]));
            }
            noteContent.appendChild(noteText);
            node.appendChild(noteContent);

            if(item["children"]) {
                let children = document.createElement("ul");
                if(index + 1 === data.length) {
                    children.style["background"] = "none";
                }
                Tree.buildNode(children, item["children"]);
                node.appendChild(children);
            }

            // events
            let events = item["events"];
            if (events) {
                for (let prop in events) {
                    if (events.hasOwnProperty(prop)) {
                        noteContent.addEventListener(prop, events[prop])
                    }
                }
            }
        });
    }
}

export {Tree};
