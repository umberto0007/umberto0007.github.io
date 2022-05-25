let headerBurger = document.querySelector(".header__burger");

let headerMenu = document.querySelector(".header__menu");

let body = document.querySelector("body");

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  body.classList.toggle("lock");
});
/*--------------------------------------------------------------*/
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

closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
  popupBody.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
    popupBody.classList.remove("active");
  }
});
/*-----------------------------------------*/

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        animItem.classList.remove("_active");
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
}
