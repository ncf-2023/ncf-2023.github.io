document.addEventListener("DOMContentLoaded", (_) => {
  fetch("./js/works.json")
    .then((r) => r.json())
    .then((d) => {
      d["p"]
        .sort((a, b) => Math.random() - Math.random())
        .sort((a, b) => Math.random() - Math.random())
        .sort((a, b) => Math.random() - Math.random())
        .forEach((e) => {
          // console.log(e);
          let cn = document.querySelector("#posterTemplate").cloneNode(true);
          cn.querySelector("img").src = "./media/" + e.f.substring(0, e.f.length - 4) + "-thumb" + e.f.substring(e.f.length - 4, e.f.length);
          cn.querySelector("a").setAttribute("href", "./media/" + e.f);
          cn.querySelector("img").setAttribute("title", e.t + " ─ " + (e.a || "匿名希望") + '<br class="pc sp">' + e.d);
          cn.querySelector("h4").textContent = e.t;
          cn.querySelector("h6").textContent = e.a || "匿名希望";
          cn.querySelector("h6").classList.add(e.d ? "mb-3" : "mb-0");
          e.d ? (cn.querySelector("p").textContent = e.d) : cn.querySelector("p").remove();
          cn.classList.remove("domTemplate");
          cn.id = "";
          document.querySelector("#worksAccordion-collapseOne > .accordion-body").append(cn);
        });
      $("#posterTemplate").remove();
      d["c"]
        .sort((a, b) => Math.random() - Math.random())
        .sort((a, b) => Math.random() - Math.random())
        .sort((a, b) => Math.random() - Math.random())
        .forEach((e) => {
          // console.log(e);
          let cn = document.querySelector("#characterTemplate").cloneNode(true);
          cn.querySelector("img").src = "./media/" + e.f.substring(0, e.f.length - 4) + "-thumb" + e.f.substring(e.f.length - 4, e.f.length);
          cn.querySelector("a").setAttribute("href", "./media/" + e.f);
          cn.querySelector("img").setAttribute("title", e.t + " ─ " + (e.a || "匿名希望") + '<br class="pc sp">' + e.d);
          cn.querySelector("h4").textContent = e.t;
          cn.querySelector("h6").textContent = e.a || "匿名希望";
          cn.querySelector("h6").classList.add(e.d ? "mb-3" : "mb-0");
          e.d ? (cn.querySelector("p").textContent = e.d) : cn.querySelector("p").remove();
          cn.classList.remove("domTemplate");
          cn.id = "";
          document.querySelector("#worksAccordion-collapseTwo > .accordion-body").append(cn);
        });
      $("#characterTemplate").remove();
      d["i"]
        .sort((a, b) => Math.random() - Math.random())
        .sort((a, b) => Math.random() - Math.random())
        .sort((a, b) => Math.random() - Math.random())
        .forEach((e) => {
          // console.log(e);
          let cn = document.querySelector("#illustTemplate").cloneNode(true);
          cn.querySelector("img").src = "./media/" + e.f.substring(0, e.f.length - 4) + "-thumb" + e.f.substring(e.f.length - 4, e.f.length);
          cn.querySelector("a").setAttribute("href", "./media/" + e.f);
          cn.querySelector("img").setAttribute("title", e.t + " ─ " + (e.a || "匿名希望") + '<br class="pc sp">' + e.d);
          cn.querySelector("h4").textContent = e.t;
          cn.querySelector("h6").textContent = e.a || "匿名希望";
          cn.querySelector("h6").classList.add(e.d ? "mb-3" : "mb-0");
          e.d ? (cn.querySelector("p").textContent = e.d) : cn.querySelector("p").remove();
          cn.classList.remove("domTemplate");
          cn.id = "";
          document.querySelector("#worksAccordion-collapseThree > .accordion-body").append(cn);
        });
      $("#illustTemplate").remove();
      setLightboxOne(".zoomNagona");
      setLightboxMany(".zoomWorksPoster");
      setLightboxMany(".zoomWorksCharacter");
      setLightboxMany(".zoomWorksIllust");
      setLightboxMany(".zoomGoods");
      setScrollbar("#content", 150, (_) => runScroll());
      setScrollbar(".accordion-body", 300, false);
      fixScrollbar();
      setScrollSpeed("#backgroundBase", 1);
      setScrollSpeed("#backgroundShapesCircle", 1.4);
      setScrollSpeed("#backgroundShapesLine", 1.6);
      setScrollSpeed("#backgroundShapesQuadrilateral", 1.8);
      setScrollSpeed("#backgroundShapesTriangle", 2);
      runScroll();
    });
});
function setScrollbar(e, a, c) {
  $(e).mCustomScrollbar({
    axis: "y",
    theme: "rounded-dots-dark",
    scrollbarPosition: "inside",
    scrollInertia: 350,
    mouseWheel: { scrollAmount: a },
    scrollButtons: { enable: false },
    callbacks: {
      whileScrolling: c,
    },
  });
}
function fixScrollbar() {
  document.querySelectorAll(".mCSB_dragger").forEach((e) => {
    let el = e.querySelector(".mCSB_draggerRail");
    e.after(el);
  });
}
let scrollContent = [];
function runScroll() {
  scrollContent.forEach((e) => e());
}
function setScrollSpeed(e, t) {
  scrollContent.push((_) => {
    let root = document.querySelector("#content > div > .mCSB_container");
    let rootScrollAmount = Number(root.style.top.substring(0, root.style.top.length - 2));
    document.querySelector(e).style.top = String(rootScrollAmount * t) + "px";
    document.querySelector(e).style.height = String(root.clientHeight * t) + "px";
  });
}
