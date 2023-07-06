class Tab {
    constructor(name) {
        let pageContainer = document.querySelector('div#content');
        let tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = name;
        tab.id = name.toLowerCase();
        pageContainer.appendChild(tab);
    }
} 


function createTabs() {
    let homeTab = new Tab('Home');
    let menuTab = new Tab('Menu');
    let contactTab = new Tab('Contact');
}

export {createTabs};