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

import {fetch} from "whatwg-fetch";

// Components
import {Color} from "./components/Color";
import {Button} from "./components/Button";
import {TextField} from "./components/TextField";
import {Table} from "./components/Table";
import {BorderLayout} from "./layouts/BorderLayout";
import {Checkbox} from "./components/Checkbox";
import {Radio} from "./components/Radio";
import {Pagination} from "./components/Pagination";
import {Modal} from "./components/Modal";
import {Tree} from "./components/Tree";
import {Tabs} from "./components/Tabs";

// import pkg from "../package.json";

// console.log(`running version ${pkg.version}`);

let button = new Button({
    type: "primary",
    text: "Button",
    // classes: ["button"],
    // css: {
    //     "backgroundColor": Color.VOLCANO[5],
    //     "borderColor": Color.VOLCANO[5]
    // },
    parent: document.body,
    events: {
        "click": function () {
            alert("hello!");
        }
    }
});

let textField = new TextField({
    type: "password",
    width: "200px",
    // classes: ["text-field"],
    css: {
        "color": Color.VOLCANO[5]
    },
    // renderTo
    parent: document.body
});


let table = new Table({
    width: 800,
    height: 200,
    // classes: [""],
    // css: {
    //     "color": Color.RED[9]
    // },
    parent: document.body,
    title: "Employee Information Table",
    columns: [
        {
            index: "employee", text: "Employee Name", width: 120, sortable: false, renderer: function (value) {
                // language=HTML
                return `<a href='index.html'>Hello ${value}!</a>`;
            }
        },
        {index: "sex", text: "Sex", width: 75, sortable: false, renderer: undefined},
        {index: "age", text: "Age", width: 75, sortable: false, renderer: undefined},
        {index: "mobile", text: "Mobile", width: 120, sortable: false, renderer: undefined},
        {index: "email", text: "Email", width: 120, sortable: false, renderer: undefined},
        {index: "birthday", text: "Birthday Date", width: 400, sortable: false, renderer: undefined}
    ],
    data: [
        ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
        ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
        ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
        ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
        ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
        ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
        ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
        ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
        ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"]
    ]
});

let pagination = new Pagination({
    pageable: {
        totalElements: 220,
        pageSize: 20,
        // java: pageSize == 0 ? 1 : (int) Math.ceil((double) totalElements / (double) pageSize);
        // javascript: (pageSize === 0) ? 1 : Math.ceil(totalElements / pageSize)
        // totalPages: 11,
        pageNumber: 5,
        // hasNext: true,
        // isLast: false,
        numberOfElements: 20,
        // [10, 20, 30, 40, 50]
        previousLinkText: "Previous Page",
        nextLinkText: "Next Page"
    },
    parent: document.body
});

let checkbox = new Checkbox({
    id: "c1",
    text: "Checkbox",
    parent: document.body
});

new Checkbox({
    id: "c2",
    disabled: true,
    text: "Checkbox",
    parent: document.body
});

let radio = new Radio({
    id: "t1",
    name: "type",
    text: "Radio",
    parent: document.body
});

new Radio({
    id: "t2",
    name: "type",
    text: "Radio",
    parent: document.body
});

new Radio({
    id: "t3",
    disabled: true,
    name: "test",
    text: "Radio",
    parent: document.body
});

let borderLayout = new BorderLayout({
    parent: document.body,
    width: 1024,
    height: 300,
    items: [{
        title: "North Panel",
        region: "north",
        height: 50
    }, {
        title: "West Panel",
        region: "west",
        width: 184
        // split: true
    }, {
        title: "South Panel",
        region: "south",
        height: 50
    }, {
        title: "Center Panel",
        region: "center"
    }, {
        title: "East Panel",
        region: "east",
        width: 184
        // split: true,
    }]
});

new Modal({
    width: 400,
    height: 180,
    title: "提示",
    parent: document.body
});

new Tree({
    parent: document.body,
    data: [{
        text: "List",
        expanded: true,
        children: [
            {text: "detention", leaf: true},
            {
                text: "homework", expanded: true,
                children: [
                    {text: "book report", leaf: true},
                    {text: "alegrbra", leaf: true}
                ]
            },
            {text: "buy lottery tickets", leaf: true}
        ],
        events: {
            "click": function () {
                alert("hello!");
            }
        }
    }, {text: "buy lottery tickets", leaf: true}]
});

new Tabs({
    parent: document.body,
    activeTab: 0,
    items: [{
        index: "bookmarks",
        title: "Bookmarks",
        content: "Bookmarks content",
        closable: true,
        layout: ""
    }, {
        index: "downloads",
        title: "Downloads",
        content: "Downloads content",
        closable: true,
        layout: ""
    }, {
        index: "history",
        title: "History",
        content: "History content",
        closable: true,
        layout: ""
    }, {
        index: "window",
        title: "Window",
        content: "Window content",
        closable: true,
        layout: ""
    }]
});

/**
 * https://github.com/github/fetch
 */
// HTML
// fetch("./index.html")
//     .then(function(response) {
//         return response.text()
//     })
//     .then(function(body) {
//         document.body.innerHTML = body
//     });

// JSON
fetch("./data.json")
    .then(function (response) {
        console.log(response.headers.get("Content-Type"))
        console.log(response.headers.get("Date"))
        console.log(response.status)
        console.log(response.statusText)
        return response.json()
    }).then(function (json) {
        console.log("parsed json", json)
    }).catch(function (ex) {
        console.log("parsing failed", ex)
    });

// Response metadata
// let form = document.querySelector("form")
// fetch("./users", {
//     method: "POST",
//     body: new FormData(form)
// });

// // Post form
// let form = document.querySelector("form");
//
// fetch("./users", {
//     method: "POST",
//     body: new FormData(form)
// });
//
// // Post JSON
// fetch("./users", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name: "Hubot",
//         login: "hubot",
//     })
// });
//
// // File upload
// let input = document.querySelector("input[type="file"]");
//
// let data = new FormData();
// data.append("file", input.files[0]);
// data.append("user", "hubot");
//
// fetch("./avatars", {
//     method: "POST",
//     body: data
// });
