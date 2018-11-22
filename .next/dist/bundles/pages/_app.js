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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/authActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_USER_START; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_sso_auth__ = __webpack_require__("./lib/sso-auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_request__ = __webpack_require__("./lib/request.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paymentActions__ = __webpack_require__("./actions/paymentActions.js");


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
                return Object(__WEBPACK_IMPORTED_MODULE_1__lib_sso_auth__["e" /* ssoUser */])();

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

/***/ }),

/***/ "./actions/cartActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TO_CART; });
/* unused harmony export addToCart */
/* unused harmony export addItemToCart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REMOVE_ITEM_FROM_CART; });
/* unused harmony export removeCartItem */
/* unused harmony export removeItemFromCart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_ITEM_QUANITY; });
/* unused harmony export changeCartItemQuantity */
/* unused harmony export updateItemQuantity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BEGIN_TRANSACTION; });
/* unused harmony export beginTransaction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return END_TRANSACTION; });
/* unused harmony export endTransaction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TRANSACTION_ERROR; });
/* unused harmony export transactionError */
/* unused harmony export createOrder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_request__ = __webpack_require__("./lib/request.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paymentActions__ = __webpack_require__("./actions/paymentActions.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




var ADD_TO_CART = "ADD_TO_CART";
var addToCart = function addToCart(data) {
  return {
    type: ADD_TO_CART,
    data: data
  };
};
var addItemToCart = function addItemToCart(product) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return dispatch(addToCart(product));

              case 2:
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
var REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
var removeCartItem = function removeCartItem(data) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    data: data
  };
};
var removeItemFromCart = function removeItemFromCart(productId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return dispatch(removeCartItem(productId));

              case 2:
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
var CHANGE_ITEM_QUANITY = "CHANGE_ITEM_QUANITY";
var changeCartItemQuantity = function changeCartItemQuantity(quantity, productId) {
  return {
    type: CHANGE_ITEM_QUANITY,
    data: {
      quantity: quantity,
      productId: productId
    }
  };
};
var updateItemQuantity = function updateItemQuantity(quantity, productId) {
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
                return dispatch(changeCartItemQuantity(quantity, productId));

              case 2:
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
var BEGIN_TRANSACTION = "BEGIN_TRANSACTION";
var beginTransaction = function beginTransaction() {
  return {
    type: BEGIN_TRANSACTION
  };
};
var END_TRANSACTION = "END_TRANSACTION";
var endTransaction = function endTransaction() {
  return {
    type: END_TRANSACTION
  };
};
var TRANSACTION_ERROR = "TRANSACTION_ERROR";
var transactionError = function transactionError(data) {
  return {
    type: TRANSACTION_ERROR,
    data: data
  };
};

var createOrderRegular = function createOrderRegular(formdata) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(dispatch, state) {
        var cart, user, account, paymentProfile, data, paymentProfileId, postdata, resp;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                cart = state().cart;
                user = state().auth.currentUser;
                account = formdata.account, paymentProfile = formdata.paymentProfile, data = _objectWithoutProperties(formdata, ["account", "paymentProfile"]);

                if (!(!account.paymentId || !paymentProfile)) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 6;
                return dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__paymentActions__["e" /* createProfile */])(_objectSpread({}, data, {
                  account: account
                })));

              case 6:
                paymentProfile = _context4.sent;
                paymentProfileId = paymentProfile.paymentProfiles[0].customerPaymentProfileId;
                _context4.next = 21;
                break;

              case 10:
                if (!data.shipFirstName) {
                  _context4.next = 14;
                  break;
                }

                _context4.next = 13;
                return dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__paymentActions__["f" /* createShipping */])(_objectSpread({}, data, {
                  account: account,
                  paymentProfile: paymentProfile
                })));

              case 13:
                data.customerAddressId = _context4.sent;

              case 14:
                if (!data.cardNumber) {
                  _context4.next = 20;
                  break;
                }

                _context4.next = 17;
                return dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__paymentActions__["d" /* changeCard */])(_objectSpread({}, data, {
                  account: account,
                  paymentProfile: paymentProfile
                })));

              case 17:
                paymentProfileId = _context4.sent;
                _context4.next = 21;
                break;

              case 20:
                paymentProfileId = paymentProfile.paymentProfiles[0].customerPaymentProfileId;

              case 21:
                // console.log(paymentProfile);
                // throw new Error('not ready');
                postdata = _objectSpread({}, data, {
                  paymentId: paymentProfile.customerProfileId,
                  paymentProfileId: paymentProfileId,
                  userId: user.sid,
                  accountId: account.aid,
                  invoiceNumber: "inv-".concat(new Date().valueOf()),
                  date: new Date(),
                  ordereditems: cart.addedItems.map(function (v) {
                    return {
                      product: v._id,
                      productName: v.title,
                      productImage: v.gallery[0].url,
                      variant: v.variants.map(function (v) {
                        return v._id;
                      }),
                      variantName: v.variants.map(function (v) {
                        return v.title;
                      }).join(', '),
                      price: v.variants.reduce(function (a, b) {
                        return a + (b.price || 0);
                      }, 0),
                      quantity: v.quantity
                    };
                  }),
                  beforeTax: cart.beforeTax,
                  tax: cart.tax,
                  total: cart.beforeTax + cart.tax,
                  description: 'REED store purchase',
                  accountType: 'regular'
                });
                dispatch(beginTransaction());
                _context4.prev = 23;
                _context4.next = 26;
                return __WEBPACK_IMPORTED_MODULE_2__lib_request__["b" /* INTERNAL */].POST('/checkout', postdata);

              case 26:
                resp = _context4.sent;
                dispatch(endTransaction());
                _context4.next = 34;
                break;

              case 30:
                _context4.prev = 30;
                _context4.t0 = _context4["catch"](23);
                dispatch(transactionError(_context4.t0.response ? _context4.t0.response.data.message : _context4.t0));
                throw _context4.t0;

              case 34:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[23, 30]]);
      }));

      return function (_x4, _x5) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

