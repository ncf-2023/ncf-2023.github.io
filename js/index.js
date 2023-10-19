document.addEventListener("DOMContentLoaded", setup);
function setup() {
  $(".jumpToTop").on("click", (_) => {
    document
      .querySelector("#content>.png")
      .scrollIntoView({ behavior: "smooth" });
  });
}
