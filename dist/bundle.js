'use strict';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = true;

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && _has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var _redefine = _hide;

var _iterators = {};

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode: 'pure',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}

var _redefineAll = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else _hide(target, key, src[key]);
  } return target;
};

var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var _forOf = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
  var f = _ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

var SPECIES = _wks('species');

var _setSpecies = function (KEY) {
  var C = typeof _core[KEY] == 'function' ? _core[KEY] : _global[KEY];
  if (_descriptors && C && !C[SPECIES]) _objectDp.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});
var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var _validateCollection = function (it, TYPE) {
  if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

var dP$1 = _objectDp.f;









var fastKey = _meta.fastKey;

var SIZE = _descriptors ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

var _collectionStrong = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      _anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = _objectCreate(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = _validateCollection(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        _validateCollection(this, NAME);
        var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(_validateCollection(this, NAME), key);
      }
    });
    if (_descriptors) dP$1(C.prototype, 'size', {
      get: function () {
        return _validateCollection(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    _iterDefine(C, NAME, function (iterated, kind) {
      this._t = _validateCollection(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return _iterStep(1);
      }
      // return step by kind
      if (kind == 'keys') return _iterStep(0, entry.k);
      if (kind == 'values') return _iterStep(0, entry.v);
      return _iterStep(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    _setSpecies(NAME);
  }
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

var SPECIES$1 = _wks('species');

var _arraySpeciesConstructor = function (original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
    if (_isObject(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function (original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex





var _arrayMethods = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

var dP$2 = _objectDp.f;
var each = _arrayMethods(0);


var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = _global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!_descriptors || typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    _redefineAll(C.prototype, methods);
    _meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      _anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) _forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) _hide(C.prototype, KEY, function (a, b) {
        _anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !_isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP$2(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  _setToStringTag(C, NAME);

  O[NAME] = C;
  _export(_export.G + _export.W + _export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

var MAP = 'Map';

// 23.1 Map Objects
var es6_map = _collection(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
  }
}, _collectionStrong, true);

var _arrayFromIterable = function (iter, ITERATOR) {
  var result = [];
  _forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


var _collectionToJson = function (NAME) {
  return function toJSON() {
    if (_classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return _arrayFromIterable(this);
  };
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


_export(_export.P + _export.R, 'Map', { toJSON: _collectionToJson('Map') });

// https://tc39.github.io/proposal-setmap-offrom/


var _setCollectionOf = function (COLLECTION) {
  _export(_export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
_setCollectionOf('Map');

// https://tc39.github.io/proposal-setmap-offrom/





var _setCollectionFrom = function (COLLECTION) {
  _export(_export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    _aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) _aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = _ctx(mapFn, arguments[2], 2);
      _forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      _forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
_setCollectionFrom('Map');

var map = _core.Map;

var map$1 = createCommonjsModule(function (module) {
module.exports = { "default": map, __esModule: true };
});

var _Map = unwrapExports(map$1);

var classCallCheck = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

var _classCallCheck = unwrapExports(classCallCheck);

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
 * Icon
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
var Color = function Color() {
  _classCallCheck(this, Color);
};

Color.RED = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Color.VOLCANO = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Color.ORANGE = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Color.GOLD = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Color.YELLOW = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Color.LIME = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Color.GREEN = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Color.CYAN = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Color.BLUE = ["#e6f7ff", "#bae7ff", "#91d5ff", "#69c0ff", "#40a9ff", "#1890ff", "#096dd9", "#0050b3", "#003a8c", "#002766"];
Color.GEEK_BLUE = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Color.PURPLE = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Color.MAGENTA = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Color.colors = new _Map([["", ""], ["", "#7FFFAA"]]);

// 鸨色 #f7acbc
// 赤白橡 #deab8a
// 油色 #817936
// 绀桔梗 #444693
// 踯躅色 #ef5b9c
// 肌色 #fedcbd
// 伽罗色 #7f7522
// 花色 #2b4490
// 桜色 #feeeed
// 橙色 #f47920
// 青丹 #80752c
// 瑠璃色 #2a5caa
// 蔷薇色 #f05b72
// 灰茶 #905a3d
// 莺色 #87843b
// 琉璃绀 #224b8f
// 韩红 #f15b6c
// 茶色 #8f4b2e
// 利久色 #726930
// 绀色 #003a6c
// 珊瑚色 #f8aba6
// 桦茶色 #87481f
// 媚茶 #454926
// 青蓝 #102b6a
// 红梅色 #f69c9f
// 枯茶 #5f3c23
// 蓝海松茶 #2e3a1f
// 杜若色 #426ab3
// 桃色 #f58f98
// 焦茶 #6b473c
// 青钝 #4d4f36
// 胜色 #46485f
// 薄柿 #ca8687
// 柑子色 #faa755
// 抹茶色 #b7ba6b
// 群青色 #4e72b8
// 薄红梅 #f391a9
// 杏色 #fab27b
// 黄緑 #b2d235
// 铁绀 #181d4b
// 曙色 #bd6758
// 蜜柑色 #f58220
// 苔色 #5c7a29
// 蓝铁 #1a2933
// 红色 #d71345
// 褐色 #843900
// 若草色 #bed742
// 青褐 #121a2a
// 赤丹 #d64f44
// 路考茶 #905d1d
// 若緑 #7fb80e
// 褐返 #0c212b
// 红赤 #d93a49
// 饴色 #8a5d19
// 萌黄 #a3cf62
// 藤纳戸 #6a6da9
// 臙脂色 #b3424a
// 丁子色 #8c531b
// 苗色 #769149
// 桔梗色 #585eaa
// 真赭 #c76968
// 丁子茶 #826858
// 草色 #6d8346
// 绀蓝 #494e8f
// 今様色 #bb505d
// 黄栌 #64492b
// 柳色 #78a355
// 藤色 #afb4db
// 梅染 #987165
// 土器色 #ae6642
// 若草色 #abc88b
// 藤紫 #9b95c9
// 退红色 #ac6767
// 黄枯茶 #56452d
// 松叶色 #74905d
// 青紫 #6950a1
// 苏芳 #973c3f
// 狐色 #96582a
// 白緑 #cde6c7
// 菫色 #6f60aa
// 茜色 #b22c46
// 黄橡 #705628
// 薄緑 #1d953f
// 鸠羽色 #867892
// 红 #a7324a
// 银煤竹 #4a3113
// 千草色 #77ac98
// 薄色 #918597
// 银朱 #aa363d
// 涅色 #412f1f
// 青緑 #007d65
// 薄鼠 #6f6d85
// 赤 #ed1941
// 胡桃色 #845538
// 浅緑 #84bf96
// 鸠羽鼠 #594c6d
// 朱色 #f26522
// 香色 #8e7437
// 緑 #45b97c
// 菖蒲色 #694d9f
// 洗朱 #d2553d
// 国防色 #69541b
// 草色 #225a1f
// 江戸紫 #6f599c
// 红桦色 #b4534b
// 练色 #d5c59f
// 木贼色 #367459
// 紫 #8552a1
// 红绯 #ef4136
// 肉色 #cd9a5b
// 常盘色 #007947
// 灭紫 #543044
// 桦色 #c63c26
// 人色 #cd9a5b
// 緑青色 #40835e
// 葡萄鼠 #63434f
// 铅丹色 #f3715c
// 土色 #b36d41
// 千歳緑 #2b6447
// 古代紫 #7d5886
// 赭 #a7573b
// 小麦色 #df9464
// 深緑 #005831
// 暗红 #401c44
// 绯色 #aa2116
// 琥珀色 #b76f40
// 萌葱色 #006c54
// 葡萄 #472d56
// 丹 #b64533
// 木兰色 #ad8b3d
// 青白橡 #375830
// 茄子绀 #45224a
// 土 #b54334
// 栀子色 #dea32c
// 革色 #274d3d
// 紫绀 #411445
// 焦香 #853f04
// 朽叶 #d1923f
// 麹尘 #375830
// 浓色 #4b2f3d
// 真红 #840228
// 萱草色 #c88400
// 仙斎茶 #27342b
// 二蓝 #402e4c
// 绯 #7a1723
// 黄金 #c37e00
// 若竹色 #65c294
// 菖蒲色 #c77eb5
// 红海老茶 #a03939
// 金色 #c37e00
// 青磁色 #73b9a2
// 牡丹色 #ea66a6
// 浅苏芳 #8a2e3b
// 金茶 #e0861a
// 青竹色 #72baa7
// 赤紫 #f173ac
// 鸢色 #8e453f
// 卵色 #ffce7b
// 铁色 #005344
// 白 #fffffb
// 小豆色 #8f4b4a
// 山吹色 #fcaf17
// 锖鼠 #122e29
// 胡粉色 #fffef9
// 弁柄色 #892f1b
// 黄土色 #ba8448
// 铁御纳戸 #293047
// 生成色 #f6f5ec
// 栗梅 #6b2c25
// 朽叶色 #896a45
// 青緑 #00ae9d
// 灰白 #d9d6c3
// 海老茶 #733a31
// 空五倍子色 #76624c
// 锖浅葱 #508a88
// 石竹色 #d1c7b7
// 深绯 #54211d
// 莺茶 #6d5826
// 水浅葱 #70a19f
// 象牙色 #f2eada
// 赤铜色 #78331e
// 向日葵色 #ffc20e
// 新桥色 #50b7c1
// 乳白色 #d3d7d4
// 赤褐色 #53261f
// 郁金色 #fdb933
// 浅葱色 #00a6ac
// 薄钝 #999d9c
// 金赤 #f15a22
// 砂色 #d3c6a6
// 白群 #78cdd1
// 银鼠 #a1a3a6
// 赤茶 #b4533c
// 芥子色 #c7a252
// 御纳戸色 #008792
// 茶鼠 #9d9087
// 赤锖色 #84331f
// 淡黄 #dec674
// 瓮覗 #94d6da
// 鼠色 #8a8c8e
// 黄丹 #f47a55
// 亜麻色 #b69968
// 水色 #afdfe4
// 薄墨色 #74787c
// 赤橙 #f15a22
// 枯色 #c1a173
// 蓝鼠 #5e7c85
// 利休鼠 #7c8577
// 柿色 #f3704b
// 鸟子色 #dbce8f
// 秘色 #76becc
// 铅色 #72777b
// 肉桂色 #da765b
// 黄色 #ffd400
// 空色 #90d7ec
// 灰色 #77787b
// 桦色 #c85d44
// 蒲公英色 #ffd400
// 青 #009ad6
// 钝色 #4f5555
// 炼瓦色 #ae5039
// 中黄 #ffe600
// 蓝色 #145b7d
// 煤竹色 #6c4c49
// 锖色 #6a3427
// 刈安色 #f0dc70
// 浓蓝 #11264f
// 黒茶 #563624
// 桧皮色 #8f4b38
// 黄檗色 #fcf16e
// 勿忘草色 #7bbfea
// 黒橡 #3e4145
// 栗色 #8e3e1f
// 緑黄色 #decb00
// 露草色 #33a3dc
// 浓鼠 #3c3645
// 黄赤 #f36c21
// 鶸色 #cbc547
// 缥色 #228fbd
// 墨 #464547
// 代赭 #b4532a
// 海松色 #6e6b41
// 浅缥 #2468a2
// 黒 #130c0e
// 骆驼色 #b7704f
// 鶸茶 #596032
// 薄缥 #2570a1
// 黒铁 #281f1d
// 黄茶 #de773f
// 山鸠色 #525f42
// 薄花色 #2585a6
// 蝋色 #2f271d
// 洗柿 #c99979
// 生壁色 #5f5d46
// 绀青 #1b315e
// 紫黒 #1d1626

// AliceBlue, 爱丽丝蓝, #F0F8FF, 240,248,255, 西奥多·罗斯福长女爱丽丝·罗斯福·朗沃斯创造的时尚色
// AntiqueWhite, 古董白, #FAEBD7, 250,235,215
// AquaMarine, 碧绿, #7FFFD4, 127,255,212, 亦作“碧蓝”，但其主色调为绿色
// Azure, 青白色, #F0FFFF, 240,255,255, 本为湛蓝，但在Web色中是一种浅色
// Beige, 米色, #F5F5DC, 245,245,220
// Bisque, 陶坯黄, #FFE4C4, 255,228,196
// Black, 黑色, #000000, 0,0,0
// BlanchedAlmond, 杏仁白, #FFEBCD, 255,235,205
// Blue, 蓝色, #0000FF, 0,0,255
// BlueViolet, 蓝紫色, #8A2BE2, 138,43,226, 即“蓝紫罗兰色”，直译名称过长
// Brown, 褐色, #A52A2A, 165,42,42, 亦作“棕色”
// BurlyWood, 硬木褐, #DEB887, 222,184,135
// CadetBlue, 军服蓝, #5F9EA0, 95,158,160
// ChartReuse, 查特酒绿, #7FFF00, 127,255,0, 一种药酒，诞生于17世纪的法国
// Chocolate, 巧克力色, #D2691E, 210,105,30
// Coral, 珊瑚红, #FF7F50, 255,127,80
// CornFlowerBlue, 矢车菊蓝, #6495ED, 100,149,237, 矢车菊是德国和马其顿的国花
// CornSilk, 玉米穗黄, #FFF8DC, 255,248,220
// Crimson, 绯红 #DC143C, 220,20,60, 较之猩红(Scarlet)蓝色分量要多些
// Cyan/Aqua, 青色, #00FFFF, 0,255,255
// DarkBlue, 深蓝, #00008B, 0,0,139
// DarkCyan, 深青, #008B8B, 0,139,139
// DarkGoldenRod, 深金菊黄, #B8860B, 184,134,11, 见“GoldenRod”
// DarkGray, 暗灰, #A9A9A9, 169,169,169
// DarkGreen, 深绿, #006400, 0,100,0
// DarkKhaki, 深卡其色, #BDB76B, 189,183,107, 见“Khaki”
// DarkMagenta, 深品红, #8B008B, 139,0,139
// DarkOliveGreen, 深橄榄绿, #556B2F, 85,107,47
// DarkOrange, 深橙, #FF8C00, 255,140,0
// DarkOrchid, 深洋兰紫, #9932CC, 153,50,204, 见“Orchid”
// DarkRed, 深红, #8B0000, 139,0,0
// DarkSalmon, 深鲑红, #E9967A, 233,150,122, 见“Salmon”
// DarkSeaGreen, 深海藻绿, #8FBC8F, 143,188,143
// DarkSlateBlue, 深岩蓝, #483D8B, 72,61,139
// DarkSlateGray, 深岩灰 #2F4F4F, 47,79,79
// DarkTurquoise, 深松石绿, #00CED1, 0,206,209, 见“Turquoise”
// DarkViolet, 深紫, #9400d3, 148,0,211, 即“深紫罗兰色”，直译名称过长
// DeepPink, 深粉, #FF1493, 255,20,147
// DeepSkyBlue, 深天蓝, #00BFFF, 0,191,255
// DimGray, 昏灰, #696969, 105,105,105, 是命名颜色中最深的一种灰色
// DodgerBlue, 湖蓝, #1E90FF, 30,144,255, 洛杉矶道奇棒球队队标的颜色
// FireBrick, 火砖红, #B22222, 178,34,34, 耐火砖的颜色比普通红砖要深
// FloralWhite, 花卉白, #FFFAF0, 255,250,240, 不可简称“花白”(后者与斑白同义)
// ForestGreen, 森林绿, #228B22, 34,139,34
// GainsBoro, 庚氏灰, #DCDCDC, 220,220,220, 托马斯·庚斯博罗，18世纪英国画家
// GhostWhite, 幽灵白, #F8F8FF, 248,248,255
// Gold, 金色, #FFD700, 255,215,0
// GoldenRod, 金菊黄, #DAA520, 218,165,32, 一枝黄花，一种菊科花卉
// Gray, 灰色, #808080, 128,128,128
// Green, 调和绿, #008000, 0,128,0, 视觉上的正绿色
// GreenYellow, 黄绿色, #ADFF2F, 173,255,47, 请注意与YellowGreen区分
// HoneyDew, 蜜瓜绿, #F0FFF0, 240,255,240, Honeydew即白兰瓜、蜜瓜
// HotPink, 艳粉, #FF69B4, 255,105,180, 不是暖粉，后者应是偏黄的粉色
// IndianRed, 印度红, #CD5C5C, 205,92,92
// Indigo, 靛蓝, #4B0082, 75,0,130
// Ivory, 象牙白, #FFFFF0, 255,255,240
// Khaki, 卡其色, #F0E68C, 240,230,140, Khaki是一种布料的名称
// Lavender, 薰衣草紫, #E6E6FA, 230,230,250
// LavenderBlush, 薰衣草红, #FFF0F5, 255,240,245, “薰衣草紫红色”的简略
// LawnGreen, 草坪绿, #7CFC00, 124,252,0
// LemonChiffon, 柠檬绸黄, #FFFACD, 255,250,205
// LightBlue, 浅蓝, #ADD8E6, 173,216,230
// LightCoral, 浅珊瑚红, #F08080, 240,128,128
// LightCyan, 浅青, #E0FFFF, 224,255,255
// LightGoldenRodYellow, 浅金菊黄, #FAFAD2, 250,250,210, 见“GoldenRod”
// LightGray, 亮灰, #D3D3D3, 211,211,211
// LightGreen, 浅绿, #90EE90, 144,238,144
// LightPink, 浅粉, #FFB6C1, 255,182,193
// LightSalmon, 浅鲑红, #FFA07A, 255,160,122, 见“Salmon”
// LightSeaGreen, 浅海藻绿, #20B2AA, 32,178,170
// LightSkyBlue, 浅天蓝, #87CEFA, 135,206,250
// LightSlateGray, 浅岩灰, #778899, 119,136,153
// LightSteelBlue, 浅钢青 #0C4DE, 176, 196, 222
// LightYellow, 浅黄, #FFFFE0, 255,255,224
// Lime, 绿色, #00FF00, 0,255,0, RGB颜色空间的正绿色
// LimeGreen, 青柠绿, #32CD32, 50,205,50, Lime是青柠，Lemon才是柠檬
// Linen, 亚麻色, #FAF0E6, 250,240,230
// Magenta/Fuchsia, 洋红, #FF00FF, 255,0,255
// Maroon, 栗色, #800000, 128,0,0
// MediumAquaMarine, 中碧绿, #66CDAA, 102,205,170
// MediumBlue, 中蓝, #0000CD, 0,0,205
// MediumOrchid, 中洋兰紫, #BA55D3, 186,85,211, 见“Orchid”
// MediumPurple, 中紫, #9370D8, 147,112,219
// MediumSeaGreen, 中海藻绿, #3CB371, 60,179,113
// MediumSlateBlue, 中岩蓝, #7B68EE, 123,104,238
// MediumSpringGreen, 中嫩绿, #00FA9A, 0,250,154
// MediumTurquoise, 中松石绿, #48D1CC, 72,209,204, 见“Turquoise”
// MediumVioletRed, 中紫红, #C71585, 199,21,133, “中紫罗兰红”，直译名称过长
// MidNightBlue, 午夜蓝, #191970, 25,25,112
// MintCream, 薄荷乳白, #F5FFFA, 245,255,250
// MistyRose, 雾玫瑰红, #FFE4E1, 255,228,225, 薄雾玫瑰，玫瑰品种之一
// Moccasin, 鹿皮色, #FFE4B5, 255,228,181, Moccasin本意为鹿皮鞋
// NavajoWhite, 土著白, #FFDEAD, 255,222,173, 纳瓦霍(Navajo)是北美印第安人的一支
// Navy, 藏青, #000080, 0,0,128, 美国海军军服的颜色，Navy意为海军
// OldLace, 旧蕾丝白, #FDF5E6, 253,245,230
// Olive, 橄榄色, #808000, 128,128,0
// OliveDrab, 橄榄绿, #6B8E23, 107,142,35
// Orange, 橙色, #FFA500, 255,165,0
// OrangeRed, 橘红, #FF4500, 255,69,0
// Orchid, 洋兰紫, #DA70D6, 218,112,214, 西洋兰花某品种的颜色
// PaleGoldenRod, 白金菊黄, #EEE8AA, 238,232,170, 见“GoldenRod”
// PaleGreen, 白绿色, #98FB98, 152,251,152
// PaleTurquoise, 白松石绿, #AFEEEE, 175,238,238, 见“Turquoise”
// PaleVioletRed, 白紫红, #D87093, 219,112,147, “白紫罗兰红色”的简略
// PapayaWhip, 番木瓜橙, #FFEFD5, 255,239,213, 本意为番木瓜(一种热带水果)汁
// PeachPuff, 粉扑桃色, #FFDAB9, 255,218,185, Peach是桃，Puff是化妆用的粉扑
// Peru, 秘鲁红, #CD853F, 205,133,63, 从秘鲁国树金鸡纳树中提炼的一种颜料
// Pink, 粉色, #FFC0CB, 255,192,203
// Plum, 李紫, #DDA0DD, 221,160,221, Plum意为李子、梅子
// PowderBlue, 粉末蓝, #B0E0E6, 176,224,230, 得名自洗衣店用来漂染衣物的物质大青
// Purple, 紫色, #800080, 128,0,128
// Red, 红色, #FF0000, 255,0,0
// RosyBrown, 玫瑰褐, #BC8F8F, 188,143,143
// RoyalBlue, 品蓝, #4169E1, 65,105,225, 直译为“皇家蓝”
// SaddleBrown, 鞍褐, #8B4513, 139,69,19, 亦作“马鞍棕”，马鞍常见的颜色
// Salmon, 鲑红, #FA8072, 250,128,114, 本意为三文鱼，一种鲑科冷水鱼类
// SandyBrown, 沙褐, #F4A460, 244,164,96
// SeaGreen, 海藻绿, #2E8B57, 46,139,87
// SeaShell, 贝壳白, #FFF5EE, 255,245,238
// Sienna, 土黄赭, #A0522D, 160,82,45
// Silver, 银色, #C0C0C0, 192,192,192
// SkyBlue, 天蓝, #87CEEB, 135,206,235
// SlateBlue, 岩蓝, #6A5ACD, 106,90,205, Slate本意为“板岩”
// SlateGray, 岩灰, #708090, 112,128,144
// Snow, 雪白, #FFFAFA, 255,250,250
// SpringGreen, 春绿, #00FF7F, 0,255,127
// SteelBlue, 钢青, #4682B4, 70,130,180
// Tan, 日晒褐, #D2B48C, 210,180,140
// Teal, 鸭翅绿, #008080, 0,128,128, Teal意为绿翅鸭，一种水鸭
// Thistle, 蓟紫, #D8BFD8, 216,191,216, 菊科蓟属，多刺花卉，旧时苏格兰国花
// Tomato, 番茄红, #FF6347, 255,99,71
// Turquoise, 松石绿, #40E0D0, 64,224,208, 本意为土耳其石即绿松石，一种宝石
// Violet, 紫罗兰色, #EE82EE, 238,130,238
// Wheat, 麦色, #F5DEB3, 245,222,179
// White, 白色, #FFFFFF, 255,255,255
// WhiteSmoke, 烟雾白, #F5F5F5, 245,245,245
// Yellow, 黄色, #FFFF00, 255,255,0
// YellowGreen, 暗黄绿色, #9ACD32, 154,205,50, 注意与GreenYellow区分


// LightPink, 浅粉红, #FFB6C1, 255,182,193
// Pink, 粉红, #FFC0CB, 255,192,203
// Crimson, 猩红, #DC143C, 220,20,60
// LavenderBlush, 脸红的淡紫色, #FFF0F5, 255,240,245
// PaleVioletRed, 苍白的紫罗兰红色, #DB7093, 219,112,147
// HotPink, 热情的粉红, #FF69B4, 255,105,180
// DeepPink, 深粉色, #FF1493, 255,20,147
// MediumVioletRed, 适中的紫罗兰红色, #C71585, 199,21,133
// Orchid, 兰花的紫色, #DA70D6, 218,112,214
// Thistle, 蓟, #D8BFD8, 216,191,216
// plum, 李子, #DDA0DD, 221,160,221
// Violet, 紫罗兰, #EE82EE, 238,130,238
// Magenta, 洋红, #FF00FF, 255,0,255
// Fuchsia, 灯笼海棠(紫红色), #FF00FF, 255,0,255
// DarkMagenta, 深洋红色, #8B008B, 139,0,139
// Purple, 紫色, #800080, 128,0,128
// MediumOrchid, 适中的兰花紫, #BA55D3, 186,85,211
// DarkViolet, 深紫罗兰色, #9400D3, 148,0,211
// DarkOrchid, 深兰花紫, #9932CC, 153,50,204
// Indigo, 靛青, #4B0082, 75,0,130
// BlueViolet, 深紫罗兰的蓝色, #8A2BE2, 138,43,226
// MediumPurple, 适中的紫色, #9370DB, 147,112,219
// MediumSlateBlue, 适中的板岩暗蓝灰色, #7B68EE, 123,104,238
// SlateBlue, 板岩暗蓝灰色, #6A5ACD, 106,90,205
// DarkSlateBlue, 深岩暗蓝灰色, #483D8B, 72,61,139
// Lavender, 熏衣草花的淡紫色, #E6E6FA, 230,230,250
// GhostWhite, 幽灵的白色, #F8F8FF, 248,248,255
// Blue, 纯蓝, #0000FF, 0,0,255
// MediumBlue, 适中的蓝色, #0000CD, 0,0,205
// MidnightBlue, 午夜的蓝色, #191970, 25,25,112
// DarkBlue, 深蓝色, #00008B, 0,0,139
// Navy, 海军蓝, #000080, 0,0,128
// RoyalBlue, 皇军蓝, #4169E1, 65,105,225
// CornflowerBlue, 矢车菊的蓝色, #6495ED, 100,149,237
// LightSteelBlue, 淡钢蓝, #B0C4DE, 176,196,222
// LightSlateGray, 浅石板灰, #778899, 119,136,153
// SlateGray, 石板灰, #708090, 112,128,144
// DodgerBlue, 道奇蓝, #1E90FF, 30,144,255
// AliceBlue, 爱丽丝蓝, #F0F8FF, 240,248,255
// SteelBlue, 钢蓝, #4682B4, 70,130,180
// LightSkyBlue, 淡蓝色, #87CEFA, 135,206,250
// SkyBlue, 天蓝色, #87CEEB, 135,206,235
// DeepSkyBlue, 深天蓝, #00BFFF, 0,191,255
// LightBLue, 淡蓝, #ADD8E6, 173,216,230
// PowDerBlue, 火药蓝, #B0E0E6, 176,224,230
// CadetBlue, 军校蓝, #5F9EA0, 95,158,160
// Azure, 蔚蓝色, #F0FFFF, 240,255,255
// LightCyan, 淡青色, #E1FFFF, 225,255,255
// PaleTurquoise, 苍白的绿宝石, #AFEEEE, 175,238,238
// Cyan, 青色, #00FFFF, 0,255,255
// Aqua, 水绿色, #00FFFF, 0,255,255
// DarkTurquoise, 深绿宝石, #00CED1, 0,206,209
// DarkSlateGray, 深石板灰, #2F4F4F, 47,79,79
// DarkCyan, 深青色, #008B8B, 0,139,139
// Teal, 水鸭色, #008080, 0,128,128
// MediumTurquoise, 适中的绿宝石, #48D1CC, 72,209,204
// LightSeaGreen, 浅海洋绿, #20B2AA, 32,178,170
// Turquoise, 绿宝石, #40E0D0, 64,224,208
// Aquamarine, 绿玉\碧绿色, #7FFFAA, 127,255,170
// MediumAquamarine, 适中的碧绿色, #00FA9A, 0,250,154
// MediumSpringGreen, 适中的春天的绿色, #F5FFFA, 245,255,250
// MintCream, 薄荷奶油, #00FF7F, 0,255,127
// SpringGreen, 春天的绿色, #3CB371, 60,179,113
// SeaGreen, 海洋绿, #2E8B57, 46,139,87
// Honeydew, 蜂蜜, #F0FFF0, 240,255,240
// LightGreen, 淡绿色, #90EE90, 144,238,144
// PaleGreen, 苍白的绿色, #98FB98, 152,251,152
// DarkSeaGreen, 深海洋绿, #8FBC8F, 143,188,143
// LimeGreen, 酸橙绿, #32CD32, 50,205,50
// Lime, 酸橙色, #00FF00, 0,255,0
// ForestGreen, 森林绿, #228B22, 34,139,34
// Green, 纯绿, #008000, 0,128,0
// DarkGreen, 深绿色, #006400, 0,100,0
// Chartreuse, 查特酒绿, #7FFF00, 127,255,0
// LawnGreen, 草坪绿, #7CFC00, 124,252,0
// GreenYellow, 绿黄色, #ADFF2F, 173,255,47
// OliveDrab, 橄榄土褐色, #556B2F, 85,107,47
// Beige, 米色(浅褐色), #6B8E23, 107,142,35
// LightGoldenrodYellow, 浅秋麒麟黄, #FAFAD2, 250,250,210
// Ivory, 象牙, #FFFFF0, 255,255,240
// LightYellow, 浅黄色, #FFFFE0, 255,255,224
// Yellow, 纯黄, #FFFF00, 255,255,0
// Olive, 橄榄, #808000, 128,128,0
// DarkKhaki, 深卡其布, #BDB76B, 189,183,107
// LemonChiffon, 柠檬薄纱, #FFFACD, 255,250,205
// PaleGoldenRod, 灰秋麒麟, #EEE8AA, 238,232,170
// Khaki, 卡其布, #F0E68C, 240,230,140
// Gold, 金, #FFD700, 255,215,0
// CornSilk, 玉米色, #FFF8DC, 255,248,220
// GoldenRod, 秋麒麟, #DAA520, 218,165,32
// FloralWhite, 花的白色, #FFFAF0, 255,250,240
// OldLace, 老饰带, #FDF5E6, 253,245,230
// Wheat, 小麦色, #F5DEB3, 245,222,179
// Moccasin, 鹿皮鞋, #FFE4B5, 255,228,181
// Orange, 橙色, #FFA500, 255,165,0
// PapayaWhip, 番木瓜, #FFEFD5, 255,239,213
// BlanchedAlmond, 漂白的杏仁, #FFEBCD, 255,235,205
// NavajoWhite, Navajo白, #FFDEAD, 255,222,173
// AntiqueWhite, 古代的白色, #FAEBD7, 250,235,215
// Tan, 晒黑, #D2B48C, 210,180,140
// BurlyWood, 结实的树, #DEB887, 222,184,135
// Bisque, (浓汤)乳脂,番茄等, #FFE4C4, 255,228,196
// DarkOrange, 深橙色, #FF8C00, 255,140,0
// Linen, 亚麻布, #FAF0E6, 250,240,230
// Peru, 秘鲁, #CD853F, 205,133,63
// PeachPuff, 桃色, #FFDAB9, 255,218,185
// SandyBrown, 沙棕色, #F4A460, 244,164,96
// Chocolate, 巧克力, #D2691E, 210,105,30
// SaddleBrown, 马鞍棕色, #8B4513, 139,69,19
// SeaShell, 海贝壳, #FFF5EE, 255,245,238
// Sienna, 黄土赭色, #A0522D, 160,82,45
// LightSalmon, 浅鲜肉(鲑鱼)色, #FFA07A, 255,160,122
// Coral, 珊瑚, #FF7F50, 255,127,80
// OrangeRed, 橙红色, #FF4500, 255,69,0
// DarkSalmon, 深鲜肉(鲑鱼)色, #E9967A, 233,150,122
// Tomato, 番茄, #FF6347, 255,99,71
// MistyRose, 薄雾玫瑰, #FFE4E1, 255,228,225
// Salmon, 鲜肉(鲑鱼)色, #FA8072, 250,128,114
// Snow, 雪, #FFFAFA, 255,250,250
// LightCoral, 淡珊瑚色, #F08080, 240,128,128
// RosyBrown, 玫瑰棕色, #BC8F8F, 188,143,143
// IndianRed, 印度红, #CD5C5C, 205,92,92
// Red, 纯红, #FF0000, 255,0,0
// Brown, 棕色, #A52A2A, 165,42,42
// FireBrick, 耐火砖, #B22222, 178,34,34
// DarkRed, 深红色, #8B0000, 139,0,0
// Maroon, 栗色, #800000, 128,0,0
// White, 纯白, #FFFFFF, 255,255,255
// WhiteSmoke, 白烟, #F5F5F5, 245,245,245
// GainsBoro, 庚氏灰, #DCDCDC, 220,220,220
// LightGrey, 浅灰色, #D3D3D3, 211,211,211
// Silver, 银白色, #C0C0C0, 192,192,192
// DarkGray, 深灰色, #A9A9A9, 169,169,169
// Gray, 灰色, #808080, 128,128,128
// DimGray, 暗淡的灰色, #696969, 105,105,105
// Black, 纯黑, #000000, 0,0,0

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".button {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    touch-action: manipulation;\n    cursor: pointer;\n    padding: 3px 15px 3px 15px;\n    font-size: 13px;\n    line-height: 1.5;\n    background: #fff none;\n    border: 1px solid #dcdee2;\n    transition: color .2s linear, background-color .2s linear, border .2s linear, box-shadow .2s linear;\n    /*transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;*/\n}\n\n.button-round-corner {\n    border-radius: 4px;\n}\n\n.button:hover {\n    color: #57a3f3;\n    background-color: #fff;\n    border-color: #57a3f3\n}\n\n.button-primary {\n    color: #fff;\n    background-color: #2d8cf0;\n    border-color: #2d8cf0;\n}\n\n.button-dashed {\n    color: #515a6e;\n    background-color: #fff;\n    border: dashed #dcdee2;\n}\n\n.button-text {\n    color: #515a6e;\n    background-color: transparent;\n    border-color: transparent;\n}\n\n.button-success {\n    color: #fff;\n    background-color: #19be6b;\n    border-color: #19be6b;\n}\n\n.button-warning {\n    color: #fff;\n    background-color: #f90;\n    border-color: #f90;\n}\n\n.button-error {\n    color: #fff;\n    background-color: #ed4014;\n    border-color: #ed4014;\n}\n\n.button-info {\n    color: #fff;\n    background-color: #2db7f5;\n    border-color: #2db7f5;\n}\n\n.button-outline {\n    color: #007bff;\n    background: transparent none;\n    border-color: #007bff;\n}\n\n.button-circle {\n    /*border-radius: 32px;*/\n    width: 32px;\n    height: 32px;\n    padding: 0;\n    border-radius: 50%;\n}\n\n.button-small {\n    padding: 1px 7px 2px;\n    font-size: 12px;\n    border-radius: 3px;\n}\n\n.button-large {\n    padding: 6px 15px;\n    font-size: 14px;\n    border-radius: 4px;\n}\n\n.button-group {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.button-group:not(.button-group-vertical)>.button:first-child:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n.button-group:not(.button-group-vertical)>.button:last-child:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n";
styleInject(css);

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object = _core.Object;
var defineProperty = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

var defineProperty$1 = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty, __esModule: true };
});

unwrapExports(defineProperty$1);

var createClass = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

var _createClass = unwrapExports(createClass);

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
 * Button
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
var Button = function () {

    /**
     * constructor
     *
     * @param options
     */
    function Button(options) {
        _classCallCheck(this, Button);

        // default setting
        this.defaultSetting = {
            text: "Button",
            visible: false,
            width: 0,
            height: 0,
            css: [],
            // parent: ,
            classes: ["button"]
        };
        this.options = options;
        this.build();
    }

    /**
     * build
     */


    _createClass(Button, [{
        key: "build",
        value: function build() {
            var button = document.createElement("button");
            var fragment = document.createDocumentFragment();

            // Add class
            var classes = this.options["classes"];
            if (classes) {
                classes.forEach(function (value) {
                    button.classList.add(value);
                });
            }

            if (this.options["text"]) {
                var text = document.createTextNode(this.options["text"]);
                /**
                 * 参考
                 * Node.removeChild()
                 * Node.replaceChild()
                 * Node.appendChild()
                 * Node.insertBefore()
                 * Node.hasChildNodes()
                 */
                fragment.appendChild(text);
            }
            button.appendChild(fragment);

            var events = this.options["events"];
            if (events) {
                for (var prop in events) {
                    if (events.hasOwnProperty(prop)) {
                        button.addEventListener(prop, events[prop]);
                    }
                }
            }

            if (this.options["parent"]) {
                // console.log(this.options["parent"]);
                this.options["parent"].appendChild(button);
            }

            var css = this.options["css"];
            if (css) {
                for (var key in css) {
                    if (css.hasOwnProperty(key)) {
                        button.style[key] = css[key];
                    }
                }
            }

            // button.nextElementSibling
            // button.nextSibling
            // button.parentElement
            // button.previousElementSibling
            // button.previousSibling

            return button;
        }
    }]);

    return Button;
}();

var css$1 = ".text-field {\n    display: inline-block;\n    width: 100%;\n    line-height: 1.5;\n    padding: 3px 7px;\n    font-size: 12px;\n    border: 1px solid #dcdee2;\n    /*border-radius: 4px;*/\n    color: #515a6e;\n    background: #fff none;\n    vertical-align: middle;\n    position: relative;\n    cursor: text;\n    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;\n}\n\n.text-field::-moz-placeholder {\n    color: #c5c8ce;\n    opacity: 1\n}\n\n.text-field:-ms-input-placeholder {\n    color: #c5c8ce\n}\n\n.text-field::-webkit-input-placeholder {\n    color: #c5c8ce\n}\n\n.text-field:focus,.ivu-input:hover {\n    border-color: #57a3f3\n}\n\n.text-field:focus {\n    outline: 0;\n    box-shadow: 0 0 0 2px #2D8CF0\n}\n\n.text-field[disabled],fieldset[disabled] .text-field {\n    background-color: #f3f3f3;\n    opacity: 1;\n    cursor: not-allowed;\n    color: #ccc\n}\n\n.text-field[disabled]:hover,fieldset[disabled] .text-field:hover {\n    border-color: #e3e5e8\n}\n";
styleInject(css$1);

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
 * TextField
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-16 6:57 PM
 */
var TextField = function () {

    /**
     * constructor
     *
     * @param options
     */
    function TextField(options) {
        _classCallCheck(this, TextField);

        // default setting
        this.defaultSetting = {
            visible: false,
            width: 0,
            height: 0,
            css: [],
            // parent: ,
            classes: ["text-field"]
        };
        this.options = options;
        this.build();
    }

    /**
     * build
     */


    _createClass(TextField, [{
        key: "build",
        value: function build() {
            var input = document.createElement("input");
            var fragment = document.createDocumentFragment();

            var width = this.options["width"];
            if (width) {
                input.style["width"] = width;
            }

            // Add class
            var classes = this.options["classes"];
            if (classes) {
                classes.forEach(function (value) {
                    input.classList.add(value);
                });
            }

            input.appendChild(fragment);

            var events = this.options["events"];
            if (events) {
                for (var prop in events) {
                    if (events.hasOwnProperty(prop)) {
                        input.addEventListener(prop, events[prop]);
                    }
                }
            }

            if (this.options["parent"]) {
                // console.log(this.options["parent"]);
                this.options["parent"].appendChild(input);
            }

            var css = this.options["css"];
            if (css) {
                for (var key in css) {
                    if (css.hasOwnProperty(key)) {
                        input.style[key] = css[key];
                    }
                }
            }

            return input;
        }
    }]);

    return TextField;
}();

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
// import pkg from "../package.json";

// console.log(`running version ${pkg.version}`);

var button = new Button({
    text: "Button",
    classes: ["button", "button-outline"],
    css: {
        "fontSize": "12px"
    },
    parent: document.body
});

var textField = new TextField({
    width: "200px",
    classes: ["text-field"],
    css: {
        "color": Color.RED[9]
    },
    parent: document.body
});