var createOrderDistributor = function createOrderDistributor(formdata) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(dispatch, state) {
        var cart, user, account, paymentProfile, shipFirstName, shipLastName, shipAddress, shipCity, shipProvinceState, shipPostalZip, shipCountry, shipPhoneNumber, customerAddressId, data, postdata;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                cart = state().cart;
                user = state().auth.currentUser; // map shipping data

                account = formdata.account, paymentProfile = formdata.paymentProfile, shipFirstName = formdata.shipFirstName, shipLastName = formdata.shipLastName, shipAddress = formdata.shipAddress, shipCity = formdata.shipCity, shipProvinceState = formdata.shipProvinceState, shipPostalZip = formdata.shipPostalZip, shipCountry = formdata.shipCountry, shipPhoneNumber = formdata.shipPhoneNumber, customerAddressId = formdata.customerAddressId, data = _objectWithoutProperties(formdata, ["account", "paymentProfile", "shipFirstName", "shipLastName", "shipAddress", "shipCity", "shipProvinceState", "shipPostalZip", "shipCountry", "shipPhoneNumber", "customerAddressId"]);
                data.firstName = shipFirstName;
                data.lastName = shipLastName;
                data.address = shipAddress;
                data.city = shipCity;
                data.state = shipProvinceState;
                data.zip = shipPostalZip;
                data.country = shipCountry;
                data.phoneNumber = shipPhoneNumber;
                postdata = _objectSpread({}, data, {
                  userId: user.sid,
                  accountId: account.aid,
                  invoiceNumber: "inv-".concat(new Date().valueOf()),
                  date: new Date(),
                  ordereditems: cart.addedItems.map(function (v) {
                    return {
                      product: v._id,
                      productName: v.title,
                      productImage: v.gallery[0].url,
                      variant: v.variants.map(function (v) {
                        return v._id;
                      }),
                      variantName: v.variants.map(function (v) {
                        return v.title;
                      }).join(', '),
                      price: v.variants.reduce(function (a, b) {
                        return a + (b.price || 0);
                      }, 0),
                      quantity: v.quantity
                    };
                  }),
                  beforeTax: cart.beforeTax,
                  tax: cart.tax,
                  total: cart.beforeTax + cart.tax,
                  description: 'REED store purchase',
                  accountType: 'distributor' // create ordered items

                });
                _context6.next = 14;
                return Promise.all(postdata.ordereditems.map(
                /*#__PURE__*/
                function () {
                  var _ref6 = _asyncToGenerator(
                  /*#__PURE__*/
                  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(v) {
                    var resp;
                    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return Object(__WEBPACK_IMPORTED_MODULE_2__lib_request__["c" /* POST */])('/ordereditem', v);

                          case 2:
                            resp = _context5.sent;
                            return _context5.abrupt("return", resp.data._id);

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));

                  return function (_x8) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 14:
                postdata.ordereditems = _context6.sent;
                console.log(postdata); // create order

                _context6.next = 18;
                return Object(__WEBPACK_IMPORTED_MODULE_2__lib_request__["c" /* POST */])('/order', postdata);

              case 18:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6, _x7) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

var createOrder = function createOrder(formdata) {
  return function (dispatch) {
    var account = formdata.account;
    if (account.type === 'regular') return dispatch(createOrderRegular(formdata));else return dispatch(createOrderDistributor(formdata));
  };
};

/***/ }),

/***/ "./actions/paymentActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_PAYMENT_ID_SUCCESS; });
/* unused harmony export setPaymentId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_PAYMENT_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setPaymentProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getPaymentProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return changeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_SHIPPING; });
/* unused harmony export deleteShipping */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_request__ = __webpack_require__("./lib/request.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var SET_PAYMENT_ID_SUCCESS = 'SET_PAYMENT_ID_SUCCESS';

function setPaymentIDSuccess(data) {
  return {
    type: SET_PAYMENT_ID_SUCCESS,
    data: data
  };
}

var setPaymentId = function setPaymentId(aid, paymentId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1__lib_request__["b" /* INTERNAL */].POST("/accounts/".concat(aid, "/paymentId/").concat(paymentId));

              case 2:
                dispatch(setPaymentIDSuccess({
                  aid: aid,
                  paymentId: paymentId
                }));

              case 3:
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
var SET_PAYMENT_PROFILE = 'SET_PAYMENT_PROFILE';
var setPaymentProfile = function setPaymentProfile(aid, profile) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch({
                  type: SET_PAYMENT_PROFILE,
                  data: {
                    aid: aid,
                    profile: profile
                  }
                });

              case 1:
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
var getPaymentProfile = function getPaymentProfile(account, paymentId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch) {
        var resp;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1__lib_request__["b" /* INTERNAL */].GET("/payment/".concat(account.paymentId));

              case 2:
                resp = _context3.sent;
                dispatch(setPaymentProfile(account.aid, resp.data));
                return _context3.abrupt("return", resp.data);

              case 5:
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
var createProfile = function createProfile(_ref4) {
  var cardNumber = _ref4.cardNumber,
      cardAddress = _ref4.cardAddress,
      cardZip = _ref4.cardZip,
      cardExpiry = _ref4.cardExpiry,
      cardCvc = _ref4.cardCvc,
      shipFirstname = _ref4.shipFirstname,
      shipLastname = _ref4.shipLastname,
      shipAddress = _ref4.shipAddress,
      shipCity = _ref4.shipCity,
      shipProvincestate = _ref4.shipProvincestate,
      shipPostalzip = _ref4.shipPostalzip,
      shipCountry = _ref4.shipCountry,
      shipPhonenumber = _ref4.shipPhonenumber,
      account = _ref4.account;
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(dispatch) {
        var resp;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1__lib_request__["b" /* INTERNAL */].POST('/payment', {
                  cardNumber: cardNumber,
                  cardAddress: cardAddress,
                  cardZip: cardZip,
                  cardExpiry: cardExpiry,
                  cardCvc: cardCvc,
                  shipFirstname: shipFirstname,
                  shipLastname: shipLastname,
                  shipAddress: shipAddress,
                  shipCity: shipCity,
                  shipProvincestate: shipProvincestate,
                  shipPostalzip: shipPostalzip,
                  shipCountry: shipCountry,
                  shipPhonenumber: shipPhonenumber,
                  userName: account.name,
                  userEmail: account.owner
                });

              case 2:
                resp = _context4.sent;
                dispatch(setPaymentId(account.aid, resp.data.customerProfileId));
                dispatch(setPaymentProfile(account.aid, resp.data));
                return _context4.abrupt("return", resp.data);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};
var changeCard = function changeCard(_ref6) {
  var cardNumber = _ref6.cardNumber,
      cardAddress = _ref6.cardAddress,
      cardZip = _ref6.cardZip,
      cardExpiry = _ref6.cardExpiry,
      cardCvc = _ref6.cardCvc,
      account = _ref6.account,
      paymentProfile = _ref6.paymentProfile;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(dispatch) {
        var resp;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1__lib_request__["b" /* INTERNAL */].PUT("/payment/".concat(paymentProfile.customerProfileId), {
                  cardNumber: cardNumber,
                  cardAddress: cardAddress,
                  cardZip: cardZip,
                  cardExpiry: cardExpiry,
                  cardCvc: cardCvc,
                  paymentProfileId: paymentProfile.paymentProfiles[0].customerPaymentProfileId
                });

              case 2:
                resp = _context5.sent;
                dispatch(setPaymentProfile(account.aid, resp.data.profile));
                return _context5.abrupt("return", resp.data.paymentProfileId);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};
var createShipping = function createShipping(_ref8) {
  var shipFirstName = _ref8.shipFirstName,
      shipLastName = _ref8.shipLastName,
      shipAddress = _ref8.shipAddress,
      shipCity = _ref8.shipCity,
      shipProvinceState = _ref8.shipProvinceState,
      shipPostalZip = _ref8.shipPostalZip,
      shipCountry = _ref8.shipCountry,
      shipPhoneNumber = _ref8.shipPhoneNumber,
      account = _ref8.account,
      paymentProfile = _ref8.paymentProfile;
  return (
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(dispatch) {
        var resp;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1__lib_request__["b" /* INTERNAL */].POST("/payment/".concat(paymentProfile.customerProfileId, "/shipping"), {
                  shipFirstName: shipFirstName,
                  shipLastName: shipLastName,
                  shipAddress: shipAddress,
                  shipCity: shipCity,
                  shipProvinceState: shipProvinceState,
                  shipPostalZip: shipPostalZip,
                  shipCountry: shipCountry,
                  shipPhoneNumber: shipPhoneNumber
                });

              case 2:
                resp = _context6.sent;
                dispatch(setPaymentProfile(account.aid, resp.data.profile));
                return _context6.abrupt("return", resp.data.customerAddressId);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref9.apply(this, arguments);
      };
    }()
  );
};
var DELETE_SHIPPING = 'DELETE_SHIPPING';
var deleteShipping = function deleteShipping(customerAddressId, account, paymentProfile) {
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(dispatch) {
        var resp;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(paymentProfile.shipToList && paymentProfile.shipToList.length === 1)) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return");

              case 2:
                dispatch({
                  type: DELETE_SHIPPING,
                  data: {
                    customerAddressId: customerAddressId,
                    customerProfileId: paymentProfile.customerProfileId
                  }
                });
                _context7.next = 5;
                return __WEBPACK_IMPORTED_MODULE_1__lib_request__["b" /* INTERNAL */].DELETE("/payment/".concat(paymentProfile.customerProfileId, "/shipping/").concat(customerAddressId));

              case 5:
                resp = _context7.sent;
                dispatch(setPaymentProfile(account.aid, resp.data.profile));
                return _context7.abrupt("return", resp.data.profile);

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function (_x7) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./actions/productActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INCOMING_PRODUCT; });
/* unused harmony export getProductBySlug */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_request__ = __webpack_require__("./lib/request.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var INCOMING_PRODUCT = 'INCOMING_PRODUCT';
var getProductBySlug = function getProductBySlug(slug) {
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
                return Object(__WEBPACK_IMPORTED_MODULE_1__lib_request__["a" /* GET */])("/product?slug=".concat(slug));

              case 2:
                resp = _context.sent;
                _context.next = 5;
                return Promise.all(resp.data[0].productInBoxes.map(function (v) {
                  return Object(__WEBPACK_IMPORTED_MODULE_1__lib_request__["a" /* GET */])("/productinbox/".concat(v._id));
                }));

              case 5:
                resp.data[0].productInBoxes = _context.sent;
                resp.data[0].productInBoxes = resp.data[0].productInBoxes.map(function (v) {
                  return v.data;
                });
                dispatch({
                  type: INCOMING_PRODUCT,
                  data: resp.data[0]
                });

              case 8:
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

/***/ "./actions/purchaseActions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INCOMING_ORDERS; });
/* unused harmony export getOrders */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_request__ = __webpack_require__("./lib/request.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var INCOMING_ORDERS = 'INCOMING_ORDERS';
var getOrders = function getOrders() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch, state) {
        var accounts, orders;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // get all purchases for all accounts
                // result an object:
                // { aid1: OrderArray, aid2: OrderArray,  }
                accounts = state().auth.accounts;

                if (!accounts.loading) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return Promise.all(accounts.map(function (v) {
                  return Object(__WEBPACK_IMPORTED_MODULE_1__lib_request__["a" /* GET */])("/order?accountId=".concat(v.aid, "&_sort=date:desc")).then(function (resp) {
                    return _defineProperty({}, v.aid, resp.data);
                  });
                }));

              case 5:
                _context.t0 = function (a, b) {
                  return _objectSpread({}, a, b);
                };

                _context.t1 = {};
                orders = _context.sent.reduce(_context.t0, _context.t1);
                dispatch({
                  type: INCOMING_ORDERS,
                  data: orders
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

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

/***/ "./components/Breadcrumbs/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style__ = __webpack_require__("./components/Breadcrumbs/style.js");
var _jsxFileName = "/app/components/Breadcrumbs/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Breadcrumbs =
/*#__PURE__*/
function (_Component) {
  _inherits(Breadcrumbs, _Component);

  function Breadcrumbs() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Breadcrumbs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Breadcrumbs.__proto__ || Object.getPrototypeOf(Breadcrumbs)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        items: [],
        currentPath: '',
        open: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: !_this.state.open
        });
      }
    }), _temp));
  }

  _createClass(Breadcrumbs, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          items = _state.items,
          currentPath = _state.currentPath,
          open = _state.open;
      var last3 = items.length > 3 ? this.state.items.slice(-3) : items; // render null for excluded pages

      if (!currentPath || this.props.exclude.filter(function (v) {
        return v.test(currentPath);
      }).length) return null;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__style__["b" /* BreadcrumbContainer */], {
        className: "__container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__style__["a" /* Breadcrumb */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "home"))), items.length > 3 && !this.state.open ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__style__["a" /* Breadcrumb */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        onClick: this.toggleOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "...")) : null, (open ? items : last3).map(function (v, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__style__["a" /* Breadcrumb */], {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
          href: v.href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, "".concat(v.name))));
      }), items.length > 3 && this.state.open ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__style__["a" /* Breadcrumb */], {
        className: "last",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        onClick: this.toggleOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "<")) : null);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var asPath = props.router.asPath;
      if (state.currentPath === asPath || !asPath) return null;
      if (asPath === '/') return {
        items: [],
        currentPath: '',
        open: false
      }; // ignored URL path segment

      var ignore = ['item'];
      var pathItems = [];
      return {
        items: asPath.replace(/^\//, '').replace(/\/$/, '').split('/').reduce(function (a, b) {
          pathItems.push(b);
          if (ignore.indexOf(b) !== -1) return a;
          a.push({
            name: b.replace(/\?.+/, '').replace(/\#.+/, ''),
            href: "/".concat(pathItems.join('/')).replace(/\/\//, '/')
          });
          return a;
        }, []),
        currentPath: asPath
      };
    }
  }]);

  return Breadcrumbs;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_2_next_router__["withRouter"])(Breadcrumbs));

