var rellax = new Rellax(".rellax");

// Animation for the header banner
const header = document.getElementById("header");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  let currentScrollY = window.scrollY;
  // Animation for the header banner

  if (currentScrollY > 1) {
    if (currentScrollY > lastScrollY) {
      header.classList.add("header--scroll-down");
      header.classList.remove("header--scroll-up");
    } else {
      header.classList.remove("header--scroll-down");
      header.classList.add("header--scroll-up");
    }

    lastScrollY = currentScrollY;
  } else {
    header.classList.remove("header--scroll-up");
  }
});
