/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contacttab.js":
/*!***************************!*\
  !*** ./src/contacttab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeTab: () => (/* binding */ homeTab)
/* harmony export */ });
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ "./src/tab.js");


function homeTab() {
    (0,_tab__WEBPACK_IMPORTED_MODULE_0__.createTabs)();

    let header = document.createElement('p');
    header.textContent = 'Restaurant';
    let text = document.createElement('p');
    text.textContent = "Welcome to this restaurant, we are proud of it."

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

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");
/* harmony import */ var _contacttab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacttab */ "./src/contacttab.js");
/* harmony import */ var _hometab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hometab */ "./src/hometab.js");




(0,_pageload__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();


(function switchTab() {

    let pageContainer = document.querySelector("div#content");


    
    let body = document.querySelector('body');
    body.addEventListener('click', (e) => {

        if (e.target.classList.contains('tab')) {
            console.log(pageContainer.childNodes);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7O0FBRW5DO0FBQ0EsSUFBSSxnREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm1DOztBQUVuQztBQUNBLElBQUksZ0RBQVU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JtQztBQUNDO0FBQ3BDOztBQUVBLElBQUksaURBQU87QUFDWDs7QUFFQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7OztBQ1RsQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNJO0FBQ0o7O0FBRXBDLG1EQUFROzs7QUFHUjs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVU7QUFDMUI7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3R0YWIuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21ldGFiLmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGFicyB9IGZyb20gXCIuL3RhYlwiO1xuXG5mdW5jdGlvbiBjb250YWN0VGFiKCkge1xuICAgIGNyZWF0ZVRhYnMoKTtcbiAgICBsZXQgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcblxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBzb21lIGNvbnRlbnRcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzIGF0IDB4eC14eHgteHgteHh4XCI7XG5cbiAgICAvLyBhcHBlbmQgdGhhdCBjb250ZW50IHRvIGRpdlxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAvLyBhcHBlbmQgdGhlIGRpdiB0byBjb250ZW50IGRpdlxuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHtjb250YWN0VGFifTsiLCJpbXBvcnQgeyBjcmVhdGVUYWJzIH0gZnJvbSBcIi4vdGFiXCI7XG5cbmZ1bmN0aW9uIGhvbWVUYWIoKSB7XG4gICAgY3JlYXRlVGFicygpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnUmVzdGF1cmFudCc7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byB0aGlzIHJlc3RhdXJhbnQsIHdlIGFyZSBwcm91ZCBvZiBpdC5cIlxuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcbn1cblxuZXhwb3J0IHtob21lVGFifTsiLCJpbXBvcnQgeyBjcmVhdGVUYWJzIH0gZnJvbSBcIi4vdGFiXCI7XG5pbXBvcnQgeyBob21lVGFiIH0gZnJvbSBcIi4vaG9tZXRhYlwiO1xuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG5cbiAgICBob21lVGFiKCk7XG4gICAgXG5cbn1cblxuZXhwb3J0IHtwYWdlTG9hZH07XG4iLCJsZXQgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiQ29udGFpbmVyJyk7XG5cblxuY2xhc3MgVGFiIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgLy8gbGV0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBsZXQgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgICAgIGxldCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgICAgICB0YWIudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICB0YWIuaWQgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIC8vIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiKTtcbiAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYik7XG4gICAgfVxufSBcblxuZnVuY3Rpb24gcmVzZXRUYWJzKCkge1xuICAgIHdoaWxlICh0YWJDb250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgIHRhYkNvbnRhaW5lci5yZW1vdmVDaGlsZCh0YWJDb250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoKSB7XG4gICAgcmVzZXRUYWJzKCk7XG4gICAgbGV0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICAgIC8vIGxldCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgaG9tZVRhYiA9IG5ldyBUYWIoJ0hvbWUnKTtcbiAgICBsZXQgbWVudVRhYiA9IG5ldyBUYWIoJ01lbnUnKTtcbiAgICBsZXQgY29udGFjdFRhYiA9IG5ldyBUYWIoJ0NvbnRhY3QnKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYkNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7Y3JlYXRlVGFic307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3BhZ2VMb2FkfSBmcm9tIFwiLi9wYWdlbG9hZFwiO1xuaW1wb3J0IHtjb250YWN0VGFifSBmcm9tIFwiLi9jb250YWN0dGFiXCI7XG5pbXBvcnQgeyBob21lVGFiIH0gZnJvbSBcIi4vaG9tZXRhYlwiO1xuXG5wYWdlTG9hZCgpO1xuXG5cbihmdW5jdGlvbiBzd2l0Y2hUYWIoKSB7XG5cbiAgICBsZXQgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcblxuXG4gICAgXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFiJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2VDb250YWluZXIuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICB3aGlsZSAocGFnZUNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBwYWdlQ29udGFpbmVyLnJlbW92ZUNoaWxkKHBhZ2VDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnRhY3RUYWIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaChlLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICAgICAgaG9tZVRhYigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgICAgICAgICBjb250YWN0VGFiKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KVxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=