function homeTab() {

    const pageBody = document.querySelector(".page-body");
    let header = document.createElement('p');
    header.textContent = 'Generic Restaurant';
    let text = document.createElement('p');
    text.textContent = "Welcome to this restaurant, we are proud of it."

    pageBody.appendChild(header);
    pageBody.appendChild(text);
}

export {homeTab};