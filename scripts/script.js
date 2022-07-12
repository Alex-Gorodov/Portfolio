// window width
let ww = window.innerWidth;

//window height
let wh = window.innerHeight;

// page body
let body = document.querySelector("body");

// burger items list
let burger = document.querySelector(".nav-burger-container .burger-nav-list");

// menu items
let menuLinks = document.querySelectorAll(".nav-list .nav-item");

// burger menu items
let burgerLinks = document.querySelectorAll(".burger-nav-list .nav-link");

// burger button's lines
let firstLine = document.querySelector(".burger-line:nth-of-type(1)");
let secondLine = document.querySelector(".burger-line:nth-of-type(2)");
let thirdLine = document.querySelector(".burger-line:nth-of-type(3)");

// developer name
let developerText = document.querySelector(".developer");

// projects submenu
let projectsListBurger = document.querySelector(".burger-nav-projects-list");
let projectsList = document.querySelector(".nav-projects-list");
let projectsLink = document.querySelector(".projects-opener");
let projectsLinkBurger = document.querySelector(".nav-list-burger .projects-opener");

// services section's buttons
let firstButton = document.querySelector(".services-btn-item:first-of-type");
let firstService = document.querySelector(".service-idea");
let secondButton = document.querySelector(".services-btn-item:nth-of-type(2)");
let secondService = document.querySelector(".service-design");
let thirdButton = document.querySelector(".services-btn-item:nth-of-type(3)");
let thirdService = document.querySelector(".service-nothing");

// terms modal window
let termsWindow = document.querySelector(".modal-container");
let agreeBtn = document.querySelector(".modal-agree-btn");

// portfolio slider
let portfolio = document.getElementsByClassName("portfolio-item");
let next = document.querySelector(".slider-btn-next");
let prev = document.querySelector(".slider-btn-prev");
let i = 0;
let arLength = portfolio.length;

// Burger menu opening function
function burgerOpen() {
    burger.classList.toggle("nav-list-opened");

    // burger lines transform
    firstLine.classList.toggle("burger-open-first-line");
    secondLine.classList.toggle("burger-open-second-line");
    thirdLine.classList.toggle("burger-open-third-line");

    // developer name hiding on menu's opening
    developerText.style.opacity = developerText.style.opacity === '0.1' ? '' : '0.1';
}

// Burger menu closing on click on menu item
for (const link of burgerLinks) {
  link.onclick = function () {
    burger.classList.remove("nav-list-opened");
    firstLine.classList.remove("burger-open-first-line");
    secondLine.classList.remove("burger-open-second-line");
    thirdLine.classList.remove("burger-open-third-line");
    developerText.style.opacity = developerText.style.opacity === '0.1' ? '' : '0.1';

    if (projectsListBurger.classList.contains("burger-showed")) {
      projectsListBurger.classList.remove("burger-showed");
    }
    
    if (link === burgerLinks[burgerLinks.length - 1]) {
      termsOpener();
    }
  };
}

// Opening projects submenu on click on projects link in navigation
projectsLink.onclick = function () {
  projectsList.classList.toggle("showed");
  developerText.style.opacity = developerText.style.opacity === '0.1' ? '' : '0.1';
};

projectsLinkBurger.onclick = function () {
  projectsListBurger.classList.toggle("burger-showed");
};

// Closing projects submenu by clicking on 'About' link
menuLinks[1].onclick = function () {
  if (projectsList.classList.contains("showed")) {
    projectsList.classList.remove("showed");
    developerText.style.opacity = developerText.style.opacity === '0.1' ? '' : '0.1';
  }
};

// Script for scrolling to ahcner links of navigation menu
$("a[href*=#]").bind("click", function (e) {
let anchor = $(this);
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

// Scripts for sevrices buttons
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
function termsOpener() {
  if (projectsList.classList.contains("showed")) {
    projectsList.classList.remove("showed");
    developerText.style.opacity = developerText.style.opacity === '0.1' ? '' : '0.1';
  }
  termsWindow.classList.add("modal-open");
  body.classList.add("locked");
}
function modalClose() {
  termsWindow.classList.remove("modal-open");
  body.classList.remove("locked");
}
agreeBtn.onclick = function () {
  modalClose();
};

// Portfolio slider
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