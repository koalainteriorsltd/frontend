module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/Rj":
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "+5HK":
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

/***/ }),

/***/ "/WcL":
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "1r3C":
/***/ (function(module, exports) {

module.exports = require("react-search-box");

/***/ }),

/***/ "2Bli":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Breadcrumb_BreadcrumbOne; });

// UNUSED EXPORTS: ProductListBreadcrumb

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./src/components/Breadcrumb/BreadcrumbOne.js

var __jsx = external_react_default.a.createElement;


const BreadcrumbOne = ({
  pageTitle,
  children
}) => {
  return __jsx("div", {
    className: "breadcrumb-section space-pt--r70"
  }, __jsx(external_react_bootstrap_["Container"], null, __jsx(external_react_bootstrap_["Row"], {
    className: "align-items-center"
  }, __jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, __jsx("div", {
    className: "page-title"
  }, __jsx("h3", {
    className: "breadcrumb-title"
  }, pageTitle))), __jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, children))));
};

/* harmony default export */ var Breadcrumb_BreadcrumbOne = (BreadcrumbOne);
// CONCATENATED MODULE: ./src/components/Breadcrumb/ProductListBreadcrumb.js

var ProductListBreadcrumb_jsx = external_react_default.a.createElement;


const ProductListBreadcrumb_BreadcrumbOne = ({
  pageTitle,
  children
}) => {
  return ProductListBreadcrumb_jsx("div", {
    className: "breadcrumb-section space-pt--r70"
  }, ProductListBreadcrumb_jsx(external_react_bootstrap_["Container"], null, ProductListBreadcrumb_jsx(external_react_bootstrap_["Row"], {
    className: "align-items-center"
  }, ProductListBreadcrumb_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, ProductListBreadcrumb_jsx("div", {
    className: "page-title"
  }, ProductListBreadcrumb_jsx("a", null, children), ProductListBreadcrumb_jsx("h3", {
    className: "breadcrumb-title"
  }, pageTitle))))));
};

/* harmony default export */ var ProductListBreadcrumb = (ProductListBreadcrumb_BreadcrumbOne);
// CONCATENATED MODULE: ./src/components/Breadcrumb/index.js




/***/ }),

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "57of":
/***/ (function(module, exports) {

module.exports = require("@woocommerce/woocommerce-rest-api");

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sjzJ");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

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

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "C1xe":
/***/ (function(module, exports) {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QHcI":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "T8nW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ProductFetchCalls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProductCategoryFetchCalls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ProductsAllFetchCalls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProductDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ProductVariations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ShippingFetch; });
/* harmony import */ var _endPoints_EndPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("x8wa");
/* harmony import */ var _configs_Configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wmHC");


const ProductFetchCalls = slug => {
  return _configs_Configs__WEBPACK_IMPORTED_MODULE_1__[/* api */ "a"].get(`products/categories/${slug ? slug : ""}?per_page=100`).then(response => {
    if (response.status == 200) {
      return response.data;
    }
  }).catch(error => {
    console.log("Response Data:", error.response);
  });
};
const ProductCategoryFetchCalls = id => {
  return _configs_Configs__WEBPACK_IMPORTED_MODULE_1__[/* api */ "a"].get(`products/categories?parent=${id ? id : ""}`).then(response => {
    if (response.status == 200) {
      return response.data;
    }
  }).catch(error => {
    console.log("Response Data:", error.response);
  });
};
const CategoryProducts = id => {
  return _configs_Configs__WEBPACK_IMPORTED_MODULE_1__[/* api */ "a"].get(`products?category?id=${id}&per_page=100`).then(response => {
    if (response.status == 200) return response.data;else return [];
  }).catch(error => {
    console.log("Response Data:", error.response);
  });
};
const ProductsAllFetchCalls = () => {
  return _configs_Configs__WEBPACK_IMPORTED_MODULE_1__[/* api */ "a"].get(`${_endPoints_EndPoints__WEBPACK_IMPORTED_MODULE_0__[/* ApiUrl */ "a"].ProductsAll}?per_page=100`).then(response => {
    if (response.status == 200) return response.data;else return [];
  }).catch(error => {
    console.log("Response Data:", error.response);
  });
};
const ProductDetails = slug => {
  return _configs_Configs__WEBPACK_IMPORTED_MODULE_1__[/* api */ "a"].get(`products?slug=${slug}`).then(response => {
    if (response.status == 200 && response.data.length > 0) return response.data;else return [];
  }).catch(error => {
    console.log("Response Data:", error.response);
  });
};
const ProductVariations = id => {
  return _configs_Configs__WEBPACK_IMPORTED_MODULE_1__[/* api */ "a"].get(`products/${id}/variations`).then(response => {
    return response.data;
  }).catch(error => {
    console.log("Response Data:", error.response);
  });
};
const ShippingFetch = () => {
  return _configs_Configs__WEBPACK_IMPORTED_MODULE_1__[/* api */ "a"].get(`shipping/zones/1/methods`).then(response => {
    return response.data;
  }).catch(error => {
    console.log("Response Data:", error.response);
  });
};

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "aArQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ layouts_LayoutOne; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ layouts_SubLayout; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__("/WcL");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: external "react-search-box"
var external_react_search_box_ = __webpack_require__("1r3C");

// EXTERNAL MODULE: ./src/services/api/fetchCalls/ProductFetchCalls.js
var ProductFetchCalls = __webpack_require__("T8nW");

// EXTERNAL MODULE: external "react-toast-notifications"
var external_react_toast_notifications_ = __webpack_require__("C1xe");

// EXTERNAL MODULE: ./src/lib/product.js
var lib_product = __webpack_require__("z9us");

// EXTERNAL MODULE: ./src/redux/actions/cartActions.js
var cartActions = __webpack_require__("wQtD");

// CONCATENATED MODULE: ./src/components/Header/elements/MiniCart.js

var __jsx = external_react_default.a.createElement;








const MiniCart = ({
  cartItems,
  deleteFromCart
}) => {
  let cartTotalPrice = 0;
  const {
    addToast
  } = Object(external_react_toast_notifications_["useToasts"])();
  return __jsx(external_react_["Fragment"], null, cartItems.length > 0 ? __jsx("div", {
    className: "cart-box"
  }, __jsx("ul", {
    className: "cart-list"
  }, cartItems && cartItems.map((product, key) => {
    const discountedPrice = Object(lib_product["a" /* getDiscountPrice */])(product.regular_price, product.price).toFixed(2);
    cartTotalPrice += product.price * product.quantity;
    return __jsx("li", {
      key: key
    }, __jsx("button", {
      className: "item-remove",
      onClick: () => deleteFromCart(product, addToast)
    }, __jsx(io_["IoIosClose"], null)), __jsx("div", {
      className: "single-item"
    }, __jsx("div", {
      className: "single-item__image"
    }, __jsx(link_default.a, {
      href: `/shop/product/[slug]?slug=${product.slug}`,
      as: "/shop/product/" + product.slug
    }, __jsx("a", null, __jsx("img", {
      src: product.images[0].src,
      alt: "cart_thumb1"
    })))), __jsx("div", {
      className: "single-item__content"
    }, __jsx(link_default.a, {
      href: `/shop/product/[slug]?slug=${product.slug}`,
      as: "/shop/product/" + product.slug
    }, __jsx("a", {
      style: {
        color: 'black'
      }
    }, product.name)), __jsx("span", {
      className: "cart-quantity"
    }, " ", product.quantity, " x", " ", __jsx("span", {
      className: "cart-amount"
    }, " ", __jsx("span", {
      className: "price-symbol"
    }, "\xA3")), product.price))));
  })), __jsx("div", {
    className: "cart-footer"
  }, __jsx("p", {
    className: "cart-total"
  }, __jsx("strong", null, "Subtotal:"), " ", __jsx("span", {
    className: "cart-price"
  }, " ", __jsx("span", {
    className: "price-symbol"
  }, "\xA3")), cartTotalPrice.toFixed(2)), __jsx("div", {
    className: "cart-buttons"
  }, __jsx(link_default.a, {
    href: "/other/cart"
  }, __jsx("a", {
    className: "btn btn-fill-line view-cart"
  }, "View Cart")), __jsx(link_default.a, {
    href: "/other/checkout"
  }, __jsx("a", {
    className: "btn btn-fill-out checkout"
  }, "Checkout"))))) : "");
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(Object(cartActions["i" /* deleteFromCart */])(item, addToast));
    }
  };
};

/* harmony default export */ var elements_MiniCart = (Object(external_react_redux_["connect"])(null, mapDispatchToProps)(MiniCart));
// CONCATENATED MODULE: ./src/components/Header/elements/HeaderTop.js

var HeaderTop_jsx = external_react_default.a.createElement;












