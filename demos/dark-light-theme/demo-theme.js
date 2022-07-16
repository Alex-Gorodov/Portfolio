let themeButton = document.querySelector(".theme-btn");
let toggleBtn = document.querySelector(".btn-toggle");
let dark = document.querySelector(".container-dark");
let light = document.querySelector(".container-light");

themeButton.onclick = function () {
  toggleBtn.classList.toggle('theme-on');
  dark.classList.toggle('is-opacity');
  light.classList.toggle('is-not-opacity');
};