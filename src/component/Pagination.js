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
import {Color} from "./Color";

/**
 * Pagination
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Pagination {

    options: JSON;

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

            let totalElementText = document.createElement("span");
            totalElementText.classList.add("total-elements-text");
            totalElementText.appendChild(
                document.createTextNode("共 " + pageable["totalElements"] + " 条")
            );
            pagination.appendChild(totalElementText);

            if(!isLast) {
                new Button({
                    text: "上一页",
                    parent: pagination,
                    events: {
                        "click": function () {
                            alert("hello!");
                        }
                    }
                });
            }

            if (hasNext) {
                for (let i = 0; i < 5; i++) {
                    new Button({
                        text: pageNumber + i,
                        parent: pagination,
                        events: {
                            "click": function () {
                                alert("hello!");
                            }
                        }
                    });
                }

                new Button({
                    text: "下一页",
                    parent: pagination,
                    events: {
                        "click": function () {
                            alert("hello!");
                        }
                    }
                });
            }

        }

        if (this.options["parent"]) {
            // console.log(this.options["parent"]);
            this.options["parent"].appendChild(pagination);
        } else {
            // document.body.appendChild(pagination);
        }

        return pagination;
    }
}

export {Pagination};
