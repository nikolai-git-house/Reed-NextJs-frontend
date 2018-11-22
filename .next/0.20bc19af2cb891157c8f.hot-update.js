webpackHotUpdate(0,{

/***/ "./actions/shopActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_SHOP_ITEMS_START; });
/* unused harmony export getShopItemsStart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_SHOP_ITEMS_SUCCESS; });
/* unused harmony export getShopItemsSuccess */
/* unused harmony export GET_SHOP_ITEMS_ERROR */
/* unused harmony export getShopItemsError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getShopItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_request__ = __webpack_require__("./lib/request.js");


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var GET_SHOP_ITEMS_START = "GET_SHOP_ITEMS_START";
var getShopItemsStart = function getShopItemsStart(data) {
  return {
    type: GET_SHOP_ITEMS_START,
    data: data
  };
};
var GET_SHOP_ITEMS_SUCCESS = "GET_SHOP_ITEMS_SUCCESS";
var getShopItemsSuccess = function getShopItemsSuccess(data) {
  return {
    type: GET_SHOP_ITEMS_SUCCESS,
    data: data
  };
};
var GET_SHOP_ITEMS_ERROR = "GET_SHOP_ITEMS_ERROR";
var getShopItemsError = function getShopItemsError(data) {
  return {
    type: GET_SHOP_ITEMS_ERROR,
    data: data
  };
};
var getShopItems = function getShopItems() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        var resp;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(getShopItemsStart());
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_1__lib_request__["a" /* GET */])('/product');

              case 3:
                resp = _context.sent;
                resp.data.length ? dispatch(getShopItemsSuccess(resp.data)) : dispatch(getShopItemsError('no items'));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GET_SHOP_ITEMS_START, "GET_SHOP_ITEMS_START", "/app/actions/shopActions.js");
  reactHotLoader.register(getShopItemsStart, "getShopItemsStart", "/app/actions/shopActions.js");
  reactHotLoader.register(GET_SHOP_ITEMS_SUCCESS, "GET_SHOP_ITEMS_SUCCESS", "/app/actions/shopActions.js");
  reactHotLoader.register(getShopItemsSuccess, "getShopItemsSuccess", "/app/actions/shopActions.js");
  reactHotLoader.register(GET_SHOP_ITEMS_ERROR, "GET_SHOP_ITEMS_ERROR", "/app/actions/shopActions.js");
  reactHotLoader.register(getShopItemsError, "getShopItemsError", "/app/actions/shopActions.js");
  reactHotLoader.register(getShopItems, "getShopItems", "/app/actions/shopActions.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_cart_svg__ = __webpack_require__("./static/cart.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_cart_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_cart_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_downarrow_svg__ = __webpack_require__("./static/downarrow.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_downarrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_downarrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_logo_svg__ = __webpack_require__("./static/logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("./config.js");
var _jsxFileName = "/app/components/Header/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "showAuth", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "header__menu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
          prefetch: true,
          href: "/cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          style: {
            marginRight: '10px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: __WEBPACK_IMPORTED_MODULE_3__static_cart_svg___default.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }), _this.props.cart.totalItem)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, " | "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "header__menu__dropdown",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          onClick: _this.toggleDropdown,
          src: __WEBPACK_IMPORTED_MODULE_4__static_downarrow_svg___default.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
          prefetch: true,
          href: "/account",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _this.props.currentUser && _this.props.currentUser.preferred_username))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: _this.state.dropdown == true ? "header__menu__dropdown__menu--active" : "header__menu__dropdown__menu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          onClick: _this.handleLogout,
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, "Logout")));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "showLoading", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "header__menu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, "...")));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "noAuth", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "header__menu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: "https://ids.kube-prolucid.ca/register?clientId=".concat(__WEBPACK_IMPORTED_MODULE_6__config__["b" /* OidcCLientId */]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, "Register"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, "|"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          onClick: _this.handleLogin,
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, "Login"));
      }
    });
    _this.state = {
      dropdown: false
    };
    _this.toggleDropdown = _this.toggleDropdown.bind(_assertThisInitialized(_this));
    _this.handleLogin = _this.handleLogin.bind(_assertThisInitialized(_this));
    _this.handleLogout = _this.handleLogout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Header, [{
    key: "toggleDropdown",
    value: function toggleDropdown() {
      this.setState({
        dropdown: this.state.dropdown == true ? false : true
      });
    }
  }, {
    key: "handleLogin",
    value: function handleLogin(e) {
      e.preventDefault();
      this.props.logIn();
    }
  }, {
    key: "handleLogout",
    value: function handleLogout(e) {
      e.preventDefault();
      this.props.logOut();
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header__header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_5__static_logo_svg___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })))), this.props.loading ? this.showLoading() : this.props.currentUser.preferred_username ? this.showAuth() : this.noAuth())));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Header;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "/app/components/Header/index.js");
  reactHotLoader.register(_default, "default", "/app/components/Header/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OidcCLientId; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config__ = __webpack_require__("./node_modules/next/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_config__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _getConfig = __WEBPACK_IMPORTED_MODULE_0_next_config___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var ApiUrl = publicRuntimeConfig.API_ENDPOINT;
var OidcCLientId = publicRuntimeConfig.OIDC_CLIENTID;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(publicRuntimeConfig, "publicRuntimeConfig", "/app/config.js");
  reactHotLoader.register(ApiUrl, "ApiUrl", "/app/config.js");
  reactHotLoader.register(OidcCLientId, "OidcCLientId", "/app/config.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducers/shopReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_shopActions__ = __webpack_require__("./actions/shopActions.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  items: [],
  loading: true
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread({}, initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_shopActions__["a" /* GET_SHOP_ITEMS_START */]:
      return _objectSpread({}, state);

    case __WEBPACK_IMPORTED_MODULE_0__actions_shopActions__["b" /* GET_SHOP_ITEMS_SUCCESS */]:
      return {
        items: action.data,
        loading: false
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/app/reducers/shopReducer.js");
  reactHotLoader.register(_default, "default", "/app/reducers/shopReducer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=0.20bc19af2cb891157c8f.hot-update.js.map