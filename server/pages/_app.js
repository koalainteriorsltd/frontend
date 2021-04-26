module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8hBj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TO_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DELETE_FROM_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DELETE_ALL_FROM_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteFromWishlist; });
/* unused harmony export deleteAllFromWishlist */
const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
const DELETE_FROM_WISHLIST = "DELETE_FROM_WISHLIST";
const DELETE_ALL_FROM_WISHLIST = "DELETE_ALL_FROM_WISHLIST"; // add to wishlist

const addToWishlist = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Added To Wishlist", {
        appearance: "success",
        autoDismiss: true
      });
    }

    dispatch({
      type: ADD_TO_WISHLIST,
      payload: item
    });
  };
}; // delete from wishlist

const deleteFromWishlist = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed From Wishlist", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_FROM_WISHLIST,
      payload: item
    });
  };
}; //delete all from wishlist

const deleteAllFromWishlist = addToast => {
  return dispatch => {
    if (addToast) {
      addToast("Removed All From Wishlist", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_ALL_FROM_WISHLIST
    });
  };
};

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "C1xe":
/***/ (function(module, exports) {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__("VNb8");

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__("T8f9");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./src/redux/actions/productActions.js
const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
}); // fetch products


const fetchProducts = products => {
  return dispatch => {
    dispatch(fetchProductsSuccess(products));
  };
};
// CONCATENATED MODULE: ./src/redux/reducers/productReducer.js

const initState = [];

const productReducer = (state = initState, action) => {
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    state = action.payload.slice(0);
    return state;
  }

  return state;
};

/* harmony default export */ var reducers_productReducer = (productReducer);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// EXTERNAL MODULE: ./src/redux/actions/cartActions.js
var cartActions = __webpack_require__("wQtD");

// CONCATENATED MODULE: ./src/redux/reducers/cartReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const cartReducer_initState = [];

const cartReducer = (state = cartReducer_initState, action) => {
  const cartItems = state,
        product = action.payload;

  if (action.type === cartActions["a" /* ADD_TO_CART */]) {
    // for non variant products
    if (product.variation === undefined) {
      const cartItem = cartItems.filter(item => item.id === product.id)[0];

      if (cartItem === undefined) {
        return [...cartItems, _objectSpread(_objectSpread({}, product), {}, {
          quantity: product.quantity ? product.quantity : 1,
          cartItemId: Object(external_uuid_["v4"])()
        })];
      } else {
        return cartItems.map(item => item.cartItemId === cartItem.cartItemId ? _objectSpread(_objectSpread({}, item), {}, {
          quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1
        }) : item);
      } // for variant products

    } else {
      const cartItem = cartItems.filter(item => item.id === product.id && product.selectedProductColor && product.selectedProductColor === item.selectedProductColor && product.selectedProductSize && product.selectedProductSize === item.selectedProductSize && (product.cartItemId ? product.cartItemId === item.cartItemId : true))[0];

      if (cartItem === undefined) {
        return [...cartItems, _objectSpread(_objectSpread({}, product), {}, {
          quantity: product.quantity ? product.quantity : 1,
          cartItemId: Object(external_uuid_["v4"])()
        })];
      } else if (cartItem !== undefined && (cartItem.selectedProductColor !== product.selectedProductColor || cartItem.selectedProductSize !== product.selectedProductSize)) {
        return [...cartItems, _objectSpread(_objectSpread({}, product), {}, {
          quantity: product.quantity ? product.quantity : 1,
          cartItemId: Object(external_uuid_["v4"])()
        })];
      } else {
        return cartItems.map(item => item.cartItemId === cartItem.cartItemId ? _objectSpread(_objectSpread({}, item), {}, {
          quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1,
          selectedProductColor: product.selectedProductColor,
          selectedProductSize: product.selectedProductSize
        }) : item);
      }
    }
  }

  if (action.type === cartActions["b" /* DECREASE_QUANTITY */]) {
    if (product.quantity === 1) {
      const remainingItems = (cartItems, product) => cartItems.filter(cartItem => cartItem.cartItemId !== product.cartItemId);

      return remainingItems(cartItems, product);
    } else {
      return cartItems.map(item => item.cartItemId === product.cartItemId ? _objectSpread(_objectSpread({}, item), {}, {
        quantity: item.quantity - 1
      }) : item);
    }
  }

  if (action.type === cartActions["d" /* DELETE_FROM_CART */]) {
    const remainingItems = (cartItems, product) => cartItems.filter(cartItem => cartItem.cartItemId !== product.cartItemId);

    return remainingItems(cartItems, product);
  }

  if (action.type === cartActions["c" /* DELETE_ALL_FROM_CART */]) {
    return cartItems.filter(item => {
      return false;
    });
  }

  return state;
};

