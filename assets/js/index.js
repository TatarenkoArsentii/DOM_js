"use strict";
let containerElem = document.querySelector(".container");
const Number = 208;

function createDivElem() {
  let createDIvElem = document.createElement("div");
  createDIvElem.classList.add("items");
  containerElem.append(createDIvElem);
}

for (let i = 0; i < Number; i++) {
  createDivElem();
}

let divElems = document.querySelectorAll(".items");

divElems.forEach((e) => e.addEventListener("mouseover", addColor));
divElems.forEach((e) => e.addEventListener("mouseout", timeRemoveColor));

function addColor() {
  this.style["background-color"] = getRandColor();
  this.style["box-shadow"] = "none";
}

function timeRemoveColor() {
  setTimeout(() => (this.style["background-color"] = "orange"), 5000);
  setTimeout(() => (this.style["box-shadow"] = "0 0 2px #000"), 5000);
}

function getRandColor() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}
