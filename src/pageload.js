import { createTabs } from "./tab";
import { homeTab } from "./hometab";

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





createTabs();

homeTab();
}

export {pageLoad};
