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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css":
/*!******************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///../node_modules/normalize.css/normalize.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/roboto.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/roboto.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/fonts/Roboto-Regular.ttf */ \"./assets/fonts/Roboto-Regular.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: 'Roboto';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format ('truetype');\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/roboto.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/styles.css":
/*!******************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/styles.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!normalize.css */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./roboto.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/roboto.css\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/webpack-logo.png */ \"./assets/webpack-logo.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"body {\\n  font-family: 'Roboto', sans-serif;\\n}\\n\\n.container {\\n  padding-top: 2rem;\\n  max-width: 1000px;\\n  margin: 0 auto;\\n}\\n\\nh1 {\\n  text-align: center;\\n}\\n\\n.logo {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  height: 200px;\\n  width: 200px;\\n  margin: 0 auto;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/styles.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./assets/data.csv":
/*!*************************!*\
  !*** ./assets/data.csv ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [[\"Transaction_date\",\"Product\",\"Price\",\"Payment_Type\",\"Name\",\"City\",\"State\",\"Country\",\"Account_Created\",\"Last_Login\",\"Latitude\",\"Longitude\"],[\"1/2/09 6:17\",\"Product1\",\"1200\",\"Mastercard\",\"carolina\",\"Basildon\",\"England\",\"United Kingdom\",\"1/2/09 6:00\",\"1/2/09 6:08\",\"51.5\",\"-1.1166667\"],[\"1/2/09 4:53\",\"Product1\",\"1200\",\"Visa\",\"Betina\",\"Parkville                   \",\"MO\",\"United States\",\"1/2/09 4:42\",\"1/2/09 7:49\",\"39.195\",\"-94.68194\"],[\"1/2/09 13:08\",\"Product1\",\"1200\",\"Mastercard\",\"Federica e Andrea\",\"Astoria                     \",\"OR\",\"United States\",\"1/1/09 16:21\",\"1/3/09 12:32\",\"46.18806\",\"-123.83\"],[\"1/3/09 14:44\",\"Product1\",\"1200\",\"Visa\",\"Gouya\",\"Echuca\",\"Victoria\",\"Australia\",\"9/25/05 21:13\",\"1/3/09 14:22\",\"-36.1333333\",\"144.75\"],[\"1/4/09 12:56\",\"Product2\",\"3600\",\"Visa\",\"Gerd W \",\"Cahaba Heights              \",\"AL\",\"United States\",\"11/15/08 15:47\",\"1/4/09 12:45\",\"33.52056\",\"-86.8025\"],[\"1/4/09 13:19\",\"Product1\",\"1200\",\"Visa\",\"LAURENCE\",\"Mickleton                   \",\"NJ\",\"United States\",\"9/24/08 15:19\",\"1/4/09 13:04\",\"39.79\",\"-75.23806\"],[\"1/4/09 20:11\",\"Product1\",\"1200\",\"Mastercard\",\"Fleur\",\"Peoria                      \",\"IL\",\"United States\",\"1/3/09 9:38\",\"1/4/09 19:45\",\"40.69361\",\"-89.58889\"],[\"1/2/09 20:09\",\"Product1\",\"1200\",\"Mastercard\",\"adam\",\"Martin                      \",\"TN\",\"United States\",\"1/2/09 17:43\",\"1/4/09 20:01\",\"36.34333\",\"-88.85028\"],[\"1/4/09 13:17\",\"Product1\",\"1200\",\"Mastercard\",\"Renee Elisabeth\",\"Tel Aviv\",\"Tel Aviv\",\"Israel\",\"1/4/09 13:03\",\"1/4/09 22:10\",\"32.0666667\",\"34.7666667\"],[\"1/4/09 14:11\",\"Product1\",\"1200\",\"Visa\",\"Aidan\",\"Chatou\",\"Ile-de-France\",\"France\",\"6/3/08 4:22\",\"1/5/09 1:17\",\"48.8833333\",\"2.15\"],[\"1/5/09 2:42\",\"Product1\",\"1200\",\"Diners\",\"Stacy\",\"New York                    \",\"NY\",\"United States\",\"1/5/09 2:23\",\"1/5/09 4:59\",\"40.71417\",\"-74.00639\"],[\"1/5/09 5:39\",\"Product1\",\"1200\",\"Amex\",\"Heidi\",\"Eindhoven\",\"Noord-Brabant\",\"Netherlands\",\"1/5/09 4:55\",\"1/5/09 8:15\",\"51.45\",\"5.4666667\"],[\"1/2/09 9:16\",\"Product1\",\"1200\",\"Mastercard\",\"Sean \",\"Shavano Park                \",\"TX\",\"United States\",\"1/2/09 8:32\",\"1/5/09 9:05\",\"29.42389\",\"-98.49333\"],[\"1/5/09 10:08\",\"Product1\",\"1200\",\"Visa\",\"Georgia\",\"Eagle                       \",\"ID\",\"United States\",\"11/11/08 15:53\",\"1/5/09 10:05\",\"43.69556\",\"-116.35306\"],[\"1/2/09 14:18\",\"Product1\",\"1200\",\"Visa\",\"Richard\",\"Riverside                   \",\"NJ\",\"United States\",\"12/9/08 12:07\",\"1/5/09 11:01\",\"40.03222\",\"-74.95778\"],[\"1/4/09 1:05\",\"Product1\",\"1200\",\"Diners\",\"Leanne\",\"Julianstown\",\"Meath\",\"Ireland\",\"1/4/09 0:00\",\"1/5/09 13:36\",\"53.6772222\",\"-6.3191667\"],[\"1/5/09 11:37\",\"Product1\",\"1200\",\"Visa\",\"Janet\",\"Ottawa\",\"Ontario\",\"Canada\",\"1/5/09 9:35\",\"1/5/09 19:24\",\"45.4166667\",\"-75.7\"],[\"1/6/09 5:02\",\"Product1\",\"1200\",\"Diners\",\"barbara\",\"Hyderabad\",\"Andhra Pradesh\",\"India\",\"1/6/09 2:41\",\"1/6/09 7:52\",\"17.3833333\",\"78.4666667\"],[\"1/6/09 7:45\",\"Product2\",\"3600\",\"Visa\",\"Sabine\",\"London\",\"England\",\"United Kingdom\",\"1/6/09 7:00\",\"1/6/09 9:17\",\"51.52721\",\"0.14559\"],[\"1/2/09 7:35\",\"Product1\",\"1200\",\"Diners\",\"Hani\",\"Salt Lake City              \",\"UT\",\"United States\",\"12/30/08 5:44\",\"1/6/09 10:52\",\"40.76083\",\"-111.89028\"],[\"1/6/09 12:56\",\"Product1\",\"1200\",\"Visa\",\"Jeremy\",\"Manchester\",\"England\",\"United Kingdom\",\"1/6/09 10:58\",\"1/6/09 13:31\",\"53.5\",\"-2.2166667\"],[\"1/1/09 11:05\",\"Product1\",\"1200\",\"Diners\",\"Janis\",\"Ballynora\",\"Cork\",\"Ireland\",\"12/10/07 12:37\",\"1/7/09 1:52\",\"51.8630556\",\"-8.58\"],[\"1/5/09 4:10\",\"Product1\",\"1200\",\"Mastercard\",\"Nicola\",\"Roodepoort\",\"Gauteng\",\"South Africa\",\"1/5/09 2:33\",\"1/7/09 5:13\",\"-26.1666667\",\"27.8666667\"],[\"1/6/09 7:18\",\"Product1\",\"1200\",\"Visa\",\"asuman\",\"Chula Vista                 \",\"CA\",\"United States\",\"1/6/09 7:07\",\"1/7/09 7:08\",\"32.64\",\"-117.08333\"],[\"1/2/09 1:11\",\"Product1\",\"1200\",\"Mastercard\",\"Lena\",\"Kuopio\",\"Ita-Suomen Laani\",\"Finland\",\"12/31/08 2:48\",\"1/7/09 10:20\",\"62.9\",\"27.6833333\"],[\"1/1/09 2:24\",\"Product1\",\"1200\",\"Visa\",\"Lisa\",\"Sugar Land                  \",\"TX\",\"United States\",\"1/1/09 1:56\",\"1/7/09 10:52\",\"29.61944\",\"-95.63472\"],[\"1/7/09 8:08\",\"Product1\",\"1200\",\"Diners\",\"Bryan Kerrene\",\"New York                    \",\"NY\",\"United States\",\"1/7/09 7:39\",\"1/7/09 12:38\",\"40.71417\",\"-74.00639\"],[\"1/2/09 2:57\",\"Product1\",\"1200\",\"Visa\",\"chris\",\"London\",\"England\",\"United Kingdom\",\"1/3/08 7:23\",\"1/7/09 13:14\",\"51.52721\",\"0.14559\"],[\"1/1/09 20:21\",\"Product1\",\"1200\",\"Visa\",\"Maxine\",\"Morton                      \",\"IL\",\"United States\",\"10/24/08 6:48\",\"1/7/09 20:49\",\"40.61278\",\"-89.45917\"],[\"1/8/09 0:42\",\"Product1\",\"1200\",\"Visa\",\"Family\",\"Los Gatos                   \",\"CA\",\"United States\",\"1/8/09 0:28\",\"1/8/09 3:39\",\"37.22667\",\"-121.97361\"],[\"1/8/09 3:56\",\"Product1\",\"1200\",\"Mastercard\",\"Katherine\",\"New York                    \",\"NY\",\"United States\",\"1/8/09 3:33\",\"1/8/09 6:19\",\"40.71417\",\"-74.00639\"],[\"1/8/09 3:16\",\"Product1\",\"1200\",\"Mastercard\",\"Linda\",\"Miami                       \",\"FL\",\"United States\",\"1/8/09 3:06\",\"1/8/09 6:34\",\"25.77389\",\"-80.19389\"],[\"1/8/09 1:59\",\"Product1\",\"1200\",\"Mastercard\",\"SYLVIA\",\"Vesenaz\",\"Geneve\",\"Switzerland\",\"11/28/07 11:56\",\"1/8/09 7:20\",\"46.2333333\",\"6.2\"],[\"1/3/09 9:03\",\"Product1\",\"1200\",\"Diners\",\"Sheila\",\"Brooklyn                    \",\"NY\",\"United States\",\"1/3/09 8:47\",\"1/8/09 10:38\",\"40.65\",\"-73.95\"],[\"1/5/09 13:17\",\"Product1\",\"1200\",\"Mastercard\",\"Stephanie\",\"Badhoevedorp\",\"Noord-Holland\",\"Netherlands\",\"1/5/09 12:45\",\"1/8/09 11:45\",\"52.3333333\",\"4.7833333\"],[\"1/6/09 7:46\",\"Product1\",\"1200\",\"Amex\",\"Kelly\",\"Reston                      \",\"VA\",\"United States\",\"1/6/09 7:30\",\"1/8/09 12:40\",\"38.96861\",\"-77.34139\"],[\"1/5/09 20:00\",\"Product2\",\"3600\",\"Visa\",\"James\",\"Burpengary\",\"Queensland\",\"Australia\",\"12/10/08 19:53\",\"1/8/09 17:58\",\"-27.1666667\",\"152.95\"],[\"1/8/09 16:24\",\"Product1\",\"1200\",\"Visa\",\"jennifer\",\"Phoenix                     \",\"AZ\",\"United States\",\"1/8/09 15:57\",\"1/8/09 18:30\",\"33.44833\",\"-112.07333\"],[\"1/9/09 6:39\",\"Product1\",\"1200\",\"Mastercard\",\"Anneli\",\"Houston                     \",\"TX\",\"United States\",\"1/9/09 5:09\",\"1/9/09 7:11\",\"29.76306\",\"-95.36306\"],[\"1/6/09 22:19\",\"Product2\",\"3600\",\"Amex\",\"Ritz\",\"Pittsfield                  \",\"VT\",\"United States\",\"1/6/09 12:00\",\"1/9/09 10:05\",\"43.77222\",\"-72.81333\"],[\"1/6/09 23:00\",\"Product2\",\"3600\",\"Amex\",\"Sylvia\",\"Pittsfield                  \",\"VT\",\"United States\",\"1/6/09 12:00\",\"1/9/09 10:05\",\"43.77222\",\"-72.81333\"],[\"1/7/09 7:44\",\"Product1\",\"1200\",\"Mastercard\",\"Marie\",\"Ball Ground                 \",\"GA\",\"United States\",\"1/7/09 5:35\",\"1/9/09 10:52\",\"34.33806\",\"-84.37667\"]]\n\n//# sourceURL=webpack:///./assets/data.csv?");

/***/ }),