/***/ }),

/***/ "./components/Breadcrumbs/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BreadcrumbContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Breadcrumb; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__ = __webpack_require__("./styles/utils/colors.js");


var BreadcrumbContainer = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__BreadcrumbContainer",
  componentId: "c20qll-0"
})(["padding:0 2rem;margin-top:34px;@media (max-width:766px){margin:0;padding:0;width:100%;background:", ";height:28px;padding:1px 0;box-sizing:border-box;}"], __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].grey);
var Breadcrumb = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__Breadcrumb",
  componentId: "c20qll-1"
})(["display:inline-block;line-height:1.68em;background:", ";margin-right:15px;margin-bottom:13px;box-sizing:border-box;position:relative;&:after{position:absolute;display:inline-block;width:0px;height:0px;border-top:13px solid transparent;border-bottom:13px solid transparent;border-left:13px solid ", ";top:0;left:100%;content:\"\";}&:before{position:absolute;display:inline-block;width:0px;height:0px;border-top:13px solid ", ";border-bottom:13px solid ", ";border-left:13px solid transparent;top:0;left:-13px;content:\"\";}&:first-child:before{display:none;}&.last:after{display:none;}a{color:white;padding:0 8px;text-decoration:none;cursor:pointer;}"], __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].blue, __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].blue, __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].blue, __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__["a" /* default */].blue);

/***/ }),

