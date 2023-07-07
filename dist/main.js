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
function contactTab() {
    // let pageContainer = document.querySelector("div#content");
    const pageBody = document.querySelector(".page-body");

    console.log('eyyy')
    let container = document.createElement('div');
    // some content
    let text = document.createElement('p');
    text.classList.add('body-text');
    text.textContent = "Contact us at 0xx-xxx-xx-xxx";

    // append that content to div
    container.appendChild(text);
    // append the div to content div
    pageBody.appendChild(container);
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
function homeTab() {

    const pageBody = document.querySelector(".page-body");
    let header = document.createElement('p');
    header.textContent = 'Generic Restaurant';
    let text = document.createElement('p');
    text.textContent = "Welcome to this restaurant, we are proud of it."

    pageBody.appendChild(header);
    pageBody.appendChild(text);
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
function menuTab() {
    const pageBody = document.querySelector(".page-body");

    let header = document.createElement('p');
    header.textContent = 'Menu';
    let text = document.createElement('p');
    text.textContent = "Here are our items:"

    pageBody.appendChild(header);
    pageBody.appendChild(text);
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
/* harmony import */ var _hometab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hometab */ "./src/hometab.js");


function pageLoad() {
    console.log('hey');

    let pageContainer = document.querySelector('#content');

    let pageHeader;
    let pageBody;
    let tabContainer;

    function createPageHeader() {
        pageHeader = document.createElement("div");
        pageHeader.classList.add('page-header');
        pageContainer.appendChild(pageHeader);
    }

    function createPageBody() {
        pageBody = document.createElement("div");
        pageBody.classList.add('page-body');
        pageContainer.appendChild(pageBody);

    }

    function createTabContainer() {
        tabContainer = document.createElement('div');
        tabContainer.classList.add('tab-container');
        pageHeader.appendChild(tabContainer);
    }

    function createTab(name) {
        let tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = name;
        tab.id = name.toLowerCase();
        function getTab() {return tab};
        return {getTab};
    }

    function populateTabContainer() {
        let homeTab = createTab('Home').getTab();
        console.log(homeTab)
        let menuTab = createTab('Menu').getTab();
        let contactTab = createTab('Contacts').getTab();

        tabContainer.appendChild(homeTab);
        tabContainer.appendChild(menuTab);
        tabContainer.appendChild(contactTab);
    }

    createPageHeader();
    createPageBody();
    createTabContainer();
    populateTabContainer();






(0,_hometab__WEBPACK_IMPORTED_MODULE_0__.homeTab)();
}




/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:5)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> body {\n|     margin: 0;\n|     color: wheat;");

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

function setCurrentTab(tab) {
    tab.classList.add('current-tab');
}

function removeCurrentTab() {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
        if (tab.classList.contains('current-tab')) {
            tab.classList.remove('current-tab');
        }
    })
}

