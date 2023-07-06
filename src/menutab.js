function menuTab() {
    const pageBody = document.querySelector(".page-body");

    let header = document.createElement('p');
    header.textContent = 'Menu';
    let text = document.createElement('p');
    text.textContent = "Here are our items:"

    pageBody.appendChild(header);
    pageBody.appendChild(text);
}

export {menuTab};