/* harmony default export */ var reducers_cartReducer = (cartReducer);
// EXTERNAL MODULE: ./src/redux/actions/wishlistActions.js
var wishlistActions = __webpack_require__("8hBj");

// CONCATENATED MODULE: ./src/redux/reducers/wishlistReducer.js

const wishlistReducer_initState = [];

const wishlistReducer = (state = wishlistReducer_initState, action) => {
  const wishlistItems = state,
        product = action.payload;

  if (action.type === wishlistActions["a" /* ADD_TO_WISHLIST */]) {
    const wishlistItem = wishlistItems.filter(item => item.id === product.id)[0];

    if (wishlistItem === undefined) {
      return [...wishlistItems, product];
    } else {
      return wishlistItems;
    }
  }

  if (action.type === wishlistActions["c" /* DELETE_FROM_WISHLIST */]) {
    const remainingItems = (wishlistItems, product) => wishlistItems.filter(wishlistItem => wishlistItem.id !== product.id);

    return remainingItems(wishlistItems, product);
  }

  if (action.type === wishlistActions["b" /* DELETE_ALL_FROM_WISHLIST */]) {
    return wishlistItems.filter(item => {
      return false;
    });
  }

  return wishlistItems;
};

/* harmony default export */ var reducers_wishlistReducer = (wishlistReducer);
// EXTERNAL MODULE: ./src/redux/actions/compareActions.js
var compareActions = __webpack_require__("evb0");

// CONCATENATED MODULE: ./src/redux/reducers/compareReducer.js

const compareReducer_initState = [];

const compareReducer = (state = compareReducer_initState, action) => {
  const compareItems = state,
        product = action.payload;

  if (action.type === compareActions["a" /* ADD_TO_COMPARE */]) {
    const compareItem = compareItems.filter(item => item.id === product.id)[0];

    if (compareItem === undefined) {
      return [...compareItems, product];
    } else {
      return compareItems;
    }
  }

  if (action.type === compareActions["b" /* DELETE_FROM_COMPARE */]) {
    const remainingItems = (compareItems, product) => compareItems.filter(compareItem => compareItem.id !== product.id);

    return remainingItems(compareItems, product);
  }

  return compareItems;
};

/* harmony default export */ var reducers_compareReducer = (compareReducer);
// CONCATENATED MODULE: ./src/redux/reducers/rootReducer.js





const rootReducer = Object(external_redux_["combineReducers"])({
  productData: reducers_productReducer,
  cartData: reducers_cartReducer,
  wishlistData: reducers_wishlistReducer,
  compareData: reducers_compareReducer
});
/* harmony default export */ var reducers_rootReducer = (rootReducer);
// CONCATENATED MODULE: ./src/redux/store.js






const persistConfig = {
  key: "primary",
  storage: storage_default.a
};
const persistedReducer = Object(external_redux_persist_["persistReducer"])(persistConfig, reducers_rootReducer);
function initializeStore() {
  return Object(external_redux_["createStore"])(persistedReducer, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));
}
// CONCATENATED MODULE: ./src/lib/with-redux-store.js

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function with_redux_store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function with_redux_store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { with_redux_store_ownKeys(Object(source), true).forEach(function (key) { with_redux_store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { with_redux_store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function with_redux_store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

const withReduxStore = App => {
  return class AppWithRedux extends external_react_default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return with_redux_store_objectSpread(with_redux_store_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore
      }));
    }

  };
};

/* harmony default export */ var with_redux_store = (withReduxStore);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-toast-notifications"
var external_react_toast_notifications_ = __webpack_require__("C1xe");

// EXTERNAL MODULE: external "redux-persist/integration/react"
var react_ = __webpack_require__("JPPj");

// EXTERNAL MODULE: ./src/data/products.json
var products = __webpack_require__("iagI");

// EXTERNAL MODULE: ./src/assets/scss/style.scss
var style = __webpack_require__("eKdF");

// EXTERNAL MODULE: external "react-bootstrap-sweetalert"
var external_react_bootstrap_sweetalert_ = __webpack_require__("t1BQ");

