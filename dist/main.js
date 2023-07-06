/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contacttab.js":
/*!***************************!*\
  !*** ./src/contacttab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactTab: () => (/* binding */ contactTab)
/* harmony export */ });
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ "./src/tab.js");


function contactTab() {
    (0,_tab__WEBPACK_IMPORTED_MODULE_0__.createTabs)();
    let pageContainer = document.querySelector("div#content");

    let container = document.createElement('div');
    // some content
    let text = document.createElement('p');
    text.classList.add('body-text');
    text.textContent = "Contact us at 0xx-xxx-xx-xxx";

    // append that content to div
    container.appendChild(text);
    // append the div to content div
    pageContainer.appendChild(container);
}



/***/ }),

/***/ "./src/hometab.js":
/*!************************!*\
  !*** ./src/hometab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeTab: () => (/* binding */ homeTab)
/* harmony export */ });
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ "./src/tab.js");


function homeTab() {
    (0,_tab__WEBPACK_IMPORTED_MODULE_0__.createTabs)();

    let header = document.createElement('p');
    header.textContent = 'Generic Restaurant';
    let text = document.createElement('p');
    text.textContent = "Welcome to this restaurant, we are proud of it."

    let content = document.querySelector("#content")
    content.appendChild(header);
    content.appendChild(text);
}



/***/ }),

/***/ "./src/menutab.js":
/*!************************!*\
  !*** ./src/menutab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuTab: () => (/* binding */ menuTab)
/* harmony export */ });
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ "./src/tab.js");


function menuTab() {
    (0,_tab__WEBPACK_IMPORTED_MODULE_0__.createTabs)();

    let header = document.createElement('p');
    header.textContent = 'Menu';
    let text = document.createElement('p');
    text.textContent = "Here are our items:"

    let content = document.querySelector("#content")
    content.appendChild(header);
    content.appendChild(text);
}



/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageLoad: () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ "./src/tab.js");
/* harmony import */ var _hometab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hometab */ "./src/hometab.js");



function pageLoad() {
    (0,_hometab__WEBPACK_IMPORTED_MODULE_1__.homeTab)();
}




/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> .tabContainer {\n|     display: flex;\n|     gap: 30px;");

/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTabs: () => (/* binding */ createTabs)
/* harmony export */ });
let tabContainer = document.createElement('div');
tabContainer.classList.add('tabContainer');


class Tab {
    constructor(name) {
    // let tabContainer = document.createElement('div');
        // let pageContainer = document.querySelector('div#content');
        let tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = name;
        tab.id = name.toLowerCase();
        // pageContainer.appendChild(tab);
        tabContainer.appendChild(tab);
    }
} 

function resetTabs() {
    while (tabContainer.lastChild) {
        tabContainer.removeChild(tabContainer.lastChild);
    }
}

function createTabs() {
    resetTabs();
    let pageContainer = document.querySelector('div#content');
    // let tabContainer = document.createElement('div');
    let homeTab = new Tab('Home');
    let menuTab = new Tab('Menu');
    let contactTab = new Tab('Contact');
    pageContainer.appendChild(tabContainer);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");
/* harmony import */ var _contacttab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacttab */ "./src/contacttab.js");
/* harmony import */ var _hometab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hometab */ "./src/hometab.js");
/* harmony import */ var _menutab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menutab */ "./src/menutab.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);






