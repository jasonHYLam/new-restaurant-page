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

    // this is sloppy but i can't think of how to get a clean reference

    const pageBody = document.querySelector(".page-body");
    
    let body = document.querySelector('body');
    body.addEventListener('click', (e) => {

        if (e.target.classList.contains('tab')) {
            while (pageBody.lastChild) {
                pageBody.removeChild(pageBody.lastChild);
            }
            // contactTab();
            // removeCurrentTab();
            // setCurrentTab();
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

        setCurrentTab(e.target)
    })
})();