// CONCATENATED MODULE: ./src/components/Preloader/index.js
var Preloader_jsx = external_react_default.a.createElement;



const Preloader = ({
  props
}) => {
  return Preloader_jsx("div", {
    className: "preloader"
  });
};

/* harmony default export */ var components_Preloader = (Preloader);
// EXTERNAL MODULE: external "nextjs-progressbar"
var external_nextjs_progressbar_ = __webpack_require__("YVQ8");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_);

// CONCATENATED MODULE: ./src/pages/_app.js

var _app_jsx = external_react_default.a.createElement;














class _app_MyApp extends app_default.a {
  constructor(props) {
    super(props);
    this.persistor = Object(external_redux_persist_["persistStore"])(props.reduxStore);
    props.reduxStore.dispatch(fetchProducts(products));
  }

  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props;
    return _app_jsx(external_react_["Fragment"], null, _app_jsx(head_default.a, null, _app_jsx("title", null, "Koala Interiors"), _app_jsx("meta", {
      name: "description",
      content: "Koala Interiors - The best of British Furniture."
    }), _app_jsx("meta", {
      name: "keywords",
      content: "ecommerce"
    }), _app_jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap",
      rel: "stylesheet"
    }), _app_jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap",
      rel: "stylesheet"
    }), _app_jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
      rel: "stylesheet"
    }), _app_jsx("script", {
      id: "stripe-js",
      src: "https://js.stripe.com/v3/",
      async: true
    })), _app_jsx(external_react_toast_notifications_["ToastProvider"], {
      placement: "bottom-left"
    }, _app_jsx(external_react_redux_["Provider"], {
      store: reduxStore
    }, _app_jsx(external_nextjs_progressbar_default.a, {
      color: "#4F3327",
      startPosition: 0.3,
      stopDelayMs: 200,
      height: "3"
    }), _app_jsx(react_["PersistGate"], {
      loading: _app_jsx(components_Preloader, null),
      persistor: this.persistor
    }, _app_jsx(Component, pageProps)))));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (with_redux_store(_app_MyApp));

/***/ }),

/***/ "JPPj":
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "YVQ8":
/***/ (function(module, exports) {

module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eKdF":
/***/ (function(module, exports) {



/***/ }),

/***/ "evb0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TO_COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DELETE_FROM_COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteFromCompare; });
const ADD_TO_COMPARE = "ADD_TO_COMPARE";
const DELETE_FROM_COMPARE = "DELETE_FROM_COMPARE"; // add to compare

const addToCompare = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Added To Compare", {
        appearance: "success",
        autoDismiss: true
      });
    }

    dispatch({
      type: ADD_TO_COMPARE,
      payload: item
    });
  };
}; // delete from compare

