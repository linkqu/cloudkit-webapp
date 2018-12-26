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
import type {Component} from "../frameworks/components/Component";
import {Colors} from "../frameworks/commons/Colors";
import {Icons} from "../frameworks/commons/Icons";
import {BorderLayout} from "../frameworks/layouts/BorderLayout";
import {FlexLayout} from "../frameworks/layouts/FlexLayout";
import {Button} from "../frameworks/components/Button";
import {TextField} from "../frameworks/components/TextField";
import {Table} from "../frameworks/components/Table";
import {Checkbox} from "../frameworks/components/Checkbox";
import {Radio} from "../frameworks/components/Radio";
import {Modal} from "../frameworks/components/Modal";
import {Tree} from "../frameworks/components/Tree";
import {Tabs} from "../frameworks/components/Tabs";
import {Accordion} from "../frameworks/components/Accordion";
import {Menu} from "../frameworks/components/Menu";
import {Toolbar} from "../frameworks/components/Toolbar";
import {Components} from "../frameworks/commons/Components";
import {Separator} from "../frameworks/components/Separator";
import {Icon} from "../frameworks/components/Icon";
import {Panel} from "../frameworks/components/Panel";
import {Select} from "../frameworks/components/Select";

// import pkg from "../package.json";

// console.log(`running version ${pkg.version}`);

const VIEW_ID_KEYS = {
    MAIN_COMPONENT: "main-component",
    MAIN_NORTH_PANEL: "main-north-panel",
    MAIN_WEST_PANEL: "main-west-panel",
    MAIN_CENTER_PANEL: "main-center-panel",
    MAIN_SOUTH_PANEL: "main-south-panel",
    MAIN_EAST_PANEL: "main-east-panel",
};