/***/ "./components/Footer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_logo_svg__ = __webpack_require__("./static/logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_facebook_svg__ = __webpack_require__("./static/facebook.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_facebook_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_facebook_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_linkedin_svg__ = __webpack_require__("./static/linkedin.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_linkedin_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_linkedin_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_twitter_svg__ = __webpack_require__("./static/twitter.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_twitter_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_twitter_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_instagram_svg__ = __webpack_require__("./static/instagram.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_instagram_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_instagram_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);
var _jsxFileName = "/app/components/Footer/index.js";







/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Products")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    prefetch: true,
    href: "/products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Hardware"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    prefetch: true,
    href: "/products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Plubming"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    prefetch: true,
    href: "/products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Accessories"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    prefetch: true,
    href: "/products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Network"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "How to Buy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    prefetch: true,
    href: "/howtobuy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "Distributors"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    prefetch: true,
    href: "/shop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "Buy Online"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, "Contact")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    prefetch: true,
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, "Phone"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    prefetch: true,
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, "Email"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    prefetch: true,
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, "Location"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column--6 logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_1__static_logo_svg___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "row bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column--5 extra",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, "\xA9. Reed Controls Inc 2018"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, "Legal"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, "Privacy"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column--7 social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    style: {
      width: "25px"
    },
    src: __WEBPACK_IMPORTED_MODULE_2__static_facebook_svg___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    style: {
      width: "25px"
    },
    src: __WEBPACK_IMPORTED_MODULE_3__static_linkedin_svg___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    style: {
      width: "25px"
    },
    src: __WEBPACK_IMPORTED_MODULE_4__static_twitter_svg___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    style: {
      width: "25px"
    },
    src: __WEBPACK_IMPORTED_MODULE_5__static_instagram_svg___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }))))))));
});

/***/ }),

/***/ "./components/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_cart_svg__ = __webpack_require__("./static/cart.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_cart_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_cart_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_downarrow_svg__ = __webpack_require__("./static/downarrow.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_downarrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_downarrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_logo_svg__ = __webpack_require__("./static/logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("./config.js");
var _jsxFileName = "/app/components/Header/index.js";

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
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Layout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer__ = __webpack_require__("./components/Footer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Breadcrumbs__ = __webpack_require__("./components/Breadcrumbs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style__ = __webpack_require__("./components/Layout/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_authActions__ = __webpack_require__("./actions/authActions.js");
var _jsxFileName = "/app/components/Layout/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      process.browser && this.props.getUser();
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__style__["a" /* AppWrapper */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_Header__["a" /* default */], {
        loading: this.props.authLoading,
        cart: this.props.cart,
        currentUser: this.props.currentUser,
        logOut: this.props.logOut,
        logIn: this.props.logIn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        style: {
          flex: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, this.props.children), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

var mapDispatchToProps = {
  logIn: function logIn() {
    return Object(__WEBPACK_IMPORTED_MODULE_6__actions_authActions__["g" /* logIn */])();
  },
  getUser: function getUser() {
    return Object(__WEBPACK_IMPORTED_MODULE_6__actions_authActions__["f" /* getUser */])();
  },
  logOut: function logOut() {
    return Object(__WEBPACK_IMPORTED_MODULE_6__actions_authActions__["h" /* logOut */])();
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser,
    cart: state.cart,
    authLoading: state.auth.loading
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Layout));

/***/ }),

/***/ "./components/Layout/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_utils_colors__ = __webpack_require__("./styles/utils/colors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_utils_helpers__ = __webpack_require__("./styles/utils/helpers.js");



var AppWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "style__AppWrapper",
  componentId: "avgl49-0"
})(["display:flex;min-height:100vh;flex-direction:column;section{padding:", "}"], __WEBPACK_IMPORTED_MODULE_2__styles_utils_helpers__["a" /* default */].squish);

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

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_persist__ = __webpack_require__("redux-persist");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_persist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux_persist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout__ = __webpack_require__("./components/Layout/index.js");

var _jsxFileName = "/app/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_5__store__["a" /* initStore */])(
/*#__PURE__*/
function (_App) {
  _inherits(Layout, _App);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (process.browser) Object(__WEBPACK_IMPORTED_MODULE_6_redux_persist__["persistStore"])(this.props.store);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          store = _props.store,
          router = _props.router;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, ctx;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                _context.t1 = _context.t0;
                return _context.abrupt("return", {
                  pageProps: _context.t1
                });

              case 10:
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

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_2_next_app___default.a)));

/***/ }),

