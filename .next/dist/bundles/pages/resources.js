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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/resourcesActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INCOMING_RESOURCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getResources; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_request__ = __webpack_require__("./lib/request.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var INCOMING_RESOURCES = 'INCOMING_RESOURCES';
var getResources = function getResources() {
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
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_1__lib_request__["a" /* GET */])('/resource');

              case 2:
                resp = _context.sent;
                dispatch({
                  type: INCOMING_RESOURCES,
                  data: resp.data
                });

              case 4:
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

/***/ "./components/Resources/list.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("./components/Resources/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./config.js");
var _jsxFileName = "/app/components/Resources/list.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var ResourceList =
/*#__PURE__*/
function (_Component) {
  _inherits(ResourceList, _Component);

  function ResourceList() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ResourceList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ResourceList.__proto__ || Object.getPrototypeOf(ResourceList)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        search: "",
        searchType: ""
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "getFiltered", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(resources) {
        var _this$state = _this.state,
            search = _this$state.search,
            searchType = _this$state.searchType;
        if (search && !searchType) return resources.filter(function (v) {
          return v.title.toLowerCase().match(search.toLowerCase());
        });else if (search && searchType) return resources.filter(function (v) {
          return v.title.toLowerCase().match(search.toLowerCase()) && v.type === searchType;
        });else return resources;
      }
    }), _temp));
  }

  _createClass(ResourceList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var resources = this.props.resources;
      var filtered = this.getFiltered(resources);

      var types = _toConsumableArray(new Set(resources.map(function (v) {
        return v.type;
      })));

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__style__["a" /* ListHeader */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        value: this.state.search,
        type: "text",
        placeholder: "search for something specific",
        onChange: function onChange(e) {
          return _this2.setState({
            search: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        value: this.state.searchType,
        onChange: function onChange(e) {
          return _this2.setState({
            searchType: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "All Material"), types.map(function (v, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
          key: i,
          value: v,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, v);
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), filtered.map(function (v, i) {
        return v.file ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: "".concat(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ApiUrl */]).concat(v.file.url),
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, v.title)) : null;
      }));
    }
  }]);

  return ResourceList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./components/Resources/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var ListHeader = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__ListHeader",
  componentId: "s2xu03y-0"
})(["display:flex;select{flex:0 0 30%;margin-left:21px;}"]);

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

/***/ "./pages/resources/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Navbar__ = __webpack_require__("./components/Navbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Slider__ = __webpack_require__("./components/Slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_paper_png__ = __webpack_require__("./static/paper.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_paper_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_paper_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_resourcesActions__ = __webpack_require__("./actions/resourcesActions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Resources_list__ = __webpack_require__("./components/Resources/list.js");

var _jsxFileName = "/app/pages/resources/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Marketing = function Marketing() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Click here to download pdf."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "column--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Reed Core"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Instructions for installation"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Spec sheet"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Shipping information sheet"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "BACnet information"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Installation sheets"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "column--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Reed Bridge"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Instructions for installation"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Spec sheet"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Shipping information sheet"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "BACnet information"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Installation sheets"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "column--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Reed Valve Bank"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Instructions for installation"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Spec sheet"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "Shipping information sheet"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "BACnet information"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "Installation sheets"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "column--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "Reed Wireless"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, "Instructions for installation"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "Spec sheet"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, "Shipping information sheet"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "BACnet information"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, "Installation sheets")))))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser,
    resources: state.resources
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(mapStateToProps, null)(
/*#__PURE__*/
function (_Component) {
  _inherits(Resources, _Component);

  function Resources() {
    _classCallCheck(this, Resources);

    return _possibleConstructorReturn(this, (Resources.__proto__ || Object.getPrototypeOf(Resources)).apply(this, arguments));
  }

  _createClass(Resources, [{
    key: "render",
    value: function render() {
      var resources = this.props.resources;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "__container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Navbar__["a" /* default */], {
        user: this.props.currentUser,
        mode: "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Slider__["a" /* default */], {
        tabs: [{
          label: 'Hardware',
          img: __WEBPACK_IMPORTED_MODULE_4__static_paper_png___default.a,
          component: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Resources_list__["a" /* default */], {
            resources: resources.filter(function (v) {
              return v.product.type === 'hardware';
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          })
        }, {
          label: 'Plumbing',
          img: __WEBPACK_IMPORTED_MODULE_4__static_paper_png___default.a,
          component: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Resources_list__["a" /* default */], {
            resources: resources.filter(function (v) {
              return v.product.type === 'plumbing';
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          })
        }, {
          label: 'Accessories',
          img: __WEBPACK_IMPORTED_MODULE_4__static_paper_png___default.a,
          component: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Resources_list__["a" /* default */], {
            resources: resources.filter(function (v) {
              return v.product.type === 'accessories';
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            }
          })
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return ctx.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions_resourcesActions__["b" /* getResources */])());

              case 2:
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

  return Resources;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"])));

/***/ }),

/***/ "./static/hamburger.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNXB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNSAyNSIgd2lkdGg9IjI1cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0iVGFiQmFyLUljb25zIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iIzAwMDAwMCIgaWQ9IkhhbWJ1cmdlci1Sb3VuZCI+PHBhdGggZD0iTTAsNCBDMCwyLjg5NTQzMDUgMC44ODk3NjMyMzYsMiAyLjAwMzU5NDg2LDIgTDIyLjk5NjQwNTEsMiBDMjQuMTAyOTYsMiAyNSwyLjg4NzcyOTY0IDI1LDQgQzI1LDUuMTA0NTY5NSAyNC4xMTAyMzY4LDYgMjIuOTk2NDA1MSw2IEwyLjAwMzU5NDg2LDYgQzAuODk3MDM5OTc0LDYgMCw1LjExMjI3MDM2IDAsNCBMMCw0IFogTTAsMTIgQzAsMTAuODk1NDMwNSAwLjg4OTc2MzIzNiwxMCAyLjAwMzU5NDg2LDEwIEwyMi45OTY0MDUxLDEwIEMyNC4xMDI5NiwxMCAyNSwxMC44ODc3Mjk2IDI1LDEyIEMyNSwxMy4xMDQ1Njk1IDI0LjExMDIzNjgsMTQgMjIuOTk2NDA1MSwxNCBMMi4wMDM1OTQ4NiwxNCBDMC44OTcwMzk5NzQsMTQgMCwxMy4xMTIyNzA0IDAsMTIgTDAsMTIgWiBNMCwyMCBDMCwxOC44OTU0MzA1IDAuODg5NzYzMjM2LDE4IDIuMDAzNTk0ODYsMTggTDIyLjk5NjQwNTEsMTggQzI0LjEwMjk2LDE4IDI1LDE4Ljg4NzcyOTYgMjUsMjAgQzI1LDIxLjEwNDU2OTUgMjQuMTEwMjM2OCwyMiAyMi45OTY0MDUxLDIyIEwyLjAwMzU5NDg2LDIyIEMwLjg5NzAzOTk3NCwyMiAwLDIxLjExMjI3MDQgMCwyMCBMMCwyMCBaIiBpZD0iSGFtYnVyZ2VyIi8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ "./static/paper.png":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/paper-001eff01413608b88262784b02070824.png";

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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/resources/index.js");


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
//# sourceMappingURL=resources.js.map