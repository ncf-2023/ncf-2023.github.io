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
  let live = new Date().getTime();
  let schedule = [
    [1698458400000, 1698459300000, "オープニング"],
    [1698459300000, 1698462000000, "クイズ大会"],
    [1698462000000, 1698464700000, "手旗信号ゲーム"],
    [1698464700000, 1698468300000, "ゲーム大会"],
    [1698468300000, 1698470400000, "Short Movie 上映会"],
    [1698470400000, 1698472800000, "ビンゴ大会"],
    [1698472800000, 1698475500000, "マジック"],
    [1698476100000, 1698477300000, "フィナーレ"],
  ];
  schedule.forEach((e) => {
    if (e[0] <= live && live <= e[1]) {
      document.querySelector("#liveEventName").textContent = e[2];
      document.querySelector(".live").classList.remove("hidden");
    }
  });
}
