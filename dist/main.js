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

    function removeCurrentTab() {
        const tabs = document.querySelector(".tab");
        tabs.forEach((tab) => {
            if (tab.classList.contains('current-tab')) {
                tab.classList.remove('current-tab');
            }
        })

    }
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
            removeCurrentTab();
            setCurrentTab();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7O0FBRW5DO0FBQ0EsSUFBSSxnREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJtQzs7QUFFbkM7QUFDQSxJQUFJLGdEQUFVOztBQUVkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNibUM7O0FBRW5DO0FBQ0EsSUFBSSxnREFBVTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JtQztBQUNDOztBQUVwQztBQUNBLElBQUksaURBQU87QUFDWDs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGxCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMvQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNJO0FBQ0o7QUFDQTtBQUNmOztBQUVyQixtREFBUTs7O0FBR1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQU87QUFDdkI7QUFDQTtBQUNBLGdCQUFnQixpREFBTztBQUN2QjtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFVO0FBQzFCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0dGFiLmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXRhYi5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnV0YWIuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlbG9hZC5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYi5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRhYnMgfSBmcm9tIFwiLi90YWJcIjtcblxuZnVuY3Rpb24gY29udGFjdFRhYigpIHtcbiAgICBjcmVhdGVUYWJzKCk7XG4gICAgbGV0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIik7XG5cbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gc29tZSBjb250ZW50XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdib2R5LXRleHQnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzIGF0IDB4eC14eHgteHgteHh4XCI7XG5cbiAgICAvLyBhcHBlbmQgdGhhdCBjb250ZW50IHRvIGRpdlxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAvLyBhcHBlbmQgdGhlIGRpdiB0byBjb250ZW50IGRpdlxuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHtjb250YWN0VGFifTsiLCJpbXBvcnQgeyBjcmVhdGVUYWJzIH0gZnJvbSBcIi4vdGFiXCI7XG5cbmZ1bmN0aW9uIGhvbWVUYWIoKSB7XG4gICAgY3JlYXRlVGFicygpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnR2VuZXJpYyBSZXN0YXVyYW50JztcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIHRoaXMgcmVzdGF1cmFudCwgd2UgYXJlIHByb3VkIG9mIGl0LlwiXG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xufVxuXG5leHBvcnQge2hvbWVUYWJ9OyIsImltcG9ydCB7IGNyZWF0ZVRhYnMgfSBmcm9tIFwiLi90YWJcIjtcblxuZnVuY3Rpb24gbWVudVRhYigpIHtcbiAgICBjcmVhdGVUYWJzKCk7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJIZXJlIGFyZSBvdXIgaXRlbXM6XCJcblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG59XG5cbmV4cG9ydCB7bWVudVRhYn07IiwiaW1wb3J0IHsgY3JlYXRlVGFicyB9IGZyb20gXCIuL3RhYlwiO1xuaW1wb3J0IHsgaG9tZVRhYiB9IGZyb20gXCIuL2hvbWV0YWJcIjtcblxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gICAgaG9tZVRhYigpO1xufVxuXG5leHBvcnQge3BhZ2VMb2FkfTtcbiIsImxldCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWJDb250YWluZXInKTtcblxuXG5jbGFzcyBUYWIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAvLyBsZXQgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIGxldCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcbiAgICAgICAgbGV0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgICAgIHRhYi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIHRhYi5pZCA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgLy8gcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWIpO1xuICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiKTtcbiAgICB9XG59IFxuXG5mdW5jdGlvbiByZXNldFRhYnMoKSB7XG4gICAgd2hpbGUgKHRhYkNvbnRhaW5lci5sYXN0Q2hpbGQpIHtcbiAgICAgICAgdGFiQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhYkNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFicygpIHtcbiAgICByZXNldFRhYnMoKTtcbiAgICBsZXQgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgLy8gbGV0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBob21lVGFiID0gbmV3IFRhYignSG9tZScpO1xuICAgIGxldCBtZW51VGFiID0gbmV3IFRhYignTWVudScpO1xuICAgIGxldCBjb250YWN0VGFiID0gbmV3IFRhYignQ29udGFjdCcpO1xuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHtjcmVhdGVUYWJzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtwYWdlTG9hZH0gZnJvbSBcIi4vcGFnZWxvYWRcIjtcbmltcG9ydCB7Y29udGFjdFRhYn0gZnJvbSBcIi4vY29udGFjdHRhYlwiO1xuaW1wb3J0IHsgaG9tZVRhYiB9IGZyb20gXCIuL2hvbWV0YWJcIjtcbmltcG9ydCB7IG1lbnVUYWIgfSBmcm9tIFwiLi9tZW51dGFiXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxucGFnZUxvYWQoKTtcblxuXG4oZnVuY3Rpb24gc3dpdGNoVGFiKCkge1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ3VycmVudFRhYigpIHtcbiAgICAgICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFiXCIpO1xuICAgICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2N1cnJlbnQtdGFiJykpIHtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC10YWInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50VGFiKHRhYikge1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC10YWInKTtcblxuICAgIH1cblxuICAgIGxldCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpO1xuXG5cbiAgICBcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWInKSkge1xuICAgICAgICAgICAgd2hpbGUgKHBhZ2VDb250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgcGFnZUNvbnRhaW5lci5yZW1vdmVDaGlsZChwYWdlQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb250YWN0VGFiKCk7XG4gICAgICAgICAgICByZW1vdmVDdXJyZW50VGFiKCk7XG4gICAgICAgICAgICBzZXRDdXJyZW50VGFiKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2goZS50YXJnZXQuaWQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgICAgIGhvbWVUYWIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgICAgIG1lbnVUYWIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICAgICAgICAgIGNvbnRhY3RUYWIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==