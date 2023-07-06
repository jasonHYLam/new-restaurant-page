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

export {createTabs};