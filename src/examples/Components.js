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

/**
 * Components
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Components {

    static buildElementObject(props, events) {
        let elementObject = document.createElement(props["type"]);

        let attributes = props["attributes"];
        if(attributes) {
            for (let attributeKey in attributes) {
                if(attributes.hasOwnProperty(attributeKey)) {
                    elementObject.setAttribute(
                        attributeKey, attributes[attributeKey]
                    );
                }
            }
        }

        let text = props["text"];
        if(text) {
            // let textNode = document.createTextNode(text);
            // elementObject.appendChild(textNode);
            elementObject.innerText = text;
        }

        if(events) {
            for (let eventKey in events) {
                if(events.hasOwnProperty(eventKey)) {
                    elementObject.addEventListener(
                        // call(this, p1, p2)  方法接受的是一个参数列表
                        // apply(this, [p1, p2]) 方法接受的是一个包含多个参数的数组
                        // window["alert"]("");
                        eventKey, events[eventKey]
                    );
                }
            }
        }

        let children = props["children"];
        if(children) {
            children.forEach(function (child) {
                elementObject.appendChild(Components.buildElementObject(child));
            });
        }

        if (props["parent"]) {

        } else {
            document.body.appendChild(elementObject);
        }

        return elementObject;
    }
}

export {Components};
