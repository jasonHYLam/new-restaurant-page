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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './tab'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function homeTab() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './tab'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './tab'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function menuTab() {
    // createTabs();

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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './tab'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _hometab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hometab */ "./src/hometab.js");



function pageLoad() {

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
    }

    function populateTabContainer() {
        let homeTab = createTab('Home');
        let menuTab = createTab('Menu');
        let contactTab = createTab('Contacts');

        tabContainer.appendChild(homeTab);
        tabContainer.appendChild(menuTab);
        tabContainer.appendChild(contactTab);
    }

    createPageHeader();
    createPageBody();
    createTabContainer();
    populateTabContainer();





Object(function webpackMissingModule() { var e = new Error("Cannot find module './tab'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

(0,_hometab__WEBPACK_IMPORTED_MODULE_1__.homeTab)();
}




/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> .tabContainer {\n|     display: flex;\n|     gap: 30px;");

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

    // function removeCurrentTab() {
    //     const tabs = document.querySelector(".tab");
    //     tabs.forEach((tab) => {
    //         if (tab.classList.contains('current-tab')) {
    //             tab.classList.remove('current-tab');
    //         }
    //     })

    // }
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
            // removeCurrentTab();
            // setCurrentTab();
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

        setCurrentTab(e.target)
    })
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNibUM7O0FBRW5DO0FBQ0EsSUFBSSxvSUFBVTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYm1DOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYm1DO0FBQ0M7O0FBRXBDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BLG9JQUFVOztBQUVWLGlEQUFPO0FBQ1A7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVEbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNJO0FBQ0o7QUFDQTtBQUNmOztBQUVyQixtREFBUTs7O0FBR1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQU87QUFDdkI7QUFDQTtBQUNBLGdCQUFnQixpREFBTztBQUN2QjtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFVO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0dGFiLmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXRhYi5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnV0YWIuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlbG9hZC5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbnRhY3RUYWIoKSB7XG4gICAgbGV0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIik7XG5cbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gc29tZSBjb250ZW50XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdib2R5LXRleHQnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzIGF0IDB4eC14eHgteHgteHh4XCI7XG5cbiAgICAvLyBhcHBlbmQgdGhhdCBjb250ZW50IHRvIGRpdlxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAvLyBhcHBlbmQgdGhlIGRpdiB0byBjb250ZW50IGRpdlxuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHtjb250YWN0VGFifTsiLCJpbXBvcnQgeyBjcmVhdGVUYWJzIH0gZnJvbSBcIi4vdGFiXCI7XG5cbmZ1bmN0aW9uIGhvbWVUYWIoKSB7XG4gICAgY3JlYXRlVGFicygpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnR2VuZXJpYyBSZXN0YXVyYW50JztcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIHRoaXMgcmVzdGF1cmFudCwgd2UgYXJlIHByb3VkIG9mIGl0LlwiXG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xufVxuXG5leHBvcnQge2hvbWVUYWJ9OyIsImltcG9ydCB7IGNyZWF0ZVRhYnMgfSBmcm9tIFwiLi90YWJcIjtcblxuZnVuY3Rpb24gbWVudVRhYigpIHtcbiAgICAvLyBjcmVhdGVUYWJzKCk7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJIZXJlIGFyZSBvdXIgaXRlbXM6XCJcblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG59XG5cbmV4cG9ydCB7bWVudVRhYn07IiwiaW1wb3J0IHsgY3JlYXRlVGFicyB9IGZyb20gXCIuL3RhYlwiO1xuaW1wb3J0IHsgaG9tZVRhYiB9IGZyb20gXCIuL2hvbWV0YWJcIjtcblxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG5cbiAgICBsZXQgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBsZXQgcGFnZUhlYWRlcjtcbiAgICBsZXQgcGFnZUJvZHk7XG4gICAgbGV0IHRhYkNvbnRhaW5lcjtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBhZ2VIZWFkZXIoKSB7XG4gICAgICAgIHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwYWdlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtaGVhZGVyJyk7XG4gICAgICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUGFnZUJvZHkoKSB7XG4gICAgICAgIHBhZ2VCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGFnZUJvZHkuY2xhc3NMaXN0LmFkZCgncGFnZS1ib2R5Jyk7XG4gICAgICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUJvZHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhYkNvbnRhaW5lcigpIHtcbiAgICAgICAgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWItY29udGFpbmVyJyk7XG4gICAgICAgIHBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQodGFiQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYWIobmFtZSkge1xuICAgICAgICBsZXQgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgdGFiLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgdGFiLmlkID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVGFiQ29udGFpbmVyKCkge1xuICAgICAgICBsZXQgaG9tZVRhYiA9IGNyZWF0ZVRhYignSG9tZScpO1xuICAgICAgICBsZXQgbWVudVRhYiA9IGNyZWF0ZVRhYignTWVudScpO1xuICAgICAgICBsZXQgY29udGFjdFRhYiA9IGNyZWF0ZVRhYignQ29udGFjdHMnKTtcblxuICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuICAgIH1cblxuICAgIGNyZWF0ZVBhZ2VIZWFkZXIoKTtcbiAgICBjcmVhdGVQYWdlQm9keSgpO1xuICAgIGNyZWF0ZVRhYkNvbnRhaW5lcigpO1xuICAgIHBvcHVsYXRlVGFiQ29udGFpbmVyKCk7XG5cblxuXG5cblxuY3JlYXRlVGFicygpO1xuXG5ob21lVGFiKCk7XG59XG5cbmV4cG9ydCB7cGFnZUxvYWR9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7cGFnZUxvYWR9IGZyb20gXCIuL3BhZ2Vsb2FkXCI7XG5pbXBvcnQge2NvbnRhY3RUYWJ9IGZyb20gXCIuL2NvbnRhY3R0YWJcIjtcbmltcG9ydCB7IGhvbWVUYWIgfSBmcm9tIFwiLi9ob21ldGFiXCI7XG5pbXBvcnQgeyBtZW51VGFiIH0gZnJvbSBcIi4vbWVudXRhYlwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbnBhZ2VMb2FkKCk7XG5cblxuKGZ1bmN0aW9uIHN3aXRjaFRhYigpIHtcblxuICAgIC8vIGZ1bmN0aW9uIHJlbW92ZUN1cnJlbnRUYWIoKSB7XG4gICAgLy8gICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYlwiKTtcbiAgICAvLyAgICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAvLyAgICAgICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50LXRhYicpKSB7XG4gICAgLy8gICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtdGFiJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pXG5cbiAgICAvLyB9XG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFRhYih0YWIpIHtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtdGFiJyk7XG5cbiAgICB9XG5cbiAgICBsZXQgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcblxuXG4gICAgXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFiJykpIHtcbiAgICAgICAgICAgIHdoaWxlIChwYWdlQ29udGFpbmVyLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIHBhZ2VDb250YWluZXIucmVtb3ZlQ2hpbGQocGFnZUNvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGFjdFRhYigpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlQ3VycmVudFRhYigpO1xuICAgICAgICAgICAgLy8gc2V0Q3VycmVudFRhYigpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoKGUudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgICAgICBob21lVGFiKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgICAgICBtZW51VGFiKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgICAgICAgICBjb250YWN0VGFiKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRDdXJyZW50VGFiKGUudGFyZ2V0KVxuICAgIH0pXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==