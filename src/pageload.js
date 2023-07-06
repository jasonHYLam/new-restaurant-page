import { homeTab } from "./hometab";

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






homeTab();
}

export {pageLoad};
