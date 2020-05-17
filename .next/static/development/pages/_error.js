(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_error.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! next/dist/pages/_error */ "./node_modules/next/dist/pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
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

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

const amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode({
  ampFirst = false,
  hybrid = false,
  hasQuery = false
} = {}) {
  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1.default.useContext(amp_context_1.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

exports.useAmp = useAmp;

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

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
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

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

const side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

const amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

const head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

const amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead(inAmpMode = false) {
  const head = [react_1.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

const METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  const keys = new Set();
  const tags = new Set();
  const metaTypes = new Set();
  const metaCategories = {};
  return h => {
    let unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      const key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce((list, headElement) => {
    const headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;
    return react_1.default.cloneElement(c, {
      key
    });
  });
}

const Effect = side_effect_1.default();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

_c = Effect;

function Head({
  children
}) {
  return react_1.default.createElement(amp_context_1.AmpStateContext.Consumer, null, ampState => react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, updateHead => react_1.default.createElement(Effect, {
    reduceComponentsToState: reduceComponents,
    handleStateChange: updateHead,
    inAmpMode: amp_1.isInAmpMode(ampState)
  }, children)));
}

_c2 = Head;
Head.rewind = Effect.rewind;
exports.default = Head;

var _c, _c2;

$RefreshReg$(_c, "Effect");
$RefreshReg$(_c2, "Head");

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

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const isServer = false;

exports.default = () => {
  const mountedInstances = new Set();
  let state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState([...mountedInstances], component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return class extends react_1.Component {
    // Used when server rendering
    static rewind() {
      const recordedState = state;
      state = undefined;
      mountedInstances.clear();
      return recordedState;
    }

    constructor(props) {
      super(props);

      if (isServer) {
        mountedInstances.add(this);
        emitChange(this);
      }
    }

    componentDidMount() {
      mountedInstances.add(this);
      emitChange(this);
    }

    componentDidUpdate() {
      emitChange(this);
    }

    componentWillUnmount() {
      mountedInstances.delete(this);
      emitChange(this);
    }

    render() {
      return null;
    }

  };
};

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

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var {
    res,
    err
  } = _ref;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    var {
      statusCode
    } = this.props;
    var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return (/*#__PURE__*/_react.default.createElement("div", {
        style: styles.error
      }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
        style: styles.h1
      }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
        style: styles.desc
      }, /*#__PURE__*/_react.default.createElement("h2", {
        style: styles.h2
      }, title, "."))))
    );
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

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


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_0fb095e325d7ebf261c3 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_0fb095e325d7ebf261c3 */ "dll-reference dll_0fb095e325d7ebf261c3"))("./node_modules/react/index.js");

/***/ }),

