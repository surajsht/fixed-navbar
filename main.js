let nav = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let navPosition = nav.getBoundingClientRect().height;

  let windowPosition = window.scrollY;

  if (windowPosition > navPosition) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