const HeaderTop = ({
  cartItems
}) => {
  return HeaderTop_jsx(external_react_default.a.Fragment, null, HeaderTop_jsx("div", {
    className: "top-header d-none d-lg-block"
  }, HeaderTop_jsx(external_react_bootstrap_["Container"], null, HeaderTop_jsx(external_react_bootstrap_["Row"], {
    className: "align-items-center"
  }, HeaderTop_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, HeaderTop_jsx("div", {
    className: "d-flex align-items-center justify-content-center justify-content-md-start"
  }, HeaderTop_jsx("ul", {
    className: "contact-detail text-center text-lg-left"
  }, HeaderTop_jsx("li", null, HeaderTop_jsx(fa_["FaPhoneAlt"], null), HeaderTop_jsx("span", null, "123-456-7890"))))), HeaderTop_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, HeaderTop_jsx("div", {
    className: "text-center text-md-right"
  }, HeaderTop_jsx("ul", {
    className: "header-list header-icons"
  }, HeaderTop_jsx("li", null, HeaderTop_jsx(link_default.a, {
    href: "/other/login"
  }, HeaderTop_jsx("a", null, HeaderTop_jsx("span", null, "Login / Register"), HeaderTop_jsx(ai_["AiOutlineUser"], null)))), HeaderTop_jsx("li", {
    className: "position-relative"
  }, HeaderTop_jsx(link_default.a, {
    href: "/other/cart"
  }, HeaderTop_jsx("a", {
    style: {
      color: '#4F3327'
    },
    className: "nav-link mini-cart-trigger pr-3 pr-lg-0"
  }, HeaderTop_jsx(fa_["FaShoppingCart"], null), cartItems.length > 0 ? HeaderTop_jsx("span", {
    className: "cart-count"
  }, cartItems.length) : "")), HeaderTop_jsx(elements_MiniCart, {
    cartItems: cartItems
  })), HeaderTop_jsx("li", {
    className: "d-block d-lg-none position-relative"
  }, HeaderTop_jsx(link_default.a, {
    href: "/other/cart"
  }, HeaderTop_jsx("a", {
    className: "nav-link mini-cart-trigger pr-3 pr-lg-0"
  }, HeaderTop_jsx(ai_["AiOutlineShoppingCart"], null), cartItems.length > 0 ? HeaderTop_jsx("span", {
    className: "cart-count cart-count--mobile"
  }, cartItems.length) : ""))))))))), HeaderTop_jsx("div", {
    className: "top-review d-none d-lg-block"
  }, HeaderTop_jsx(external_react_bootstrap_["Container"], null, HeaderTop_jsx(external_react_bootstrap_["Row"], {
    className: "align-items-center"
  }, HeaderTop_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, HeaderTop_jsx("div", {
    className: "d-flex align-items-center justify-content-center justify-content-md-start"
  }, HeaderTop_jsx("ul", {
    className: "review-detail text-center text-lg-left"
  }, HeaderTop_jsx("li", null, " ", HeaderTop_jsx("img", {
    src: "/assets/images/star(2).svg",
    alt: "review"
  })), HeaderTop_jsx("li", null, " ", HeaderTop_jsx("img", {
    src: "/assets/images/star(2).svg",
    alt: "review"
  })), HeaderTop_jsx("li", null, " ", HeaderTop_jsx("img", {
    src: "/assets/images/star(2).svg",
    alt: "review"
  })), HeaderTop_jsx("li", null, " ", HeaderTop_jsx("img", {
    src: "/assets/images/star(2).svg",
    alt: "review"
  })), HeaderTop_jsx("li", null, " ", HeaderTop_jsx("img", {
    src: "/assets/images/star(2).svg",
    alt: "review"
  })), HeaderTop_jsx("li", null, HeaderTop_jsx("span", null, "4.56 based on 12672 reviews"))))), HeaderTop_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, HeaderTop_jsx("div", {
    className: "text-center text-md-right"
  }, HeaderTop_jsx("ul", {
    className: "header-search-list"
  }, HeaderTop_jsx("li", null, HeaderTop_jsx("img", {
    className: "truck-icon",
    src: "/assets/images/truck_icon.svg"
  })), HeaderTop_jsx("li", null, HeaderTop_jsx("p", null, HeaderTop_jsx("strong", null, "Free shipping")), HeaderTop_jsx("p", null, HeaderTop_jsx("span", null, "over \xA3200 spend"))), HeaderTop_jsx("li", null, HeaderTop_jsx("div", {
    className: "search-form"
  }, HeaderTop_jsx("div", null, HeaderTop_jsx("input", {
    type: "text"
  })), HeaderTop_jsx("div", null, HeaderTop_jsx("button", null, HeaderTop_jsx(io_["IoIosSearch"], null))))))))))));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData
  };
};

/* harmony default export */ var elements_HeaderTop = (Object(external_react_redux_["connect"])(mapStateToProps)(HeaderTop));
// CONCATENATED MODULE: ./src/components/Header/elements/Navigation.js

var Navigation_jsx = external_react_default.a.createElement;




const Navigation = ({
  productData
}) => {
  const {
    productMenu,
    roomMenu
  } = productData;
  return Navigation_jsx("nav", {
    className: "navigation d-none d-lg-block"
  }, Navigation_jsx("ul", {
    className: "navbar"
  }, Navigation_jsx("li", null, Navigation_jsx("ul", {
    className: "left-nav"
  }, Navigation_jsx("li", {
    className: "has-children-mega"
  }, Navigation_jsx(link_default.a, {
    href: "/shop/shop-by-product"
  }, Navigation_jsx("a", {
    className: "nav-link"
  }, "Shop by Product", Navigation_jsx(io_["IoIosArrowDown"], null))), Navigation_jsx("ul", {
    className: "sub-menu sub-menu--mega"
  }, productMenu && productMenu.length > 0 && productMenu.map((data, key) => Navigation_jsx("li", {
    style: {
      padding: '20px 30px 20px 30px'
    },
    className: "sub-menu--mega__column",
    key: key
  }, Navigation_jsx(link_default.a, {
    href: `/shop/category/${data.slug}`,
    as: "/shop/category/" + data.slug
  }, Navigation_jsx("a", null, data.name)))))), Navigation_jsx("li", {
    className: "has-children-mega"
  }, Navigation_jsx(link_default.a, {
    href: "/shop/shop-by-room"
  }, Navigation_jsx("a", {
    className: "nav-link"
  }, "Shop by Room", Navigation_jsx(io_["IoIosArrowDown"], null))), Navigation_jsx("ul", {
    className: "sub-menu sub-menu--mega"
  }, roomMenu && roomMenu.length > 0 && roomMenu.map((data, key) => Navigation_jsx("li", {
    style: {
      padding: '20px 30px 20px 30px'
    },
    className: "sub-menu--mega__column",
    key: key
  }, Navigation_jsx(link_default.a, {
    href: `/shop/category/${data.slug}`,
    as: "/shop/category/" + data.slug
  }, Navigation_jsx("a", null, data.name)))))))), Navigation_jsx("li", {
    className: "center-nav justify-content-center"
  }, Navigation_jsx(link_default.a, {
    href: "/"
  }, Navigation_jsx("a", {
    className: "navbar-brand"
  }, Navigation_jsx("img", {
    className: "logo-dark",
    src: "/assets/images/logo.svg",
    alt: "logo"
  })))), Navigation_jsx("li", null, Navigation_jsx("ul", {
    className: "right-nav"
  }, Navigation_jsx("li", null, Navigation_jsx(link_default.a, {
    href: "/static/contact-us"
  }, Navigation_jsx("a", {
    className: "nav-link"
  }, "Our Story"))), Navigation_jsx("li", null, Navigation_jsx(link_default.a, {
    href: "/static/contact-us"
  }, Navigation_jsx("a", {
    className: "nav-link"
  }, "Contact Us")))))));
};

/* harmony default export */ var elements_Navigation = (Navigation);
// CONCATENATED MODULE: ./src/components/Header/elements/SearchOverlay.js

var SearchOverlay_jsx = external_react_default.a.createElement;



const SearchOverlay = ({
  activeStatus,
  getActiveStatus
}) => {
  return SearchOverlay_jsx(external_react_["Fragment"], null, SearchOverlay_jsx("div", {
    className: `search-wrap ${activeStatus ? "open" : ""}`
  }, SearchOverlay_jsx("button", {
    className: "close-search",
    onClick: () => {
      getActiveStatus(false);
    }
  }, SearchOverlay_jsx(io_["IoIosClose"], null)), SearchOverlay_jsx("form", null, SearchOverlay_jsx("input", {
    type: "text",
    placeholder: "Search",
    className: "form-control",
    id: "search-input"
  }), SearchOverlay_jsx("button", {
    type: "submit",
    className: "search-icon"
  }, SearchOverlay_jsx(io_["IoIosSearch"], null)))), SearchOverlay_jsx("div", {
    className: `search-overlay  ${activeStatus ? "open" : ""}`
  }));
};

/* harmony default export */ var elements_SearchOverlay = (SearchOverlay);
// CONCATENATED MODULE: ./src/components/Header/elements/MobileMenuSearch.js

var MobileMenuSearch_jsx = external_react_default.a.createElement;


const MobileMenuSearch = () => {
  return MobileMenuSearch_jsx("div", {
    className: "offcanvas-mobile-menu__search"
  }, MobileMenuSearch_jsx("form", null, MobileMenuSearch_jsx("input", {
    type: "search",
    placeholder: "Search here"
  }), MobileMenuSearch_jsx("button", {
    type: "submit"
  }, MobileMenuSearch_jsx(io_["IoIosSearch"], null))));
};

/* harmony default export */ var elements_MobileMenuSearch = (MobileMenuSearch);
// CONCATENATED MODULE: ./src/components/Header/elements/MobileMenuNav.js

var MobileMenuNav_jsx = external_react_default.a.createElement;



