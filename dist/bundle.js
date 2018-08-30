/*! Webpack 实例 */
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=function(){return window&&document&&document.all&&!window.atob}.apply(this,arguments)),e}}(),i=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),a=null,d=0,s=[],l=n(5);function c(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(m(o.parts[a],e))}else{var d=[];for(a=0;a<o.parts.length;a++)d.push(m(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:d}}}}function f(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],d={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(d):n.push(r[a]={id:a,parts:[d]})}return n}function u(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),s.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertAt.before,n);n.insertBefore(e,o)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=s.indexOf(t);e>=0&&s.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=n.nc;r&&(t.attrs.nonce=r)}return h(e,t.attrs),u(t,e),e}function h(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=d++;n=a||(a=b(e)),r=x.bind(null,n,s,!1),o=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(e,t.attrs),u(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),d=t.href;t.href=URL.createObjectURL(a),d&&URL.revokeObjectURL(d)}.bind(null,n,e),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return c(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var a=n[i];(d=r[a.id]).refs--,o.push(d)}for(t&&c(f(t,e),e),i=0;i<o.length;i++){var d;if(0===(d=o[i]).refs){for(var s=0;s<d.parts.length;s++)d.parts[s]();delete r[d.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=v(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);n(2)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"/* theme-default */\n.button {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    touch-action: manipulation;\n    cursor: pointer;\n    padding: 3px 15px 3px 15px;\n    font-size: 12px;\n    line-height: 1.5;\n    background: #fff none;\n    border: 1px solid #dcdee2;\n    transition: color .2s linear, background-color .2s linear, border .2s linear, box-shadow .2s linear;\n    /*transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;*/\n}\n\n.button-round-corner {\n    border-radius: 4px;\n}\n\n.button:hover {\n    color: #57a3f3;\n    background-color: #fff;\n    border-color: #57a3f3\n}\n\n.button-primary {\n    color: #fff;\n    background-color: #2d8cf0;\n    border-color: #2d8cf0;\n}\n\n.button-dashed {\n    color: #515a6e;\n    background-color: #fff;\n    border: dashed #dcdee2;\n}\n\n.button-text {\n    color: #515a6e;\n    background-color: transparent;\n    border-color: transparent;\n}\n\n.button-success {\n    color: #fff;\n    background-color: #19be6b;\n    border-color: #19be6b;\n}\n\n.button-warning {\n    color: #fff;\n    background-color: #f90;\n    border-color: #f90;\n}\n\n.button-error {\n    color: #fff;\n    background-color: #ed4014;\n    border-color: #ed4014;\n}\n\n.button-info {\n    color: #fff;\n    background-color: #2db7f5;\n    border-color: #2db7f5;\n}\n\n.button-outline {\n    color: #007bff;\n    background: transparent none;\n    border-color: #007bff;\n}\n\n.button-circle {\n    /*border-radius: 32px;*/\n    width: 32px;\n    height: 32px;\n    padding: 0;\n    border-radius: 50%;\n}\n\n.button-small {\n    padding: 1px 7px 2px;\n    font-size: 12px;\n    border-radius: 3px;\n}\n\n.button-large {\n    padding: 6px 15px;\n    font-size: 14px;\n    border-radius: 4px;\n}\n\n.button-group {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.button-group:not(.button-group-vertical)>.button:first-child:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n.button-group:not(.button-group-vertical)>.button:last-child:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]);n(2)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".text-field {\n    display: inline-block;\n    width: 100%;\n    line-height: 1.5;\n    padding: 3px 7px;\n    font-size: 12px;\n    border: 1px solid #dcdee2;\n    /*border-radius: 4px;*/\n    color: #515a6e;\n    background: #fff none;\n    vertical-align: middle;\n    position: relative;\n    cursor: text;\n    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;\n}\n\n.text-field::-moz-placeholder {\n    color: #c5c8ce;\n    opacity: 1\n}\n\n.text-field:-ms-input-placeholder {\n    color: #c5c8ce\n}\n\n.text-field::-webkit-input-placeholder {\n    color: #c5c8ce\n}\n\n.text-field:focus,.ivu-input:hover {\n    border-color: #57a3f3\n}\n\n.text-field:focus {\n    outline: 0;\n    box-shadow: 0 0 0 2px #2D8CF0\n}\n\n.text-field[disabled],fieldset[disabled] .text-field {\n    background-color: #f3f3f3;\n    opacity: 1;\n    cursor: not-allowed;\n    color: #ccc\n}\n\n.text-field[disabled]:hover,fieldset[disabled] .text-field:hover {\n    border-color: #e3e5e8\n}\n",""])},function(t,e,n){var r=n(9);"string"==typeof r&&(r=[[t.i,r,""]]);n(2)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".table-wrapper {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    background-color: #ffffff;\r\n    overflow: hidden;\r\n    border: 1px solid #dddddd;\r\n}\r\n\r\n.table-wrapper .table-header {\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    border-bottom: 1px solid #dddddd;\r\n}\r\n\r\n.table-wrapper .table {\r\n    position: relative;\r\n    table-layout: fixed;\r\n    width: 100%;\r\n    border-collapse: separate;\r\n    box-sizing: border-box;\r\n    border-spacing: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.table-wrapper .table tr th {\r\n    vertical-align: middle;\r\n    box-sizing: border-box;\r\n    min-height: 2rem;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n    background-color: #f7f7f7;\r\n    color: #333333;\r\n    border-right: 1px solid #dddddd;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.table-wrapper .table tr th:first-child {\r\n    border-left: none;\r\n}\r\n\r\n.table-wrapper .table tr th:last-child {\r\n    border-right: none;\r\n}\r\n\r\n.table-wrapper .table tbody tr {\r\n    height: 33px;\r\n    color: #333333;\r\n    font-weight: normal;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.table-wrapper .table tr td:first-child {\r\n    border-left: none;\r\n}\r\n\r\n.table-wrapper .table tr td:last-child {\r\n    border-right: none;\r\n}\r\n\r\n.table-wrapper .table tr td {\r\n    vertical-align: middle;\r\n    box-sizing: border-box;\r\n    border-right: 1px solid #dddddd;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    padding: 0 0.5rem;\r\n    word-wrap: break-word;\r\n    cursor: text;\r\n    line-height: normal;\r\n    color: #333333;\r\n}\r\n\r\n.table-wrapper .table tbody tr:first-child td {\r\n    border-top: 1px solid #e5e5e5;\r\n}\r\n\r\n.table-wrapper .table tbody tr:nth-child(2n) td {\r\n    background-color: #f8f8f9\r\n}\r\n\r\n.table-wrapper .table tbody tr:hover td {\r\n    background-color: #ebf7ff\r\n}\r\n\r\n.table-wrapper .table-content {\r\n    overflow: auto;\r\n}\r\n",""])},function(t,e,n){var r=n(11);"string"==typeof r&&(r=[[t.i,r,""]]);n(2)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".border-layout {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-flex: 1;\n    -ms-flex: auto;\n    flex: auto;\n    background: #f5f7f9;\n    height: 100%;\n}\n\n.border-layout .north, .border-layout .south {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n}\n\n.border-layout .north, .border-layout .south {\n    background: #7cbce9;\n    /*background: #515a6e;*/\n    color: #fff;\n}\n\n.border-layout .has-side {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    height: 100%;\n}\n\n.border-layout .west, .border-layout .east {\n    position: relative;\n    height: 100%;\n    /*width: 200px;*/\n    /*min-width: 200px;*/\n    /*max-width: 200px;*/\n    /*flex: 0 0 200px;*/\n    background: #3a9fe8;\n    color: #fff;\n    transition: all .2s ease-in-out;\n}\n\n.border-layout .has-side > .center {\n    overflow-x: hidden;\n}\n\n.border-layout .center {\n    -webkit-box-flex: 1;\n    -ms-flex: auto;\n    flex: auto;\n    background: #8ee8e0;\n}\n",""])},function(t,e,n){var r=n(13);"string"==typeof r&&(r=[[t.i,r,""]]);n(2)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"",""])},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=function(){};o()(i,"RED",["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"]),o()(i,"VOLCANO",["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"]),o()(i,"ORANGE",["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"]),o()(i,"GOLD",["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"]),o()(i,"YELLOW",["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"]),o()(i,"LIME",["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"]),o()(i,"GREEN",["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"]),o()(i,"CYAN",["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"]),o()(i,"BLUE",["#e6f7ff","#bae7ff","#91d5ff","#69c0ff","#40a9ff","#1890ff","#096dd9","#0050b3","#003a8c","#002766"]),o()(i,"GEEK_BLUE",["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"]),o()(i,"PURPLE",["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"]),o()(i,"MAGENTA",["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"]),n(3);var a=function(){function t(t){o()(this,"options",void 0),this.defaultSetting={type:null,text:"Button",visible:!1,width:0,height:0,css:[],classes:["button"]},this.options=t,this.build()}return t.prototype.build=function(){var t=document.createElement("button"),e=document.createDocumentFragment();t.classList.add("button"),this.options.type&&t.classList.add("button-"+this.options.type);var n=this.options.classes;if(n&&n.forEach(function(e){t.classList.add(e)}),this.options.text){var r=document.createTextNode(this.options.text);e.appendChild(r)}t.appendChild(e);var o=this.options.events;if(o)for(var i in o)o.hasOwnProperty(i)&&t.addEventListener(i,o[i]);this.options.parent&&this.options.parent.appendChild(t);var a=this.options.css;if(a)for(var d in a)a.hasOwnProperty(d)&&(t.style[d]=a[d]);return t},t}(),d=(n(6),function(){function t(t){o()(this,"options",void 0),this.defaultSetting={visible:!1,width:0,height:0,css:[],classes:["text-field"]},this.options=t,this.build()}return t.prototype.build=function(){var t=document.createElement("input"),e=document.createDocumentFragment(),n=this.options.width;n&&(t.style.width=n),t.classList.add("text-field");var r=this.options.classes;r&&r.forEach(function(e){t.classList.add(e)}),t.appendChild(e);var o=this.options.events;if(o)for(var i in o)o.hasOwnProperty(i)&&t.addEventListener(i,o[i]);this.options.parent&&this.options.parent.appendChild(t);var a=this.options.css;if(a)for(var d in a)a.hasOwnProperty(d)&&(t.style[d]=a[d]);return t},t}()),s=(n(8),function(){function t(t){o()(this,"options",void 0),this.defaultSetting={},this.options=t,this.build()}return t.prototype.build=function(){var t=document.createElement("div"),e=this.options.width,n=this.options.height;t.style.width=e?e+"px":null,t.style.height=n?n+"px":null,t.classList.add("table-wrapper");var r=document.createElement("div");r.classList.add("table-header"),t.appendChild(r);var o=document.createElement("table");o.classList.add("table"),r.appendChild(o);var i=document.createElement("colgroup");o.appendChild(i);var a=document.createElement("thead");o.appendChild(a);var d=document.createElement("div");d.style.width=e?e+"px":null,d.style.height=n?n-32+"px":null,d.classList.add("table-content"),t.appendChild(d);var s=document.createElement("table");s.classList.add("table"),d.appendChild(s);var l=document.createElement("colgroup");s.appendChild(l);var c=document.createElement("thead"),f=document.createElement("tbody");s.appendChild(f);var u=this.options.columns;if(u){var p=document.createElement("tr");a.appendChild(p);var b=document.createElement("tr");c.appendChild(b),u.forEach(function(t,e,n){var r=document.createElement("col");i.appendChild(r);var o=document.createElement("col");l.appendChild(o);var a=document.createElement("th"),d=document.createElement("th"),s=document.createTextNode(t.text);a.appendChild(s),t.width&&(r.setAttribute("width",t.width),o.setAttribute("width",t.width)),p.appendChild(a),b.appendChild(d)})}var h=this.options.data;return h&&h.length>0&&h.forEach(function(t,e,n){var r=document.createElement("tr");t.forEach(function(t,e,n){var o=document.createElement("td");r.appendChild(o);var i=document.createTextNode(t);o.appendChild(i)}),f.appendChild(r)}),this.options.parent&&this.options.parent.appendChild(t),t},t}()),l=(n(10),function(){function t(t){o()(this,"options",void 0),this.defaultSetting={},this.options=t,this.build()}return t.prototype.build=function(){var t=document.createElement("div");t.setAttribute("layout","border-layout");var e=this.options.width,n=this.options.height;t.style.width=e?e+"px":null,t.style.height=n?n+"px":null,t.classList.add("border-layout");var r={};this.options.items.forEach(function(t,e,n){var o=document.createElement("div");o.setAttribute("region",t.region),o.setAttribute("title",t.title);var i=t.width,a=t.height;o.style.width=i?i+"px":null,o.style.height=a?a+"px":null,r[t.region]=o});var o=r.north,i=r.south,a=r.west,d=r.center,s=r.east;if(o&&(o.classList.add("north"),t.appendChild(o)),a||s){var l=document.createElement("div");l.classList.add("border-layout"),l.classList.add("has-side"),t.appendChild(l),a&&(a.classList.add("west"),l.appendChild(a)),d&&(d.classList.add("center"),l.appendChild(d)),s&&(s.classList.add("east"),l.appendChild(s))}else d&&(d.classList.add("center"),t.appendChild(d));return i&&(i.classList.add("south"),t.appendChild(i)),this.options.parent&&this.options.parent.appendChild(t),t},t}()),c=(n(12),function(){function t(t){o()(this,"options",void 0),this.defaultSetting={},this.options=t,this.build()}return t.prototype.build=function(){var t=document.createElement("input");return t.setAttribute("type","checkbox"),this.options.parent&&this.options.parent.appendChild(t),t},t}());new a({type:"primary",text:"Button",parent:document.body,events:{click:function(){alert("hello!")}}}),new d({width:"200px",css:{color:i.RED[9]},parent:document.body}),new s({width:800,height:120,parent:document.body,title:"Employee Information Table",columns:[{index:"employee",text:"Employee Name",width:120,sortable:!1,renderer:function(){}},{index:"sex",text:"Sex",width:75,sortable:!1,renderer:function(){}},{index:"age",text:"Age",width:75,sortable:!1,renderer:function(){}},{index:"mobile",text:"Mobile",width:75,sortable:!1,renderer:function(){}},{index:"email",text:"Email",width:75,sortable:!1,renderer:function(){}},{index:"birthday",text:"Birthday Date",width:0,sortable:!1,renderer:function(){}}],data:[["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"]]}),new c({parent:document.body}),new l({parent:document.body,width:800,height:300,items:[{title:"North Panel",region:"north",height:50},{title:"West Panel",region:"west",width:184},{title:"South Panel",region:"south",height:50},{title:"Center Panel",region:"center"},{title:"East Panel",region:"east",width:184}]})}]);