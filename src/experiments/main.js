// /*
//  * Copyright (c) 2018, Linkqu and/or its affiliates. All rights reserved.
//  *
//  * Redistribution and use in source and binary forms, with or without
//  * modification, are permitted provided that the following conditions
//  * are met:
//  *
//  *   - Redistributions of source code must retain the above copyright
//  *     notice, this list of conditions and the following disclaimer.
//  *
//  *   - Redistributions in binary form must reproduce the above copyright
//  *     notice, this list of conditions and the following disclaimer in the
//  *     documentation and/or other materials provided with the distribution.
//  *
//  *   - Neither the name of Linkqu or the names of its
//  *     contributors may be used to endorse or promote products derived
//  *     from this software without specific prior written permission.
//  *
//  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
//  * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
//  * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
//  * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
//  * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
//  * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
//  * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
//  * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
//  * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//  */
//
// import {fetch} from "whatwg-fetch";
//
// // Components
// import {Colors} from "./commons/Colors";
// import {Button} from "./components/Button";
// import {TextField} from "./components/TextField";
// import {Table} from "./components/Table";
// import {BorderLayout} from "./layouts/BorderLayout";
// import {Checkbox} from "./components/Checkbox";
// import {Radio} from "./components/Radio";
// import {Pagination} from "./components/Pagination";
// import {Modal} from "./components/Modal";
// import {Tree} from "./components/Tree";
// import {Tabs} from "./components/Tabs";
// import {Accordion} from "./components/Accordion";
// import {Menu} from "./components/Menu";
// import {Toolbar} from "./components/Toolbar";
// import {Tooltip} from "./components/Tooltip";
// import {Components} from "./commons/Components";
//
// // import pkg from "../package.json";
//
// // console.log(`running version ${pkg.version}`);
//
// // Components.buildComponent("Button", {
// //     type: "primary",
// //     text: "Button",
// //     // classes: ["button"],
// //     // css: {
// //     //     "backgroundColor": Color.VOLCANO[5],
// //     //     "borderColor": Color.VOLCANO[5]
// //     // },
// //     parent: document.body,
// //     events: {
// //         "click": function () {
// //             alert("hello!");
// //         }
// //     }
// // });
//
// let borderLayout = new BorderLayout({
//     parent: document.body,
//     // width: 1024,
//     // height: 300,
//     items: [{
//         title: "North Panel",
//         region: "north",
//         items: [{
//             type: Menu,
//             options: {
//                 items: [{
//                     index: "bookmarks",
//                     title: "Bookmarks",
//                     children: [
//                         {
//                             title: "book report",
//                             events: {
//                                 "click": function () {
//                                     alert("hello!");
//                                 }
//                             }
//                         },
//                         {title: "alegrbra"}
//                     ]
//                 }, {
//                     index: "downloads",
//                     title: "Downloads",
//                     children: [
//                         {title: "open report"},
//                         {title: "alegrbra"}
//                     ]
//                 }, {
//                     index: "history",
//                     title: "History",
//                     children: [
//                         {title: "book report history"},
//                         {title: "alegrbra"}
//                     ]
//                 }, {
//                     index: "window",
//                     title: "Window",
//                     children: [
//                         {title: "hide"},
//                         {title: "alegrbra"}
//                     ]
//                 }]
//             }
//         }, {
//             type: Toolbar,
//             options: {
//                 items: [{
//                     index: "bookmarks",
//                     text: "Bookmarks"
//                 }, {
//                     index: "downloads",
//                     text: "Downloads"
//                 }, {
//                     index: "history",
//                     text: "History"
//                 }, {
//                     index: "window",
//                     text: "Window"
//                 }]
//             }
//         }]
//     }, {
//         title: "West Panel",
//         region: "west",
//         width: 184,
//         // split: true,
//         css: {
//             // "background-color": Colors.BLUE[1]
//         },
//         items: [{
//             type: Accordion,
//             options: {
//                 items: [{
//                     id: "bookmarks",
//                     title: "Bookmarks",
//                     children: [
//                         {title: "book report", text: "test"},
//                         {title: "alegrbra", text: "test"}
//                     ]
//                 }, {
//                     id: "downloads",
//                     title: "Downloads",
//                     children: [
//                         {title: "book report", text: ""},
//                         {title: "alegrbra", text: ""}
//                     ]
//                 }, {
//                     id: "history",
//                     title: "History",
//                     children: [
//                         {title: "book report", text: ""},
//                         {title: "alegrbra", text: ""}
//                     ]
//                 }, {
//                     id: "window",
//                     title: "Window",
//                     children: [
//                         {title: "book report", text: ""},
//                         {title: "alegrbra", text: ""}
//                     ]
//                 }]
//             }
//         }]
//     }, {
//         title: "South Panel",
//         region: "south"
//         // height: 50
//     }, {
//         title: "Center Panel",
//         region: "center",
//         items: [{
//             type: Table,
//             options: {
//                 height: 200,
//                 width: 800,
//                 // classes: [""],
//                 // css: {
//                 //     "color": Color.RED[9]
//                 // },
//                 title: "Employee Information Table",
//                 columns: [
//                     {
//                         index: "employee", text: "Employee Name", width: 120, sortable: false, renderer: function (value) {
//                             // language=HTML
//                             return `<a href='index.html'>Hello ${value}!</a>`;
//                         }
//                     },
//                     {index: "sex", text: "Sex", width: 75, sortable: false, renderer: undefined},
//                     {index: "age", text: "Age", width: 75, sortable: false, renderer: undefined},
//                     {index: "mobile", text: "Mobile", width: 120, sortable: false, renderer: undefined},
//                     {index: "email", text: "Email", width: 120, sortable: false, renderer: undefined},
//                     {index: "birthday", text: "Birthday Date", width: 120, sortable: false, renderer: undefined}
//                 ],
//                 data: [
//                     ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
//                     ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
//                     ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
//                     ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
//                     ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
//                     ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
//                     ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
//                     ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
//                     ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"]
//                 ]
//             }
//         }]
//     }, {
//         title: "East Panel",
//         region: "east"
//         // width: 184
//         // split: true,
//     }]
// });