const MobileMenuNav = ({
  getActiveStatus,
  productData
}) => {
  const {
    productMenu,
    roomMenu
  } = productData;
  Object(external_react_["useEffect"])(() => {
    const offCanvasNav = document.querySelector("#offcanvas-mobile-menu__navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".mobile-sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = e => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  return MobileMenuNav_jsx("nav", {
    className: "offcanvas-mobile-menu__navigation space-mb--30",
    id: "offcanvas-mobile-menu__navigation"
  }, MobileMenuNav_jsx("ul", null, MobileMenuNav_jsx("li", {
    className: "menu-item-has-children"
  }, MobileMenuNav_jsx(link_default.a, {
    href: "/"
  }, MobileMenuNav_jsx("a", null, "Home"))), MobileMenuNav_jsx("li", {
    className: "menu-item-has-children"
  }, MobileMenuNav_jsx(link_default.a, {
    href: "/shop/grid-left-sidebar"
  }, MobileMenuNav_jsx("a", null, "Shop by Products")), MobileMenuNav_jsx("ul", {
    className: "mobile-sub-menu"
  }, productMenu && productMenu.map(data => {
    MobileMenuNav_jsx("li", {
      className: "menu-item-has-children"
    }, MobileMenuNav_jsx(link_default.a, {
      href: "/shop/grid-left-sidebar"
    }, MobileMenuNav_jsx("a", null, data.name)));
  }))), MobileMenuNav_jsx("li", {
    className: "menu-item-has-children"
  }, MobileMenuNav_jsx(link_default.a, {
    href: "/shop/grid-left-sidebar"
  }, MobileMenuNav_jsx("a", null, "Shop by Room")), MobileMenuNav_jsx("ul", {
    className: "mobile-sub-menu"
  }, roomMenu && roomMenu.map(data => {
    MobileMenuNav_jsx("li", {
      className: "menu-item-has-children"
    }, MobileMenuNav_jsx(link_default.a, {
      href: "/shop/grid-left-sidebar"
    }, MobileMenuNav_jsx("a", null, data.name)));
  }))), MobileMenuNav_jsx("li", {
    className: "menu-item-has-children"
  }, MobileMenuNav_jsx(link_default.a, {
    href: "/blog/grid-four-columns"
  }, MobileMenuNav_jsx("a", null, "Our Story"))), MobileMenuNav_jsx("li", null, MobileMenuNav_jsx(link_default.a, {
    href: "/other/contact-us"
  }, MobileMenuNav_jsx("a", null, "Contact Us")))));
};

/* harmony default export */ var elements_MobileMenuNav = (MobileMenuNav);
// CONCATENATED MODULE: ./src/components/Header/elements/MobileMenuWidgets.js

var MobileMenuWidgets_jsx = external_react_default.a.createElement;



const MobileMenuWidgets = () => {
  return MobileMenuWidgets_jsx("div", {
    className: "offcanvas-mobile-menu__widgets space-mb--30"
  }, MobileMenuWidgets_jsx("div", {
    className: "contact-widget space-mb--30"
  }, MobileMenuWidgets_jsx("ul", null, MobileMenuWidgets_jsx("li", null, MobileMenuWidgets_jsx(io_["IoMdPerson"], null), MobileMenuWidgets_jsx(link_default.a, {
    href: "/other/login"
  }, MobileMenuWidgets_jsx("a", null, "Login"))), MobileMenuWidgets_jsx("li", null, MobileMenuWidgets_jsx(io_["IoIosPhonePortrait"], null), MobileMenuWidgets_jsx("a", {
    href: "tel://12452456012"
  }, "(1245) 2456 012 ")), MobileMenuWidgets_jsx("li", null, MobileMenuWidgets_jsx(io_["IoMdMail"], null), MobileMenuWidgets_jsx("a", {
    href: "mailto:info@yourdomain.com"
  }, "info@koalainteriors.co.in")))), MobileMenuWidgets_jsx("div", {
    className: "social-widget"
  }, MobileMenuWidgets_jsx("a", {
    href: "https://www.twitter.com",
    target: "_blank"
  }, MobileMenuWidgets_jsx(io_["IoLogoTwitter"], null)), MobileMenuWidgets_jsx("a", {
    href: "https://www.instagram.com",
    target: "_blank"
  }, MobileMenuWidgets_jsx(io_["IoLogoInstagram"], null)), MobileMenuWidgets_jsx("a", {
    href: "https://www.facebook.com",
    target: "_blank"
  }, MobileMenuWidgets_jsx(io_["IoLogoFacebook"], null)), MobileMenuWidgets_jsx("a", {
    href: "https://www.pinterest.com",
    target: "_blank"
  }, MobileMenuWidgets_jsx(io_["IoLogoPinterest"], null))));
};

/* harmony default export */ var elements_MobileMenuWidgets = (MobileMenuWidgets);
// CONCATENATED MODULE: ./src/components/Header/elements/MobileMenu.js

var MobileMenu_jsx = external_react_default.a.createElement;





const MobileMenu = ({
  activeStatus,
  getActiveStatus,
  productData
}) => {
  return MobileMenu_jsx("div", {
    className: `offcanvas-mobile-menu ${activeStatus ? "active" : ""}`
  }, MobileMenu_jsx("div", {
    className: "offcanvas-mobile-menu__overlay-close",
    onClick: () => getActiveStatus(false)
  }), MobileMenu_jsx("div", {
    className: "offcanvas-mobile-menu__wrapper"
  }, MobileMenu_jsx("button", {
    className: "offcanvas-mobile-menu__close",
    onClick: () => getActiveStatus(false)
  }, MobileMenu_jsx(io_["IoIosClose"], null)), MobileMenu_jsx("div", {
    className: "offcanvas-mobile-menu__content-wrapper"
  }, MobileMenu_jsx("div", {
    className: "offcanvas-mobile-menu__content"
  }, MobileMenu_jsx(elements_MobileMenuSearch, null), MobileMenu_jsx(elements_MobileMenuNav, {
    getActiveStatus: getActiveStatus,
    productData: productData
  }), MobileMenu_jsx(elements_MobileMenuWidgets, null)))));
};

/* harmony default export */ var elements_MobileMenu = (MobileMenu);
// CONCATENATED MODULE: ./src/components/Header/HeaderOne.js

var HeaderOne_jsx = external_react_default.a.createElement;












const HeaderOne = ({
  cartItems,
  navPositionClass,
  productData
}) => {
  const {
    0: scroll,
    1: setScroll
  } = Object(external_react_["useState"])(0);
  const {
    0: headerHeight,
    1: setHeaderHeight
  } = Object(external_react_["useState"])(0);
  const {
    0: offCanvasSearchActive,
    1: setOffCanvasSearchActive
  } = Object(external_react_["useState"])(false);
  const {
    0: offCanvasMobileMenuActive,
    1: setOffCanvasMobileMenuActive
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    const header = document.querySelector(".header-wrap");
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return HeaderOne_jsx("header", {
    className: `header-wrap header-with-topbar ${scroll > headerHeight ? "is-sticky" : ""}`
  }, HeaderOne_jsx(elements_HeaderTop, null), HeaderOne_jsx("div", {
    className: "bottom-header dark-skin bg--grey"
  }, HeaderOne_jsx(external_react_bootstrap_["Container"], null, HeaderOne_jsx("div", {
    className: "bottom-header-container d-flex justify-content-between align-items-center"
  }, HeaderOne_jsx(elements_Navigation, {
    positionClass: navPositionClass,
    productData: productData
  }), HeaderOne_jsx("ul", {
    className: "header-icons d-flex"
  }, HeaderOne_jsx("li", {
    className: "d-block d-lg-none position-relative"
  }, HeaderOne_jsx(link_default.a, {
    href: "/other/cart"
  }, HeaderOne_jsx("a", {
    className: "nav-link mini-cart-trigger pr-3 pr-lg-0"
  }, HeaderOne_jsx(ai_["AiOutlineShoppingCart"], null), cartItems.length > 0 ? HeaderOne_jsx("span", {
    className: "cart-count cart-count--mobile"
  }, cartItems.length) : ""))), HeaderOne_jsx("li", {
    className: "d-block d-lg-none"
  }, HeaderOne_jsx("button", {
    className: "nav-link mobile-menu-trigger pr-0",
    onClick: () => {
      setOffCanvasMobileMenuActive(true);
    }
  }, HeaderOne_jsx(io_["IoIosMenu"], null))), HeaderOne_jsx("li", {
    className: "d-block d-lg-none"
  }, HeaderOne_jsx(link_default.a, {
    href: "/"
  }, HeaderOne_jsx("a", {
    className: "navbar-brand"
  }, HeaderOne_jsx("img", {
    className: "logo-dark img-responsive",
    style: {
      width: '200px',
      marginLeft: '20px'
    },
    src: "/assets/images/logo.svg",
    alt: "logo"
  })))))))), HeaderOne_jsx(elements_SearchOverlay, {
    activeStatus: offCanvasSearchActive,
    getActiveStatus: setOffCanvasSearchActive
  }), HeaderOne_jsx(elements_MobileMenu, {
    activeStatus: offCanvasMobileMenuActive,
    getActiveStatus: setOffCanvasMobileMenuActive,
    productData: productData
  }));
};

const HeaderOne_mapStateToProps = state => {
  return {
    cartItems: state.cartData
  };
};

/* harmony default export */ var Header_HeaderOne = (Object(external_react_redux_["connect"])(HeaderOne_mapStateToProps)(HeaderOne));
// CONCATENATED MODULE: ./src/components/Header/elements/SubHeaderTop.js

var SubHeaderTop_jsx = external_react_default.a.createElement;










const SubHeaderTop = ({
  cartItems
}) => {
  return SubHeaderTop_jsx(external_react_default.a.Fragment, null, SubHeaderTop_jsx("div", {
    className: "top-header d-none d-lg-block"
  }, SubHeaderTop_jsx(external_react_bootstrap_["Container"], null, SubHeaderTop_jsx(external_react_bootstrap_["Row"], {
    className: "align-items-center"
  }, SubHeaderTop_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, SubHeaderTop_jsx("div", {
    className: "d-flex align-items-center justify-content-center justify-content-md-start"
  }, SubHeaderTop_jsx("ul", {
    className: "contact-detail text-center text-lg-left"
  }, SubHeaderTop_jsx("li", null, SubHeaderTop_jsx(fa_["FaPhoneAlt"], null), SubHeaderTop_jsx("span", null, "123-456-7890"))))), SubHeaderTop_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, SubHeaderTop_jsx("div", {
    className: "text-center text-md-right"
  }, SubHeaderTop_jsx("ul", {
    className: "header-list header-icons"
  }, SubHeaderTop_jsx("li", null, SubHeaderTop_jsx(link_default.a, {
    href: "/other/login"
  }, SubHeaderTop_jsx("a", null, SubHeaderTop_jsx("span", null, "Login / Register"), SubHeaderTop_jsx(ai_["AiOutlineUser"], null)))), SubHeaderTop_jsx("li", {
    className: "position-relative"
  }, SubHeaderTop_jsx(link_default.a, {
    href: "/other/cart"
  }, SubHeaderTop_jsx("a", {
    style: {
      color: '#4F3327'
    },
    className: "nav-link mini-cart-trigger pr-3 pr-lg-0"
  }, SubHeaderTop_jsx(fa_["FaShoppingCart"], null), cartItems.length > 0 ? SubHeaderTop_jsx("span", {
    className: "cart-count"
  }, cartItems.length) : "")), SubHeaderTop_jsx(elements_MiniCart, {
    cartItems: cartItems
  })), SubHeaderTop_jsx("li", {
    className: "d-block d-lg-none position-relative"
  }, SubHeaderTop_jsx(link_default.a, {
    href: "/other/cart"
  }, SubHeaderTop_jsx("a", {
    className: "nav-link mini-cart-trigger pr-3 pr-lg-0"
  }, SubHeaderTop_jsx(ai_["AiOutlineShoppingCart"], null), cartItems.length > 0 ? SubHeaderTop_jsx("span", {
    className: "cart-count cart-count--mobile"
  }, cartItems.length) : ""))))))))));
};

const SubHeaderTop_mapStateToProps = state => {
  return {
    cartItems: state.cartData
  };
};

/* harmony default export */ var elements_SubHeaderTop = (Object(external_react_redux_["connect"])(SubHeaderTop_mapStateToProps)(SubHeaderTop));
// CONCATENATED MODULE: ./src/components/Header/SubHeader.js

var SubHeader_jsx = external_react_default.a.createElement;












const SubHeader = ({
  cartItems,
  navPositionClass,
  productData
}) => {
  const {
    0: scroll,
    1: setScroll
  } = Object(external_react_["useState"])(0);
  const {
    0: headerHeight,
    1: setHeaderHeight
  } = Object(external_react_["useState"])(0);
  const {
    0: offCanvasSearchActive,
    1: setOffCanvasSearchActive
  } = Object(external_react_["useState"])(false);
  const {
    0: offCanvasMobileMenuActive,
    1: setOffCanvasMobileMenuActive
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    const header = document.querySelector(".header-wrap");
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return SubHeader_jsx("header", {
    className: `header-wrap header-with-topbar ${scroll > headerHeight ? "is-sticky" : ""}`
  }, SubHeader_jsx(elements_SubHeaderTop, null), SubHeader_jsx("div", {
    className: "bottom-header dark-skin bg--grey"
  }, SubHeader_jsx(external_react_bootstrap_["Container"], null, SubHeader_jsx("div", {
    className: "bottom-header-container d-flex justify-content-between align-items-center"
  }, SubHeader_jsx(elements_Navigation, {
    positionClass: navPositionClass,
    productData: productData
  }), SubHeader_jsx("ul", {
    className: "header-icons d-flex"
  }, SubHeader_jsx("li", {
    className: "d-block d-lg-none position-relative"
  }, SubHeader_jsx(link_default.a, {
    href: "/other/cart"
  }, SubHeader_jsx("a", {
    className: "nav-link mini-cart-trigger pr-3 pr-lg-0"
  }, SubHeader_jsx(ai_["AiOutlineShoppingCart"], null), cartItems.length > 0 ? SubHeader_jsx("span", {
    className: "cart-count cart-count--mobile"
  }, cartItems.length) : ""))), SubHeader_jsx("li", {
    className: "d-block d-lg-none"
  }, SubHeader_jsx("button", {
    className: "nav-link mobile-menu-trigger pr-0",
    onClick: () => {
      setOffCanvasMobileMenuActive(true);
    }
  }, SubHeader_jsx(io_["IoIosMenu"], null))))))), SubHeader_jsx(elements_SearchOverlay, {
    activeStatus: offCanvasSearchActive,
    getActiveStatus: setOffCanvasSearchActive
  }), SubHeader_jsx(elements_MobileMenu, {
    activeStatus: offCanvasMobileMenuActive,
    getActiveStatus: setOffCanvasMobileMenuActive,
    productData: productData
  }));
};

const SubHeader_mapStateToProps = state => {
  return {
    cartItems: state.cartData
  };
};

/* harmony default export */ var Header_SubHeader = (Object(external_react_redux_["connect"])(SubHeader_mapStateToProps)(SubHeader));
// CONCATENATED MODULE: ./src/components/Header/index.js



// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");

// EXTERNAL MODULE: external "react-mailchimp-subscribe"
var external_react_mailchimp_subscribe_ = __webpack_require__("+5HK");
var external_react_mailchimp_subscribe_default = /*#__PURE__*/__webpack_require__.n(external_react_mailchimp_subscribe_);

// CONCATENATED MODULE: ./src/components/Newsletter/SubscribeEmail.js

var SubscribeEmail_jsx = external_react_default.a.createElement;


const CustomForm = ({
  status,
  message,
  onValidated,
  alertColor,
  btnColorClass
}) => {
  let email;

  const submit = () => {
    email && email.value.indexOf("@") > -1 && onValidated({
      EMAIL: email.value
    });
    let emailInput = document.getElementById("mc-form-email");
    emailInput.value = "";
  };

  return SubscribeEmail_jsx("div", {
    className: "newsletter-form-wrapper"
  }, SubscribeEmail_jsx("div", {
    className: "newsletter-form position-relative"
  }, SubscribeEmail_jsx("input", {
    id: "mc-form-email",
    className: "form-control rounded-0 sending-mail",
    ref: node => email = node,
    type: "email",
    placeholder: "Enter Your email address..."
  }), SubscribeEmail_jsx("button", {
    className: "btn rounded-0 theme-color",
    onClick: submit
  }, "Signup")), status === "sending" && SubscribeEmail_jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    }
  }, "sending..."), status === "error" && SubscribeEmail_jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }), status === "success" && SubscribeEmail_jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }));
};

