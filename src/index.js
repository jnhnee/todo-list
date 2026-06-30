import "./styles.css";

const content = document.querySelector("#content");

const testing = document.createElement("h3");
testing.textContent = "Test > See if index.js linked to template.html using webpack is loading";

content.appendChild(testing);