(0,_pageload__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();


(function switchTab() {

    function setCurrentTab(tab) {
        tab.classList.add('current-tab');

    }

    let pageContainer = document.querySelector("div#content");


    
    let body = document.querySelector('body');
    body.addEventListener('click', (e) => {

        if (e.target.classList.contains('tab')) {
            while (pageContainer.lastChild) {
                pageContainer.removeChild(pageContainer.lastChild);
            }
            // contactTab();
        }

        switch(e.target.id) {
            case 'home':
                (0,_hometab__WEBPACK_IMPORTED_MODULE_2__.homeTab)();
                break;
            case 'menu':
                (0,_menutab__WEBPACK_IMPORTED_MODULE_3__.menuTab)();
                break;
            case 'contact':
                (0,_contacttab__WEBPACK_IMPORTED_MODULE_1__.contactTab)();
                break;
        }
    })
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7O0FBRW5DO0FBQ0EsSUFBSSxnREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJtQzs7QUFFbkM7QUFDQSxJQUFJLGdEQUFVOztBQUVkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNibUM7O0FBRW5DO0FBQ0EsSUFBSSxnREFBVTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JtQztBQUNDOztBQUVwQztBQUNBLElBQUksaURBQU87QUFDWDs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGxCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMvQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNJO0FBQ0o7QUFDQTtBQUNmOztBQUVyQixtREFBUTs7O0FBR1I7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFPO0FBQ3ZCO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQU87QUFDdkI7QUFDQTtBQUNBLGdCQUFnQix1REFBVTtBQUMxQjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHRhYi5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWV0YWIuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51dGFiLmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUYWJzIH0gZnJvbSBcIi4vdGFiXCI7XG5cbmZ1bmN0aW9uIGNvbnRhY3RUYWIoKSB7XG4gICAgY3JlYXRlVGFicygpO1xuICAgIGxldCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpO1xuXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHNvbWUgY29udGVudFxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnYm9keS10ZXh0Jyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1cyBhdCAweHgteHh4LXh4LXh4eFwiO1xuXG4gICAgLy8gYXBwZW5kIHRoYXQgY29udGVudCB0byBkaXZcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgLy8gYXBwZW5kIHRoZSBkaXYgdG8gY29udGVudCBkaXZcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7Y29udGFjdFRhYn07IiwiaW1wb3J0IHsgY3JlYXRlVGFicyB9IGZyb20gXCIuL3RhYlwiO1xuXG5mdW5jdGlvbiBob21lVGFiKCkge1xuICAgIGNyZWF0ZVRhYnMoKTtcblxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0dlbmVyaWMgUmVzdGF1cmFudCc7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byB0aGlzIHJlc3RhdXJhbnQsIHdlIGFyZSBwcm91ZCBvZiBpdC5cIlxuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcbn1cblxuZXhwb3J0IHtob21lVGFifTsiLCJpbXBvcnQgeyBjcmVhdGVUYWJzIH0gZnJvbSBcIi4vdGFiXCI7XG5cbmZ1bmN0aW9uIG1lbnVUYWIoKSB7XG4gICAgY3JlYXRlVGFicygpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiSGVyZSBhcmUgb3VyIGl0ZW1zOlwiXG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xufVxuXG5leHBvcnQge21lbnVUYWJ9OyIsImltcG9ydCB7IGNyZWF0ZVRhYnMgfSBmcm9tIFwiLi90YWJcIjtcbmltcG9ydCB7IGhvbWVUYWIgfSBmcm9tIFwiLi9ob21ldGFiXCI7XG5cbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICAgIGhvbWVUYWIoKTtcbn1cblxuZXhwb3J0IHtwYWdlTG9hZH07XG4iLCJsZXQgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiQ29udGFpbmVyJyk7XG5cblxuY2xhc3MgVGFiIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgLy8gbGV0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBsZXQgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgICAgIGxldCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgICAgICB0YWIudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICB0YWIuaWQgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIC8vIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiKTtcbiAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYik7XG4gICAgfVxufSBcblxuZnVuY3Rpb24gcmVzZXRUYWJzKCkge1xuICAgIHdoaWxlICh0YWJDb250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgIHRhYkNvbnRhaW5lci5yZW1vdmVDaGlsZCh0YWJDb250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoKSB7XG4gICAgcmVzZXRUYWJzKCk7XG4gICAgbGV0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICAgIC8vIGxldCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgaG9tZVRhYiA9IG5ldyBUYWIoJ0hvbWUnKTtcbiAgICBsZXQgbWVudVRhYiA9IG5ldyBUYWIoJ01lbnUnKTtcbiAgICBsZXQgY29udGFjdFRhYiA9IG5ldyBUYWIoJ0NvbnRhY3QnKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYkNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7Y3JlYXRlVGFic307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7cGFnZUxvYWR9IGZyb20gXCIuL3BhZ2Vsb2FkXCI7XG5pbXBvcnQge2NvbnRhY3RUYWJ9IGZyb20gXCIuL2NvbnRhY3R0YWJcIjtcbmltcG9ydCB7IGhvbWVUYWIgfSBmcm9tIFwiLi9ob21ldGFiXCI7XG5pbXBvcnQgeyBtZW51VGFiIH0gZnJvbSBcIi4vbWVudXRhYlwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbnBhZ2VMb2FkKCk7XG5cblxuKGZ1bmN0aW9uIHN3aXRjaFRhYigpIHtcblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRUYWIodGFiKSB7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXRhYicpO1xuXG4gICAgfVxuXG4gICAgbGV0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIik7XG5cblxuICAgIFxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYicpKSB7XG4gICAgICAgICAgICB3aGlsZSAocGFnZUNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBwYWdlQ29udGFpbmVyLnJlbW92ZUNoaWxkKHBhZ2VDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnRhY3RUYWIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaChlLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICAgICAgaG9tZVRhYigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICAgICAgbWVudVRhYigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgICAgICAgICAgY29udGFjdFRhYigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSlcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9