const SubscribeEmail = ({
  mailchimpUrl,
  alertColor,
  btnColorClass
}) => {
  return SubscribeEmail_jsx("div", null, SubscribeEmail_jsx(external_react_mailchimp_subscribe_default.a, {
    url: mailchimpUrl,
    render: ({
      subscribe,
      status,
      message
    }) => SubscribeEmail_jsx(CustomForm, {
      status: status,
      message: message,
      onValidated: formData => subscribe(formData),
      alertColor: alertColor,
      btnColorClass: btnColorClass
    })
  }));
};

/* harmony default export */ var Newsletter_SubscribeEmail = (SubscribeEmail);
// CONCATENATED MODULE: ./src/components/Newsletter/SubscribeEmailTwo.js

var SubscribeEmailTwo_jsx = external_react_default.a.createElement;


const SubscribeEmailTwo_CustomForm = ({
  status,
  message,
  onValidated,
  alertColor,
  btnColorClass
}) => {
  let email;

  const submit = () => {
    email && email.value.indexOf("@") > -1 && onValidated({
      EMAIL: email.value
    });
    let emailInput = document.getElementById("mc-form-email");
    emailInput.value = "";
  };

  return SubscribeEmailTwo_jsx("div", {
    className: "newsletter-form-wrapper"
  }, SubscribeEmailTwo_jsx("div", {
    className: "newsletter-form newsletter-form--rounded-input position-relative"
  }, SubscribeEmailTwo_jsx("input", {
    id: "mc-form-email",
    className: "form-control",
    ref: node => email = node,
    type: "email",
    placeholder: "Your email address"
  }), SubscribeEmailTwo_jsx("button", {
    className: `btn btn-send ${btnColorClass ? btnColorClass : "btn-dark"}`,
    onClick: submit
  }, SubscribeEmailTwo_jsx("i", {
    className: "icon-envelope-letter"
  }))), status === "sending" && SubscribeEmailTwo_jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    }
  }, "sending..."), status === "error" && SubscribeEmailTwo_jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }), status === "success" && SubscribeEmailTwo_jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }));
};

const SubscribeEmailTwo = ({
  mailchimpUrl,
  alertColor,
  btnColorClass
}) => {
  return SubscribeEmailTwo_jsx("div", null, SubscribeEmailTwo_jsx(external_react_mailchimp_subscribe_default.a, {
    url: mailchimpUrl,
    render: ({
      subscribe,
      status,
      message
    }) => SubscribeEmailTwo_jsx(SubscribeEmailTwo_CustomForm, {
      status: status,
      message: message,
      onValidated: formData => subscribe(formData),
      alertColor: alertColor,
      btnColorClass: btnColorClass
    })
  }));
};

/* harmony default export */ var Newsletter_SubscribeEmailTwo = (SubscribeEmailTwo);
// CONCATENATED MODULE: ./src/components/Newsletter/SubscribeEmailThree.js

var SubscribeEmailThree_jsx = external_react_default.a.createElement;


const SubscribeEmailThree_CustomForm = ({
  status,
  message,
  onValidated,
  alertColor,
  btnColorClass
}) => {
  let email;

  const submit = () => {
    email && email.value.indexOf("@") > -1 && onValidated({
      EMAIL: email.value
    });
    let emailInput = document.getElementById("mc-form-email");
    emailInput.value = "";
  };

  return SubscribeEmailThree_jsx("div", {
    className: "newsletter-form-wrapper"
  }, SubscribeEmailThree_jsx("div", {
    className: "newsletter-form position-relative"
  }, SubscribeEmailThree_jsx("input", {
    id: "mc-form-email",
    className: "form-control",
    ref: node => email = node,
    type: "email",
    placeholder: "Your email address"
  }), SubscribeEmailThree_jsx("button", {
    className: `btn btn-send2 ${btnColorClass ? btnColorClass : "btn-dark"}`,
    onClick: submit
  }, SubscribeEmailThree_jsx("i", {
    className: "icon-envelope-letter"
  }))), status === "sending" && SubscribeEmailThree_jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    }
  }, "sending..."), status === "error" && SubscribeEmailThree_jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }), status === "success" && SubscribeEmailThree_jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }));
};

