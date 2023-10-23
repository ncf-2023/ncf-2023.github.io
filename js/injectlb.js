let lba = [];
function setLightboxOne(q) {
  lba.push(
    new SimpleLightbox(q, {
      sourceAttr: "href",
      nav: false,
      animationSlide: false,
      loop: false,
      overlayOpacity: 0.8,
      captionsData: "alt",
    })
  );
}
function setLightboxMany(q) {
  lba.push(
    new SimpleLightbox(q, {
      sourceAttr: "href",
      navText: ['<img style="width:inherit;" src="../media/chevron_left.svg">', '<img style="width:inherit;" src="../media/chevron_right.svg">'],
      // captionsData: "alt",
      overlayOpacity: 0.8,
      captionsData: "alt",
    })
  );
}
function setScrollbar(e, a, c) {
  $(e).mCustomScrollbar({
    axis: "y",
    theme: "rounded-dots-dark",
    scrollbarPosition: "inside",
    scrollInertia: 350,
    mouseWheel: { scrollAmount: a },
    scrollButtons: { enable: true },
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
function runScroll(sc) {
  sc.forEach((e) => e());
}
function setScrollSpeed(e, t, sc) {
  sc.push((_) => {
    let ht = t < 1.01 ? 1 : t;
    let root = document.querySelector("#content > div > .mCSB_container");
    let rootScrollAmount = Number(root.style.top.substring(0, root.style.top.length - 2));
    document.querySelector(e).style.top = String(rootScrollAmount * t) + "px";
    document.querySelector(e).style.height = String(root.clientHeight * ht) + "px";
  });
}
