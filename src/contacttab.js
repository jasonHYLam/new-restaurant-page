function contactTab() {
    // let pageContainer = document.querySelector("div#content");
    const pageBody = document.querySelector(".page-body");

    console.log('eyyy')
    let container = document.createElement('div');
    // some content
    let text = document.createElement('p');
    text.classList.add('body-text');
    text.textContent = "Contact us at 0xx-xxx-xx-xxx";

    // append that content to div
    container.appendChild(text);
    // append the div to content div
    pageBody.appendChild(container);
}

export {contactTab};