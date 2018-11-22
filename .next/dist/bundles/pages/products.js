module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/shopActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_SHOP_ITEMS_START; });
/* unused harmony export getShopItemsStart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_SHOP_ITEMS_SUCCESS; });
/* unused harmony export getShopItemsSuccess */
/* unused harmony export GET_SHOP_ITEMS_ERROR */
/* unused harmony export getShopItemsError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getShopItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_request__ = __webpack_require__("./lib/request.js");


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

/***/ }),

/***/ "./components/Card/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("./components/Card/style.js");
var _jsxFileName = "/app/components/Card/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Card =
/*#__PURE__*/
function (_Component) {
  _inherits(Card, _Component);

  function Card(props) {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__style__["a" /* CardWrapper */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, this.props.children);
    }
  }]);

  return Card;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "./components/Card/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__ = __webpack_require__("./styles/utils/colors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_utils_helpers__ = __webpack_require__("./styles/utils/helpers.js");



var CardWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__CardWrapper",
  componentId: "jqnxsv-0"
})(["background:white;padding:34px;box-shadow:1px 1px 3px 2px #f3f3f3;border-radius:6px;@media (max-width:760px){padding-left:", ";padding-right:", ";}h2{margin-top:0;margin-bottom:1.6rem;}width:85%;margin:0 auto;margin-bottom:", ";"], __WEBPACK_IMPORTED_MODULE_2__styles_utils_helpers__["a" /* default */].squish, __WEBPACK_IMPORTED_MODULE_2__styles_utils_helpers__["a" /* default */].squish, __WEBPACK_IMPORTED_MODULE_2__styles_utils_helpers__["a" /* default */].squish);

/***/ }),

/***/ "./components/Layout/loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spinners__ = __webpack_require__("react-spinners");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spinners___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_spinners__);
var _jsxFileName = "/app/components/Layout/loader.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '25vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_spinners__["BounceLoader"], {
    color: '#0065FF',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
});

/***/ }),

/***/ "./components/Navbar/ActiveLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style__ = __webpack_require__("./components/Navbar/style.js");
var _jsxFileName = "/app/components/Navbar/ActiveLink.js";




var ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: href,
    onClick: handleClick,
    className: router.pathname.match(href) ? 'active' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/Navbar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("./components/Navbar/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_hamburger_svg__ = __webpack_require__("./static/hamburger.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_hamburger_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_hamburger_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ActiveLink__ = __webpack_require__("./components/Navbar/ActiveLink.js");
var _jsxFileName = "/app/components/Navbar/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Nav =
/*#__PURE__*/
function (_Component) {
  _inherits(Nav, _Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
    _this.state = {
      showDropDown: false
    };
    return _this;
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__style__["c" /* NavWrapper */], {
        dark: this.props.mode === "dark" ? true : false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__style__["a" /* Left */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        onClick: function onClick() {
          _this2.setState({
            showDropDown: _this2.state.showDropDown === true ? false : true
          });
        },
        src: __WEBPACK_IMPORTED_MODULE_2__static_hamburger_svg___default.a,
        style: {
          marginTop: 20,
          marginBottom: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__style__["b" /* Menu */], {
        showMenu: this.state.showDropDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ActiveLink__["a" /* default */], {
        href: "/products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Products")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ActiveLink__["a" /* default */], {
        href: "/howtobuy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "How To Buy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ActiveLink__["a" /* default */], {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Contact")), this.props.user && this.props.user.sid ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        style: {
          display: this.state.showDropDown ? "none" : "inline-block"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "|")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ActiveLink__["a" /* default */], {
        href: "/resources",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Resources")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ActiveLink__["a" /* default */], {
        href: "/shop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Store")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "dashboard_menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Dashboard"))) : null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__style__["d" /* Right */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.props.user && this.props.user.sid ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "dashboard_out",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Dashboard")) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Smarter with water."))));
    }
  }]);

  return Nav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./components/Navbar/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NavWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Right; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__ = __webpack_require__("./styles/utils/colors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_utils_helpers__ = __webpack_require__("./styles/utils/helpers.js");



var NavWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__NavWrapper",
  componentId: "s1nkgtma-0"
})(["display:flex;border-bottom:1px solid ", ";margin-bottom:2.5rem;ul{margin:0;}li{display:inline;margin:0;color:", ";a{color:", ";text-decoration:none;font-weight:500;}}"], function (props) {
  return props.dark ? __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].line8 : "white";
}, function (props) {
  return props.dark ? __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].blue : "white";
}, function (props) {
  return props.dark ? __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].blue : "white";
});
var Menu = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.ul.withConfig({
  displayName: "style__Menu",
  componentId: "s1nkgtma-1"
})(["display:", ";li a,li span{display:inline-block;line-height:73px;margin-right:34px;}@media (max-width:768px){flex-direction:column;text-align:left;li{height:44px;}div{display:flex;flex-direction:column;}}@media (min-width:760px){display:flex;}"], function (props) {
  return props.showMenu ? "flex" : "none";
});
var Left = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__Left",
  componentId: "s1nkgtma-2"
})(["flex:1;img{display:block;cursor:pointer;@media (min-width:760px){display:none;}@media (max-widt:760px){display:flex;flex-direction:column;text-align:left;}}.dashboard_menu{@media (min-width:760px){display:none;}}button{margin-top:0;padding-top:0;padding-bottom:0;padding-left:20px;padding-right:20px;margin-top:10px;margin-bottom:20px;}"]);
var Right = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__Right",
  componentId: "s1nkgtma-3"
})(["flex:0 auto;align-items:center;display:flex;li{font-weight:bold;font-family:Barlow;}button{margin-top:0;padding-top:0;padding-bottom:0;padding-left:20px;padding-right:20px;}@media (max-width:760px){display:none;}"]);

/***/ }),

/***/ "./components/Products/list.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style__ = __webpack_require__("./components/Products/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./config.js");
var _jsxFileName = "/app/components/Products/list.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ProductList =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductList, _Component);

  function ProductList() {
    _classCallCheck(this, ProductList);

    return _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).apply(this, arguments));
  }

  _createClass(ProductList, [{
    key: "render",
    value: function render() {
      var products = this.props.products;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__style__["a" /* ProductListContainer */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, products.map(function (product, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__style__["b" /* ProductThumb */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            height: 150
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: "".concat(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* ApiUrl */]).concat(product.gallery[0].url),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }, product.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
          title: product.description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }, product.description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
          key: i,
          href: "/products/item/".concat(product.slug),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, "More Details>")));
      }));
    }
  }]);

  return ProductList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./components/Products/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProductThumb; });
