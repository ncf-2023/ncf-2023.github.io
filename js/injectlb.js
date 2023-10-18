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
