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
/*! exports provided: ICON, NUMBERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ICON\", function() { return ICON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NUMBERS\", function() { return NUMBERS; });\nconst ICON = 'https://dropbox.michaelgeraci.com/public/fastmail/fastmail-icon.png';\n\nconst NUMBERS = {\n  0: [\n    [0,1,1,1,0],\n    [1,0,0,0,1],\n    [1,0,0,0,1],\n    [1,0,0,0,1],\n    [1,0,0,0,1],\n    [1,0,0,0,1],\n    [0,1,1,1,0]\n  ],\n  1: [\n    [0,1,1,0,0],\n    [1,0,1,0,0],\n    [0,0,1,0,0],\n    [0,0,1,0,0],\n    [0,0,1,0,0],\n    [0,0,1,0,0],\n    [1,1,1,1,1]\n  ],\n  2: [\n    [0,1,1,1,0],\n    [1,0,0,0,1],\n    [0,0,0,0,1],\n    [0,0,0,1,0],\n    [0,0,1,0,0],\n    [0,1,0,0,0],\n    [1,1,1,1,1]\n  ],\n  3: [\n    [0,1,1,1,0],\n    [1,0,0,0,1],\n    [0,0,0,0,1],\n    [0,0,1,1,0],\n    [0,0,0,0,1],\n    [1,0,0,0,1],\n    [0,1,1,1,0]\n  ],\n  4: [\n    [0,0,0,1,0],\n    [0,0,1,1,0],\n    [0,1,0,1,0],\n    [1,0,0,1,0],\n    [1,1,1,1,1],\n    [0,0,0,1,0],\n    [0,0,0,1,0]\n  ],\n  5: [\n    [1,1,1,1,1],\n    [1,0,0,0,0],\n    [1,1,1,0,0],\n    [0,0,0,1,0],\n    [0,0,0,0,1],\n    [1,0,0,0,1],\n    [0,1,1,1,0]\n  ],\n  6: [\n    [0,1,1,1,0],\n    [1,0,0,0,1],\n    [1,0,0,0,0],\n    [1,1,1,1,0],\n    [1,0,0,0,1],\n    [1,0,0,0,1],\n    [0,1,1,1,0]\n  ],\n  7: [\n    [1,1,1,1,1],\n    [0,0,0,0,1],\n    [0,0,0,0,1],\n    [0,0,0,1,0],\n    [0,0,0,1,0],\n    [0,0,1,0,0],\n    [0,0,1,0,0]\n  ],\n  8: [\n    [0,1,1,1,0],\n    [1,0,0,0,1],\n    [1,0,0,0,1],\n    [0,1,1,1,0],\n    [1,0,0,0,1],\n    [1,0,0,0,1],\n    [0,1,1,1,0]\n  ],\n  9: [\n    [0,1,1,1,0],\n    [1,0,0,0,1],\n    [1,0,0,0,1],\n    [0,1,1,1,1],\n    [0,0,0,0,1],\n    [1,0,0,0,1],\n    [0,1,1,1,0]\n  ],\n  i: [\n    [0,0,0,0,0],\n    [0,0,1,0,0],\n    [0,0,1,0,0],\n    [0,0,1,0,0],\n    [0,0,1,0,0],\n    [0,0,1,0,0],\n    [0,0,0,0,0]\n  ],\n  o: [\n    [0,0,0,0,0],\n    [0,0,1,0,0],\n    [0,1,0,1,0],\n    [0,1,0,1,0],\n    [0,1,0,1,0],\n    [0,0,1,0,0],\n    [0,0,0,0,0]\n  ],\n  '+': [\n    [0,0,0,0,0],\n    [0,0,0,0,0],\n    [0,0,1,0,0],\n    [0,1,1,1,0],\n    [0,0,1,0,0],\n    [0,0,0,0,0],\n    [0,0,0,0,0]\n  ]\n};\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* global document, Image */\n\n\n\nconst FastmailFaviconCount = {\n  init() {\n    this.head = document.getElementsByTagName('head')[0];\n    this.timer = setInterval(() => {\n      this.poll();\n    }, 1000);\n    this.poll();\n\n    return true;\n  },\n\n  poll() {\n    if (this.getUnreadCount() >= 0) {\n      this.getUnreadCountIcon((icon) => {\n        this.setIcon(icon);\n      });\n    } else {\n      this.getIcon((icon) => {\n        this.setIcon(icon);\n      });\n    }\n  },\n\n  getUnreadCount() {\n    const folders = document.querySelectorAll('.v-FolderSource');\n    let res = 0;\n    const mailboxesToIgnore = ['Drafts', 'Trash'];\n\n    folders.forEach((folder, i) => {\n      const name = folder.querySelector('.v-FolderSource-name').innerHTML;\n      const count = parseInt(\n        folder.querySelector('.v-FolderSource-badge').innerHTML, 10,\n      ) || 0;\n\n      if (mailboxesToIgnore.indexOf(name) < 0) {\n        res += count;\n      }\n    });\n\n    return res;\n  },\n\n  drawUnreadCount(unread, callback) {\n    if (!this.textedCanvas) {\n      this.textedCanvas = [];\n    }\n\n    if (!this.textedCanvas[unread]) {\n      this.getUnreadCanvas((iconCanvas) => {\n        const textedCanvas = document.createElement('canvas');\n        textedCanvas.height = textedCanvas.width = iconCanvas.width;\n        const ctx = textedCanvas.getContext('2d');\n        ctx.drawImage(iconCanvas, 0, 0);\n\n        ctx.strokeStyle = 'rgba(255,255,255,0.5)';\n        ctx.fillStyle = 'rgba(255,255,255,0.7)';\n        ctx.fillStyle = '#000';\n\n        // how many digits the number of unread items is\n        const digits = String(unread).length;\n\n        // if greater than 99, set to '100+'\n        if (digits > 2) {\n          unread = 'ioo+';\n        }\n\n        let bgWidth = 0;\n        const padding = digits > 2 ? -1 : 1; // padding between digits\n        const topMargin = 7; // canvas height from icon top\n\n        // set the bg width\n        if (digits > 2) {\n          bgWidth = 14;\n        } else {\n          for (var index = 0; index < digits; index++) {\n            bgWidth += _constants__WEBPACK_IMPORTED_MODULE_0__[\"NUMBERS\"][String(unread)[index]][0].length;\n\n            if (index < digits - 1) {\n              bgWidth += padding;\n            }\n          }\n\n          bgWidth -= 1;\n        }\n\n        let digit;\n        let digitsWidth = bgWidth;\n\n        // stroke\n        for (var index = 0; index < digits; index++) {\n          digit = String(unread)[index];\n\n          if (_constants__WEBPACK_IMPORTED_MODULE_0__[\"NUMBERS\"][digit]) {\n            var map = _constants__WEBPACK_IMPORTED_MODULE_0__[\"NUMBERS\"][digit];\n            var height = map.length;\n            var width = map[0].length;\n\n            for (var y = 0; y < height; y++) {\n              for (var x = 0; x < width; x++) {\n                if (map[y][x]) {\n                  ctx.strokeRect(12 - digitsWidth + x, y + topMargin + 0, 3, 3);\n                }\n              }\n            }\n\n            digitsWidth -= width + padding;\n          }\n        }\n\n        // fill\n        digitsWidth = bgWidth;\n\n        for (var index = 0; index < digits; index++) {\n          digit = String(unread)[index];\n\n          if (_constants__WEBPACK_IMPORTED_MODULE_0__[\"NUMBERS\"][digit]) {\n            var map = _constants__WEBPACK_IMPORTED_MODULE_0__[\"NUMBERS\"][digit];\n            var height = map.length;\n            var width = map[0].length;\n\n            for (var y = 0; y < height; y++) {\n              for (var x = 0; x < width; x++) {\n                if (map[y][x]) {\n                  ctx.fillRect(13 - digitsWidth + x, y + topMargin + 1, 1, 1);\n                }\n              }\n            }\n\n            digitsWidth -= width + padding;\n          }\n        }\n\n        this.textedCanvas[unread] = textedCanvas;\n\n        callback(this.textedCanvas[unread]);\n      });\n    }\n\n    if (this.textedCanvas[unread]) {\n      callback(this.textedCanvas[unread]);\n    }\n  },\n\n  getIcon(callback) {\n    this.getUnreadCanvas((canvas) => {\n      callback(canvas.toDataURL('image/png'));\n    });\n  },\n\n  getUnreadCanvas(callback) {\n    if (!this.unreadCanvas) {\n      this.unreadCanvas = document.createElement('canvas');\n      this.unreadCanvas.height = this.unreadCanvas.width = 16;\n\n      const ctx = this.unreadCanvas.getContext('2d');\n      const img = new Image();\n\n      // allow cross-origin access for the image (since it's being hosted on\n      // michaelgeraci.com, but displaying on fastmail.com\n      img.crossOrigin = 'anonymous';\n\n      img.addEventListener('load', () => {\n        ctx.drawImage(img, 0, 0);\n        callback(this.unreadCanvas);\n      }, true);\n\n      img.src = _constants__WEBPACK_IMPORTED_MODULE_0__[\"ICON\"];\n    } else {\n      callback(this.unreadCanvas);\n    }\n  },\n\n  getUnreadCountIcon(callback) {\n    const unread = this.getUnreadCount();\n\n    this.drawUnreadCount(unread, (icon) => {\n      callback(icon.toDataURL('image/png'));\n    });\n  },\n\n  setIcon(icon) {\n    const links = this.head.getElementsByTagName('link');\n\n    // remove the old icon\n    for (let i = 0; i < links.length; i++) {\n      const link = links[i];\n\n      if (\n        (link.rel === 'shortcut icon' || link.rel === 'icon')\n        && link.href !== icon\n      ) {\n        this.head.removeChild(link);\n      } else if (link.href === icon) {\n        return;\n      }\n    }\n\n    const newIcon = document.createElement('link');\n    newIcon.type = 'image/png';\n    newIcon.rel = 'shortcut icon';\n    newIcon.href = icon;\n    this.head.appendChild(newIcon);\n\n    // Chrome hack for updating the favicon\n    const shim = document.createElement('iframe');\n    shim.width = shim.height = 0;\n    document.body.appendChild(shim);\n    shim.src = 'icon';\n    document.body.removeChild(shim);\n  },\n};\n\n// run the initiliazer with a self-executing function\n(() => {\n  // delay initial action for fastmail to initialize\n  setTimeout(() => {\n    FastmailFaviconCount.init();\n  }, 500);\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });