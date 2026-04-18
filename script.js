/* global St, gsap */

const pageFlip = new St.PageFlip(
  document.getElementById("book"),
  {
    width: 900,
    height: 600,
    size: "fixed",
    maxShadowOpacity: 0.5,
    showCover: true,
    mobileScrollSupport: false
  }
);

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

/* TEXT ANIMATION ON FLIP */
pageFlip.on("flip", (e) => {
  const currentPage = e.data;

  const pages = document.querySelectorAll(".page");

  if (pages[currentPage]) {
    gsap.from(pages[currentPage].querySelectorAll("p, h2, h3"), {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2
    });
  }
});