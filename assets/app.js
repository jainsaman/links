const topDiv = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    topDiv.classList.add("top-scrolling");
  } else {
    topDiv.classList.remove("top-scrolling");
  }
});
