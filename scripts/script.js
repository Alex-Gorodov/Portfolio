// window width
let ww = window.innerWidth;

// page body
let pageBody = document.querySelector("body");

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
let projectsLink = document.querySelector(".projects-opener");
let projectsLinkBurger = document.querySelector(".nav-list-burger .projects-opener");
let projectsList = document.querySelector(".nav-projects-list");
let projectsListBurger = document.querySelector(".burger-nav-projects-list");

// services section's buttons
let firstButton = document.querySelector(".services-btn-item:first-of-type");
let firstService = document.querySelector(".service-idea");
let secondButton = document.querySelector(".services-btn-item:nth-of-type(2)");
let secondService = document.querySelector(".service-design");
let thirdButton = document.querySelector(".services-btn-item:nth-of-type(3)");
let thirdService = document.querySelector(".service-nothing");

// terms modal window
let modalContainer = document.querySelector(".modal-container");
let agreeBtn = document.querySelector(".modal-agree-btn");

// portfolio slider
let portfolio = document.getElementsByClassName("portfolio-item");
let next = document.querySelector(".slider-btn-next");
let prev = document.querySelector(".slider-btn-prev");
let i = 0;
let arLength = portfolio.length;

// projects arrow
let projectsListArrow = document.querySelector(".projects-opener-arrow");
let projectsListBurgerArrow = document.querySelector(".burger-nav-list .projects-opener-arrow");

// burger lines transform
function rotateBurgerLines() {
  firstLine.classList.toggle("burger-open-first-line");
  secondLine.classList.toggle("burger-open-second-line");
  thirdLine.classList.toggle("burger-open-third-line");
}

// hiding text and links under menu blocks
function hideContent() {
  developerText.style.filter = developerText.style.filter === 'blur(10px)' ? '' : 'blur(10px)';
  developerText.style.pointerEvents = developerText.style.pointerEvents === 'none' ? '' : 'none';
}

// close modal windows
function modalClose() {
  modalContainer.classList.remove("modal-open");
  pageBody.classList.remove("locked");
}

menuLinks[0].onmouseenter = function () {
  hideContent();
};

menuLinks[0].onmouseleave = function () {
  hideContent();
};

document.querySelector(".nav-projects-wrapper").addEventListener('focus', (e) => {
  e = developerText.style.filter = 'blur(10px)';
  e = developerText.style.pointerEvents = 'none';
}, true);

document.querySelector(".nav-projects-wrapper").addEventListener('focusout', (e) => {
  hideContent();
}, true);

// form.addEventListener('focus', (event) => {
//   event.target.style.background = 'pink';
// }, true);

// Burger menu opening function
function burgerOpen() {
    burger.classList.toggle("nav-list-opened");

    pageBody.classList.toggle("locked");

    if (projectsListBurger.classList.contains("burger-showed")) {
      projectsListBurger.classList.remove("burger-showed");
    }
    if (!burger.classList.contains("burger-showed")) {
      projectsListBurgerArrow.classList.remove("burger-rotated");
    }
    rotateBurgerLines();
    hideContent();
}

// Burger menu closing on click on menu item
for (const link of burgerLinks) {
  link.onclick = function () {
    burger.classList.remove("nav-list-opened");
    if (projectsListBurger.classList.contains("burger-showed")) {
      projectsListBurger.classList.remove("burger-showed");
      projectsListBurgerArrow.classList.remove("burger-rotated");
    }
    if (link === burgerLinks[burgerLinks.length - 1]) {
      termsOpener();
    } else if (pageBody.classList.contains("locked")) {
      pageBody.classList.remove("locked");
    }

    rotateBurgerLines();
    hideContent();
  };
}

// Opening projects submenu on click on projects link in navigation
// projectsLink.onclick = function () {
//   projectsList.classList.toggle("showed");
//   projectsListArrow.classList.toggle("rotated");
//   hideContent();
// };

// also for burger menu
projectsLinkBurger.onclick = function () {
  projectsListBurger.classList.toggle("burger-showed");
  projectsListBurgerArrow.classList.toggle("burger-rotated");
};

// Closing projects submenu by clicking on 'About' link
menuLinks[1].onclick = function () {
  if (projectsList.classList.contains("showed")) {
    projectsList.classList.remove("showed");
    projectsListArrow.classList.remove("rotated");
    hideContent();
  }
};

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
    projectsListArrow.classList.remove("rotated");
    hideContent();
  }
  modalContainer.classList.add("modal-open");
  pageBody.classList.add("locked");
}

document.addEventListener('keydown', function(e) {
  let keyCode = e.keyCode;
  // document.getElementById("result").innerHTML = "Key Code: "+keyCode+"<br/> Key: "+e.key+"<br/>";
  if (keyCode === 27) {//keycode is an Integer, not a String
    modalClose();
  }
});

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


// variables for theme changing
let fullPage = document.querySelector("*");
let images = document.querySelectorAll("img");
let themeButton = document.querySelector(".theme-btn");
let toggleBtn = document.querySelector(".btn-toggle");

themeButton.onclick = function () {
  toggleBtn.classList.toggle('theme-on');
  fullPage.classList.toggle('dark-theme');
  for (const image of images) {
    image.classList.toggle('dark-theme-images');
  }
};