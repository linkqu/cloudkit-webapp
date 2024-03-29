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

import type {Component} from "../components/Component";
import uuid from "uuid/v1";

// const VIEW_ID_KEY:string = "data-view-id";

/**
 * Dialog
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Components {

    static VIEW_ID_KEY = "data-view-id";

    static buildElementObject(definition: JSON) {
        let elementObject = document.createElement(definition["type"]);

        let attributes = definition["attributes"];
        if(attributes) {
            for (let attributeKey in attributes) {
                if(attributes.hasOwnProperty(attributeKey)) {
                    elementObject.setAttribute(
                        attributeKey, attributes[attributeKey]
                    );
                }
            }
        }

        let text = definition["text"];
        if(text) {
            let textNode = document.createTextNode(text);
            elementObject.appendChild(textNode);
        }

        let events = definition["events"];
        //
        // if(events) {
        //     for (let eventKey in events) {
        //         if(events.hasOwnProperty(eventKey)) {
        //             elementObject.addEventListener(
        //                 eventKey, events[eventKey]
        //             );
        //         }
        //     }
        // }
        events && function () {
            for (let eventKey in events) {
                if(events.hasOwnProperty(eventKey)) {
                    elementObject.addEventListener(
                        eventKey, events[eventKey]
                    );
                }
            }
        }();

        let children = definition["children"];
        if(children) {
            children.forEach(function (child) {
                elementObject.appendChild(Components.buildElementObject(child));
            });
        }

        return elementObject;
    }

    /**
     * Build component
     */
    static buildComponent(options: JSON) {
        try {
            // console.log("buildComponent: %s", options["type"]);

            // target
            if(options["parent"]) {
                options["options"]["parent"] = options["parent"];
            }

            if(options["viewId"]) {
                options["options"]["viewId"] = options["viewId"];
            } else {
                options["options"]["viewId"] = uuid();
            }
            return new options["type"](options["options"]);
        } catch (error) {
            console.log("type: %s, error: %o", typeof options["type"], error);
        }

    }
}

export {Components};
