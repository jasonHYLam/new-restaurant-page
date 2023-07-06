import { createTabs } from "./tab";

function contactTab() {
    createTabs();
    let pageContainer = document.querySelector("div#content");

    let container = document.createElement('div');
    // some content
    let text = document.createElement('p');
    text.classList.add('body-text');
    text.textContent = "Contact us at 0xx-xxx-xx-xxx";

    // append that content to div
    container.appendChild(text);
    // append the div to content div
    pageContainer.appendChild(container);
}

export {contactTab};