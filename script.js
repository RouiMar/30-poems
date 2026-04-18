/* global St, gsap */

const pageFlip = new St.PageFlip(
  document.getElementById("book"),
  {
    width: 420,
    height: 600,
    size: "fixed",
    maxShadowOpacity: 0.5,
    showCover: true,
      drawshadow: true,
    mobileScrollSupport: false,
    useMouseEvents: true
  }
);

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

/* TEXT ANIMATION ON PAGE TURN */
pageFlip.on("flip", (e) => {
  const pages = document.querySelectorAll(".page");
  const page = pages[e.data];

  if (!page) return;

  // ❌ Skip animation for chapter pages
  if (page.classList.contains("chapter")) return;
  if (page.classList.contains("ending")) return;
  if (page.classList.contains("message")) return;

  gsap.from(page.querySelectorAll("p, h2, span"), {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });
});