const deleteFromCompare = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed From Compare", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_FROM_COMPARE,
      payload: item
    });
  };
};

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iagI":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"createDate\":\"Mar 11 2020 10:01:00 AM\",\"sku\":\"asdf101\",\"name\":\"Lorem ipsum fashion one\",\"slug\":\"lorem-ipsum-fashion-one\",\"price\":17,\"discount\":10,\"featured\":true,\"new\":true,\"rating\":4,\"ratingCount\":5,\"saleCount\":90,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"brown\",\"colorCode\":\"#87554b\",\"image\":\"/assets/images/product/fashion/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"red\",\"colorCode\":\"#da323f\",\"image\":\"/assets/images/product/fashion/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/1.jpg\",\"/assets/images/product/fashion/2.jpg\"],\"image\":[\"/assets/images/product/fashion/1.jpg\",\"/assets/images/product/fashion/2.jpg\",\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"2\",\"createDate\":\"Mar 12 2020 10:02:00 AM\",\"sku\":\"asdf102\",\"name\":\"Lorem ipsum fashion two\",\"slug\":\"lorem-ipsum-fashion-two\",\"price\":18,\"discount\":11,\"featured\":true,\"new\":true,\"rating\":3,\"ratingCount\":6,\"saleCount\":91,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/fashion/2.jpg\",\"/assets/images/product/fashion/3.jpg\"],\"image\":[\"/assets/images/product/fashion/2.jpg\",\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"3\",\"createDate\":\"Mar 13 2020 10:03:00 AM\",\"sku\":\"asdf103\",\"name\":\"Lorem ipsum fashion three\",\"slug\":\"lorem-ipsum-fashion-three\",\"price\":19,\"discount\":12,\"featured\":true,\"new\":true,\"rating\":5,\"ratingCount\":7,\"saleCount\":92,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"affiliateLink\":\"https://www.hasthemes.com\",\"thumbImage\":[\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\"],\"image\":[\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"4\",\"createDate\":\"Mar 14 2020 10:04:00 AM\",\"sku\":\"asdf104\",\"name\":\"Lorem ipsum fashion four\",\"slug\":\"lorem-ipsum-fashion-four\",\"price\":20,\"discount\":0,\"featured\":false,\"new\":false,\"rating\":4,\"ratingCount\":8,\"saleCount\":93,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"brown\",\"colorCode\":\"#87554b\",\"image\":\"/assets/images/product/fashion/4.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"red\",\"colorCode\":\"#da323f\",\"image\":\"/assets/images/product/fashion/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\"],\"image\":[\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"5\",\"createDate\":\"Mar 15 2020 10:05:00 AM\",\"sku\":\"asdf105\",\"name\":\"Lorem ipsum fashion five\",\"slug\":\"lorem-ipsum-fashion-five\",\"price\":21,\"discount\":0,\"featured\":false,\"new\":true,\"rating\":3,\"ratingCount\":9,\"saleCount\":94,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"brown\",\"colorCode\":\"#87554b\",\"image\":\"/assets/images/product/fashion/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"red\",\"colorCode\":\"#da323f\",\"image\":\"/assets/images/product/fashion/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":3}]}],\"thumbImage\":[\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/6.jpg\"],\"image\":[\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"6\",\"createDate\":\"Mar 16 2020 10:06:00 AM\",\"sku\":\"asdf106\",\"name\":\"Lorem ipsum fashion six\",\"slug\":\"lorem-ipsum-fashion-six\",\"price\":22,\"discount\":0,\"featured\":false,\"new\":false,\"rating\":5,\"ratingCount\":10,\"saleCount\":95,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"brown\",\"colorCode\":\"#87554b\",\"image\":\"/assets/images/product/fashion/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"red\",\"colorCode\":\"#da323f\",\"image\":\"/assets/images/product/fashion/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":3}]}],\"thumbImage\":[\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\"],\"image\":[\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"7\",\"createDate\":\"Mar 17 2020 10:07:00 AM\",\"sku\":\"asdf107\",\"name\":\"Lorem ipsum fashion sev\",\"slug\":\"lorem-ipsum-fashion-sev\",\"price\":23,\"discount\":0,\"featured\":true,\"new\":true,\"rating\":4,\"ratingCount\":11,\"saleCount\":96,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"brown\",\"colorCode\":\"#87554b\",\"image\":\"/assets/images/product/fashion/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"red\",\"colorCode\":\"#da323f\",\"image\":\"/assets/images/product/fashion/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":3}]}],\"thumbImage\":[\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\"],\"image\":[\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/11.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"8\",\"createDate\":\"Mar 18 2020 10:08:00 AM\",\"sku\":\"asdf108\",\"name\":\"Lorem ipsum fashion eight\",\"slug\":\"lorem-ipsum-fashion-eight\",\"price\":24,\"discount\":17,\"featured\":true,\"new\":true,\"rating\":5,\"ratingCount\":12,\"saleCount\":97,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"brown\",\"colorCode\":\"#87554b\",\"image\":\"/assets/images/product/fashion/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"red\",\"colorCode\":\"#da323f\",\"image\":\"/assets/images/product/fashion/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":3}]}],\"thumbImage\":[\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\"],\"image\":[\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/11.jpg\",\"/assets/images/product/fashion/12.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"9\",\"createDate\":\"Mar 19 2020 10:09:00 AM\",\"sku\":\"asdf109\",\"name\":\"Lorem ipsum fashion nine\",\"slug\":\"lorem-ipsum-fashion-nine\",\"price\":25,\"discount\":18,\"featured\":true,\"new\":true,\"rating\":4,\"ratingCount\":13,\"saleCount\":98,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"brown\",\"colorCode\":\"#87554b\",\"image\":\"/assets/images/product/fashion/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"red\",\"colorCode\":\"#da323f\",\"image\":\"/assets/images/product/fashion/11.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":3}]}],\"thumbImage\":[\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\"],\"image\":[\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/11.jpg\",\"/assets/images/product/fashion/12.jpg\",\"/assets/images/product/fashion/13.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"10\",\"createDate\":\"Mar 20 2020 10:10:00 AM\",\"sku\":\"asdf110\",\"name\":\"Lorem ipsum fashion ten\",\"slug\":\"lorem-ipsum-fashion-ten\",\"price\":26,\"discount\":19,\"featured\":true,\"new\":true,\"rating\":5,\"ratingCount\":14,\"saleCount\":99,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"brown\",\"colorCode\":\"#87554b\",\"image\":\"/assets/images/product/fashion/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/11.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"red\",\"colorCode\":\"#da323f\",\"image\":\"/assets/images/product/fashion/12.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":3}]}],\"thumbImage\":[\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/11.jpg\"],\"image\":[\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/11.jpg\",\"/assets/images/product/fashion/12.jpg\",\"/assets/images/product/fashion/13.jpg\",\"/assets/images/product/fashion/14.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"11\",\"createDate\":\"Mar 21 2020 10:10:00 AM\",\"sku\":\"asdf111\",\"name\":\"Lorem ipsum furniture one\",\"slug\":\"lorem-ipsum-furniture-one\",\"stock\":9,\"price\":200,\"discount\":19,\"featured\":true,\"new\":true,\"rating\":5,\"ratingCount\":14,\"saleCount\":99,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"thumbImage\":[\"/assets/images/product/furniture/1.jpg\"],\"image\":[\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"12\",\"createDate\":\"Mar 22 2020 10:10:00 AM\",\"sku\":\"asdf112\",\"name\":\"Lorem ipsum furniture two\",\"slug\":\"lorem-ipsum-furniture-two\",\"stock\":8,\"price\":100,\"discount\":10,\"featured\":false,\"new\":false,\"rating\":4,\"ratingCount\":10,\"saleCount\":9,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"thumbImage\":[\"/assets/images/product/furniture/2.jpg\"],\"image\":[\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"13\",\"createDate\":\"Mar 23 2020 10:10:00 AM\",\"sku\":\"asdf113\",\"name\":\"Lorem ipsum furniture three\",\"slug\":\"lorem-ipsum-furniture-three\",\"stock\":7,\"price\":90,\"discount\":20,\"featured\":true,\"new\":true,\"rating\":3,\"ratingCount\":15,\"saleCount\":5,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"thumbImage\":[\"/assets/images/product/furniture/3.jpg\"],\"image\":[\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"14\",\"createDate\":\"Mar 24 2020 10:10:00 AM\",\"sku\":\"asdf114\",\"name\":\"Lorem ipsum furniture four\",\"slug\":\"lorem-ipsum-furniture-four\",\"stock\":6,\"price\":80,\"discount\":10,\"featured\":false,\"new\":false,\"rating\":4,\"ratingCount\":20,\"saleCount\":9,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"thumbImage\":[\"/assets/images/product/furniture/4.jpg\"],\"image\":[\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"15\",\"createDate\":\"Mar 25 2020 10:10:00 AM\",\"sku\":\"asdf115\",\"name\":\"Lorem ipsum furniture five\",\"slug\":\"lorem-ipsum-furniture-five\",\"stock\":7,\"price\":70,\"discount\":15,\"featured\":true,\"new\":true,\"rating\":5,\"ratingCount\":25,\"saleCount\":10,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"thumbImage\":[\"/assets/images/product/furniture/5.jpg\"],\"image\":[\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"16\",\"createDate\":\"Mar 26 2020 10:10:00 AM\",\"sku\":\"asdf116\",\"name\":\"Lorem ipsum furniture six\",\"slug\":\"lorem-ipsum-furniture-six\",\"stock\":8,\"price\":60,\"discount\":25,\"featured\":false,\"new\":false,\"rating\":4,\"ratingCount\":35,\"saleCount\":20,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"thumbImage\":[\"/assets/images/product/furniture/6.jpg\"],\"image\":[\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"17\",\"createDate\":\"Mar 27 2020 10:10:00 AM\",\"sku\":\"asdf117\",\"name\":\"Lorem ipsum furniture seven\",\"slug\":\"lorem-ipsum-furniture-seven\",\"stock\":9,\"price\":50,\"discount\":15,\"featured\":true,\"new\":true,\"rating\":5,\"ratingCount\":40,\"saleCount\":30,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"thumbImage\":[\"/assets/images/product/furniture/7.jpg\"],\"image\":[\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"18\",\"createDate\":\"Mar 28 2020 10:10:00 AM\",\"sku\":\"asdf118\",\"name\":\"Lorem ipsum furniture eight\",\"slug\":\"lorem-ipsum-furniture-eight\",\"stock\":10,\"price\":60,\"discount\":25,\"featured\":true,\"new\":true,\"rating\":5,\"ratingCount\":40,\"saleCount\":30,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"thumbImage\":[\"/assets/images/product/furniture/8.jpg\"],\"image\":[\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"19\",\"createDate\":\"Mar 29 2020 10:10:00 AM\",\"sku\":\"asdf119\",\"name\":\"Lorem ipsum electronics one\",\"slug\":\"lorem-ipsum-electronics-one\",\"stock\":20,\"price\":10,\"discount\":0,\"featured\":false,\"new\":true,\"rating\":5,\"ratingCount\":40,\"saleCount\":30,\"category\":[\"electronics\"],\"tag\":[\"electronics\"],\"thumbImage\":[\"/assets/images/product/electronics/1.jpg\",\"/assets/images/product/electronics/1_1.jpg\"],\"image\":[\"/assets/images/product/electronics/1.jpg\",\"/assets/images/product/electronics/2.jpg\",\"/assets/images/product/electronics/3.jpg\",\"/assets/images/product/electronics/4.jpg\",\"/assets/images/product/electronics/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"20\",\"createDate\":\"Mar 01 2020 10:10:00 AM\",\"sku\":\"asdf120\",\"name\":\"Lorem ipsum electronics two\",\"slug\":\"lorem-ipsum-electronics-two\",\"stock\":30,\"price\":15,\"discount\":5,\"featured\":false,\"new\":false,\"rating\":4,\"ratingCount\":30,\"saleCount\":20,\"category\":[\"electronics\"],\"tag\":[\"electronics\"],\"thumbImage\":[\"/assets/images/product/electronics/2.jpg\",\"/assets/images/product/electronics/2_2.jpg\"],\"image\":[\"/assets/images/product/electronics/2.jpg\",\"/assets/images/product/electronics/3.jpg\",\"/assets/images/product/electronics/4.jpg\",\"/assets/images/product/electronics/5.jpg\",\"/assets/images/product/electronics/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"21\",\"createDate\":\"Mar 02 2020 10:10:00 AM\",\"sku\":\"asdf121\",\"name\":\"Lorem ipsum electronics three\",\"slug\":\"lorem-ipsum-electronics-three\",\"stock\":20,\"price\":18,\"discount\":15,\"featured\":true,\"new\":true,\"rating\":3,\"ratingCount\":20,\"saleCount\":10,\"category\":[\"electronics\"],\"tag\":[\"electronics\"],\"thumbImage\":[\"/assets/images/product/electronics/3.jpg\",\"/assets/images/product/electronics/3_3.jpg\"],\"image\":[\"/assets/images/product/electronics/3.jpg\",\"/assets/images/product/electronics/4.jpg\",\"/assets/images/product/electronics/5.jpg\",\"/assets/images/product/electronics/6.jpg\",\"/assets/images/product/electronics/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"22\",\"createDate\":\"Mar 03 2020 10:10:00 AM\",\"sku\":\"asdf122\",\"name\":\"Lorem ipsum electronics four\",\"slug\":\"lorem-ipsum-electronics-four\",\"stock\":30,\"price\":19,\"discount\":20,\"featured\":false,\"new\":false,\"rating\":5,\"ratingCount\":25,\"saleCount\":15,\"category\":[\"electronics\"],\"tag\":[\"electronics\"],\"thumbImage\":[\"/assets/images/product/electronics/4.jpg\",\"/assets/images/product/electronics/4_4.jpg\"],\"image\":[\"/assets/images/product/electronics/4.jpg\",\"/assets/images/product/electronics/5.jpg\",\"/assets/images/product/electronics/6.jpg\",\"/assets/images/product/electronics/7.jpg\",\"/assets/images/product/electronics/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"23\",\"createDate\":\"Mar 04 2020 10:10:00 AM\",\"sku\":\"asdf123\",\"name\":\"Lorem ipsum electronics five\",\"slug\":\"lorem-ipsum-electronics-five\",\"stock\":20,\"price\":9,\"discount\":10,\"featured\":true,\"new\":true,\"rating\":4,\"ratingCount\":20,\"saleCount\":10,\"category\":[\"electronics\"],\"tag\":[\"electronics\"],\"thumbImage\":[\"/assets/images/product/electronics/5.jpg\",\"/assets/images/product/electronics/5_5.jpg\"],\"image\":[\"/assets/images/product/electronics/5.jpg\",\"/assets/images/product/electronics/6.jpg\",\"/assets/images/product/electronics/7.jpg\",\"/assets/images/product/electronics/8.jpg\",\"/assets/images/product/electronics/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"24\",\"createDate\":\"Mar 05 2020 10:10:00 AM\",\"sku\":\"asdf124\",\"name\":\"Lorem ipsum electronics six\",\"slug\":\"lorem-ipsum-electronics-six\",\"stock\":20,\"price\":9,\"discount\":10,\"featured\":true,\"new\":true,\"rating\":4,\"ratingCount\":20,\"saleCount\":10,\"category\":[\"electronics\"],\"tag\":[\"electronics\"],\"thumbImage\":[\"/assets/images/product/electronics/6.jpg\",\"/assets/images/product/electronics/6_6.jpg\"],\"image\":[\"/assets/images/product/electronics/6.jpg\",\"/assets/images/product/electronics/7.jpg\",\"/assets/images/product/electronics/8.jpg\",\"/assets/images/product/electronics/9.jpg\",\"/assets/images/product/electronics/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"25\",\"createDate\":\"Mar 06 2020 10:10:00 AM\",\"sku\":\"asdf125\",\"name\":\"Lorem ipsum electronics seven\",\"slug\":\"lorem-ipsum-electronics-seven\",\"stock\":25,\"price\":10,\"discount\":15,\"featured\":false,\"new\":false,\"rating\":5,\"ratingCount\":10,\"saleCount\":15,\"category\":[\"electronics\"],\"tag\":[\"electronics\"],\"thumbImage\":[\"/assets/images/product/electronics/7.jpg\",\"/assets/images/product/electronics/7_7.jpg\"],\"image\":[\"/assets/images/product/electronics/7.jpg\",\"/assets/images/product/electronics/8.jpg\",\"/assets/images/product/electronics/9.jpg\",\"/assets/images/product/electronics/10.jpg\",\"/assets/images/product/electronics/11.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"26\",\"createDate\":\"Mar 07 2020 10:10:00 AM\",\"sku\":\"asdf126\",\"name\":\"Lorem ipsum electronics eight\",\"slug\":\"lorem-ipsum-electronics-eight\",\"stock\":15,\"price\":15,\"discount\":5,\"featured\":true,\"new\":true,\"rating\":4,\"ratingCount\":14,\"saleCount\":10,\"category\":[\"electronics\"],\"tag\":[\"electronics\"],\"thumbImage\":[\"/assets/images/product/electronics/8.jpg\",\"/assets/images/product/electronics/8_8.jpg\"],\"image\":[\"/assets/images/product/electronics/8.jpg\",\"/assets/images/product/electronics/9.jpg\",\"/assets/images/product/electronics/10.jpg\",\"/assets/images/product/electronics/11.jpg\",\"/assets/images/product/electronics/12.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"27\",\"createDate\":\"Mar 08 2020 10:10:00 AM\",\"sku\":\"asdf127\",\"name\":\"Lorem ipsum electronics nine\",\"slug\":\"lorem-ipsum-electronics-nine\",\"stock\":20,\"price\":10,\"discount\":10,\"featured\":false,\"new\":false,\"rating\":5,\"ratingCount\":4,\"saleCount\":13,\"dealEnd\":\"March 07, 2021 12:12:00\",\"category\":[\"electronics\"],\"tag\":[\"electronics\"],\"thumbImage\":[\"/assets/images/product/electronics/9.jpg\",\"/assets/images/product/electronics/9_9.jpg\"],\"image\":[\"/assets/images/product/electronics/9.jpg\",\"/assets/images/product/electronics/10.jpg\",\"/assets/images/product/electronics/11.jpg\",\"/assets/images/product/electronics/12.jpg\",\"/assets/images/product/electronics/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"28\",\"createDate\":\"Mar 09 2020 10:10:00 AM\",\"sku\":\"asdf128\",\"name\":\"Lorem ipsum electronics ten\",\"slug\":\"lorem-ipsum-electronics-ten\",\"stock\":25,\"price\":15,\"discount\":15,\"featured\":true,\"new\":true,\"rating\":4,\"ratingCount\":10,\"saleCount\":15,\"dealEnd\":\"March 07, 2021 12:12:00\",\"category\":[\"electronics\"],\"tag\":[\"electronics\"],\"thumbImage\":[\"/assets/images/product/electronics/10.jpg\",\"/assets/images/product/electronics/10_10.jpg\"],\"image\":[\"/assets/images/product/electronics/10.jpg\",\"/assets/images/product/electronics/11.jpg\",\"/assets/images/product/electronics/12.jpg\",\"/assets/images/product/electronics/1.jpg\",\"/assets/images/product/electronics/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"29\",\"createDate\":\"Mar 10 2020 10:10:00 AM\",\"sku\":\"asdf129\",\"name\":\"Lorem ipsum electronics eleven\",\"slug\":\"lorem-ipsum-electronics-eleven\",\"stock\":20,\"price\":25,\"discount\":10,\"featured\":false,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":15,\"dealEnd\":\"March 07, 2021 12:12:00\",\"category\":[\"electronics\"],\"tag\":[\"electronics\"],\"thumbImage\":[\"/assets/images/product/electronics/11.jpg\",\"/assets/images/product/electronics/11_11.jpg\"],\"image\":[\"/assets/images/product/electronics/11.jpg\",\"/assets/images/product/electronics/12.jpg\",\"/assets/images/product/electronics/1.jpg\",\"/assets/images/product/electronics/2.jpg\",\"/assets/images/product/electronics/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"30\",\"createDate\":\"Mar 11 2020 10:10:00 AM\",\"sku\":\"asdf130\",\"name\":\"Lorem ipsum electronics twelve\",\"slug\":\"lorem-ipsum-electronics-twelve\",\"stock\":25,\"price\":20,\"discount\":0,\"featured\":true,\"new\":true,\"rating\":3,\"ratingCount\":5,\"saleCount\":10,\"dealEnd\":\"March 07, 2021 12:12:00\",\"category\":[\"electronics\"],\"tag\":[\"electronics\"],\"thumbImage\":[\"/assets/images/product/electronics/12.jpg\",\"/assets/images/product/electronics/12_12.jpg\"],\"image\":[\"/assets/images/product/electronics/12.jpg\",\"/assets/images/product/electronics/1.jpg\",\"/assets/images/product/electronics/2.jpg\",\"/assets/images/product/electronics/3.jpg\",\"/assets/images/product/electronics/4.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"}]");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "t1BQ":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-sweetalert");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "wQtD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DECREASE_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DELETE_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DELETE_ALL_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return decreaseQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return deleteFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return deleteAllFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return cartItemStock; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ADD_TO_CART = "ADD_TO_CART";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART"; //add to cart

