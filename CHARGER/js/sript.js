let headerBurger = document.querySelector(".header__burger");

let headerMenu = document.querySelector(".header__menu");

let body = document.querySelector("body");

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  body.classList.toggle("lock");
});

let animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  let animOnScroll = () => {
    window.addEventListener("scroll", animOnScroll);
    animItems.forEach((index) => {
      const animItem = index;
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
        if (!animItem.classList.contains("_anime-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    });
  };

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}
