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

import {Color} from "./component/Color";
import "./component/Button.css";
import {Button} from "./component/Button";
import "./component/TextField.css"
import {TextField} from "./component/TextField";
import "./component/Table.css"
import {Table} from "./component/Table";
import "./layout/BorderLayout.css";
import {BorderLayout} from "./layout/BorderLayout";
import "./component/Checkbox.css";
import {Checkbox} from "./component/Checkbox";
// import pkg from "../package.json";

// console.log(`running version ${pkg.version}`);

let button = new Button({
    type: "primary",
    text: "Button",
    // classes: ["button"],
    // css: {
    //     "fontSize": "12px"
    // },
    parent: document.body,
    events: {
        "click": function () {
            alert("hello!");
        }
    }
});

let textField = new TextField({
    width: "200px",
    // classes: ["text-field"],
    css: {
        "color": Color.RED[9]
    },
    // renderTo
    parent: document.body
});


let table = new Table({
    // width: "200px",
    // classes: [""],
    // css: {
    //     "color": Color.RED[9]
    // },
    parent: document.body,
    title: "Employee Information Table",
    columns: [
        {index: "employee", text: "Employee Name", width: 120, sortable: false, renderer: function () {}},
        {index: "sex", text: "Sex", width: 75, sortable: false, renderer: function () {}},
        {index: "age", text: "Age", width: 75, sortable: false, renderer: function () {}},
        {index: "mobile", text: "Mobile", width: 75, sortable: false, renderer: function () {}},
        {index: "email", text: "Email", width: 75, sortable: false, renderer: function () {}},
        {index: "birthday", text: "Birthday Date", width: 0, sortable: false, renderer: function () {}}
    ],
    data: [
        ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
        ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
        ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
        ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"]
    ]
});

let borderLayout = new BorderLayout({
    parent: document.body,
    items: [{
        title: 'North Panel',
        region: 'north',
        height: 500
    }, {
        title: 'West Panel',
        region: 'west',
        height: 50
    }, {
        title: 'South Panel',
        region: 'south',
        height: 50
    }, {
        title: 'Center Panel',
        region: 'center',
        split: true
    }, {
        title: 'East Panel',
        region: 'east',
        split: true
    }]
});

let checkbox = new Checkbox({
    parent: document.body
});