const SubscribeEmailThree = ({
  mailchimpUrl,
  alertColor,
  btnColorClass
}) => {
  return SubscribeEmailThree_jsx("div", null, SubscribeEmailThree_jsx(external_react_mailchimp_subscribe_default.a, {
    url: mailchimpUrl,
    render: ({
      subscribe,
      status,
      message
    }) => SubscribeEmailThree_jsx(SubscribeEmailThree_CustomForm, {
      status: status,
      message: message,
      onValidated: formData => subscribe(formData),
      alertColor: alertColor,
      btnColorClass: btnColorClass
    })
  }));
};

/* harmony default export */ var Newsletter_SubscribeEmailThree = (SubscribeEmailThree);
// CONCATENATED MODULE: ./src/components/Newsletter/SubscribeEmailFour.js

var SubscribeEmailFour_jsx = external_react_default.a.createElement;


const SubscribeEmailFour_CustomForm = ({
  status,
  message,
  onValidated,
  alertColor,
  btnColorClass,
  customLayoutClass
}) => {
  let email;

  const submit = () => {
    email && email.value.indexOf("@") > -1 && onValidated({
      EMAIL: email.value
    });
    let emailInput = document.getElementById("mc-form-email");
    emailInput.value = "";
  };

  return SubscribeEmailFour_jsx("div", {
    className: "newsletter-form-wrapper"
  }, SubscribeEmailFour_jsx("div", {
    className: `newsletter-form position-relative rounded-input ${customLayoutClass ? customLayoutClass : ""}`
  }, SubscribeEmailFour_jsx("input", {
    id: "mc-form-email",
    className: "form-control",
    ref: node => email = node,
    type: "email",
    placeholder: "Your email address"
  }), SubscribeEmailFour_jsx("button", {
    className: `btn ${btnColorClass ? btnColorClass : "btn-dark"}`,
    onClick: submit
  }, "Subscribe")), status === "sending" && SubscribeEmailFour_jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    }
  }, "sending..."), status === "error" && SubscribeEmailFour_jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }), status === "success" && SubscribeEmailFour_jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }));
};

const SubscribeEmailFour = ({
  mailchimpUrl,
  alertColor,
  btnColorClass,
  customLayoutClass
}) => {
  return SubscribeEmailFour_jsx("div", null, SubscribeEmailFour_jsx(external_react_mailchimp_subscribe_default.a, {
    url: mailchimpUrl,
    render: ({
      subscribe,
      status,
      message
    }) => SubscribeEmailFour_jsx(SubscribeEmailFour_CustomForm, {
      status: status,
      message: message,
      onValidated: formData => subscribe(formData),
      alertColor: alertColor,
      btnColorClass: btnColorClass,
      customLayoutClass: customLayoutClass
    })
  }));
};

/* harmony default export */ var Newsletter_SubscribeEmailFour = (SubscribeEmailFour);
// CONCATENATED MODULE: ./src/components/Newsletter/index.js





// CONCATENATED MODULE: ./src/components/Footer/FooterOne.js

var FooterOne_jsx = external_react_default.a.createElement;







const FooterOne = ({
  productData
}) => {
  const {
    productMenu,
    roomMenu
  } = productData;
  const {
    0: scroll,
    1: setScroll
  } = Object(external_react_["useState"])(0);
  const {
    0: top,
    1: setTop
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    external_react_scroll_["animateScroll"].scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return FooterOne_jsx(external_react_["Fragment"], null, FooterOne_jsx("div", {
    className: "bg--default space-pt--70 space-pb--70"
  }, FooterOne_jsx(external_react_bootstrap_["Container"], null, FooterOne_jsx(external_react_bootstrap_["Row"], {
    className: "align-items-center"
  }, FooterOne_jsx(external_react_bootstrap_["Col"], {
    md: 4
  }, FooterOne_jsx("img", {
    className: "sub-icon",
    src: "/assets/images/subscribe_icon.png",
    alt: "subscribe"
  })), FooterOne_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, FooterOne_jsx("h3", {
    className: "newsletter-title mb-md-0 theme-color-2 space-pb--20"
  }, "Join the Koala Club"), FooterOne_jsx("p", {
    className: "sub-text"
  }, "Be the first to know about sales, furniture care tips, competitions, new arrivals and member benefits."), FooterOne_jsx(Newsletter_SubscribeEmail, {
    mailchimpUrl: "https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",
    alertColor: "#8CB511"
  }))))), FooterOne_jsx("footer", {
    className: "footer-dark"
  }, FooterOne_jsx("div", {
    className: "footer-top"
  }, FooterOne_jsx(external_react_bootstrap_["Container"], null, FooterOne_jsx(external_react_bootstrap_["Row"], null, FooterOne_jsx(external_react_bootstrap_["Col"], {
    lg: 3,
    md: 6,
    sm: 12
  }, FooterOne_jsx("div", {
    className: "widget"
  }, FooterOne_jsx("h6", {
    className: "widget-title"
  }, "ABOUT KOALA"), FooterOne_jsx("p", null, "+44(0)845 862 8060"), FooterOne_jsx("p", null, "hello@koalainteriors.co.uk"), FooterOne_jsx("h6", null, "Koala Interiors Ltd."), FooterOne_jsx("p", null, "St George's Works Coronation Road, Cressex Business Park, High Wyconbe, United Kingdom, HP12 3GG")), FooterOne_jsx("div", {
    className: "widget"
  }, FooterOne_jsx("ul", {
    className: "social-icons"
  }, FooterOne_jsx("li", null, FooterOne_jsx("a", {
    href: "#"
  }, FooterOne_jsx(io_["IoLogoFacebook"], null))), FooterOne_jsx("li", null, FooterOne_jsx("a", {
    href: "#"
  }, FooterOne_jsx(io_["IoLogoTwitter"], null))), FooterOne_jsx("li", null, FooterOne_jsx("a", {
    href: "#"
  }, FooterOne_jsx(io_["IoLogoGoogleplus"], null))), FooterOne_jsx("li", null, FooterOne_jsx("a", {
    href: "#"
  }, FooterOne_jsx(io_["IoLogoYoutube"], null))), FooterOne_jsx("li", null, FooterOne_jsx("a", {
    href: "#"
  }, FooterOne_jsx(io_["IoLogoInstagram"], null)))))), FooterOne_jsx(external_react_bootstrap_["Col"], {
    lg: 2,
    md: 3,
    sm: 6
  }, FooterOne_jsx("div", {
    className: "widget"
  }, FooterOne_jsx("h6", {
    className: "widget-title"
  }, "BY ROOM"), FooterOne_jsx("ul", {
    className: "widget-links"
  }, roomMenu && roomMenu.length > 0 && roomMenu.map((data, key) => FooterOne_jsx("li", {
    key: key
  }, FooterOne_jsx(link_default.a, {
    href: `/shop/category/${data.id}`
  }, FooterOne_jsx("a", null, data.name))))))), FooterOne_jsx(external_react_bootstrap_["Col"], {
    lg: 2,
    md: 3,
    sm: 6
  }, FooterOne_jsx("div", {
    className: "widget"
  }, FooterOne_jsx("h6", {
    className: "widget-title"
  }, "BY PRODUCT"), FooterOne_jsx("ul", {
    className: "widget-links"
  }, productMenu && productMenu.length > 0 && productMenu.map((data, key) => FooterOne_jsx("li", {
    key: key
  }, FooterOne_jsx(link_default.a, {
    href: `/shop/category/${data.id}`
  }, FooterOne_jsx("a", null, data.name))))))), FooterOne_jsx(external_react_bootstrap_["Col"], {
    lg: 2,
    md: 6,
    sm: 6
  }, FooterOne_jsx("div", {
    className: "widget"
  }, FooterOne_jsx("h6", {
    className: "widget-title"
  }, "BY COLLECTION"), FooterOne_jsx("ul", {
    className: "widget-links"
  })))))), FooterOne_jsx("div", {
    className: "bottom-footer border-top--grey"
  }, FooterOne_jsx(external_react_bootstrap_["Container"], null, FooterOne_jsx(external_react_bootstrap_["Row"], null, FooterOne_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, FooterOne_jsx("p", {
    className: "mb-3 mb-md-0 text-center text-md-left"
  }, "Copyright \xA9 ", new Date().getFullYear() + " ", FooterOne_jsx("a", {
    href: "https://www.koalainteriors.co.uk"
  }, "Koala Interiors Limited."))), FooterOne_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, FooterOne_jsx("p", {
    className: "mb-3 mb-md-0 text-center text-md-right"
  }, "Powered by Atula Technology Ltd."))))), FooterOne_jsx("button", {
    className: `scroll-top ${scroll > top ? "show" : ""}`,
    onClick: () => scrollToTop()
  }, FooterOne_jsx(io_["IoIosArrowUp"], null))));
};

/* harmony default export */ var Footer_FooterOne = (FooterOne);
// CONCATENATED MODULE: ./src/components/Footer/SubFooter.js

var SubFooter_jsx = external_react_default.a.createElement;







