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