(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/runtime/amp.js"],{

/***/ "./node_modules/next/dist/build/polyfills/unfetch.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill.default;
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var {
  assetPrefix,
  page
} = data;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


async function tryApplyUpdates() {
  if (!isUpdateAvailable() || !canApplyUpdates()) {
    return;
  }

  try {
    var res = await (0, _unfetch.default)("" + hotUpdatePath + curHash + ".hot-update.json");

    var _data = await res.json();

    var curPage = page === '/' ? 'index' : page;
    var pageUpdated = Object.keys(_data.c).some(mod => {
      return mod.indexOf("pages" + (curPage.substr(0, 1) === '/' ? curPage : "/" + curPage)) !== -1 || mod.indexOf(("pages" + (curPage.substr(0, 1) === '/' ? curPage : "/" + curPage)).replace(/\//g, '\\')) !== -1;
    });

    if (pageUpdated) {
      document.location.reload(true);
    } else {
      curHash = mostRecentHash;
    }
  } catch (err) {
    console.error('Error occurred checking for update', err);
    document.location.reload(true);
  }
}

(0, _eventsource.getEventSourceWrapper)({
  path: assetPrefix + "/_next/webpack-hmr"
}).addMessageListener(event => {
  if (event.data === '\uD83D\uDC93') {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, () => page);
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    if (event.data.indexOf('action') !== -1) {
      eventCallbacks.forEach(cb => cb(event));
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: () => {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: cb => {
        eventCallbacks.push(cb);
      }
    };
  }

  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below


var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behaviour, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  (0, _unfetch.default)(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = _unfetch.default != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent;

function displayContent(callback) {
  // This is the fallback helper that removes Next.js' no-FOUC styles when
  // CSS mode is enabled. This only really activates if you haven't created
  // _any_ styles in your application yet.
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  var url = assetPrefix + "/_next/webpack-hmr?page=" + currentPage;
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(event => {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch.default)(location.href, {
          credentials: 'same-origin'
        }).then(pageRes => {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9hbXAtZGV2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2ZvdWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3VuZmV0Y2giLCJfZXZlbnRTb3VyY2VQb2x5ZmlsbCIsIl9ldmVudHNvdXJjZSIsIl9vbkRlbWFuZEVudHJpZXNVdGlscyIsIl9mb3VjIiwid2luZG93IiwiRXZlbnRTb3VyY2UiLCJkZWZhdWx0IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImFzc2V0UHJlZml4IiwicGFnZSIsIm1vc3RSZWNlbnRIYXNoIiwiY3VySGFzaCIsIl9fd2VicGFja19oYXNoX18iLCJob3RVcGRhdGVQYXRoIiwiZW5kc1dpdGgiLCJpc1VwZGF0ZUF2YWlsYWJsZSIsImNhbkFwcGx5VXBkYXRlcyIsIm1vZHVsZSIsImhvdCIsInN0YXR1cyIsInRyeUFwcGx5VXBkYXRlcyIsInJlcyIsIl9kYXRhIiwianNvbiIsImN1clBhZ2UiLCJwYWdlVXBkYXRlZCIsIk9iamVjdCIsImtleXMiLCJjIiwic29tZSIsIm1vZCIsImluZGV4T2YiLCJzdWJzdHIiLCJyZXBsYWNlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRFdmVudFNvdXJjZVdyYXBwZXIiLCJwYXRoIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiZXZlbnQiLCJtZXNzYWdlIiwiYWN0aW9uIiwiaGFzaCIsImV4Iiwid2FybiIsInNldHVwUGluZyIsImRpc3BsYXlDb250ZW50IiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJldmVudENhbGxiYWNrcyIsIkV2ZW50U291cmNlV3JhcHBlciIsIm9wdGlvbnMiLCJzb3VyY2UiLCJsYXN0QWN0aXZpdHkiLCJEYXRlIiwibGlzdGVuZXJzIiwidGltZW91dCIsImluaXQiLCJ0aW1lciIsInNldEludGVydmFsIiwiaGFuZGxlRGlzY29ubmVjdCIsIm9ub3BlbiIsImhhbmRsZU9ubGluZSIsIm9uZXJyb3IiLCJvbm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwibG9nIiwiaSIsImxlbmd0aCIsImZvckVhY2giLCJjYiIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsInNldFRpbWVvdXQiLCJmbiIsInB1c2giLCJvbmRlbWFuZCIsIlJlc3BvbnNlIiwiVGV4dERlY29kZXIiLCJUZXh0RW5jb2RlciIsIkFib3J0Q29udHJvbGxlciIsInVuZGVmaW5lZCIsInNpZ25hbCIsImFib3J0IiwiVGV4dERlY29kZXJQb2x5ZmlsbCIsImJpdHNOZWVkZWQiLCJjb2RlUG9pbnQiLCJwcm90b3R5cGUiLCJkZWNvZGUiLCJvY3RldHMiLCJ2YWxpZCIsInNoaWZ0Iiwib2N0ZXRzQ291bnQiLCJFcnJvciIsIlJFUExBQ0VSIiwic3RyaW5nIiwib2N0ZXQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJzdXBwb3J0c1N0cmVhbU9wdGlvbiIsImVuY29kZSIsInN0cmVhbSIsImsiLCJYSFJXcmFwcGVyIiwieGhyIiwid2l0aENyZWRlbnRpYWxzIiwicmVzcG9uc2VUeXBlIiwicmVhZHlTdGF0ZSIsInN0YXR1c1RleHQiLCJyZXNwb25zZVRleHQiLCJvbnByb2dyZXNzIiwib25yZWFkeXN0YXRlY2hhbmdlIiwiX2NvbnRlbnRUeXBlIiwiX3hociIsIl9zZW5kVGltZW91dCIsIl9hYm9ydCIsIm9wZW4iLCJtZXRob2QiLCJ1cmwiLCJ0aGF0Iiwic3RhdGUiLCJzaWxlbnQiLCJjbGVhclRpbWVvdXQiLCJvbmxvYWQiLCJvbmFib3J0Iiwib25TdGFydCIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJvblByb2dyZXNzIiwib25GaW5pc2giLCJvblJlYWR5U3RhdGVDaGFuZ2UiLCJvblRpbWVvdXQiLCJYTUxIdHRwUmVxdWVzdCIsIm5hbWUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwidmFsdWUiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJzZW5kIiwiZXJyb3IxIiwidG9Mb3dlckNhc2UiLCJjaGFyQ29kZUF0IiwiSGVhZGVyc1BvbHlmaWxsIiwiYWxsIiwibWFwIiwiY3JlYXRlIiwiYXJyYXkiLCJzcGxpdCIsImxpbmUiLCJwYXJ0cyIsImpvaW4iLCJfbWFwIiwiZ2V0IiwiWEhSVHJhbnNwb3J0Iiwib25TdGFydENhbGxiYWNrIiwib25Qcm9ncmVzc0NhbGxiYWNrIiwib25GaW5pc2hDYWxsYmFjayIsImhlYWRlcnMiLCJvZmZzZXQiLCJjaHVuayIsInNsaWNlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiSGVhZGVyc1dyYXBwZXIiLCJfaGVhZGVycyIsIkZldGNoVHJhbnNwb3J0IiwiY29udHJvbGxlciIsInRleHREZWNvZGVyIiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsInRoZW4iLCJyZXNwb25zZSIsInJlYWRlciIsImJvZHkiLCJnZXRSZWFkZXIiLCJjYW5jZWwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWROZXh0Q2h1bmsiLCJyZWFkIiwicmVzdWx0IiwiZG9uZSIsIkV2ZW50VGFyZ2V0IiwiX2xpc3RlbmVycyIsInRocm93RXJyb3IiLCJlIiwiZGlzcGF0Y2hFdmVudCIsInRhcmdldCIsInR5cGVMaXN0ZW5lcnMiLCJ0eXBlIiwibGlzdGVuZXIiLCJoYW5kbGVFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3VuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaWx0ZXJlZCIsIkV2ZW50IiwiTWVzc2FnZUV2ZW50IiwibGFzdEV2ZW50SWQiLCJDb25uZWN0aW9uRXZlbnQiLCJXQUlUSU5HIiwiQ09OTkVDVElORyIsIk9QRU4iLCJDTE9TRUQiLCJBRlRFUl9DUiIsIkZJRUxEX1NUQVJUIiwiRklFTEQiLCJWQUxVRV9TVEFSVCIsIlZBTFVFIiwiY29udGVudFR5cGVSZWdFeHAiLCJNSU5JTVVNX0RVUkFUSU9OIiwiTUFYSU1VTV9EVVJBVElPTiIsInBhcnNlRHVyYXRpb24iLCJkZWYiLCJuIiwicGFyc2VJbnQiLCJjbGFtcER1cmF0aW9uIiwiTWF0aCIsIm1pbiIsIm1heCIsImZpcmUiLCJmIiwiRXZlbnRTb3VyY2VQb2x5ZmlsbCIsIl9jbG9zZSIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsImVzIiwiQm9vbGVhbiIsImluaXRpYWxSZXRyeSIsImhlYXJ0YmVhdFRpbWVvdXQiLCJyZXRyeSIsIndhc0FjdGl2aXR5Iiwic3RyaW5naWZ5IiwiQ3VycmVudFRyYW5zcG9ydCIsIlRyYW5zcG9ydCIsInRyYW5zcG9ydCIsImNhbmNlbEZ1bmN0aW9uIiwiY3VycmVudFN0YXRlIiwiZGF0YUJ1ZmZlciIsImxhc3RFdmVudElkQnVmZmVyIiwiZXZlbnRUeXBlQnVmZmVyIiwidGV4dEJ1ZmZlciIsImZpZWxkU3RhcnQiLCJ2YWx1ZVN0YXJ0IiwidGVzdCIsInRleHRDaHVuayIsInBvc2l0aW9uIiwiZmllbGQiLCJyZXF1ZXN0VVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdEhlYWRlcnMiLCJfZGVmYXVsdCIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwieCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjbG9zZVBpbmciLCJjdXJyZW50UGFnZSIsImV2dFNvdXJjZSIsInBhdGhuYW1lRm4iLCJwYXRobmFtZSIsInBheWxvYWQiLCJpbnZhbGlkIiwiaHJlZiIsInBhZ2VSZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZCQUE2QixjQUFjLDJCQUEyQix1Q0FBdUMsY0FBYyxPQUFPLGlHQUFpRyx1Q0FBdUMsaUJBQWlCLG1EQUFtRCxpQkFBaUIsK0NBQStDLGtCQUFrQixnQkFBZ0IsU0FBUyxvQkFBb0IsU0FBUyxpQkFBaUIsMEJBQTBCLGlCQUFpQiwrQkFBK0IsOERBQThELGlGQUFpRiwrREFBK0QsU0FBUyxxR0FBcUcscUJBQXFCO0FBQ2w0Qjs7Ozs7Ozs7Ozs7OztBQ0RBLDhDQUFhOztBQUFBLElBQUlBLHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLHNJQUFELENBQWxDOztBQUFtRixJQUFJQyxRQUFRLEdBQUNGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDhGQUFELENBQVIsQ0FBbkM7O0FBQWtGLElBQUlFLG9CQUFvQixHQUFDSCxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw2RkFBRCxDQUFSLENBQS9DOztBQUFvRixJQUFJRyxZQUFZLEdBQUNILG1CQUFPLENBQUMscUdBQUQsQ0FBeEI7O0FBQXdELElBQUlJLHFCQUFxQixHQUFDSixtQkFBTyxDQUFDLGlHQUFELENBQWpDOztBQUErRCxJQUFJSyxLQUFLLEdBQUNMLG1CQUFPLENBQUMsMkRBQUQsQ0FBakI7QUFBNEI7OztBQUE4QixJQUFHLENBQUNNLE1BQU0sQ0FBQ0MsV0FBWCxFQUF1QjtBQUFDRCxRQUFNLENBQUNDLFdBQVAsR0FBbUJMLG9CQUFvQixDQUFDTSxPQUF4QztBQUFpRDs7QUFBQSxJQUFJQyxJQUFJLEdBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNDLFdBQXBELENBQVQ7QUFBMEUsSUFBRztBQUFDQyxhQUFEO0FBQWFDO0FBQWIsSUFBbUJQLElBQXRCO0FBQTJCTSxXQUFXLEdBQUNBLFdBQVcsSUFBRSxFQUF6QjtBQUE0QixJQUFJRSxjQUFjLEdBQUMsSUFBbkI7QUFBd0I7O0FBQThCLElBQUlDLE9BQU8sR0FBQ0MsdUJBQVo7QUFBNkIsSUFBSUMsYUFBYSxHQUFDTCxXQUFXLElBQUVBLFdBQVcsQ0FBQ00sUUFBWixDQUFxQixHQUFyQixJQUEwQixFQUExQixHQUE2QixHQUEvQixDQUFYLEdBQStDLHVCQUFqRSxDLENBQXlGOztBQUM3eUIsU0FBU0MsaUJBQVQsR0FBNEI7QUFBQztBQUM3Qjs7QUFDQTtBQUE4QixTQUFPTCxjQUFjLEtBQUdFLHVCQUF4QjtBQUEwQyxDLENBQUE7OztBQUN4RSxTQUFTSSxlQUFULEdBQTBCO0FBQUMsU0FBT0MsTUFBTSxDQUFDQyxHQUFQLENBQVdDLE1BQVgsT0FBc0IsTUFBN0I7QUFBcUMsQyxDQUFBO0FBQ2hFOzs7QUFDQSxlQUFlQyxlQUFmLEdBQWdDO0FBQUMsTUFBRyxDQUFDTCxpQkFBaUIsRUFBbEIsSUFBc0IsQ0FBQ0MsZUFBZSxFQUF6QyxFQUE0QztBQUFDO0FBQVE7O0FBQUEsTUFBRztBQUFDLFFBQUlLLEdBQUcsR0FBQyxNQUFLLENBQUMsR0FBRTNCLFFBQVEsQ0FBQ08sT0FBWixFQUFxQixLQUFHWSxhQUFILEdBQWlCRixPQUFqQixHQUF5QixrQkFBOUMsQ0FBYjs7QUFBK0UsUUFBSVcsS0FBSyxHQUFDLE1BQU1ELEdBQUcsQ0FBQ0UsSUFBSixFQUFoQjs7QUFBMkIsUUFBSUMsT0FBTyxHQUFDZixJQUFJLEtBQUcsR0FBUCxHQUFXLE9BQVgsR0FBbUJBLElBQS9CO0FBQW9DLFFBQUlnQixXQUFXLEdBQUNDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxLQUFLLENBQUNNLENBQWxCLEVBQXFCQyxJQUFyQixDQUEwQkMsR0FBRyxJQUFFO0FBQUMsYUFBT0EsR0FBRyxDQUFDQyxPQUFKLENBQVksV0FBU1AsT0FBTyxDQUFDUSxNQUFSLENBQWUsQ0FBZixFQUFpQixDQUFqQixNQUFzQixHQUF0QixHQUEwQlIsT0FBMUIsR0FBa0MsTUFBSUEsT0FBL0MsQ0FBWixNQUF1RSxDQUFDLENBQXhFLElBQTJFTSxHQUFHLENBQUNDLE9BQUosQ0FBWSxDQUFDLFdBQVNQLE9BQU8sQ0FBQ1EsTUFBUixDQUFlLENBQWYsRUFBaUIsQ0FBakIsTUFBc0IsR0FBdEIsR0FBMEJSLE9BQTFCLEdBQWtDLE1BQUlBLE9BQS9DLENBQUQsRUFBMERTLE9BQTFELENBQWtFLEtBQWxFLEVBQXdFLElBQXhFLENBQVosTUFBNkYsQ0FBQyxDQUFoTDtBQUFtTCxLQUFuTixDQUFoQjs7QUFBcU8sUUFBR1IsV0FBSCxFQUFlO0FBQUNwQixjQUFRLENBQUM2QixRQUFULENBQWtCQyxNQUFsQixDQUF5QixJQUF6QjtBQUFnQyxLQUFoRCxNQUFvRDtBQUFDeEIsYUFBTyxHQUFDRCxjQUFSO0FBQXdCO0FBQUMsR0FBcmMsQ0FBcWMsT0FBTTBCLEdBQU4sRUFBVTtBQUFDQyxXQUFPLENBQUNDLEtBQVIsQ0FBYyxvQ0FBZCxFQUFtREYsR0FBbkQ7QUFBd0QvQixZQUFRLENBQUM2QixRQUFULENBQWtCQyxNQUFsQixDQUF5QixJQUF6QjtBQUFnQztBQUFDOztBQUFBLENBQUMsR0FBRXZDLFlBQVksQ0FBQzJDLHFCQUFoQixFQUF1QztBQUFDQyxNQUFJLEVBQUNoQyxXQUFXLEdBQUM7QUFBbEIsQ0FBdkMsRUFBZ0ZpQyxrQkFBaEYsQ0FBbUdDLEtBQUssSUFBRTtBQUFDLE1BQUdBLEtBQUssQ0FBQ3hDLElBQU4sS0FBYSxjQUFoQixFQUErQjtBQUFDO0FBQVE7O0FBQUEsTUFBRztBQUFDLFFBQUl5QyxPQUFPLEdBQUN4QyxJQUFJLENBQUNDLEtBQUwsQ0FBV3NDLEtBQUssQ0FBQ3hDLElBQWpCLENBQVo7O0FBQW1DLFFBQUd5QyxPQUFPLENBQUNDLE1BQVIsS0FBaUIsTUFBakIsSUFBeUJELE9BQU8sQ0FBQ0MsTUFBUixLQUFpQixPQUE3QyxFQUFxRDtBQUFDLFVBQUcsQ0FBQ0QsT0FBTyxDQUFDRSxJQUFaLEVBQWlCO0FBQUM7QUFBUTs7QUFBQW5DLG9CQUFjLEdBQUNpQyxPQUFPLENBQUNFLElBQXZCO0FBQTRCekIscUJBQWU7QUFBSSxLQUEvSCxNQUFvSSxJQUFHdUIsT0FBTyxDQUFDQyxNQUFSLEtBQWlCLFlBQXBCLEVBQWlDO0FBQUN2QyxjQUFRLENBQUM2QixRQUFULENBQWtCQyxNQUFsQixDQUF5QixJQUF6QjtBQUFnQztBQUFDLEdBQTlPLENBQThPLE9BQU1XLEVBQU4sRUFBUztBQUFDVCxXQUFPLENBQUNVLElBQVIsQ0FBYSwwQkFBd0JMLEtBQUssQ0FBQ3hDLElBQTlCLEdBQW1DLElBQW5DLEdBQXdDNEMsRUFBckQ7QUFBMEQ7QUFBQyxDQUF0YztBQUF3YyxDQUFDLEdBQUVqRCxxQkFBcUIsQ0FBQ21ELFNBQXpCLEVBQW9DeEMsV0FBcEMsRUFBZ0QsTUFBSUMsSUFBcEQ7QUFBMEQsQ0FBQyxHQUFFWCxLQUFLLENBQUNtRCxjQUFUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOam9DLDhDQUFhOztBQUFBQyxPQUFPLENBQUNDLFVBQVIsR0FBbUIsSUFBbkI7QUFBd0JELE9BQU8sQ0FBQ1gscUJBQVIsR0FBOEJBLHFCQUE5QjtBQUFvRCxJQUFJYSxjQUFjLEdBQUMsRUFBbkI7O0FBQXNCLFNBQVNDLGtCQUFULENBQTRCQyxPQUE1QixFQUFvQztBQUFDLE1BQUlDLE1BQUo7QUFBVyxNQUFJQyxZQUFZLEdBQUMsSUFBSUMsSUFBSixFQUFqQjtBQUE0QixNQUFJQyxTQUFTLEdBQUMsRUFBZDs7QUFBaUIsTUFBRyxDQUFDSixPQUFPLENBQUNLLE9BQVosRUFBb0I7QUFBQ0wsV0FBTyxDQUFDSyxPQUFSLEdBQWdCLEtBQUcsSUFBbkI7QUFBeUI7O0FBQUFDLE1BQUk7QUFBRyxNQUFJQyxLQUFLLEdBQUNDLFdBQVcsQ0FBQyxZQUFVO0FBQUMsUUFBRyxJQUFJTCxJQUFKLEtBQVdELFlBQVgsR0FBd0JGLE9BQU8sQ0FBQ0ssT0FBbkMsRUFBMkM7QUFBQ0ksc0JBQWdCO0FBQUk7QUFBQyxHQUE3RSxFQUE4RVQsT0FBTyxDQUFDSyxPQUFSLEdBQWdCLENBQTlGLENBQXJCOztBQUFzSCxXQUFTQyxJQUFULEdBQWU7QUFBQ0wsVUFBTSxHQUFDLElBQUl4RCxNQUFNLENBQUNDLFdBQVgsQ0FBdUJzRCxPQUFPLENBQUNkLElBQS9CLENBQVA7QUFBNENlLFVBQU0sQ0FBQ1MsTUFBUCxHQUFjQyxZQUFkO0FBQTJCVixVQUFNLENBQUNXLE9BQVAsR0FBZUgsZ0JBQWY7QUFBZ0NSLFVBQU0sQ0FBQ1ksU0FBUCxHQUFpQkMsYUFBakI7QUFBZ0M7O0FBQUEsV0FBU0gsWUFBVCxHQUF1QjtBQUFDLFFBQUdYLE9BQU8sQ0FBQ2UsR0FBWCxFQUFlaEMsT0FBTyxDQUFDZ0MsR0FBUixDQUFZLGlCQUFaO0FBQStCYixnQkFBWSxHQUFDLElBQUlDLElBQUosRUFBYjtBQUF5Qjs7QUFBQSxXQUFTVyxhQUFULENBQXVCMUIsS0FBdkIsRUFBNkI7QUFBQ2MsZ0JBQVksR0FBQyxJQUFJQyxJQUFKLEVBQWI7O0FBQXdCLFNBQUksSUFBSWEsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDWixTQUFTLENBQUNhLE1BQXhCLEVBQStCRCxDQUFDLEVBQWhDLEVBQW1DO0FBQUNaLGVBQVMsQ0FBQ1ksQ0FBRCxDQUFULENBQWE1QixLQUFiO0FBQXFCOztBQUFBLFFBQUdBLEtBQUssQ0FBQ3hDLElBQU4sQ0FBVzZCLE9BQVgsQ0FBbUIsUUFBbkIsTUFBK0IsQ0FBQyxDQUFuQyxFQUFxQztBQUFDcUIsb0JBQWMsQ0FBQ29CLE9BQWYsQ0FBdUJDLEVBQUUsSUFBRUEsRUFBRSxDQUFDL0IsS0FBRCxDQUE3QjtBQUF1QztBQUFDOztBQUFBLFdBQVNxQixnQkFBVCxHQUEyQjtBQUFDVyxpQkFBYSxDQUFDYixLQUFELENBQWI7QUFBcUJOLFVBQU0sQ0FBQ29CLEtBQVA7QUFBZUMsY0FBVSxDQUFDaEIsSUFBRCxFQUFNTixPQUFPLENBQUNLLE9BQWQsQ0FBVjtBQUFrQzs7QUFBQSxTQUFNO0FBQUNnQixTQUFLLEVBQUMsTUFBSTtBQUFDRCxtQkFBYSxDQUFDYixLQUFELENBQWI7QUFBcUJOLFlBQU0sQ0FBQ29CLEtBQVA7QUFBZ0IsS0FBakQ7QUFBa0RsQyxzQkFBa0IsRUFBQyxTQUFTQSxrQkFBVCxDQUE0Qm9DLEVBQTVCLEVBQStCO0FBQUNuQixlQUFTLENBQUNvQixJQUFWLENBQWVELEVBQWY7QUFBb0I7QUFBekgsR0FBTjtBQUFrSTs7S0FBdDVCeEIsa0I7O0FBQXM1QixTQUFTZCxxQkFBVCxDQUErQmUsT0FBL0IsRUFBdUM7QUFBQyxNQUFHLENBQUNBLE9BQU8sQ0FBQ3lCLFFBQVosRUFBcUI7QUFBQyxXQUFNO0FBQUN0Qyx3QkFBa0IsRUFBQ2dDLEVBQUUsSUFBRTtBQUFDckIsc0JBQWMsQ0FBQzBCLElBQWYsQ0FBb0JMLEVBQXBCO0FBQXlCO0FBQWxELEtBQU47QUFBMkQ7O0FBQUEsU0FBT3BCLGtCQUFrQixDQUFDQyxPQUFELENBQXpCO0FBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTNxQyw4Q0FBYTs7QUFBQSxJQUFJOUQsc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsc0lBQUQsQ0FBbEM7O0FBQW1GeUQsT0FBTyxDQUFDQyxVQUFSLEdBQW1CLElBQW5CO0FBQXdCRCxPQUFPLENBQUNqRCxPQUFSLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlQLFFBQVEsR0FBQ0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsOEZBQUQsQ0FBUixDQUFuQztBQUFrRjtBQUFxQjtBQUN0UDtBQUNBOzs7QUFDQSxJQUFJWSxRQUFRLEdBQUNOLE1BQU0sQ0FBQ00sUUFBcEI7QUFBNkIsSUFBSTJFLFFBQVEsR0FBQ2pGLE1BQU0sQ0FBQ2lGLFFBQXBCO0FBQTZCLElBQUlDLFdBQVcsR0FBQ2xGLE1BQU0sQ0FBQ2tGLFdBQXZCO0FBQW1DLElBQUlDLFdBQVcsR0FBQ25GLE1BQU0sQ0FBQ21GLFdBQXZCO0FBQW1DLElBQUlDLGVBQWUsR0FBQ3BGLE1BQU0sQ0FBQ29GLGVBQTNCOztBQUEyQyxJQUFHQSxlQUFlLElBQUVDLFNBQXBCLEVBQThCO0FBQUNELGlCQUFlLEdBQUMsU0FBU0EsZUFBVCxHQUEwQjtBQUFDLFNBQUtFLE1BQUwsR0FBWSxJQUFaOztBQUFpQixTQUFLQyxLQUFMLEdBQVcsWUFBVSxDQUFFLENBQXZCO0FBQXlCLEdBQXJGO0FBQXVGOztBQUFBLFNBQVNDLG1CQUFULEdBQThCO0FBQUMsT0FBS0MsVUFBTCxHQUFnQixDQUFoQjtBQUFrQixPQUFLQyxTQUFMLEdBQWUsQ0FBZjtBQUFrQjs7S0FBMURGLG1COztBQUEwREEsbUJBQW1CLENBQUNHLFNBQXBCLENBQThCQyxNQUE5QixHQUFxQyxVQUFTQyxNQUFULEVBQWdCO0FBQUMsV0FBU0MsS0FBVCxDQUFlSixTQUFmLEVBQXlCSyxLQUF6QixFQUErQkMsV0FBL0IsRUFBMkM7QUFBQyxRQUFHQSxXQUFXLEtBQUcsQ0FBakIsRUFBbUI7QUFBQyxhQUFPTixTQUFTLElBQUUsVUFBUUssS0FBbkIsSUFBMEJMLFNBQVMsSUFBRUssS0FBWCxJQUFrQixNQUFuRDtBQUEyRDs7QUFBQSxRQUFHQyxXQUFXLEtBQUcsQ0FBakIsRUFBbUI7QUFBQyxhQUFPTixTQUFTLElBQUUsVUFBUUssS0FBbkIsSUFBMEJMLFNBQVMsSUFBRUssS0FBWCxJQUFrQixNQUE1QyxJQUFvREwsU0FBUyxJQUFFLFVBQVFLLEtBQW5CLElBQTBCTCxTQUFTLElBQUVLLEtBQVgsSUFBa0IsTUFBdkc7QUFBK0c7O0FBQUEsUUFBR0MsV0FBVyxLQUFHLENBQWpCLEVBQW1CO0FBQUMsYUFBT04sU0FBUyxJQUFFLFlBQVVLLEtBQXJCLElBQTRCTCxTQUFTLElBQUVLLEtBQVgsSUFBa0IsUUFBckQ7QUFBK0Q7O0FBQUEsVUFBTSxJQUFJRSxLQUFKLEVBQU47QUFBbUI7O0FBQUEsV0FBU0QsV0FBVCxDQUFxQlAsVUFBckIsRUFBZ0NDLFNBQWhDLEVBQTBDO0FBQUMsUUFBR0QsVUFBVSxLQUFHLElBQUUsQ0FBbEIsRUFBb0I7QUFBQyxhQUFPQyxTQUFTLElBQUUsQ0FBWCxHQUFhLEVBQWIsR0FBZ0IsQ0FBaEIsR0FBa0JBLFNBQVMsR0FBQyxFQUFWLEdBQWEsQ0FBYixHQUFlLENBQXhDO0FBQTJDOztBQUFBLFFBQUdELFVBQVUsS0FBRyxJQUFFLENBQWxCLEVBQW9CO0FBQUMsYUFBT0MsU0FBUyxHQUFDLEVBQVYsR0FBYSxDQUFiLEdBQWUsQ0FBdEI7QUFBeUI7O0FBQUEsUUFBR0QsVUFBVSxLQUFHLElBQUUsQ0FBbEIsRUFBb0I7QUFBQyxhQUFPLENBQVA7QUFBVTs7QUFBQSxVQUFNLElBQUlRLEtBQUosRUFBTjtBQUFtQjs7QUFBQSxNQUFJQyxRQUFRLEdBQUMsTUFBYjtBQUFvQixNQUFJQyxNQUFNLEdBQUMsRUFBWDtBQUFjLE1BQUlWLFVBQVUsR0FBQyxLQUFLQSxVQUFwQjtBQUErQixNQUFJQyxTQUFTLEdBQUMsS0FBS0EsU0FBbkI7O0FBQTZCLE9BQUksSUFBSW5CLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ3NCLE1BQU0sQ0FBQ3JCLE1BQXJCLEVBQTRCRCxDQUFDLElBQUUsQ0FBL0IsRUFBaUM7QUFBQyxRQUFJNkIsS0FBSyxHQUFDUCxNQUFNLENBQUN0QixDQUFELENBQWhCOztBQUFvQixRQUFHa0IsVUFBVSxLQUFHLENBQWhCLEVBQWtCO0FBQUMsVUFBR1csS0FBSyxHQUFDLEdBQU4sSUFBV0EsS0FBSyxHQUFDLEdBQWpCLElBQXNCLENBQUNOLEtBQUssQ0FBQ0osU0FBUyxJQUFFLENBQVgsR0FBYVUsS0FBSyxHQUFDLEVBQXBCLEVBQXVCWCxVQUFVLEdBQUMsQ0FBbEMsRUFBb0NPLFdBQVcsQ0FBQ1AsVUFBRCxFQUFZQyxTQUFaLENBQS9DLENBQS9CLEVBQXNHO0FBQUNELGtCQUFVLEdBQUMsQ0FBWDtBQUFhQyxpQkFBUyxHQUFDUSxRQUFWO0FBQW1CQyxjQUFNLElBQUVFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQlosU0FBcEIsQ0FBUjtBQUF3QztBQUFDOztBQUFBLFFBQUdELFVBQVUsS0FBRyxDQUFoQixFQUFrQjtBQUFDLFVBQUdXLEtBQUssSUFBRSxDQUFQLElBQVVBLEtBQUssSUFBRSxHQUFwQixFQUF3QjtBQUFDWCxrQkFBVSxHQUFDLENBQVg7QUFBYUMsaUJBQVMsR0FBQ1UsS0FBVjtBQUFpQixPQUF2RCxNQUE0RCxJQUFHQSxLQUFLLElBQUUsR0FBUCxJQUFZQSxLQUFLLElBQUUsR0FBdEIsRUFBMEI7QUFBQ1gsa0JBQVUsR0FBQyxJQUFFLENBQWI7QUFBZUMsaUJBQVMsR0FBQ1UsS0FBSyxHQUFDLEVBQWhCO0FBQW9CLE9BQTlELE1BQW1FLElBQUdBLEtBQUssSUFBRSxHQUFQLElBQVlBLEtBQUssSUFBRSxHQUF0QixFQUEwQjtBQUFDWCxrQkFBVSxHQUFDLElBQUUsQ0FBYjtBQUFlQyxpQkFBUyxHQUFDVSxLQUFLLEdBQUMsRUFBaEI7QUFBb0IsT0FBOUQsTUFBbUUsSUFBR0EsS0FBSyxJQUFFLEdBQVAsSUFBWUEsS0FBSyxJQUFFLEdBQXRCLEVBQTBCO0FBQUNYLGtCQUFVLEdBQUMsSUFBRSxDQUFiO0FBQWVDLGlCQUFTLEdBQUNVLEtBQUssR0FBQyxDQUFoQjtBQUFtQixPQUE3RCxNQUFpRTtBQUFDWCxrQkFBVSxHQUFDLENBQVg7QUFBYUMsaUJBQVMsR0FBQ1EsUUFBVjtBQUFvQjs7QUFBQSxVQUFHVCxVQUFVLEtBQUcsQ0FBYixJQUFnQixDQUFDSyxLQUFLLENBQUNKLFNBQUQsRUFBV0QsVUFBWCxFQUFzQk8sV0FBVyxDQUFDUCxVQUFELEVBQVlDLFNBQVosQ0FBakMsQ0FBekIsRUFBa0Y7QUFBQ0Qsa0JBQVUsR0FBQyxDQUFYO0FBQWFDLGlCQUFTLEdBQUNRLFFBQVY7QUFBb0I7QUFBQyxLQUE3YSxNQUFpYjtBQUFDVCxnQkFBVSxJQUFFLENBQVo7QUFBY0MsZUFBUyxHQUFDQSxTQUFTLElBQUUsQ0FBWCxHQUFhVSxLQUFLLEdBQUMsRUFBN0I7QUFBaUM7O0FBQUEsUUFBR1gsVUFBVSxLQUFHLENBQWhCLEVBQWtCO0FBQUMsVUFBR0MsU0FBUyxJQUFFLE1BQWQsRUFBcUI7QUFBQ1MsY0FBTSxJQUFFRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0JaLFNBQXBCLENBQVI7QUFBd0MsT0FBOUQsTUFBa0U7QUFBQ1MsY0FBTSxJQUFFRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsVUFBUVosU0FBUyxHQUFDLE1BQVYsR0FBaUIsQ0FBakIsSUFBb0IsRUFBNUIsQ0FBcEIsQ0FBUjtBQUE2RFMsY0FBTSxJQUFFRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsVUFBUVosU0FBUyxHQUFDLE1BQVYsR0FBaUIsQ0FBakIsR0FBbUIsS0FBM0IsQ0FBcEIsQ0FBUjtBQUFnRTtBQUFDO0FBQUM7O0FBQUEsT0FBS0QsVUFBTCxHQUFnQkEsVUFBaEI7QUFBMkIsT0FBS0MsU0FBTCxHQUFlQSxTQUFmO0FBQXlCLFNBQU9TLE1BQVA7QUFBZSxDQUFyckQsQyxDQUFzckQ7OztBQUMxaEUsSUFBSUksb0JBQW9CLEdBQUMsU0FBU0Esb0JBQVQsR0FBK0I7QUFBQyxNQUFHO0FBQUMsV0FBTyxJQUFJckIsV0FBSixHQUFrQlUsTUFBbEIsQ0FBeUIsSUFBSVQsV0FBSixHQUFrQnFCLE1BQWxCLENBQXlCLE1BQXpCLENBQXpCLEVBQTBEO0FBQUNDLFlBQU0sRUFBQztBQUFSLEtBQTFELE1BQTJFLE1BQWxGO0FBQTBGLEdBQTlGLENBQThGLE9BQU1sRSxLQUFOLEVBQVk7QUFBQ0QsV0FBTyxDQUFDZ0MsR0FBUixDQUFZL0IsS0FBWjtBQUFvQjs7QUFBQSxTQUFPLEtBQVA7QUFBYyxDQUF0TSxDLENBQXVNOzs7QUFDdk0sSUFBRzJDLFdBQVcsSUFBRUcsU0FBYixJQUF3QkYsV0FBVyxJQUFFRSxTQUFyQyxJQUFnRCxDQUFDa0Isb0JBQW9CLEVBQXhFLEVBQTJFO0FBQUNyQixhQUFXLEdBQUNNLG1CQUFaO0FBQWlDOztBQUFBLElBQUlrQixDQUFDLEdBQUMsU0FBU0EsQ0FBVCxHQUFZLENBQUUsQ0FBcEI7O0FBQXFCLFNBQVNDLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXdCO0FBQUMsT0FBS0MsZUFBTCxHQUFxQixLQUFyQjtBQUEyQixPQUFLQyxZQUFMLEdBQWtCLEVBQWxCO0FBQXFCLE9BQUtDLFVBQUwsR0FBZ0IsQ0FBaEI7QUFBa0IsT0FBSzNGLE1BQUwsR0FBWSxDQUFaO0FBQWMsT0FBSzRGLFVBQUwsR0FBZ0IsRUFBaEI7QUFBbUIsT0FBS0MsWUFBTCxHQUFrQixFQUFsQjtBQUFxQixPQUFLQyxVQUFMLEdBQWdCUixDQUFoQjtBQUFrQixPQUFLUyxrQkFBTCxHQUF3QlQsQ0FBeEI7QUFBMEIsT0FBS1UsWUFBTCxHQUFrQixFQUFsQjtBQUFxQixPQUFLQyxJQUFMLEdBQVVULEdBQVY7QUFBYyxPQUFLVSxZQUFMLEdBQWtCLENBQWxCO0FBQW9CLE9BQUtDLE1BQUwsR0FBWWIsQ0FBWjtBQUFlOztNQUExUEMsVTs7QUFBMFBBLFVBQVUsQ0FBQ2hCLFNBQVgsQ0FBcUI2QixJQUFyQixHQUEwQixVQUFTQyxNQUFULEVBQWdCQyxHQUFoQixFQUFvQjtBQUFDLE9BQUtILE1BQUwsQ0FBWSxJQUFaOztBQUFrQixNQUFJSSxJQUFJLEdBQUMsSUFBVDtBQUFjLE1BQUlmLEdBQUcsR0FBQyxLQUFLUyxJQUFiO0FBQWtCLE1BQUlPLEtBQUssR0FBQyxDQUFWO0FBQVksTUFBSWhFLE9BQU8sR0FBQyxDQUFaOztBQUFjLE9BQUsyRCxNQUFMLEdBQVksVUFBU00sTUFBVCxFQUFnQjtBQUFDLFFBQUdGLElBQUksQ0FBQ0wsWUFBTCxLQUFvQixDQUF2QixFQUF5QjtBQUFDUSxrQkFBWSxDQUFDSCxJQUFJLENBQUNMLFlBQU4sQ0FBWjtBQUFnQ0ssVUFBSSxDQUFDTCxZQUFMLEdBQWtCLENBQWxCO0FBQXFCOztBQUFBLFFBQUdNLEtBQUssS0FBRyxDQUFSLElBQVdBLEtBQUssS0FBRyxDQUFuQixJQUFzQkEsS0FBSyxLQUFHLENBQWpDLEVBQW1DO0FBQUNBLFdBQUssR0FBQyxDQUFOO0FBQVFoQixTQUFHLENBQUNtQixNQUFKLEdBQVdyQixDQUFYO0FBQWFFLFNBQUcsQ0FBQ3pDLE9BQUosR0FBWXVDLENBQVo7QUFBY0UsU0FBRyxDQUFDb0IsT0FBSixHQUFZdEIsQ0FBWjtBQUFjRSxTQUFHLENBQUNNLFVBQUosR0FBZVIsQ0FBZjtBQUFpQkUsU0FBRyxDQUFDTyxrQkFBSixHQUF1QlQsQ0FBdkIsQ0FBbkUsQ0FBNEY7QUFDM3VCOztBQUNBRSxTQUFHLENBQUNyQixLQUFKOztBQUFZLFVBQUczQixPQUFPLEtBQUcsQ0FBYixFQUFlO0FBQUNrRSxvQkFBWSxDQUFDbEUsT0FBRCxDQUFaO0FBQXNCQSxlQUFPLEdBQUMsQ0FBUjtBQUFXOztBQUFBLFVBQUcsQ0FBQ2lFLE1BQUosRUFBVztBQUFDRixZQUFJLENBQUNaLFVBQUwsR0FBZ0IsQ0FBaEI7QUFBa0JZLFlBQUksQ0FBQ1Isa0JBQUw7QUFBMkI7QUFBQzs7QUFBQVMsU0FBSyxHQUFDLENBQU47QUFBUyxHQUZnWTs7QUFFL1gsTUFBSUssT0FBTyxHQUFDLFNBQVNBLE9BQVQsR0FBa0I7QUFBQyxRQUFHTCxLQUFLLEtBQUcsQ0FBWCxFQUFhO0FBQUM7QUFDOUssVUFBSXhHLE1BQU0sR0FBQyxDQUFYO0FBQWEsVUFBSTRGLFVBQVUsR0FBQyxFQUFmO0FBQWtCLFVBQUlrQixXQUFXLEdBQUM3QyxTQUFoQjs7QUFBMEIsVUFBRyxFQUFFLGlCQUFnQnVCLEdBQWxCLENBQUgsRUFBMEI7QUFBQyxZQUFHO0FBQUN4RixnQkFBTSxHQUFDd0YsR0FBRyxDQUFDeEYsTUFBWDtBQUFrQjRGLG9CQUFVLEdBQUNKLEdBQUcsQ0FBQ0ksVUFBZjtBQUEwQmtCLHFCQUFXLEdBQUN0QixHQUFHLENBQUN1QixpQkFBSixDQUFzQixjQUF0QixDQUFaO0FBQW1ELFNBQW5HLENBQW1HLE9BQU01RixLQUFOLEVBQVk7QUFBQztBQUNwTTtBQUNBO0FBQ0FuQixnQkFBTSxHQUFDLENBQVA7QUFBUzRGLG9CQUFVLEdBQUMsRUFBWDtBQUFja0IscUJBQVcsR0FBQzdDLFNBQVosQ0FINEssQ0FHdEo7QUFDN0M7QUFDQTtBQUNDO0FBQUMsT0FOdUQsTUFNbkQ7QUFBQ2pFLGNBQU0sR0FBQyxHQUFQO0FBQVc0RixrQkFBVSxHQUFDLElBQVg7QUFBZ0JrQixtQkFBVyxHQUFDdEIsR0FBRyxDQUFDc0IsV0FBaEI7QUFBNkI7O0FBQUEsVUFBRzlHLE1BQU0sS0FBRyxDQUFaLEVBQWM7QUFBQ3dHLGFBQUssR0FBQyxDQUFOO0FBQVFELFlBQUksQ0FBQ1osVUFBTCxHQUFnQixDQUFoQjtBQUFrQlksWUFBSSxDQUFDdkcsTUFBTCxHQUFZQSxNQUFaO0FBQW1CdUcsWUFBSSxDQUFDWCxVQUFMLEdBQWdCQSxVQUFoQjtBQUEyQlcsWUFBSSxDQUFDUCxZQUFMLEdBQWtCYyxXQUFsQjtBQUE4QlAsWUFBSSxDQUFDUixrQkFBTDtBQUEyQjtBQUFDO0FBQUMsR0FQaEY7O0FBT2lGLE1BQUlpQixVQUFVLEdBQUMsU0FBU0EsVUFBVCxHQUFxQjtBQUFDSCxXQUFPOztBQUFHLFFBQUdMLEtBQUssS0FBRyxDQUFSLElBQVdBLEtBQUssS0FBRyxDQUF0QixFQUF3QjtBQUFDQSxXQUFLLEdBQUMsQ0FBTjtBQUFRLFVBQUlYLFlBQVksR0FBQyxFQUFqQjs7QUFBb0IsVUFBRztBQUFDQSxvQkFBWSxHQUFDTCxHQUFHLENBQUNLLFlBQWpCO0FBQStCLE9BQW5DLENBQW1DLE9BQU0xRSxLQUFOLEVBQVksQ0FBQztBQUNyVzs7QUFBQW9GLFVBQUksQ0FBQ1osVUFBTCxHQUFnQixDQUFoQjtBQUFrQlksVUFBSSxDQUFDVixZQUFMLEdBQWtCQSxZQUFsQjtBQUErQlUsVUFBSSxDQUFDVCxVQUFMO0FBQW1CO0FBQUMsR0FENEk7O0FBQzNJLE1BQUltQixRQUFRLEdBQUMsU0FBU0EsUUFBVCxHQUFtQjtBQUFDO0FBQ3hHO0FBQ0FELGNBQVU7O0FBQUcsUUFBR1IsS0FBSyxLQUFHLENBQVIsSUFBV0EsS0FBSyxLQUFHLENBQW5CLElBQXNCQSxLQUFLLEtBQUcsQ0FBakMsRUFBbUM7QUFBQ0EsV0FBSyxHQUFDLENBQU47O0FBQVEsVUFBR2hFLE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFBQ2tFLG9CQUFZLENBQUNsRSxPQUFELENBQVo7QUFBc0JBLGVBQU8sR0FBQyxDQUFSO0FBQVc7O0FBQUErRCxVQUFJLENBQUNaLFVBQUwsR0FBZ0IsQ0FBaEI7QUFBa0JZLFVBQUksQ0FBQ1Isa0JBQUw7QUFBMkI7QUFBQyxHQUZqRjs7QUFFa0YsTUFBSW1CLGtCQUFrQixHQUFDLFNBQVNBLGtCQUFULEdBQTZCO0FBQUMsUUFBRzFCLEdBQUcsSUFBRXZCLFNBQVIsRUFBa0I7QUFBQztBQUNqTyxVQUFHdUIsR0FBRyxDQUFDRyxVQUFKLEtBQWlCLENBQXBCLEVBQXNCO0FBQUNzQixnQkFBUTtBQUFJLE9BQW5DLE1BQXdDLElBQUd6QixHQUFHLENBQUNHLFVBQUosS0FBaUIsQ0FBcEIsRUFBc0I7QUFBQ3FCLGtCQUFVO0FBQUksT0FBckMsTUFBMEMsSUFBR3hCLEdBQUcsQ0FBQ0csVUFBSixLQUFpQixDQUFwQixFQUFzQjtBQUFDa0IsZUFBTztBQUFJO0FBQUM7QUFBQyxHQURtQzs7QUFDbEMsTUFBSU0sU0FBUyxHQUFDLFNBQVNBLFNBQVQsR0FBb0I7QUFBQzNFLFdBQU8sR0FBQ2lCLFVBQVUsQ0FBQyxZQUFVO0FBQUMwRCxlQUFTO0FBQUksS0FBekIsRUFBMEIsR0FBMUIsQ0FBbEI7O0FBQWlELFFBQUczQixHQUFHLENBQUNHLFVBQUosS0FBaUIsQ0FBcEIsRUFBc0I7QUFBQ3FCLGdCQUFVO0FBQUk7QUFBQyxHQUExSCxDQWI0VCxDQWFqTTs7O0FBQ2xQeEIsS0FBRyxDQUFDbUIsTUFBSixHQUFXTSxRQUFYO0FBQW9CekIsS0FBRyxDQUFDekMsT0FBSixHQUFZa0UsUUFBWixDQWQrWixDQWMxWTtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFDQXpCLEtBQUcsQ0FBQ29CLE9BQUosR0FBWUssUUFBWixDQW5CbWIsQ0FtQjlaOztBQUNyQixNQUFHLEVBQUUsa0JBQWlCRyxjQUFjLENBQUM3QyxTQUFsQyxLQUE4QyxFQUFFLGFBQVk2QyxjQUFjLENBQUM3QyxTQUE3QixDQUFqRCxFQUF5RjtBQUFDaUIsT0FBRyxDQUFDTSxVQUFKLEdBQWVrQixVQUFmO0FBQTJCLEdBcEI4VCxDQW9COVQ7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0F4QixLQUFHLENBQUNPLGtCQUFKLEdBQXVCbUIsa0JBQXZCOztBQUEwQyxNQUFHLGlCQUFnQjFCLEdBQW5CLEVBQXVCO0FBQUNjLE9BQUcsSUFBRSxDQUFDQSxHQUFHLENBQUMxRixPQUFKLENBQVksR0FBWixNQUFtQixDQUFDLENBQXBCLEdBQXNCLEdBQXRCLEdBQTBCLEdBQTNCLElBQWdDLGNBQXJDO0FBQXFEOztBQUFBNEUsS0FBRyxDQUFDWSxJQUFKLENBQVNDLE1BQVQsRUFBZ0JDLEdBQWhCLEVBQW9CLElBQXBCOztBQUEwQixNQUFHLGdCQUFlZCxHQUFsQixFQUFzQjtBQUFDO0FBQ3hLO0FBQ0FoRCxXQUFPLEdBQUNpQixVQUFVLENBQUMsWUFBVTtBQUFDMEQsZUFBUztBQUFJLEtBQXpCLEVBQTBCLENBQTFCLENBQWxCO0FBQWdEO0FBQUMsQ0E1Qm9WOztBQTRCblY1QixVQUFVLENBQUNoQixTQUFYLENBQXFCSixLQUFyQixHQUEyQixZQUFVO0FBQUMsT0FBS2dDLE1BQUwsQ0FBWSxLQUFaO0FBQW9CLENBQTFEOztBQUEyRFosVUFBVSxDQUFDaEIsU0FBWCxDQUFxQndDLGlCQUFyQixHQUF1QyxVQUFTTSxJQUFULEVBQWM7QUFBQyxTQUFPLEtBQUtyQixZQUFaO0FBQTBCLENBQWhGOztBQUFpRlQsVUFBVSxDQUFDaEIsU0FBWCxDQUFxQitDLGdCQUFyQixHQUFzQyxVQUFTRCxJQUFULEVBQWNFLEtBQWQsRUFBb0I7QUFBQyxNQUFJL0IsR0FBRyxHQUFDLEtBQUtTLElBQWI7O0FBQWtCLE1BQUcsc0JBQXFCVCxHQUF4QixFQUE0QjtBQUFDQSxPQUFHLENBQUM4QixnQkFBSixDQUFxQkQsSUFBckIsRUFBMEJFLEtBQTFCO0FBQWtDO0FBQUMsQ0FBN0k7O0FBQThJaEMsVUFBVSxDQUFDaEIsU0FBWCxDQUFxQmlELHFCQUFyQixHQUEyQyxZQUFVO0FBQUMsU0FBTyxLQUFLdkIsSUFBTCxDQUFVdUIscUJBQVYsSUFBaUN2RCxTQUFqQyxHQUEyQyxLQUFLZ0MsSUFBTCxDQUFVdUIscUJBQVYsRUFBM0MsR0FBNkUsRUFBcEY7QUFBd0YsQ0FBOUk7O0FBQStJakMsVUFBVSxDQUFDaEIsU0FBWCxDQUFxQmtELElBQXJCLEdBQTBCLFlBQVU7QUFBQztBQUNoZ0IsTUFBRyxFQUFFLGVBQWNMLGNBQWMsQ0FBQzdDLFNBQS9CLEtBQTJDckYsUUFBUSxJQUFFK0UsU0FBckQsSUFBZ0UvRSxRQUFRLENBQUN5RyxVQUFULElBQXFCMUIsU0FBckYsSUFBZ0cvRSxRQUFRLENBQUN5RyxVQUFULEtBQXNCLFVBQXpILEVBQW9JO0FBQUMsUUFBSVksSUFBSSxHQUFDLElBQVQ7QUFBY0EsUUFBSSxDQUFDTCxZQUFMLEdBQWtCekMsVUFBVSxDQUFDLFlBQVU7QUFBQzhDLFVBQUksQ0FBQ0wsWUFBTCxHQUFrQixDQUFsQjtBQUFvQkssVUFBSSxDQUFDa0IsSUFBTDtBQUFhLEtBQTdDLEVBQThDLENBQTlDLENBQTVCO0FBQTZFO0FBQVE7O0FBQUEsTUFBSWpDLEdBQUcsR0FBQyxLQUFLUyxJQUFiLENBRHVSLENBQ3JROztBQUMxUFQsS0FBRyxDQUFDQyxlQUFKLEdBQW9CLEtBQUtBLGVBQXpCO0FBQXlDRCxLQUFHLENBQUNFLFlBQUosR0FBaUIsS0FBS0EsWUFBdEI7O0FBQW1DLE1BQUc7QUFBQztBQUNoRkYsT0FBRyxDQUFDaUMsSUFBSixDQUFTeEQsU0FBVDtBQUFxQixHQUR1RCxDQUN2RCxPQUFNeUQsTUFBTixFQUFhO0FBQUM7QUFDbkMsVUFBTUEsTUFBTjtBQUFjO0FBQUMsQ0FKNGM7O0FBSTNjLFNBQVNDLFdBQVQsQ0FBcUJOLElBQXJCLEVBQTBCO0FBQUMsU0FBT0EsSUFBSSxDQUFDdkcsT0FBTCxDQUFhLFFBQWIsRUFBc0IsVUFBU0wsQ0FBVCxFQUFXO0FBQUMsV0FBT3dFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQnpFLENBQUMsQ0FBQ21ILFVBQUYsQ0FBYSxDQUFiLElBQWdCLElBQXBDLENBQVA7QUFBa0QsR0FBcEYsQ0FBUDtBQUE4Rjs7QUFBQSxTQUFTQyxlQUFULENBQXlCQyxHQUF6QixFQUE2QjtBQUFDO0FBQ3ZLLE1BQUlDLEdBQUcsR0FBQ3hILE1BQU0sQ0FBQ3lILE1BQVAsQ0FBYyxJQUFkLENBQVI7QUFBNEIsTUFBSUMsS0FBSyxHQUFDSCxHQUFHLENBQUNJLEtBQUosQ0FBVSxNQUFWLENBQVY7O0FBQTRCLE9BQUksSUFBSS9FLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQzhFLEtBQUssQ0FBQzdFLE1BQXBCLEVBQTJCRCxDQUFDLElBQUUsQ0FBOUIsRUFBZ0M7QUFBQyxRQUFJZ0YsSUFBSSxHQUFDRixLQUFLLENBQUM5RSxDQUFELENBQWQ7QUFBa0IsUUFBSWlGLEtBQUssR0FBQ0QsSUFBSSxDQUFDRCxLQUFMLENBQVcsSUFBWCxDQUFWO0FBQTJCLFFBQUliLElBQUksR0FBQ2UsS0FBSyxDQUFDekQsS0FBTixFQUFUO0FBQXVCLFFBQUk0QyxLQUFLLEdBQUNhLEtBQUssQ0FBQ0MsSUFBTixDQUFXLElBQVgsQ0FBVjtBQUEyQk4sT0FBRyxDQUFDSixXQUFXLENBQUNOLElBQUQsQ0FBWixDQUFILEdBQXVCRSxLQUF2QjtBQUE4Qjs7QUFBQSxPQUFLZSxJQUFMLEdBQVVQLEdBQVY7QUFBZTs7TUFEbkZGLGU7O0FBQ21GQSxlQUFlLENBQUN0RCxTQUFoQixDQUEwQmdFLEdBQTFCLEdBQThCLFVBQVNsQixJQUFULEVBQWM7QUFBQyxTQUFPLEtBQUtpQixJQUFMLENBQVVYLFdBQVcsQ0FBQ04sSUFBRCxDQUFyQixDQUFQO0FBQXFDLENBQWxGOztBQUFtRixTQUFTbUIsWUFBVCxHQUF1QixDQUFFOztNQUFoQkEsWTs7QUFBZ0JBLFlBQVksQ0FBQ2pFLFNBQWIsQ0FBdUI2QixJQUF2QixHQUE0QixVQUFTWixHQUFULEVBQWFpRCxlQUFiLEVBQTZCQyxrQkFBN0IsRUFBZ0RDLGdCQUFoRCxFQUFpRXJDLEdBQWpFLEVBQXFFYixlQUFyRSxFQUFxRm1ELE9BQXJGLEVBQTZGO0FBQUNwRCxLQUFHLENBQUNZLElBQUosQ0FBUyxLQUFULEVBQWVFLEdBQWY7QUFBb0IsTUFBSXVDLE1BQU0sR0FBQyxDQUFYOztBQUFhckQsS0FBRyxDQUFDTSxVQUFKLEdBQWUsWUFBVTtBQUFDLFFBQUlELFlBQVksR0FBQ0wsR0FBRyxDQUFDSyxZQUFyQjtBQUFrQyxRQUFJaUQsS0FBSyxHQUFDakQsWUFBWSxDQUFDa0QsS0FBYixDQUFtQkYsTUFBbkIsQ0FBVjtBQUFxQ0EsVUFBTSxJQUFFQyxLQUFLLENBQUMxRixNQUFkO0FBQXFCc0Ysc0JBQWtCLENBQUNJLEtBQUQsQ0FBbEI7QUFBMkIsR0FBako7O0FBQWtKdEQsS0FBRyxDQUFDTyxrQkFBSixHQUF1QixZQUFVO0FBQUMsUUFBR1AsR0FBRyxDQUFDRyxVQUFKLEtBQWlCLENBQXBCLEVBQXNCO0FBQUMsVUFBSTNGLE1BQU0sR0FBQ3dGLEdBQUcsQ0FBQ3hGLE1BQWY7QUFBc0IsVUFBSTRGLFVBQVUsR0FBQ0osR0FBRyxDQUFDSSxVQUFuQjtBQUE4QixVQUFJa0IsV0FBVyxHQUFDdEIsR0FBRyxDQUFDdUIsaUJBQUosQ0FBc0IsY0FBdEIsQ0FBaEI7QUFBc0QsVUFBSTZCLE9BQU8sR0FBQ3BELEdBQUcsQ0FBQ2dDLHFCQUFKLEVBQVo7QUFBd0NpQixxQkFBZSxDQUFDekksTUFBRCxFQUFRNEYsVUFBUixFQUFtQmtCLFdBQW5CLEVBQStCLElBQUllLGVBQUosQ0FBb0JlLE9BQXBCLENBQS9CLEVBQTRELFlBQVU7QUFBQ3BELFdBQUcsQ0FBQ3JCLEtBQUo7QUFBYSxPQUFwRixDQUFmO0FBQXNHLEtBQS9RLE1BQW9SLElBQUdxQixHQUFHLENBQUNHLFVBQUosS0FBaUIsQ0FBcEIsRUFBc0I7QUFBQ2dELHNCQUFnQjtBQUFJO0FBQUMsR0FBbFc7O0FBQW1XbkQsS0FBRyxDQUFDQyxlQUFKLEdBQW9CQSxlQUFwQjtBQUFvQ0QsS0FBRyxDQUFDRSxZQUFKLEdBQWlCLE1BQWpCOztBQUF3QixPQUFJLElBQUkyQixJQUFSLElBQWdCdUIsT0FBaEIsRUFBd0I7QUFBQyxRQUFHckksTUFBTSxDQUFDZ0UsU0FBUCxDQUFpQnlFLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0wsT0FBckMsRUFBNkN2QixJQUE3QyxDQUFILEVBQXNEO0FBQUM3QixTQUFHLENBQUM4QixnQkFBSixDQUFxQkQsSUFBckIsRUFBMEJ1QixPQUFPLENBQUN2QixJQUFELENBQWpDO0FBQTBDO0FBQUM7O0FBQUE3QixLQUFHLENBQUNpQyxJQUFKO0FBQVksQ0FBbjFCOztBQUFvMUIsU0FBU3lCLGNBQVQsQ0FBd0JOLE9BQXhCLEVBQWdDO0FBQUMsT0FBS08sUUFBTCxHQUFjUCxPQUFkO0FBQXVCOztNQUEvQ00sYzs7QUFBK0NBLGNBQWMsQ0FBQzNFLFNBQWYsQ0FBeUJnRSxHQUF6QixHQUE2QixVQUFTbEIsSUFBVCxFQUFjO0FBQUMsU0FBTyxLQUFLOEIsUUFBTCxDQUFjWixHQUFkLENBQWtCbEIsSUFBbEIsQ0FBUDtBQUFnQyxDQUE1RTs7QUFBNkUsU0FBUytCLGNBQVQsR0FBeUIsQ0FBRTs7TUFBbEJBLGM7O0FBQWtCQSxjQUFjLENBQUM3RSxTQUFmLENBQXlCNkIsSUFBekIsR0FBOEIsVUFBU1osR0FBVCxFQUFhaUQsZUFBYixFQUE2QkMsa0JBQTdCLEVBQWdEQyxnQkFBaEQsRUFBaUVyQyxHQUFqRSxFQUFxRWIsZUFBckUsRUFBcUZtRCxPQUFyRixFQUE2RjtBQUFDLE1BQUlTLFVBQVUsR0FBQyxJQUFJckYsZUFBSixFQUFmO0FBQXFDLE1BQUlFLE1BQU0sR0FBQ21GLFVBQVUsQ0FBQ25GLE1BQXRCLENBQXRDLENBQW1FOztBQUNuZ0QsTUFBSW9GLFdBQVcsR0FBQyxJQUFJeEYsV0FBSixFQUFoQjtBQUFrQyxHQUFDLEdBQUV2RixRQUFRLENBQUNPLE9BQVosRUFBcUJ3SCxHQUFyQixFQUF5QjtBQUFDc0MsV0FBTyxFQUFDQSxPQUFUO0FBQWlCVyxlQUFXLEVBQUM5RCxlQUFlLEdBQUMsU0FBRCxHQUFXLGFBQXZEO0FBQXFFdkIsVUFBTSxFQUFDQSxNQUE1RTtBQUFtRnNGLFNBQUssRUFBQztBQUF6RixHQUF6QixFQUErSEMsSUFBL0gsQ0FBb0ksVUFBU0MsUUFBVCxFQUFrQjtBQUFDLFFBQUlDLE1BQU0sR0FBQ0QsUUFBUSxDQUFDRSxJQUFULENBQWNDLFNBQWQsRUFBWDtBQUFxQ3BCLG1CQUFlLENBQUNpQixRQUFRLENBQUMxSixNQUFWLEVBQWlCMEosUUFBUSxDQUFDOUQsVUFBMUIsRUFBcUM4RCxRQUFRLENBQUNkLE9BQVQsQ0FBaUJMLEdBQWpCLENBQXFCLGNBQXJCLENBQXJDLEVBQTBFLElBQUlXLGNBQUosQ0FBbUJRLFFBQVEsQ0FBQ2QsT0FBNUIsQ0FBMUUsRUFBK0csWUFBVTtBQUFDUyxnQkFBVSxDQUFDbEYsS0FBWDtBQUFtQndGLFlBQU0sQ0FBQ0csTUFBUDtBQUFpQixLQUE5SixDQUFmO0FBQStLLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBaUJDLE1BQWpCLEVBQXdCO0FBQUMsVUFBSUMsYUFBYSxHQUFDLFNBQVNBLGFBQVQsR0FBd0I7QUFBQ1AsY0FBTSxDQUFDUSxJQUFQLEdBQWNWLElBQWQsQ0FBbUIsVUFBU1csTUFBVCxFQUFnQjtBQUFDLGNBQUdBLE1BQU0sQ0FBQ0MsSUFBVixFQUFlO0FBQUM7QUFDeGhCTCxtQkFBTyxDQUFDL0YsU0FBRCxDQUFQO0FBQW9CLFdBRG9mLE1BQ2hmO0FBQUMsZ0JBQUk2RSxLQUFLLEdBQUNRLFdBQVcsQ0FBQzlFLE1BQVosQ0FBbUI0RixNQUFNLENBQUM3QyxLQUExQixFQUFnQztBQUFDbEMsb0JBQU0sRUFBQztBQUFSLGFBQWhDLENBQVY7QUFBeURxRCw4QkFBa0IsQ0FBQ0ksS0FBRCxDQUFsQjtBQUEwQm9CLHlCQUFhO0FBQUk7QUFBQyxTQURzVyxFQUNwVyxPQURvVyxFQUMzVixVQUFTL0ksS0FBVCxFQUFlO0FBQUM4SSxnQkFBTSxDQUFDOUksS0FBRCxDQUFOO0FBQWUsU0FENFQ7QUFDelQsT0FEOFE7O0FBQzdRK0ksbUJBQWE7QUFBSSxLQUR1TixDQUFQO0FBQzdNLEdBRDlKLEVBQ2dLVCxJQURoSyxDQUNxSyxVQUFTVyxNQUFULEVBQWdCO0FBQUN6QixvQkFBZ0I7QUFBRyxXQUFPeUIsTUFBUDtBQUFlLEdBRHhOLEVBQ3lOLFVBQVNqSixLQUFULEVBQWU7QUFBQ3dILG9CQUFnQjtBQUFHLFdBQU9vQixPQUFPLENBQUNFLE1BQVIsQ0FBZTlJLEtBQWYsQ0FBUDtBQUE4QixHQUQxUjtBQUM2UixDQUZzZ0M7O0FBRXJnQyxTQUFTbUosV0FBVCxHQUFzQjtBQUFDLE9BQUtDLFVBQUwsR0FBZ0JoSyxNQUFNLENBQUN5SCxNQUFQLENBQWMsSUFBZCxDQUFoQjtBQUFxQzs7TUFBbkRzQyxXOztBQUFtRCxTQUFTRSxVQUFULENBQW9CQyxDQUFwQixFQUFzQjtBQUFDaEgsWUFBVSxDQUFDLFlBQVU7QUFBQyxVQUFNZ0gsQ0FBTjtBQUFTLEdBQXJCLEVBQXNCLENBQXRCLENBQVY7QUFBb0M7O0FBQUFILFdBQVcsQ0FBQy9GLFNBQVosQ0FBc0JtRyxhQUF0QixHQUFvQyxVQUFTbkosS0FBVCxFQUFlO0FBQUNBLE9BQUssQ0FBQ29KLE1BQU4sR0FBYSxJQUFiO0FBQWtCLE1BQUlDLGFBQWEsR0FBQyxLQUFLTCxVQUFMLENBQWdCaEosS0FBSyxDQUFDc0osSUFBdEIsQ0FBbEI7O0FBQThDLE1BQUdELGFBQWEsSUFBRTNHLFNBQWxCLEVBQTRCO0FBQUMsUUFBSWIsTUFBTSxHQUFDd0gsYUFBYSxDQUFDeEgsTUFBekI7O0FBQWdDLFNBQUksSUFBSUQsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDQyxNQUFkLEVBQXFCRCxDQUFDLElBQUUsQ0FBeEIsRUFBMEI7QUFBQyxVQUFJMkgsUUFBUSxHQUFDRixhQUFhLENBQUN6SCxDQUFELENBQTFCOztBQUE4QixVQUFHO0FBQUMsWUFBRyxPQUFPMkgsUUFBUSxDQUFDQyxXQUFoQixLQUE4QixVQUFqQyxFQUE0QztBQUFDRCxrQkFBUSxDQUFDQyxXQUFULENBQXFCeEosS0FBckI7QUFBNkIsU0FBMUUsTUFBOEU7QUFBQ3VKLGtCQUFRLENBQUM3QixJQUFULENBQWMsSUFBZCxFQUFtQjFILEtBQW5CO0FBQTJCO0FBQUMsT0FBL0csQ0FBK0csT0FBTWtKLENBQU4sRUFBUTtBQUFDRCxrQkFBVSxDQUFDQyxDQUFELENBQVY7QUFBZTtBQUFDO0FBQUM7QUFBQyxDQUFwWDs7QUFBcVhILFdBQVcsQ0FBQy9GLFNBQVosQ0FBc0J5RyxnQkFBdEIsR0FBdUMsVUFBU0gsSUFBVCxFQUFjQyxRQUFkLEVBQXVCO0FBQUNELE1BQUksR0FBQzVGLE1BQU0sQ0FBQzRGLElBQUQsQ0FBWDtBQUFrQixNQUFJdEksU0FBUyxHQUFDLEtBQUtnSSxVQUFuQjtBQUE4QixNQUFJSyxhQUFhLEdBQUNySSxTQUFTLENBQUNzSSxJQUFELENBQTNCOztBQUFrQyxNQUFHRCxhQUFhLElBQUUzRyxTQUFsQixFQUE0QjtBQUFDMkcsaUJBQWEsR0FBQyxFQUFkO0FBQWlCckksYUFBUyxDQUFDc0ksSUFBRCxDQUFULEdBQWdCRCxhQUFoQjtBQUErQjs7QUFBQSxNQUFJSyxLQUFLLEdBQUMsS0FBVjs7QUFBZ0IsT0FBSSxJQUFJOUgsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDeUgsYUFBYSxDQUFDeEgsTUFBNUIsRUFBbUNELENBQUMsSUFBRSxDQUF0QyxFQUF3QztBQUFDLFFBQUd5SCxhQUFhLENBQUN6SCxDQUFELENBQWIsS0FBbUIySCxRQUF0QixFQUErQjtBQUFDRyxXQUFLLEdBQUMsSUFBTjtBQUFZO0FBQUM7O0FBQUEsTUFBRyxDQUFDQSxLQUFKLEVBQVU7QUFBQ0wsaUJBQWEsQ0FBQ2pILElBQWQsQ0FBbUJtSCxRQUFuQjtBQUE4QjtBQUFDLENBQTlXOztBQUErV1IsV0FBVyxDQUFDL0YsU0FBWixDQUFzQjJHLG1CQUF0QixHQUEwQyxVQUFTTCxJQUFULEVBQWNDLFFBQWQsRUFBdUI7QUFBQ0QsTUFBSSxHQUFDNUYsTUFBTSxDQUFDNEYsSUFBRCxDQUFYO0FBQWtCLE1BQUl0SSxTQUFTLEdBQUMsS0FBS2dJLFVBQW5CO0FBQThCLE1BQUlLLGFBQWEsR0FBQ3JJLFNBQVMsQ0FBQ3NJLElBQUQsQ0FBM0I7O0FBQWtDLE1BQUdELGFBQWEsSUFBRTNHLFNBQWxCLEVBQTRCO0FBQUMsUUFBSWtILFFBQVEsR0FBQyxFQUFiOztBQUFnQixTQUFJLElBQUloSSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUN5SCxhQUFhLENBQUN4SCxNQUE1QixFQUFtQ0QsQ0FBQyxJQUFFLENBQXRDLEVBQXdDO0FBQUMsVUFBR3lILGFBQWEsQ0FBQ3pILENBQUQsQ0FBYixLQUFtQjJILFFBQXRCLEVBQStCO0FBQUNLLGdCQUFRLENBQUN4SCxJQUFULENBQWNpSCxhQUFhLENBQUN6SCxDQUFELENBQTNCO0FBQWlDO0FBQUM7O0FBQUEsUUFBR2dJLFFBQVEsQ0FBQy9ILE1BQVQsS0FBa0IsQ0FBckIsRUFBdUI7QUFBQyxhQUFPYixTQUFTLENBQUNzSSxJQUFELENBQWhCO0FBQXdCLEtBQWhELE1BQW9EO0FBQUN0SSxlQUFTLENBQUNzSSxJQUFELENBQVQsR0FBZ0JNLFFBQWhCO0FBQTBCO0FBQUM7QUFBQyxDQUE3WDs7QUFBOFgsU0FBU0MsS0FBVCxDQUFlUCxJQUFmLEVBQW9CO0FBQUMsT0FBS0EsSUFBTCxHQUFVQSxJQUFWO0FBQWUsT0FBS0YsTUFBTCxHQUFZMUcsU0FBWjtBQUF1Qjs7TUFBbERtSCxLOztBQUFrRCxTQUFTQyxZQUFULENBQXNCUixJQUF0QixFQUEyQjFJLE9BQTNCLEVBQW1DO0FBQUNpSixPQUFLLENBQUNuQyxJQUFOLENBQVcsSUFBWCxFQUFnQjRCLElBQWhCO0FBQXNCLE9BQUs5TCxJQUFMLEdBQVVvRCxPQUFPLENBQUNwRCxJQUFsQjtBQUF1QixPQUFLdU0sV0FBTCxHQUFpQm5KLE9BQU8sQ0FBQ21KLFdBQXpCO0FBQXNDOztNQUE5R0QsWTtBQUE4R0EsWUFBWSxDQUFDOUcsU0FBYixHQUF1QmhFLE1BQU0sQ0FBQ3lILE1BQVAsQ0FBY29ELEtBQUssQ0FBQzdHLFNBQXBCLENBQXZCOztBQUFzRCxTQUFTZ0gsZUFBVCxDQUF5QlYsSUFBekIsRUFBOEIxSSxPQUE5QixFQUFzQztBQUFDaUosT0FBSyxDQUFDbkMsSUFBTixDQUFXLElBQVgsRUFBZ0I0QixJQUFoQjtBQUFzQixPQUFLN0ssTUFBTCxHQUFZbUMsT0FBTyxDQUFDbkMsTUFBcEI7QUFBMkIsT0FBSzRGLFVBQUwsR0FBZ0J6RCxPQUFPLENBQUN5RCxVQUF4QjtBQUFtQyxPQUFLZ0QsT0FBTCxHQUFhekcsT0FBTyxDQUFDeUcsT0FBckI7QUFBOEI7O09BQWhKMkMsZTtBQUFnSkEsZUFBZSxDQUFDaEgsU0FBaEIsR0FBMEJoRSxNQUFNLENBQUN5SCxNQUFQLENBQWNvRCxLQUFLLENBQUM3RyxTQUFwQixDQUExQjtBQUF5RCxJQUFJaUgsT0FBTyxHQUFDLENBQUMsQ0FBYjtBQUFlLElBQUlDLFVBQVUsR0FBQyxDQUFmO0FBQWlCLElBQUlDLElBQUksR0FBQyxDQUFUO0FBQVcsSUFBSUMsTUFBTSxHQUFDLENBQVg7QUFBYSxJQUFJQyxRQUFRLEdBQUMsQ0FBQyxDQUFkO0FBQWdCLElBQUlDLFdBQVcsR0FBQyxDQUFoQjtBQUFrQixJQUFJQyxLQUFLLEdBQUMsQ0FBVjtBQUFZLElBQUlDLFdBQVcsR0FBQyxDQUFoQjtBQUFrQixJQUFJQyxLQUFLLEdBQUMsQ0FBVjtBQUFZLElBQUlDLGlCQUFpQixHQUFDLCtDQUF0QjtBQUFzRSxJQUFJQyxnQkFBZ0IsR0FBQyxJQUFyQjtBQUEwQixJQUFJQyxnQkFBZ0IsR0FBQyxRQUFyQjs7QUFBOEIsSUFBSUMsYUFBYSxHQUFDLFNBQVNBLGFBQVQsQ0FBdUI3RSxLQUF2QixFQUE2QjhFLEdBQTdCLEVBQWlDO0FBQUMsTUFBSUMsQ0FBQyxHQUFDQyxRQUFRLENBQUNoRixLQUFELEVBQU8sRUFBUCxDQUFkOztBQUF5QixNQUFHK0UsQ0FBQyxLQUFHQSxDQUFQLEVBQVM7QUFBQ0EsS0FBQyxHQUFDRCxHQUFGO0FBQU87O0FBQUEsU0FBT0csYUFBYSxDQUFDRixDQUFELENBQXBCO0FBQXlCLENBQXZIOztBQUF3SCxJQUFJRSxhQUFhLEdBQUMsU0FBU0EsYUFBVCxDQUF1QkYsQ0FBdkIsRUFBeUI7QUFBQyxTQUFPRyxJQUFJLENBQUNDLEdBQUwsQ0FBU0QsSUFBSSxDQUFDRSxHQUFMLENBQVNMLENBQVQsRUFBV0osZ0JBQVgsQ0FBVCxFQUFzQ0MsZ0JBQXRDLENBQVA7QUFBZ0UsQ0FBNUc7O0FBQTZHLElBQUlTLElBQUksR0FBQyxTQUFTQSxJQUFULENBQWNyRyxJQUFkLEVBQW1Cc0csQ0FBbkIsRUFBcUJ0TCxLQUFyQixFQUEyQjtBQUFDLE1BQUc7QUFBQyxRQUFHLE9BQU9zTCxDQUFQLEtBQVcsVUFBZCxFQUF5QjtBQUFDQSxPQUFDLENBQUM1RCxJQUFGLENBQU8xQyxJQUFQLEVBQVloRixLQUFaO0FBQW9CO0FBQUMsR0FBbkQsQ0FBbUQsT0FBTWtKLENBQU4sRUFBUTtBQUFDRCxjQUFVLENBQUNDLENBQUQsQ0FBVjtBQUFlO0FBQUMsQ0FBakg7O0FBQWtILFNBQVNxQyxtQkFBVCxDQUE2QnhHLEdBQTdCLEVBQWlDbkUsT0FBakMsRUFBeUM7QUFBQ21JLGFBQVcsQ0FBQ3JCLElBQVosQ0FBaUIsSUFBakI7QUFBdUIsT0FBS3BHLE1BQUwsR0FBWW9CLFNBQVo7QUFBc0IsT0FBS2pCLFNBQUwsR0FBZWlCLFNBQWY7QUFBeUIsT0FBS2xCLE9BQUwsR0FBYWtCLFNBQWI7QUFBdUIsT0FBS3FDLEdBQUwsR0FBU3JDLFNBQVQ7QUFBbUIsT0FBSzBCLFVBQUwsR0FBZ0IxQixTQUFoQjtBQUEwQixPQUFLd0IsZUFBTCxHQUFxQnhCLFNBQXJCO0FBQStCLE9BQUs4SSxNQUFMLEdBQVk5SSxTQUFaO0FBQXNCK0ksT0FBSyxDQUFDLElBQUQsRUFBTTFHLEdBQU4sRUFBVW5FLE9BQVYsQ0FBTDtBQUF5Qjs7T0FBelAySyxtQjtBQUF5UCxJQUFJRyxnQkFBZ0IsR0FBQzFPLFFBQVEsQ0FBQ08sT0FBVCxJQUFrQm1GLFNBQWxCLElBQTZCSixRQUFRLElBQUVJLFNBQXZDLElBQWtELFVBQVNKLFFBQVEsQ0FBQ1UsU0FBekY7O0FBQW1HLFNBQVN5SSxLQUFULENBQWVFLEVBQWYsRUFBa0I1RyxHQUFsQixFQUFzQm5FLE9BQXRCLEVBQThCO0FBQUNtRSxLQUFHLEdBQUNyQixNQUFNLENBQUNxQixHQUFELENBQVY7QUFBZ0IsTUFBSWIsZUFBZSxHQUFDdEQsT0FBTyxJQUFFOEIsU0FBVCxJQUFvQmtKLE9BQU8sQ0FBQ2hMLE9BQU8sQ0FBQ3NELGVBQVQsQ0FBL0M7QUFBeUUsTUFBSTJILFlBQVksR0FBQ1osYUFBYSxDQUFDLElBQUQsQ0FBOUI7QUFBcUMsTUFBSWEsZ0JBQWdCLEdBQUNsTCxPQUFPLElBQUU4QixTQUFULElBQW9COUIsT0FBTyxDQUFDa0wsZ0JBQVIsSUFBMEJwSixTQUE5QyxHQUF3RG1JLGFBQWEsQ0FBQ2pLLE9BQU8sQ0FBQ2tMLGdCQUFULEVBQTBCLEtBQTFCLENBQXJFLEdBQXNHYixhQUFhLENBQUMsS0FBRCxDQUF4STtBQUFnSixNQUFJbEIsV0FBVyxHQUFDLEVBQWhCO0FBQW1CLE1BQUlnQyxLQUFLLEdBQUNGLFlBQVY7QUFBdUIsTUFBSUcsV0FBVyxHQUFDLEtBQWhCO0FBQXNCLE1BQUkzRSxPQUFPLEdBQUN6RyxPQUFPLElBQUU4QixTQUFULElBQW9COUIsT0FBTyxDQUFDeUcsT0FBUixJQUFpQjNFLFNBQXJDLEdBQStDakYsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ3dPLFNBQUwsQ0FBZXJMLE9BQU8sQ0FBQ3lHLE9BQXZCLENBQVgsQ0FBL0MsR0FBMkYzRSxTQUF2RztBQUFpSCxNQUFJd0osZ0JBQWdCLEdBQUN0TCxPQUFPLElBQUU4QixTQUFULElBQW9COUIsT0FBTyxDQUFDdUwsU0FBUixJQUFtQnpKLFNBQXZDLEdBQWlEOUIsT0FBTyxDQUFDdUwsU0FBekQsR0FBbUV0RyxjQUF4RjtBQUF1RyxNQUFJNUIsR0FBRyxHQUFDeUgsZ0JBQWdCLElBQUUsRUFBRTlLLE9BQU8sSUFBRThCLFNBQVQsSUFBb0I5QixPQUFPLENBQUN1TCxTQUFSLElBQW1CekosU0FBekMsQ0FBbEIsR0FBc0VBLFNBQXRFLEdBQWdGLElBQUlzQixVQUFKLENBQWUsSUFBSWtJLGdCQUFKLEVBQWYsQ0FBeEY7QUFBK0gsTUFBSUUsU0FBUyxHQUFDbkksR0FBRyxJQUFFdkIsU0FBTCxHQUFlLElBQUltRixjQUFKLEVBQWYsR0FBb0MsSUFBSVosWUFBSixFQUFsRDtBQUFxRSxNQUFJb0YsY0FBYyxHQUFDM0osU0FBbkI7QUFBNkIsTUFBSXpCLE9BQU8sR0FBQyxDQUFaO0FBQWMsTUFBSXFMLFlBQVksR0FBQ3JDLE9BQWpCO0FBQXlCLE1BQUlzQyxVQUFVLEdBQUMsRUFBZjtBQUFrQixNQUFJQyxpQkFBaUIsR0FBQyxFQUF0QjtBQUF5QixNQUFJQyxlQUFlLEdBQUMsRUFBcEI7QUFBdUIsTUFBSUMsVUFBVSxHQUFDLEVBQWY7QUFBa0IsTUFBSXpILEtBQUssR0FBQ3FGLFdBQVY7QUFBc0IsTUFBSXFDLFVBQVUsR0FBQyxDQUFmO0FBQWlCLE1BQUlDLFVBQVUsR0FBQyxDQUFmOztBQUFpQixNQUFJdEgsT0FBTyxHQUFDLFNBQVNBLE9BQVQsQ0FBaUI3RyxNQUFqQixFQUF3QjRGLFVBQXhCLEVBQW1Da0IsV0FBbkMsRUFBK0M4QixPQUEvQyxFQUF1RGtCLE1BQXZELEVBQThEO0FBQUMsUUFBRytELFlBQVksS0FBR3BDLFVBQWxCLEVBQTZCO0FBQUNtQyxvQkFBYyxHQUFDOUQsTUFBZjs7QUFBc0IsVUFBRzlKLE1BQU0sS0FBRyxHQUFULElBQWM4RyxXQUFXLElBQUU3QyxTQUEzQixJQUFzQ2dJLGlCQUFpQixDQUFDbUMsSUFBbEIsQ0FBdUJ0SCxXQUF2QixDQUF6QyxFQUE2RTtBQUFDK0csb0JBQVksR0FBQ25DLElBQWI7QUFBa0I2QixtQkFBVyxHQUFDLElBQVo7QUFBaUJELGFBQUssR0FBQ0YsWUFBTjtBQUFtQkYsVUFBRSxDQUFDdkgsVUFBSCxHQUFjK0YsSUFBZDtBQUFtQixZQUFJbkssS0FBSyxHQUFDLElBQUlnSyxlQUFKLENBQW9CLE1BQXBCLEVBQTJCO0FBQUN2TCxnQkFBTSxFQUFDQSxNQUFSO0FBQWU0RixvQkFBVSxFQUFDQSxVQUExQjtBQUFxQ2dELGlCQUFPLEVBQUNBO0FBQTdDLFNBQTNCLENBQVY7QUFBNEZzRSxVQUFFLENBQUN4QyxhQUFILENBQWlCbkosS0FBakI7QUFBd0JxTCxZQUFJLENBQUNNLEVBQUQsRUFBSUEsRUFBRSxDQUFDckssTUFBUCxFQUFjdEIsS0FBZCxDQUFKO0FBQTBCLE9BQXJTLE1BQXlTO0FBQUMsWUFBSUMsT0FBTyxHQUFDLEVBQVo7O0FBQWUsWUFBR3hCLE1BQU0sS0FBRyxHQUFaLEVBQWdCO0FBQUMsY0FBRzRGLFVBQUgsRUFBYztBQUFDQSxzQkFBVSxHQUFDQSxVQUFVLENBQUM5RSxPQUFYLENBQW1CLE1BQW5CLEVBQTBCLEdBQTFCLENBQVg7QUFBMkM7O0FBQUFVLGlCQUFPLEdBQUMseUNBQXVDeEIsTUFBdkMsR0FBOEMsR0FBOUMsR0FBa0Q0RixVQUFsRCxHQUE2RCw0Q0FBckU7QUFBbUgsU0FBOUwsTUFBa007QUFBQ3BFLGlCQUFPLEdBQUMsZ0ZBQThFc0YsV0FBVyxJQUFFN0MsU0FBYixHQUF1QixHQUF2QixHQUEyQjZDLFdBQVcsQ0FBQ2hHLE9BQVosQ0FBb0IsTUFBcEIsRUFBMkIsR0FBM0IsQ0FBekcsSUFBMEksNEJBQWxKO0FBQWdMOztBQUFBMEosa0JBQVUsQ0FBQyxJQUFJM0YsS0FBSixDQUFVckQsT0FBVixDQUFELENBQVY7QUFBK0JnQyxhQUFLO0FBQUcsWUFBSWpDLEtBQUssR0FBQyxJQUFJZ0ssZUFBSixDQUFvQixPQUFwQixFQUE0QjtBQUFDdkwsZ0JBQU0sRUFBQ0EsTUFBUjtBQUFlNEYsb0JBQVUsRUFBQ0EsVUFBMUI7QUFBcUNnRCxpQkFBTyxFQUFDQTtBQUE3QyxTQUE1QixDQUFWO0FBQTZGc0UsVUFBRSxDQUFDeEMsYUFBSCxDQUFpQm5KLEtBQWpCO0FBQXdCcUwsWUFBSSxDQUFDTSxFQUFELEVBQUlBLEVBQUUsQ0FBQ25LLE9BQVAsRUFBZXhCLEtBQWYsQ0FBSjtBQUEyQjtBQUFDO0FBQUMsR0FBcCtCOztBQUFxK0IsTUFBSXlGLFVBQVUsR0FBQyxTQUFTQSxVQUFULENBQW9CcUgsU0FBcEIsRUFBOEI7QUFBQyxRQUFHUixZQUFZLEtBQUduQyxJQUFsQixFQUF1QjtBQUFDLFVBQUlZLENBQUMsR0FBQyxDQUFDLENBQVA7O0FBQVMsV0FBSSxJQUFJbkosQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDa0wsU0FBUyxDQUFDakwsTUFBeEIsRUFBK0JELENBQUMsSUFBRSxDQUFsQyxFQUFvQztBQUFDLFlBQUkxQyxDQUFDLEdBQUM0TixTQUFTLENBQUN6RyxVQUFWLENBQXFCekUsQ0FBckIsQ0FBTjs7QUFBOEIsWUFBRzFDLENBQUMsS0FBRyxLQUFLbUgsVUFBTCxDQUFnQixDQUFoQixDQUFKLElBQXdCbkgsQ0FBQyxLQUFHLEtBQUttSCxVQUFMLENBQWdCLENBQWhCLENBQS9CLEVBQWtEO0FBQUMwRSxXQUFDLEdBQUNuSixDQUFGO0FBQUs7QUFBQzs7QUFBQSxVQUFJMkYsS0FBSyxHQUFDLENBQUN3RCxDQUFDLEtBQUcsQ0FBQyxDQUFMLEdBQU8yQixVQUFQLEdBQWtCLEVBQW5CLElBQXVCSSxTQUFTLENBQUN0RixLQUFWLENBQWdCLENBQWhCLEVBQWtCdUQsQ0FBQyxHQUFDLENBQXBCLENBQWpDO0FBQXdEMkIsZ0JBQVUsR0FBQyxDQUFDM0IsQ0FBQyxLQUFHLENBQUMsQ0FBTCxHQUFPMkIsVUFBUCxHQUFrQixFQUFuQixJQUF1QkksU0FBUyxDQUFDdEYsS0FBVixDQUFnQnVELENBQUMsR0FBQyxDQUFsQixDQUFsQzs7QUFBdUQsVUFBR3hELEtBQUssS0FBRyxFQUFYLEVBQWM7QUFBQ3lFLG1CQUFXLEdBQUMsSUFBWjtBQUFrQjs7QUFBQSxXQUFJLElBQUllLFFBQVEsR0FBQyxDQUFqQixFQUFtQkEsUUFBUSxHQUFDeEYsS0FBSyxDQUFDMUYsTUFBbEMsRUFBeUNrTCxRQUFRLElBQUUsQ0FBbkQsRUFBcUQ7QUFBQyxZQUFJN04sQ0FBQyxHQUFDcUksS0FBSyxDQUFDbEIsVUFBTixDQUFpQjBHLFFBQWpCLENBQU47O0FBQWlDLFlBQUc5SCxLQUFLLEtBQUdvRixRQUFSLElBQWtCbkwsQ0FBQyxLQUFHLEtBQUttSCxVQUFMLENBQWdCLENBQWhCLENBQXpCLEVBQTRDO0FBQUNwQixlQUFLLEdBQUNxRixXQUFOO0FBQW1CLFNBQWhFLE1BQW9FO0FBQUMsY0FBR3JGLEtBQUssS0FBR29GLFFBQVgsRUFBb0I7QUFBQ3BGLGlCQUFLLEdBQUNxRixXQUFOO0FBQW1COztBQUFBLGNBQUdwTCxDQUFDLEtBQUcsS0FBS21ILFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBSixJQUF3Qm5ILENBQUMsS0FBRyxLQUFLbUgsVUFBTCxDQUFnQixDQUFoQixDQUEvQixFQUFrRDtBQUFDLGdCQUFHcEIsS0FBSyxLQUFHcUYsV0FBWCxFQUF1QjtBQUFDLGtCQUFHckYsS0FBSyxLQUFHc0YsS0FBWCxFQUFpQjtBQUFDcUMsMEJBQVUsR0FBQ0csUUFBUSxHQUFDLENBQXBCO0FBQXVCOztBQUFBLGtCQUFJQyxLQUFLLEdBQUN6RixLQUFLLENBQUNDLEtBQU4sQ0FBWW1GLFVBQVosRUFBdUJDLFVBQVUsR0FBQyxDQUFsQyxDQUFWO0FBQStDLGtCQUFJNUcsS0FBSyxHQUFDdUIsS0FBSyxDQUFDQyxLQUFOLENBQVlvRixVQUFVLElBQUVBLFVBQVUsR0FBQ0csUUFBWCxJQUFxQnhGLEtBQUssQ0FBQ2xCLFVBQU4sQ0FBaUJ1RyxVQUFqQixNQUErQixJQUFJdkcsVUFBSixDQUFlLENBQWYsQ0FBcEQsR0FBc0UsQ0FBdEUsR0FBd0UsQ0FBMUUsQ0FBdEIsRUFBbUcwRyxRQUFuRyxDQUFWOztBQUF1SCxrQkFBR0MsS0FBSyxLQUFHLE1BQVgsRUFBa0I7QUFBQ1QsMEJBQVUsSUFBRSxJQUFaO0FBQWlCQSwwQkFBVSxJQUFFdkcsS0FBWjtBQUFtQixlQUF2RCxNQUE0RCxJQUFHZ0gsS0FBSyxLQUFHLElBQVgsRUFBZ0I7QUFBQ1IsaUNBQWlCLEdBQUN4RyxLQUFsQjtBQUF5QixlQUExQyxNQUErQyxJQUFHZ0gsS0FBSyxLQUFHLE9BQVgsRUFBbUI7QUFBQ1AsK0JBQWUsR0FBQ3pHLEtBQWhCO0FBQXVCLGVBQTNDLE1BQWdELElBQUdnSCxLQUFLLEtBQUcsT0FBWCxFQUFtQjtBQUFDbkIsNEJBQVksR0FBQ2hCLGFBQWEsQ0FBQzdFLEtBQUQsRUFBTzZGLFlBQVAsQ0FBMUI7QUFBK0NFLHFCQUFLLEdBQUNGLFlBQU47QUFBb0IsZUFBdkYsTUFBNEYsSUFBR21CLEtBQUssS0FBRyxrQkFBWCxFQUE4QjtBQUFDbEIsZ0NBQWdCLEdBQUNqQixhQUFhLENBQUM3RSxLQUFELEVBQU84RixnQkFBUCxDQUE5Qjs7QUFBdUQsb0JBQUc3SyxPQUFPLEtBQUcsQ0FBYixFQUFlO0FBQUNrRSw4QkFBWSxDQUFDbEUsT0FBRCxDQUFaO0FBQXNCQSx5QkFBTyxHQUFDaUIsVUFBVSxDQUFDLFlBQVU7QUFBQzBELDZCQUFTO0FBQUksbUJBQXpCLEVBQTBCa0csZ0JBQTFCLENBQWxCO0FBQStEO0FBQUM7QUFBQzs7QUFBQSxnQkFBRzdHLEtBQUssS0FBR3FGLFdBQVgsRUFBdUI7QUFBQyxrQkFBR2lDLFVBQVUsS0FBRyxFQUFoQixFQUFtQjtBQUFDeEMsMkJBQVcsR0FBQ3lDLGlCQUFaOztBQUE4QixvQkFBR0MsZUFBZSxLQUFHLEVBQXJCLEVBQXdCO0FBQUNBLGlDQUFlLEdBQUMsU0FBaEI7QUFBMkI7O0FBQUEsb0JBQUl6TSxLQUFLLEdBQUMsSUFBSThKLFlBQUosQ0FBaUIyQyxlQUFqQixFQUFpQztBQUFDalAsc0JBQUksRUFBQytPLFVBQVUsQ0FBQy9FLEtBQVgsQ0FBaUIsQ0FBakIsQ0FBTjtBQUEwQnVDLDZCQUFXLEVBQUN5QztBQUF0QyxpQkFBakMsQ0FBVjtBQUFxR2Isa0JBQUUsQ0FBQ3hDLGFBQUgsQ0FBaUJuSixLQUFqQjs7QUFBd0Isb0JBQUd5TSxlQUFlLEtBQUcsU0FBckIsRUFBK0I7QUFBQ3BCLHNCQUFJLENBQUNNLEVBQUQsRUFBSUEsRUFBRSxDQUFDbEssU0FBUCxFQUFpQnpCLEtBQWpCLENBQUo7QUFBNkI7O0FBQUEsb0JBQUdzTSxZQUFZLEtBQUdsQyxNQUFsQixFQUF5QjtBQUFDO0FBQVE7QUFBQzs7QUFBQW1DLHdCQUFVLEdBQUMsRUFBWDtBQUFjRSw2QkFBZSxHQUFDLEVBQWhCO0FBQW9COztBQUFBeEgsaUJBQUssR0FBQy9GLENBQUMsS0FBRyxLQUFLbUgsVUFBTCxDQUFnQixDQUFoQixDQUFKLEdBQXVCZ0UsUUFBdkIsR0FBZ0NDLFdBQXRDO0FBQW1ELFdBQTluQyxNQUFrb0M7QUFBQyxnQkFBR3JGLEtBQUssS0FBR3FGLFdBQVgsRUFBdUI7QUFBQ3FDLHdCQUFVLEdBQUNJLFFBQVg7QUFBb0I5SCxtQkFBSyxHQUFDc0YsS0FBTjtBQUFhOztBQUFBLGdCQUFHdEYsS0FBSyxLQUFHc0YsS0FBWCxFQUFpQjtBQUFDLGtCQUFHckwsQ0FBQyxLQUFHLElBQUltSCxVQUFKLENBQWUsQ0FBZixDQUFQLEVBQXlCO0FBQUN1RywwQkFBVSxHQUFDRyxRQUFRLEdBQUMsQ0FBcEI7QUFBc0I5SCxxQkFBSyxHQUFDdUYsV0FBTjtBQUFtQjtBQUFDLGFBQXRGLE1BQTJGLElBQUd2RixLQUFLLEtBQUd1RixXQUFYLEVBQXVCO0FBQUN2RixtQkFBSyxHQUFDd0YsS0FBTjtBQUFhO0FBQUM7QUFBQztBQUFDO0FBQUM7QUFBQyxHQUFoMkQ7O0FBQWkyRCxNQUFJL0UsUUFBUSxHQUFDLFNBQVNBLFFBQVQsR0FBbUI7QUFBQyxRQUFHNEcsWUFBWSxLQUFHbkMsSUFBZixJQUFxQm1DLFlBQVksS0FBR3BDLFVBQXZDLEVBQWtEO0FBQUNvQyxrQkFBWSxHQUFDckMsT0FBYjs7QUFBcUIsVUFBR2hKLE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFBQ2tFLG9CQUFZLENBQUNsRSxPQUFELENBQVo7QUFBc0JBLGVBQU8sR0FBQyxDQUFSO0FBQVc7O0FBQUFBLGFBQU8sR0FBQ2lCLFVBQVUsQ0FBQyxZQUFVO0FBQUMwRCxpQkFBUztBQUFJLE9BQXpCLEVBQTBCbUcsS0FBMUIsQ0FBbEI7QUFBbURBLFdBQUssR0FBQ2QsYUFBYSxDQUFDQyxJQUFJLENBQUNDLEdBQUwsQ0FBU1UsWUFBWSxHQUFDLEVBQXRCLEVBQXlCRSxLQUFLLEdBQUMsQ0FBL0IsQ0FBRCxDQUFuQjtBQUF1REosUUFBRSxDQUFDdkgsVUFBSCxHQUFjOEYsVUFBZDtBQUF5QixVQUFJbEssS0FBSyxHQUFDLElBQUk2SixLQUFKLENBQVUsT0FBVixDQUFWO0FBQTZCOEIsUUFBRSxDQUFDeEMsYUFBSCxDQUFpQm5KLEtBQWpCO0FBQXdCcUwsVUFBSSxDQUFDTSxFQUFELEVBQUlBLEVBQUUsQ0FBQ25LLE9BQVAsRUFBZXhCLEtBQWYsQ0FBSjtBQUEyQjtBQUFDLEdBQTlXOztBQUErVyxNQUFJaUMsS0FBSyxHQUFDLFNBQVNBLEtBQVQsR0FBZ0I7QUFBQ3FLLGdCQUFZLEdBQUNsQyxNQUFiOztBQUFvQixRQUFHaUMsY0FBYyxJQUFFM0osU0FBbkIsRUFBNkI7QUFBQzJKLG9CQUFjO0FBQUdBLG9CQUFjLEdBQUMzSixTQUFmO0FBQTBCOztBQUFBLFFBQUd6QixPQUFPLEtBQUcsQ0FBYixFQUFlO0FBQUNrRSxrQkFBWSxDQUFDbEUsT0FBRCxDQUFaO0FBQXNCQSxhQUFPLEdBQUMsQ0FBUjtBQUFXOztBQUFBMEssTUFBRSxDQUFDdkgsVUFBSCxHQUFjZ0csTUFBZDtBQUFzQixHQUEvTDs7QUFBZ00sTUFBSXhFLFNBQVMsR0FBQyxTQUFTQSxTQUFULEdBQW9CO0FBQUMzRSxXQUFPLEdBQUMsQ0FBUjs7QUFBVSxRQUFHcUwsWUFBWSxLQUFHckMsT0FBbEIsRUFBMEI7QUFBQyxVQUFHLENBQUMrQixXQUFELElBQWNLLGNBQWMsSUFBRTNKLFNBQWpDLEVBQTJDO0FBQUN1RyxrQkFBVSxDQUFDLElBQUkzRixLQUFKLENBQVUsd0JBQXNCd0ksZ0JBQXRCLEdBQXVDLDhCQUFqRCxDQUFELENBQVY7QUFBNkZPLHNCQUFjO0FBQUdBLHNCQUFjLEdBQUMzSixTQUFmO0FBQTBCLE9BQXBMLE1BQXdMO0FBQUNzSixtQkFBVyxHQUFDLEtBQVo7QUFBa0IvSyxlQUFPLEdBQUNpQixVQUFVLENBQUMsWUFBVTtBQUFDMEQsbUJBQVM7QUFBSSxTQUF6QixFQUEwQmtHLGdCQUExQixDQUFsQjtBQUErRDs7QUFBQTtBQUFROztBQUFBRSxlQUFXLEdBQUMsS0FBWjtBQUFrQi9LLFdBQU8sR0FBQ2lCLFVBQVUsQ0FBQyxZQUFVO0FBQUMwRCxlQUFTO0FBQUksS0FBekIsRUFBMEJrRyxnQkFBMUIsQ0FBbEI7QUFBOERRLGdCQUFZLEdBQUNwQyxVQUFiO0FBQXdCcUMsY0FBVSxHQUFDLEVBQVg7QUFBY0UsbUJBQWUsR0FBQyxFQUFoQjtBQUFtQkQscUJBQWlCLEdBQUN6QyxXQUFsQjtBQUE4QjJDLGNBQVUsR0FBQyxFQUFYO0FBQWNDLGNBQVUsR0FBQyxDQUFYO0FBQWFDLGNBQVUsR0FBQyxDQUFYO0FBQWEzSCxTQUFLLEdBQUNxRixXQUFOLENBQXZnQixDQUF5aEI7QUFDMXhQOztBQUNBLFFBQUkyQyxVQUFVLEdBQUNsSSxHQUFmOztBQUFtQixRQUFHQSxHQUFHLENBQUN5QyxLQUFKLENBQVUsQ0FBVixFQUFZLENBQVosTUFBaUIsT0FBakIsSUFBMEJ6QyxHQUFHLENBQUN5QyxLQUFKLENBQVUsQ0FBVixFQUFZLENBQVosTUFBaUIsT0FBOUMsRUFBc0Q7QUFBQyxVQUFHdUMsV0FBVyxLQUFHLEVBQWpCLEVBQW9CO0FBQUNrRCxrQkFBVSxJQUFFLENBQUNsSSxHQUFHLENBQUMxRixPQUFKLENBQVksR0FBWixNQUFtQixDQUFDLENBQXBCLEdBQXNCLEdBQXRCLEdBQTBCLEdBQTNCLElBQWdDLGNBQWhDLEdBQStDNk4sa0JBQWtCLENBQUNuRCxXQUFELENBQTdFO0FBQTRGO0FBQUM7O0FBQUEsUUFBSW9ELGNBQWMsR0FBQyxFQUFuQjtBQUFzQkEsa0JBQWMsQ0FBQyxRQUFELENBQWQsR0FBeUIsbUJBQXpCOztBQUE2QyxRQUFHOUYsT0FBTyxJQUFFM0UsU0FBWixFQUFzQjtBQUFDLFdBQUksSUFBSW9ELElBQVIsSUFBZ0J1QixPQUFoQixFQUF3QjtBQUFDLFlBQUdySSxNQUFNLENBQUNnRSxTQUFQLENBQWlCeUUsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTCxPQUFyQyxFQUE2Q3ZCLElBQTdDLENBQUgsRUFBc0Q7QUFBQ3FILHdCQUFjLENBQUNySCxJQUFELENBQWQsR0FBcUJ1QixPQUFPLENBQUN2QixJQUFELENBQTVCO0FBQW9DO0FBQUM7QUFBQzs7QUFBQSxRQUFHO0FBQUNzRyxlQUFTLENBQUN2SCxJQUFWLENBQWVaLEdBQWYsRUFBbUJxQixPQUFuQixFQUEyQkcsVUFBM0IsRUFBc0NDLFFBQXRDLEVBQStDdUgsVUFBL0MsRUFBMEQvSSxlQUExRCxFQUEwRWlKLGNBQTFFO0FBQTJGLEtBQS9GLENBQStGLE9BQU12TixLQUFOLEVBQVk7QUFBQ3FDLFdBQUs7QUFBRyxZQUFNckMsS0FBTjtBQUFhO0FBQUMsR0FGaXROOztBQUVodE4rTCxJQUFFLENBQUM1RyxHQUFILEdBQU9BLEdBQVA7QUFBVzRHLElBQUUsQ0FBQ3ZILFVBQUgsR0FBYzhGLFVBQWQ7QUFBeUJ5QixJQUFFLENBQUN6SCxlQUFILEdBQW1CQSxlQUFuQjtBQUFtQ3lILElBQUUsQ0FBQ0gsTUFBSCxHQUFVdkosS0FBVjtBQUFnQjJELFdBQVM7QUFBSTs7QUFBQTJGLG1CQUFtQixDQUFDdkksU0FBcEIsR0FBOEJoRSxNQUFNLENBQUN5SCxNQUFQLENBQWNzQyxXQUFXLENBQUMvRixTQUExQixDQUE5QjtBQUFtRXVJLG1CQUFtQixDQUFDdkksU0FBcEIsQ0FBOEJrSCxVQUE5QixHQUF5Q0EsVUFBekM7QUFBb0RxQixtQkFBbUIsQ0FBQ3ZJLFNBQXBCLENBQThCbUgsSUFBOUIsR0FBbUNBLElBQW5DO0FBQXdDb0IsbUJBQW1CLENBQUN2SSxTQUFwQixDQUE4Qm9ILE1BQTlCLEdBQXFDQSxNQUFyQzs7QUFBNENtQixtQkFBbUIsQ0FBQ3ZJLFNBQXBCLENBQThCZixLQUE5QixHQUFvQyxZQUFVO0FBQUMsT0FBS3VKLE1BQUw7QUFBZSxDQUE5RDs7QUFBK0RELG1CQUFtQixDQUFDckIsVUFBcEIsR0FBK0JBLFVBQS9CO0FBQTBDcUIsbUJBQW1CLENBQUNwQixJQUFwQixHQUF5QkEsSUFBekI7QUFBOEJvQixtQkFBbUIsQ0FBQ25CLE1BQXBCLEdBQTJCQSxNQUEzQjtBQUFrQ21CLG1CQUFtQixDQUFDdkksU0FBcEIsQ0FBOEJrQixlQUE5QixHQUE4Q3hCLFNBQTlDO0FBQXdELElBQUkwSyxRQUFRLEdBQUM3QixtQkFBYjtBQUFpQy9LLE9BQU8sQ0FBQ2pELE9BQVIsR0FBZ0I2UCxRQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ2hrQyw4Q0FBYTs7QUFBQTVNLE9BQU8sQ0FBQ0MsVUFBUixHQUFtQixJQUFuQjtBQUF3QkQsT0FBTyxDQUFDRCxjQUFSLEdBQXVCQSxjQUF2Qjs7QUFBc0MsU0FBU0EsY0FBVCxDQUF3QjhNLFFBQXhCLEVBQWlDO0FBQUM7QUFDN0c7QUFDQTtBQUNBO0FBQUMsR0FBQ2hRLE1BQU0sQ0FBQ2lRLHFCQUFQLElBQThCcEwsVUFBL0IsRUFBMkMsWUFBVTtBQUFDLFNBQUksSUFBSXFMLENBQUMsR0FBQzVQLFFBQVEsQ0FBQzZQLGdCQUFULENBQTBCLHVCQUExQixDQUFOLEVBQXlENUwsQ0FBQyxHQUFDMkwsQ0FBQyxDQUFDMUwsTUFBakUsRUFBd0VELENBQUMsRUFBekUsR0FBNkU7QUFBQzJMLE9BQUMsQ0FBQzNMLENBQUQsQ0FBRCxDQUFLNkwsVUFBTCxDQUFnQkMsV0FBaEIsQ0FBNEJILENBQUMsQ0FBQzNMLENBQUQsQ0FBN0I7QUFBbUM7O0FBQUEsUUFBR3lMLFFBQUgsRUFBWTtBQUFDQSxjQUFRO0FBQUk7QUFBQyxHQUFqTTtBQUFvTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJNLDhDQUFhOztBQUFBLElBQUl2USxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxzSUFBRCxDQUFsQzs7QUFBbUZ5RCxPQUFPLENBQUNDLFVBQVIsR0FBbUIsSUFBbkI7QUFBd0JELE9BQU8sQ0FBQ21OLFNBQVIsR0FBa0JBLFNBQWxCO0FBQTRCbk4sT0FBTyxDQUFDRixTQUFSLEdBQWtCQSxTQUFsQjtBQUE0QkUsT0FBTyxDQUFDb04sV0FBUixHQUFvQixLQUFLLENBQXpCOztBQUEyQixJQUFJNVEsUUFBUSxHQUFDRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4RkFBRCxDQUFSLENBQW5DOztBQUFrRixJQUFJRyxZQUFZLEdBQUNILG1CQUFPLENBQUMscUdBQUQsQ0FBeEI7QUFBd0Q7OztBQUFxQixJQUFJOFEsU0FBSjtBQUFjLElBQUlELFdBQUo7QUFBZ0JwTixPQUFPLENBQUNvTixXQUFSLEdBQW9CQSxXQUFwQjs7QUFBZ0MsU0FBU0QsU0FBVCxHQUFvQjtBQUFDLE1BQUdFLFNBQUgsRUFBYUEsU0FBUyxDQUFDNUwsS0FBVjtBQUFrQjRMLFdBQVMsR0FBQyxJQUFWO0FBQWdCOztBQUFBLFNBQVN2TixTQUFULENBQW1CeEMsV0FBbkIsRUFBK0JnUSxVQUEvQixFQUEwQy9CLEtBQTFDLEVBQWdEO0FBQUMsTUFBSWdDLFFBQVEsR0FBQ0QsVUFBVSxFQUF2QixDQUFELENBQTJCOztBQUN2akIsTUFBR0MsUUFBUSxLQUFHSCxXQUFYLElBQXdCLENBQUM3QixLQUE1QixFQUFrQztBQUFPdkwsU0FBTyxDQUFDb04sV0FBUixHQUFvQkEsV0FBVyxHQUFDRyxRQUFoQyxDQURtZixDQUMxYzs7QUFDbEZKLFdBQVM7QUFBRyxNQUFJNUksR0FBRyxHQUFDakgsV0FBVyxHQUFDLDBCQUFaLEdBQXVDOFAsV0FBL0M7QUFBMkRDLFdBQVMsR0FBQyxDQUFDLEdBQUUzUSxZQUFZLENBQUMyQyxxQkFBaEIsRUFBdUM7QUFBQ0MsUUFBSSxFQUFDaUYsR0FBTjtBQUFVOUQsV0FBTyxFQUFDLElBQWxCO0FBQXVCb0IsWUFBUSxFQUFDO0FBQWhDLEdBQXZDLENBQVY7QUFBcUZ3TCxXQUFTLENBQUM5TixrQkFBVixDQUE2QkMsS0FBSyxJQUFFO0FBQUMsUUFBR0EsS0FBSyxDQUFDeEMsSUFBTixDQUFXNkIsT0FBWCxDQUFtQixHQUFuQixNQUEwQixDQUFDLENBQTlCLEVBQWdDOztBQUFPLFFBQUc7QUFBQyxVQUFJMk8sT0FBTyxHQUFDdlEsSUFBSSxDQUFDQyxLQUFMLENBQVdzQyxLQUFLLENBQUN4QyxJQUFqQixDQUFaOztBQUFtQyxVQUFHd1EsT0FBTyxDQUFDQyxPQUFYLEVBQW1CO0FBQUM7QUFDblM7QUFDQSxTQUFDLEdBQUVqUixRQUFRLENBQUNPLE9BQVosRUFBcUJpQyxRQUFRLENBQUMwTyxJQUE5QixFQUFtQztBQUFDbEcscUJBQVcsRUFBQztBQUFiLFNBQW5DLEVBQWdFRSxJQUFoRSxDQUFxRWlHLE9BQU8sSUFBRTtBQUFDLGNBQUdBLE9BQU8sQ0FBQzFQLE1BQVIsS0FBaUIsR0FBcEIsRUFBd0I7QUFBQ2Usb0JBQVEsQ0FBQ0MsTUFBVDtBQUFtQjtBQUFDLFNBQTVIO0FBQStIO0FBQUMsS0FGd0csQ0FFeEcsT0FBTUMsR0FBTixFQUFVO0FBQUNDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjLDRDQUFkLEVBQTJERixHQUEzRDtBQUFpRTtBQUFDLEdBRmpEO0FBRW9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0poTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvcnVudGltZS9hbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihlLG4pe3JldHVybiBuPW58fHt9LG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQscil7dmFyIHM9bmV3IFhNTEh0dHBSZXF1ZXN0LG89W10sdT1bXSxpPXt9LGE9ZnVuY3Rpb24oKXtyZXR1cm57b2s6Mj09KHMuc3RhdHVzLzEwMHwwKSxzdGF0dXNUZXh0OnMuc3RhdHVzVGV4dCxzdGF0dXM6cy5zdGF0dXMsdXJsOnMucmVzcG9uc2VVUkwsdGV4dDpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUocy5yZXNwb25zZVRleHQpfSxqc29uOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShKU09OLnBhcnNlKHMucmVzcG9uc2VUZXh0KSl9LGJsb2I6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFtzLnJlc3BvbnNlXSkpfSxjbG9uZTphLGhlYWRlcnM6e2tleXM6ZnVuY3Rpb24oKXtyZXR1cm4gb30sZW50cmllczpmdW5jdGlvbigpe3JldHVybiB1fSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGlbZS50b0xvd2VyQ2FzZSgpXX0saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKClpbiBpfX19fTtmb3IodmFyIGwgaW4gcy5vcGVuKG4ubWV0aG9kfHxcImdldFwiLGUsITApLHMub25sb2FkPWZ1bmN0aW9uKCl7cy5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5yZXBsYWNlKC9eKC4qPyk6W15cXFNcXG5dKihbXFxzXFxTXSo/KSQvZ20sZnVuY3Rpb24oZSxuLHQpe28ucHVzaChuPW4udG9Mb3dlckNhc2UoKSksdS5wdXNoKFtuLHRdKSxpW25dPWlbbl0/aVtuXStcIixcIit0OnR9KSx0KGEoKSl9LHMub25lcnJvcj1yLHMud2l0aENyZWRlbnRpYWxzPVwiaW5jbHVkZVwiPT1uLmNyZWRlbnRpYWxzLG4uaGVhZGVycylzLnNldFJlcXVlc3RIZWFkZXIobCxuLmhlYWRlcnNbbF0pO3Muc2VuZChuLmJvZHl8fG51bGwpfSl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5mZXRjaC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX3VuZmV0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoXCIpKTt2YXIgX2V2ZW50U291cmNlUG9seWZpbGw9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ldmVudC1zb3VyY2UtcG9seWZpbGxcIikpO3ZhciBfZXZlbnRzb3VyY2U9cmVxdWlyZShcIi4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZVwiKTt2YXIgX29uRGVtYW5kRW50cmllc1V0aWxzPXJlcXVpcmUoXCIuL29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzXCIpO3ZhciBfZm91Yz1yZXF1aXJlKFwiLi9mb3VjXCIpOy8qIGdsb2JhbHMgX193ZWJwYWNrX2hhc2hfXyAqL2lmKCF3aW5kb3cuRXZlbnRTb3VyY2Upe3dpbmRvdy5FdmVudFNvdXJjZT1fZXZlbnRTb3VyY2VQb2x5ZmlsbC5kZWZhdWx0O312YXIgZGF0YT1KU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX05FWFRfREFUQV9fJykudGV4dENvbnRlbnQpO3Zhcnthc3NldFByZWZpeCxwYWdlfT1kYXRhO2Fzc2V0UHJlZml4PWFzc2V0UHJlZml4fHwnJzt2YXIgbW9zdFJlY2VudEhhc2g9bnVsbDsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi92YXIgY3VySGFzaD1fX3dlYnBhY2tfaGFzaF9fO3ZhciBob3RVcGRhdGVQYXRoPWFzc2V0UHJlZml4Kyhhc3NldFByZWZpeC5lbmRzV2l0aCgnLycpPycnOicvJykrJ19uZXh0L3N0YXRpYy93ZWJwYWNrLyc7Ly8gSXMgdGhlcmUgYSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgY29kZSBhdmFpbGFibGU/XG5mdW5jdGlvbiBpc1VwZGF0ZUF2YWlsYWJsZSgpey8vIF9fd2VicGFja19oYXNoX18gaXMgdGhlIGhhc2ggb2YgdGhlIGN1cnJlbnQgY29tcGlsYXRpb24uXG4vLyBJdCdzIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGJ5IFdlYnBhY2suXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9yZXR1cm4gbW9zdFJlY2VudEhhc2ghPT1fX3dlYnBhY2tfaGFzaF9fO30vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cbmZ1bmN0aW9uIGNhbkFwcGx5VXBkYXRlcygpe3JldHVybiBtb2R1bGUuaG90LnN0YXR1cygpPT09J2lkbGUnO30vLyBUaGlzIGZ1bmN0aW9uIHJlYWRzIGNvZGUgdXBkYXRlcyBvbiB0aGUgZmx5IGFuZCBoYXJkXG4vLyByZWxvYWRzIHRoZSBwYWdlIHdoZW4gaXQgaGFzIGNoYW5nZWQuXG5hc3luYyBmdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKXtpZighaXNVcGRhdGVBdmFpbGFibGUoKXx8IWNhbkFwcGx5VXBkYXRlcygpKXtyZXR1cm47fXRyeXt2YXIgcmVzPWF3YWl0KDAsX3VuZmV0Y2guZGVmYXVsdCkoXCJcIitob3RVcGRhdGVQYXRoK2N1ckhhc2grXCIuaG90LXVwZGF0ZS5qc29uXCIpO3ZhciBfZGF0YT1hd2FpdCByZXMuanNvbigpO3ZhciBjdXJQYWdlPXBhZ2U9PT0nLyc/J2luZGV4JzpwYWdlO3ZhciBwYWdlVXBkYXRlZD1PYmplY3Qua2V5cyhfZGF0YS5jKS5zb21lKG1vZD0+e3JldHVybiBtb2QuaW5kZXhPZihcInBhZ2VzXCIrKGN1clBhZ2Uuc3Vic3RyKDAsMSk9PT0nLyc/Y3VyUGFnZTpcIi9cIitjdXJQYWdlKSkhPT0tMXx8bW9kLmluZGV4T2YoKFwicGFnZXNcIisoY3VyUGFnZS5zdWJzdHIoMCwxKT09PScvJz9jdXJQYWdlOlwiL1wiK2N1clBhZ2UpKS5yZXBsYWNlKC9cXC8vZywnXFxcXCcpKSE9PS0xO30pO2lmKHBhZ2VVcGRhdGVkKXtkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7fWVsc2V7Y3VySGFzaD1tb3N0UmVjZW50SGFzaDt9fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgY2hlY2tpbmcgZm9yIHVwZGF0ZScsZXJyKTtkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7fX0oMCxfZXZlbnRzb3VyY2UuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKSh7cGF0aDphc3NldFByZWZpeCtcIi9fbmV4dC93ZWJwYWNrLWhtclwifSkuYWRkTWVzc2FnZUxpc3RlbmVyKGV2ZW50PT57aWYoZXZlbnQuZGF0YT09PSdcXHVEODNEXFx1REM5Mycpe3JldHVybjt9dHJ5e3ZhciBtZXNzYWdlPUpTT04ucGFyc2UoZXZlbnQuZGF0YSk7aWYobWVzc2FnZS5hY3Rpb249PT0nc3luYyd8fG1lc3NhZ2UuYWN0aW9uPT09J2J1aWx0Jyl7aWYoIW1lc3NhZ2UuaGFzaCl7cmV0dXJuO31tb3N0UmVjZW50SGFzaD1tZXNzYWdlLmhhc2g7dHJ5QXBwbHlVcGRhdGVzKCk7fWVsc2UgaWYobWVzc2FnZS5hY3Rpb249PT0ncmVsb2FkUGFnZScpe2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTt9fWNhdGNoKGV4KXtjb25zb2xlLndhcm4oJ0ludmFsaWQgSE1SIG1lc3NhZ2U6ICcrZXZlbnQuZGF0YSsnXFxuJytleCk7fX0pOygwLF9vbkRlbWFuZEVudHJpZXNVdGlscy5zZXR1cFBpbmcpKGFzc2V0UHJlZml4LCgpPT5wYWdlKTsoMCxfZm91Yy5kaXNwbGF5Q29udGVudCkoKTsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldEV2ZW50U291cmNlV3JhcHBlcj1nZXRFdmVudFNvdXJjZVdyYXBwZXI7dmFyIGV2ZW50Q2FsbGJhY2tzPVtdO2Z1bmN0aW9uIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKXt2YXIgc291cmNlO3ZhciBsYXN0QWN0aXZpdHk9bmV3IERhdGUoKTt2YXIgbGlzdGVuZXJzPVtdO2lmKCFvcHRpb25zLnRpbWVvdXQpe29wdGlvbnMudGltZW91dD0yMCoxMDAwO31pbml0KCk7dmFyIHRpbWVyPXNldEludGVydmFsKGZ1bmN0aW9uKCl7aWYobmV3IERhdGUoKS1sYXN0QWN0aXZpdHk+b3B0aW9ucy50aW1lb3V0KXtoYW5kbGVEaXNjb25uZWN0KCk7fX0sb3B0aW9ucy50aW1lb3V0LzIpO2Z1bmN0aW9uIGluaXQoKXtzb3VyY2U9bmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpO3NvdXJjZS5vbm9wZW49aGFuZGxlT25saW5lO3NvdXJjZS5vbmVycm9yPWhhbmRsZURpc2Nvbm5lY3Q7c291cmNlLm9ubWVzc2FnZT1oYW5kbGVNZXNzYWdlO31mdW5jdGlvbiBoYW5kbGVPbmxpbmUoKXtpZihvcHRpb25zLmxvZyljb25zb2xlLmxvZygnW0hNUl0gY29ubmVjdGVkJyk7bGFzdEFjdGl2aXR5PW5ldyBEYXRlKCk7fWZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpe2xhc3RBY3Rpdml0eT1uZXcgRGF0ZSgpO2Zvcih2YXIgaT0wO2k8bGlzdGVuZXJzLmxlbmd0aDtpKyspe2xpc3RlbmVyc1tpXShldmVudCk7fWlmKGV2ZW50LmRhdGEuaW5kZXhPZignYWN0aW9uJykhPT0tMSl7ZXZlbnRDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoZXZlbnQpKTt9fWZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKXtjbGVhckludGVydmFsKHRpbWVyKTtzb3VyY2UuY2xvc2UoKTtzZXRUaW1lb3V0KGluaXQsb3B0aW9ucy50aW1lb3V0KTt9cmV0dXJue2Nsb3NlOigpPT57Y2xlYXJJbnRlcnZhbCh0aW1lcik7c291cmNlLmNsb3NlKCk7fSxhZGRNZXNzYWdlTGlzdGVuZXI6ZnVuY3Rpb24gYWRkTWVzc2FnZUxpc3RlbmVyKGZuKXtsaXN0ZW5lcnMucHVzaChmbik7fX07fWZ1bmN0aW9uIGdldEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKXtpZighb3B0aW9ucy5vbmRlbWFuZCl7cmV0dXJue2FkZE1lc3NhZ2VMaXN0ZW5lcjpjYj0+e2V2ZW50Q2FsbGJhY2tzLnB1c2goY2IpO319O31yZXR1cm4gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3VuZmV0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoXCIpKTsvKiBlc2xpbnQtZGlzYWJsZSAqLyAvLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXG4vLyBBdmFpbGFibGUgdW5kZXIgTUlUIExpY2Vuc2UgKE1JVClcbi8vIE9ubHkgdHJpZXMgdG8gc3VwcG9ydCBJRTExIGFuZCBub3RoaW5nIGJlbG93XG52YXIgZG9jdW1lbnQ9d2luZG93LmRvY3VtZW50O3ZhciBSZXNwb25zZT13aW5kb3cuUmVzcG9uc2U7dmFyIFRleHREZWNvZGVyPXdpbmRvdy5UZXh0RGVjb2Rlcjt2YXIgVGV4dEVuY29kZXI9d2luZG93LlRleHRFbmNvZGVyO3ZhciBBYm9ydENvbnRyb2xsZXI9d2luZG93LkFib3J0Q29udHJvbGxlcjtpZihBYm9ydENvbnRyb2xsZXI9PXVuZGVmaW5lZCl7QWJvcnRDb250cm9sbGVyPWZ1bmN0aW9uIEFib3J0Q29udHJvbGxlcigpe3RoaXMuc2lnbmFsPW51bGw7dGhpcy5hYm9ydD1mdW5jdGlvbigpe307fTt9ZnVuY3Rpb24gVGV4dERlY29kZXJQb2x5ZmlsbCgpe3RoaXMuYml0c05lZWRlZD0wO3RoaXMuY29kZVBvaW50PTA7fVRleHREZWNvZGVyUG9seWZpbGwucHJvdG90eXBlLmRlY29kZT1mdW5jdGlvbihvY3RldHMpe2Z1bmN0aW9uIHZhbGlkKGNvZGVQb2ludCxzaGlmdCxvY3RldHNDb3VudCl7aWYob2N0ZXRzQ291bnQ9PT0xKXtyZXR1cm4gY29kZVBvaW50Pj0weDAwODA+PnNoaWZ0JiZjb2RlUG9pbnQ8PHNoaWZ0PD0weDA3ZmY7fWlmKG9jdGV0c0NvdW50PT09Mil7cmV0dXJuIGNvZGVQb2ludD49MHgwODAwPj5zaGlmdCYmY29kZVBvaW50PDxzaGlmdDw9MHhkN2ZmfHxjb2RlUG9pbnQ+PTB4ZTAwMD4+c2hpZnQmJmNvZGVQb2ludDw8c2hpZnQ8PTB4ZmZmZjt9aWYob2N0ZXRzQ291bnQ9PT0zKXtyZXR1cm4gY29kZVBvaW50Pj0weDAxMDAwMD4+c2hpZnQmJmNvZGVQb2ludDw8c2hpZnQ8PTB4MTBmZmZmO310aHJvdyBuZXcgRXJyb3IoKTt9ZnVuY3Rpb24gb2N0ZXRzQ291bnQoYml0c05lZWRlZCxjb2RlUG9pbnQpe2lmKGJpdHNOZWVkZWQ9PT02KjEpe3JldHVybiBjb2RlUG9pbnQ+PjY+MTU/Mzpjb2RlUG9pbnQ+MzE/MjoxO31pZihiaXRzTmVlZGVkPT09NioyKXtyZXR1cm4gY29kZVBvaW50PjE1PzM6Mjt9aWYoYml0c05lZWRlZD09PTYqMyl7cmV0dXJuIDM7fXRocm93IG5ldyBFcnJvcigpO312YXIgUkVQTEFDRVI9MHhmZmZkO3ZhciBzdHJpbmc9Jyc7dmFyIGJpdHNOZWVkZWQ9dGhpcy5iaXRzTmVlZGVkO3ZhciBjb2RlUG9pbnQ9dGhpcy5jb2RlUG9pbnQ7Zm9yKHZhciBpPTA7aTxvY3RldHMubGVuZ3RoO2krPTEpe3ZhciBvY3RldD1vY3RldHNbaV07aWYoYml0c05lZWRlZCE9PTApe2lmKG9jdGV0PDEyOHx8b2N0ZXQ+MTkxfHwhdmFsaWQoY29kZVBvaW50PDw2fG9jdGV0JjYzLGJpdHNOZWVkZWQtNixvY3RldHNDb3VudChiaXRzTmVlZGVkLGNvZGVQb2ludCkpKXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PVJFUExBQ0VSO3N0cmluZys9U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO319aWYoYml0c05lZWRlZD09PTApe2lmKG9jdGV0Pj0wJiZvY3RldDw9MTI3KXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PW9jdGV0O31lbHNlIGlmKG9jdGV0Pj0xOTImJm9jdGV0PD0yMjMpe2JpdHNOZWVkZWQ9NioxO2NvZGVQb2ludD1vY3RldCYzMTt9ZWxzZSBpZihvY3RldD49MjI0JiZvY3RldDw9MjM5KXtiaXRzTmVlZGVkPTYqMjtjb2RlUG9pbnQ9b2N0ZXQmMTU7fWVsc2UgaWYob2N0ZXQ+PTI0MCYmb2N0ZXQ8PTI0Nyl7Yml0c05lZWRlZD02KjM7Y29kZVBvaW50PW9jdGV0Jjc7fWVsc2V7Yml0c05lZWRlZD0wO2NvZGVQb2ludD1SRVBMQUNFUjt9aWYoYml0c05lZWRlZCE9PTAmJiF2YWxpZChjb2RlUG9pbnQsYml0c05lZWRlZCxvY3RldHNDb3VudChiaXRzTmVlZGVkLGNvZGVQb2ludCkpKXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PVJFUExBQ0VSO319ZWxzZXtiaXRzTmVlZGVkLT02O2NvZGVQb2ludD1jb2RlUG9pbnQ8PDZ8b2N0ZXQmNjM7fWlmKGJpdHNOZWVkZWQ9PT0wKXtpZihjb2RlUG9pbnQ8PTB4ZmZmZil7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7fWVsc2V7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZDgwMCsoY29kZVBvaW50LTB4ZmZmZi0xPj4xMCkpO3N0cmluZys9U3RyaW5nLmZyb21DaGFyQ29kZSgweGRjMDArKGNvZGVQb2ludC0weGZmZmYtMSYweDNmZikpO319fXRoaXMuYml0c05lZWRlZD1iaXRzTmVlZGVkO3RoaXMuY29kZVBvaW50PWNvZGVQb2ludDtyZXR1cm4gc3RyaW5nO307Ly8gRmlyZWZveCA8IDM4IHRocm93cyBhbiBlcnJvciB3aXRoIHN0cmVhbSBvcHRpb25cbnZhciBzdXBwb3J0c1N0cmVhbU9wdGlvbj1mdW5jdGlvbiBzdXBwb3J0c1N0cmVhbU9wdGlvbigpe3RyeXtyZXR1cm4gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSgndGVzdCcpLHtzdHJlYW06dHJ1ZX0pPT09J3Rlc3QnO31jYXRjaChlcnJvcil7Y29uc29sZS5sb2coZXJyb3IpO31yZXR1cm4gZmFsc2U7fTsvLyBJRSwgRWRnZVxuaWYoVGV4dERlY29kZXI9PXVuZGVmaW5lZHx8VGV4dEVuY29kZXI9PXVuZGVmaW5lZHx8IXN1cHBvcnRzU3RyZWFtT3B0aW9uKCkpe1RleHREZWNvZGVyPVRleHREZWNvZGVyUG9seWZpbGw7fXZhciBrPWZ1bmN0aW9uIGsoKXt9O2Z1bmN0aW9uIFhIUldyYXBwZXIoeGhyKXt0aGlzLndpdGhDcmVkZW50aWFscz1mYWxzZTt0aGlzLnJlc3BvbnNlVHlwZT0nJzt0aGlzLnJlYWR5U3RhdGU9MDt0aGlzLnN0YXR1cz0wO3RoaXMuc3RhdHVzVGV4dD0nJzt0aGlzLnJlc3BvbnNlVGV4dD0nJzt0aGlzLm9ucHJvZ3Jlc3M9azt0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZT1rO3RoaXMuX2NvbnRlbnRUeXBlPScnO3RoaXMuX3hocj14aHI7dGhpcy5fc2VuZFRpbWVvdXQ9MDt0aGlzLl9hYm9ydD1rO31YSFJXcmFwcGVyLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKG1ldGhvZCx1cmwpe3RoaXMuX2Fib3J0KHRydWUpO3ZhciB0aGF0PXRoaXM7dmFyIHhocj10aGlzLl94aHI7dmFyIHN0YXRlPTE7dmFyIHRpbWVvdXQ9MDt0aGlzLl9hYm9ydD1mdW5jdGlvbihzaWxlbnQpe2lmKHRoYXQuX3NlbmRUaW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KTt0aGF0Ll9zZW5kVGltZW91dD0wO31pZihzdGF0ZT09PTF8fHN0YXRlPT09Mnx8c3RhdGU9PT0zKXtzdGF0ZT00O3hoci5vbmxvYWQ9azt4aHIub25lcnJvcj1rO3hoci5vbmFib3J0PWs7eGhyLm9ucHJvZ3Jlc3M9azt4aHIub25yZWFkeXN0YXRlY2hhbmdlPWs7Ly8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbi8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbnhoci5hYm9ydCgpO2lmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD0wO31pZighc2lsZW50KXt0aGF0LnJlYWR5U3RhdGU9NDt0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO319c3RhdGU9MDt9O3ZhciBvblN0YXJ0PWZ1bmN0aW9uIG9uU3RhcnQoKXtpZihzdGF0ZT09PTEpey8vIHN0YXRlID0gMjtcbnZhciBzdGF0dXM9MDt2YXIgc3RhdHVzVGV4dD0nJzt2YXIgY29udGVudFR5cGU9dW5kZWZpbmVkO2lmKCEoJ2NvbnRlbnRUeXBlJ2luIHhocikpe3RyeXtzdGF0dXM9eGhyLnN0YXR1cztzdGF0dXNUZXh0PXhoci5zdGF0dXNUZXh0O2NvbnRlbnRUeXBlPXhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7fWNhdGNoKGVycm9yKXsvLyBJRSA8IDEwIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyIHx8IHhoci5yZWFkeVN0YXRlID09PSAzXG4vLyBPcGVyYSA8IDExIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyXG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkxMjFcbnN0YXR1cz0wO3N0YXR1c1RleHQ9Jyc7Y29udGVudFR5cGU9dW5kZWZpbmVkOy8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD03Nzg1NFxufX1lbHNle3N0YXR1cz0yMDA7c3RhdHVzVGV4dD0nT0snO2NvbnRlbnRUeXBlPXhoci5jb250ZW50VHlwZTt9aWYoc3RhdHVzIT09MCl7c3RhdGU9Mjt0aGF0LnJlYWR5U3RhdGU9Mjt0aGF0LnN0YXR1cz1zdGF0dXM7dGhhdC5zdGF0dXNUZXh0PXN0YXR1c1RleHQ7dGhhdC5fY29udGVudFR5cGU9Y29udGVudFR5cGU7dGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTt9fX07dmFyIG9uUHJvZ3Jlc3M9ZnVuY3Rpb24gb25Qcm9ncmVzcygpe29uU3RhcnQoKTtpZihzdGF0ZT09PTJ8fHN0YXRlPT09Myl7c3RhdGU9Mzt2YXIgcmVzcG9uc2VUZXh0PScnO3RyeXtyZXNwb25zZVRleHQ9eGhyLnJlc3BvbnNlVGV4dDt9Y2F0Y2goZXJyb3Ipey8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3Rcbn10aGF0LnJlYWR5U3RhdGU9Mzt0aGF0LnJlc3BvbnNlVGV4dD1yZXNwb25zZVRleHQ7dGhhdC5vbnByb2dyZXNzKCk7fX07dmFyIG9uRmluaXNoPWZ1bmN0aW9uIG9uRmluaXNoKCl7Ly8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxuLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXCJcbm9uUHJvZ3Jlc3MoKTtpZihzdGF0ZT09PTF8fHN0YXRlPT09Mnx8c3RhdGU9PT0zKXtzdGF0ZT00O2lmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD0wO310aGF0LnJlYWR5U3RhdGU9NDt0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO319O3ZhciBvblJlYWR5U3RhdGVDaGFuZ2U9ZnVuY3Rpb24gb25SZWFkeVN0YXRlQ2hhbmdlKCl7aWYoeGhyIT11bmRlZmluZWQpey8vIE9wZXJhIDEyXG5pZih4aHIucmVhZHlTdGF0ZT09PTQpe29uRmluaXNoKCk7fWVsc2UgaWYoeGhyLnJlYWR5U3RhdGU9PT0zKXtvblByb2dyZXNzKCk7fWVsc2UgaWYoeGhyLnJlYWR5U3RhdGU9PT0yKXtvblN0YXJ0KCk7fX19O3ZhciBvblRpbWVvdXQ9ZnVuY3Rpb24gb25UaW1lb3V0KCl7dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSw1MDApO2lmKHhoci5yZWFkeVN0YXRlPT09Myl7b25Qcm9ncmVzcygpO319Oy8vIFhEb21haW5SZXF1ZXN0I2Fib3J0IHJlbW92ZXMgb25wcm9ncmVzcywgb25lcnJvciwgb25sb2FkXG54aHIub25sb2FkPW9uRmluaXNoO3hoci5vbmVycm9yPW9uRmluaXNoOy8vIGltcHJvcGVyIGZpeCB0byBtYXRjaCBGaXJlZm94IGJlaGF2aW91ciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XG4vLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XG4vLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODAyMDBcbi8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcbi8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xueGhyLm9uYWJvcnQ9b25GaW5pc2g7Ly8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzXG5pZighKCdzZW5kQXNCaW5hcnknaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSYmISgnbW96QW5vbidpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpKXt4aHIub25wcm9ncmVzcz1vblByb2dyZXNzO30vLyBJRSA4IC0gOSAoWE1MSFRUUFJlcXVlc3QpXG4vLyBPcGVyYSA8IDEyXG4vLyBGaXJlZm94IDwgMy41XG4vLyBGaXJlZm94IDMuNSAtIDMuNiAtID8gPCA5LjBcbi8vIG9ucHJvZ3Jlc3MgaXMgbm90IGZpcmVkIHNvbWV0aW1lcyBvciBkZWxheWVkXG4vLyBzZWUgYWxzbyAjNjRcbnhoci5vbnJlYWR5c3RhdGVjaGFuZ2U9b25SZWFkeVN0YXRlQ2hhbmdlO2lmKCdjb250ZW50VHlwZSdpbiB4aHIpe3VybCs9KHVybC5pbmRleE9mKCc/Jyk9PT0tMT8nPyc6JyYnKSsncGFkZGluZz10cnVlJzt9eGhyLm9wZW4obWV0aG9kLHVybCx0cnVlKTtpZigncmVhZHlTdGF0ZSdpbiB4aHIpey8vIHdvcmthcm91bmQgZm9yIE9wZXJhIDEyIGlzc3VlIHdpdGggXCJwcm9ncmVzc1wiIGV2ZW50c1xuLy8gIzkxXG50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LDApO319O1hIUldyYXBwZXIucHJvdG90eXBlLmFib3J0PWZ1bmN0aW9uKCl7dGhpcy5fYWJvcnQoZmFsc2UpO307WEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXI9ZnVuY3Rpb24obmFtZSl7cmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlO307WEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlcj1mdW5jdGlvbihuYW1lLHZhbHVlKXt2YXIgeGhyPXRoaXMuX3hocjtpZignc2V0UmVxdWVzdEhlYWRlcidpbiB4aHIpe3hoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsdmFsdWUpO319O1hIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIT11bmRlZmluZWQ/dGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpOicnO307WEhSV3JhcHBlci5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbigpey8vIGxvYWRpbmcgaW5kaWNhdG9yIGluIFNhZmFyaSA8ID8gKDYpLCBDaHJvbWUgPCAxNCwgRmlyZWZveFxuaWYoISgnb250aW1lb3V0J2luIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkmJmRvY3VtZW50IT11bmRlZmluZWQmJmRvY3VtZW50LnJlYWR5U3RhdGUhPXVuZGVmaW5lZCYmZG9jdW1lbnQucmVhZHlTdGF0ZSE9PSdjb21wbGV0ZScpe3ZhciB0aGF0PXRoaXM7dGhhdC5fc2VuZFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuX3NlbmRUaW1lb3V0PTA7dGhhdC5zZW5kKCk7fSw0KTtyZXR1cm47fXZhciB4aHI9dGhpcy5feGhyOy8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxueGhyLndpdGhDcmVkZW50aWFscz10aGlzLndpdGhDcmVkZW50aWFsczt4aHIucmVzcG9uc2VUeXBlPXRoaXMucmVzcG9uc2VUeXBlO3RyeXsvLyB4aHIuc2VuZCgpOyB0aHJvd3MgXCJOb3QgZW5vdWdoIGFyZ3VtZW50c1wiIGluIEZpcmVmb3ggMy4wXG54aHIuc2VuZCh1bmRlZmluZWQpO31jYXRjaChlcnJvcjEpey8vIFNhZmFyaSA1LjEuNywgT3BlcmEgMTJcbnRocm93IGVycm9yMTt9fTtmdW5jdGlvbiB0b0xvd2VyQ2FzZShuYW1lKXtyZXR1cm4gbmFtZS5yZXBsYWNlKC9bQS1aXS9nLGZ1bmN0aW9uKGMpe3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMuY2hhckNvZGVBdCgwKSsweDIwKTt9KTt9ZnVuY3Rpb24gSGVhZGVyc1BvbHlmaWxsKGFsbCl7Ly8gR2V0IGhlYWRlcnM6IGltcGxlbWVudGVkIGFjY29yZGluZyB0byBtb3ppbGxhJ3MgZXhhbXBsZSBjb2RlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzI0V4YW1wbGVcbnZhciBtYXA9T2JqZWN0LmNyZWF0ZShudWxsKTt2YXIgYXJyYXk9YWxsLnNwbGl0KCdcXHJcXG4nKTtmb3IodmFyIGk9MDtpPGFycmF5Lmxlbmd0aDtpKz0xKXt2YXIgbGluZT1hcnJheVtpXTt2YXIgcGFydHM9bGluZS5zcGxpdCgnOiAnKTt2YXIgbmFtZT1wYXJ0cy5zaGlmdCgpO3ZhciB2YWx1ZT1wYXJ0cy5qb2luKCc6ICcpO21hcFt0b0xvd2VyQ2FzZShuYW1lKV09dmFsdWU7fXRoaXMuX21hcD1tYXA7fUhlYWRlcnNQb2x5ZmlsbC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKG5hbWUpe3JldHVybiB0aGlzLl9tYXBbdG9Mb3dlckNhc2UobmFtZSldO307ZnVuY3Rpb24gWEhSVHJhbnNwb3J0KCl7fVhIUlRyYW5zcG9ydC5wcm90b3R5cGUub3Blbj1mdW5jdGlvbih4aHIsb25TdGFydENhbGxiYWNrLG9uUHJvZ3Jlc3NDYWxsYmFjayxvbkZpbmlzaENhbGxiYWNrLHVybCx3aXRoQ3JlZGVudGlhbHMsaGVhZGVycyl7eGhyLm9wZW4oJ0dFVCcsdXJsKTt2YXIgb2Zmc2V0PTA7eGhyLm9ucHJvZ3Jlc3M9ZnVuY3Rpb24oKXt2YXIgcmVzcG9uc2VUZXh0PXhoci5yZXNwb25zZVRleHQ7dmFyIGNodW5rPXJlc3BvbnNlVGV4dC5zbGljZShvZmZzZXQpO29mZnNldCs9Y2h1bmsubGVuZ3RoO29uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuayk7fTt4aHIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoeGhyLnJlYWR5U3RhdGU9PT0yKXt2YXIgc3RhdHVzPXhoci5zdGF0dXM7dmFyIHN0YXR1c1RleHQ9eGhyLnN0YXR1c1RleHQ7dmFyIGNvbnRlbnRUeXBlPXhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7dmFyIGhlYWRlcnM9eGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO29uU3RhcnRDYWxsYmFjayhzdGF0dXMsc3RhdHVzVGV4dCxjb250ZW50VHlwZSxuZXcgSGVhZGVyc1BvbHlmaWxsKGhlYWRlcnMpLGZ1bmN0aW9uKCl7eGhyLmFib3J0KCk7fSk7fWVsc2UgaWYoeGhyLnJlYWR5U3RhdGU9PT00KXtvbkZpbmlzaENhbGxiYWNrKCk7fX07eGhyLndpdGhDcmVkZW50aWFscz13aXRoQ3JlZGVudGlhbHM7eGhyLnJlc3BvbnNlVHlwZT0ndGV4dCc7Zm9yKHZhciBuYW1lIGluIGhlYWRlcnMpe2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLG5hbWUpKXt4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLGhlYWRlcnNbbmFtZV0pO319eGhyLnNlbmQoKTt9O2Z1bmN0aW9uIEhlYWRlcnNXcmFwcGVyKGhlYWRlcnMpe3RoaXMuX2hlYWRlcnM9aGVhZGVyczt9SGVhZGVyc1dyYXBwZXIucHJvdG90eXBlLmdldD1mdW5jdGlvbihuYW1lKXtyZXR1cm4gdGhpcy5faGVhZGVycy5nZXQobmFtZSk7fTtmdW5jdGlvbiBGZXRjaFRyYW5zcG9ydCgpe31GZXRjaFRyYW5zcG9ydC5wcm90b3R5cGUub3Blbj1mdW5jdGlvbih4aHIsb25TdGFydENhbGxiYWNrLG9uUHJvZ3Jlc3NDYWxsYmFjayxvbkZpbmlzaENhbGxiYWNrLHVybCx3aXRoQ3JlZGVudGlhbHMsaGVhZGVycyl7dmFyIGNvbnRyb2xsZXI9bmV3IEFib3J0Q29udHJvbGxlcigpO3ZhciBzaWduYWw9Y29udHJvbGxlci5zaWduYWw7Ly8gc2VlICMxMjBcbnZhciB0ZXh0RGVjb2Rlcj1uZXcgVGV4dERlY29kZXIoKTsoMCxfdW5mZXRjaC5kZWZhdWx0KSh1cmwse2hlYWRlcnM6aGVhZGVycyxjcmVkZW50aWFsczp3aXRoQ3JlZGVudGlhbHM/J2luY2x1ZGUnOidzYW1lLW9yaWdpbicsc2lnbmFsOnNpZ25hbCxjYWNoZTonbm8tc3RvcmUnfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7dmFyIHJlYWRlcj1yZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO29uU3RhcnRDYWxsYmFjayhyZXNwb25zZS5zdGF0dXMscmVzcG9uc2Uuc3RhdHVzVGV4dCxyZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJyksbmV3IEhlYWRlcnNXcmFwcGVyKHJlc3BvbnNlLmhlYWRlcnMpLGZ1bmN0aW9uKCl7Y29udHJvbGxlci5hYm9ydCgpO3JlYWRlci5jYW5jZWwoKTt9KTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe3ZhciByZWFkTmV4dENodW5rPWZ1bmN0aW9uIHJlYWROZXh0Q2h1bmsoKXtyZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtpZihyZXN1bHQuZG9uZSl7Ly8gTm90ZTogYnl0ZXMgaW4gdGV4dERlY29kZXIgYXJlIGlnbm9yZWRcbnJlc29sdmUodW5kZWZpbmVkKTt9ZWxzZXt2YXIgY2h1bms9dGV4dERlY29kZXIuZGVjb2RlKHJlc3VsdC52YWx1ZSx7c3RyZWFtOnRydWV9KTtvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO3JlYWROZXh0Q2h1bmsoKTt9fSlbJ2NhdGNoJ10oZnVuY3Rpb24oZXJyb3Ipe3JlamVjdChlcnJvcik7fSk7fTtyZWFkTmV4dENodW5rKCk7fSk7fSkudGhlbihmdW5jdGlvbihyZXN1bHQpe29uRmluaXNoQ2FsbGJhY2soKTtyZXR1cm4gcmVzdWx0O30sZnVuY3Rpb24oZXJyb3Ipe29uRmluaXNoQ2FsbGJhY2soKTtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO30pO307ZnVuY3Rpb24gRXZlbnRUYXJnZXQoKXt0aGlzLl9saXN0ZW5lcnM9T2JqZWN0LmNyZWF0ZShudWxsKTt9ZnVuY3Rpb24gdGhyb3dFcnJvcihlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZTt9LDApO31FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihldmVudCl7ZXZlbnQudGFyZ2V0PXRoaXM7dmFyIHR5cGVMaXN0ZW5lcnM9dGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdO2lmKHR5cGVMaXN0ZW5lcnMhPXVuZGVmaW5lZCl7dmFyIGxlbmd0aD10eXBlTGlzdGVuZXJzLmxlbmd0aDtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKz0xKXt2YXIgbGlzdGVuZXI9dHlwZUxpc3RlbmVyc1tpXTt0cnl7aWYodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50PT09J2Z1bmN0aW9uJyl7bGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpO31lbHNle2xpc3RlbmVyLmNhbGwodGhpcyxldmVudCk7fX1jYXRjaChlKXt0aHJvd0Vycm9yKGUpO319fX07RXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24odHlwZSxsaXN0ZW5lcil7dHlwZT1TdHJpbmcodHlwZSk7dmFyIGxpc3RlbmVycz10aGlzLl9saXN0ZW5lcnM7dmFyIHR5cGVMaXN0ZW5lcnM9bGlzdGVuZXJzW3R5cGVdO2lmKHR5cGVMaXN0ZW5lcnM9PXVuZGVmaW5lZCl7dHlwZUxpc3RlbmVycz1bXTtsaXN0ZW5lcnNbdHlwZV09dHlwZUxpc3RlbmVyczt9dmFyIGZvdW5kPWZhbHNlO2Zvcih2YXIgaT0wO2k8dHlwZUxpc3RlbmVycy5sZW5ndGg7aSs9MSl7aWYodHlwZUxpc3RlbmVyc1tpXT09PWxpc3RlbmVyKXtmb3VuZD10cnVlO319aWYoIWZvdW5kKXt0eXBlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO319O0V2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe3R5cGU9U3RyaW5nKHR5cGUpO3ZhciBsaXN0ZW5lcnM9dGhpcy5fbGlzdGVuZXJzO3ZhciB0eXBlTGlzdGVuZXJzPWxpc3RlbmVyc1t0eXBlXTtpZih0eXBlTGlzdGVuZXJzIT11bmRlZmluZWQpe3ZhciBmaWx0ZXJlZD1bXTtmb3IodmFyIGk9MDtpPHR5cGVMaXN0ZW5lcnMubGVuZ3RoO2krPTEpe2lmKHR5cGVMaXN0ZW5lcnNbaV0hPT1saXN0ZW5lcil7ZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKTt9fWlmKGZpbHRlcmVkLmxlbmd0aD09PTApe2RlbGV0ZSBsaXN0ZW5lcnNbdHlwZV07fWVsc2V7bGlzdGVuZXJzW3R5cGVdPWZpbHRlcmVkO319fTtmdW5jdGlvbiBFdmVudCh0eXBlKXt0aGlzLnR5cGU9dHlwZTt0aGlzLnRhcmdldD11bmRlZmluZWQ7fWZ1bmN0aW9uIE1lc3NhZ2VFdmVudCh0eXBlLG9wdGlvbnMpe0V2ZW50LmNhbGwodGhpcyx0eXBlKTt0aGlzLmRhdGE9b3B0aW9ucy5kYXRhO3RoaXMubGFzdEV2ZW50SWQ9b3B0aW9ucy5sYXN0RXZlbnRJZDt9TWVzc2FnZUV2ZW50LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7ZnVuY3Rpb24gQ29ubmVjdGlvbkV2ZW50KHR5cGUsb3B0aW9ucyl7RXZlbnQuY2FsbCh0aGlzLHR5cGUpO3RoaXMuc3RhdHVzPW9wdGlvbnMuc3RhdHVzO3RoaXMuc3RhdHVzVGV4dD1vcHRpb25zLnN0YXR1c1RleHQ7dGhpcy5oZWFkZXJzPW9wdGlvbnMuaGVhZGVyczt9Q29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7dmFyIFdBSVRJTkc9LTE7dmFyIENPTk5FQ1RJTkc9MDt2YXIgT1BFTj0xO3ZhciBDTE9TRUQ9Mjt2YXIgQUZURVJfQ1I9LTE7dmFyIEZJRUxEX1NUQVJUPTA7dmFyIEZJRUxEPTE7dmFyIFZBTFVFX1NUQVJUPTI7dmFyIFZBTFVFPTM7dmFyIGNvbnRlbnRUeXBlUmVnRXhwPS9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2k7dmFyIE1JTklNVU1fRFVSQVRJT049MTAwMDt2YXIgTUFYSU1VTV9EVVJBVElPTj0xODAwMDAwMDt2YXIgcGFyc2VEdXJhdGlvbj1mdW5jdGlvbiBwYXJzZUR1cmF0aW9uKHZhbHVlLGRlZil7dmFyIG49cGFyc2VJbnQodmFsdWUsMTApO2lmKG4hPT1uKXtuPWRlZjt9cmV0dXJuIGNsYW1wRHVyYXRpb24obik7fTt2YXIgY2xhbXBEdXJhdGlvbj1mdW5jdGlvbiBjbGFtcER1cmF0aW9uKG4pe3JldHVybiBNYXRoLm1pbihNYXRoLm1heChuLE1JTklNVU1fRFVSQVRJT04pLE1BWElNVU1fRFVSQVRJT04pO307dmFyIGZpcmU9ZnVuY3Rpb24gZmlyZSh0aGF0LGYsZXZlbnQpe3RyeXtpZih0eXBlb2YgZj09PSdmdW5jdGlvbicpe2YuY2FsbCh0aGF0LGV2ZW50KTt9fWNhdGNoKGUpe3Rocm93RXJyb3IoZSk7fX07ZnVuY3Rpb24gRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmwsb3B0aW9ucyl7RXZlbnRUYXJnZXQuY2FsbCh0aGlzKTt0aGlzLm9ub3Blbj11bmRlZmluZWQ7dGhpcy5vbm1lc3NhZ2U9dW5kZWZpbmVkO3RoaXMub25lcnJvcj11bmRlZmluZWQ7dGhpcy51cmw9dW5kZWZpbmVkO3RoaXMucmVhZHlTdGF0ZT11bmRlZmluZWQ7dGhpcy53aXRoQ3JlZGVudGlhbHM9dW5kZWZpbmVkO3RoaXMuX2Nsb3NlPXVuZGVmaW5lZDtzdGFydCh0aGlzLHVybCxvcHRpb25zKTt9dmFyIGlzRmV0Y2hTdXBwb3J0ZWQ9X3VuZmV0Y2guZGVmYXVsdCE9dW5kZWZpbmVkJiZSZXNwb25zZSE9dW5kZWZpbmVkJiYnYm9keSdpbiBSZXNwb25zZS5wcm90b3R5cGU7ZnVuY3Rpb24gc3RhcnQoZXMsdXJsLG9wdGlvbnMpe3VybD1TdHJpbmcodXJsKTt2YXIgd2l0aENyZWRlbnRpYWxzPW9wdGlvbnMhPXVuZGVmaW5lZCYmQm9vbGVhbihvcHRpb25zLndpdGhDcmVkZW50aWFscyk7dmFyIGluaXRpYWxSZXRyeT1jbGFtcER1cmF0aW9uKDEwMDApO3ZhciBoZWFydGJlYXRUaW1lb3V0PW9wdGlvbnMhPXVuZGVmaW5lZCYmb3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0IT11bmRlZmluZWQ/cGFyc2VEdXJhdGlvbihvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQsNDUwMDApOmNsYW1wRHVyYXRpb24oNDUwMDApO3ZhciBsYXN0RXZlbnRJZD0nJzt2YXIgcmV0cnk9aW5pdGlhbFJldHJ5O3ZhciB3YXNBY3Rpdml0eT1mYWxzZTt2YXIgaGVhZGVycz1vcHRpb25zIT11bmRlZmluZWQmJm9wdGlvbnMuaGVhZGVycyE9dW5kZWZpbmVkP0pTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5oZWFkZXJzKSk6dW5kZWZpbmVkO3ZhciBDdXJyZW50VHJhbnNwb3J0PW9wdGlvbnMhPXVuZGVmaW5lZCYmb3B0aW9ucy5UcmFuc3BvcnQhPXVuZGVmaW5lZD9vcHRpb25zLlRyYW5zcG9ydDpYTUxIdHRwUmVxdWVzdDt2YXIgeGhyPWlzRmV0Y2hTdXBwb3J0ZWQmJiEob3B0aW9ucyE9dW5kZWZpbmVkJiZvcHRpb25zLlRyYW5zcG9ydCE9dW5kZWZpbmVkKT91bmRlZmluZWQ6bmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSk7dmFyIHRyYW5zcG9ydD14aHI9PXVuZGVmaW5lZD9uZXcgRmV0Y2hUcmFuc3BvcnQoKTpuZXcgWEhSVHJhbnNwb3J0KCk7dmFyIGNhbmNlbEZ1bmN0aW9uPXVuZGVmaW5lZDt2YXIgdGltZW91dD0wO3ZhciBjdXJyZW50U3RhdGU9V0FJVElORzt2YXIgZGF0YUJ1ZmZlcj0nJzt2YXIgbGFzdEV2ZW50SWRCdWZmZXI9Jyc7dmFyIGV2ZW50VHlwZUJ1ZmZlcj0nJzt2YXIgdGV4dEJ1ZmZlcj0nJzt2YXIgc3RhdGU9RklFTERfU1RBUlQ7dmFyIGZpZWxkU3RhcnQ9MDt2YXIgdmFsdWVTdGFydD0wO3ZhciBvblN0YXJ0PWZ1bmN0aW9uIG9uU3RhcnQoc3RhdHVzLHN0YXR1c1RleHQsY29udGVudFR5cGUsaGVhZGVycyxjYW5jZWwpe2lmKGN1cnJlbnRTdGF0ZT09PUNPTk5FQ1RJTkcpe2NhbmNlbEZ1bmN0aW9uPWNhbmNlbDtpZihzdGF0dXM9PT0yMDAmJmNvbnRlbnRUeXBlIT11bmRlZmluZWQmJmNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpKXtjdXJyZW50U3RhdGU9T1BFTjt3YXNBY3Rpdml0eT10cnVlO3JldHJ5PWluaXRpYWxSZXRyeTtlcy5yZWFkeVN0YXRlPU9QRU47dmFyIGV2ZW50PW5ldyBDb25uZWN0aW9uRXZlbnQoJ29wZW4nLHtzdGF0dXM6c3RhdHVzLHN0YXR1c1RleHQ6c3RhdHVzVGV4dCxoZWFkZXJzOmhlYWRlcnN9KTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtmaXJlKGVzLGVzLm9ub3BlbixldmVudCk7fWVsc2V7dmFyIG1lc3NhZ2U9Jyc7aWYoc3RhdHVzIT09MjAwKXtpZihzdGF0dXNUZXh0KXtzdGF0dXNUZXh0PXN0YXR1c1RleHQucmVwbGFjZSgvXFxzKy9nLCcgJyk7fW1lc3NhZ2U9XCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIHN0YXR1cyBcIitzdGF0dXMrJyAnK3N0YXR1c1RleHQrJyB0aGF0IGlzIG5vdCAyMDAuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLic7fWVsc2V7bWVzc2FnZT1cIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgQ29udGVudC1UeXBlIHNwZWNpZnlpbmcgYW4gdW5zdXBwb3J0ZWQgdHlwZTogXCIrKGNvbnRlbnRUeXBlPT11bmRlZmluZWQ/Jy0nOmNvbnRlbnRUeXBlLnJlcGxhY2UoL1xccysvZywnICcpKSsnLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nO310aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSk7Y2xvc2UoKTt2YXIgZXZlbnQ9bmV3IENvbm5lY3Rpb25FdmVudCgnZXJyb3InLHtzdGF0dXM6c3RhdHVzLHN0YXR1c1RleHQ6c3RhdHVzVGV4dCxoZWFkZXJzOmhlYWRlcnN9KTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtmaXJlKGVzLGVzLm9uZXJyb3IsZXZlbnQpO319fTt2YXIgb25Qcm9ncmVzcz1mdW5jdGlvbiBvblByb2dyZXNzKHRleHRDaHVuayl7aWYoY3VycmVudFN0YXRlPT09T1BFTil7dmFyIG49LTE7Zm9yKHZhciBpPTA7aTx0ZXh0Q2h1bmsubGVuZ3RoO2krPTEpe3ZhciBjPXRleHRDaHVuay5jaGFyQ29kZUF0KGkpO2lmKGM9PT0nXFxuJy5jaGFyQ29kZUF0KDApfHxjPT09J1xccicuY2hhckNvZGVBdCgwKSl7bj1pO319dmFyIGNodW5rPShuIT09LTE/dGV4dEJ1ZmZlcjonJykrdGV4dENodW5rLnNsaWNlKDAsbisxKTt0ZXh0QnVmZmVyPShuPT09LTE/dGV4dEJ1ZmZlcjonJykrdGV4dENodW5rLnNsaWNlKG4rMSk7aWYoY2h1bmshPT0nJyl7d2FzQWN0aXZpdHk9dHJ1ZTt9Zm9yKHZhciBwb3NpdGlvbj0wO3Bvc2l0aW9uPGNodW5rLmxlbmd0aDtwb3NpdGlvbis9MSl7dmFyIGM9Y2h1bmsuY2hhckNvZGVBdChwb3NpdGlvbik7aWYoc3RhdGU9PT1BRlRFUl9DUiYmYz09PSdcXG4nLmNoYXJDb2RlQXQoMCkpe3N0YXRlPUZJRUxEX1NUQVJUO31lbHNle2lmKHN0YXRlPT09QUZURVJfQ1Ipe3N0YXRlPUZJRUxEX1NUQVJUO31pZihjPT09J1xccicuY2hhckNvZGVBdCgwKXx8Yz09PSdcXG4nLmNoYXJDb2RlQXQoMCkpe2lmKHN0YXRlIT09RklFTERfU1RBUlQpe2lmKHN0YXRlPT09RklFTEQpe3ZhbHVlU3RhcnQ9cG9zaXRpb24rMTt9dmFyIGZpZWxkPWNodW5rLnNsaWNlKGZpZWxkU3RhcnQsdmFsdWVTdGFydC0xKTt2YXIgdmFsdWU9Y2h1bmsuc2xpY2UodmFsdWVTdGFydCsodmFsdWVTdGFydDxwb3NpdGlvbiYmY2h1bmsuY2hhckNvZGVBdCh2YWx1ZVN0YXJ0KT09PScgJy5jaGFyQ29kZUF0KDApPzE6MCkscG9zaXRpb24pO2lmKGZpZWxkPT09J2RhdGEnKXtkYXRhQnVmZmVyKz0nXFxuJztkYXRhQnVmZmVyKz12YWx1ZTt9ZWxzZSBpZihmaWVsZD09PSdpZCcpe2xhc3RFdmVudElkQnVmZmVyPXZhbHVlO31lbHNlIGlmKGZpZWxkPT09J2V2ZW50Jyl7ZXZlbnRUeXBlQnVmZmVyPXZhbHVlO31lbHNlIGlmKGZpZWxkPT09J3JldHJ5Jyl7aW5pdGlhbFJldHJ5PXBhcnNlRHVyYXRpb24odmFsdWUsaW5pdGlhbFJldHJ5KTtyZXRyeT1pbml0aWFsUmV0cnk7fWVsc2UgaWYoZmllbGQ9PT0naGVhcnRiZWF0VGltZW91dCcpe2hlYXJ0YmVhdFRpbWVvdXQ9cGFyc2VEdXJhdGlvbih2YWx1ZSxoZWFydGJlYXRUaW1lb3V0KTtpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30saGVhcnRiZWF0VGltZW91dCk7fX19aWYoc3RhdGU9PT1GSUVMRF9TVEFSVCl7aWYoZGF0YUJ1ZmZlciE9PScnKXtsYXN0RXZlbnRJZD1sYXN0RXZlbnRJZEJ1ZmZlcjtpZihldmVudFR5cGVCdWZmZXI9PT0nJyl7ZXZlbnRUeXBlQnVmZmVyPSdtZXNzYWdlJzt9dmFyIGV2ZW50PW5ldyBNZXNzYWdlRXZlbnQoZXZlbnRUeXBlQnVmZmVyLHtkYXRhOmRhdGFCdWZmZXIuc2xpY2UoMSksbGFzdEV2ZW50SWQ6bGFzdEV2ZW50SWRCdWZmZXJ9KTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtpZihldmVudFR5cGVCdWZmZXI9PT0nbWVzc2FnZScpe2ZpcmUoZXMsZXMub25tZXNzYWdlLGV2ZW50KTt9aWYoY3VycmVudFN0YXRlPT09Q0xPU0VEKXtyZXR1cm47fX1kYXRhQnVmZmVyPScnO2V2ZW50VHlwZUJ1ZmZlcj0nJzt9c3RhdGU9Yz09PSdcXHInLmNoYXJDb2RlQXQoMCk/QUZURVJfQ1I6RklFTERfU1RBUlQ7fWVsc2V7aWYoc3RhdGU9PT1GSUVMRF9TVEFSVCl7ZmllbGRTdGFydD1wb3NpdGlvbjtzdGF0ZT1GSUVMRDt9aWYoc3RhdGU9PT1GSUVMRCl7aWYoYz09PSc6Jy5jaGFyQ29kZUF0KDApKXt2YWx1ZVN0YXJ0PXBvc2l0aW9uKzE7c3RhdGU9VkFMVUVfU1RBUlQ7fX1lbHNlIGlmKHN0YXRlPT09VkFMVUVfU1RBUlQpe3N0YXRlPVZBTFVFO319fX19fTt2YXIgb25GaW5pc2g9ZnVuY3Rpb24gb25GaW5pc2goKXtpZihjdXJyZW50U3RhdGU9PT1PUEVOfHxjdXJyZW50U3RhdGU9PT1DT05ORUNUSU5HKXtjdXJyZW50U3RhdGU9V0FJVElORztpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9MDt9dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSxyZXRyeSk7cmV0cnk9Y2xhbXBEdXJhdGlvbihNYXRoLm1pbihpbml0aWFsUmV0cnkqMTYscmV0cnkqMikpO2VzLnJlYWR5U3RhdGU9Q09OTkVDVElORzt2YXIgZXZlbnQ9bmV3IEV2ZW50KCdlcnJvcicpO2VzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO2ZpcmUoZXMsZXMub25lcnJvcixldmVudCk7fX07dmFyIGNsb3NlPWZ1bmN0aW9uIGNsb3NlKCl7Y3VycmVudFN0YXRlPUNMT1NFRDtpZihjYW5jZWxGdW5jdGlvbiE9dW5kZWZpbmVkKXtjYW5jZWxGdW5jdGlvbigpO2NhbmNlbEZ1bmN0aW9uPXVuZGVmaW5lZDt9aWYodGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aW1lb3V0KTt0aW1lb3V0PTA7fWVzLnJlYWR5U3RhdGU9Q0xPU0VEO307dmFyIG9uVGltZW91dD1mdW5jdGlvbiBvblRpbWVvdXQoKXt0aW1lb3V0PTA7aWYoY3VycmVudFN0YXRlIT09V0FJVElORyl7aWYoIXdhc0FjdGl2aXR5JiZjYW5jZWxGdW5jdGlvbiE9dW5kZWZpbmVkKXt0aHJvd0Vycm9yKG5ldyBFcnJvcignTm8gYWN0aXZpdHkgd2l0aGluICcraGVhcnRiZWF0VGltZW91dCsnIG1pbGxpc2Vjb25kcy4gUmVjb25uZWN0aW5nLicpKTtjYW5jZWxGdW5jdGlvbigpO2NhbmNlbEZ1bmN0aW9uPXVuZGVmaW5lZDt9ZWxzZXt3YXNBY3Rpdml0eT1mYWxzZTt0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LGhlYXJ0YmVhdFRpbWVvdXQpO31yZXR1cm47fXdhc0FjdGl2aXR5PWZhbHNlO3RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30saGVhcnRiZWF0VGltZW91dCk7Y3VycmVudFN0YXRlPUNPTk5FQ1RJTkc7ZGF0YUJ1ZmZlcj0nJztldmVudFR5cGVCdWZmZXI9Jyc7bGFzdEV2ZW50SWRCdWZmZXI9bGFzdEV2ZW50SWQ7dGV4dEJ1ZmZlcj0nJztmaWVsZFN0YXJ0PTA7dmFsdWVTdGFydD0wO3N0YXRlPUZJRUxEX1NUQVJUOy8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQyODkxNlxuLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxudmFyIHJlcXVlc3RVUkw9dXJsO2lmKHVybC5zbGljZSgwLDUpIT09J2RhdGE6JyYmdXJsLnNsaWNlKDAsNSkhPT0nYmxvYjonKXtpZihsYXN0RXZlbnRJZCE9PScnKXtyZXF1ZXN0VVJMKz0odXJsLmluZGV4T2YoJz8nKT09PS0xPyc/JzonJicpKydsYXN0RXZlbnRJZD0nK2VuY29kZVVSSUNvbXBvbmVudChsYXN0RXZlbnRJZCk7fX12YXIgcmVxdWVzdEhlYWRlcnM9e307cmVxdWVzdEhlYWRlcnNbJ0FjY2VwdCddPSd0ZXh0L2V2ZW50LXN0cmVhbSc7aWYoaGVhZGVycyE9dW5kZWZpbmVkKXtmb3IodmFyIG5hbWUgaW4gaGVhZGVycyl7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsbmFtZSkpe3JlcXVlc3RIZWFkZXJzW25hbWVdPWhlYWRlcnNbbmFtZV07fX19dHJ5e3RyYW5zcG9ydC5vcGVuKHhocixvblN0YXJ0LG9uUHJvZ3Jlc3Msb25GaW5pc2gscmVxdWVzdFVSTCx3aXRoQ3JlZGVudGlhbHMscmVxdWVzdEhlYWRlcnMpO31jYXRjaChlcnJvcil7Y2xvc2UoKTt0aHJvdyBlcnJvcjt9fTtlcy51cmw9dXJsO2VzLnJlYWR5U3RhdGU9Q09OTkVDVElORztlcy53aXRoQ3JlZGVudGlhbHM9d2l0aENyZWRlbnRpYWxzO2VzLl9jbG9zZT1jbG9zZTtvblRpbWVvdXQoKTt9RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShFdmVudFRhcmdldC5wcm90b3R5cGUpO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNPTk5FQ1RJTkc9Q09OTkVDVElORztFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5PUEVOPU9QRU47RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ0xPU0VEPUNMT1NFRDtFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuX2Nsb3NlKCk7fTtFdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkc9Q09OTkVDVElORztFdmVudFNvdXJjZVBvbHlmaWxsLk9QRU49T1BFTjtFdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRD1DTE9TRUQ7RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzPXVuZGVmaW5lZDt2YXIgX2RlZmF1bHQ9RXZlbnRTb3VyY2VQb2x5ZmlsbDtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kaXNwbGF5Q29udGVudD1kaXNwbGF5Q29udGVudDtmdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjayl7Ly8gVGhpcyBpcyB0aGUgZmFsbGJhY2sgaGVscGVyIHRoYXQgcmVtb3ZlcyBOZXh0LmpzJyBuby1GT1VDIHN0eWxlcyB3aGVuXG4vLyBDU1MgbW9kZSBpcyBlbmFibGVkLiBUaGlzIG9ubHkgcmVhbGx5IGFjdGl2YXRlcyBpZiB5b3UgaGF2ZW4ndCBjcmVhdGVkXG4vLyBfYW55XyBzdHlsZXMgaW4geW91ciBhcHBsaWNhdGlvbiB5ZXQuXG47KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQpKGZ1bmN0aW9uKCl7Zm9yKHZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLGk9eC5sZW5ndGg7aS0tOyl7eFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO31pZihjYWxsYmFjayl7Y2FsbGJhY2soKTt9fSk7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNsb3NlUGluZz1jbG9zZVBpbmc7ZXhwb3J0cy5zZXR1cFBpbmc9c2V0dXBQaW5nO2V4cG9ydHMuY3VycmVudFBhZ2U9dm9pZCAwO3ZhciBfdW5mZXRjaD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJuZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3VuZmV0Y2hcIikpO3ZhciBfZXZlbnRzb3VyY2U9cmVxdWlyZShcIi4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZVwiKTsvKiBnbG9iYWwgbG9jYXRpb24gKi92YXIgZXZ0U291cmNlO3ZhciBjdXJyZW50UGFnZTtleHBvcnRzLmN1cnJlbnRQYWdlPWN1cnJlbnRQYWdlO2Z1bmN0aW9uIGNsb3NlUGluZygpe2lmKGV2dFNvdXJjZSlldnRTb3VyY2UuY2xvc2UoKTtldnRTb3VyY2U9bnVsbDt9ZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LHBhdGhuYW1lRm4scmV0cnkpe3ZhciBwYXRobmFtZT1wYXRobmFtZUZuKCk7Ly8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcbmlmKHBhdGhuYW1lPT09Y3VycmVudFBhZ2UmJiFyZXRyeSlyZXR1cm47ZXhwb3J0cy5jdXJyZW50UGFnZT1jdXJyZW50UGFnZT1wYXRobmFtZTsvLyBjbG9zZSBjdXJyZW50IEV2ZW50U291cmNlIGNvbm5lY3Rpb25cbmNsb3NlUGluZygpO3ZhciB1cmw9YXNzZXRQcmVmaXgrXCIvX25leHQvd2VicGFjay1obXI/cGFnZT1cIitjdXJyZW50UGFnZTtldnRTb3VyY2U9KDAsX2V2ZW50c291cmNlLmdldEV2ZW50U291cmNlV3JhcHBlcikoe3BhdGg6dXJsLHRpbWVvdXQ6NTAwMCxvbmRlbWFuZDoxfSk7ZXZ0U291cmNlLmFkZE1lc3NhZ2VMaXN0ZW5lcihldmVudD0+e2lmKGV2ZW50LmRhdGEuaW5kZXhPZigneycpPT09LTEpcmV0dXJuO3RyeXt2YXIgcGF5bG9hZD1KU09OLnBhcnNlKGV2ZW50LmRhdGEpO2lmKHBheWxvYWQuaW52YWxpZCl7Ly8gUGF5bG9hZCBjYW4gYmUgaW52YWxpZCBldmVuIGlmIHRoZSBwYWdlIGRvZXMgbm90IGV4aXN0LlxuLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxuKDAsX3VuZmV0Y2guZGVmYXVsdCkobG9jYXRpb24uaHJlZix7Y3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocGFnZVJlcz0+e2lmKHBhZ2VSZXMuc3RhdHVzPT09MjAwKXtsb2NhdGlvbi5yZWxvYWQoKTt9fSk7fX1jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoJ29uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZScsZXJyKTt9fSk7fSIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==