/***/ "./reducers/authReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_authActions__ = __webpack_require__("./actions/authActions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_paymentActions__ = __webpack_require__("./actions/paymentActions.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  currentUser: {},
  access_token: '',
  accounts: {
    loading: true,
    length: 0
  },
  paymentProfiles: {
    loading: true,
    length: 0
  },
  loading: true
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread({}, initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_authActions__["c" /* GET_USER_START */]:
      return _objectSpread({}, state, {
        loading: true
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_authActions__["b" /* GET_USER_FAILED */]:
      return _objectSpread({}, state, {
        loading: false
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_authActions__["d" /* GET_USER_SUCCESS */]:
      return _objectSpread({}, state, {
        currentUser: action.data.profile,
        access_token: action.data.access_token,
        loading: false
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_authActions__["a" /* GET_ACCOUNTS_SUCCESS */]:
      return _objectSpread({}, state, {
        accounts: action.data
      });

    case __WEBPACK_IMPORTED_MODULE_1__actions_paymentActions__["b" /* SET_PAYMENT_ID_SUCCESS */]:
      {
        var _action$data = action.data,
            aid = _action$data.aid,
            paymentId = _action$data.paymentId;
        if (state.accounts.loading) return state;

        var accounts = _toConsumableArray(state.accounts);

        var accountIndex = accounts.findIndex(function (v) {
          return v.aid === aid;
        });
        accounts[accountIndex].paymentId = paymentId;
        return _objectSpread({}, state, {
          accounts: accounts
        });
      }

    case __WEBPACK_IMPORTED_MODULE_1__actions_paymentActions__["c" /* SET_PAYMENT_PROFILE */]:
      {
        var _action$data2 = action.data,
            _aid = _action$data2.aid,
            profile = _action$data2.profile;
        if (state.accounts.loading) return state;

        var _accountIndex = state.accounts.findIndex(function (v) {
          return v.aid === _aid;
        });

        var paymentProfiles = state.paymentProfiles.loading ? [] : _toConsumableArray(state.paymentProfiles); // only use default payment profile
        // or use the first one

        var defaultPayment = profile && profile.paymentProfiles.length && profile.paymentProfiles.find(function (v) {
          return v.defaultPaymentProfile;
        });
        var firstPayment = profile && profile.paymentProfiles.length && profile.paymentProfiles[0];
        profile.paymentProfiles = defaultPayment ? [defaultPayment] : firstPayment ? [firstPayment] : [];
        paymentProfiles[_accountIndex] = profile;
        return _objectSpread({}, state, {
          paymentProfiles: paymentProfiles
        });
      }

    case __WEBPACK_IMPORTED_MODULE_1__actions_paymentActions__["a" /* DELETE_SHIPPING */]:
      {
        if (state.paymentProfiles.loading) return state;
        var _action$data3 = action.data,
            customerAddressId = _action$data3.customerAddressId,
            customerProfileId = _action$data3.customerProfileId;

        var _paymentProfiles = _toConsumableArray(state.paymentProfiles);

        var paymentProfile = _paymentProfiles.find(function (v) {
          return v.customerProfileId === customerProfileId;
        });

        if (!paymentProfile) return state;
        var shippingIndex = paymentProfile.shipToList.findIndex(function (v) {
          return v.customerAddressId === customerAddressId;
        });
        if (shippingIndex < 0) return state;
        paymentProfile.shipToList.splice(shippingIndex, 1);
        return _objectSpread({}, state, {
          paymentProfiles: _paymentProfiles
        });
      }

    case __WEBPACK_IMPORTED_MODULE_0__actions_authActions__["e" /* LOG_OUT_SUCCESS */]:
      return _objectSpread({}, state);

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/cartReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_cartActions__ = __webpack_require__("./actions/cartActions.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = function initialState() {
  return {
    addedItems: [],
    beforeTax: 0,
    totalItem: 0,
    loading: false
  };
};

var getTax = function getTax(beforeTax) {
  return Math.round(beforeTax * 0.13 * 100) / 100;
};

var getBeforeTax = function getBeforeTax(items) {
  return items.reduce(function (a, b) {
    return a + b.quantity * b.variants.reduce(function (a, b) {
      return a + (b.price || 0);
    }, 0);
  }, 0);
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread({}, initialState());
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_cartActions__["a" /* ADD_TO_CART */]:
      {
        var item = _objectSpread({}, action.data, {
          quantity: 1
        }); // check items having the same id and variant


        var sameItem = state.addedItems.findIndex(function (v) {
          return v._id === item._id && item.variants.filter(function (vv) {
            return v.variants.find(function (vvv) {
              return vv._id === vvv._id;
            });
          }).length === item.variants.length;
        }); // iff sameItem exists, just add quantity.

        var addedItems = _toConsumableArray(state.addedItems);

        if (sameItem > -1) addedItems[sameItem].quantity += 1;else addedItems.push(item);
        var beforeTax = getBeforeTax(addedItems);
        return {
          addedItems: addedItems,
          beforeTax: beforeTax,
          tax: getTax(beforeTax),
          totalItem: addedItems.reduce(function (a, b) {
            return a + b.quantity;
          }, 0)
        };
      }

    case __WEBPACK_IMPORTED_MODULE_0__actions_cartActions__["e" /* REMOVE_ITEM_FROM_CART */]:
      {
        var newState = _toConsumableArray(state.addedItems);

        newState.splice(action.data, 1);

        var _beforeTax = getBeforeTax(newState);

        return {
          addedItems: newState,
          beforeTax: _beforeTax,
          tax: getTax(_beforeTax),
          totalItem: newState.reduce(function (a, b) {
            return a + b.quantity;
          }, 0)
        };
      }

    case __WEBPACK_IMPORTED_MODULE_0__actions_cartActions__["c" /* CHANGE_ITEM_QUANITY */]:
      {
        var _newState = _toConsumableArray(state.addedItems);

        _newState[action.data.productId].quantity = action.data.quantity;
        if (!_newState[action.data.productId].quantity) _newState.splice(action.data.productId, 1);

        var _beforeTax2 = getBeforeTax(_newState);

        return {
          addedItems: _newState,
          beforeTax: _beforeTax2,
          tax: getTax(_beforeTax2),
          totalItem: _newState.reduce(function (a, b) {
            return a + b.quantity;
          }, 0)
        };
      }

    case __WEBPACK_IMPORTED_MODULE_0__actions_cartActions__["b" /* BEGIN_TRANSACTION */]:
      return _objectSpread({}, state, {
        loading: true
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_cartActions__["d" /* END_TRANSACTION */]:
      return _objectSpread({}, initialState(), {
        loading: false
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_cartActions__["f" /* TRANSACTION_ERROR */]:
      return _objectSpread({}, state, {
        loading: false,
        error: action.data
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authReducer__ = __webpack_require__("./reducers/authReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopReducer__ = __webpack_require__("./reducers/shopReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cartReducer__ = __webpack_require__("./reducers/cartReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uiReducer__ = __webpack_require__("./reducers/uiReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resourcesReducer__ = __webpack_require__("./reducers/resourcesReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__productReducer__ = __webpack_require__("./reducers/productReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subscriptionsReducer__ = __webpack_require__("./reducers/subscriptionsReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__purchaseReducer__ = __webpack_require__("./reducers/purchaseReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_redux_persist__ = __webpack_require__("redux-persist");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_redux_persist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_redux_persist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_persist_lib_storage__ = __webpack_require__("redux-persist/lib/storage");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_persist_lib_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux_persist_lib_storage__);











var reducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  auth: __WEBPACK_IMPORTED_MODULE_1__authReducer__["a" /* default */],
  shop: __WEBPACK_IMPORTED_MODULE_2__shopReducer__["a" /* default */],
  cart: Object(__WEBPACK_IMPORTED_MODULE_9_redux_persist__["persistReducer"])({
    key: 'reed_cart',
    storage: __WEBPACK_IMPORTED_MODULE_10_redux_persist_lib_storage___default.a,
    blacklist: ['error']
  }, __WEBPACK_IMPORTED_MODULE_3__cartReducer__["a" /* default */]),
  ui: __WEBPACK_IMPORTED_MODULE_4__uiReducer__["a" /* default */],
  subscriptions: __WEBPACK_IMPORTED_MODULE_7__subscriptionsReducer__["a" /* default */],
  resources: __WEBPACK_IMPORTED_MODULE_5__resourcesReducer__["a" /* default */],
  product: __WEBPACK_IMPORTED_MODULE_6__productReducer__["a" /* default */],
  purchases: __WEBPACK_IMPORTED_MODULE_8__purchaseReducer__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = (reducers);

/***/ }),

/***/ "./reducers/productReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_productActions__ = __webpack_require__("./actions/productActions.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initial = {};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread({}, initial);

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      data = _ref.data;

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_productActions__["a" /* INCOMING_PRODUCT */]:
      return data;

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/purchaseReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_purchaseActions__ = __webpack_require__("./actions/purchaseActions.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var INITIAL = {
  loading: true
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread({}, INITIAL);

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      data = _ref.data;

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_purchaseActions__["a" /* INCOMING_ORDERS */]:
      return data;

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/resourcesReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_resourcesActions__ = __webpack_require__("./actions/resourcesActions.js");

var initial = [];
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial.concat();

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      data = _ref.data;

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_resourcesActions__["a" /* INCOMING_RESOURCES */]:
      return data;

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/shopReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_shopActions__ = __webpack_require__("./actions/shopActions.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  items: [],
  loading: true
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
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
});

/***/ }),

/***/ "./reducers/subscriptionsReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  locations: [],
  loading: true
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread({}, initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return state;
});

/***/ }),

/***/ "./reducers/uiReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  copy: {}
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread({}, initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
});

/***/ }),

/***/ "./static/cart.svg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cart-ad42a554b3e59a4d3978294bed9bec33.svg";

/***/ }),

/***/ "./static/downarrow.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNSIgdmlld0JveD0iMCAwIDEwIDUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxnIGlkPSJDYW52YXMiIGZpbGw9Im5vbmUiPgo8cGF0aCBpZD0iUGF0aCAyMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNIDAgMEwgNSA1TCAxMCAwTCAwIDBaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./static/facebook.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1Ni4yMyw1MTJDMzk2LjgxLDUxMiw1MTIsMzk2LjgxLDUxMiwyNTYuMjMgICBDNTEyLDExNS4xODQsMzk2LjgxLDAsMjU2LjIzLDBDMTE1LjE4NCwwLDAsMTE1LjE4NCwwLDI1Ni4yM0MwLDM5Ni44MSwxMTUuMTg0LDUxMiwyNTYuMjMsNTEyTDI1Ni4yMyw1MTJ6IiBmaWxsPSIjM0E1QkEyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMjQuMDIzLDE2MC4wODVjMC0zNS4zNzIsMjguNTc1LTYzLjk0Niw2My45MzgtNjMuOTQ2aDQ4LjA3MiAgIHY2My45NDZoLTMyLjE5OWMtOC42MDgsMC0xNS44NzMsNy4yNTctMTUuODczLDE1Ljg3M3YzMi4xOTJoNDguMDcydjYzLjkzOGgtNDguMDcydjE0NC4yMmgtNjMuOTM4di0xNDQuMjJoLTQ4LjA2NVYyMDguMTVoNDguMDY1ICAgVjE2MC4wODV6IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9zdmc+"

/***/ }),

/***/ "./static/instagram.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNjdweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY3IDY3OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjcgNjciIHdpZHRoPSI2N3B4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDMuMjcxLDI2LjU3OHYtMC4wMDZjMC41MDIsMCwxLjAwNSwwLjAxLDEuNTA4LTAuMDAyICBjMC42NDYtMC4wMTYsMS4xNzItMC41NywxLjE3Mi0xLjIxN2MwLTAuOTYzLDAtMS45MjcsMC0yLjg5YzAtMC42OTEtMC41NDctMS4yNC0xLjIzNi0xLjI0MWMtMC45NjEsMC0xLjkyMi0wLjAwMS0yLjg4MywwICBjLTAuNjg4LDAuMDAxLTEuMjM2LDAuNTUyLTEuMjM2LDEuMjQzYy0wLjAwMSwwLjk1NS0wLjAwNCwxLjkxLDAuMDAzLDIuODY1YzAuMDAxLDAuMTQzLDAuMDI4LDAuMjkxLDAuMDczLDAuNDI2ICBjMC4xNzMsMC41MDgsMC42MzksMC44MiwxLjIwOSwwLjgyM0M0Mi4zNDQsMjYuNTc5LDQyLjgwOCwyNi41NzgsNDMuMjcxLDI2LjU3OHogTTM0LDI3LjgxN2MtMy4zODQtMC4wMDItNi4xMzUsMi43MjEtNi4xODIsNi4wODkgIGMtMC4wNDksMy40NiwyLjcyLDYuMjAxLDYuMDQsNi4yNzJjMy40NTQsMC4wNzQsNi4yNDgtMi42ODYsNi4zMjEtNi4wNDNDNDAuMjU0LDMwLjY3NSwzNy40NjIsMjcuODE1LDM0LDI3LjgxN3ogTTIyLjA0NiwzMS4xMTYgIHYwLjA4MmMwLDQuNTE1LTAuMDAxLDkuMDMsMCwxMy41NDVjMCwwLjY0OSwwLjU2MiwxLjIwOCwxLjIxMiwxLjIwOGM3LjE2LDAuMDAxLDE0LjMxOSwwLjAwMSwyMS40NzksMCAgYzAuNjU2LDAsMS4yMTUtMC41NTcsMS4yMTUtMS4yMTJjMC4wMDEtNC41MDksMC05LjAyLDAtMTMuNTI4di0wLjA5NGgtMi45MTJjMC40MTEsMS4zMTQsMC41MzcsMi42NTEsMC4zNzYsNC4wMTQgIGMtMC4xNjEsMS4zNjMtMC42MDEsMi42MzEtMS4zMTYsMy44MDNzLTEuNjQ0LDIuMTQ1LTIuNzc5LDIuOTE4Yy0yLjk0NCwyLjAwNi02LjgyMSwyLjE4Mi05Ljk0NiwwLjQyOCAgYy0xLjU3OS0wLjg4NS0yLjgxOS0yLjEyLTMuNjg1LTMuNzEzYy0xLjI4OS0yLjM3My0xLjQ5NS00Ljg2NS0wLjczOS03LjQ1MUMyMy45ODMsMzEuMTE2LDIzLjAyMSwzMS4xMTYsMjIuMDQ2LDMxLjExNnogICBNNDYuMjA1LDQ5LjI1NWMwLjE1OS0wLjAyNiwwLjMxOC0wLjA0OSwwLjQ3NS0wLjA4M2MxLjI0Ni0wLjI2NSwyLjI2NC0xLjMwNCwyLjUwOC0yLjU1N2MwLjAyNS0wLjEzNywwLjA0NS0wLjI3MywwLjA2Ny0wLjQwOSAgVjIxLjc5NGMtMC4wMjEtMC4xMzMtMC4wNC0wLjI2OC0wLjA2NS0wLjQwMWMtMC4yNjgtMS4zNjctMS4zOTYtMi40MjgtMi43OC0yLjYxOGMtMC4wNTgtMC4wMDctMC4xMTMtMC4wMi0wLjE3LTAuMDNIMjEuNzYxICBjLTAuMTQ3LDAuMDI3LTAuMjk2LDAuMDQ3LTAuNDQxLDAuMDhjLTEuMzUyLDAuMzA4LTIuMzUyLDEuMzk2LTIuNTQ1LDIuNzY2Yy0wLjAwOCwwLjA1Ny0wLjAyLDAuMTE0LTAuMDI5LDAuMTcxVjQ2LjI0ICBjMC4wMjgsMC4xNTQsMC4wNSwwLjMxMSwwLjA4NSwwLjQ2NWMwLjI5OSwxLjMyMiwxLjQyNywyLjM0NywyLjc3LDIuNTJjMC4wNjQsMC4wMDgsMC4xMywwLjAyMSwwLjE5NSwwLjAzSDQ2LjIwNXogTTM0LDY0ICBDMTcuNDMyLDY0LDQsNTAuNTY4LDQsMzRDNCwxNy40MzEsMTcuNDMyLDQsMzQsNHMzMCwxMy40MzEsMzAsMzBDNjQsNTAuNTY4LDUwLjU2OCw2NCwzNCw2NHoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7Ii8+PC9zdmc+"

/***/ }),

/***/ "./static/linkedin.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9IlNWR0lEXzFfIiB4MT0iOC45NzU2IiB4Mj0iNTc3LjkyMyIgeTE9Ii03OC45OSIgeTI9IjU1Ny42ODkyIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM1MTdGQTYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM0MjY2OTkiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0yNzEuMDYsMjE0LjM2M3YtMC41MjVjLTAuMSwwLjE3LTAuMjQ3LDAuMzYtMC4zNDcsMC41MjVIMjcxLjA2eiIgZmlsbD0idXJsKCNTVkdJRF8xXykiLz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJTVkdJRF8yXyIgeDE9Ii0yMC4xMTkxIiB4Mj0iNTQ4LjgyODMiIHkxPSItNTIuOTkwNCIgeTI9IjU4My42ODg4Ij48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM1MTdGQTYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM0MjY2OTkiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0yNTYsNy4wOThDMTE4LjUzNSw3LjA5OCw3LjA5OCwxMTguNTM1LDcuMDk4LDI1NmMwLDEzNy40NjUsMTExLjQzNywyNDguOTAyLDI0OC45MDIsMjQ4LjkwMiAgIGMxMzcuNDY1LDAsMjQ4LjkwMi0xMTEuNDM3LDI0OC45MDItMjQ4LjkwMkM1MDQuOTAyLDExOC41MzUsMzkzLjQ2NSw3LjA5OCwyNTYsNy4wOTh6IE0xODcuNDU1LDM1Mi44MDJoLTUzLjgyMlYxOTAuODloNTMuODIyICAgVjM1Mi44MDJ6IE0xNjAuNTU0LDE2OC43OTRoLTAuMzYzYy0xOC4wNTgsMC0yOS43NTUtMTIuNDQ1LTI5Ljc1NS0yNy45OTJjMC0xNS44ODYsMTIuMDUyLTI3Ljk2OSwzMC40NjUtMjcuOTY5ICAgYzE4LjQyMSwwLDI5Ljc0NywxMi4wODMsMzAuMTAyLDI3Ljk2OUMxOTEuMDA0LDE1Ni4zNDksMTc5LjMyMywxNjguNzk0LDE2MC41NTQsMTY4Ljc5NHogTTM4MS41NjQsMzUyLjgwNWgtNTMuODIydi04Ni42MjcgICBjMC0yMS43NTktNy43OTItMzYuNjEzLTI3LjI3MS0zNi42MTNjLTE0Ljg3NSwwLTIzLjcyNSwxMC4wMDgtMjcuNjI0LDE5LjY4N2MtMS40MiwzLjQ2NC0xLjc4Myw4LjI3Ni0xLjc4MywxMy4xMjV2OTAuNDI1aC01My44MyAgIGMwLDAsMC43MTgtMTQ2LjcxOCwwLTE2MS45MTJoNTMuODI3djIyLjk0OGM3LjE0OS0xMS4wMTUsMTkuOTI3LTI2Ljc1NCw0OC41MTgtMjYuNzU0YzM1LjQzLDAsNjEuOTgzLDIzLjEzOCw2MS45ODYsNzIuODcxICAgVjM1Mi44MDV6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "./static/logo.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhLS0gR2VuZXJhdG9yOiBHcmF2aXQuaW8gLS0+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iaXNvbGF0aW9uOmlzb2xhdGUiIHZpZXdCb3g9IjEyMTUgMTY1IDgwLjAzOCAzMC4wMzgiIHdpZHRoPSI4MC4wMzgiIGhlaWdodD0iMzAuMDM4Ij48Y2xpcFBhdGggaWQ9Il9jbGlwUGF0aF9WeGVsVWxqN0F0UW1pZ0FhbUJkUDhzSU5IR2NKRm1ocyI+PHBhdGggZD0iIE0gMTI4Mi4yMjkgMTg5LjIyNyBDIDEyNzguMzM4IDE4OS4yMjcgMTI3NS4xNzIgMTg2LjA2NyAxMjc1LjE3MiAxODIuMTgyIEMgMTI3NS4xNzIgMTc4LjI5OCAxMjc4LjMzOCAxNzUuMTM3IDEyODIuMjI5IDE3NS4xMzcgQyAxMjg2LjExOSAxNzUuMTM3IDEyODkuMjg1IDE3OC4yOTggMTI4OS4yODUgMTgyLjE4MiBDIDEyODkuMjg1IDE4Ni4wNjcgMTI4Ni4xMTkgMTg5LjIyNyAxMjgyLjIyOSAxODkuMjI3IFogIE0gMTI2NS4yMjQgMTg2LjQ0IEMgMTI2My45MzQgMTg4LjEzMiAxMjYxLjg5NiAxODkuMjI3IDEyNTkuNjA3IDE4OS4yMjcgQyAxMjU2Ljc0NCAxODkuMjI3IDEyNTQuMjc1IDE4Ny41MTUgMTI1My4xNyAxODUuMDY0IEwgMTI2Ni4wNDMgMTg1LjA2NCBMIDEyNjkuNjYgMTg1LjA2NCBMIDEyNjkuNzU5IDE4NS4wNjQgQyAxMjY5Ljg2NyAxODUuNTMzIDEyNzAuMDAzIDE4NS45OTIgMTI3MC4xNjIgMTg2LjQ0IEwgMTI2NS4yMjQgMTg2LjQ0IFogIE0gMTI0Ny4zODMgMTg2LjQ0IEwgMTI0Mi42MDIgMTg2LjQ0IEMgMTI0MS4zMTIgMTg4LjEzMiAxMjM5LjI3NCAxODkuMjI3IDEyMzYuOTg1IDE4OS4yMjcgQyAxMjM0LjEyMiAxODkuMjI3IDEyMzEuNjUzIDE4Ny41MTUgMTIzMC41NDggMTg1LjA2NCBMIDEyNDMuNDIxIDE4NS4wNjQgTCAxMjQ3LjAzOCAxODUuMDY0IEwgMTI0Ny4xMzcgMTg1LjA2NCBDIDEyNDcuMjA4IDE4NS4zNyAxMjQ3LjI5IDE4NS42NzMgMTI0Ny4zODMgMTg1Ljk3MSBMIDEyNDcuMzgzIDE4Ni40NCBaICBNIDEyMzYuOTg1IDE3NS4xMzcgQyAxMjM5Ljg1OSAxNzUuMTM3IDEyNDIuMzM2IDE3Ni44NjMgMTI0My40MzUgMTc5LjMzMSBMIDEyMzAuNTM0IDE3OS4zMzEgQyAxMjMxLjYzMyAxNzYuODYzIDEyMzQuMTEgMTc1LjEzNyAxMjM2Ljk4NSAxNzUuMTM3IFogIE0gMTI1OS42MDcgMTc1LjEzNyBDIDEyNjIuNDgxIDE3NS4xMzcgMTI2NC45NTggMTc2Ljg2MyAxMjY2LjA1NyAxNzkuMzMxIEwgMTI1My4xNTYgMTc5LjMzMSBDIDEyNTQuMjU1IDE3Ni44NjMgMTI1Ni43MzIgMTc1LjEzNyAxMjU5LjYwNyAxNzUuMTM3IFogIE0gMTI5NS4wMzggMTY1IEwgMTI4OS4yOTcgMTY1IEwgMTI4OS4yOTcgMTcxLjUzNiBDIDEyODcuMjcgMTcwLjE5IDEyODQuODQgMTY5LjQwNSAxMjgyLjIyOSAxNjkuNDA1IEMgMTI3Ny4zMzEgMTY5LjQwNSAxMjczLjA2OCAxNzIuMTY2IDEyNzAuOTE3IDE3Ni4yMSBDIDEyNjguNzY3IDE3Mi4xNjYgMTI2NC41MDQgMTY5LjQwNSAxMjU5LjYwNyAxNjkuNDA1IEMgMTI1NC43MDkgMTY5LjQwNSAxMjUwLjQ0NiAxNzIuMTY2IDEyNDguMjk1IDE3Ni4yMSBDIDEyNDYuMTQ1IDE3Mi4xNjYgMTI0MS44ODIgMTY5LjQwNSAxMjM2Ljk4NSAxNjkuNDA1IEMgMTIzMy40MTYgMTY5LjQwNSAxMjMwLjE4NSAxNzAuODcxIDEyMjcuODYxIDE3My4yMzEgTCAxMjI3Ljg2MSAxNjkuMzU3IEwgMTIyNi40MTcgMTY5LjM1NyBDIDEyMjAuMTExIDE2OS4zNTcgMTIxNSAxNzQuNDYgMTIxNSAxODAuNzU1IEwgMTIxNSAxOTUuMDM4IEwgMTIyMC43NDIgMTk1LjAzOCBMIDEyMjAuNzQyIDE4MC43NTUgQyAxMjIwLjc0MiAxNzcuNjUgMTIyMy4yNDMgMTc1LjEzIDEyMjYuMzQ0IDE3NS4wOTEgQyAxMjI0Ljk4MiAxNzcuMTIxIDEyMjQuMTg3IDE3OS41NjEgMTIyNC4xODcgMTgyLjE4MiBDIDEyMjQuMTg3IDE4OS4yMjggMTIyOS45MjggMTk0Ljk2IDEyMzYuOTg1IDE5NC45NiBDIDEyNDEuODgyIDE5NC45NiAxMjQ2LjE0NSAxOTIuMTk5IDEyNDguMjk1IDE4OC4xNTUgQyAxMjUwLjQ0NiAxOTIuMTk5IDEyNTQuNzA5IDE5NC45NiAxMjU5LjYwNyAxOTQuOTYgQyAxMjY0LjUwNCAxOTQuOTYgMTI2OC43NjYgMTkyLjE5OCAxMjcwLjkxNyAxODguMTUzIEMgMTI3My4wNjcgMTkyLjE5OCAxMjc3LjMzMSAxOTQuOTYgMTI4Mi4yMjkgMTk0Ljk2IEMgMTI4OS4yODUgMTk0Ljk2IDEyOTUuMDI2IDE4OS4yMjggMTI5NS4wMjYgMTgyLjE4MiBDIDEyOTUuMDI2IDE4Mi4xNDkgMTI5NS4wMjUgMTgyLjExNiAxMjk1LjAyNSAxODIuMDgzIEwgMTI5NS4wMzggMTgyLjA4MyBMIDEyOTUuMDM4IDE2NSBaICIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJyZ2IoMjU1LDI1NSwyNTUpIi8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjX2NsaXBQYXRoX1Z4ZWxVbGo3QXRRbWlnQWFtQmRQOHNJTkhHY0pGbWhzKSI+PGNsaXBQYXRoIGlkPSJfY2xpcFBhdGhfMnZrdjBlT1F6SGdQUmpmNDh0aHgyOGNUS2ZGUGNaRG4iPjxwYXRoIGQ9IiBNIDEyMTUgMTk1IEwgMTI5NC44NzMgMTk1IEwgMTI5NC44NzMgMTY1IEwgMTIxNSAxNjUgTCAxMjE1IDE5NSBaICIgZmlsbD0icmdiKDI1NSwyNTUsMjU1KSIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI19jbGlwUGF0aF8ydmt2MGVPUXpIZ1BSamY0OHRoeDI4Y1RLZkZQY1pEbikiPjxwYXRoIGQ9IiBNIDEyMTAgMjAwLjAzOCBMIDEzMDAuMDM4IDIwMC4wMzggTCAxMzAwLjAzOCAxNjAgTCAxMjEwIDE2MCBMIDEyMTAgMjAwLjAzOCBaICIgZmlsbD0icmdiKDI1NSwyNTUsMjU1KSIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "./static/twitter.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNjdweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY3IDY3OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjcgNjciIHdpZHRoPSI2N3B4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNMzguMTY3LDIyLjI4M2MtMi42MTksMC45NTMtNC4yNzQsMy40MTEtNC4wODYsNi4xMDEgIGwwLjA2MywxLjAzOGwtMS4wNDgtMC4xMjdjLTMuODEzLTAuNDg3LTcuMTQ1LTIuMTM5LTkuOTc0LTQuOTE1bC0xLjM4My0xLjM3N2wtMC4zNTYsMS4wMTdjLTAuNzU0LDIuMjY3LTAuMjcyLDQuNjYxLDEuMjk5LDYuMjcxICBjMC44MzgsMC44OSwwLjY0OSwxLjAxNy0wLjc5NiwwLjQ4N2MtMC41MDMtMC4xNjktMC45NDMtMC4yOTYtMC45ODUtMC4yMzNjLTAuMTQ2LDAuMTQ5LDAuMzU2LDIuMDc2LDAuNzU0LDIuODM5ICBjMC41NDUsMS4wNiwxLjY1NSwyLjA5NywyLjg3MSwyLjcxMmwxLjAyNywwLjQ4N2wtMS4yMTUsMC4wMjFjLTEuMTczLDAtMS4yMTUsMC4wMjEtMS4wODksMC40NjcgIGMwLjQxOSwxLjM3NywyLjA3NCwyLjgzOSwzLjkxOCwzLjQ3NWwxLjI5OSwwLjQ0NGwtMS4xMzEsMC42NzhjLTEuNjc2LDAuOTc2LTMuNjQ2LDEuNTI2LTUuNjE2LDEuNTY3ICBDMjAuNzc1LDQzLjI1NiwyMCw0My4zNDEsMjAsNDMuNDA1YzAsMC4yMTEsMi41NTcsMS4zOTcsNC4wNDQsMS44NjRjNC40NjMsMS4zNzcsOS43NjUsMC43ODMsMTMuNzQ2LTEuNTY4ICBjMi44MjktMS42NzQsNS42NTctNSw2Ljk3OC04LjIyMWMwLjcxMy0xLjcxNSwxLjQyNS00Ljg1MSwxLjQyNS02LjM1NGMwLTAuOTc1LDAuMDYzLTEuMTAyLDEuMjM2LTIuMjY3ICBjMC42OTItMC42NzgsMS4zNDEtMS40MTksMS40NjctMS42MzFjMC4yMS0wLjQwMywwLjE4OC0wLjQwMy0wLjg4LTAuMDQzYy0xLjc4MSwwLjYzNi0yLjAzMywwLjU1MS0xLjE1Mi0wLjQwMiAgYzAuNjQ5LTAuNjc4LDEuNDI1LTEuOTA3LDEuNDI1LTIuMjY3YzAtMC4wNjMtMC4zMTQsMC4wNDItMC42NzEsMC4yMzNjLTAuMzc3LDAuMjEyLTEuMjE1LDAuNTMtMS44NDQsMC43MmwtMS4xMzEsMC4zNjFsLTEuMDI3LTAuNyAgYy0wLjU2Ni0wLjM4MS0xLjM2MS0wLjgwNS0xLjc4MS0wLjkzMkM0MC43NjYsMjEuOTAyLDM5LjEzMSwyMS45NDQsMzguMTY3LDIyLjI4M3ogTTM0LDY0QzE3LjQzMiw2NCw0LDUwLjU2OCw0LDM0ICBDNCwxNy40MzEsMTcuNDMyLDQsMzQsNHMzMCwxMy40MzEsMzAsMzBDNjQsNTAuNTY4LDUwLjU2OCw2NCwzNCw2NHoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7Ii8+PC9zdmc+"

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("./reducers/index.js");




var initialState = {};
var initStore = function initStore(initialState) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */], initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
};

/***/ }),

/***/ "./styles/index.scss":
/***/ (function(module, exports) {



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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

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

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map