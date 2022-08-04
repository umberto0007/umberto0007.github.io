const headerBurger = document.querySelector(".header__burger");

const headerNav = document.querySelector(".header__nav");

const body = document.querySelector("body");

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("active");
  headerNav.classList.toggle("active");
  body.classList.toggle("lock");
});
