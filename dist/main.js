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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: FASTMAIL_FOLDER, FASTMAIL_FOLDER_NAME, FASTMAIL_BADGE, FALLBACK_ICON, NUMBERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FASTMAIL_FOLDER\", function() { return FASTMAIL_FOLDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FASTMAIL_FOLDER_NAME\", function() { return FASTMAIL_FOLDER_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FASTMAIL_BADGE\", function() { return FASTMAIL_BADGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FALLBACK_ICON\", function() { return FALLBACK_ICON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NUMBERS\", function() { return NUMBERS; });\nconst FASTMAIL_FOLDER = '.v-MailboxSource';\nconst FASTMAIL_FOLDER_NAME = '.app-source-name';\nconst FASTMAIL_BADGE = '.v-MailboxSource-badge';\n\nconst FALLBACK_ICON = 'https://dropbox.michaelgeraci.com/public/fastmail/fastmail-icon.png';\n\nconst NUMBERS = {\n  0: [\n    [0, 1, 1, 1, 0],\n    [1, 0, 0, 0, 1],\n    [1, 0, 0, 0, 1],\n    [1, 0, 0, 0, 1],\n    [1, 0, 0, 0, 1],\n    [1, 0, 0, 0, 1],\n    [0, 1, 1, 1, 0],\n  ],\n  1: [\n    [0, 1, 1, 0, 0],\n    [1, 0, 1, 0, 0],\n    [0, 0, 1, 0, 0],\n    [0, 0, 1, 0, 0],\n    [0, 0, 1, 0, 0],\n    [0, 0, 1, 0, 0],\n    [1, 1, 1, 1, 1],\n  ],\n  2: [\n    [0, 1, 1, 1, 0],\n    [1, 0, 0, 0, 1],\n    [0, 0, 0, 0, 1],\n    [0, 0, 0, 1, 0],\n    [0, 0, 1, 0, 0],\n    [0, 1, 0, 0, 0],\n    [1, 1, 1, 1, 1],\n  ],\n  3: [\n    [0, 1, 1, 1, 0],\n    [1, 0, 0, 0, 1],\n    [0, 0, 0, 0, 1],\n    [0, 0, 1, 1, 0],\n    [0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 1],\n    [0, 1, 1, 1, 0],\n  ],\n  4: [\n    [0, 0, 0, 1, 0],\n    [0, 0, 1, 1, 0],\n    [0, 1, 0, 1, 0],\n    [1, 0, 0, 1, 0],\n    [1, 1, 1, 1, 1],\n    [0, 0, 0, 1, 0],\n    [0, 0, 0, 1, 0],\n  ],\n  5: [\n    [1, 1, 1, 1, 1],\n    [1, 0, 0, 0, 0],\n    [1, 1, 1, 0, 0],\n    [0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 1],\n    [0, 1, 1, 1, 0],\n  ],\n  6: [\n    [0, 1, 1, 1, 0],\n    [1, 0, 0, 0, 1],\n    [1, 0, 0, 0, 0],\n    [1, 1, 1, 1, 0],\n    [1, 0, 0, 0, 1],\n    [1, 0, 0, 0, 1],\n    [0, 1, 1, 1, 0],\n  ],\n  7: [\n    [1, 1, 1, 1, 1],\n    [0, 0, 0, 0, 1],\n    [0, 0, 0, 0, 1],\n    [0, 0, 0, 1, 0],\n    [0, 0, 0, 1, 0],\n    [0, 0, 1, 0, 0],\n    [0, 0, 1, 0, 0],\n  ],\n  8: [\n    [0, 1, 1, 1, 0],\n    [1, 0, 0, 0, 1],\n    [1, 0, 0, 0, 1],\n    [0, 1, 1, 1, 0],\n    [1, 0, 0, 0, 1],\n    [1, 0, 0, 0, 1],\n    [0, 1, 1, 1, 0],\n  ],\n  9: [\n    [0, 1, 1, 1, 0],\n    [1, 0, 0, 0, 1],\n    [1, 0, 0, 0, 1],\n    [0, 1, 1, 1, 1],\n    [0, 0, 0, 0, 1],\n    [1, 0, 0, 0, 1],\n    [0, 1, 1, 1, 0],\n  ],\n  i: [\n    [0, 0, 0, 0, 0],\n    [0, 0, 0, 1, 0],\n    [0, 0, 0, 1, 0],\n    [0, 0, 0, 1, 0],\n    [0, 0, 0, 1, 0],\n    [0, 0, 0, 1, 0],\n    [0, 0, 0, 0, 0],\n  ],\n  o: [\n    [0, 0, 0, 0, 0],\n    [0, 0, 1, 0, 0],\n    [0, 1, 0, 1, 0],\n    [0, 1, 0, 1, 0],\n    [0, 1, 0, 1, 0],\n    [0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0],\n  ],\n  '+': [\n    [0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0],\n    [0, 0, 1, 0, 0],\n    [0, 1, 1, 1, 0],\n    [0, 0, 1, 0, 0],\n    [0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0],\n  ],\n};\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./range */ \"./src/range.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* global document, Image */\n\n\n\n\n\nconst FastmailFaviconCount = {\n  init() {\n    const fastmailFavicon = document.getElementById('favicon');\n    const testFallbackIcon = true;\n\n    if (fastmailFavicon && !testFallbackIcon) {\n      this.faviconImage = fastmailFavicon.getAttribute('href');\n    } else {\n      this.faviconImage = _constants__WEBPACK_IMPORTED_MODULE_1__[\"FALLBACK_ICON\"];\n    }\n\n    [this.head] = document.getElementsByTagName('head');\n    this.timer = setInterval(() => {\n      this.poll();\n    }, 1000);\n    this.poll();\n  },\n\n  poll() {\n    if (this.getUnreadCount() >= 0) {\n      this.getUnreadCountIcon((icon) => {\n        this.setIcon(icon);\n      });\n    } else {\n      this.getIcon((icon) => {\n        this.setIcon(icon);\n      });\n    }\n  },\n\n  getUnreadCount() {\n    let res = 0;\n    const folders = document.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_1__[\"FASTMAIL_FOLDER\"]);\n    const mailboxesToIgnore = ['Drafts', 'Trash'];\n\n    folders.forEach((folder) => {\n      const name = folder.querySelector(_constants__WEBPACK_IMPORTED_MODULE_1__[\"FASTMAIL_FOLDER_NAME\"]).innerHTML;\n      const count = parseInt(\n        folder.querySelector(_constants__WEBPACK_IMPORTED_MODULE_1__[\"FASTMAIL_BADGE\"]).innerHTML, 10,\n      ) || 0;\n\n      if (mailboxesToIgnore.indexOf(name) < 0) {\n        res += count;\n      }\n    });\n\n    return res;\n  },\n\n  drawUnreadCount(_unread, callback) {\n    // if greater than 99, set to '100+'\n    const unreadCount = _unread > 99 ? 'ioo+' : _unread;\n\n    // how many digits the number of unread items is\n    const digits = String(unreadCount).length;\n\n    if (!this.textedCanvas) {\n      this.textedCanvas = [];\n    }\n\n    if (!this.textedCanvas[unreadCount]) {\n      this.getUnreadCanvas((iconCanvas) => {\n        const textedCanvas = document.createElement('canvas');\n        textedCanvas.height = iconCanvas.width;\n        textedCanvas.width = iconCanvas.width;\n        const ctx = textedCanvas.getContext('2d');\n        ctx.drawImage(iconCanvas, 0, 0);\n\n        ctx.strokeStyle = 'rgba(255,255,255,0.5)';\n        ctx.fillStyle = '#000';\n\n        const letterSpacing = digits > 2 ? -1 : 1; // padding between digits\n        const letterSize = 1;\n\n        // we want the number to be in the lower-right corner, but canvas\n        // takes coordinates from the upper-left. so, we calculate the\n        // upper-left offset with the size of the numbers.\n        const padding = iconCanvas.width * 0.0625; // canvas edge to the number, as a percentage\n        const topMargin = iconCanvas.height - _constants__WEBPACK_IMPORTED_MODULE_1__[\"NUMBERS\"]['0'].length - padding; // canvas height from icon top\n        const numbersWidth = _constants__WEBPACK_IMPORTED_MODULE_1__[\"NUMBERS\"]['0'][0].length * digits + letterSpacing * (digits - 1);\n        let leftMargin = iconCanvas.width - numbersWidth;\n\n        if (leftMargin < 0) {\n          leftMargin = 0;\n        }\n\n        // stroke\n        this.drawNumber({\n          digits,\n          unreadCount,\n          letterSpacing,\n          fn: (x, y) => {\n            ctx.strokeRect(\n              x + leftMargin - letterSize,\n              y + topMargin - letterSize,\n              letterSize * 3,\n              letterSize * 3,\n            );\n          },\n        });\n\n        // fill\n        this.drawNumber({\n          digits,\n          unreadCount,\n          letterSpacing,\n          fn: (x, y) => {\n            ctx.fillRect(\n              x + leftMargin,\n              y + topMargin,\n              letterSize,\n              letterSize,\n            );\n          },\n        });\n\n        this.textedCanvas[unreadCount] = textedCanvas;\n\n        callback(this.textedCanvas[unreadCount]);\n      });\n    }\n\n    if (this.textedCanvas[unreadCount]) {\n      callback(this.textedCanvas[unreadCount]);\n    }\n  },\n\n  drawNumber({\n    digits,\n    unreadCount,\n    letterSpacing,\n    fn,\n  }) {\n    let digit;\n    let numberMap;\n    let numberHeight;\n    let numberWidth;\n    let xOffset = 0;\n\n    Object(_range__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, digits).forEach((_, i) => {\n      digit = String(unreadCount)[i];\n\n      if (_constants__WEBPACK_IMPORTED_MODULE_1__[\"NUMBERS\"][digit]) {\n        numberMap = _constants__WEBPACK_IMPORTED_MODULE_1__[\"NUMBERS\"][digit];\n        numberHeight = numberMap.length;\n        numberWidth = numberMap[0].length;\n        xOffset = numberWidth * i + letterSpacing * i;\n\n        Object(_range__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, numberHeight).forEach((y) => {\n          Object(_range__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, numberWidth).forEach((x) => {\n            if (numberMap[y][x]) {\n              fn(x + xOffset, y);\n            }\n          });\n        });\n      }\n    });\n  },\n\n  getIcon(callback) {\n    this.getUnreadCanvas((canvas) => {\n      callback(canvas.toDataURL('image/png'));\n    });\n  },\n\n  getUnreadCanvas(callback) {\n    if (!this.unreadCanvas) {\n      this.unreadCanvas = document.createElement('canvas');\n\n      const ctx = this.unreadCanvas.getContext('2d');\n      const img = new Image();\n\n      // allow cross-origin access for the image (since it's being hosted on\n      // michaelgeraci.com, but displaying on fastmail.com)\n      img.crossOrigin = 'anonymous';\n\n      img.addEventListener('load', () => {\n        this.unreadCanvas.width = img.width;\n        this.unreadCanvas.height = img.height;\n        ctx.drawImage(img, 0, 0);\n        callback(this.unreadCanvas);\n      }, true);\n\n      img.src = this.faviconImage;\n    } else {\n      callback(this.unreadCanvas);\n    }\n  },\n\n  getUnreadCountIcon(callback) {\n    const unread = this.getUnreadCount();\n\n    this.drawUnreadCount(unread, (icon) => {\n      callback(icon.toDataURL('image/png'));\n    });\n  },\n\n  setIcon(icon) {\n    const links = this.head.getElementsByTagName('link');\n\n    // remove the old icon\n    [].slice.call(links).forEach((link) => {\n      if (link.rel === 'shortcut icon' || link.rel === 'icon') {\n        this.head.removeChild(link);\n      }\n    });\n\n    const newIcon = document.createElement('link');\n    newIcon.type = 'image/png';\n    newIcon.rel = 'shortcut icon';\n    newIcon.href = icon;\n    this.head.appendChild(newIcon);\n\n    // Chrome hack for updating the favicon\n    const shim = document.createElement('iframe');\n    shim.width = 0;\n    shim.height = 0;\n    document.body.appendChild(shim);\n    shim.src = 'icon';\n    document.body.removeChild(shim);\n  },\n};\n\n// run the initiliazer with a self-executing function\n(() => {\n  // delay initial action for fastmail to initialize\n  setTimeout(() => {\n    FastmailFaviconCount.init();\n  }, 500);\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/range.js":
/*!**********************!*\
  !*** ./src/range.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return range; });\n/* eslint-disable */\n\nfunction range(left, right, inclusive) {\n\tconst r = [];\n\tconst ascending = left < right;\n\tconst end = !inclusive ? right : ascending ? right + 1 : right - 1;\n\tfor (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {\n\t\tr.push(i);\n\t}\n\treturn r;\n}\n\n\n//# sourceURL=webpack:///./src/range.js?");

/***/ })

/******/ });