let tabContainer = document.querySelector(".tab-container");
console.log(tabContainer);

let tabContainerArray = []

function pushToArray(tab) {
    tabContainerArray.push(tab)
}

class Tab {
    constructor(name) {
        this.name = name;
    }
} 

function displayTabs() {

    for (const tab of tabContainerArray) {
        let tabDiv = document.createElement('div');
        tabDiv.classList.add('tab');
        tabDiv.id = tab.name.toLowerCase();
        tabDiv.textContent = tab.name;
        tabContainer.appendChild(tabDiv); //seems to be an error
    }

}

function createTabs() {
    let homeTab = new Tab('Home');
    let menuTab = new Tab('Menu');
    let contactTab = new Tab('Contact');

    pushToArray(homeTab);
    pushToArray(menuTab);
    pushToArray(contactTab);

    displayTabs();
    // pageContainer.appendChild(tabContainer);
}

export {createTabs};