/* unused harmony export ProductDetailContent */
/* unused harmony export GalleryContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__ = __webpack_require__("./styles/utils/colors.js");


var ProductListContainer = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__ProductListContainer",
  componentId: "s1x7tdkd-0"
})(["display:flex;"]);
var ProductThumb = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__ProductThumb",
  componentId: "s1x7tdkd-1"
})(["text-decoration:none;color:#172b4d;display:flex;flex-direction:column;justify-content:center;align-items:center;width:30%;height:350px;@media (max-width:767px){width:90%;}margin-left:3.33%;box-shadow:0px 1px 2px 1px #f3f3f3;text-align:center;a{cursor:pointer;}a:hover{color:#0065ff;}div{height:60%;display:flex;justify-content:center;align-items:center;}h2{font-size:30px;margin-top:70px;margin-bottom:0;}h3{font-size:25px;margin:0;}"]);
var ProductDetailContent = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__ProductDetailContent",
  componentId: "s1x7tdkd-2"
})(["p{font-weight:400;}.ProductBreadcrum{.Separator{margin:0 13px;}.Blue{color:", ";}margin-bottom:45px;}.Hero{display:flex;.left{flex:0 0 40%;margin-right:10%;}.right{flex:0 0 50%;}.Title{margin-bottom:0;}.Description{margin-top:0;}}.Contact,.Contact-Mobile{border-top:1px solid ", ";margin-top:34px;padding:21px 0;p{margin:0;padding:0;margin-bottom:34px;}p a{color:", ";text-decoration:none;float:right;}button{display:block;width:100%;}}.Contact-Mobile{display:none;}@media (max-width:1023px){.Hero{flex-direction:column;}.left{flex:0 0 100%;margin-right:0;}.right{flex:0 0 100%;}.Contact{display:none;}.Contact-Mobile{display:block;}}.ProductInfo{padding:34px 0;border-top:1px solid ", ";margin-top:34px;h2{margin-bottom:34px;}}.DetailTable{display:flex;padding:21px 0;padding-bottom:34px;border-top:1px solid ", ";p{margin:0;}.left{flex:0 0 233px;font-weight:bold;}.right{flex:1 1 auto;}}.Inthebox{padding:21px 0;border-top:1px solid ", ";border-bottom:1px solid ", ";.title{margin-bottom:34px;}.items{margin-left:-5%;margin-top:-2%;}.item{display:inline-block;width:25%;padding-left:5%;padding-top:5%;box-sizing:border-box;img{margin-bottom:13px;}p{text-align:center;}}}@media (max-width:767px){.Inthebox{.item{width:50%;}}}"], __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].blue, __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].grey, __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].blue, __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].grey, __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].grey, __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].grey, __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].grey);
var GalleryContainer = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__GalleryContainer",
  componentId: "s1x7tdkd-3"
})(["width:100%;overflow:hidden;.Images{height:180px;position:relative;transition:all 500ms;.ImageContainer{width:100%;height:100%;position:absolute;bottom:0;text-align:center;}img{max-width:100%;max-height:100%;}}.Dots{text-align:center;.Dot{display:inline-block;width:13px;height:21px;line-height:21px;text-align:center;cursor:pointer;font-size:21px;color:", ";}.Dot:hover,.Dot.active{color:", ";}}"], __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].darkgrey, __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].blue);

/***/ }),

/***/ "./components/Slider/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Card__ = __webpack_require__("./components/Card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style__ = __webpack_require__("./components/Slider/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_tabs__ = __webpack_require__("react-tabs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_lazyload__ = __webpack_require__("react-lazyload");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_lazyload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Layout_loader__ = __webpack_require__("./components/Layout/loader.js");
var _jsxFileName = "/app/components/Slider/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));
    _this.state = {
      index: _this.props.defaultIndex
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_tabs__["Tabs"], {
        selectedTabClassName: "Tabs__tab--selected",
        defaultIndex: this.state.index || 0,
        onSelect: function onSelect(index) {
          _this2.setState({
            index: index
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_tabs__["TabList"], {
        style: {
          marginBottom: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__style__["a" /* TabWrapper */], {
        style: {
          paddingLeft: 100,
          paddingRight: 100,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, this.props.tabs.map(function (tab, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_tabs__["Tab"], {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: tab.img,
          style: {
            width: 40,
            height: 40
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          style: {
            fontSize: 14,
            fontWeight: 200
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, tab.label)));
      }))), this.props.tabs.map(function (tab, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_tabs__["TabPanel"], {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, tab.component);
      }));
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ }),

/***/ "./components/Slider/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__ = __webpack_require__("./styles/utils/colors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_utils_helpers__ = __webpack_require__("./styles/utils/helpers.js");



var TabWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__TabWrapper",
  componentId: "vzhayv-0"
})(["box-shadow:0px -3px 0px -1px ", " inset;li{cursor:pointer;margin-bottom:2rem;@media (min-width:760px){margin-bottom:0;}}p{color:#172B4D;font-weight:600;}.Tabs__tab--selected{border-bottom:3px solid ", "}"], __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].grey, __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].blue);

/***/ }),

/***/ "./config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OidcCLientId; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config__ = __webpack_require__("next/config");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_config__);


