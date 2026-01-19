let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    // scroll naar beneden → verberg nav
    header.classList.add("poef");
  } else {
    // scroll naar boven → toon nav
    header.classList.remove("poef");
  }

  lastScrollY = currentScrollY;
});

