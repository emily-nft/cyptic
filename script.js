const icon = document.querySelector(".fa-circle-exclamation");
const post = document.querySelector(".op");
const times = document.querySelector(".fa-circle-xmark");

icon.addEventListener("click", function () {
  post.classList.remove("hidden");
});

times.addEventListener("click", function () {
  post.classList.add("hidden");
  backgroundOverlay.classList.add("hidden");
});
const backgroundOverlay = document.querySelector(".background-overlay");

icon.addEventListener("click", function () {
  post.classList.remove("hidden");
  backgroundOverlay.classList.remove("hidden");
});

backgroundOverlay.addEventListener("click", function () {
  post.classList.add("hidden");
  backgroundOverlay.classList.add("hidden");
});
