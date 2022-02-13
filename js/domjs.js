"use strict"; 
var imageCounter = 1; 
showDiv(imageCounter); 
function changeImage(m) {
showDiv(imageCounter = imageCounter + m); 
}
function showDiv(n) {
    var i; 
    var imageArray = document.getElementsByClassName("mySlides");
    if (n > imageArray.length) {
        imageCounter = 1; 
    }
    if (n < 1) {
        imageCounter = imageArray.length; 
    }
    for (i = 0; i < imageArray.length; i++) {
        imageArray[i].style.display = "none"; 
    }
    imageArray[imageCounter - 1].style.display = "block"; 
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
