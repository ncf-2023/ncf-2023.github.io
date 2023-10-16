function loadHeader() {
  fetch("../modules/header.html")
    .then((response) => response.text())
    .then((data) => (document.querySelector("div#header").outerHTML = data));
}
document.addEventListener("DOMContentLoaded", loadHeader);