(function switchTab() {
    // this is sloppy but i can't think of how to get a clean reference
    const pageBody = document.querySelector(".page-body");
    
    let body = document.querySelector('body');
    body.addEventListener('click', (e) => {

        if (e.target.classList.contains('tab')) {
            while (pageBody.lastChild) {
                pageBody.removeChild(pageBody.lastChild);
                removeCurrentTab();
                setCurrentTab(e.target)
            }
        }

        switch(e.target.id) {
            case 'home':
                (0,_hometab__WEBPACK_IMPORTED_MODULE_2__.homeTab)();
                break;
            case 'menu':
                (0,_menutab__WEBPACK_IMPORTED_MODULE_3__.menuTab)();
                break;
            case 'contacts':
                (0,_contacttab__WEBPACK_IMPORTED_MODULE_1__.contactTab)();
                break;
        }

    })
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVm9DOztBQUVwQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BLGlEQUFPO0FBQ1A7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9EbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNJO0FBQ0o7QUFDQTtBQUNmOztBQUVyQixtREFBUTs7QUFFUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFPO0FBQ3ZCO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQU87QUFDdkI7QUFDQTtBQUNBLGdCQUFnQix1REFBVTtBQUMxQjtBQUNBOztBQUVBLEtBQUs7QUFDTCxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3R0YWIuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21ldGFiLmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudXRhYi5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdFRhYigpIHtcbiAgICAvLyBsZXQgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcbiAgICBjb25zdCBwYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1ib2R5XCIpO1xuXG4gICAgY29uc29sZS5sb2coJ2V5eXknKVxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBzb21lIGNvbnRlbnRcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2JvZHktdGV4dCcpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXMgYXQgMHh4LXh4eC14eC14eHhcIjtcblxuICAgIC8vIGFwcGVuZCB0aGF0IGNvbnRlbnQgdG8gZGl2XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIC8vIGFwcGVuZCB0aGUgZGl2IHRvIGNvbnRlbnQgZGl2XG4gICAgcGFnZUJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHtjb250YWN0VGFifTsiLCJmdW5jdGlvbiBob21lVGFiKCkge1xuXG4gICAgY29uc3QgcGFnZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtYm9keVwiKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdHZW5lcmljIFJlc3RhdXJhbnQnO1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gdGhpcyByZXN0YXVyYW50LCB3ZSBhcmUgcHJvdWQgb2YgaXQuXCJcblxuICAgIHBhZ2VCb2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgcGFnZUJvZHkuYXBwZW5kQ2hpbGQodGV4dCk7XG59XG5cbmV4cG9ydCB7aG9tZVRhYn07IiwiZnVuY3Rpb24gbWVudVRhYigpIHtcbiAgICBjb25zdCBwYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1ib2R5XCIpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiSGVyZSBhcmUgb3VyIGl0ZW1zOlwiXG5cbiAgICBwYWdlQm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIHBhZ2VCb2R5LmFwcGVuZENoaWxkKHRleHQpO1xufVxuXG5leHBvcnQge21lbnVUYWJ9OyIsImltcG9ydCB7IGhvbWVUYWIgfSBmcm9tIFwiLi9ob21ldGFiXCI7XG5cbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdoZXknKTtcblxuICAgIGxldCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGxldCBwYWdlSGVhZGVyO1xuICAgIGxldCBwYWdlQm9keTtcbiAgICBsZXQgdGFiQ29udGFpbmVyO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUGFnZUhlYWRlcigpIHtcbiAgICAgICAgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1oZWFkZXInKTtcbiAgICAgICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlSGVhZGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQYWdlQm9keSgpIHtcbiAgICAgICAgcGFnZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwYWdlQm9keS5jbGFzc0xpc3QuYWRkKCdwYWdlLWJvZHknKTtcbiAgICAgICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlQm9keSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYWJDb250YWluZXIoKSB7XG4gICAgICAgIHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRhaW5lcicpO1xuICAgICAgICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKHRhYkNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFiKG5hbWUpIHtcbiAgICAgICAgbGV0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgICAgIHRhYi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIHRhYi5pZCA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZnVuY3Rpb24gZ2V0VGFiKCkge3JldHVybiB0YWJ9O1xuICAgICAgICByZXR1cm4ge2dldFRhYn07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVUYWJDb250YWluZXIoKSB7XG4gICAgICAgIGxldCBob21lVGFiID0gY3JlYXRlVGFiKCdIb21lJykuZ2V0VGFiKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGhvbWVUYWIpXG4gICAgICAgIGxldCBtZW51VGFiID0gY3JlYXRlVGFiKCdNZW51JykuZ2V0VGFiKCk7XG4gICAgICAgIGxldCBjb250YWN0VGFiID0gY3JlYXRlVGFiKCdDb250YWN0cycpLmdldFRhYigpO1xuXG4gICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG4gICAgfVxuXG4gICAgY3JlYXRlUGFnZUhlYWRlcigpO1xuICAgIGNyZWF0ZVBhZ2VCb2R5KCk7XG4gICAgY3JlYXRlVGFiQ29udGFpbmVyKCk7XG4gICAgcG9wdWxhdGVUYWJDb250YWluZXIoKTtcblxuXG5cblxuXG5cbmhvbWVUYWIoKTtcbn1cblxuZXhwb3J0IHtwYWdlTG9hZH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtwYWdlTG9hZH0gZnJvbSBcIi4vcGFnZWxvYWRcIjtcbmltcG9ydCB7Y29udGFjdFRhYn0gZnJvbSBcIi4vY29udGFjdHRhYlwiO1xuaW1wb3J0IHsgaG9tZVRhYiB9IGZyb20gXCIuL2hvbWV0YWJcIjtcbmltcG9ydCB7IG1lbnVUYWIgfSBmcm9tIFwiLi9tZW51dGFiXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxucGFnZUxvYWQoKTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudFRhYih0YWIpIHtcbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC10YWInKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ3VycmVudFRhYigpIHtcbiAgICBsZXQgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbiAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC10YWInKSkge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtdGFiJyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4oZnVuY3Rpb24gc3dpdGNoVGFiKCkge1xuICAgIC8vIHRoaXMgaXMgc2xvcHB5IGJ1dCBpIGNhbid0IHRoaW5rIG9mIGhvdyB0byBnZXQgYSBjbGVhbiByZWZlcmVuY2VcbiAgICBjb25zdCBwYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1ib2R5XCIpO1xuICAgIFxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYicpKSB7XG4gICAgICAgICAgICB3aGlsZSAocGFnZUJvZHkubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgcGFnZUJvZHkucmVtb3ZlQ2hpbGQocGFnZUJvZHkubGFzdENoaWxkKTtcbiAgICAgICAgICAgICAgICByZW1vdmVDdXJyZW50VGFiKCk7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFRhYihlLnRhcmdldClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaChlLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICAgICAgaG9tZVRhYigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICAgICAgbWVudVRhYigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29udGFjdHMnOlxuICAgICAgICAgICAgICAgIGNvbnRhY3RUYWIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfSlcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9