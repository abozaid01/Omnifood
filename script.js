"use strict";

const header = document.querySelector("header");
const menuBtn = document.querySelector('.icon-mobile-nav[name="menu-outline"]');
const closeBtn = document.querySelector(
    '.icon-mobile-nav[name="close-outline"]'
);

menuBtn.addEventListener("click", () => {
    header.classList.add("nav-open");
});

closeBtn.addEventListener("click", () => {
    header.classList.remove("nav-open");
});
