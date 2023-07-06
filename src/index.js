import {pageLoad} from "./pageload";
import {contactTab} from "./contacttab";
import { homeTab } from "./hometab";
import { menuTab } from "./menutab";
import './style.css';

pageLoad();


(function switchTab() {

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
        }

        switch(e.target.id) {
            case 'home':
                homeTab();
                break;
            case 'menu':
                menuTab();
                break;
            case 'contact':
                contactTab();
                break;
        }
    })
})();