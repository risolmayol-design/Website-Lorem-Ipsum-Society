window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
const navLinks = document.querySelectorAll("#menu-list a");

menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  menuList.classList.toggle("hidden");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuList.classList.add("hidden");
  });
});

document.addEventListener("click", (e) => {
  if (!menuList.contains(e.target) && !menuIcon.contains(e.target)) {
    menuList.classList.add("hidden");
  }
});

menuList.addEventListener("click", (e) => {
  e.stopPropagation();
});