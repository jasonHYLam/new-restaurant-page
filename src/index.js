import {pageLoad} from "./pageload";
import {contactTab} from "./contacttab";
import { homeTab } from "./hometab";
import { menuTab } from "./menutab";
import './style.css';

pageLoad();

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
                homeTab();
                break;
            case 'menu':
                menuTab();
                break;
            case 'contacts':
                contactTab();
                break;
        }

    })
})();