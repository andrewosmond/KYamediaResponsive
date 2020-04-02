var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

$(document).ready(function(){
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0}, 500);
        return false;
    });

    $('.prev').click(function(){
        $('.sliders.big-book-content').fadeTo(1, 0);
        $('.sliders.big-book-content').fadeTo(250, 1);
    });

    $('.next').click(function(){
        $('.sliders.big-book-content').fadeTo(1, 0);
        $('.sliders.big-book-content').fadeTo(250, 1);
    });

});

function currentSlide(n){
    clearTimeout(timer);
    showSlides(slideIndex = n)
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var tabcontent = document.getElementsByClassName("tabcontent");
    if (n == undefined) {++slideIndex}
    if (n > slides.length || slideIndex > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");   
    }
    slides[slideIndex-1].style.display = "block";
    tabcontent[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    timer = setTimeout(showSlides, 4000);
}

function prevBooks(){
    var i;
    var books = document.getElementsByClassName("sliders");
    var tail = books[books.length - 1].innerHTML;
    for (i = books.length-1; i > 0; i--){
        books[i].innerHTML = books[i-1].innerHTML;
    }
    books[0].innerHTML = tail;
}

function nextBooks() {
    var i;
    var books = document.getElementsByClassName("sliders");
    var head = books[0].innerHTML;
    for (i = 1; i < books.length; i++){
        books[i-1].innerHTML = books[i].innerHTML;
    }
    books[books.length - 1].innerHTML = head;
}