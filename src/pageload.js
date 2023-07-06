export default function pageLoad() {
    let header = document.createElement('p');
    header.textContent = 'Restaurant';
    let text = document.createElement('p');
    text.textContent = "Welcome to this restaurant, we are proud of it."

    let content = document.querySelector("#content")
    console.log(content);
    content.appendChild(header);
    content.appendChild(text);
}