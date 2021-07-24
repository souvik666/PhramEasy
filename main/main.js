var slideIndex = 0;
showSlides();
//add the global timer variable
var slides, dots, timer;

function showSlides() {
  var i;
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  //put the timeout in the timer variable
  timer = setTimeout(showSlides, 4000); // Change image every 8 seconds
}

function plusSlides(position) {
  //clear/stop the timer
  clearTimeout(timer);
  slideIndex += position;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  //create a new timer
  timer = setTimeout(showSlides, 4000);
}

function currentSlide(index) {
  //clear/stop the timer
  clearTimeout(timer);
  if (index > slides.length) {
    index = 1;
  } else if (index < 1) {
    index = slides.length;
  }
  //set the slideIndex with the index of the function
  slideIndex = index;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index - 1].style.display = "block";
  dots[index - 1].className += " active";
  //create a new timer
  timer = setTimeout(showSlides, 4000);
}
document.getElementById("viewall").addEventListener("click", function () {
  window.location.href = "viewAll.html";
});

document.getElementById("cart").addEventListener("click", function () {
  window.location.href = "cart.html";
});

function showHealthCareProduct(){
  window.location.href="healthCare_products.html";
}