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

/**
 * Table
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class Table {

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
        let tableWrapper = document.createElement("div");
        let width = this.options["width"], height = this.options["height"];
        tableWrapper.style.width = width ? width + "px" : null;
        tableWrapper.style.height = height ? height + "px" : null;
        tableWrapper.classList.add("widget-table");

        // Table Header
        let tableHeaderWrapper = document.createElement("div");
        tableHeaderWrapper.classList.add("table-header");
        tableHeaderWrapper.style.width = width ? width + "px" : null;
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
        tableContentWrapper.style.height = height ? (height - 30) + "px" : null;
        tableContentWrapper.classList.add("table-content");
        tableWrapper.appendChild(tableContentWrapper);
        tableContentWrapper.addEventListener("scroll", function (e) {
            /*
            console.log("offsetLeft: %s, offsetTop: %s", tableContentWrapper.offsetLeft, tableContentWrapper.offsetTop);
            console.log("scrollX: %s, scrollY: %s", window.scrollX, window.scrollY);
            console.log("pageXOffset: %s, pageYOffset: %s", window.pageXOffset, window.pageYOffset);
            console.log("offsetWidth: %s, offsetHeight: %s", tableContentWrapper.offsetWidth, tableContentWrapper.offsetHeight);
            console.log("scrollWidth: %s, scrollHeight: %s", tableContentWrapper.scrollWidth, tableContentWrapper.scrollHeight);
            console.log("clientWidth: %s, clientHeight: %s", tableContentWrapper.clientWidth, tableContentWrapper.clientHeight);
            console.log("scrollLeft: %s, scrollTop: %s", tableContentWrapper.scrollLeft, tableContentWrapper.scrollTop);
            */

            let scrollWidth = tableContentWrapper.scrollWidth;
            let scrollHeight = tableContentWrapper.scrollHeight;

            if(scrollWidth && scrollHeight){
                if(!tableHeader.querySelector('.table-patch')){
                    // 补丁元素
                    let patchElement = document.createElement("th");
                    patchElement.classList.add("table-patch");
                    // patchElement.width = tableContent.scrollWidth - tableHeader.scrollWidth;
                    patchElement.width = 17;
                    tableHeader.querySelector('tr').appendChild(patchElement);
                }
            } else {
                tableHeader.querySelector('.table-patch').remove();
            }

            tableHeaderWrapper.scrollTo(tableContentWrapper.scrollLeft, tableContentWrapper.scrollTop);
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
                tableHeaderColgroup.appendChild(tableHeaderCol);
                let tableContentCol = document.createElement("col");
                tableContentColgroup.appendChild(tableContentCol);
                let tableHeaderTh = document.createElement("th");
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

            });

            // let tableHeaderCol = document.createElement("col");
            // // tableHeaderCol.setAttribute("width", 0);
            // tableHeaderColgroup.appendChild(tableHeaderCol);
            // let tableContentCol = document.createElement("col");
            // tableContentColgroup.appendChild(tableContentCol);
            // let tableHeaderTh = document.createElement("th");
            // tableHeaderTr.appendChild(tableHeaderTh);
            // let tableContentTh = document.createElement("th");
            // tableContentTr.appendChild(tableContentTh);
        }

        let data = this.options['data'];
        if (data && data.length > 0) {
            data.forEach(function (item, index, objs) {
                let tableContentTr = document.createElement("tr");
                item.forEach(function (item, index, objs) {
                    let tableContentTd = document.createElement("td");
                    // let width = columns[index]["width"];
                    // if(width) {
                    //     tableContentTd.setAttribute("width", width);
                    // }
                    tableContentTr.appendChild(tableContentTd);
                    let text = document.createTextNode(item);
                    tableContentTd.appendChild(text);
                });
                tableContentTbody.appendChild(tableContentTr);
            });
        }

        // footer

        if (this.options["parent"]) {
            // console.log(this.options["parent"]);
            this.options["parent"].appendChild(tableWrapper);
        } else {
            // document.body.appendChild(table);
        }
        return tableWrapper;
    }
}

export {Table};
