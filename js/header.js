function loadHeader() {
  fetch("../modules/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("div#header").outerHTML = data;
      const tooltipTriggerList = document.querySelectorAll('header [data-bs-toggle="tooltip"]');
      const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
    });
}
document.addEventListener("DOMContentLoaded", loadHeader);
