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

import {Components} from "../frameworks/commons/Components";
import {BorderLayout} from "../frameworks/layouts/BorderLayout";
import {Header} from "../frameworks/components/Header";
import {Accordion} from "../frameworks/components/Accordion";
import {FlexLayout} from "../frameworks/layouts/FlexLayout";

// let aLink = {
//     "type": "div",
//     "attributes": {
//         "id": "simple",
//         "class": "simple"
//     },
//     "events": {
//         "click": function () {
//             alert("hello");
//         }
//     },
//     // Child nodes
//     "children": [{
//         "type": "a",
//         "text": "Link",
//         "attributes": {
//             "href": "http://www.baidu.com"
//         },
//         "events": {
//             "click": function () {
//                 alert("hello");
//             }
//         }
//     }]
// };
//
// document.body.appendChild(
//     Components.buildElementObject(aLink)
// );

let component = Components.buildComponent({
    parent: document.body,
    type: BorderLayout,
    options: {
        items: [{
            title: "North Panel",
            region: "north",
            items: [{
                type: Header,
                options: {}
            }]
        }, {
            title: "West Panel",
            region: "west",
            width: 200,
            css: {
                "padding-top": "50px"
            },
            items: [{
                type: Accordion,
                options: {
                    items: [{
                        id: "bookmarks",
                        title: "Bookmarks",
                        children: [
                            {title: "book report", text: "test"},
                            {title: "alegrbra", text: "test"}
                        ]
                    }, {
                        id: "downloads",
                        title: "Downloads",
                        children: [
                            {title: "book report", text: ""},
                            {title: "alegrbra", text: ""}
                        ]
                    }, {
                        id: "history",
                        title: "History",
                        children: [
                            {title: "book report", text: ""},
                            {title: "alegrbra", text: ""}
                        ]
                    }, {
                        id: "window",
                        title: "Window",
                        children: [
                            {title: "book report", text: ""},
                            {title: "alegrbra", text: ""}
                        ]
                    }]
                }
            }]
        }, {
            title: "South Panel",
            region: "south"
        }, {
            title: "Center Panel",
            region: "center",
            items: [{
                type: FlexLayout,
                options: {
                    css: {
                        "padding-top": "50px",
                        "display": "flex",
                        "-webkit-box-orient": "vertical",
                        "-webkit-flex-direction": "column",
                        "-ms-flex-direction": "column",
                        "flex-direction": "column",
                        "width": "100%",
                        "height": "100%"
                    },
                    items: [{
                        css: {
                            "flex": "0 0 auto",
                            "height": "60px",
                            "line-height": "40px",
                            "padding": "8px"
                        },
                        content: "Header"
                    }, {
                        css: {
                            "position": "relative",
                            "flex": "1",
                            "overflow": "auto",
                            "padding": "8px"
                        },
                        content: "Content"
                    }, {
                        css: {
                            "flex": "0 0 auto",
                            "height": "50px",
                            "line-height": "36px",
                            "padding": "8px",
                            "overflow": "hidden",
                            "border-top": "1px solid #EDEEEF"
                        },
                        content: "Footer"
                    }]
                }
            }]
        }]
    }
});