/***/ "dll-reference dll_0fb095e325d7ebf261c3":
/*!*******************************************!*\
  !*** external "dll_0fb095e325d7ebf261c3" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_0fb095e325d7ebf261c3;

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./","static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/ZDdmYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9hbXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9zaWRlLWVmZmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfMGZiMDk1ZTMyNWQ3ZWJmMjYxYzMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGxsXzBmYjA5NWUzMjVkN2ViZjI2MWMzXCIiXSwibmFtZXMiOlsiX19pbXBvcnRTdGFyIiwibW9kIiwiX19lc01vZHVsZSIsInJlc3VsdCIsImsiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlJlYWN0IiwicmVxdWlyZSIsIkFtcFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsIl9faW1wb3J0RGVmYXVsdCIsInJlYWN0XzEiLCJhbXBfY29udGV4dF8xIiwiaXNJbkFtcE1vZGUiLCJhbXBGaXJzdCIsImh5YnJpZCIsImhhc1F1ZXJ5IiwidXNlQW1wIiwiZGVmYXVsdCIsInVzZUNvbnRleHQiLCJIZWFkTWFuYWdlckNvbnRleHQiLCJzaWRlX2VmZmVjdF8xIiwiaGVhZF9tYW5hZ2VyX2NvbnRleHRfMSIsImFtcF8xIiwiZGVmYXVsdEhlYWQiLCJpbkFtcE1vZGUiLCJoZWFkIiwiY3JlYXRlRWxlbWVudCIsImNoYXJTZXQiLCJwdXNoIiwibmFtZSIsImNvbnRlbnQiLCJvbmx5UmVhY3RFbGVtZW50IiwibGlzdCIsImNoaWxkIiwidHlwZSIsIkZyYWdtZW50IiwiY29uY2F0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwicHJvcHMiLCJjaGlsZHJlbiIsInJlZHVjZSIsImZyYWdtZW50TGlzdCIsImZyYWdtZW50Q2hpbGQiLCJNRVRBVFlQRVMiLCJ1bmlxdWUiLCJrZXlzIiwiU2V0IiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImtleSIsImluZGV4T2YiLCJzbGljZSIsImhhcyIsImFkZCIsImkiLCJsZW4iLCJsZW5ndGgiLCJtZXRhdHlwZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsInJlZHVjZUNvbXBvbmVudHMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudCIsImhlYWRFbGVtZW50Q2hpbGRyZW4iLCJyZXZlcnNlIiwiZmlsdGVyIiwibWFwIiwiYyIsImNsb25lRWxlbWVudCIsIkVmZmVjdCIsIkhlYWQiLCJDb25zdW1lciIsImFtcFN0YXRlIiwidXBkYXRlSGVhZCIsInJlZHVjZUNvbXBvbmVudHNUb1N0YXRlIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJyZXdpbmQiLCJpc1NlcnZlciIsIm1vdW50ZWRJbnN0YW5jZXMiLCJzdGF0ZSIsImVtaXRDaGFuZ2UiLCJjb21wb25lbnQiLCJDb21wb25lbnQiLCJyZWNvcmRlZFN0YXRlIiwidW5kZWZpbmVkIiwiY2xlYXIiLCJjb25zdHJ1Y3RvciIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkZWxldGUiLCJyZW5kZXIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX3JlYWN0IiwiX2hlYWQiLCJzdGF0dXNDb2RlcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsIkVycm9yIiwidGl0bGUiLCJzdHlsZSIsInN0eWxlcyIsImVycm9yIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJoMSIsImRlc2MiLCJoMiIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJjb2xvciIsImJhY2tncm91bmQiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImJvcmRlclJpZ2h0IiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHdFQUF3QjtBQUMvQztBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkEsOENBQWE7O0FBQ2IsSUFBSUEsWUFBWSxHQUFJLFFBQVEsS0FBS0EsWUFBZCxJQUErQixVQUFVQyxHQUFWLEVBQWU7QUFDN0QsTUFBSUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQWYsRUFBMkIsT0FBT0QsR0FBUDtBQUMzQixNQUFJRSxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUlGLEdBQUcs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QztBQUFDUyxXQUFPLEVBQUMsY0FBVDtBQUF3QkQsYUFBUyxFQUFDLE1BQWxDO0FBQXlDSyxjQUFVLEVBQUMsTUFBcEQ7QUFBMkROLFVBQU0sRUFBQyxNQUFsRTtBQUF5RU8saUJBQWEsRUFBQztBQUF2RixHQUF4UztBQUF5WWYsSUFBRSxFQUFDO0FBQUNVLFdBQU8sRUFBQyxjQUFUO0FBQXdCTSxlQUFXLEVBQUMsNEJBQXBDO0FBQWlFQyxVQUFNLEVBQUMsQ0FBeEU7QUFBMEVDLGVBQVcsRUFBQyxNQUF0RjtBQUE2RkMsV0FBTyxFQUFDLGtCQUFyRztBQUF3SEMsWUFBUSxFQUFDLE1BQWpJO0FBQXdJQyxjQUFVLEVBQUMsR0FBbko7QUFBdUpOLGlCQUFhLEVBQUM7QUFBckssR0FBNVk7QUFBd2pCYixJQUFFLEVBQUM7QUFBQ2tCLFlBQVEsRUFBQyxNQUFWO0FBQWlCQyxjQUFVLEVBQUMsUUFBNUI7QUFBcUNQLGNBQVUsRUFBQyxTQUFoRDtBQUEwREcsVUFBTSxFQUFDLENBQWpFO0FBQW1FRSxXQUFPLEVBQUM7QUFBM0U7QUFBM2pCLENBQVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckJBLGdLOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19lcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIm5leHQvZGlzdC9wYWdlcy9fZXJyb3JcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmV4cG9ydHMuQW1wU3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGV4cG9ydHMuQW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0FtcFN0YXRlQ29udGV4dCc7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IGFtcF9jb250ZXh0XzEgPSByZXF1aXJlKFwiLi9hbXAtY29udGV4dFwiKTtcbmZ1bmN0aW9uIGlzSW5BbXBNb2RlKHsgYW1wRmlyc3QgPSBmYWxzZSwgaHlicmlkID0gZmFsc2UsIGhhc1F1ZXJ5ID0gZmFsc2UsIH0gPSB7fSkge1xuICAgIHJldHVybiBhbXBGaXJzdCB8fCAoaHlicmlkICYmIGhhc1F1ZXJ5KTtcbn1cbmV4cG9ydHMuaXNJbkFtcE1vZGUgPSBpc0luQW1wTW9kZTtcbmZ1bmN0aW9uIHVzZUFtcCgpIHtcbiAgICAvLyBEb24ndCBhc3NpZ24gdGhlIGNvbnRleHQgdmFsdWUgdG8gYSB2YXJpYWJsZSB0byBzYXZlIGJ5dGVzXG4gICAgcmV0dXJuIGlzSW5BbXBNb2RlKHJlYWN0XzEuZGVmYXVsdC51c2VDb250ZXh0KGFtcF9jb250ZXh0XzEuQW1wU3RhdGVDb250ZXh0KSk7XG59XG5leHBvcnRzLnVzZUFtcCA9IHVzZUFtcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmV4cG9ydHMuSGVhZE1hbmFnZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZXhwb3J0cy5IZWFkTWFuYWdlckNvbnRleHQuZGlzcGxheU5hbWUgPSAnSGVhZE1hbmFnZXJDb250ZXh0Jztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3Qgc2lkZV9lZmZlY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zaWRlLWVmZmVjdFwiKSk7XG5jb25zdCBhbXBfY29udGV4dF8xID0gcmVxdWlyZShcIi4vYW1wLWNvbnRleHRcIik7XG5jb25zdCBoZWFkX21hbmFnZXJfY29udGV4dF8xID0gcmVxdWlyZShcIi4vaGVhZC1tYW5hZ2VyLWNvbnRleHRcIik7XG5jb25zdCBhbXBfMSA9IHJlcXVpcmUoXCIuL2FtcFwiKTtcbmZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgaGVhZCA9IFtyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwgeyBjaGFyU2V0OiBcInV0Zi04XCIgfSldO1xuICAgIGlmICghaW5BbXBNb2RlKSB7XG4gICAgICAgIGhlYWQucHVzaChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwgeyBuYW1lOiBcInZpZXdwb3J0XCIsIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoXCIgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZDtcbn1cbmV4cG9ydHMuZGVmYXVsdEhlYWQgPSBkZWZhdWx0SGVhZDtcbmZ1bmN0aW9uIG9ubHlSZWFjdEVsZW1lbnQobGlzdCwgY2hpbGQpIHtcbiAgICAvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIC8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gcmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50KSB7XG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChyZWFjdF8xLmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikucmVkdWNlKChmcmFnbWVudExpc3QsIGZyYWdtZW50Q2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZCk7XG4gICAgICAgIH0sIFtdKSk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0LmNvbmNhdChjaGlsZCk7XG59XG5jb25zdCBNRVRBVFlQRVMgPSBbJ25hbWUnLCAnaHR0cEVxdWl2JywgJ2NoYXJTZXQnLCAnaXRlbVByb3AnXTtcbi8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qL1xuZnVuY3Rpb24gdW5pcXVlKCkge1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgdGFncyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBtZXRhVHlwZXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgbWV0YUNhdGVnb3JpZXMgPSB7fTtcbiAgICByZXR1cm4gKGgpID0+IHtcbiAgICAgICAgbGV0IHVuaXF1ZSA9IHRydWU7XG4gICAgICAgIGlmIChoLmtleSAmJiB0eXBlb2YgaC5rZXkgIT09ICdudW1iZXInICYmIGgua2V5LmluZGV4T2YoJyQnKSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSArIDEpO1xuICAgICAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICB1bmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGtleXMuYWRkKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgICAgICBzd2l0Y2ggKGgudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgICAgICAgY2FzZSAnYmFzZSc6XG4gICAgICAgICAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YWdzLmFkZChoLnR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21ldGEnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNRVRBVFlQRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YXR5cGUgPSBNRVRBVFlQRVNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGF0eXBlID09PSAnY2hhclNldCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXRhVHlwZXMuaGFzKG1ldGF0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVR5cGVzLmFkZChtZXRhdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGgucHJvcHNbbWV0YXR5cGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSB8fCBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLmFkZChjYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdID0gY2F0ZWdvcmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5pcXVlO1xuICAgIH07XG59XG4vKipcbiAqXG4gKiBAcGFyYW0gaGVhZEVsZW1lbnRzIExpc3Qgb2YgbXVsdGlwbGUgPEhlYWQ+IGluc3RhbmNlc1xuICovXG5mdW5jdGlvbiByZWR1Y2VDb21wb25lbnRzKGhlYWRFbGVtZW50cywgcHJvcHMpIHtcbiAgICByZXR1cm4gaGVhZEVsZW1lbnRzXG4gICAgICAgIC5yZWR1Y2UoKGxpc3QsIGhlYWRFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRFbGVtZW50Q2hpbGRyZW4gPSByZWFjdF8xLmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShoZWFkRWxlbWVudC5wcm9wcy5jaGlsZHJlbik7XG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKTtcbiAgICB9LCBbXSlcbiAgICAgICAgLnJlZHVjZShvbmx5UmVhY3RFbGVtZW50LCBbXSlcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuY29uY2F0KGRlZmF1bHRIZWFkKHByb3BzLmluQW1wTW9kZSkpXG4gICAgICAgIC5maWx0ZXIodW5pcXVlKCkpXG4gICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgLm1hcCgoYywgaSkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBjLmtleSB8fCBpO1xuICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNsb25lRWxlbWVudChjLCB7IGtleSB9KTtcbiAgICB9KTtcbn1cbmNvbnN0IEVmZmVjdCA9IHNpZGVfZWZmZWN0XzEuZGVmYXVsdCgpO1xuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpbmplY3RzIGVsZW1lbnRzIHRvIGA8aGVhZD5gIG9mIHlvdXIgcGFnZS5cbiAqIFRvIGF2b2lkIGR1cGxpY2F0ZWQgYHRhZ3NgIGluIGA8aGVhZD5gIHlvdSBjYW4gdXNlIHRoZSBga2V5YCBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBtYWtlIHN1cmUgZXZlcnkgdGFnIGlzIG9ubHkgcmVuZGVyZWQgb25jZS5cbiAqL1xuZnVuY3Rpb24gSGVhZCh7IGNoaWxkcmVuIH0pIHtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGFtcF9jb250ZXh0XzEuQW1wU3RhdGVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBhbXBTdGF0ZSA9PiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaGVhZF9tYW5hZ2VyX2NvbnRleHRfMS5IZWFkTWFuYWdlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsIHVwZGF0ZUhlYWQgPT4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEVmZmVjdCwgeyByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZTogcmVkdWNlQ29tcG9uZW50cywgaGFuZGxlU3RhdGVDaGFuZ2U6IHVwZGF0ZUhlYWQsIGluQW1wTW9kZTogYW1wXzEuaXNJbkFtcE1vZGUoYW1wU3RhdGUpIH0sIGNoaWxkcmVuKSkpKSkpO1xufVxuSGVhZC5yZXdpbmQgPSBFZmZlY3QucmV3aW5kO1xuZXhwb3J0cy5kZWZhdWx0ID0gSGVhZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLmRlZmF1bHQgPSAoKSA9PiB7XG4gICAgY29uc3QgbW91bnRlZEluc3RhbmNlcyA9IG5ldyBTZXQoKTtcbiAgICBsZXQgc3RhdGU7XG4gICAgZnVuY3Rpb24gZW1pdENoYW5nZShjb21wb25lbnQpIHtcbiAgICAgICAgc3RhdGUgPSBjb21wb25lbnQucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoWy4uLm1vdW50ZWRJbnN0YW5jZXNdLCBjb21wb25lbnQucHJvcHMpO1xuICAgICAgICBpZiAoY29tcG9uZW50LnByb3BzLmhhbmRsZVN0YXRlQ2hhbmdlKSB7XG4gICAgICAgICAgICBjb21wb25lbnQucHJvcHMuaGFuZGxlU3RhdGVDaGFuZ2Uoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGFzcyBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcbiAgICAgICAgLy8gVXNlZCB3aGVuIHNlcnZlciByZW5kZXJpbmdcbiAgICAgICAgc3RhdGljIHJld2luZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZGVkU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgbW91bnRlZEluc3RhbmNlcy5jbGVhcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJlY29yZGVkU3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgIGlmIChpc1NlcnZlcikge1xuICAgICAgICAgICAgICAgIG1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGVtaXRDaGFuZ2UodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBtb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgICAgIGVtaXRDaGFuZ2UodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICAgICAgZW1pdENoYW5nZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIG1vdW50ZWRJbnN0YW5jZXMuZGVsZXRlKHRoaXMpO1xuICAgICAgICAgICAgZW1pdENoYW5nZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgc3RhdHVzQ29kZXM9ezQwMDonQmFkIFJlcXVlc3QnLDQwNDonVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcsNDA1OidNZXRob2QgTm90IEFsbG93ZWQnLDUwMDonSW50ZXJuYWwgU2VydmVyIEVycm9yJ307ZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7cmVzLGVycn09X3JlZjt2YXIgc3RhdHVzQ29kZT1yZXMmJnJlcy5zdGF0dXNDb2RlP3Jlcy5zdGF0dXNDb2RlOmVycj9lcnIuc3RhdHVzQ29kZTo0MDQ7cmV0dXJue3N0YXR1c0NvZGV9O30vKipcbiAqIGBFcnJvcmAgY29tcG9uZW50IHVzZWQgZm9yIGhhbmRsaW5nIGVycm9ycy5cbiAqL2NsYXNzIEVycm9yIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50e3JlbmRlcigpe3ZhcntzdGF0dXNDb2RlfT10aGlzLnByb3BzO3ZhciB0aXRsZT10aGlzLnByb3BzLnRpdGxlfHxzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXXx8J0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzdHlsZXMuZXJyb3J9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsbnVsbCxzdGF0dXNDb2RlLFwiOiBcIix0aXRsZSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6J2JvZHkgeyBtYXJnaW46IDAgfSd9fSksc3RhdHVzQ29kZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIse3N0eWxlOnN0eWxlcy5oMX0sc3RhdHVzQ29kZSk6bnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzdHlsZXMuZGVzY30sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLHtzdHlsZTpzdHlsZXMuaDJ9LHRpdGxlLFwiLlwiKSkpKTt9fWV4cG9ydHMuZGVmYXVsdD1FcnJvcjtFcnJvci5kaXNwbGF5TmFtZT0nRXJyb3JQYWdlJztFcnJvci5nZXRJbml0aWFsUHJvcHM9X2dldEluaXRpYWxQcm9wcztFcnJvci5vcmlnR2V0SW5pdGlhbFByb3BzPV9nZXRJbml0aWFsUHJvcHM7dmFyIHN0eWxlcz17ZXJyb3I6e2NvbG9yOicjMDAwJyxiYWNrZ3JvdW5kOicjZmZmJyxmb250RmFtaWx5OictYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLGhlaWdodDonMTAwdmgnLHRleHRBbGlnbjonY2VudGVyJyxkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidjb2x1bW4nLGFsaWduSXRlbXM6J2NlbnRlcicsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcid9LGRlc2M6e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsdGV4dEFsaWduOidsZWZ0JyxsaW5lSGVpZ2h0Oic0OXB4JyxoZWlnaHQ6JzQ5cHgnLHZlcnRpY2FsQWxpZ246J21pZGRsZSd9LGgxOntkaXNwbGF5OidpbmxpbmUtYmxvY2snLGJvcmRlclJpZ2h0OicxcHggc29saWQgcmdiYSgwLCAwLCAwLC4zKScsbWFyZ2luOjAsbWFyZ2luUmlnaHQ6JzIwcHgnLHBhZGRpbmc6JzEwcHggMjNweCAxMHB4IDAnLGZvbnRTaXplOicyNHB4Jyxmb250V2VpZ2h0OjUwMCx2ZXJ0aWNhbEFsaWduOid0b3AnfSxoMjp7Zm9udFNpemU6JzE0cHgnLGZvbnRXZWlnaHQ6J25vcm1hbCcsbGluZUhlaWdodDonaW5oZXJpdCcsbWFyZ2luOjAscGFkZGluZzowfX07IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF8wZmIwOTVlMzI1ZDdlYmYyNjFjMyAqLyBcImRsbC1yZWZlcmVuY2UgZGxsXzBmYjA5NWUzMjVkN2ViZjI2MWMzXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gZGxsXzBmYjA5NWUzMjVkN2ViZjI2MWMzOyJdLCJzb3VyY2VSb290IjoiIn0=