webpackHotUpdate(0,{

/***/ "./actions/authActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_USER_START; });
/* unused harmony export getUserStart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_USER_SUCCESS; });
/* unused harmony export getUserSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_USER_FAILED; });
/* unused harmony export getUserFailed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ACCOUNTS_SUCCESS; });
/* unused harmony export getAccountsSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getUser; });
/* unused harmony export LOGGED_IN_SUCCESS */
/* unused harmony export logInSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOG_OUT_SUCCESS; });
/* unused harmony export logOutSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return logOut; });
/* unused harmony export getAccounts */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_sso_auth__ = __webpack_require__("./lib/sso-auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_request__ = __webpack_require__("./lib/request.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paymentActions__ = __webpack_require__("./actions/paymentActions.js");


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




var GET_USER_START = 'GET_USER_START';
var getUserStart = function getUserStart() {
  return {
    type: GET_USER_START
  };
};
var GET_USER_SUCCESS = 'GET_USER_SUCCESS';
function getUserSuccess(data) {
  return {
    type: GET_USER_SUCCESS,
    data: data
  };
}
var GET_USER_FAILED = 'GET_USER_FAILED';
function getUserFailed() {
  return {
    type: GET_USER_FAILED
  };
}
var GET_ACCOUNTS_SUCCESS = 'GET_ACCOUNTS_SUCCESS';
function getAccountsSuccess(data) {
  return {
    type: GET_ACCOUNTS_SUCCESS,
    data: data
  };
}
var getUser = function getUser() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        var user;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(getUserStart());
                _context.prev = 1;
                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_1__lib_sso_auth__["d" /* ssoUser */])();

              case 4:
                user = _context.sent;

                if (user) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", dispatch(getUserFailed()));

              case 7:
                if (!(user.expires_at < new Date().valueOf() / 1000)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", dispatch(getUserFailed()));

              case 9:
                dispatch(getUserSuccess(_objectSpread({}, user)));
                Object(__WEBPACK_IMPORTED_MODULE_2__lib_request__["d" /* setUser */])(user);
                _context.next = 13;
                return dispatch(getAccounts());

              case 13:
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);
                dispatch(getUserFailed());

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 15]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var LOGGED_IN_SUCCESS = 'LOGGED_IN_SUCCESS';
function logInSuccess(data) {
  return {
    type: LOGGED_IN_SUCCESS,
    data: data
  };
}
var logIn = function logIn() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch) {
        var user;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_1__lib_sso_auth__["b" /* ssoLogin */])();

              case 2:
                user = _context2.sent;
                dispatch(getUser());

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
function logOutSuccess() {
  return {
    type: LOG_OUT_SUCCESS
  };
}
var logOut = function logOut() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_1__lib_sso_auth__["c" /* ssoLogout */])();

              case 2:
                Object(__WEBPACK_IMPORTED_MODULE_2__lib_request__["d" /* setUser */])({});
                dispatch(logOutSuccess());

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var getAccounts = function getAccounts() {
  var fetchPaymentProfile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(dispatch) {
        var resp;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2__lib_request__["b" /* INTERNAL */].GET('/accounts');

              case 2:
                resp = _context5.sent;
                dispatch(getAccountsSuccess(resp.data));

                if (fetchPaymentProfile) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return");

              case 6:
                resp.data.forEach(
                /*#__PURE__*/
                function () {
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(account, i) {
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            if (account.paymentId) {
                              _context4.next = 2;
                              break;
                            }

                            return _context4.abrupt("return", dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__paymentActions__["h" /* setPaymentProfile */])(account.aid, null)));

                          case 2:
                            dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__paymentActions__["g" /* getPaymentProfile */])(account, account.paymentId));

                          case 3:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, this);
                  }));

                  return function (_x5, _x6) {
                    return _ref5.apply(this, arguments);
                  };
                }());

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
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

  reactHotLoader.register(GET_USER_START, "GET_USER_START", "/app/actions/authActions.js");
  reactHotLoader.register(getUserStart, "getUserStart", "/app/actions/authActions.js");
  reactHotLoader.register(GET_USER_SUCCESS, "GET_USER_SUCCESS", "/app/actions/authActions.js");
  reactHotLoader.register(getUserSuccess, "getUserSuccess", "/app/actions/authActions.js");
  reactHotLoader.register(GET_USER_FAILED, "GET_USER_FAILED", "/app/actions/authActions.js");
  reactHotLoader.register(getUserFailed, "getUserFailed", "/app/actions/authActions.js");
  reactHotLoader.register(GET_ACCOUNTS_SUCCESS, "GET_ACCOUNTS_SUCCESS", "/app/actions/authActions.js");
  reactHotLoader.register(getAccountsSuccess, "getAccountsSuccess", "/app/actions/authActions.js");
  reactHotLoader.register(getUser, "getUser", "/app/actions/authActions.js");
  reactHotLoader.register(LOGGED_IN_SUCCESS, "LOGGED_IN_SUCCESS", "/app/actions/authActions.js");
  reactHotLoader.register(logInSuccess, "logInSuccess", "/app/actions/authActions.js");
  reactHotLoader.register(logIn, "logIn", "/app/actions/authActions.js");
  reactHotLoader.register(LOG_OUT_SUCCESS, "LOG_OUT_SUCCESS", "/app/actions/authActions.js");
  reactHotLoader.register(logOutSuccess, "logOutSuccess", "/app/actions/authActions.js");
  reactHotLoader.register(logOut, "logOut", "/app/actions/authActions.js");
  reactHotLoader.register(getAccounts, "getAccounts", "/app/actions/authActions.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/sso-auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ssoUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ssoLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ssoLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ssoCallback; });
/* unused harmony export ssoSilentCallback */
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

/***/ })

})
//# sourceMappingURL=0.a4ecc486d41081c538db.hot-update.js.map