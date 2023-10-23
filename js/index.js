let scrollContent = [];
document.addEventListener("DOMContentLoaded", setup);
window.onload = loadend;
function loadend() {
  document.querySelector("#wrapper").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".loading").classList.add("hide");
  }, 2000);
  setTimeout(() => {
    document.querySelector(".loading").classList.add("hidden");
    document.querySelectorAll("#impactFullbody img").forEach((e) => {
      e.style.animationPlayState = "running";
    });
  }, 2800);
}
function setup() {
  setScrollbar("#content", 150, (_) => runScroll(scrollContent));
  fixScrollbar();
  setScrollSpeed("#backgroundBase", 0.6, scrollContent);
  setScrollSpeed("#backgroundLines", 0.6, scrollContent);
  setScrollSpeed("#backgroundShapesCircle", 1.4, scrollContent);
  setScrollSpeed("#backgroundShapesLine", 1.6, scrollContent);
  setScrollSpeed("#backgroundShapesQuadrilateral", 1.8, scrollContent);
  setScrollSpeed("#backgroundShapesTriangle", 2, scrollContent);
  runScroll(scrollContent);
  $(".jumpToTop").on("click", (_) => {
    $("#content").mCustomScrollbar("scrollTo", "top", { scrollInertia: 800 });
  });
}
