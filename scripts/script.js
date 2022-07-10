// Burger menu

let burger = document.querySelector(".nav-burger-container .burger-nav-list");

let firstLine = document.querySelector(".burger-line:nth-of-type(1)");
let secondLine = document.querySelector(".burger-line:nth-of-type(2)");
let thirdLine = document.querySelector(".burger-line:nth-of-type(3)");

let developerText = document.querySelector(".developer");

function burgerOpen() {
    burger.classList.toggle("nav-list-opened");

    firstLine.classList.toggle("burger-open-first-line");
    secondLine.classList.toggle("burger-open-second-line");
    thirdLine.classList.toggle("burger-open-third-line");

    developerText.style.opacity = developerText.style.opacity === '0.1' ? '' : '0.1';
}

// Script for scrolling to ahcner links of navigation menu
$("a[href*=#]").bind("click", function (e) {
var anchor = $(this);
$("html, body")
    .stop()
    .animate(
    {
        scrollTop: $(anchor.attr("href")).offset().top,
    },
    700
    );
e.preventDefault();
});

// Script for sevrices buttons
var firstButton = document.querySelector(".services-btn-item:first-of-type");
var firstService = document.querySelector(".service-idea");

var secondButton = document.querySelector(".services-btn-item:nth-of-type(2)");
var secondService = document.querySelector(".service-design");

var thirdButton = document.querySelector(".services-btn-item:nth-of-type(3)");
var thirdService = document.querySelector(".service-nothing");

function serviceFirst() {
    firstButton.classList.add("service-btn-active");
    firstService.classList.add("service-item-active");

    secondButton.classList.remove("service-btn-active");
    secondService.classList.remove("service-item-active");

    thirdButton.classList.remove("service-btn-active");
    thirdService.classList.remove("service-item-active");
}

function serviceSecond() {
    secondButton.classList.add("service-btn-active");
    secondService.classList.add("service-item-active");

    firstButton.classList.remove("service-btn-active");
    firstService.classList.remove("service-item-active");

    thirdButton.classList.remove("service-btn-active");
    thirdService.classList.remove("service-item-active");
}

function serviceThird() {
    firstButton.classList.remove("service-btn-active");
    firstService.classList.remove("service-item-active");

    secondButton.classList.remove("service-btn-active");
    secondService.classList.remove("service-item-active");

    thirdButton.classList.add("service-btn-active");
    thirdService.classList.add("service-item-active");
}

// Script for terms modal window
var termsWindow = document.querySelector(".modal-container");

function termsOpener() {
    termsWindow.classList.add("modal-open");
}

function modalClose() {
    termsWindow.classList.remove("modal-open");
}

// Portfolio slider
let portfolio = document.getElementsByClassName("portfolio-item");
let next = document.querySelector(".slider-btn-next");
let prev = document.querySelector(".slider-btn-prev");
let i = 0;
let arLength = portfolio.length;

let ww = window.innerWidth;

next.addEventListener("click", moveRight);

function moveRight() {
  if (ww <= 660) {
    if(i == arLength-1){
            portfolio[0].style.display = "block";
            portfolio[i].style.display = "none";
            i = 0;
        } else{
            portfolio[i+1].style.display = "block";
            portfolio[i].style.display = "none";
            i++;
        }
  }   
}

prev.addEventListener("click", moveLeft);

function moveLeft() {
  if (ww <= 660) {
    if(i == 0){
        portfolio[arLength-1].style.display = "block";
        portfolio[i].style.display = "none";
        i = arLength-1;
    } else{
        portfolio[i-1].style.display = "block";
        portfolio[i].style.display = "none";
        i--;
    }
  }
}