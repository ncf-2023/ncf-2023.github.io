let scrollContent = [];
document.addEventListener("DOMContentLoaded", setup);
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
  document.querySelectorAll("#impactFullbody img").forEach((e) => (e.style.animationPlayState = "running"));
}
