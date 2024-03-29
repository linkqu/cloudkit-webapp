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

import "./Table.css";
import Checkbox from "./Checkbox";
import {Pagination} from "./Pagination";
import type {Component} from "./Component";
import {Components} from "../commons/Components";
import uuid from "uuid/v1";

/**
 * 拖放时信息
 */
interface Dragging {
    isAllowResize: boolean,
    isDragging: boolean,
    dragWidth: number,
    dragColumnIndex: string,
    dragFirstOffset: number,
    itemWidth: number,
    columnMinWidth: number,
    scrollLeft: number
}

/**
 * Table
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Table implements Component {

    options: JSON;

    element: HTMLElement;

    // 拖放信息
    dragging: Dragging = {
        isAllowResize: false,
        isDragging: false,
        dragWidth: 0,
        dragColumnIndex: null,
        dragFirstOffset: null,
        itemWidth: 0,
        columnMinWidth: 80,
        scrollLeft: 0
    };

    childObjects: Map = new Map();

    /**
     * constructor
     *
     * @param options
     */
    constructor(options: JSON) {

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
        let scrollBarWidth = Table.getVerticalScrollBarWidth();

        let tableWidget = document.createElement("div");
        $this.element = tableWidget;
        tableWidget.setAttribute(Components.VIEW_ID_KEY, options["viewId"] ? options["viewId"] : uuid());
        let width = options["width"], height = options["height"];
        tableWidget.style.width = width ? width + "px" : null;
        tableWidget.style.height = height ? height + "px" : null;
        tableWidget.classList.add("widget-table");

        let tableTitle;
        if (options["title"]) {
            tableTitle = document.createElement("div");
            tableTitle.classList.add("table-title");
            let text = document.createTextNode(options["title"]);
            tableTitle.appendChild(text);
            tableWidget.appendChild(tableTitle);
        }

        // Table Header
        let tableHeader = document.createElement("div");
        tableHeader.style.width = width ? width + "px" : null;
        tableHeader.classList.add("table-header");
        tableWidget.appendChild(tableHeader);

        let headerTable = document.createElement("table");
        headerTable.classList.add("table");
        tableHeader.appendChild(headerTable);

        let headerTableColgroup = document.createElement("colgroup");
        headerTable.appendChild(headerTableColgroup);

        let headerTableThead = document.createElement("thead");
        headerTable.appendChild(headerTableThead);

        // Table Content
        let tableContent = document.createElement("div");
        tableContent.style.width = width ? width + "px" : null;
        tableContent.classList.add("table-content");
        tableWidget.appendChild(tableContent);
        tableContent.addEventListener("scroll", function (e) {
            /*
            screen.availWidth screen.availHeight screen.width screen.height
            window.innerheight window.innerwidth window.outerwidth window.outerheight screenLeft screenTop screenX screenY
            console.log("offsetLeft: %s, offsetTop: %s", tableContentWrapper.offsetLeft, tableContentWrapper.offsetTop);
            console.log("scrollX: %s, scrollY: %s", window.scrollX, window.scrollY);
            console.log("pageXOffset: %s, pageYOffset: %s", window.pageXOffset, window.pageYOffset);
            console.log("offsetWidth: %s, offsetHeight: %s", tableContentWrapper.offsetWidth, tableContentWrapper.offsetHeight);
            console.log("scrollWidth: %s, scrollHeight: %s", tableContentWrapper.scrollWidth, tableContentWrapper.scrollHeight);
            console.log("clientWidth: %s, clientHeight: %s", tableContentWrapper.clientWidth, tableContentWrapper.clientHeight);
            console.log("scrollLeft: %s, scrollTop: %s", tableContentWrapper.scrollLeft, tableContentWrapper.scrollTop);
            */

            tableHeader.scrollLeft = tableContent.scrollLeft;
            $this.dragging["scrollLeft"] = tableContent.scrollLeft;
        });

        window.addEventListener('resize', function () {

        });

        let contentTable = document.createElement("table");
        contentTable.classList.add("table");
        tableContent.appendChild(contentTable);

        let contentTableColgroup = document.createElement("colgroup");
        contentTable.appendChild(contentTableColgroup);

        let contentTableThead = document.createElement("thead");
        // contentTable.appendChild(contentTableThead);

        let contentTableTbody = document.createElement("tbody");
        contentTable.appendChild(contentTableTbody);

        let columns = options['columns'];
        if (columns) {
            let headerTableTr = document.createElement("tr");
            headerTableThead.appendChild(headerTableTr);
            let contentTableTr = document.createElement("tr");
            contentTableThead.appendChild(contentTableTr);

            columns.forEach(function (item, index, objs) {
                let headerTableCol = document.createElement("col");
                headerTableColgroup.appendChild(headerTableCol);

                let contentTableCol = document.createElement("col");
                let headerTableTh = document.createElement("th");
                headerTableTh.setAttribute("title", item["text"]);
                if (item["index"]) {
                    headerTableCol.setAttribute("data-index", item["index"]);
                    contentTableCol.setAttribute("data-index", item["index"]);
                    headerTableTh.setAttribute("data-index", item["index"]);
                } else {
                    headerTableCol.setAttribute("data-index", index);
                    contentTableCol.setAttribute("data-index", index);
                    headerTableTh.setAttribute("data-index", index);
                }
                contentTableColgroup.appendChild(contentTableCol);

                let contentTableTh = document.createElement("th");
                headerTableTr.appendChild(headerTableTh);
                contentTableTr.appendChild(contentTableTh);

                if(item["type"]) {
                    Components.buildComponent({
                        type: item["type"],
                        parent: headerTableTh,
                        options: {
                            text: item["text"]
                        }
                    });
                } else {
                    let text = document.createTextNode(item["text"]);
                    headerTableTh.appendChild(text);
                    // tableContentTh.appendChild(document.createTextNode(""));
                }

                if (item["width"]) {
                    headerTableCol.setAttribute("width", item["width"]);
                    contentTableCol.setAttribute("width", item["width"]);

                    // tableHeaderTh.setAttribute("width", item["width"]);
                    // tableContentTh.setAttribute("width", item["width"]);
                }

                // 添加事件拖拽调整宽度
                headerTableTh.addEventListener("mousemove", function (event) {

                    // 网页可见区域宽： document.body.clientWidth;
                    // 网页可见区域高： document.body.clientHeight;
                    // 网页可见区域宽： document.body.offsetWidth   （包含边线的宽）;
                    // 网页可见区域高： document.body.offsetHeight （包含边线的高）;
                    // 网页正文全文宽： document.body.scrollWidth;（含滚动条时，即滚动条从最顶端滚到最底端实际走过的距离）
                    // 网页正文全文高： document.body.scrollHeight;（含滚动条时，即滚动条从最顶端滚到最底端实际走过的距离）
                    // 网页被卷去的高： document.body.scrollTop;
                    // 网页被卷去的左： document.body.scrollLeft;
                    // 网页正文项目组上： window.screenTop;（返回窗口相对于屏幕的y坐标）
                    // 网页正文项目组左： window.screenLeft;（返回窗口相对于屏幕的x坐标）
                    // 屏幕辨别率的高： window.screen.height;（返回当前屏幕高度，即分辨率值）
                    // 屏幕辨别率的宽： window.screen.width;（返回当前屏幕宽度，即分辨率值）
                    // 屏幕可用工作区高度： window.screen.availHeight;（空白空间）
                    // 屏幕可用工作区的宽度：window.screen.availWidth;（空白空间）

                    // console.log(
                    //     "clientX: %s, offsetLeft: %s, offsetWidth: %s",
                    //     event["clientX"],
                    //     this['offsetLeft'],
                    //     this["offsetWidth"]
                    // );

                    // console.log(
                    //     "screenX: %s, target: %s, %s",
                    //     event.screenX,
                    //     event.target,
                    //     event.target["offsetParent"]
                    // );

                    // $this.dragging["isAllowResize"] = this["offsetWidth"] - (event["clientX"] - this['offsetLeft']) - $this.dragging["scrollLeft"] <= 8;
                    $this.dragging["isAllowResize"] = headerTableTh["offsetWidth"] - (event["clientX"] - headerTableTh['offsetLeft'] - $this.element['offsetLeft']) - $this.dragging["scrollLeft"] <= 8;
                    headerTableTh["style"].cursor = $this.dragging["isAllowResize"] ? "col-resize" : "";
                });

                headerTableTh.addEventListener("mouseleave", function (event) {
                    if ($this.dragging["isDragging"]) {
                        return;
                    }
                    this["style"].cursor = "";
                });

                headerTableTh.addEventListener("mousedown", function (event) {
                    if ($this.dragging["isAllowResize"]) {
                        $this.dragging["isDragging"] = true;
                        event.preventDefault();
                        let x: number = event["clientX"];
                        let y: number = event["clientY"];
                        // console.log("x:" + x + ", y" + y);

                        // console.log("data-index: %s", this.getAttribute("data-index"));
                        $this.dragging["dragFirstOffset"] = x;
                        $this.dragging["dragColumnIndex"] = this.getAttribute("data-index");

                        // TODO
                        $this.dragging["itemWidth"] = parseInt(headerTableCol.width);
                        console.log("itemWidth: %d", $this.dragging["itemWidth"])
                    }
                });

                document.addEventListener("mousemove", function (event) {
                    // console.log("event: %o", event);

                    if ($this.dragging["isDragging"]) {
                        event.preventDefault();
                        let x: number = event["clientX"];
                        let y: number = event["clientY"];
                        // console.log("x:" + x + ", y" + y);

                        let targetWidth = parseInt(contentTableColgroup.querySelector("col[data-index=" + $this.dragging["dragColumnIndex"] + "]").width);
                        console.log("targetWidth width: %d", targetWidth);
                        $this.dragging["dragWidth"] = $this.dragging["itemWidth"] + x - $this.dragging["dragFirstOffset"];
                        $this.dragging["dragWidth"] = ($this.dragging["dragWidth"] < $this.dragging["columnMinWidth"]) ? $this.dragging["columnMinWidth"] : $this.dragging["dragWidth"];

                        console.log("dragWidth: %d", $this.dragging["dragWidth"]);
                        // console.log("dragColumnIndex: %s", $this.dragging["dragColumnIndex"]);
                        // $this.dragging["currentCssRule"]['style'].width = $this.dragging["dragWidth"] + "px";

                        headerTableColgroup.querySelector("col[data-index=" + $this.dragging["dragColumnIndex"] + "]").width = $this.dragging["dragWidth"];
                        contentTableColgroup.querySelector("col[data-index=" + $this.dragging["dragColumnIndex"] + "]").width = $this.dragging["dragWidth"];

                        document.body.style.cursor = "col-resize";
                    }

                });
                document.addEventListener("mouseup", function (event) {
                    if ($this.dragging["isDragging"]) {
                        document.body.style.cursor = "";
                        $this.dragging = {
                            isAllowResize: false,
                            isDragging: false,
                            dragWidth: 0,
                            dragColumnIndex: null,
                            dragFirstOffset: null,
                            scrollLeft: 0
                        };
                    }
                });
            });

            let headerTableCol = document.createElement("col");
            // headerTableCol.setAttribute("width", 0);
            headerTableColgroup.appendChild(headerTableCol);

            let contentTableCol = document.createElement("col");
            contentTableColgroup.appendChild(contentTableCol);

            let headerTableTh = document.createElement("th");
            headerTableTr.appendChild(headerTableTh);

            let contentTableTh = document.createElement("th");
            contentTableTr.appendChild(contentTableTh);
        }

        let data = options["data"];
        if (data && data.length > 0) {
            data.forEach(function (item, index, objs) {
                let contentTableTr = document.createElement("tr");
                columns.forEach(function (column, index, objs) {
                    let contentTableTd = document.createElement("td");
                    // let width = columns[index]["width"];
                    // if(width) {
                    //     contentTable.setAttribute("width", width);
                    // }
                    contentTableTr.appendChild(contentTableTd);

                    let renderer = column["renderer"];

                    let value = (item instanceof Array) ? item[index] : item[column["index"]];

                    if(column["type"]) {
                        Components.buildComponent({
                            type: column["type"],
                            parent: contentTableTd,
                            options: {
                                id: value,
                                text: value
                            }
                        });
                    } else if (renderer) {
                        contentTableTd.innerHTML = renderer(value);
                    } else {
                        let text = document.createTextNode(value);
                        contentTableTd.appendChild(text);
                    }
                });
                let contentTableTd = document.createElement("td");
                contentTableTr.appendChild(contentTableTd);
                contentTableTbody.appendChild(contentTableTr);
            });
        }

        // footer
        let tableFooter;
        if (options["pageable"]) {
            tableFooter = document.createElement("div");
            tableFooter.classList.add("table-footer");
            Components.buildComponent({
                type: Pagination,
                options: {
                    parent: tableFooter,
                    pageable: options["pageable"]
                }
            });
            tableWidget.appendChild(tableFooter);
        }

        let parent = options["parent"];
        if (parent) {
            // console.log(parent);
            if(options["parent"] instanceof HTMLElement) {
                options["parent"].appendChild(tableWidget);
            } else {
                options["parent"].getElement().appendChild(tableWidget);
            }
        } else {
            // document.body.appendChild(table);
        }

        document.addEventListener("DOMContentLoaded", function () {

            // 在 DOM 完全加载完后执行
            // console.debug(tableHeaderWrapper.clientHeight);
            let tableContentHeight = height ? (height - (tableTitle ? tableTitle.offsetHeight : 0)) : 0;
            tableContentHeight = tableContentHeight ? (
                    tableContentHeight - tableHeader.offsetHeight - (tableFooter ? tableFooter.offsetHeight : 0)
            ) : 0;
            tableContent.style.height = tableContentHeight + "px";

            let scrollAllowWidth = tableContent.scrollWidth - tableContent.clientWidth;
            let scrollAllowHeight = tableContent.scrollHeight - tableContent.clientHeight;
            // console.log("scrollWidth: %s, scrollHeight: %s", scrollWidth, scrollHeight);

            if (scrollAllowHeight) {
                if (!headerTable.querySelector('.table-patch')) {
                    // let patchWidth = tableHeader.scrollWidth - scrollWidth;
                    // let patchHeight = tableHeader.scrollHeight - scrollHeight;
                    // console.log("patch width: %d, patch height: %d", patchWidth, patchHeight);

                    // 补丁元素
                    let patchElement = document.createElement("th");
                    patchElement.classList.add("table-patch");

                    patchElement.width = scrollBarWidth;
                    headerTable.querySelector('tr').appendChild(patchElement);
                }
            } else {
                let tablePatch = headerTable.querySelector('.table-patch');
                if (tablePatch) {
                    tablePatch.remove();
                }
            }

        });

        return $this.element;
    }

    getElement() {
        return this.element;
    }

    getChildren() {
        return this.childObjects;
    }

    setChildren(objects: Map<string, Component>) {
        this.childObjects = objects;
    }

    getChild(key: string) {
        return this.childObjects.get(key);
    }

    addChild(key: string, object: Component) {
        this.childObjects.set(key, object);
    }

    removeChild(key: string) {
        this.childObjects.delete(key)
    }

    /**
     * 获取滚动条本身的宽度
     *
     * @returns {number}
     */
    static getVerticalScrollBarWidth() {
        let noScroll, scroll, scrollView = document.createElement("div");
        // scrollView.style.cssText = "position:absolute;top:-1000px;width:100px;height:100px; overflow:hidden;";
        scrollView.style.position = "absolute";
        scrollView.style.top = "-1000px";
        scrollView.style.width = "100px";
        scrollView.style.height = "100px";
        scrollView.style.overflow = "hidden";
        noScroll = document.body.appendChild(scrollView).clientWidth;
        scrollView.style.overflowY = "scroll";
        scroll = scrollView.clientWidth;
        document.body.removeChild(scrollView);
        return noScroll - scroll;
    }
}

export {Table};