/***/ "./assets/data.xml":
/*!*************************!*\
  !*** ./assets/data.xml ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"email\":{\"to\":[\"Vladilen\"],\"from\":[\"Webpack\"],\"heading\":[\"Tutorial\"],\"body\":[\"Finish the record\"]}}\n\n//# sourceURL=webpack:///./assets/data.xml?");

/***/ }),

/***/ "./assets/fonts/Roboto-Regular.ttf":
/*!*****************************************!*\
  !*** ./assets/fonts/Roboto-Regular.ttf ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"11eabca2251325cfc5589c9c6fb57b46.ttf\");\n\n//# sourceURL=webpack:///./assets/fonts/Roboto-Regular.ttf?");

/***/ }),

/***/ "./assets/json.json":
/*!**************************!*\
  !*** ./assets/json.json ***!
  \**************************/
/*! exports provided: title, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"title\\\":\\\"I am JSON title\\\"}\");\n\n//# sourceURL=webpack:///./assets/json.json?");

/***/ }),

/***/ "./assets/webpack-logo.png":
/*!*********************************!*\
  !*** ./assets/webpack-logo.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c500a3801d8356a86da86a06c3d13a4d.png\");\n\n//# sourceURL=webpack:///./assets/webpack-logo.png?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/Post */ \"./models/Post.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_webpack_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/webpack-logo */ \"./assets/webpack-logo.png\");\n/* harmony import */ var _assets_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/json */ \"./assets/json.json\");\nvar _assets_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./assets/json */ \"./assets/json.json\", 1);\n/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/data.xml */ \"./assets/data.xml\");\n/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_data_xml__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/data.csv */ \"./assets/data.csv\");\n/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_data_csv__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst post = new _models_Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Webpack', _assets_webpack_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nconsole.log(post.toString());\n\nconsole.log(_assets_json__WEBPACK_IMPORTED_MODULE_3__);\nconsole.log(_assets_data_xml__WEBPACK_IMPORTED_MODULE_4___default.a);\nconsole.log(_assets_data_csv__WEBPACK_IMPORTED_MODULE_5___default.a);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\nclass Post {\n  constructor(title, image) {\n    this.title = title;\n    this.image = image;\n    this.date = new Date();\n  }\n\n  toString() {\n    return JSON.stringify({\n      title: this.title,\n      date: this.date.toJSON(),\n      image: this.image,\n    });\n  }\n\n  get uppercaseTitle() {\n    return this.toUppercase();\n  }\n}\n\n\n//# sourceURL=webpack:///./models/Post.js?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ })

/******/ });