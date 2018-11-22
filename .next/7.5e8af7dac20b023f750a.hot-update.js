webpackHotUpdate(7,{

/***/ "./lib/sso-auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ssoUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ssoLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ssoLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ssoCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ssoSilentCallback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_oidc_client__ = __webpack_require__("./node_modules/oidc-client/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_config__ = __webpack_require__("./node_modules/next/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_config__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




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
    userStore: process.browser ? new __WEBPACK_IMPORTED_MODULE_0_oidc_client__["b" /* WebStorageStateStore */]({
      store: window.localStorage
    }) : null
  };
  return process.browser ? new __WEBPACK_IMPORTED_MODULE_0_oidc_client__["a" /* UserManager */](settings) : {
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
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(manager, "manager", "/app/lib/sso-auth.js");
  reactHotLoader.register(ssoUser, "ssoUser", "/app/lib/sso-auth.js");
  reactHotLoader.register(ssoLogin, "ssoLogin", "/app/lib/sso-auth.js");
  reactHotLoader.register(ssoLogout, "ssoLogout", "/app/lib/sso-auth.js");
  reactHotLoader.register(ssoCallback, "ssoCallback", "/app/lib/sso-auth.js");
  reactHotLoader.register(ssoSilentCallback, "ssoSilentCallback", "/app/lib/sso-auth.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./pages/auth-callback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthCallback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_sso_auth__ = __webpack_require__("./lib/sso-auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout_loader__ = __webpack_require__("./components/Layout/loader.js");

var _jsxFileName = "/app/pages/auth-callback.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AuthCallback =
/*#__PURE__*/
function (_Component) {
  _inherits(AuthCallback, _Component);

  function AuthCallback(props) {
    _classCallCheck(this, AuthCallback);

    return _possibleConstructorReturn(this, (AuthCallback.__proto__ || Object.getPrototypeOf(AuthCallback)).call(this, props));
  }

  _createClass(AuthCallback, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__lib_sso_auth__["a" /* ssoCallback */])();

              case 2:
                setTimeout(function () {
                  return window.location.href = '/';
                }, 200);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout_loader__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return AuthCallback;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AuthCallback, "AuthCallback", "/app/pages/auth-callback.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/auth-callback")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.5e8af7dac20b023f750a.hot-update.js.map