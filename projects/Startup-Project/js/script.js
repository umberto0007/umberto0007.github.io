const popupLinks = document.querySelectorAll(".popup__link");
const popup = document.querySelector(".popup");
const popupBody = document.querySelector(".popup__body");
const closePopup = document.querySelector(".popup__close");

popupLinks.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("active");
    popupBody.classList.add("active");
  });
});

const video = document.getElementById("myModal");

popup.addEventListener("click", () => {
  popup.classList.remove("active");
  popupBody.classList.remove("active");
  const src = video.getAttribute("src");
  video.removeAttribute("src");
  setTimeout(() => {
    video.setAttribute("src", src);
  }, 1000);
});

document.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
    popupBody.classList.remove("active");
  }
});

const blockBurger = document.querySelector(".block__burger");

const blockNav = document.querySelector(".block__nav");

const body = document.querySelector("body");

blockBurger.addEventListener("click", () => {
  blockBurger.classList.toggle("active");
  blockNav.classList.toggle("active");
  body.classList.toggle("lock");
});
