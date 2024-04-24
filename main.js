$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true
    });
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(slick.$slides[nextSlide]).find('div').css('background-image', $(slick.$slides[nextSlide]).data('background'));
    });
    $('.slider .slick-current').find('div').css('background-image', $('.slider .slick-current').data('background'));

    $("[data-fancybox]").fancybox({
        afterLoad: function (instance, current) {
            $(".gallery .a-image:hidden").css("display", "inline-block");
        },
    });
});

function myFunction() {
    var x = document.getElementById("navbarNav");
    var overlay = document.getElementById("mobileMenuOverlay");
    var siteHeader = document.querySelector(".site-header");
    var closebtn = document.getElementById("menu-close");
    var menubtn = document.getElementById("menu-open");
    if (x.style.display === "block") {
        x.style.display = "none";
        overlay.style.display = "none";
        document.body.classList.remove("menu-open");
        siteHeader.classList.remove("expanded");
        menubtn.classList.remove("display-close");
        closebtn.classList.add("display-close");
    } else {
        x.style.display = "block";
        overlay.style.display = "block";
        document.body.classList.add("menu-open");
        siteHeader.classList.add("expanded");
        menubtn.classList.add("display-close");
        closebtn.classList.remove("display-close");
    }
}
var popup1 = document.getElementById("popup1");
var popup2 = document.getElementById("popup2");
var popup3 = document.getElementById("popup3");

function hidePopup1() {
    popup1.style.display = "none";
}

function hidePopup2() {
    popup2.style.display = "none";
}

function hidePopup3() {
    popup3.style.display = "none";
}

function showPopupAtCoordinates(p_number) {
    switch (p_number) {
        case 1:
            popup1.style.display = "block";
            popup2.style.display = "none";
            popup3.style.display = "none";
            break;
        case 2:
            popup2.style.display = "block";
            popup1.style.display = "none";
            popup3.style.display = "none";
            break;
        case 3:
            popup3.style.display = "block";
            popup1.style.display = "none";
            popup2.style.display = "none";
            break;
        default:
            break;
    }
}
document.getElementById("showPopupButton").addEventListener("click", function (e) {
    let p_number1 = 1;
    showPopupAtCoordinates(p_number1);
});
document.getElementById("showPopupButton2").addEventListener("click", function (e) {
    let p_number2 = 2;
    showPopupAtCoordinates(p_number2);
});
document.getElementById("showPopupButton3").addEventListener("click", function (e) {
    let p_number3 = 3;
    showPopupAtCoordinates(p_number3);
});
//making navbar sticky
window.addEventListener("scroll", () => {
    var site_header = document.querySelector("header");
    site_header.classList.toggle("sticky", window.scrollY > 0);
});

//purchase
var total_course = 0;
var total_purchase = 0;
var no_of_shorts = 0;
var no_of_tshirts = 0;
let buy_now_beginer = document.getElementById("buy_now_beginer");
let buy_now_competitive = document.getElementById("buy_now_competitive");
let buy_now_intermediate = document.getElementById("buy_now_intermediate");
let buy_now_shorts = document.getElementById("buy_now_shorts");
let buy_now_tshirt = document.getElementById("buy_now_tshirt");
buy_now_beginer.addEventListener("click", () => {
    total_course = 200;
});
buy_now_intermediate.addEventListener("click", () => {
    total_course = 300;
});
buy_now_competitive.addEventListener("click", () => {
    total_course = 500;
});
buy_now_shorts.addEventListener("click", () => {
    total_purchase += 25.95;
    no_of_shorts++;
});
buy_now_tshirt.addEventListener("click", () => {
    total_purchase += 19.95;
    no_of_tshirts++;
});
let cart = document.getElementById("cart");
cart.addEventListener("click", () => {
    switch (total_course) {
        case 200:
            alert("Beginer Course \n Total no.of shorts : " + no_of_shorts + "\nTotal no.of t-shirts : " + no_of_tshirts+"\nTotal bill = " + (total_course + total_purchase));
            break;
        case 300:
        alert("Intermediate Course \n Total no.of shorts : " + no_of_shorts + "\nTotal no.of t-shirts : " + no_of_tshirts+"\nTotal bill = " + (total_course + total_purchase));
            break;
        case 500:
        alert("Competetive Course \n Total no.of shorts : " + no_of_shorts + "\nTotal no.of t-shirts : " + no_of_tshirts+"\nTotal bill = " + (total_course + total_purchase));
        default:
        alert("No Course Selected \n Total no.of shorts : " + no_of_shorts + "\nTotal no.of t-shirts : " + no_of_tshirts+"\nTotal bill = " + (total_course + total_purchase));
            break;
    }
});