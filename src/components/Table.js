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
import Pagination from "./Pagination";
import type {Component} from "./Component";

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
        columnMinWidth: 120,
        scrollLeft: 0
    };

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
        let $this = this;

        let scrollBarWidth = Table.getVerticalScrollBarWidth();

        let tableWrapper = document.createElement("div");
        let width = this.options["width"], height = this.options["height"];
        tableWrapper.style.width = width ? width + "px" : null;
        tableWrapper.style.height = height ? height + "px" : null;
        tableWrapper.classList.add("widget-table");

        let tableTitle;
        if(this.options["title"]) {
            tableTitle = document.createElement("div");
            tableTitle.classList.add("table-title");
            let text = document.createTextNode(this.options["title"]);
            tableTitle.appendChild(text);
            tableWrapper.appendChild(tableTitle);
        }

        // Table Header
        let tableHeaderWrapper = document.createElement("div");
        tableHeaderWrapper.style.width = width ? width + "px" : null;
        tableHeaderWrapper.classList.add("table-header");
        tableWrapper.appendChild(tableHeaderWrapper);

        let tableHeader = document.createElement("table");
        tableHeader.classList.add("table");
        tableHeaderWrapper.appendChild(tableHeader);

        let tableHeaderColgroup = document.createElement("colgroup");
        tableHeader.appendChild(tableHeaderColgroup);

        let tableHeaderThead = document.createElement("thead");
        tableHeader.appendChild(tableHeaderThead);

        // Table Content
        let tableContentWrapper = document.createElement("div");
        tableContentWrapper.style.width = width ? width + "px" : null;
        tableContentWrapper.classList.add("table-content");
        tableWrapper.appendChild(tableContentWrapper);
        tableContentWrapper.addEventListener("scroll", function (e) {
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


            tableHeaderWrapper.scrollLeft = tableContentWrapper.scrollLeft;
            $this.dragging["scrollLeft"] = tableContentWrapper.scrollLeft;
        });

        window.addEventListener('resize', function () {

        });

        let tableContent = document.createElement("table");
        tableContent.classList.add("table");
        tableContentWrapper.appendChild(tableContent);

        let tableContentColgroup = document.createElement("colgroup");
        tableContent.appendChild(tableContentColgroup);

        let tableContentThead = document.createElement("thead");
        // tableContent.appendChild(tableContentThead);

        let tableContentTbody = document.createElement("tbody");
        tableContent.appendChild(tableContentTbody);

        let columns = this.options['columns'];
        if (columns) {
            let tableHeaderTr = document.createElement("tr");
            tableHeaderThead.appendChild(tableHeaderTr);
            let tableContentTr = document.createElement("tr");
            tableContentThead.appendChild(tableContentTr);

            columns.forEach(function (item, index, objs) {
                let tableHeaderCol = document.createElement("col");
                if(item["index"]) {
                    tableHeaderCol.setAttribute("data-index", item["index"]);
                } else {
                    tableHeaderCol.setAttribute("data-index", index);
                }
                tableHeaderColgroup.appendChild(tableHeaderCol);

                let tableContentCol = document.createElement("col");
                if(item["index"]) {
                    tableContentCol.setAttribute("data-index", item["index"]);
                } else {
                    tableContentCol.setAttribute("data-index", index);
                }
                tableContentColgroup.appendChild(tableContentCol);

                let tableHeaderTh = document.createElement("th");
                if(item["index"]) {
                    tableHeaderTh.setAttribute("data-index", item["index"]);
                } else {
                    tableHeaderTh.setAttribute("data-index", index);
                }
                tableHeaderTh.setAttribute("title", item["text"]);
                let tableContentTh = document.createElement("th");
                tableHeaderTr.appendChild(tableHeaderTh);
                tableContentTr.appendChild(tableContentTh);

                let text = document.createTextNode(item["text"]);
                tableHeaderTh.appendChild(text);
                // tableContentTh.appendChild(document.createTextNode(""));

                if (item["width"]) {
                    tableHeaderCol.setAttribute("width", item["width"]);
                    tableContentCol.setAttribute("width", item["width"]);

                    // tableHeaderTh.setAttribute("width", item["width"]);
                    // tableContentTh.setAttribute("width", item["width"]);
                }

                // 添加事件拖拽调整宽度
                tableHeaderTh.addEventListener("mousemove", function (event) {
                    // console.log("clientX:" + event["clientX"] + ", offsetLeft:" + this['offsetLeft'] + ", width:" + this["offsetWidth"]);
                    $this.dragging["isAllowResize"] = this["offsetWidth"] - (event["clientX"] - this['offsetLeft']) - $this.dragging["scrollLeft"] <= 8;
                    this["style"].cursor = $this.dragging["isAllowResize"] ? "col-resize" : "";
                });

                tableHeaderTh.addEventListener("mouseleave", function (event) {
                    if ($this.dragging["isDragging"]) {
                        return;
                    }
                    this["style"].cursor = "";
                });

                tableHeaderTh.addEventListener("mousedown", function (event) {
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
                        $this.dragging["itemWidth"] = parseInt(tableHeaderCol.width);
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

                        let targetWidth = parseInt(tableContentColgroup.querySelector("col[data-index=" + $this.dragging["dragColumnIndex"] + "]").width);
                        console.log("targetWidth width: %d", targetWidth);
                        $this.dragging["dragWidth"] = $this.dragging["itemWidth"] + x - $this.dragging["dragFirstOffset"];
                        $this.dragging["dragWidth"] = ($this.dragging["dragWidth"] < $this.dragging["columnMinWidth"]) ? $this.dragging["columnMinWidth"] : $this.dragging["dragWidth"];

                        console.log("dragWidth: %d", $this.dragging["dragWidth"]);
                        // console.log("dragColumnIndex: %s", $this.dragging["dragColumnIndex"]);
                        // $this.dragging["currentCssRule"]['style'].width = $this.dragging["dragWidth"] + "px";

                        tableHeaderColgroup.querySelector("col[data-index=" + $this.dragging["dragColumnIndex"] + "]").width = $this.dragging["dragWidth"];
                        tableContentColgroup.querySelector("col[data-index=" + $this.dragging["dragColumnIndex"] + "]").width = $this.dragging["dragWidth"];

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

            let tableHeaderCol = document.createElement("col");
            // tableHeaderCol.setAttribute("width", 0);
            tableHeaderColgroup.appendChild(tableHeaderCol);

            let tableContentCol = document.createElement("col");
            tableContentColgroup.appendChild(tableContentCol);

            let tableHeaderTh = document.createElement("th");
            tableHeaderTr.appendChild(tableHeaderTh);

            let tableContentTh = document.createElement("th");
            tableContentTr.appendChild(tableContentTh);
        }

        let data = this.options["data"];
        if (data && data.length > 0) {
            data.forEach(function (item, index, objs) {
                let tableContentTr = document.createElement("tr");
                columns.forEach(function (column, index, objs) {
                    let tableContentTd = document.createElement("td");
                    // let width = columns[index]["width"];
                    // if(width) {
                    //     tableContentTd.setAttribute("width", width);
                    // }
                    tableContentTr.appendChild(tableContentTd);

                    let renderer = column["renderer"];
                    if (renderer) {
                        tableContentTd.innerHTML = renderer(item[index]);
                    } else {
                        let text = document.createTextNode(item[index]);
                        tableContentTd.appendChild(text);
                    }
                });
                let tableContentTd = document.createElement("td");
                tableContentTr.appendChild(tableContentTd);
                tableContentTbody.appendChild(tableContentTr);
            });
        }

        // footer

        let parent = this.options["parent"];
        if (parent) {
            // console.log(parent);
            parent.appendChild(tableWrapper);
        } else {
            // document.body.appendChild(table);
        }

        document.addEventListener("DOMContentLoaded", function(){

            // 在 DOM 完全加载完后执行
            // console.debug(tableHeaderWrapper.clientHeight);
            let tableContentHeight = height ? (height - (tableTitle? tableTitle.clientHeight : 0)) : null;
            tableContentHeight = tableContentHeight ? (tableContentHeight - tableHeaderWrapper.clientHeight) : null;
            tableContentWrapper.style.height = tableContentHeight + "px";

            let scrollAllowWidth = tableContentWrapper.scrollWidth - tableContentWrapper.clientWidth;
            let scrollAllowHeight = tableContentWrapper.scrollHeight - tableContentWrapper.clientHeight;
            // console.log("scrollWidth: %s, scrollHeight: %s", scrollWidth, scrollHeight);

            if (scrollAllowHeight) {
                if (!tableHeader.querySelector('.table-patch')) {
                    // let patchWidth = tableHeader.scrollWidth - scrollWidth;
                    // let patchHeight = tableHeader.scrollHeight - scrollHeight;
                    // console.log("patch width: %d, patch height: %d", patchWidth, patchHeight);

                    // 补丁元素
                    let patchElement = document.createElement("th");
                    patchElement.classList.add("table-patch");

                    patchElement.width = scrollBarWidth;
                    tableHeader.querySelector('tr').appendChild(patchElement);
                }
            } else {
                let tablePatch = tableHeader.querySelector('.table-patch');
                if(tablePatch) {
                    tablePatch.remove();
                }
            }

        });

        this.element = tableWrapper;

        return this.element;
    }

    getElement() {
        return this.element;
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