var _getConfig = __WEBPACK_IMPORTED_MODULE_0_next_config___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var ApiUrl = publicRuntimeConfig.API_ENDPOINT;
var OidcCLientId = publicRuntimeConfig.OIDC_CLIENTID;

/***/ }),

/***/ "./lib/request.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return POST; });
/* unused harmony export PATCH */
/* unused harmony export PUT */
/* unused harmony export DELETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET; });
/* unused harmony export REQUEST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INTERNAL; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_config__ = __webpack_require__("next/config");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sso_auth__ = __webpack_require__("./lib/sso-auth.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var _getConfig = __WEBPACK_IMPORTED_MODULE_1_next_config___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var userStore = {};

var createAxios = function createAxios() {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: process.browser ? publicRuntimeConfig.API_ENDPOINT : publicRuntimeConfig.API_ENDPOINT_SERVER
  });
};

var createInternalAxios = function createInternalAxios() {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: '/api',
    headers: {
      Authorization: "Bearer ".concat(userStore.access_token)
    }
  });
};

var setUser = function setUser(user) {
  userStore = _objectSpread({}, user);
};
var POST = function POST(url, data) {
  return createAxios().post(url, data);
};
var PATCH = function PATCH(url, data) {
  return createAxios().patch(url, data);
};
var PUT = function PUT(url, data) {
  return createAxios().put(url, data);
};
var DELETE = function DELETE(url, params) {
  return createAxios().delete(url, {
    params: params || {
      foo: 'bar'
    }
  });
};
var GET = function GET(url, params) {
  return createAxios().get(url, {
    params: params
  });
};
var REQUEST = function REQUEST(config) {
  return createAxios().request(config);
};
var INTERNAL = {
  GET: function GET(url, params) {
    return createInternalAxios().get(url, {
      params: params
    });
  },
  PUT: function PUT(url, data) {
    return createInternalAxios().put(url, data);
  },
  POST: function POST(url, data) {
    return createInternalAxios().post(url, data);
  },
  DELETE: function DELETE(url, params) {
    return createInternalAxios().delete(url, {
      params: params || {
        foo: 'bar'
      }
    });
  }
};

/***/ }),

/***/ "./lib/sso-auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ssoUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ssoLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ssoLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ssoCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ssoSilentCallback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_oidc_client__ = __webpack_require__("oidc-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_oidc_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_oidc_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_config__ = __webpack_require__("next/config");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_config__);



var manager = function manager() {
  var _getConfig = __WEBPACK_IMPORTED_MODULE_1_next_config___default()(),
      publicRuntimeConfig = _getConfig.publicRuntimeConfig;

  var settings = {
    authority: publicRuntimeConfig.OIDC_AUTHORITY,
    client_id: publicRuntimeConfig.OIDC_CLIENTID,
    redirect_uri: publicRuntimeConfig.OIDC_REDIRECT,
    popup_redirect_uri: publicRuntimeConfig.OIDC_REDIRECT,
    silent_redirect_uri: publicRuntimeConfig.OIDC_REDIRECT_SILENT,
    post_logout_redirect_uri: publicRuntimeConfig.OIDC_POST_LOGOUT,
    scope: 'openid profile reed_payment_portal',
    response_type: 'id_token token',
    filterProtocolClaims: true,
    automaticSilentRenew: true,
    userStore: process.browser ? new __WEBPACK_IMPORTED_MODULE_0_oidc_client__["WebStorageStateStore"]({
      store: window.localStorage
    }) : null
  };
  return process.browser ? new __WEBPACK_IMPORTED_MODULE_0_oidc_client__["UserManager"](settings) : {
    getUser: function getUser() {},
    signinRedirect: function signinRedirect() {},
    signoutRedirect: function signoutRedirect() {},
    signinRedirectCallback: function signinRedirectCallback() {},
    signinSilentCallback: function signinSilentCallback() {}
  };
};