const SubFooter_FooterOne = ({
  productData
}) => {
  const {
    productMenu,
    roomMenu
  } = productData;
  const {
    0: scroll,
    1: setScroll
  } = Object(external_react_["useState"])(0);
  const {
    0: top,
    1: setTop
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    external_react_scroll_["animateScroll"].scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return SubFooter_jsx(external_react_["Fragment"], null, SubFooter_jsx("footer", {
    className: "footer-dark"
  }, SubFooter_jsx("div", {
    className: "footer-top"
  }, SubFooter_jsx(external_react_bootstrap_["Container"], null, SubFooter_jsx(external_react_bootstrap_["Row"], null, SubFooter_jsx(external_react_bootstrap_["Col"], {
    lg: 3,
    md: 6,
    sm: 12
  }, SubFooter_jsx("div", {
    className: "widget"
  }, SubFooter_jsx("div", {
    className: "footer-logo"
  }, SubFooter_jsx(link_default.a, {
    href: "/"
  }, SubFooter_jsx("a", null, SubFooter_jsx("img", {
    src: "/assets/images/logo_footer.png",
    alt: "logo"
  })))), SubFooter_jsx("p", null, "+44(0)845 862 8060"), SubFooter_jsx("p", null, "sales@koalainteriors.co.uk"), SubFooter_jsx("p", null, "customercare@koalainteriors.co.uk"), SubFooter_jsx("h6", null, "Koala Interiors Ltd."), SubFooter_jsx("p", null, "ST GEORGE'S WORKS CORONATION ROAD, CRESSEX BUSINESS PARK, HIGH WYCOMBE, UNITED KINGDOM, HP12 3GG")), SubFooter_jsx("div", {
    className: "widget"
  }, SubFooter_jsx("ul", {
    className: "social-icons"
  }, SubFooter_jsx("li", null, SubFooter_jsx("a", {
    href: "#"
  }, SubFooter_jsx(io_["IoLogoFacebook"], null))), SubFooter_jsx("li", null, SubFooter_jsx("a", {
    href: "#"
  }, SubFooter_jsx(io_["IoLogoTwitter"], null))), SubFooter_jsx("li", null, SubFooter_jsx("a", {
    href: "#"
  }, SubFooter_jsx(io_["IoLogoGoogleplus"], null))), SubFooter_jsx("li", null, SubFooter_jsx("a", {
    href: "#"
  }, SubFooter_jsx(io_["IoLogoYoutube"], null))), SubFooter_jsx("li", null, SubFooter_jsx("a", {
    href: "#"
  }, SubFooter_jsx(io_["IoLogoInstagram"], null)))))), SubFooter_jsx(external_react_bootstrap_["Col"], {
    lg: 2,
    md: 3,
    sm: 6
  }, SubFooter_jsx("div", {
    className: "widget"
  }, SubFooter_jsx("h6", {
    className: "widget-title"
  }, "BY ROOM"), SubFooter_jsx("ul", {
    className: "widget-links"
  }, roomMenu && roomMenu.length > 0 && productMenu.map((data, key) => SubFooter_jsx("li", {
    key: key
  }, SubFooter_jsx(link_default.a, {
    href: `/shop/category/${data.id}`
  }, SubFooter_jsx("a", null, data.name))))))), SubFooter_jsx(external_react_bootstrap_["Col"], {
    lg: 2,
    md: 3,
    sm: 6
  }, SubFooter_jsx("div", {
    className: "widget"
  }, SubFooter_jsx("h6", {
    className: "widget-title"
  }, "BY PRODUCT"), SubFooter_jsx("ul", {
    className: "widget-links"
  }, productMenu && productMenu.length > 0 && productMenu.map((data, key) => SubFooter_jsx("li", null, SubFooter_jsx(link_default.a, {
    href: `/shop/category/${data.id}`
  }, SubFooter_jsx("a", null, data.name))))))), SubFooter_jsx(external_react_bootstrap_["Col"], {
    lg: 2,
    md: 6,
    sm: 6
  }, SubFooter_jsx("div", {
    className: "widget"
  }, SubFooter_jsx("h6", {
    className: "widget-title"
  }, "BY COLLECTION"), SubFooter_jsx("ul", {
    className: "widget-links"
  }))), SubFooter_jsx(external_react_bootstrap_["Col"], {
    lg: 3,
    md: 4,
    sm: 6
  }, SubFooter_jsx("div", {
    className: "widget"
  }, SubFooter_jsx("h6", {
    className: "widget-title"
  }, "ABOUT KOALA"), SubFooter_jsx("ul", {
    className: "contact-info contact-info-light"
  }, SubFooter_jsx("li", null, SubFooter_jsx(io_["IoIosPin"], null), SubFooter_jsx("p", null, "123 Street, Old Trafford, New South London , UK")), SubFooter_jsx("li", null, SubFooter_jsx(io_["IoIosMailOpen"], null), SubFooter_jsx("a", {
    href: "mailto:info@sitename.com"
  }, SubFooter_jsx("p", null, "info@sitename.com"))), SubFooter_jsx("li", null, SubFooter_jsx(io_["IoIosPhonePortrait"], null), SubFooter_jsx("p", null, "+ 457 789 789 65")))))))), SubFooter_jsx("div", {
    className: "bottom-footer border-top--grey"
  }, SubFooter_jsx(external_react_bootstrap_["Container"], null, SubFooter_jsx(external_react_bootstrap_["Row"], null, SubFooter_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, SubFooter_jsx("p", {
    className: "mb-3 mb-md-0 text-center text-md-left"
  }, "Copyright \xA9 ", new Date().getFullYear() + " ", SubFooter_jsx("a", {
    href: "https://www.koalainteriors.co.uk"
  }, "Koala Interiors Limited."))), SubFooter_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, SubFooter_jsx("p", {
    className: "mb-3 mb-md-0 text-center text-md-right"
  }, "Powered by Atula Technology Ltd."))))), SubFooter_jsx("button", {
    className: `scroll-top ${scroll > top ? "show" : ""}`,
    onClick: () => scrollToTop()
  }, SubFooter_jsx(io_["IoIosArrowUp"], null))));
};

/* harmony default export */ var SubFooter = (SubFooter_FooterOne);
// CONCATENATED MODULE: ./src/components/Footer/index.js



// CONCATENATED MODULE: ./src/layouts/LayoutOne.js

var LayoutOne_jsx = external_react_default.a.createElement;




const LayoutOne = ({
  children,
  navPositionClass,
  productData
}) => {
  return LayoutOne_jsx(external_react_["Fragment"], null, LayoutOne_jsx(Header_HeaderOne, {
    navPositionClass: navPositionClass,
    productData: productData
  }), children, LayoutOne_jsx(Footer_FooterOne, {
    productData: productData
  }));
};

/* harmony default export */ var layouts_LayoutOne = (LayoutOne);
// CONCATENATED MODULE: ./src/layouts/SubLayout.js

var SubLayout_jsx = external_react_default.a.createElement;





const SubLayout = async (productData, {
  children,
  navPositionClass
}) => {
  var {
    0: productMenu,
    1: setProductMenu
  } = Object(external_react_["useState"])([]);
  var {
    0: roomMenu,
    1: setRoomMenu
  } = Object(external_react_["useState"])([]); // useEffect(()=>{
  //   ProductCategoryFetchCalls(17).then(
  //     async (data) => {
  //       await setProductMenu(data)
  //     },
  //     (errors) => { alert(error)}
  //   );
  //   ProductCategoryFetchCalls(76).then(
  //     async (data) => {
  //       console.log(data,"roomMenu")
  //      await setRoomMenu(data);
  //     },
  //     (errors) => { alert(error)}
  //   );
  // },[])
  // const productData = await {
  //   productMenu: productMenu,
  //   roomMenu: roomMenu
  // }

  return SubLayout_jsx(external_react_["Fragment"], null, SubLayout_jsx(Header_SubHeader, {
    navPositionClass: navPositionClass,
    productData: productData
  }), children, SubLayout_jsx(SubFooter, {
    productData: productData
  }));
};

/* harmony default export */ var layouts_SubLayout = (SubLayout);
// CONCATENATED MODULE: ./src/layouts/index.js




/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eSM8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Testimonial_TestimonialOne; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: external "react-id-swiper"
var external_react_id_swiper_ = __webpack_require__("+/Rj");
var external_react_id_swiper_default = /*#__PURE__*/__webpack_require__.n(external_react_id_swiper_);

// CONCATENATED MODULE: ./src/components/Testimonial/TestimonialOne.js

var __jsx = external_react_default.a.createElement;




const TestimonialOne = ({
  testimonialData
}) => {
  const params = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 100,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // }
    ContainerEl: "div",
    WrapperEl: "div",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderNextButton: () => __jsx("button", {
      className: "swiper-button-next ht-swiper-button-nav"
    }, __jsx("i", {
      className: "icon-arrow-right"
    })),
    renderPrevButton: () => __jsx("button", {
      className: "swiper-button-prev ht-swiper-button-nav"
    }, __jsx("i", {
      className: "icon-arrow-left"
    }))
  };
  return __jsx("div", {
    className: "space-pb--r100 space-pt--r100"
  }, __jsx("h2", {
    className: "text-center space-mb--25"
  }, "Customer Reviews"), __jsx("div", {
    className: "testimonial-area bg--redon space-pt--r70 space-pb--r50 space-mb--r70"
  }, __jsx(external_react_bootstrap_["Container"], null, __jsx(external_react_bootstrap_["Row"], {
    className: "justify-content-center"
  }, __jsx(external_react_bootstrap_["Col"], {
    lg: 9
  }, __jsx("div", {
    className: "product-slider-wrap"
  }, __jsx(external_react_id_swiper_default.a, params, testimonialData && testimonialData.map((data, key) => {
    return __jsx("div", {
      key: key
    }, __jsx(external_react_bootstrap_["Row"], {
      className: "justify-content-center"
    }, __jsx(external_react_bootstrap_["Col"], {
      md: 4
    }, __jsx("img", {
      src: data.image.guid,
      alt: "something"
    })), __jsx(external_react_bootstrap_["Col"], {
      md: 6
    }, __jsx("div", {
      className: "testimonial-box ",
      key: key
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h5", {
      style: {
        color: 'white'
      }
    }, data.tite_of_testimonial), __jsx("h4", null, data.review)), __jsx("div", {
      className: "testimonial-desc space-mb--25"
    }, __jsx("p", {
      style: {
        color: 'white'
      }
    }, data.customer_name))))));
  }))))))));
};

/* harmony default export */ var Testimonial_TestimonialOne = (TestimonialOne);
// CONCATENATED MODULE: ./src/components/Testimonial/index.js



