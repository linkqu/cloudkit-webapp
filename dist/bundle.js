/*! Webpack 实例 */
!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var i,r,o=n(2),a=n(3),s=0,d=0;t.exports=function(t,e,n){var l=e&&n||0,c=e||[],u=(t=t||{}).node||i,f=void 0!==t.clockseq?t.clockseq:r;if(null==u||null==f){var h=o();null==u&&(u=i=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==f&&(f=r=16383&(h[6]<<8|h[7]))}var p=void 0!==t.msecs?t.msecs:(new Date).getTime(),m=void 0!==t.nsecs?t.nsecs:d+1,b=p-s+(m-d)/1e4;if(b<0&&void 0===t.clockseq&&(f=f+1&16383),(b<0||p>s)&&void 0===t.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=p,d=m,r=f;var y=(1e4*(268435455&(p+=122192928e5))+m)%4294967296;c[l++]=y>>>24&255,c[l++]=y>>>16&255,c[l++]=y>>>8&255,c[l++]=255&y;var g=p/4294967296*1e4&268435455;c[l++]=g>>>8&255,c[l++]=255&g,c[l++]=g>>>24&15|16,c[l++]=g>>>16&255,c[l++]=f>>>8|128,c[l++]=255&f;for(var v=0;v<6;++v)c[l+v]=u[v];return e||a(c)}},function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var i=new Uint8Array(16);t.exports=function(){return n(i),i}}else{var r=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),r[e]=t>>>((3&e)<<3)&255;return r}}},function(t,e){for(var n=[],i=0;i<256;++i)n[i]=(i+256).toString(16).substr(1);t.exports=function(t,e){var i=e||0,r=n;return[r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]]].join("")}},function(t,e,n){"use strict";n.r(e);var i={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(i.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return i.iterable&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function c(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function u(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function f(t){var e=new FileReader,n=u(e);return e.readAsArrayBuffer(t),n}function h(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:i.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:i.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():i.arrayBuffer&&i.blob&&function(t){return t&&DataView.prototype.isPrototypeOf(t)}(t)?(this._bodyArrayBuffer=h(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||o(t))?this._bodyArrayBuffer=h(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):i.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i.blob&&(this.blob=function(){var t=c(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?c(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var t=c(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,n=u(e);return e.readAsText(t),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),i=0;i<e.length;i++)n[i]=String.fromCharCode(e[i]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=a(t),e=s(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},l.prototype.delete=function(t){delete this.map[a(t)]},l.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},l.prototype.set=function(t,e){this.map[a(t)]=s(e)},l.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},l.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),d(t)},l.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),d(t)},l.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),d(t)},i.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(t,e){var n=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=function(t){var e=t.toUpperCase();return m.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function y(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),i=n.shift().replace(/\+/g," "),r=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(i),decodeURIComponent(r))}}),e}function g(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},p.call(b.prototype),p.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:0,statusText:""});return t.type="error",t};var v=[301,302,303,307,308];g.redirect=function(t,e){if(-1===v.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})};var w=self.DOMException;try{new w}catch(t){(w=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack}).prototype=Object.create(Error.prototype),w.prototype.constructor=w}function x(t,e){return new Promise(function(n,r){var o=new b(t,e);if(o.signal&&o.signal.aborted)return r(new w("Aborted","AbortError"));var a=new XMLHttpRequest;function s(){a.abort()}a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:function(t){var e=new l;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var n=t.split(":"),i=n.shift().trim();if(i){var r=n.join(":").trim();e.append(i,r)}}),e}(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;n(new g(e,t))},a.onerror=function(){r(new TypeError("Network request failed"))},a.ontimeout=function(){r(new TypeError("Network request failed"))},a.onabort=function(){r(new w("Aborted","AbortError"))},a.open(o.method,o.url,!0),"include"===o.credentials?a.withCredentials=!0:"omit"===o.credentials&&(a.withCredentials=!1),"responseType"in a&&i.blob&&(a.responseType="blob"),o.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),o.signal&&(o.signal.addEventListener("abort",s),a.onreadystatechange=function(){4===a.readyState&&o.signal.removeEventListener("abort",s)}),a.send(void 0===o._bodyInit?null:o._bodyInit)})}x.polyfill=!0,self.fetch||(self.fetch=x,self.Headers=l,self.Request=b,self.Response=g);var E=n(0),C=n.n(E),L=function(){};C()(L,"RED",["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"]),C()(L,"VOLCANO",["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"]),C()(L,"ORANGE",["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"]),C()(L,"GOLD",["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"]),C()(L,"YELLOW",["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"]),C()(L,"LIME",["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"]),C()(L,"GREEN",["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"]),C()(L,"CYAN",["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"]),C()(L,"BLUE",["#e6f7ff","#bae7ff","#91d5ff","#69c0ff","#40a9ff","#1890ff","#096dd9","#0050b3","#003a8c","#002766"]),C()(L,"GEEK_BLUE",["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"]),C()(L,"PURPLE",["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"]),C()(L,"MAGENTA",["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"]),n(5);var A=function(){function t(t){C()(this,"options",void 0),C()(this,"element",void 0),this.defaultSetting={type:null,text:"Button",visible:!1,width:0,height:0,css:[],classes:["button"]},this.options=t,this.build()}var e=t.prototype;return e.build=function(){var t=document.createElement("button"),e=document.createDocumentFragment();t.classList.add("widget-button"),this.options.type&&t.classList.add("button-"+this.options.type);var n=this.options.classes;if(n&&n.forEach(function(e){t.classList.add(e)}),this.options.text){var i=document.createTextNode(this.options.text);e.appendChild(i)}t.appendChild(e);var r=this.options.events;if(r)for(var o in r)r.hasOwnProperty(o)&&t.addEventListener(o,r[o]);var a=this.options.css;if(a)for(var s in a)a.hasOwnProperty(s)&&(t.style[s]=a[s]);return this.options.parent&&this.options.parent.appendChild(t),this.element=t,this.element},e.getElement=function(){return this.element},t}(),T=(n(10),n(12),n(14),function(){function t(t){C()(this,"options",void 0),this.defaultSetting={},this.options=t,this.build()}return t.prototype.build=function(){var t=document.createElement("div");t.classList.add("widget-checkbox");var e=document.createElement("input");e.setAttribute("type","checkbox"),e.id=this.options.id?this.options.id:null,e.name=this.options.name?this.options.name:null,void 0!==this.options.disabled&&e.setAttribute("disabled",this.options.disabled),t.appendChild(e);var n=document.createElement("label");n.setAttribute("for",e.id),t.appendChild(n);var i=document.createElement("span");i.classList.add("checkbox-rectangle"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14">    <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"        fill="none"    /></svg>',n.appendChild(i);var r=document.createElement("span");return r.appendChild(document.createTextNode(" "+(this.options.text?this.options.text:""))),n.appendChild(r),this.options.parent&&this.options.parent.appendChild(t),t},t}()),O=(n(16),function(){function t(t){C()(this,"options",void 0),C()(this,"element",void 0),C()(this,"dragging",{isAllowResize:!1,isDragging:!1,dragWidth:0,dragColumnIndex:null,dragFirstOffset:null,itemWidth:0,columnMinWidth:120,scrollLeft:0}),this.defaultSetting={},this.options=t,this.build()}var e=t.prototype;return e.build=function(){var e,n=this,i=t.getVerticalScrollBarWidth(),r=document.createElement("div"),o=this.options.width,a=this.options.height;if(r.style.width=o?o+"px":null,r.style.height=a?a+"px":null,r.classList.add("widget-table"),this.options.title){(e=document.createElement("div")).classList.add("table-title");var s=document.createTextNode(this.options.title);e.appendChild(s),r.appendChild(e)}var d=document.createElement("div");d.style.width=o?o+"px":null,d.classList.add("table-header"),r.appendChild(d);var l=document.createElement("table");l.classList.add("table"),d.appendChild(l);var c=document.createElement("colgroup");l.appendChild(c);var u=document.createElement("thead");l.appendChild(u);var f=document.createElement("div");f.style.width=o?o+"px":null,f.classList.add("table-content"),r.appendChild(f),f.addEventListener("scroll",function(t){var e=f.scrollWidth-f.clientWidth,r=f.scrollHeight-f.clientHeight;if(e&&r){if(!l.querySelector(".table-patch")){var o=document.createElement("th");o.classList.add("table-patch"),o.width=i,l.querySelector("tr").appendChild(o)}}else{var a=l.querySelector(".table-patch");a&&a.remove()}d.scrollLeft=f.scrollLeft,n.dragging.scrollLeft=f.scrollLeft}),window.addEventListener("resize",function(){});var h=document.createElement("table");h.classList.add("table"),f.appendChild(h);var p=document.createElement("colgroup");h.appendChild(p);var m=document.createElement("thead"),b=document.createElement("tbody");h.appendChild(b);var y=this.options.columns;if(y){var g=document.createElement("tr");u.appendChild(g);var v=document.createElement("tr");m.appendChild(v),y.forEach(function(t,e,i){var r=document.createElement("col");t.index?r.setAttribute("data-index",t.index):r.setAttribute("data-index",e),c.appendChild(r);var o=document.createElement("col");t.index?o.setAttribute("data-index",t.index):o.setAttribute("data-index",e),p.appendChild(o);var a=document.createElement("th");t.index?a.setAttribute("data-index",t.index):a.setAttribute("data-index",e),a.setAttribute("title",t.text);var s=document.createElement("th");g.appendChild(a),v.appendChild(s);var d=document.createTextNode(t.text);a.appendChild(d),t.width&&(r.setAttribute("width",t.width),o.setAttribute("width",t.width)),a.addEventListener("mousemove",function(t){n.dragging.isAllowResize=this.offsetWidth-(t.clientX-this.offsetLeft)-n.dragging.scrollLeft<=8,this.style.cursor=n.dragging.isAllowResize?"col-resize":""}),a.addEventListener("mouseleave",function(t){n.dragging.isDragging||(this.style.cursor="")}),a.addEventListener("mousedown",function(t){if(n.dragging.isAllowResize){n.dragging.isDragging=!0,t.preventDefault();var e=t.clientX;t.clientY,n.dragging.dragFirstOffset=e,n.dragging.dragColumnIndex=this.getAttribute("data-index"),n.dragging.itemWidth=parseInt(r.width),console.log("itemWidth: %d",n.dragging.itemWidth)}}),document.addEventListener("mousemove",function(t){if(n.dragging.isDragging){t.preventDefault();var e=t.clientX,i=(t.clientY,parseInt(p.querySelector("col[data-index="+n.dragging.dragColumnIndex+"]").width));console.log("targetWidth width: %d",i),n.dragging.dragWidth=n.dragging.itemWidth+e-n.dragging.dragFirstOffset,n.dragging.dragWidth=n.dragging.dragWidth<n.dragging.columnMinWidth?n.dragging.columnMinWidth:n.dragging.dragWidth,console.log("dragWidth: %d",n.dragging.dragWidth),c.querySelector("col[data-index="+n.dragging.dragColumnIndex+"]").width=n.dragging.dragWidth,p.querySelector("col[data-index="+n.dragging.dragColumnIndex+"]").width=n.dragging.dragWidth,document.body.style.cursor="col-resize"}}),document.addEventListener("mouseup",function(t){n.dragging.isDragging&&(document.body.style.cursor="",n.dragging={isAllowResize:!1,isDragging:!1,dragWidth:0,dragColumnIndex:null,dragFirstOffset:null,scrollLeft:0})})})}var w=this.options.data;w&&w.length>0&&w.forEach(function(t,e,n){var i=document.createElement("tr");t.forEach(function(t,e,n){var r=document.createElement("td");i.appendChild(r);var o=y[e].renderer;if(o)r.innerHTML=o(t);else{var a=document.createTextNode(t);r.appendChild(a)}}),b.appendChild(i)}),this.options.parent&&this.options.parent.appendChild(r);var x=a?a-(e?e.clientHeight:0):null;return x=x?x-d.clientHeight:null,f.style.height=x+"px",this.element=r,this.element},e.getElement=function(){return this.element},t.getVerticalScrollBarWidth=function(){var t,e,n=document.createElement("div");return n.style.position="absolute",n.style.top="-1000px",n.style.width="100px",n.style.height="100px",n.style.overflow="hidden",t=document.body.appendChild(n).clientWidth,n.style.overflowY="scroll",e=n.clientWidth,document.body.removeChild(n),t-e},t}()),S=(n(18),n(20),n(1)),B=n.n(S),P=function(){function t(t){C()(this,"options",void 0),C()(this,"element",void 0),this.defaultSetting={},this.options=t,this.build()}var e=t.prototype;return e.build=function(){var t=document.createElement("div");t.classList.add("widget-accordion");var e=this.options.items;return e&&e.forEach(function(e,n,i){var r=document.createElement("div");r.classList.add("accordion-item"),t.appendChild(r);var o=document.createElement("input");o.setAttribute("type","checkbox"),o.classList.add("item-checkbox"),o.id=e.id,r.appendChild(o);var a=document.createElement("label");a.classList.add("title"),a.setAttribute("for",o.id),a.appendChild(document.createTextNode(e.title)),r.appendChild(a);var s=document.createElement("div");s.classList.add("child-container"),r.appendChild(s);var d=e.children;e.children&&d.forEach(function(t,e,n){var i=document.createElement("div");i.classList.add("child-item");var r=document.createElement("input");r.setAttribute("type","checkbox"),r.classList.add("item-checkbox"),r.id=B()(),i.appendChild(r);var o=document.createElement("label");o.classList.add("title"),o.setAttribute("for",r.id),o.appendChild(document.createTextNode(t.title)),i.appendChild(o);var a=document.createElement("article");a.classList.add("item-text"),a.innerHTML=t.text,i.appendChild(a),s.appendChild(i)})}),this.options.parent&&this.options.parent.appendChild(t),this.element=t,this.element},e.getElement=function(){return this.element},t}(),_=function(){function t(t){C()(this,"options",void 0),this.defaultSetting={},this.options=t,this.build()}return t.prototype.build=function(){},t}(),R=(n(22),function(){function t(t){C()(this,"options",void 0),C()(this,"element",void 0),this.defaultSetting={},this.options=t,this.build()}var e=t.prototype;return e.build=function(){var t=this.options,e=document.createElement("div");e.classList.add("widget-menu"),e.classList.add("clearfix");var n=document.createElement("div");n.classList.add("menu-bar"),e.appendChild(n);var i=t.items;return i&&i.forEach(function(t,i,r){var o=document.createElement("div");o.classList.add("menu-bar-item"),o.appendChild(document.createTextNode(t.title));var a=t.events;if(a)for(var s in a)a.hasOwnProperty(s)&&o.addEventListener(s,a[s]);n.appendChild(o);var d=document.createElement("div");d.classList.add("menu"),e.appendChild(d);var l=t.children;l&&l.forEach(function(t,e,n){var i=document.createElement("div");i.appendChild(document.createTextNode(t.title)),i.classList.add("menu-item");var r=t.events;if(r)for(var o in r)r.hasOwnProperty(o)&&i.addEventListener(o,r[o]);d.appendChild(i)}),o.addEventListener("mouseover",function(t){d.style.display="inline-block",d.style.position="absolute",d.style.top=o.offsetTop+o.clientHeight+"px",d.style.left=o.offsetLeft+"px",d.style["z-index"]="9999"}),o.addEventListener("mouseout",function(t){d.style.display="none"}),d.addEventListener("mouseover",function(t){d.style.display="inline-block"}),d.addEventListener("mouseout",function(t){d.style.display="none"})}),t.parent&&t.parent.appendChild(e),this.element=e,e},e.getElement=function(){return this.element},t}()),k=(n(24),n(26),function(){function t(t){C()(this,"options",void 0),this.defaultSetting={},this.options=t,this.build()}return t.prototype.build=function(){var t=document.createElement("span");return t.classList.add("widget-separator"),this.options.parent&&this.options.parent.appendChild(t),t},t}()),q=function(){function t(t){C()(this,"options",void 0),C()(this,"element",void 0),this.defaultSetting={},this.options=t,this.build()}var e=t.prototype;return e.build=function(){var t=this.options,e=document.createElement("div");e.classList.add("widget-toolbar");var n=t.items;return n&&n.forEach(function(t,n,i){var r=new A({parent:e,text:"Button"});new k({parent:e});var o=t.events;if(o)for(var a in o)o.hasOwnProperty(a)&&r.addEventListener(a,o[a])}),t.parent&&t.parent.appendChild(e),this.element=e,this.element},e.getElement=function(){return this.element},t}(),D=function(){function t(){}return t.buildComponent=function(t,e){return new this.COMPONENT_CLASSES[t](e)},t}();C()(D,"COMPONENT_CLASSES",{Accordion:P,Button:A,Checkbox:T,Toolbar:q,Table:O,EditText:_,Menu:R});var W=function(){function t(t){C()(this,"options",void 0),this.defaultSetting={},this.options=t,this.build()}return t.prototype.build=function(){var t=document.createElement("div");t.setAttribute("layout","border-layout");var e=this.options.width,n=this.options.height;t.style.width=e?e+"px":null,t.style.height=n?n+"px":null,t.classList.add("border-layout");var i={};this.options.items.forEach(function(t,e,n){var r=document.createElement("div");r.setAttribute("region",t.region),r.setAttribute("title",t.title);var o=t.width,a=t.height;r.style.width=o?o+"px":null,r.style.height=a?a+"px":null;var s=t.css;if(s)for(var d in s)s.hasOwnProperty(d)&&(r.style[d]=s[d]);t.items&&t.items.forEach(function(t,e,n){var i=D.buildComponent(t.type,t.options).getElement();r.appendChild(i)}),i[t.region]=r});var r=i.north,o=i.south,a=i.west,s=i.center,d=i.east;if(r&&(r.classList.add("north"),t.appendChild(r)),a||d){var l=document.createElement("div");l.classList.add("border-layout"),l.classList.add("has-side"),t.appendChild(l),a&&(a.classList.add("west"),l.appendChild(a)),s&&(s.classList.add("center"),l.appendChild(s)),d&&(d.classList.add("east"),l.appendChild(d))}else s&&(s.classList.add("center"),t.appendChild(s));return o&&(o.classList.add("south"),t.appendChild(o)),this.options.parent&&this.options.parent.appendChild(t),t},t}();n(28),n(30),n(32),n(37),n(39),new W({parent:document.body,items:[{title:"North Panel",region:"north",items:[{type:"Menu",options:{items:[{index:"bookmarks",title:"Bookmarks",children:[{title:"book report",events:{click:function(){alert("hello!")}}},{title:"alegrbra"}]},{index:"downloads",title:"Downloads",children:[{title:"open report"},{title:"alegrbra"}]},{index:"history",title:"History",children:[{title:"book report history"},{title:"alegrbra"}]},{index:"window",title:"Window",children:[{title:"hide"},{title:"alegrbra"}]}]}},{type:"Toolbar",options:{items:[{index:"bookmarks",text:"Bookmarks"},{index:"downloads",text:"Downloads"},{index:"history",text:"History"},{index:"window",text:"Window"}]}}]},{title:"West Panel",region:"west",width:184,css:{},items:[{type:"Accordion",options:{items:[{id:"bookmarks",title:"Bookmarks",children:[{title:"book report",text:"test"},{title:"alegrbra",text:"test"}]},{id:"downloads",title:"Downloads",children:[{title:"book report",text:""},{title:"alegrbra",text:""}]},{id:"history",title:"History",children:[{title:"book report",text:""},{title:"alegrbra",text:""}]},{id:"window",title:"Window",children:[{title:"book report",text:""},{title:"alegrbra",text:""}]}]}}]},{title:"South Panel",region:"south"},{title:"Center Panel",region:"center",items:[{type:"Table",options:{height:200,title:"Employee Information Table",columns:[{index:"employee",text:"Employee Name",width:120,sortable:!1,renderer:function(t){return"<a href='index.html'>Hello "+t+"!</a>"}},{index:"sex",text:"Sex",width:75,sortable:!1,renderer:void 0},{index:"age",text:"Age",width:75,sortable:!1,renderer:void 0},{index:"mobile",text:"Mobile",width:120,sortable:!1,renderer:void 0},{index:"email",text:"Email",width:120,sortable:!1,renderer:void 0},{index:"birthday",text:"Birthday Date",width:120,sortable:!1,renderer:void 0}],data:[["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"]]}}]},{title:"East Panel",region:"east"}]})},function(t,e){},,,,,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,function(t,e){},,,,,function(t,e){},,function(t,e){}]);