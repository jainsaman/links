const topDiv = document.querySelector(".top");
const profileImg = document.querySelector(".profileImg");
const mainDiv = document.getElementById("container");

profileImg.addEventListener("click", () => {
  topDiv.classList.add("top-scrolling");
});

window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    topDiv.classList.add("top-scrolling");
    mainDiv.style.marginTop = "180px";
  } else {
    topDiv.classList.remove("top-scrolling");
    mainDiv.style.marginTop = "360px";
  }
});
