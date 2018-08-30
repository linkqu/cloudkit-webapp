"use strict";function unwrapExports(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var ceil=Math.ceil,floor=Math.floor,_toInteger=function(e){return isNaN(e=+e)?0:(0<e?floor:ceil)(e)},_defined=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},_stringAt=function(c){return function(e,t){var n,r,o=String(_defined(e)),i=_toInteger(t),a=o.length;return i<0||a<=i?c?"":void 0:(n=o.charCodeAt(i))<55296||56319<n||i+1===a||(r=o.charCodeAt(i+1))<56320||57343<r?c?o.charAt(i):n:c?o.slice(i,i+2):r-56320+(n-55296<<10)+65536}},_library=!0,_global=createCommonjsModule(function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)}),_core=createCommonjsModule(function(e){var t=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=t)}),_core_1=_core.version,_aFunction=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},_ctx=function(r,o,e){if(_aFunction(r),void 0===o)return r;switch(e){case 1:return function(e){return r.call(o,e)};case 2:return function(e,t){return r.call(o,e,t)};case 3:return function(e,t,n){return r.call(o,e,t,n)}}return function(){return r.apply(o,arguments)}},_isObject=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_anObject=function(e){if(!_isObject(e))throw TypeError(e+" is not an object!");return e},_fails=function(e){try{return!!e()}catch(e){return!0}},_descriptors=!_fails(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),document$1=_global.document,is=_isObject(document$1)&&_isObject(document$1.createElement),_domCreate=function(e){return is?document$1.createElement(e):{}},_ie8DomDefine=!_descriptors&&!_fails(function(){return 7!=Object.defineProperty(_domCreate("div"),"a",{get:function(){return 7}}).a}),_toPrimitive=function(e,t){if(!_isObject(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!_isObject(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!_isObject(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!_isObject(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},dP=Object.defineProperty,f=_descriptors?Object.defineProperty:function(e,t,n){if(_anObject(e),t=_toPrimitive(t,!0),_anObject(n),_ie8DomDefine)try{return dP(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e},_objectDp={f:f},_propertyDesc=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},_hide=_descriptors?function(e,t,n){return _objectDp.f(e,t,_propertyDesc(1,n))}:function(e,t,n){return e[t]=n,e},hasOwnProperty={}.hasOwnProperty,_has=function(e,t){return hasOwnProperty.call(e,t)},PROTOTYPE="prototype",$export=function(e,t,n){var r,o,i,a=e&$export.F,c=e&$export.G,l=e&$export.S,s=e&$export.P,d=e&$export.B,f=e&$export.W,u=c?_core:_core[t]||(_core[t]={}),p=u[PROTOTYPE],h=c?_global:l?_global[t]:(_global[t]||{})[PROTOTYPE];for(r in c&&(n=t),n)(o=!a&&h&&void 0!==h[r])&&_has(u,r)||(i=o?h[r]:n[r],u[r]=c&&"function"!=typeof h[r]?n[r]:d&&o?_ctx(i,_global):f&&h[r]==i?function(r){var e=function(e,t,n){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(e);case 2:return new r(e,t)}return new r(e,t,n)}return r.apply(this,arguments)};return e[PROTOTYPE]=r[PROTOTYPE],e}(i):s&&"function"==typeof i?_ctx(Function.call,i):i,s&&((u.virtual||(u.virtual={}))[r]=i,e&$export.R&&p&&!p[r]&&_hide(p,r,i)))};$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128;var _export=$export,_redefine=_hide,_iterators={},toString={}.toString,_cof=function(e){return toString.call(e).slice(8,-1)},_iobject=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==_cof(e)?e.split(""):Object(e)},_toIobject=function(e){return _iobject(_defined(e))},min=Math.min,_toLength=function(e){return 0<e?min(_toInteger(e),9007199254740991):0},max=Math.max,min$1=Math.min,_toAbsoluteIndex=function(e,t){return(e=_toInteger(e))<0?max(e+t,0):min$1(e,t)},_arrayIncludes=function(c){return function(e,t,n){var r,o=_toIobject(e),i=_toLength(o.length),a=_toAbsoluteIndex(n,i);if(c&&t!=t){for(;a<i;)if((r=o[a++])!=r)return!0}else for(;a<i;a++)if((c||a in o)&&o[a]===t)return c||a||0;return!c&&-1}},_shared=createCommonjsModule(function(e){var t="__core-js_shared__",n=_global[t]||(_global[t]={});(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:_core.version,mode:"pure",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),id=0,px=Math.random(),_uid=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++id+px).toString(36))},shared=_shared("keys"),_sharedKey=function(e){return shared[e]||(shared[e]=_uid(e))},arrayIndexOf=_arrayIncludes(!1),IE_PROTO=_sharedKey("IE_PROTO"),_objectKeysInternal=function(e,t){var n,r=_toIobject(e),o=0,i=[];for(n in r)n!=IE_PROTO&&_has(r,n)&&i.push(n);for(;t.length>o;)_has(r,n=t[o++])&&(~arrayIndexOf(i,n)||i.push(n));return i},_enumBugKeys="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),_objectKeys=Object.keys||function(e){return _objectKeysInternal(e,_enumBugKeys)},_objectDps=_descriptors?Object.defineProperties:function(e,t){_anObject(e);for(var n,r=_objectKeys(t),o=r.length,i=0;i<o;)_objectDp.f(e,n=r[i++],t[n]);return e},document$2=_global.document,_html=document$2&&document$2.documentElement,IE_PROTO$1=_sharedKey("IE_PROTO"),Empty=function(){},PROTOTYPE$1="prototype",createDict=function(){var e,t=_domCreate("iframe"),n=_enumBugKeys.length;for(t.style.display="none",_html.appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),createDict=e.F;n--;)delete createDict[PROTOTYPE$1][_enumBugKeys[n]];return createDict()},_objectCreate=Object.create||function(e,t){var n;return null!==e?(Empty[PROTOTYPE$1]=_anObject(e),n=new Empty,Empty[PROTOTYPE$1]=null,n[IE_PROTO$1]=e):n=createDict(),void 0===t?n:_objectDps(n,t)},_wks=createCommonjsModule(function(e){var t=_shared("wks"),n=_global.Symbol,r="function"==typeof n;(e.exports=function(e){return t[e]||(t[e]=r&&n[e]||(r?n:_uid)("Symbol."+e))}).store=t}),def=_objectDp.f,TAG=_wks("toStringTag"),_setToStringTag=function(e,t,n){e&&!_has(e=n?e:e.prototype,TAG)&&def(e,TAG,{configurable:!0,value:t})},IteratorPrototype={};_hide(IteratorPrototype,_wks("iterator"),function(){return this});var _iterCreate=function(e,t,n){e.prototype=_objectCreate(IteratorPrototype,{next:_propertyDesc(1,n)}),_setToStringTag(e,t+" Iterator")},_toObject=function(e){return Object(_defined(e))},IE_PROTO$2=_sharedKey("IE_PROTO"),ObjectProto=Object.prototype,_objectGpo=Object.getPrototypeOf||function(e){return e=_toObject(e),_has(e,IE_PROTO$2)?e[IE_PROTO$2]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?ObjectProto:null},ITERATOR=_wks("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this},_iterDefine=function(e,t,n,r,o,i,a){_iterCreate(n,t,r);var c,l,s,d=function(e){if(!BUGGY&&e in h)return h[e];switch(e){case KEYS:case VALUES:return function(){return new n(this,e)}}return function(){return new n(this,e)}},f=t+" Iterator",u=o==VALUES,p=!1,h=e.prototype,_=h[ITERATOR]||h[FF_ITERATOR]||o&&h[o],b=_||d(o),y=o?u?d("entries"):b:void 0,m="Array"==t&&h.entries||_;if(m&&(s=_objectGpo(m.call(new e)))!==Object.prototype&&s.next&&(_setToStringTag(s,f,!0),_library||"function"==typeof s[ITERATOR]||_hide(s,ITERATOR,returnThis)),u&&_&&_.name!==VALUES&&(p=!0,b=function(){return _.call(this)}),_library&&!a||!BUGGY&&!p&&h[ITERATOR]||_hide(h,ITERATOR,b),_iterators[t]=b,_iterators[f]=returnThis,o)if(c={values:u?b:d(VALUES),keys:i?b:d(KEYS),entries:y},a)for(l in c)l in h||_redefine(h,l,c[l]);else _export(_export.P+_export.F*(BUGGY||p),t,c);return c},$at=_stringAt(!0);_iterDefine(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=$at(t,n),this._i+=e.length,{value:e,done:!1})});var _iterStep=function(e,t){return{value:t,done:!!e}},es6_array_iterator=_iterDefine(Array,"Array",function(e,t){this._t=_toIobject(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,_iterStep(1)):_iterStep(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values");_iterators.Arguments=_iterators.Array;for(var TO_STRING_TAG=_wks("toStringTag"),DOMIterables="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<DOMIterables.length;i++){var NAME=DOMIterables[i],Collection=_global[NAME],proto=Collection&&Collection.prototype;proto&&!proto[TO_STRING_TAG]&&_hide(proto,TO_STRING_TAG,NAME),_iterators[NAME]=_iterators.Array}var _redefineAll=function(e,t,n){for(var r in t)n&&e[r]?e[r]=t[r]:_hide(e,r,t[r]);return e},_anInstance=function(e,t,n,r){if(!(e instanceof t)||void 0!==r&&r in e)throw TypeError(n+": incorrect invocation!");return e},_iterCall=function(t,e,n,r){try{return r?e(_anObject(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&_anObject(o.call(t)),e}},ITERATOR$1=_wks("iterator"),ArrayProto=Array.prototype,_isArrayIter=function(e){return void 0!==e&&(_iterators.Array===e||ArrayProto[ITERATOR$1]===e)},TAG$1=_wks("toStringTag"),ARG="Arguments"==_cof(function(){return arguments}()),tryGet=function(e,t){try{return e[t]}catch(e){}},_classof=function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=tryGet(t=Object(e),TAG$1))?n:ARG?_cof(t):"Object"==(r=_cof(t))&&"function"==typeof t.callee?"Arguments":r},ITERATOR$2=_wks("iterator"),core_getIteratorMethod=_core.getIteratorMethod=function(e){if(null!=e)return e[ITERATOR$2]||e["@@iterator"]||_iterators[_classof(e)]},_forOf=createCommonjsModule(function(e){var u={},p={},t=e.exports=function(e,t,n,r,o){var i,a,c,l,s=o?function(){return e}:core_getIteratorMethod(e),d=_ctx(n,r,t?2:1),f=0;if("function"!=typeof s)throw TypeError(e+" is not iterable!");if(_isArrayIter(s)){for(i=_toLength(e.length);f<i;f++)if((l=t?d(_anObject(a=e[f])[0],a[1]):d(e[f]))===u||l===p)return l}else for(c=s.call(e);!(a=c.next()).done;)if((l=_iterCall(c,d,a.value,t))===u||l===p)return l};t.BREAK=u,t.RETURN=p}),SPECIES=_wks("species"),_setSpecies=function(e){var t="function"==typeof _core[e]?_core[e]:_global[e];_descriptors&&t&&!t[SPECIES]&&_objectDp.f(t,SPECIES,{configurable:!0,get:function(){return this}})},_meta=createCommonjsModule(function(e){var n=_uid("meta"),t=_objectDp.f,r=0,o=Object.isExtensible||function(){return!0},i=!_fails(function(){return o(Object.preventExtensions({}))}),a=function(e){t(e,n,{value:{i:"O"+ ++r,w:{}}})},c=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!_isObject(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!_has(e,n)){if(!o(e))return"F";if(!t)return"E";a(e)}return e[n].i},getWeak:function(e,t){if(!_has(e,n)){if(!o(e))return!0;if(!t)return!1;a(e)}return e[n].w},onFreeze:function(e){return i&&c.NEED&&o(e)&&!_has(e,n)&&a(e),e}}}),_meta_1=_meta.KEY,_meta_2=_meta.NEED,_meta_3=_meta.fastKey,_meta_4=_meta.getWeak,_meta_5=_meta.onFreeze,_validateCollection=function(e,t){if(!_isObject(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e},dP$1=_objectDp.f,fastKey=_meta.fastKey,SIZE=_descriptors?"_s":"size",getEntry=function(e,t){var n,r=fastKey(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n},_collectionStrong={getConstructor:function(e,i,n,r){var o=e(function(e,t){_anInstance(e,o,i,"_i"),e._t=i,e._i=_objectCreate(null),e._f=void 0,e._l=void 0,e[SIZE]=0,null!=t&&_forOf(t,n,e[r],e)});return _redefineAll(o.prototype,{clear:function(){for(var e=_validateCollection(this,i),t=e._i,n=e._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete t[n.i];e._f=e._l=void 0,e[SIZE]=0},delete:function(e){var t=_validateCollection(this,i),n=getEntry(t,e);if(n){var r=n.n,o=n.p;delete t._i[n.i],n.r=!0,o&&(o.n=r),r&&(r.p=o),t._f==n&&(t._f=r),t._l==n&&(t._l=o),t[SIZE]--}return!!n},forEach:function(e){_validateCollection(this,i);for(var t,n=_ctx(e,1<arguments.length?arguments[1]:void 0,3);t=t?t.n:this._f;)for(n(t.v,t.k,this);t&&t.r;)t=t.p},has:function(e){return!!getEntry(_validateCollection(this,i),e)}}),_descriptors&&dP$1(o.prototype,"size",{get:function(){return _validateCollection(this,i)[SIZE]}}),o},def:function(e,t,n){var r,o,i=getEntry(e,t);return i?i.v=n:(e._l=i={i:o=fastKey(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=i),r&&(r.n=i),e[SIZE]++,"F"!==o&&(e._i[o]=i)),e},getEntry:getEntry,setStrong:function(e,n,t){_iterDefine(e,n,function(e,t){this._t=_validateCollection(e,n),this._k=t,this._l=void 0},function(){for(var e=this,t=e._k,n=e._l;n&&n.r;)n=n.p;return e._t&&(e._l=n=n?n.n:e._t._f)?_iterStep(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(e._t=void 0,_iterStep(1))},t?"entries":"values",!t,!0),_setSpecies(n)}},_isArray=Array.isArray||function(e){return"Array"==_cof(e)},SPECIES$1=_wks("species"),_arraySpeciesConstructor=function(e){var t;return _isArray(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!_isArray(t.prototype)||(t=void 0),_isObject(t)&&null===(t=t[SPECIES$1])&&(t=void 0)),void 0===t?Array:t},_arraySpeciesCreate=function(e,t){return new(_arraySpeciesConstructor(e))(t)},_arrayMethods=function(f,e){var u=1==f,p=2==f,h=3==f,_=4==f,b=6==f,y=5==f||b,m=e||_arraySpeciesCreate;return function(e,t,n){for(var r,o,i=_toObject(e),a=_iobject(i),c=_ctx(t,n,3),l=_toLength(a.length),s=0,d=u?m(e,l):p?m(e,0):void 0;s<l;s++)if((y||s in a)&&(o=c(r=a[s],s,i),f))if(u)d[s]=o;else if(o)switch(f){case 3:return!0;case 5:return r;case 6:return s;case 2:d.push(r)}else if(_)return!1;return b?-1:h||_?_:d}},dP$2=_objectDp.f,each=_arrayMethods(0),_collection=function(n,e,t,r,o,i){var a=_global[n],c=a,l=o?"set":"add",s=c&&c.prototype,d={};return _descriptors&&"function"==typeof c&&(i||s.forEach&&!_fails(function(){(new c).entries().next()}))?(c=e(function(e,t){_anInstance(e,c,n,"_c"),e._c=new a,null!=t&&_forOf(t,o,e[l],e)}),each("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(r){var o="add"==r||"set"==r;r in s&&(!i||"clear"!=r)&&_hide(c.prototype,r,function(e,t){if(_anInstance(this,c,r),!o&&i&&!_isObject(e))return"get"==r&&void 0;var n=this._c[r](0===e?0:e,t);return o?this:n})}),i||dP$2(c.prototype,"size",{get:function(){return this._c.size}})):(c=r.getConstructor(e,n,o,l),_redefineAll(c.prototype,t),_meta.NEED=!0),_setToStringTag(c,n),d[n]=c,_export(_export.G+_export.W+_export.F,d),i||r.setStrong(c,n,o),c},MAP="Map",es6_map=_collection(MAP,function(e){return function(){return e(this,0<arguments.length?arguments[0]:void 0)}},{get:function(e){var t=_collectionStrong.getEntry(_validateCollection(this,MAP),e);return t&&t.v},set:function(e,t){return _collectionStrong.def(_validateCollection(this,MAP),0===e?0:e,t)}},_collectionStrong,!0),_arrayFromIterable=function(e,t){var n=[];return _forOf(e,!1,n.push,n,t),n},_collectionToJson=function(e){return function(){if(_classof(this)!=e)throw TypeError(e+"#toJSON isn't generic");return _arrayFromIterable(this)}};_export(_export.P+_export.R,"Map",{toJSON:_collectionToJson("Map")});var _setCollectionOf=function(e){_export(_export.S,e,{of:function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}})};_setCollectionOf("Map");var _setCollectionFrom=function(e){_export(_export.S,e,{from:function(e){var t,n,r,o,i=arguments[1];return _aFunction(this),(t=void 0!==i)&&_aFunction(i),null==e?new this:(n=[],t?(r=0,o=_ctx(i,arguments[2],2),_forOf(e,!1,function(e){n.push(o(e,r++))})):_forOf(e,!1,n.push,n),new this(n))}})};_setCollectionFrom("Map");var map=_core.Map,map$1=createCommonjsModule(function(e){e.exports={default:map,__esModule:!0}}),_Map=unwrapExports(map$1),classCallCheck=createCommonjsModule(function(e,t){t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}),_classCallCheck=unwrapExports(classCallCheck),Color=function e(){_classCallCheck(this,e)};function styleInject(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}Color.RED=["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"],Color.VOLCANO=["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"],Color.ORANGE=["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"],Color.GOLD=["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"],Color.YELLOW=["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"],Color.LIME=["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"],Color.GREEN=["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"],Color.CYAN=["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"],Color.BLUE=["#e6f7ff","#bae7ff","#91d5ff","#69c0ff","#40a9ff","#1890ff","#096dd9","#0050b3","#003a8c","#002766"],Color.GEEK_BLUE=["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"],Color.PURPLE=["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"],Color.MAGENTA=["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"],Color.colors=new _Map([["",""],["","#7FFFAA"]]);var css=".button {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    touch-action: manipulation;\n    cursor: pointer;\n    padding: 3px 15px 3px 15px;\n    font-size: 12px;\n    line-height: 1.5;\n    background: #fff none;\n    border: 1px solid #dcdee2;\n    transition: color .2s linear, background-color .2s linear, border .2s linear, box-shadow .2s linear;\n    /*transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;*/\n}\n\n.button-round-corner {\n    border-radius: 4px;\n}\n\n.button:hover {\n    color: #57a3f3;\n    background-color: #fff;\n    border-color: #57a3f3\n}\n\n.button-primary {\n    color: #fff;\n    background-color: #2d8cf0;\n    border-color: #2d8cf0;\n}\n\n.button-dashed {\n    color: #515a6e;\n    background-color: #fff;\n    border: dashed #dcdee2;\n}\n\n.button-text {\n    color: #515a6e;\n    background-color: transparent;\n    border-color: transparent;\n}\n\n.button-success {\n    color: #fff;\n    background-color: #19be6b;\n    border-color: #19be6b;\n}\n\n.button-warning {\n    color: #fff;\n    background-color: #f90;\n    border-color: #f90;\n}\n\n.button-error {\n    color: #fff;\n    background-color: #ed4014;\n    border-color: #ed4014;\n}\n\n.button-info {\n    color: #fff;\n    background-color: #2db7f5;\n    border-color: #2db7f5;\n}\n\n.button-outline {\n    color: #007bff;\n    background: transparent none;\n    border-color: #007bff;\n}\n\n.button-circle {\n    /*border-radius: 32px;*/\n    width: 32px;\n    height: 32px;\n    padding: 0;\n    border-radius: 50%;\n}\n\n.button-small {\n    padding: 1px 7px 2px;\n    font-size: 12px;\n    border-radius: 3px;\n}\n\n.button-large {\n    padding: 6px 15px;\n    font-size: 14px;\n    border-radius: 4px;\n}\n\n.button-group {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.button-group:not(.button-group-vertical)>.button:first-child:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n.button-group:not(.button-group-vertical)>.button:last-child:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n";styleInject(css),_export(_export.S+_export.F*!_descriptors,"Object",{defineProperty:_objectDp.f});var $Object=_core.Object,defineProperty=function(e,t,n){return $Object.defineProperty(e,t,n)},defineProperty$1=createCommonjsModule(function(e){e.exports={default:defineProperty,__esModule:!0}});unwrapExports(defineProperty$1);var createClass=createCommonjsModule(function(e,t){t.__esModule=!0;var n,o=(n=defineProperty$1)&&n.__esModule?n:{default:n};t.default=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}()}),_createClass=unwrapExports(createClass),Button=function(){function t(e){_classCallCheck(this,t),this.defaultSetting={type:null,text:"Button",visible:!1,width:0,height:0,css:[],classes:["button"]},this.options=e,this.build()}return _createClass(t,[{key:"build",value:function(){var t=document.createElement("button"),e=document.createDocumentFragment();t.classList.add("button"),this.options.type&&t.classList.add("button-"+this.options.type);var n=this.options.classes;if(n&&n.forEach(function(e){t.classList.add(e)}),this.options.text){var r=document.createTextNode(this.options.text);e.appendChild(r)}t.appendChild(e);var o=this.options.events;if(o)for(var i in o)o.hasOwnProperty(i)&&t.addEventListener(i,o[i]);this.options.parent&&this.options.parent.appendChild(t);var a=this.options.css;if(a)for(var c in a)a.hasOwnProperty(c)&&(t.style[c]=a[c]);return t}}]),t}(),css$1=".text-field {\n    display: inline-block;\n    width: 100%;\n    line-height: 1.5;\n    padding: 3px 7px;\n    font-size: 12px;\n    border: 1px solid #dcdee2;\n    /*border-radius: 4px;*/\n    color: #515a6e;\n    background: #fff none;\n    vertical-align: middle;\n    position: relative;\n    cursor: text;\n    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;\n}\n\n.text-field::-moz-placeholder {\n    color: #c5c8ce;\n    opacity: 1\n}\n\n.text-field:-ms-input-placeholder {\n    color: #c5c8ce\n}\n\n.text-field::-webkit-input-placeholder {\n    color: #c5c8ce\n}\n\n.text-field:focus,.ivu-input:hover {\n    border-color: #57a3f3\n}\n\n.text-field:focus {\n    outline: 0;\n    box-shadow: 0 0 0 2px #2D8CF0\n}\n\n.text-field[disabled],fieldset[disabled] .text-field {\n    background-color: #f3f3f3;\n    opacity: 1;\n    cursor: not-allowed;\n    color: #ccc\n}\n\n.text-field[disabled]:hover,fieldset[disabled] .text-field:hover {\n    border-color: #e3e5e8\n}\n";styleInject(css$1);var TextField=function(){function t(e){_classCallCheck(this,t),this.defaultSetting={visible:!1,width:0,height:0,css:[],classes:["text-field"]},this.options=e,this.build()}return _createClass(t,[{key:"build",value:function(){var t=document.createElement("input"),e=document.createDocumentFragment(),n=this.options.width;n&&(t.style.width=n),t.classList.add("text-field");var r=this.options.classes;r&&r.forEach(function(e){t.classList.add(e)}),t.appendChild(e);var o=this.options.events;if(o)for(var i in o)o.hasOwnProperty(i)&&t.addEventListener(i,o[i]);this.options.parent&&this.options.parent.appendChild(t);var a=this.options.css;if(a)for(var c in a)a.hasOwnProperty(c)&&(t.style[c]=a[c]);return t}}]),t}(),css$2=".table-wrapper {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    background-color: #ffffff;\r\n    overflow: hidden;\r\n    border: 1px solid #dddddd;\r\n}\r\n\r\n.table-wrapper .table-header {\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    border-bottom: 1px solid #dddddd;\r\n}\r\n\r\n.table-wrapper .table {\r\n    position: relative;\r\n    table-layout: fixed;\r\n    width: 100%;\r\n    border-collapse: separate;\r\n    box-sizing: border-box;\r\n    border-spacing: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.table-wrapper .table tr th {\r\n    vertical-align: middle;\r\n    box-sizing: border-box;\r\n    min-height: 2rem;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n    background-color: #f7f7f7;\r\n    color: #333333;\r\n    border-right: 1px solid #dddddd;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.table-wrapper .table tr th:first-child {\r\n    border-left: none;\r\n}\r\n\r\n.table-wrapper .table tr th:last-child {\r\n    border-right: none;\r\n}\r\n\r\n.table-wrapper .table tbody tr {\r\n    height: 33px;\r\n    color: #333333;\r\n    font-weight: normal;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.table-wrapper .table tr td:first-child {\r\n    border-left: none;\r\n}\r\n\r\n.table-wrapper .table tr td:last-child {\r\n    border-right: none;\r\n}\r\n\r\n.table-wrapper .table tr td {\r\n    vertical-align: middle;\r\n    box-sizing: border-box;\r\n    border-right: 1px solid #dddddd;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    padding: 0 0.5rem;\r\n    word-wrap: break-word;\r\n    cursor: text;\r\n    line-height: normal;\r\n    color: #333333;\r\n}\r\n\r\n.table-wrapper .table tbody tr:first-child td {\r\n    border-top: 1px solid #e5e5e5;\r\n}\r\n\r\n.table-wrapper .table tbody tr:nth-child(2n) td {\r\n    background-color: #f8f8f9\r\n}\r\n\r\n.table-wrapper .table tbody tr:hover td {\r\n    background-color: #ebf7ff\r\n}\r\n\r\n.table-wrapper .table-content {\r\n    overflow: auto;\r\n}\r\n";styleInject(css$2);var Table=function(){function t(e){_classCallCheck(this,t),this.defaultSetting={},this.options=e,this.build()}return _createClass(t,[{key:"build",value:function(){var e=document.createElement("div"),t=this.options.width,n=this.options.height;e.style.width=t?t+"px":null,e.style.height=n?n+"px":null,e.classList.add("table-wrapper");var r=document.createElement("div");r.classList.add("table-header"),e.appendChild(r);var o=document.createElement("table");o.classList.add("table"),r.appendChild(o);var l=document.createElement("colgroup");o.appendChild(l);var i=document.createElement("thead");o.appendChild(i);var a=document.createElement("div");a.style.width=t?t+"px":null,a.style.height=n?n-32+"px":null,a.classList.add("table-content"),e.appendChild(a);var c=document.createElement("table");c.classList.add("table"),a.appendChild(c);var s=document.createElement("colgroup");c.appendChild(s);var d=document.createElement("thead"),f=document.createElement("tbody");c.appendChild(f);var u=this.options.columns;if(u){var p=document.createElement("tr");i.appendChild(p);var h=document.createElement("tr");d.appendChild(h),u.forEach(function(e,t,n){var r=document.createElement("col");l.appendChild(r);var o=document.createElement("col");s.appendChild(o);var i=document.createElement("th"),a=document.createElement("th"),c=document.createTextNode(e.text);i.appendChild(c),e.width&&(r.setAttribute("width",e.width),o.setAttribute("width",e.width)),p.appendChild(i),h.appendChild(a)})}var _=this.options.data;return _&&0<_.length&&_.forEach(function(e,t,n){var i=document.createElement("tr");e.forEach(function(e,t,n){var r=document.createElement("td");i.appendChild(r);var o=document.createTextNode(e);r.appendChild(o)}),f.appendChild(i)}),this.options.parent&&this.options.parent.appendChild(e),e}}]),t}(),css$3=".border-layout {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-flex: 1;\n    -ms-flex: auto;\n    flex: auto;\n    background: #f5f7f9;\n    height: 100%;\n}\n\n.border-layout .north, .border-layout .south {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n}\n\n.border-layout .north, .border-layout .south {\n    background: #7cbce9;\n    /*background: #515a6e;*/\n    color: #fff;\n}\n\n.border-layout .has-side {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    height: 100%;\n}\n\n.border-layout .west, .border-layout .east {\n    position: relative;\n    height: 100%;\n    /*width: 200px;*/\n    /*min-width: 200px;*/\n    /*max-width: 200px;*/\n    /*flex: 0 0 200px;*/\n    background: #3a9fe8;\n    color: #fff;\n    transition: all .2s ease-in-out;\n}\n\n.border-layout .has-side > .center {\n    overflow-x: hidden;\n}\n\n.border-layout .center {\n    -webkit-box-flex: 1;\n    -ms-flex: auto;\n    flex: auto;\n    background: #8ee8e0;\n}\n";styleInject(css$3);var BorderLayout=function(){function t(e){_classCallCheck(this,t),this.defaultSetting={},this.options=e,this.build()}return _createClass(t,[{key:"build",value:function(){var e=document.createElement("div");e.setAttribute("layout","border-layout");var t=this.options.width,n=this.options.height;e.style.width=t?t+"px":null,e.style.height=n?n+"px":null,e.classList.add("border-layout");var a={};this.options.items.forEach(function(e,t,n){var r=document.createElement("div");r.setAttribute("region",e.region),r.setAttribute("title",e.title);var o=e.width,i=e.height;r.style.width=o?o+"px":null,r.style.height=i?i+"px":null,a[e.region]=r});var r=a.north,o=a.south,i=a.west,c=a.center,l=a.east;if(r&&(r.classList.add("north"),e.appendChild(r)),i||l){var s=document.createElement("div");s.classList.add("border-layout"),s.classList.add("has-side"),e.appendChild(s),i&&(i.classList.add("west"),s.appendChild(i)),c&&(c.classList.add("center"),s.appendChild(c)),l&&(l.classList.add("east"),s.appendChild(l))}else c&&(c.classList.add("center"),e.appendChild(c));return o&&(o.classList.add("south"),e.appendChild(o)),this.options.parent&&this.options.parent.appendChild(e),e}}]),t}(),css$4="";styleInject(css$4);var Checkbox=function(){function t(e){_classCallCheck(this,t),this.defaultSetting={},this.options=e,this.build()}return _createClass(t,[{key:"build",value:function(){var e=document.createElement("input");return e.setAttribute("type","checkbox"),this.options.parent&&this.options.parent.appendChild(e),e}}]),t}(),button=new Button({type:"primary",text:"Button",parent:document.body,events:{click:function(){alert("hello!")}}}),textField=new TextField({width:"200px",css:{color:Color.RED[9]},parent:document.body}),table=new Table({width:800,height:120,parent:document.body,title:"Employee Information Table",columns:[{index:"employee",text:"Employee Name",width:120,sortable:!1,renderer:function(){}},{index:"sex",text:"Sex",width:75,sortable:!1,renderer:function(){}},{index:"age",text:"Age",width:75,sortable:!1,renderer:function(){}},{index:"mobile",text:"Mobile",width:75,sortable:!1,renderer:function(){}},{index:"email",text:"Email",width:75,sortable:!1,renderer:function(){}},{index:"birthday",text:"Birthday Date",width:0,sortable:!1,renderer:function(){}}],data:[["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"],["Robot","男",28,"13590000000","robot@qq.com","2018-08-29"]]}),checkbox=new Checkbox({parent:document.body}),borderLayout=new BorderLayout({parent:document.body,width:800,height:300,items:[{title:"North Panel",region:"north",height:50},{title:"West Panel",region:"west",width:184},{title:"South Panel",region:"south",height:50},{title:"Center Panel",region:"center"},{title:"East Panel",region:"east",width:184}]});
