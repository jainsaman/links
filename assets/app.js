const topDiv = document.querySelector(".top");
const mainDiv = document.getElementById("container");
const profileImg = document.querySelector(".profileImg");

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
