"use strict";

const backToTop = document.querySelector(".back-top--button");

backToTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})