let mainPage = {
    id: "main",
    viewId: VIEW_ID_KEYS.MAIN_COMPONENT,
    parent: document.body,
    type: BorderLayout,
    options: {
        // width: 1024,
        // height: 300,
        items: [{
            viewId: VIEW_ID_KEYS.MAIN_NORTH_PANEL,
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
                            {type: "separator"},
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
                            // text: "Bookmarks",
                            icon: {
                                content: Icons.ICON_MENU
                            },
                            events: {
                                click: function (event: Event, current: Component, parent: Component) {
                                    console.log(parent.getParent());
                                    parent.getParent().getParent().getChild(VIEW_ID_KEYS.MAIN_WEST_PANEL).toggle();
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
                        type: Separator,
                        options: {}
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
                        // }, {
                        //     type: Icon,
                        //     options: {
                        //         content: Icons.ICON_TRASH
                        //     }
                    }, {
                        type: Select,
                        options: {
                            id: "s1",
                            name: "select",
                            fields: ["name", "value"],
                            dropdownHeight: 100,
                            data: [{
                                "name": "test1",
                                "value": "1"
                            }, {
                                "name": "test2",
                                "value": "2"
                            }, {
                                "name": "test3",
                                "value": "3"
                            }, {
                                "name": "test4",
                                "value": "4"
                            }, {
                                "name": "test5",
                                "value": "5"
                            }, {
                                "name": "test6",
                                "value": "6"
                            }, {
                                "name": "test7",
                                "value": "7"
                            }]
                        }
                    }]
                }
            }]
        }, {
            viewId: VIEW_ID_KEYS.MAIN_WEST_PANEL,
            title: "West Panel",
            region: "west",
            width: 200,
            // split: true,
            // css: {
            //     "background-color": Colors.PURPLE[9]
            // },
            items: [{
                type: Accordion,
                options: {
                    // css: {
                    //     "background-color": Colors.PURPLE[9]
                    // },
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
                            {id: "detention", viewId: "detention", text: "detention", leaf: true},
                            {
                                id: "homework",
                                viewId: "homework",
                                text: "homework", expanded: true,
                                children: [
                                    {id: "book-report", viewId: "book-report", text: "book report", leaf: true},
                                    {id: "alegrbra", viewId: "alegrbra", text: "alegrbra", leaf: true}
                                ]
                            },
                            {id: "buy-lottery-tickets", viewId: "alegrbra", text: "buy lottery tickets", leaf: true}
                        ],
                        events: {
                            "click": function () {
                                alert("hello!");
                            }
                        }
                    }, {
                        id: "buy-lottery-tickets1",
                        viewId: "buy-lottery-tickets1",
                        text: "buy lottery tickets",
                        leaf: true
                    }]
                }
            }]
        }, {
            viewId: VIEW_ID_KEYS.MAIN_SOUTH_PANEL,
            title: "South Panel",
            region: "south",
            // height: 50
        }, {
            viewId: VIEW_ID_KEYS.MAIN_CENTER_PANEL,
            title: "Center Panel",
            region: "center",
            items: [{
                type: Tabs,
                viewId: "main-tabs",
                options: {
                    activeTab: 0,
                    items: [{
                        viewId: "bookmarks",
                        index: "bookmarks",
                        title: "Bookmarks",
                        // content: "Bookmarks content",
                        items: [{
                            id: "accounts-settings-account",
                            viewId: "profile",
                            type: Panel,
                            options: {
                                items: [{
                                    viewId: "toolbar",
                                    type: Toolbar,
                                    options: {
                                        items: [{
                                            viewId: "add",
                                            type: Button,
                                            options: {
                                                index: "add",
                                                // text: "新增",
                                                text: "Add new",
                                                tooltip: "Add a new bill!",
                                                icon: {
                                                    content: Icons.ICON_ADD
                                                },
                                                events: {
                                                    click: function (event: Event, current: Component, parent: Component) {
                                                        // console.log(parent.getParent().getChild("add-modal"));
                                                        // let modal = component
                                                        //     .getChild("main-center-panel")
                                                        //     .getChild("main-tabs")
                                                        //     .getChild("profile")
                                                        //     .getChild("add-modal");
                                                        let modal = parent.getParent().getChild("add-modal");
                                                        modal.toggle();
                                                    }
                                                }
                                            }
                                        }, {
                                            type: Button,
                                            options: {
                                                index: "modify",
                                                // text: "修改",
                                                text: "Modify",
                                                tooltip: "Modify bill!",
                                                icon: {
                                                    content: Icons.ICON_MODIFY
                                                }
                                            }
                                        }, {
                                            type: Button,
                                            options: {
                                                index: "delete",
                                                // text: "删除",
                                                text: "Delete",
                                                tooltip: "Delete a bill!",
                                                icon: {
                                                    content: Icons.ICON_TRASH
                                                }
                                            }
                                        }, {
                                            type: Separator,
                                            options: {
                                                index: "separator",
                                            }
                                        }, {
                                            type: Button,
                                            options: {
                                                index: "view",
                                                // text: "查看",
                                                text: "View",
                                                tooltip: "View a bill!",
                                                icon: {
                                                    content: Icons.ICON_MAGNIFIER
                                                }
                                            }
                                        }, {
                                            type: Button,
                                            options: {
                                                index: "download",
                                                // text: "导出",
                                                text: "Export",
                                                tooltip: "Export bills!",
                                                icon: {
                                                    content: Icons.ICON_DOWNLOAD
                                                }
                                            }
                                        }]
                                    }
                                }, {
                                    viewId: "table",
                                    type: Table,
                                    options: {
                                        // width: 800,
                                        height: 300,
                                        // classes: [""],
                                        // css: {
                                        //     "color": Color.RED[9]
                                        // },
                                        // title: "Employee Information Table",
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
                                        columns: [
                                            {
                                                index: "id",
                                                type: Checkbox,
                                                text: "ID",
                                                width: 75,
                                                sortable: false,
                                                renderer: undefined
                                            },
                                            {
                                                index: "name",
                                                text: "Employee Name",
                                                width: 120,
                                                sortable: false,
                                                renderer: function (value) {
                                                    // language=HTML
                                                    return `<a href='templates/index.html'>Hello ${value}</a>`;
                                                }
                                            },
                                            {
                                                index: "sex",
                                                text: "Sex",
                                                width: 75,
                                                sortable: false,
                                                renderer: undefined
                                            },
                                            {
                                                index: "age",
                                                text: "Age",
                                                width: 75,
                                                sortable: false,
                                                renderer: undefined
                                            },
                                            {
                                                index: "mobile",
                                                text: "Mobile",
                                                width: 120,
                                                sortable: false,
                                                renderer: undefined
                                            },
                                            {
                                                index: "email",
                                                text: "Email",
                                                width: 120,
                                                sortable: false,
                                                renderer: undefined
                                            },
                                            {
                                                index: "birthday",
                                                text: "Birthday Date",
                                                width: 120,
                                                sortable: false,
                                                renderer: undefined
                                            }
                                        ],
                                        data: [
                                            [1, "Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
                                            [2, "Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
                                            [3, "Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
                                            [4, "Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
                                            [5, "Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
                                            [6, "Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
                                            [7, "Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
                                            [8, "Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
                                            [9, "Robot", "男", 28, "13590000000", "robot@qq.com", "2018-08-29"],
                                            {
                                                id: 10,
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
                                    viewId: "add-modal",
                                    type: Modal,
                                    options: {
                                        viewId: "account-add-modal",
                                        width: 400,
                                        height: 180,
                                        title: "提示",
                                        content: "Hello!",
                                        buttons: [{
                                            text: "Close",
                                            events: {
                                                "click": function (event: Event, current: Component, parent: Component) {
                                                    parent.getParent().hide();
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
                                }]
                            }
                        }],
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
                }
            }]
        }, {
            viewId: VIEW_ID_KEYS.MAIN_EAST_PANEL,
            title: "East Panel",
            region: "east",
            // width: 184,
            hidden: true
            // split: true,
        }]
    }
};

let component = Components.buildComponent(mainPage);

document.addEventListener("DOMContentLoaded", function () {

    fetch("./data/data.json")
        .then(function (response) {
            console.log(
                "headers: Content-Type=%s, Date=%s;status: %s %s",
                response.headers.get("Content-Type"),
                response.headers.get("Date"),
                response.status,
                response.statusText
            );
            return response.json()
        }).then(function (json) {
        console.log("parsed json", json)
    }).catch(function (ex) {
        console.log("parsing failed", ex)
    });

});

// let itemCss = {
//     "width": "200px",
//     "height": "200px",
//     "line-height": "200px",
//     "vertical-align": "middle",
//     "background-color": "#ffd200",
//     "margin": "5px",
//     "font-size": "100px",
//     "color": "white",
//     "text-align": "center"
// };
//
// Components.buildComponent({
//     type: FlexLayout,
//     parent: document.body,
//     options: {
//         width: 500,
//         height: 500,
//         css: {
//             "flex-direction": "row",
//             "flex-wrap": "wrap",
//             "align-content": "flex-start"
//         },
//         items: [{
//             css: itemCss,
//             content: "1"
//         }, {
//             css: itemCss,
//             content: "2"
//         }, {
//             css: itemCss,
//             content: "3"
//         }]
//     }
// });