/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "sjzJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/layouts/index.js + 22 modules
var layouts = __webpack_require__("aArQ");

// EXTERNAL MODULE: ./src/components/Breadcrumb/index.js + 2 modules
var Breadcrumb = __webpack_require__("2Bli");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./src/components/TextWithImage/TextWithImageOne.js

var __jsx = external_react_default.a.createElement;


const TextWithImageOne = () => {
  return __jsx("div", {
    className: "text-image-section space-pt--r100 space-pb--r100"
  }, __jsx(external_react_bootstrap_["Container"], null, __jsx(external_react_bootstrap_["Row"], {
    className: "align-items-center"
  }, __jsx(external_react_bootstrap_["Col"], {
    lg: 6
  }, __jsx("div", {
    className: "about-img scene mb-4 mb-lg-0"
  }, __jsx("img", {
    src: "/assets/images/banner/about_img.jpg",
    alt: "about_img"
  }))), __jsx(external_react_bootstrap_["Col"], {
    lg: 6
  }, __jsx("div", {
    className: "heading-s1 space-mb--20"
  }, __jsx("h2", null, "Who We are")), __jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur quibusdam enim expedita sed nesciunt incidunt accusamus adipisci officia libero laboriosam!"), __jsx("p", null, "Proin gravida nibh vel velit auctor aliquet. nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. Duis sed odio sit amet nibh vultate cursus a sit amet mauris.")))));
};

/* harmony default export */ var TextWithImage_TextWithImageOne = (TextWithImageOne);
// CONCATENATED MODULE: ./src/components/TextWithImage/index.js


// EXTERNAL MODULE: ./src/components/Testimonial/index.js + 1 modules
var Testimonial = __webpack_require__("eSM8");

// CONCATENATED MODULE: ./src/components/IconBox/IconBoxOne.js

var IconBoxOne_jsx = external_react_default.a.createElement;


const IconBoxOne = () => {
  return IconBoxOne_jsx("div", {
    className: "icon-box-area space-pb--r70"
  }, IconBoxOne_jsx(external_react_bootstrap_["Container"], null, IconBoxOne_jsx(external_react_bootstrap_["Row"], {
    className: "no-gutters"
  }, IconBoxOne_jsx(external_react_bootstrap_["Col"], {
    lg: 4
  }, IconBoxOne_jsx("div", {
    className: "icon-box icon-box--style1"
  }, IconBoxOne_jsx("div", {
    className: "icon-box__icon"
  }, IconBoxOne_jsx("i", {
    className: "flaticon-shipped"
  })), IconBoxOne_jsx("div", {
    className: "icon-box__content"
  }, IconBoxOne_jsx("h5", null, "Free Delivery"), IconBoxOne_jsx("p", null, "If you are going to use of Lorem, you need to be sure there anything")))), IconBoxOne_jsx(external_react_bootstrap_["Col"], {
    lg: 4
  }, IconBoxOne_jsx("div", {
    className: "icon-box icon-box--style1"
  }, IconBoxOne_jsx("div", {
    className: "icon-box__icon"
  }, IconBoxOne_jsx("i", {
    className: "flaticon-money-back"
  })), IconBoxOne_jsx("div", {
    className: "icon-box__content"
  }, IconBoxOne_jsx("h5", null, "30 Day Return"), IconBoxOne_jsx("p", null, "If you are going to use of Lorem, you need to be sure there anything")))), IconBoxOne_jsx(external_react_bootstrap_["Col"], {
    lg: 4
  }, IconBoxOne_jsx("div", {
    className: "icon-box icon-box--style1"
  }, IconBoxOne_jsx("div", {
    className: "icon-box__icon"
  }, IconBoxOne_jsx("i", {
    className: "flaticon-support"
  })), IconBoxOne_jsx("div", {
    className: "icon-box__content"
  }, IconBoxOne_jsx("h5", null, "27/4 Support"), IconBoxOne_jsx("p", null, "If you are going to use of Lorem, you need to be sure there anything")))))));
};

/* harmony default export */ var IconBox_IconBoxOne = (IconBoxOne);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./src/components/IconBox/IconBoxTwo.js

var IconBoxTwo_jsx = external_react_default.a.createElement;



const IconBoxTwo = () => {
  return IconBoxTwo_jsx("div", {
    className: "icon-box-area bg--blue-two space-pt--r100 space-pb--r70"
  }, IconBoxTwo_jsx(external_react_bootstrap_["Container"], null, IconBoxTwo_jsx(external_react_bootstrap_["Row"], {
    className: "justify-content-center"
  }, IconBoxTwo_jsx(external_react_bootstrap_["Col"], {
    lg: 6,
    md: 8,
    className: " space-mb--30"
  }, IconBoxTwo_jsx("div", {
    className: "heading-s1 text-center space-mb--20"
  }, IconBoxTwo_jsx("h2", null, "Why Choose Us?")), IconBoxTwo_jsx("p", {
    className: "text-center"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."))), IconBoxTwo_jsx(external_react_bootstrap_["Row"], {
    className: "justify-content-center"
  }, IconBoxTwo_jsx(external_react_bootstrap_["Col"], {
    lg: 4,
    sm: 6
  }, IconBoxTwo_jsx("div", {
    className: "icon-box icon-box--style2"
  }, IconBoxTwo_jsx("div", {
    className: "icon-box__icon"
  }, IconBoxTwo_jsx(fa_["FaPencilAlt"], null)), IconBoxTwo_jsx("div", {
    className: "icon-box__content"
  }, IconBoxTwo_jsx("h5", null, "Creative Design"), IconBoxTwo_jsx("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form")))), IconBoxTwo_jsx(external_react_bootstrap_["Col"], {
    lg: 4,
    sm: 6
  }, IconBoxTwo_jsx("div", {
    className: "icon-box icon-box--style2"
  }, IconBoxTwo_jsx("div", {
    className: "icon-box__icon"
  }, IconBoxTwo_jsx(fa_["FaLayerGroup"], null)), IconBoxTwo_jsx("div", {
    className: "icon-box__content"
  }, IconBoxTwo_jsx("h5", null, "Flexible Layouts"), IconBoxTwo_jsx("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form")))), IconBoxTwo_jsx(external_react_bootstrap_["Col"], {
    lg: 4,
    sm: 6
  }, IconBoxTwo_jsx("div", {
    className: "icon-box icon-box--style2"
  }, IconBoxTwo_jsx("div", {
    className: "icon-box__icon"
  }, IconBoxTwo_jsx(fa_["FaRegEnvelope"], null)), IconBoxTwo_jsx("div", {
    className: "icon-box__content"
  }, IconBoxTwo_jsx("h5", null, "Email Marketing"), IconBoxTwo_jsx("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form")))))));
};

/* harmony default export */ var IconBox_IconBoxTwo = (IconBoxTwo);
// CONCATENATED MODULE: ./src/components/IconBox/IconBoxThree.js

var IconBoxThree_jsx = external_react_default.a.createElement;


const IconBoxThree = () => {
  return IconBoxThree_jsx("div", {
    className: "icon-box-area space-pb--r100"
  }, IconBoxThree_jsx(external_react_bootstrap_["Container"], null, IconBoxThree_jsx(external_react_bootstrap_["Row"], {
    className: "no-gutters"
  }, IconBoxThree_jsx(external_react_bootstrap_["Col"], {
    lg: 3,
    sm: 6
  }, IconBoxThree_jsx("div", {
    className: "icon-box icon-box--style4"
  }, IconBoxThree_jsx("div", {
    className: "icon-box__icon"
  }, IconBoxThree_jsx("i", {
    className: "flaticon-shipped"
  })), IconBoxThree_jsx("div", {
    className: "icon-box__content"
  }, IconBoxThree_jsx("h6", null, "Free Delivery"), IconBoxThree_jsx("p", null, "Worldwide")))), IconBoxThree_jsx(external_react_bootstrap_["Col"], {
    lg: 3,
    sm: 6
  }, IconBoxThree_jsx("div", {
    className: "icon-box icon-box--style4"
  }, IconBoxThree_jsx("div", {
    className: "icon-box__icon"
  }, IconBoxThree_jsx("i", {
    className: "flaticon-money-back"
  })), IconBoxThree_jsx("div", {
    className: "icon-box__content"
  }, IconBoxThree_jsx("h6", null, "Money Returns"), IconBoxThree_jsx("p", null, "30 Days money return")))), IconBoxThree_jsx(external_react_bootstrap_["Col"], {
    lg: 3,
    sm: 6
  }, IconBoxThree_jsx("div", {
    className: "icon-box icon-box--style4"
  }, IconBoxThree_jsx("div", {
    className: "icon-box__icon"
  }, IconBoxThree_jsx("i", {
    className: "flaticon-support"
  })), IconBoxThree_jsx("div", {
    className: "icon-box__content"
  }, IconBoxThree_jsx("h6", null, "27/4 Online Support"), IconBoxThree_jsx("p", null, "Customer Support")))), IconBoxThree_jsx(external_react_bootstrap_["Col"], {
    lg: 3,
    sm: 6
  }, IconBoxThree_jsx("div", {
    className: "icon-box icon-box--style4"
  }, IconBoxThree_jsx("div", {
    className: "icon-box__icon"
  }, IconBoxThree_jsx("i", {
    className: "flaticon-lock"
  })), IconBoxThree_jsx("div", {
    className: "icon-box__content"
  }, IconBoxThree_jsx("h6", null, "Payment Security"), IconBoxThree_jsx("p", null, "Safe Payment")))))));
};

/* harmony default export */ var IconBox_IconBoxThree = (IconBoxThree);
// CONCATENATED MODULE: ./src/components/IconBox/index.js




// EXTERNAL MODULE: ./src/data/team-member/team-member-one.json
var team_member_one = __webpack_require__("QHcI");

// EXTERNAL MODULE: ./src/data/testimonials/testimonial-one.json
var testimonial_one = __webpack_require__("thxF");

// CONCATENATED MODULE: ./src/pages/other/about-us.js

var about_us_jsx = external_react_default.a.createElement;









const AboutUs = () => {
  return about_us_jsx(layouts["b" /* SubLayout */], null, about_us_jsx(Breadcrumb["a" /* BreadcrumbOne */], {
    pageTitle: "About Us"
  }, about_us_jsx("ol", {
    className: "breadcrumb justify-content-md-end"
  }, about_us_jsx("li", {
    className: "breadcrumb-item"
  }, about_us_jsx(link_default.a, {
    href: "/"
  }, about_us_jsx("a", null, "Home"))), about_us_jsx("li", {
    className: "breadcrumb-item active"
  }, "About Us"))), about_us_jsx(TextWithImage_TextWithImageOne, null), about_us_jsx(IconBox_IconBoxTwo, null), about_us_jsx(Testimonial["a" /* TestimonialOne */], {
    testimonialData: testimonial_one
  }), about_us_jsx(IconBox_IconBoxOne, null));
};

/* harmony default export */ var about_us = __webpack_exports__["default"] = (AboutUs);

/***/ }),

/***/ "thxF":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"name\":\"Sally Ramsey\",\"designation\":\"Designer\",\"image\":\"/assets/images/users/user_img1.jpg\",\"content\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.\"},{\"id\":\"2\",\"name\":\"Lois Thompson\",\"designation\":\"Designer\",\"image\":\"/assets/images/users/user_img2.jpg\",\"content\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.\"},{\"id\":\"3\",\"name\":\"Florence Pittman\",\"designation\":\"Designer\",\"image\":\"/assets/images/users/user_img3.jpg\",\"content\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.\"},{\"id\":\"4\",\"name\":\"Anais Coulon\",\"designation\":\"Designer\",\"image\":\"/assets/images/users/user_img4.jpg\",\"content\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.\"}]");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

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

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wmHC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ api; });

// UNUSED EXPORTS: hostURL, wooBaseURL, worPressBaseURL, ppomSecret, ppomURL

// EXTERNAL MODULE: external "@woocommerce/woocommerce-rest-api"
var woocommerce_rest_api_ = __webpack_require__("57of");
var woocommerce_rest_api_default = /*#__PURE__*/__webpack_require__.n(woocommerce_rest_api_);

// CONCATENATED MODULE: ./src/configs/env.js
//Live server
const wooClientId = "ck_d8a46e33ab626051b878a0e92db75187153ae10f";
const wooSecretId = "cs_8ca02820848bf268be17b473d18ee0163e9d77e3";
// CONCATENATED MODULE: ./src/configs/Configs.js


const hostURL = "https://www.devsdrop.studio/koalainteriors/";
const wooBaseURL = hostURL + "wp-json/wc/v3/";
const worPressBaseURL = hostURL + "wp-json/wp/v2/";
const ppomSecret = "shivani_secret";
const ppomURL = hostURL + "wp-json/ppom/v1/";
const api = new woocommerce_rest_api_default.a({
  url: hostURL,
  consumerKey: wooClientId,
  consumerSecret: wooSecretId,
  version: "wc/v3"
});

/***/ }),

