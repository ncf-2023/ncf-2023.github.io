let sc = [];
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
          cn.querySelector("img").setAttribute("title", e.t + "  by " + (e.a || "匿名希望") + "  " + e.d);
          cn.querySelector("img").setAttribute("alt", e.t + " ─ " + (e.a || "匿名希望") + '<br class="pc sp">' + e.d);
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
          cn.querySelector("img").setAttribute("title", e.t + "  by " + (e.a || "匿名希望") + "  " + e.d);
          cn.querySelector("img").setAttribute("alt", e.t + " ─ " + (e.a || "匿名希望") + '<br class="pc sp">' + e.d);
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
          cn.querySelector("img").setAttribute("title", e.t + "  by " + (e.a || "匿名希望") + "  " + e.d);
          cn.querySelector("img").setAttribute("alt", e.t + " ─ " + (e.a || "匿名希望") + '<br class="pc sp">' + e.d);
          cn.querySelector("h4").textContent = e.t;
          cn.querySelector("h6").textContent = e.a || "匿名希望";
          cn.querySelector("h6").classList.add(e.d ? "mb-3" : "mb-0");
          e.d ? (cn.querySelector("p").textContent = e.d) : cn.querySelector("p").remove();
          cn.classList.remove("domTemplate");
          cn.id = "";
          document.querySelector("#worksAccordion-collapseThree > .accordion-body").append(cn);
        });
      $("#illustTemplate").remove();
      fetch("./js/goods.json")
        .then((r) => r.json())
        .then((dd) => {
          let goodsDataArray = dd["p"];
          let result = [];
          for (let i = 0, j = goodsDataArray.length; i < j; i += 2) {
            result.push(goodsDataArray.slice(i, i + 2));
          }
          goodsDataArray = result;
          goodsDataArray.forEach((e) => {
            let cn = document.querySelector("#goodsTemplate").cloneNode(true);
            e.forEach((ee, i) => {
              cn.querySelectorAll("img")[i].src = "./media/" + ee.p.substring(0, ee.p.length - 4) + "-thumb" + ee.p.substring(ee.p.length - 4, ee.p.length);
              cn.querySelectorAll("a")[i].setAttribute("href", "./media/" + ee.p);
              cn.querySelectorAll("img")[i].setAttribute("alt", ee.n + " ─ " + (ee.s == "sell" ? "販売中" : ee.s == "sold" ? "販売終了" : "準備中") + '<br class="pc sp">¥' + ee.c + " (税込)");
              cn.querySelectorAll("img")[i].setAttribute("title", ee.n + " 金券" + ee.c + "枚 ─ " + (ee.s == "sell" ? "販売中" : ee.s == "sold" ? "販売終了" : "準備中"));
              cn.querySelectorAll("h4")[i].textContent = ee.n;
              cn.querySelectorAll("h6")[i].textContent = "¥" + ee.c + " (税込)";
              cn.querySelectorAll("p")[i].classList.add(ee.s == "sell" ? "text-success" : ee.s == "sold" ? "text-danger" : "_");
              cn.querySelectorAll("p")[i].textContent = ee.s == "sell" ? "販売中" : ee.s == "sold" ? "販売終了" : "準備中";
            });
            cn.classList.remove("domTemplate");
            cn.id = "";
            document.querySelector("#goodsContainer").append(cn);
          });
          $("#goodsTemplate").remove();
          setLightboxOne(".zoomNagona");
          setLightboxMany(".zoomWorksPoster");
          setLightboxMany(".zoomWorksCharacter");
          setLightboxMany(".zoomWorksIllust");
          setLightboxMany(".zoomGoods");
          setScrollbar("#content", 150, (_) => runScroll(sc));
          setScrollbar(".accordion-body", 300, false);
          fixScrollbar();
          setScrollSpeed("#backgroundBase", 0.6, sc);
          setScrollSpeed("#backgroundLines", 0.6, sc);
          setScrollSpeed("#backgroundShapesCircle", 1.4, sc);
          setScrollSpeed("#backgroundShapesLine", 1.6, sc);
          setScrollSpeed("#backgroundShapesQuadrilateral", 1.8, sc);
          setScrollSpeed("#backgroundShapesTriangle", 2, sc);
          runScroll(sc);
          $(".jumpToTop").on("click", (_) => {
            $("#content").mCustomScrollbar("scrollTo", "top", { scrollInertia: 800 });
          });
        });
    });
});
document.addEventListener(
  "touchmove",
  function (event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  },
  false
);
window.onload = loadend;
function loadend() {
  document.querySelector("#wrapper").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".loading").classList.add("hide");
  }, 2000);
  setTimeout(() => {
    document.querySelector(".loading").classList.add("hidden");
  }, 2800);
}
