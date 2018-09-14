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

import "./Pagination.css";
import {Button} from "./Button";
import {Colors} from "../commons/Colors";
import type {Component} from "./Component";

/**
 * Pagination
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Pagination implements Component {

    options: JSON;

    element: HTMLElement;

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
        let pagination = document.createElement("div");
        pagination.classList.add("widget-pagination");
        pagination.classList.add("clearfix");

        // pageable
        // offset
        // totalElements
        // pageSize size
        // totalPages
        // pageNumber number
        // hasNext first true
        // isLast last false
        // numberOfElements 当前实际element数量

        let pageable = this.options["pageable"];
        if (pageable) {
            let totalElements = pageable["totalElements"] ? pageable["totalElements"] : 0;
            let pageSize = pageable["pageSize"] ? pageable["pageSize"] : 0;
            let totalPages = (pageSize === 0) ? 1 : Math.ceil(totalElements / pageSize);
            let pageNumber = pageable["pageNumber"] ? pageable["pageNumber"] : 0;
            let hasNext = pageNumber < totalPages;
            let isLast = pageNumber === totalPages;
            let numberOfElements = pageable["numberOfElements"] ? pageable["numberOfElements"] : 0;
            let groupSize = (pageable["groupSize"] || pageable["groupSize"] < 0 || pageable["groupSize"] > totalPages) ? pageable["groupSize"] : 5;

            let totalElementText = document.createElement("div");
            totalElementText.classList.add("total-elements-text");
            totalElementText.appendChild(
                document.createTextNode("共 " + pageable["totalElements"] + " 条")
            );
            pagination.appendChild(totalElementText);

            let pagingButtons = document.createElement("div");
            pagingButtons.classList.add("paging-buttons");
            pagination.appendChild(pagingButtons);

            let currentGroupIndex = totalPages > groupSize ? Math.ceil((pageNumber + (groupSize > 1 ? 1 : 0)) / (groupSize > 0 ? groupSize : 1)) : 1;
            // console.log("groupIndex: %s", currentGroupIndex);

            new Button({
                text: pageable["previousLinkText"]? pageable["previousLinkText"] : "上一页",
                parent: pagingButtons,
                events: {
                    "click": function () {
                        alert(pageNumber - 1);
                    }
                }
            });

            if (groupSize && currentGroupIndex > 1 && pageNumber !== 1) {
                new Button({
                    text: pageNumber,
                    parent: pagingButtons,
                    events: {
                        "click": function () {
                            alert(pageNumber);
                        }
                    }
                });
            }

            let halve = Math.floor((groupSize - 1) / 2);
            let start = currentGroupIndex > 1 ? pageNumber - halve : 1;
            let max = pageNumber + (groupSize - halve - 1);
            let end = currentGroupIndex > 1 ? max > totalPages ? totalPages : max : groupSize;

            if (end - start < groupSize - 1) {
                start = end - groupSize + 1;
            }

            if (pageNumber !== 1 && start > 2) {
                new Button({
                    text: "...",
                    parent: pagingButtons
                });
            }

            for (; start <= end; start++) {
                if (start === pageNumber) {
                    // 当前页
                    new Button({
                        type: "primary",
                        text: pageNumber,
                        // css: {
                        //     "backgroundColor": Color.VOLCANO[5],
                        //     "borderColor": Color.VOLCANO[5]
                        // },
                        parent: pagingButtons,
                        events: {
                            "click": function () {
                                alert(pageNumber);
                            }
                        }
                    });
                } else {
                    let currentNumber = start;
                    new Button({
                        text: currentNumber,
                        parent: pagingButtons,
                        events: {
                            "click": function () {
                                alert(currentNumber);
                            }
                        }
                    });
                }
            }

            // 输出输出...与末页
            if (totalPages > groupSize && totalPages > end && !isLast) {
                if (end + 1 < totalPages) {
                    new Button({
                        text: "...",
                        parent: pagingButtons
                    });
                }
                if (groupSize !== 0) {
                    new Button({
                        text: totalPages,
                        parent: pagingButtons,
                        events: {
                            "click": function () {
                                alert(totalPages);
                            }
                        }
                    });
                }
            }

            new Button({
                text: pageable["nextLinkText"]? pageable["nextLinkText"] : "下一页",
                parent: pagingButtons,
                events: {
                    "click": function () {
                        alert(pageNumber + 1);
                    }
                }
            });

        }

        // N条/页
        // refresh
        // 到第N页 确定

        if (this.options["parent"]) {
            // console.log(this.options["parent"]);
            this.options["parent"].appendChild(pagination);
        } else {
            // document.body.appendChild(pagination);
        }

        return this.element = pagination;
    }

    getElement() {
        return this.element;
    }
}

export {Pagination};
