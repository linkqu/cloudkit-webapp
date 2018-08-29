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
 * BorderLayout
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
class BorderLayout {

    options: JSON;

    /**
     * constructor
     *
     * @param options
     */
    constructor(options: JSON) {

        // CENTER、EAST、WEST、NORTH、SOUTH

        // default setting
        this.defaultSetting = {};
        this.options = options;
        this.build();
    }

    /**
     * build
     */
    build() {
        let borderLayout = document.createElement("div");
        borderLayout.setAttribute("layout", "border-layout");

        let items = this.options['items'];
        items.forEach(function (item, index, objs) {
            if(item["region"] === "north") {
                let northPanel = document.createElement("div");
                northPanel.setAttribute("region", item["region"]);
                northPanel.setAttribute("title", item["title"]);
                borderLayout.appendChild(northPanel);
            }

            if(item["region"] === "south") {
                let southPanel = document.createElement("div");
                southPanel.setAttribute("region", item["region"]);
                southPanel.setAttribute("title", item["title"]);
                borderLayout.appendChild(southPanel);
            }

            if(item["region"] === "west") {
                let westPanel = document.createElement("div");
                westPanel.setAttribute("region", item["region"]);
                westPanel.setAttribute("title", item["title"]);
                borderLayout.appendChild(westPanel);
            }

            if(item["region"] === "center") {
                let centerPanel = document.createElement("div");
                centerPanel.setAttribute("region", item["region"]);
                centerPanel.setAttribute("title", item["title"]);
                borderLayout.appendChild(centerPanel);
            }

            if(item["region"] === "east") {
                let eastPanel = document.createElement("div");
                eastPanel.setAttribute("region", item["region"]);
                eastPanel.setAttribute("title", item["title"]);
                borderLayout.appendChild(eastPanel);
            }
        });

        if (this.options["parent"]) {
            // console.log(this.options["parent"]);
            this.options["parent"].appendChild(borderLayout);
        } else {
            // document.body.appendChild(table);
        }

        return borderLayout;
    }
}

export {BorderLayout};