/***/ "x8wa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrl; });
const ApiUrl = {
  login: "login",
  ProductCategories: "products/categories",
  ProductsAll: "products",
  CategoryProducts: "products?category=",
  HomeBanner: "manage_banner",
  HomeTestimonial: "testimonial"
};

/***/ }),

/***/ "z9us":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDiscountPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductCartQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getSortedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIndividualCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getIndividualTags; });
/* unused harmony export getIndividualColors */
/* unused harmony export getProductsIndividualSizes */
/* unused harmony export getIndividualSizes */
/* unused harmony export setActiveSort */
/* unused harmony export setActiveLayout */
// get products
const getProducts = (products, category, type, limit) => {
  const finalProducts = category ? products.filter(product => product.category.filter(single => single === category)[0]) : products;

  if (type && type === "featured") {
    const featuredProducts = finalProducts.filter(single => single.featured);
    return featuredProducts.slice(0, limit ? limit : featuredProducts.length);
  }

  if (type && type === "deal") {
    const dealProducts = finalProducts.filter(single => single.dealEnd);
    return dealProducts.slice(0, limit ? limit : dealProducts.length);
  }

  if (type && type === "new") {
    const newProducts = finalProducts.filter(single => single.new);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  }

  if (type && type === "popular") {
    return finalProducts && finalProducts.sort((a, b) => {
      return b.saleCount - a.saleCount;
    }).slice(0, limit ? limit : finalProducts.length);
  }

  if (type && type === "topRated") {
    return finalProducts && finalProducts.sort((a, b) => {
      return b.rating - a.rating;
    }).slice(0, limit ? limit : finalProducts.length);
  }

  if (type && type === "sale") {
    const saleItems = finalProducts && finalProducts.filter(single => single.discount && single.discount > 0);
    return saleItems.slice(0, limit ? limit : saleItems.length);
  }

  return finalProducts && finalProducts.slice(0, limit ? limit : finalProducts.length);
}; // get product discount price

const getDiscountPrice = (price, discount) => {
  return discount && discount > 0 ? (price - discount) / price * 100 : price;
}; // get product cart quantity

const getProductCartQuantity = (cartItems, product, color, size) => {
  let productInCart = cartItems.filter(single => single.id === product.id && (single.selectedProductColor ? single.selectedProductColor === color : true) && (single.selectedProductSize ? single.selectedProductSize === size : true))[0];

  if (cartItems.length >= 1 && productInCart) {
    if (product.variation) {
      return cartItems.filter(single => single.id === product.id && single.selectedProductColor === color && single.selectedProductSize === size)[0].quantity;
    } else {
      return cartItems.filter(single => product.id === single.id)[0].quantity;
    }
  } else {
    return 0;
  }
}; //get products based on category

const getSortedProducts = (products, sortType, sortValue) => {
  if (products && sortType && sortValue) {
    if (sortType === "category") {
      return products.filter(product => product.category.filter(single => single === sortValue)[0]);
    }

    if (sortType === "tag") {
      return products.filter(product => product.tag.filter(single => single === sortValue)[0]);
    }

    if (sortType === "color") {
      return products.filter(product => product.variation && product.variation.filter(single => single.color === sortValue)[0]);
    }

    if (sortType === "size") {
      return products.filter(product => product.variation && product.variation.filter(single => single.size.filter(single => single.name === sortValue)[0])[0]);
    }

    if (sortType === "filterSort") {
      let sortProducts = [...products];

      if (sortValue === "default") {
        return sortProducts;
      }

      if (sortValue === "priceHighToLow") {
        return sortProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }

      if (sortValue === "priceLowToHigh") {
        return sortProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }

      if (sortType === "AscAlpha") {
        return sortProducts.sort((a, b) => {
          a.name - b.name;
        });
      }

      if (sortType === "DscAlpha") {
        return sortProducts.sort((a, b) => {
          return b.name - a.name;
        });
      }
    }
  }

  return products;
}; // get individual element

const getIndividualItemArray = array => {
  let individualItemArray = array.filter((v, i, self) => {
    return i === self.indexOf(v);
  });
  return individualItemArray;
}; // get individual element object


const getIndividualColorObjectArray = array => {
  let individualObjectArray = array.filter((v, i, self) => {
    return i === self.findIndex(t => t.colorName === v.colorName && t.colorCode === v.colorCode);
  });
  return individualObjectArray;
}; // get individual categories


const getIndividualCategories = products => {
  let productCategories = [];
  products && products.map(product => {
    return product.category && product.category.map(single => {
      return productCategories.push(single);
    });
  });
  var individualProductCategories = [];
  var obj = {};
  var newArr = [];

  function countItems(productCategories, val) {
    var count = 0,
        i;

    while ((i = productCategories.indexOf(val, i)) != -1) {
      ++count;
      ++i;
    }

    return count;
  }

  productCategories.forEach(item => {
    let count = countItems(productCategories, item);
    var objValues = Object.values(obj);
    newArr.push(objValues[0]);
    if (newArr.indexOf(item) !== -1) return;
    obj = {
      name: item,
      count: count
    };
    individualProductCategories.push(obj);
  });
  return individualProductCategories;
}; // get individual tags

const getIndividualTags = products => {
  let productTags = [];
  products && products.map(product => {
    return product.tag && product.tag.map(single => {
      return productTags.push(single);
    });
  });
  const individualProductTags = getIndividualItemArray(productTags);
  return individualProductTags;
}; // get individual colors

const getIndividualColors = products => {
  let productColors = [];
  products && products.map(product => {
    return product.variation && product.variation.map(single => {
      return productColors.push({
        colorName: single.color,
        colorCode: single.colorCode
      });
    });
  });
  const individualProductColors = getIndividualColorObjectArray(productColors);
  return individualProductColors;
}; // get individual sizes

const getProductsIndividualSizes = products => {
  let productSizes = [];
  products && products.map(product => {
    return product.variation && product.variation.map(single => {
      return single.size.map(single => {
        return productSizes.push(single.name);
      });
    });
  });
  const individualProductSizes = getIndividualItemArray(productSizes);
  return individualProductSizes;
}; // get product individual sizes

const getIndividualSizes = product => {
  let productSizes = [];
  product.variation && product.variation.map(singleVariation => {
    return singleVariation.size && singleVariation.size.map(singleSize => {
      return productSizes.push(singleSize.name);
    });
  });
  const individualSizes = getIndividualItemArray(productSizes);
  return individualSizes;
};
const setActiveSort = e => {
  const filterButtons = document.querySelectorAll(".widget__categories button, .widget__sizes button, .widget__colors button, .widget__tags button");
  filterButtons.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};
const setActiveLayout = e => {
  const gridSwitchBtn = document.querySelectorAll(".products-view button");
  gridSwitchBtn.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

/***/ })

/******/ });