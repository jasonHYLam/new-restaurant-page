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


function createTabs() {
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
            (0,_contacttab__WEBPACK_IMPORTED_MODULE_1__.contactTab)();
        }

        switch(e.target.id) {
            case 'home':
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7O0FBRW5DO0FBQ0EsSUFBSSxnREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm1DOztBQUVuQztBQUNBLElBQUksZ0RBQVU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JtQztBQUNDO0FBQ3BDOztBQUVBLElBQUksaURBQU87QUFDWDs7QUFFQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7OztBQ1RsQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNJOztBQUV4QyxtREFBUTs7O0FBR1I7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBVTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVU7QUFDMUI7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3R0YWIuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21ldGFiLmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGFicyB9IGZyb20gXCIuL3RhYlwiO1xuXG5mdW5jdGlvbiBjb250YWN0VGFiKCkge1xuICAgIGNyZWF0ZVRhYnMoKTtcbiAgICBsZXQgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcblxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBzb21lIGNvbnRlbnRcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzIGF0IDB4eC14eHgteHgteHh4XCI7XG5cbiAgICAvLyBhcHBlbmQgdGhhdCBjb250ZW50IHRvIGRpdlxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAvLyBhcHBlbmQgdGhlIGRpdiB0byBjb250ZW50IGRpdlxuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHtjb250YWN0VGFifTsiLCJpbXBvcnQgeyBjcmVhdGVUYWJzIH0gZnJvbSBcIi4vdGFiXCI7XG5cbmZ1bmN0aW9uIGhvbWVUYWIoKSB7XG4gICAgY3JlYXRlVGFicygpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnUmVzdGF1cmFudCc7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byB0aGlzIHJlc3RhdXJhbnQsIHdlIGFyZSBwcm91ZCBvZiBpdC5cIlxuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcbn1cblxuZXhwb3J0IHtob21lVGFifTsiLCJpbXBvcnQgeyBjcmVhdGVUYWJzIH0gZnJvbSBcIi4vdGFiXCI7XG5pbXBvcnQgeyBob21lVGFiIH0gZnJvbSBcIi4vaG9tZXRhYlwiO1xuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG5cbiAgICBob21lVGFiKCk7XG4gICAgXG5cbn1cblxuZXhwb3J0IHtwYWdlTG9hZH07XG4iLCJsZXQgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuY2xhc3MgVGFiIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgLy8gbGV0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBsZXQgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgICAgIGxldCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgICAgICB0YWIudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICB0YWIuaWQgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIC8vIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiKTtcbiAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYik7XG4gICAgfVxufSBcblxuXG5mdW5jdGlvbiBjcmVhdGVUYWJzKCkge1xuICAgIGxldCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcbiAgICAvLyBsZXQgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGhvbWVUYWIgPSBuZXcgVGFiKCdIb21lJyk7XG4gICAgbGV0IG1lbnVUYWIgPSBuZXcgVGFiKCdNZW51Jyk7XG4gICAgbGV0IGNvbnRhY3RUYWIgPSBuZXcgVGFiKCdDb250YWN0Jyk7XG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpO1xufVxuXG5leHBvcnQge2NyZWF0ZVRhYnN9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtwYWdlTG9hZH0gZnJvbSBcIi4vcGFnZWxvYWRcIjtcbmltcG9ydCB7Y29udGFjdFRhYn0gZnJvbSBcIi4vY29udGFjdHRhYlwiO1xuXG5wYWdlTG9hZCgpO1xuXG5cbihmdW5jdGlvbiBzd2l0Y2hUYWIoKSB7XG5cbiAgICBsZXQgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcblxuXG4gICAgXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFiJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2VDb250YWluZXIuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICB3aGlsZSAocGFnZUNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBwYWdlQ29udGFpbmVyLnJlbW92ZUNoaWxkKHBhZ2VDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhY3RUYWIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaChlLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICAgICAgICAgIGNvbnRhY3RUYWIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==