let header = document.createElement('p');
header.textContent('Restaurant');
let text = document.createElement('p');
text.textContent = "Welcome to this restaurant, we are proud of it."

let content = document.querySelector("content")
content.appendChild(header);
content.appendChild(text);