var ssoUser = function ssoUser() {
  return manager().getUser();
};
var ssoLogin = function ssoLogin() {
  return manager().signinRedirect();
};
var ssoLogout = function ssoLogout() {
  return manager().signoutRedirect();
};
var ssoCallback = function ssoCallback() {
  return manager().signinRedirectCallback();
};
var ssoSilentCallback = function ssoSilentCallback() {
  return manager().signinSilentCallback();
};

/***/ }),

/***/ "./pages/products/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Navbar__ = __webpack_require__("./components/Navbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Slider__ = __webpack_require__("./components/Slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_reedvalve_png__ = __webpack_require__("./static/reedvalve.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_reedvalve_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_reedvalve_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_reedmeter_png__ = __webpack_require__("./static/reedmeter.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_reedmeter_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_reedmeter_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_reedrope_png__ = __webpack_require__("./static/reedrope.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_reedrope_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_reedrope_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_devices_png__ = __webpack_require__("./static/devices.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_devices_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_devices_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_plumbing_png__ = __webpack_require__("./static/plumbing.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_plumbing_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__static_plumbing_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_sensors_png__ = __webpack_require__("./static/sensors.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_sensors_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__static_sensors_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__static_accessories_png__ = __webpack_require__("./static/accessories.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__static_accessories_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__static_accessories_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__static_software_png__ = __webpack_require__("./static/software.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__static_software_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__static_software_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Products_list__ = __webpack_require__("./components/Products/list.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__actions_shopActions__ = __webpack_require__("./actions/shopActions.js");

var _jsxFileName = "/app/pages/products/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
















var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser,
    hardware: state.shop.items.filter(function (item) {
      return item.type === "hardware";
    }),
    plumbing: state.shop.items.filter(function (item) {
      return item.type === "plumbing";
    }),
    sensors: state.shop.items.filter(function (item) {
      return item.type === "sensors";
    }),
    accessories: state.shop.items.filter(function (item) {
      return item.type === "accessories";
    }),
    software: state.shop.items.filter(function (item) {
      return item.type === "software";
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_13_react_redux__["connect"])(mapStateToProps, null)(
/*#__PURE__*/
function (_Component) {
  _inherits(Products, _Component);

  function Products() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Products);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Products.__proto__ || Object.getPrototypeOf(Products)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "labels", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: ["hardware", "plumbing", "sensors", "accessories", "software"]
    }), _temp));
  }

  _createClass(Products, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "__container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Navbar__["a" /* default */], {
        user: this.props.currentUser,
        mode: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Slider__["a" /* default */], {
        defaultIndex: Math.max(this.labels.indexOf(this.props.cat || ""), 0),
        tabs: [{
          label: "Hardware",
          img: __WEBPACK_IMPORTED_MODULE_7__static_devices_png___default.a,
          component: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Products_list__["a" /* default */], {
            products: this.props.hardware,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          })
        }, {
          label: "Plumbing",
          img: __WEBPACK_IMPORTED_MODULE_8__static_plumbing_png___default.a,
          component: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Products_list__["a" /* default */], {
            products: this.props.plumbing,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          })
        }, {
          label: "Sensors",
          img: __WEBPACK_IMPORTED_MODULE_9__static_sensors_png___default.a,
          component: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Products_list__["a" /* default */], {
            products: this.props.sensors,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          })
        }, {
          label: "Accessories",
          img: __WEBPACK_IMPORTED_MODULE_10__static_accessories_png___default.a,
          component: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Products_list__["a" /* default */], {
            products: this.props.accessories,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          })
        }, {
          label: "Software",
          img: __WEBPACK_IMPORTED_MODULE_11__static_software_png___default.a,
          component: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Products_list__["a" /* default */], {
            products: this.props.software,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          })
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
        var store, query;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref2.store, query = _ref2.query;
                _context.next = 3;
                return store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_14__actions_shopActions__["c" /* getShopItems */])());

              case 3:
                return _context.abrupt("return", query);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Products;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"])));

/***/ }),

