/* =========== Show Navbar =========== */
const navbar = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("show");
});



/* =========== Scroll Top =========== */
const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

/* ========== Scroll Reveal ============ */
const scroll = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

scroll.reveal(`.hero .col:last-child`, { delay: 600 });

scroll.reveal(
  `.about-1 .col:last-child h3,.about-1 .col:last-child p,
  .about-1 .col:last-child li`,
  {
    origin: "bottom",
    interval: 100,
  }
);

scroll.reveal(
  `.about-1 .col .edu span,.about .col .prj_button`,
  {
    origin: "bottom",
    interval: 100,
  }
);

scroll.reveal(
  `.about-1 .col:first-child img, .languages img`,
  {
    origin: "top",
  }
);

scroll.reveal(`.about-1 .col .image`, { origin: "right" });

scroll.reveal(`.footer .col div,.footer .col p`, {
  origin: "top",
  interval: 100,
});
