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
import {Colors} from "../frameworks/commons/Colors";
import {Button} from "../frameworks/components/Button";
import {TextField} from "../frameworks/components/TextField";
import {Table} from "../frameworks/components/Table";
import {BorderLayout} from "../frameworks/layouts/BorderLayout";
import {Checkbox} from "../frameworks/components/Checkbox";
import {Radio} from "../frameworks/components/Radio";
import {Pagination} from "../frameworks/components/Pagination";
import {Modal} from "../frameworks/components/Modal";
import {Tree} from "../frameworks/components/Tree";
import {Tabs} from "../frameworks/components/Tabs";
import {Accordion} from "../frameworks/components/Accordion";
import {Menu} from "../frameworks/components/Menu";
import {Toolbar} from "../frameworks/components/Toolbar";
import {Tooltip} from "../frameworks/components/Tooltip";
import {Components} from "../frameworks/commons/Components";
import {Separator} from "../frameworks/components/Separator";

import {Profile} from "./accounts/Profile";
import {Icon} from "../frameworks/components/Icon";

// import pkg from "../package.json";

// console.log(`running version ${pkg.version}`);

Components.buildComponent({
    parent: document.body,
    type: BorderLayout,
    options: {
        // width: 1024,
        // height: 300,
        items: [{
            title: "North Panel",
            region: "north",
            items: [{
                type: Menu,
                options: {
                    items: [{
                        index: "bookmarks",
                        title: "Bookmarks",
                        children: [
                            {
                                title: "book report",
                                events: {
                                    "click": function () {
                                        alert("hello!");
                                    }
                                }
                            },
                            {title: "alegrbra"}
                        ]
                    }, {
                        index: "downloads",
                        title: "Downloads",
                        children: [
                            {title: "open report"},
                            {title: "alegrbra"}
                        ]
                    }, {
                        index: "history",
                        title: "History",
                        children: [
                            {title: "book report history"},
                            {title: "alegrbra"}
                        ]
                    }, {
                        index: "window",
                        title: "Window",
                        children: [
                            {title: "hide"},
                            {title: "alegrbra"}
                        ]
                    }, {
                        index: "help",
                        title: "Help",
                        children: [
                            {title: "hide"},
                            {title: "alegrbra"}
                        ]
                    }]
                }
            }, {
                type: Toolbar,
                options: {
                    items: [{
                        type: Separator,
                        index: "separator",
                        options: {}
                    }, {
                        type: Button,
                        index: "bookmarks",
                        options: {
                            text: "Bookmarks",
                            icon: {
                                content: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z\"/></svg>"
                            },
                            events: {
                                click: function () {
                                    alert("Test");
                                }
                            }
                        }
                    }, {
                        type: Button,
                        index: "downloads",
                        options: {
                            text: "Downloads"
                        }
                    }, {
                        type: Button,
                        index: "history",
                        options: {
                            text: "History"
                        }
                    }, {
                        type: Button,
                        index: "window",
                        options: {
                            text: "Window"
                        }
                    }, {
                        type: Separator,
                        options: {}
                    }, {
                        type: TextField,
                        options: {
                            type: "text",
                            width: "120px"
                        }
                    }, {
                        type: Checkbox,
                        options: {
                            id: "c1",
                            text: "Checkbox"
                        }
                    }, {
                        type: Checkbox,
                        options: {
                            id: "c2",
                            text: "Checkbox"
                        }
                    }, {
                        type: Radio,
                        options: {
                            id: "t1",
                            name: "type",
                            text: "Radio"
                        }
                    }, {
                        type: Radio,
                        options: {
                            id: "t2",
                            name: "type",
                            text: "Radio"
                        }
                    }, {
                        type: Icon,
                        options: {
                            content: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z\"/></svg>"
                        }
                    }]
                }
            }]
        }, {
            title: "West Panel",
            region: "west",
            width: 200,
            // split: true,
            css: {
                // "background-color": Colors.BLUE[1]
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
            }, {
                type: Tree,
                options: {
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
                                // alert("hello!");
                            }
                        }
                    }, {text: "buy lottery tickets", leaf: true}]
                }
            }]
        }, {
            title: "South Panel",
            region: "south"
            // height: 50
        }, {
            title: "Center Panel",
            region: "center",
            items: [{
                type: Profile,
                options: {
                    items: [{
                        type: Toolbar,
                        options: {
                            items: [{
                                type: Button,
                                index: "add",
                                options: {
                                    text: "新增",
                                    tooltip: "Add a new bill!",
                                    events: {
                                        click: function (e) {
                                            let modal = Components.buildComponent({
                                                parent: document.body,
                                                type: Modal,
                                                options: {
                                                    width: 400,
                                                    height: 180,
                                                    title: "提示",
                                                    content: "Hello!",
                                                    buttons: [{
                                                        text: "Close",
                                                        events: {
                                                            "click": function () {
                                                                modal.hide();
                                                            }
                                                        }
                                                    }, {
                                                        type: "primary",
                                                        text: "Submit",
                                                        events: {
                                                            "click": function () {
                                                                alert("hello!");
                                                            }
                                                        }
                                                    }]
                                                }
                                            });
                                            modal.show();
                                        }
                                    }
                                }
                            }, {
                                type: Button,
                                index: "modify",
                                options: {
                                    text: "修改"
                                }
                            }, {
                                type: Button,
                                index: "delete",
                                options: {
                                    text: "删除"
                                }
                            }, {
                                type: Separator,
                                index: "separator",
                                options: {}
                            }, {
                                type: Button,
                                index: "view",
                                options: {
                                    text: "查看"
                                }
                            }]
                        }
                    }, {
                        type: Table,
                        options: {
                            // width: 800,
                            height: 200,
                            // classes: [""],
                            // css: {
                            //     "color": Color.RED[9]
                            // },
                            title: "Employee Information Table",
                            columns: [
                                {
                                    index: "name",
                                    text: "Employee Name",
                                    width: 120,
                                    sortable: false,
                                    renderer: function (value) {
                                        // language=HTML
                                        return `<a href='index.html'>Hello ${value}</a>`;
                                    }
                                },
                                {index: "sex", text: "Sex", width: 75, sortable: false, renderer: undefined},
                                {index: "age", text: "Age", width: 75, sortable: false, renderer: undefined},
                                {index: "mobile", text: "Mobile", width: 120, sortable: false, renderer: undefined},
                                {index: "email", text: "Email", width: 120, sortable: false, renderer: undefined},
                                {
                                    index: "birthday",
                                    text: "Birthday Date",
                                    width: 120,
                                    sortable: false,
                                    renderer: undefined
                                }
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
                                ["Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
                                {
                                    name: "Lily",
                                    sex: "女",
                                    age: "28",
                                    mobile: "13590000000",
                                    email: "lily@qq.com",
                                    birthday: "2018-08-29"
                                }
                            ]
                        }
                    }, {
                        type: Pagination,
                        options: {
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
                        }
                    }]
                }
            }]
        }, {
            title: "East Panel",
            region: "east"
            // width: 184
            // split: true,
        }]
    }
});
