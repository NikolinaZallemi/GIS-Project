const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

