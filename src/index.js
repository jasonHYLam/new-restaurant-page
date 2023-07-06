import {pageLoad} from "./pageload";
import {contactTab} from "./contacttab";
import { homeTab } from "./hometab";

pageLoad();


(function switchTab() {

    let pageContainer = document.querySelector("div#content");


    
    let body = document.querySelector('body');
    body.addEventListener('click', (e) => {

        if (e.target.classList.contains('tab')) {
            console.log(pageContainer.childNodes);
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
                break;
            case 'contact':
                contactTab();
                break;
        }
    })
})();