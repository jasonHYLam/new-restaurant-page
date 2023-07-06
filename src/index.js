import {pageLoad} from "./pageload";
import {contactTab} from "./contacttab";
import { homeTab } from "./hometab";
import { menuTab } from "./menutab";
import './style.css';

pageLoad();


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