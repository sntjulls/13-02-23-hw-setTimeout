"use strict";

const btn2 = document.getElementById("btn2");
const popUp = document.getElementById("popup");
const btn = document.getElementById("btn");

const windowPopup = setTimeout(() => {
  popUp.style.display = "block";
  document.body.style.overflow = "hidden";
}, 3000);

function timeout_clear() {
  clearTimeout(timeout);
  document.getElementById("btn2");
}

btn2.addEventListener("click", () => {
  clearTimeout(windowPopup);
});

btn.addEventListener("click", () => {
  popUp.style.display = "none";
  document.body.style.overflow = "auto";
});