const addToCart = (item, addToast, quantityCount, selectedProductColor, selectedProductSize) => {
  return dispatch => {
    if (addToast) {
      addToast("Added To Cart", {
        appearance: "success",
        autoDismiss: true
      });
    }

    dispatch({
      type: ADD_TO_CART,
      payload: _objectSpread(_objectSpread({}, item), {}, {
        quantity: quantityCount,
        selectedProductColor: selectedProductColor ? selectedProductColor : item.selectedProductColor ? item.selectedProductColor : null,
        selectedProductSize: selectedProductSize ? selectedProductSize : item.selectedProductSize ? item.selectedProductSize : null
      })
    });
  };
}; //decrease from cart

const decreaseQuantity = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Item Decremented From Cart", {
        appearance: "warning",
        autoDismiss: true
      });
    }

    dispatch({
      type: DECREASE_QUANTITY,
      payload: item
    });
  };
}; //delete from cart

const deleteFromCart = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed From Cart", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_FROM_CART,
      payload: item
    });
  };
}; //delete all from cart

const deleteAllFromCart = addToast => {
  return dispatch => {
    if (addToast) {
      addToast("Removed All From Cart", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_ALL_FROM_CART
    });
  };
}; // get stock of cart item

const cartItemStock = (item, color, size) => {
  // if (item.stock) {
  //   return item.stock;
  // } else {
  //   return item.variation
  //     .filter(single => single.color === color)[0]
  //     .size.filter(single => single.name === size)[0].stock;
  // }
  return item;
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });