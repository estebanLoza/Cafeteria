let slideIndex = 1;

//Llamamos a la función
showSlides(slideIndex);

//***Creción de las funciones, previo de llamarlas */

//* botones siguientes y atrás controles
function plusSlide(n) {
  showSlides((slideIndex += n));
}

//* Control de las imagnes de las miniaturas
function currentSlide(n) {
  showSlides((slideIndex = n));
}

//* Función principal

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("promo_body");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  //Este for es para que no se haga en block las imagenes y
  // aparezcan una arriba de la otra

  for( i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout (showSlides, 2000);
  
}
