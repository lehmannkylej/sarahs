/*
SARAH'S CAKE SHOP
Slideshow Javascript Code

Kyle Lehmann
lehmannkylej@gmail.com
Created: 4-28-2018

Filename: slideshow.js
SUPPORTING FILES: N/A

Last Edited: 4-27-2018
*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 6000);
}