/***/ "./static/accessories.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/devices.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABmCAYAAAAj4wTsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU9SURBVHgB7dzZbhNXHAbw78zm2LiQQBClLAlqU6GiShWhpE0LtBWoQaVSqYqAqhutetG7vkEfpnd5gN5G6h33qaIozR4FCVCzOJuXOafnDGBix8uMJ3ZM8v2kMGN7bCJ/Ptt/xhGIaX5+PlkoFE6AQunt7Z0VQihE5CAmKZxbwlJ/6t0EqK75+UfX9OZvRGQhBqWUpWT+FzCk0Hzl30IDYgU1MzPztpL4CBSagPpueHjYRkSxghKO96UQSIOiOHlZQ0QNBzU6OupB+vdAkenJxG1E1HBQ6XS6X2/eBUUmIW5PTk4eifKchoIaGVF6tmj9oHddUGQC6PE878Moz2koqHPnZs/ozTegRrm+xBdRntBQUJblDOmPRTcoBnl9bGzsWNijGwrKV/JbUEzizWQyORD26MhB6ZJRn+5jB0FxuULYQ7poIMIcHDko31cPEHP9Rc8oqBv/LCx0hTk20hu+sLBwTOf/PWi3nE/7+CDMgZGCKih1U7fTU6DdY6lQs+fQQY2MjDiQ8j6CZQDtGoWhMLW/0EH19Lz1jh73IteoqC5T+/u83kGhg7IsdUVw7dQcllW3+wsV1MTEREJ3eA9ATaEUrtSr/YUKynGcT3TF9z1QUzyv/dVcm4YKStj2b3phFvlkF4XmSql+rHVA3RmcaZK24y7q3RSomR7lc9nzfX19q5UerNuiHCdhpuQMqfm63Y6Oj6s9WDOo4OIVoe6CWsEVEver1f5qBjU9PX0JSl4EtYSCvDo3N9dZ6bGaQelJxM/638OgFhFnfSHer/RI1aDGx8e7hcLXoJbSgdyrcn9lel5/A0IcB7VWldpfxaCCNZNl/wTaCyf7BwY+Lb+zYlBTU1On9NSDBdg9Yguxo1xXMSjbdc3JwYqzD2oBha/Ka39Vuj5w7bS3UuW1vx1BTU7OXtLd3gXQnvJ9dWf77R1B2Q5+By9e2XsCQ/r0UnENWxLIs35R3AG1g5LaX0lQltthFrgeqB2U1P6KQZkCrFDyV1DbMLW/xcXF02a/GJReO13UYfFrNG1FnM3lcp+ZvWJQtuvd5bcH24/lONfNNSvBt+InJhZO+9K/yQv22pCvrkrZ0R0EtZTd6Laz8g1dhAW1nbNWTrrFvzMhQ36rgFrPAhe2r4zYf7mFwtOzamSzWUjfD267rgtH/4gQQw6DapGN9XVkVjMoFApBYIYJyEt46Dp61FzkWvP57PpaYC2TwdJ/S8jn88WQjKCFbWXx9PET5HO5mq/BoJpML1ixsrxSElA508rqHbMrXd+/qwIPH1vI+jiwzChzJq1w7aSEu+3jv7mxURKA6erS6TR8KZFZWYXUW8OMXabF6fNQFV8/dlA5/f/8NWfhyRZn99MZgcP6fb58XBbvy+fyxX0zJnV1dcHdFsbK0nKwNWHWCip21+fr3yl3gFvSdqbdZHI779vOsl6+5VE+2rFbVFK/wuAJhYdPzaIZB1qnbgz93bLkPsexkX2+b1qNmfkdei2tp+gSG7pbLDnWrv6FmV0ZowZfl7hwNLjW4kBLuXoMKuujkqkU1tfWi7fX1tawubkZjE3bxy4zPXe96qcCd20ddYSnGytKJBJIHUrpddTL1uP7pWOFGbuOdHWWdIvluOBtsmACoRe0ZmvCKp+CW7aFzs5OJJPJmq/DoFrgRVgp3Q1ubm4FLSqoSnguEh0dQSmpHgbVQiYU89MIViZeEfu1Re27+WcQVAG5Oc/y/lBKJrEP7L8aydYyiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIj2p/8BxRKeE/3E3zgAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/hamburger.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNXB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNSAyNSIgd2lkdGg9IjI1cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0iVGFiQmFyLUljb25zIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iIzAwMDAwMCIgaWQ9IkhhbWJ1cmdlci1Sb3VuZCI+PHBhdGggZD0iTTAsNCBDMCwyLjg5NTQzMDUgMC44ODk3NjMyMzYsMiAyLjAwMzU5NDg2LDIgTDIyLjk5NjQwNTEsMiBDMjQuMTAyOTYsMiAyNSwyLjg4NzcyOTY0IDI1LDQgQzI1LDUuMTA0NTY5NSAyNC4xMTAyMzY4LDYgMjIuOTk2NDA1MSw2IEwyLjAwMzU5NDg2LDYgQzAuODk3MDM5OTc0LDYgMCw1LjExMjI3MDM2IDAsNCBMMCw0IFogTTAsMTIgQzAsMTAuODk1NDMwNSAwLjg4OTc2MzIzNiwxMCAyLjAwMzU5NDg2LDEwIEwyMi45OTY0MDUxLDEwIEMyNC4xMDI5NiwxMCAyNSwxMC44ODc3Mjk2IDI1LDEyIEMyNSwxMy4xMDQ1Njk1IDI0LjExMDIzNjgsMTQgMjIuOTk2NDA1MSwxNCBMMi4wMDM1OTQ4NiwxNCBDMC44OTcwMzk5NzQsMTQgMCwxMy4xMTIyNzA0IDAsMTIgTDAsMTIgWiBNMCwyMCBDMCwxOC44OTU0MzA1IDAuODg5NzYzMjM2LDE4IDIuMDAzNTk0ODYsMTggTDIyLjk5NjQwNTEsMTggQzI0LjEwMjk2LDE4IDI1LDE4Ljg4NzcyOTYgMjUsMjAgQzI1LDIxLjEwNDU2OTUgMjQuMTEwMjM2OCwyMiAyMi45OTY0MDUxLDIyIEwyLjAwMzU5NDg2LDIyIEMwLjg5NzAzOTk3NCwyMiAwLDIxLjExMjI3MDQgMCwyMCBMMCwyMCBaIiBpZD0iSGFtYnVyZ2VyIi8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ "./static/plumbing.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/reedmeter.png":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/reedmeter-a9efa0a84174436dce18f86571a365fa.png";

