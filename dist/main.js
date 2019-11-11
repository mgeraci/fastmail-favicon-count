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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const ICON = \"https://dropbox.michaelgeraci.com/public/fastmail/fastmail-icon.png\";\nconst NUMBERS = {\n\t0: [\n\t\t[0,1,1,1,0],\n\t\t[1,0,0,0,1],\n\t\t[1,0,0,0,1],\n\t\t[1,0,0,0,1],\n\t\t[1,0,0,0,1],\n\t\t[1,0,0,0,1],\n\t\t[0,1,1,1,0]\n\t],\n\t1: [\n\t\t[0,1,1,0,0],\n\t\t[1,0,1,0,0],\n\t\t[0,0,1,0,0],\n\t\t[0,0,1,0,0],\n\t\t[0,0,1,0,0],\n\t\t[0,0,1,0,0],\n\t\t[1,1,1,1,1]\n\t],\n\t2: [\n\t\t[0,1,1,1,0],\n\t\t[1,0,0,0,1],\n\t\t[0,0,0,0,1],\n\t\t[0,0,0,1,0],\n\t\t[0,0,1,0,0],\n\t\t[0,1,0,0,0],\n\t\t[1,1,1,1,1]\n\t],\n\t3: [\n\t\t[0,1,1,1,0],\n\t\t[1,0,0,0,1],\n\t\t[0,0,0,0,1],\n\t\t[0,0,1,1,0],\n\t\t[0,0,0,0,1],\n\t\t[1,0,0,0,1],\n\t\t[0,1,1,1,0]\n\t],\n\t4: [\n\t\t[0,0,0,1,0],\n\t\t[0,0,1,1,0],\n\t\t[0,1,0,1,0],\n\t\t[1,0,0,1,0],\n\t\t[1,1,1,1,1],\n\t\t[0,0,0,1,0],\n\t\t[0,0,0,1,0]\n\t],\n\t5: [\n\t\t[1,1,1,1,1],\n\t\t[1,0,0,0,0],\n\t\t[1,1,1,0,0],\n\t\t[0,0,0,1,0],\n\t\t[0,0,0,0,1],\n\t\t[1,0,0,0,1],\n\t\t[0,1,1,1,0]\n\t],\n\t6: [\n\t\t[0,1,1,1,0],\n\t\t[1,0,0,0,1],\n\t\t[1,0,0,0,0],\n\t\t[1,1,1,1,0],\n\t\t[1,0,0,0,1],\n\t\t[1,0,0,0,1],\n\t\t[0,1,1,1,0]\n\t],\n\t7: [\n\t\t[1,1,1,1,1],\n\t\t[0,0,0,0,1],\n\t\t[0,0,0,0,1],\n\t\t[0,0,0,1,0],\n\t\t[0,0,0,1,0],\n\t\t[0,0,1,0,0],\n\t\t[0,0,1,0,0]\n\t],\n\t8: [\n\t\t[0,1,1,1,0],\n\t\t[1,0,0,0,1],\n\t\t[1,0,0,0,1],\n\t\t[0,1,1,1,0],\n\t\t[1,0,0,0,1],\n\t\t[1,0,0,0,1],\n\t\t[0,1,1,1,0]\n\t],\n\t9: [\n\t\t[0,1,1,1,0],\n\t\t[1,0,0,0,1],\n\t\t[1,0,0,0,1],\n\t\t[0,1,1,1,1],\n\t\t[0,0,0,0,1],\n\t\t[1,0,0,0,1],\n\t\t[0,1,1,1,0]\n\t],\n\ti: [\n\t\t[0,0,0,0,0],\n\t\t[0,0,1,0,0],\n\t\t[0,0,1,0,0],\n\t\t[0,0,1,0,0],\n\t\t[0,0,1,0,0],\n\t\t[0,0,1,0,0],\n\t\t[0,0,0,0,0]\n\t],\n\to: [\n\t\t[0,0,0,0,0],\n\t\t[0,0,1,0,0],\n\t\t[0,1,0,1,0],\n\t\t[0,1,0,1,0],\n\t\t[0,1,0,1,0],\n\t\t[0,0,1,0,0],\n\t\t[0,0,0,0,0]\n\t],\n\t'+': [\n\t\t[0,0,0,0,0],\n\t\t[0,0,0,0,0],\n\t\t[0,0,1,0,0],\n\t\t[0,1,1,1,0],\n\t\t[0,0,1,0,0],\n\t\t[0,0,0,0,0],\n\t\t[0,0,0,0,0]\n\t]\n};\n\n(function FastmailFaviconCount() {\n\tvar self = this;\n\n\tthis.construct = () => {\n\t\tthis.head = document.getElementsByTagName(\"head\")[0];\n\t\tthis.timer = setInterval(this.poll, 500);\n\t\tthis.poll();\n\n\t\treturn true;\n\t};\n\n\tthis.poll = () => {\n\t\tif (self.getUnreadCount() >= 0) {\n\t\t\tself.getUnreadCountIcon(function(icon) {\n\t\t\t\tself.setIcon(icon);\n\t\t\t});\n\t\t} else {\n\t\t\tself.getIcon(function(icon) {\n\t\t\t\tself.setIcon(icon);\n\t\t\t});\n\t\t}\n\t};\n\n\tthis.getUnreadCount = () => {\n\t\tconst folders = document.querySelectorAll(\".v-FolderSource\");\n\t\tlet res = 0;\n\t\tconst mailboxesToIgnore = [\"Drafts\", \"Trash\"];\n\n\t\tfolders.forEach((folder, i) => {\n\t\t\tconst name = folder.querySelector(\".v-FolderSource-name\").innerHTML;\n\t\t\tconst count = parseInt(\n\t\t\t\tfolder.querySelector(\".v-FolderSource-badge\").innerHTML, 10\n\t\t\t) || 0;\n\n\t\t\tif (mailboxesToIgnore.indexOf(name) < 0) {\n\t\t\t\tres += count;\n\t\t\t}\n\t\t});\n\n\t\treturn res;\n\t}\n\n\tthis.drawUnreadCount = (unread, callback) => {\n\t\tif (!self.textedCanvas) {\n\t\t\tself.textedCanvas = [];\n\t\t}\n\n\t\tif (!self.textedCanvas[unread]) {\n\t\t\tself.getUnreadCanvas(function(iconCanvas) {\n\t\t\t\tconst textedCanvas = document.createElement(\"canvas\");\n\t\t\t\ttextedCanvas.height = textedCanvas.width = iconCanvas.width;\n\t\t\t\tconst ctx = textedCanvas.getContext(\"2d\");\n\t\t\t\tctx.drawImage(iconCanvas, 0, 0);\n\n\t\t\t\tctx.strokeStyle = \"rgba(255,255,255,0.5)\"\n\t\t\t\tctx.fillStyle = \"rgba(255,255,255,0.7)\";\n\t\t\t\tctx.fillStyle = \"#000\";\n\n\t\t\t\t// how many digits the number of unread items is\n\t\t\t\tconst count = String(unread).length;\n\n\t\t\t\t// if greater than 99, set to \"100+\"\n\t\t\t\tif (count > 2) {\n\t\t\t\t\tunread = \"ioo+\";\n\t\t\t\t}\n\n\t\t\t\tlet bgWidth = 0;\n\t\t\t\tconst padding = count > 2 ? -1 : 1; // padding between digits\n\t\t\t\tconst topMargin = 7; // canvas height from icon top\n\n\t\t\t\t// set the bg width\n\t\t\t\tif (count > 2) {\n\t\t\t\t\tbgWidth = 14\n\t\t\t\t} else {\n\t\t\t\t\tfor (var index = 0; index < count; index++) {\n\t\t\t\t\t\tbgWidth += NUMBERS[String(unread)[index]][0].length;\n\n\t\t\t\t\t\tif (index < count-1) {\n\t\t\t\t\t\t\tbgWidth += padding;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tbgWidth -= 1;\n\t\t\t\t}\n\n\t\t\t\tlet digit;\n\t\t\t\tlet digitsWidth = bgWidth;\n\n\t\t\t\t// stroke\n\t\t\t\tfor (var index = 0; index < count; index++) {\n\t\t\t\t\tdigit = String(unread)[index];\n\n\t\t\t\t\tif (NUMBERS[digit]) {\n\t\t\t\t\t\tvar map = NUMBERS[digit];\n\t\t\t\t\t\tvar height = map.length;\n\t\t\t\t\t\tvar width = map[0].length;\n\n\t\t\t\t\t\tfor (var y = 0; y < height; y++) {\n\t\t\t\t\t\t\tfor (var x = 0; x < width; x++) {\n\t\t\t\t\t\t\t\tif (map[y][x]) {\n\t\t\t\t\t\t\t\t\tctx.strokeRect(12 - digitsWidth + x, y + topMargin + 0, 3, 3);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tdigitsWidth -= width + padding;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// fill\n\t\t\t\tdigitsWidth = bgWidth;\n\n\t\t\t\tfor (var index = 0; index < count; index++) {\n\t\t\t\t\tdigit = String(unread)[index];\n\n\t\t\t\t\tif (NUMBERS[digit]) {\n\t\t\t\t\t\tvar map = NUMBERS[digit];\n\t\t\t\t\t\tvar height = map.length;\n\t\t\t\t\t\tvar width = map[0].length;\n\n\t\t\t\t\t\tfor (var y = 0; y < height; y++) {\n\t\t\t\t\t\t\tfor (var x = 0; x < width; x++) {\n\t\t\t\t\t\t\t\tif(map[y][x]) {\n\t\t\t\t\t\t\t\t\tctx.fillRect(13 - digitsWidth + x, y+topMargin+1, 1, 1);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tdigitsWidth -= width + padding;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tself.textedCanvas[unread] = textedCanvas;\n\n\t\t\t\tcallback(self.textedCanvas[unread]);\n\t\t\t});\n\t\t}\n\n\t\tif (self.textedCanvas[unread]){\n\t\t\tcallback(self.textedCanvas[unread]);\n\t\t}\n\t}\n\n\tthis.getIcon = (callback) => {\n\t\tself.getUnreadCanvas(function(canvas) {\n\t\t\tcallback(canvas.toDataURL(\"image/png\"));\n\t\t});\n\t}\n\n\tthis.getUnreadCanvas = (callback) => {\n\t\tif(!self.unreadCanvas) {\n\t\t\tself.unreadCanvas = document.createElement(\"canvas\");\n\t\t\tself.unreadCanvas.height = self.unreadCanvas.width = 16;\n\n\t\t\tvar ctx = self.unreadCanvas.getContext(\"2d\");\n\t\t\tvar img = new Image();\n\n\t\t\t// allow cross-origin access for the image (since it's being hosted on\n\t\t\t// michaelgeraci.com, but displaying on fastmail.com\n\t\t\timg.crossOrigin = \"anonymous\";\n\n\t\t\timg.addEventListener(\"load\", () => {\n\t\t\t\tctx.drawImage(img, 0, 0);\n\t\t\t\tcallback(self.unreadCanvas);\n\t\t\t}, true);\n\n\t\t\timg.src = ICON;\n\t\t} else {\n\t\t\tcallback(self.unreadCanvas);\n\t\t}\n\t}\n\n\tthis.getUnreadCountIcon = (callback) => {\n\t\tconst unread = self.getUnreadCount();\n\n\t\tself.drawUnreadCount(unread, (icon) => {\n\t\t\tcallback(icon.toDataURL('image/png'));\n\t\t});\n\t}\n\n\tthis.setIcon = (icon) => {\n\t\tconst links = self.head.getElementsByTagName(\"link\");\n\n\t\t// remove the old icon\n\t\tfor (let i=0; i < links.length; i++) {\n\t\t\tconst link = links[i];\n\n\t\t\tif (\n\t\t\t\t(link.rel == \"shortcut icon\" || link.rel==\"icon\") &&\n\t\t\t\tlink.href != icon\n\t\t\t) {\n\t\t\t\tself.head.removeChild(link);\n\t\t\t} else if (link.href == icon) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t};\n\n\t\tconst newIcon = document.createElement(\"link\");\n\t\tnewIcon.type = \"image/png\";\n\t\tnewIcon.rel = \"shortcut icon\";\n\t\tnewIcon.href = icon;\n\t\tself.head.appendChild(newIcon);\n\n\t\t// Chrome hack for updating the favicon\n\t\tconst shim = document.createElement('iframe');\n\t\tshim.width = shim.height = 0;\n\t\tdocument.body.appendChild(shim);\n\t\tshim.src = \"icon\";\n\t\tdocument.body.removeChild(shim);\n\t}\n\n\tthis.toString = () => {\n\t\treturn '[object FastmailFaviconCount]';\n\t}\n\n\treturn this.construct();\n}());\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });