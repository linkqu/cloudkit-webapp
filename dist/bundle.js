/*! Webpack 实例 */
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var d=e[r];"number"==typeof d[0]&&o[d[0]]||(n&&!d[2]?d[2]=n:n&&(d[2]="("+d[2]+") and ("+n+")"),t.push(d))}},t}},function(e,t,n){var o={},r=function(e){var t;return function(){return void 0===t&&(t=function(){return window&&document&&document.all&&!window.atob}.apply(this,arguments)),t}}(),i=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),d=null,a=0,s=[],l=n(5);function c(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var d=0;d<i.parts.length;d++)i.parts[d](r.parts[d]);for(;d<r.parts.length;d++)i.parts.push(g(r.parts[d],t))}else{var a=[];for(d=0;d<r.parts.length;d++)a.push(g(r.parts[d],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function f(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],d=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[d]?o[d].parts.push(a):n.push(o[d]={id:d,parts:[a]})}return n}function u(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=s[s.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(e.insertAt.before,n);n.insertBefore(t,r)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=n.nc;o&&(e.attrs.nonce=o)}return h(t,e.attrs),u(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var s=a++;n=d||(d=b(t)),o=v.bind(null,n,s,!1),r=v.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),u(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=l(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var d=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(d),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),o=function(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){p(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return c(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var d=n[i];(a=o[d.id]).refs--,r.push(a)}for(e&&c(f(e,t),t),i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete o[a.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function v(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var i=document.createTextNode(r),d=e.childNodes;d[t]&&e.removeChild(d[t]),d.length?e.insertBefore(i,d[t]):e.appendChild(i)}}},function(e,t,n){var o=n(4);"string"==typeof o&&(o=[[e.i,o,""]]);n(2)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"/* theme-default */\n.widget-button {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    touch-action: manipulation;\n    cursor: pointer;\n    padding: 3px 15px 3px 15px;\n    font-size: 12px;\n    line-height: 1.5;\n    background: #fff none;\n    border: 1px solid #dcdee2;\n    transition: color .2s linear, background-color .2s linear, border .2s linear, box-shadow .2s linear;\n    /*transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;*/\n}\n\n.button-round-corner {\n    border-radius: 4px;\n}\n\n.button:hover {\n    color: #57a3f3;\n    background-color: #fff;\n    border-color: #57a3f3\n}\n\n.button-primary {\n    color: #fff;\n    background-color: #2d8cf0;\n    border-color: #2d8cf0;\n}\n\n.button-dashed {\n    color: #515a6e;\n    background-color: #fff;\n    border: dashed #dcdee2;\n}\n\n.button-text {\n    color: #515a6e;\n    background-color: transparent;\n    border-color: transparent;\n}\n\n.button-success {\n    color: #fff;\n    background-color: #19be6b;\n    border-color: #19be6b;\n}\n\n.button-warning {\n    color: #fff;\n    background-color: #f90;\n    border-color: #f90;\n}\n\n.button-error {\n    color: #fff;\n    background-color: #ed4014;\n    border-color: #ed4014;\n}\n\n.button-info {\n    color: #fff;\n    background-color: #2db7f5;\n    border-color: #2db7f5;\n}\n\n.button-outline {\n    color: #007bff;\n    background: transparent none;\n    border-color: #007bff;\n}\n\n.button-circle {\n    /*border-radius: 32px;*/\n    width: 32px;\n    height: 32px;\n    padding: 0;\n    border-radius: 50%;\n}\n\n.button-small {\n    padding: 1px 7px 2px;\n    font-size: 12px;\n    border-radius: 3px;\n}\n\n.button-large {\n    padding: 6px 15px;\n    font-size: 14px;\n    border-radius: 4px;\n}\n\n.button-group {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.button-group:not(.button-group-vertical)>.button:first-child:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n.button-group:not(.button-group-vertical)>.button:last-child:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){var o=n(7);"string"==typeof o&&(o=[[e.i,o,""]]);n(2)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".widget-text-field {\n    display: inline-block;\n    width: 100%;\n    line-height: 1.5;\n    padding: 3px 7px;\n    font-size: 12px;\n    border: 1px solid #dcdee2;\n    /*border-radius: 4px;*/\n    color: #515a6e;\n    background: #fff none;\n    vertical-align: middle;\n    position: relative;\n    cursor: text;\n    transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;\n}\n\n.widget-text-field::-moz-placeholder {\n    color: #c5c8ce;\n    opacity: 1\n}\n\n.widget-text-field:-ms-input-placeholder {\n    color: #c5c8ce\n}\n\n.widget-text-field::-webkit-input-placeholder {\n    color: #c5c8ce\n}\n\n.widget-text-field:focus, .ivu-input:hover {\n    border-color: #57a3f3\n}\n\n.widget-text-field:focus {\n    outline: 0;\n    box-shadow: 0 0 0 2px #2D8CF0\n}\n\n.widget-text-field[disabled], fieldset[disabled] .text-field {\n    background-color: #f3f3f3;\n    opacity: 1;\n    cursor: not-allowed;\n    color: #ccc\n}\n\n.widget-text-field[disabled]:hover, fieldset[disabled] .text-field:hover {\n    border-color: #e3e5e8\n}\n",""])},function(e,t,n){var o=n(9);"string"==typeof o&&(o=[[e.i,o,""]]);n(2)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".widget-table {\n    box-sizing: border-box;\n    position: relative;\n    background-color: #ffffff;\n    overflow: hidden;\n    border: 1px solid #dddddd;\n}\n\n.widget-table .table-header {\n    overflow-x: auto;\n    overflow-y: hidden;\n    border-bottom: 1px solid #dddddd;\n}\n\n.widget-table .table {\n    position: relative;\n    table-layout: fixed;\n    width: 100%;\n    border-collapse: separate;\n    box-sizing: border-box;\n    border-spacing: 0;\n    margin: 0;\n    padding: 0;\n}\n\n.widget-table .table tr th {\n    vertical-align: middle;\n    box-sizing: border-box;\n    min-height: 2rem;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    background-color: #f7f7f7;\n    color: #333333;\n    border-right: 1px solid #dddddd;\n    text-overflow: ellipsis;\n}\n\n.widget-table .table tr th:first-child {\n    border-left: none;\n}\n\n.widget-table .table tr th:last-child {\n    border-right: none;\n}\n\n.widget-table .table tbody tr {\n    height: 33px;\n    color: #333333;\n    font-weight: normal;\n    box-sizing: border-box;\n}\n\n.widget-table .table tr td:first-child {\n    border-left: none;\n}\n\n.widget-table .table tr td:last-child {\n    border-right: none;\n}\n\n.widget-table .table tr td {\n    vertical-align: middle;\n    box-sizing: border-box;\n    border-right: 1px solid #dddddd;\n    border-bottom: 1px solid #e5e5e5;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    padding: 0 0.5rem;\n    word-wrap: break-word;\n    cursor: text;\n    line-height: normal;\n    color: #333333;\n}\n\n.widget-table .table tbody tr:first-child td {\n    border-top: 1px solid #e5e5e5;\n}\n\n.widget-table .table tbody tr:nth-child(2n) td {\n    background-color: #f8f8f9\n}\n\n.widget-table .table tbody tr:hover td {\n    background-color: #ebf7ff\n}\n\n.widget-table .table-content {\n    overflow: auto;\n}\n",""])},function(e,t,n){var o=n(11);"string"==typeof o&&(o=[[e.i,o,""]]);n(2)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".border-layout {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-flex: 1;\n    -ms-flex: auto;\n    flex: auto;\n    background: #f5f7f9;\n    height: 100%;\n}\n\n.border-layout .north, .border-layout .south {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n}\n\n.border-layout .north, .border-layout .south {\n    background: #7cbce9;\n    /*background: #515a6e;*/\n    color: #fff;\n}\n\n.border-layout .has-side {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    height: 100%;\n}\n\n.border-layout .west, .border-layout .east {\n    position: relative;\n    height: 100%;\n    /*width: 200px;*/\n    /*min-width: 200px;*/\n    /*max-width: 200px;*/\n    /*flex: 0 0 200px;*/\n    background: #3a9fe8;\n    color: #fff;\n    transition: all .2s ease-in-out;\n}\n\n.border-layout .has-side > .center {\n    overflow-x: hidden;\n}\n\n.border-layout .center {\n    -webkit-box-flex: 1;\n    -ms-flex: auto;\n    flex: auto;\n    background: #8ee8e0;\n}\n",""])},function(e,t,n){var o=n(13);"string"==typeof o&&(o=[[e.i,o,""]]);n(2)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,'.widget-checkbox {\n\n}\n\n.widget-checkbox input[type="checkbox"] {\n    display: none;\n}\n\n.widget-checkbox .checkbox-rectangle {\n    display: inline-block;\n    width: 14px;\n    height: 14px;\n    vertical-align: middle;\n    position: relative;\n    border: 1px solid #dcdee2;\n    /*border-radius: 2px;*/\n    background-color: #fff;\n\n    transition: border-color .2s ease-in-out,background-color .2s ease-in-out,box-shadow .2s ease-in-out;\n}\n\n.widget-checkbox label {\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.widget-checkbox label svg path {\n    transition: stroke-dashoffset .4s linear;\n}\n\n.widget-checkbox input[type="checkbox"]:checked ~ label svg path {\n    border-color: #2d8cf0;\n    fill: #2d8cf0;\n}\n\n.widget-checkbox input[type="checkbox"] ~ label svg path {\n    background: #ffffff;\n}\n',""])},function(e,t,n){var o=n(15);"string"==typeof o&&(o=[[e.i,o,""]]);n(2)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,'.widget-radio {\n\n}\n\n.widget-radio input[type="radio"] {\n    display: none;\n}\n\n.widget-radio .radio-rectangle {\n    display: inline-block;\n    width: 14px;\n    height: 14px;\n    vertical-align: middle;\n    position: relative;\n    border: 1px solid #dcdee2;\n    border-radius: 7px;\n    background-color: #fff;\n\n    transition: border-color .2s ease-in-out,background-color .2s ease-in-out,box-shadow .2s ease-in-out;\n}\n\n.widget-radio label {\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.widget-radio label svg path {\n    transition: stroke-dashoffset .4s linear;\n}\n\n.widget-radio input[type="radio"]:checked ~ label svg path {\n    border-color: #ffffff;\n    fill: #2d8cf0;\n}\n\n.widget-radio input[type="radio"] ~ label svg path {\n    background: #ffffff;\n    fill: #ffffff;\n}\n',""])},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=function(){};r()(i,"RED",["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"]),r()(i,"VOLCANO",["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"]),r()(i,"ORANGE",["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"]),r()(i,"GOLD",["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"]),r()(i,"YELLOW",["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"]),r()(i,"LIME",["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"]),r()(i,"GREEN",["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"]),r()(i,"CYAN",["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"]),r()(i,"BLUE",["#e6f7ff","#bae7ff","#91d5ff","#69c0ff","#40a9ff","#1890ff","#096dd9","#0050b3","#003a8c","#002766"]),r()(i,"GEEK_BLUE",["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"]),r()(i,"PURPLE",["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"]),r()(i,"MAGENTA",["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"]),n(3);var d=function(){function e(e){r()(this,"options",void 0),this.defaultSetting={type:null,text:"Button",visible:!1,width:0,height:0,css:[],classes:["button"]},this.options=e,this.build()}return e.prototype.build=function(){var e=document.createElement("button"),t=document.createDocumentFragment();e.classList.add("widget-button"),this.options.type&&e.classList.add("button-"+this.options.type);var n=this.options.classes;if(n&&n.forEach(function(t){e.classList.add(t)}),this.options.text){var o=document.createTextNode(this.options.text);t.appendChild(o)}e.appendChild(t);var r=this.options.events;if(r)for(var i in r)r.hasOwnProperty(i)&&e.addEventListener(i,r[i]);this.options.parent&&this.options.parent.appendChild(e);var d=this.options.css;if(d)for(var a in d)d.hasOwnProperty(a)&&(e.style[a]=d[a]);return e},e}(),a=(n(6),function(){function e(e){r()(this,"options",void 0),this.defaultSetting={visible:!1,width:0,height:0,css:[],classes:["widget-text-field"]},this.options=e,this.build()}return e.prototype.build=function(){var e=document.createElement("input"),t=document.createDocumentFragment(),n=this.options.width;n&&(e.style.width=n),e.classList.add("widget-text-field");var o=this.options.classes;o&&o.forEach(function(t){e.classList.add(t)}),e.appendChild(t);var r=this.options.events;if(r)for(var i in r)r.hasOwnProperty(i)&&e.addEventListener(i,r[i]);this.options.parent&&this.options.parent.appendChild(e);var d=this.options.css;if(d)for(var a in d)d.hasOwnProperty(a)&&(e.style[a]=d[a]);return e},e}()),s=(n(8),function(){function e(e){r()(this,"options",void 0),this.defaultSetting={},this.options=e,this.build()}return e.prototype.build=function(){var e=document.createElement("div"),t=this.options.width,n=this.options.height;e.style.width=t?t+"px":null,e.style.height=n?n+"px":null,e.classList.add("table-wrapper");var o=document.createElement("div");o.classList.add("table-header"),e.appendChild(o);var r=document.createElement("table");r.classList.add("table"),o.appendChild(r);var i=document.createElement("colgroup");r.appendChild(i);var d=document.createElement("thead");r.appendChild(d);var a=document.createElement("div");a.style.width=t?t+"px":null,a.style.height=n?n-32+"px":null,a.classList.add("table-content"),e.appendChild(a);var s=document.createElement("table");s.classList.add("table"),a.appendChild(s);var l=document.createElement("colgroup");s.appendChild(l);var c=document.createElement("thead"),f=document.createElement("tbody");s.appendChild(f);var u=this.options.columns;if(u){var p=document.createElement("tr");d.appendChild(p);var b=document.createElement("tr");c.appendChild(b),u.forEach(function(e,t,n){var o=document.createElement("col");i.appendChild(o);var r=document.createElement("col");l.appendChild(r);var d=document.createElement("th"),a=document.createElement("th"),s=document.createTextNode(e.text);d.appendChild(s),e.width&&(o.setAttribute("width",e.width),r.setAttribute("width",e.width)),p.appendChild(d),b.appendChild(a)})}var h=this.options.data;return h&&h.length>0&&h.forEach(function(e,t,n){var o=document.createElement("tr");e.forEach(function(e,t,n){var r=document.createElement("td");o.appendChild(r);var i=document.createTextNode(e);r.appendChild(i)}),f.appendChild(o)}),this.options.parent&&this.options.parent.appendChild(e),e},e}()),l=(n(10),function(){function e(e){r()(this,"options",void 0),this.defaultSetting={},this.options=e,this.build()}return e.prototype.build=function(){var e=document.createElement("div");e.setAttribute("layout","border-layout");var t=this.options.width,n=this.options.height;e.style.width=t?t+"px":null,e.style.height=n?n+"px":null,e.classList.add("border-layout");var o={};this.options.items.forEach(function(e,t,n){var r=document.createElement("div");r.setAttribute("region",e.region),r.setAttribute("title",e.title);var i=e.width,d=e.height;r.style.width=i?i+"px":null,r.style.height=d?d+"px":null,o[e.region]=r});var r=o.north,i=o.south,d=o.west,a=o.center,s=o.east;if(r&&(r.classList.add("north"),e.appendChild(r)),d||s){var l=document.createElement("div");l.classList.add("border-layout"),l.classList.add("has-side"),e.appendChild(l),d&&(d.classList.add("west"),l.appendChild(d)),a&&(a.classList.add("center"),l.appendChild(a)),s&&(s.classList.add("east"),l.appendChild(s))}else a&&(a.classList.add("center"),e.appendChild(a));return i&&(i.classList.add("south"),e.appendChild(i)),this.options.parent&&this.options.parent.appendChild(e),e},e}()),c=(n(12),function(){function e(e){r()(this,"options",void 0),this.defaultSetting={},this.options=e,this.build()}return e.prototype.build=function(){var e=document.createElement("div");e.classList.add("widget-checkbox");var t=document.createElement("input");t.setAttribute("type","checkbox"),t.id="option",e.appendChild(t);var n=document.createElement("label");n.setAttribute("for","option"),e.appendChild(n);var o=document.createElement("span");o.classList.add("checkbox-rectangle"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14">    <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"        fill="none"    /></svg>',n.appendChild(o);var r=document.createElement("span");return r.appendChild(document.createTextNode(" "+(this.options.text?this.options.text:""))),n.appendChild(r),this.options.parent&&this.options.parent.appendChild(e),e},e}()),f=(n(14),function(){function e(e){r()(this,"options",void 0),this.defaultSetting={},this.options=e,this.build()}return e.prototype.build=function(){var e=document.createElement("div");e.classList.add("widget-radio");var t=document.createElement("input");t.setAttribute("type","radio"),t.id=this.options.id?this.options.id:null,t.name=this.options.name?this.options.name:null,e.appendChild(t);var n=document.createElement("label");n.setAttribute("for",t.id),e.appendChild(n);var o=document.createElement("span");o.classList.add("radio-rectangle"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14">    <path d="M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z"        fill="none"    /></svg>',n.appendChild(o);var r=document.createElement("span");return r.appendChild(document.createTextNode(" "+(this.options.text?this.options.text:""))),n.appendChild(r),this.options.parent&&this.options.parent.appendChild(e),e},e}());new d({type:"primary",text:"Button",parent:document.body,events:{click:function(){alert("hello!")}}}),new a({width:"200px",css:{color:i.RED[9]},parent:document.body}),new s({width:800,height:120,parent:document.body,title:"Employee Information Table",columns:[{index:"employee",text:"Employee Name",width:120,sortable:!1,renderer:function(){}},{index:"sex",text:"Sex",width:75,sortable:!1,renderer:function(){}},{index:"age",text:"Age",width:75,sortable:!1,renderer:function(){}},{index:"mobile",text:"Mobile",width:75,sortable:!1,renderer:function(){}},{index:"email",text:"Email",width:75,sortable:!1,renderer:function(){}},{index:"birthday",text:"Birthday Date",width:0,sortable:!1,renderer:function(){}}],data:[["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"]]}),new c({text:"Checkbox",parent:document.body}),new f({id:"t1",name:"type",text:"Radio",parent:document.body}),new f({id:"t2",name:"type",text:"Radio",parent:document.body}),new l({parent:document.body,width:800,height:300,items:[{title:"North Panel",region:"north",height:50},{title:"West Panel",region:"west",width:184},{title:"South Panel",region:"south",height:50},{title:"Center Panel",region:"center"},{title:"East Panel",region:"east",width:184}]})}]);