/***/ }),

/***/ "./static/reedrope.png":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/reedrope-f81536bf4e05151bbedf4468647dabfb.png";

/***/ }),

/***/ "./static/reedvalve.png":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/reedvalve-e20a99512d7fb4ef7300efbb711f115d.png";

/***/ }),

/***/ "./static/sensors.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAABmCAYAAACjkDP/AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU5SURBVHgB7ZpLbNxEGID/mbX3RR7bqIK2ImWrHtobrQRCVDlkxZETEgJxAXrhhlS4cmgixAmJVHBBXEoOCIkbcOCEFlFQLkhEgNTwqHbV0qZqq2ajTRPbY3s643a3Xj/W4/FMtYd80iaxszv7eX7P/J7fRpCTfzc7ixiZbwHQRbbZhAJQgHUEaB3T0vKxw4e7fB/K00Dn5tUVH9A50ABGsHTsqfllYSGdMo/w3xMS6nQ6Db9mbIFmKIJ1Q+SNFkADEQKPgVNiQpYF2KCgG9d1AcMEYe1ZkyVEyAT1EHEI+J4PiedQe22tGd62rJ1mtVYbbuOS+uOwbTv4PRz27UuXFilG59ngOwUINdI+6Pk+HJibBdM0QRWUUrh758GsEvRQe+3X82znEow6JkI0DH/HdoZ/4x9/+fntRzLZ2MQB1VhWSAgFYRKDh8vzPFAJb88N9To7O1FT9MM6wuWyoR4m13DREa49NhmGERZyWdfqCJfnenJCjqOhd3b3YvvEhVz15w+JnD8cISEeLp+NMKUyD1OFlJCOcA1SRRQxIQ3hcpzkNjOFCLtoUh0u27KB+lROyNYQrnGnQKaQ67mgEj73ODaRE5INFyZ9mNpsQ/3Ob7H/uWT8AY69yJcJ19yVr+DgxueBFIfUj8D/z62APXci2A5n9iTG9lDecFW3/4Yn//x4KMMxrm/C/MV3AFv9WGbPJSQTrpmr341s0y0E9BoCfK8Ps399z1YVdmYbqUIy4TJ3b8Rkhl/EpEQm2FQhmdF174njiTKc3swzialCSEh2dN06+jqQ/nRMZvvIs3B7/gWhNhKFZCdDc/og/LHwRSDAcStTcO35N+G/lz8Edqks1EbisJedDBFCUDt6Av559dPhaDJMAyqVMjg7u0JtxIQc1lCR3MUXkbON6ZF9O/0d0Y/HQ+YovpDnc49tiZ8CMSGi+FIjK1VEGRHivcOXtSqxrHwDJCakEpFUAWlCvGccxesu4uQ/wKGQo2FVGl0EiqBNiNcLRVIFJAnxcKkeXZZE78BASEe4CJGb7bUIpS0CRcA6wpW2CBQBU9/vgkKC6cORP0BWQcOrPEurgtcL0xaBQkLYcS9UK+V1UETeVBEFt1qtXr1qvGKaRhcKIpMqYkL8R+vFVnemVDldwqVlFr4uSOKS4qvcxJPnh0glf6pqNKfqtfZgG+PktUFvaztWolMiFOX3y5eb7PZUZ9x7eLh6d7ehKMpuWogsAkVQJqSqyqZEqEiqiKJEqEiqiKJEqEiqiFJYaFy9UIbCQqpLxoWEsuqFMhQSUpEqohQSKprZk5AWUpHZk5AWsjX0DkdeSOFkGEZKSGWqiCIlpKt3OHI9pGG4D8gtxGdmXeHi5Bey9YyuAbmE+CJQ13AfkEtId+9wcglZ1gQJ6UoVUcQftdA41MMIC+0mPBahAyGhXu+m1rknjFgPWdCDxwLtCAnxCgmAvwqaQYCWhc8hZHvngIKyOlIEym5Bfdk6s7Cau3QWPEQHsMIqIA1QAEvU3bJpLHEZvi1Vy7v4zdedslluYlysFMgXmD71fzr72hutwT6hp4WjlAyDN8RGHhSC3+xD/uhBSQk9fegQSHZunMiiV+6amsqX/eJNwbfhbSkhhMlZ1lQX8kNHXmxkvXRm4cJI21AAXos0XLc52N64stEe9/6Tx08GJy/FuGfWnW7rdCs24aqrmDM++uyTsWWQD959P/P7lJX0VCE1ytKYaxxIfV62XK6ACEqFqpVq8CrCxIVsXyiLfaEs9oWy2BfKQrUQv8lHE18U2iIN3AfHApqCN29uxwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/software.png":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/software-e43bd2bd324a7a95bdf0e7eb79dff599.png";

/***/ }),

/***/ "./styles/utils/colors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  lightblue: "#2684FF",
  blue: "#0065FF",
  offWhite: "#FAFBFC",
  green: "#57D9A3",
  black: "#172B4D",
  grey: "#E3E3E3",
  darkgrey: "#BDBDBD",
  line8: "#D3E6FF",
  text: "#42516E"
});

/***/ }),

/***/ "./styles/utils/helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  squish: "2rem",
  breakpoint: "768px"
});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/products/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/config":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "oidc-client":
/***/ (function(module, exports) {

module.exports = require("oidc-client");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lazyload":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-spinners":
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "react-tabs":
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=products.js.map