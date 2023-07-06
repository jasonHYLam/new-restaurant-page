import { createTabs } from "./tab";

function menuTab() {
    createTabs();

    let header = document.createElement('p');
    header.textContent = 'Menu';
    let text = document.createElement('p');
    text.textContent = "Here are our items:"

    let content = document.querySelector("#content")
    content.appendChild(header);
    content.appendChild(text);
}

export {menuTab};