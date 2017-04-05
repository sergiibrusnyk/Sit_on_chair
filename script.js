document.addEventListener("DOMContentLoaded", function() {
    //********************SLIDER********************//

    var next = document.getElementById('nextPicture');
    var previous = document.getElementById('prevPicture');
    var lis = Array.from(document.getElementsByClassName('sliderImg'));

    var counter = 0;

    lis[0].classList.add("show");

    next.addEventListener('click', function(event) {
        lis[counter].classList.remove("show");
        counter = counter + 1;
        if (counter >= lis.length) {
            counter = 0;
        }
        lis[counter].classList.add("show");
    });

    previous.addEventListener('click', function(event) {
        lis[counter].classList.remove("show");
        counter = counter - 1;
        if (counter < 0) {
            counter = lis.length - 1;
        }
        lis[counter].classList.add("show");
    });

    //********************MOUSEOVER********************//
    var stripe = Array.from(document.getElementsByClassName("whiteBelt"));


    document.querySelector(".img1").addEventListener("mouseover", function(mouseOver) {
        stripe[0].style.visibility = "hidden";
    });
    document.querySelector(".img1").addEventListener("mouseout", function(mouseOut) {
        stripe[0].style.visibility = "visible";
    });

    document.querySelector(".img2").addEventListener("mouseover", function(mouseOver) {
        stripe[1].style.visibility = "hidden";
    });
    document.querySelector(".img2").addEventListener("mouseout", function(mouseOut) {
        stripe[1].style.visibility = "visible";
    });

    //********************DROP MENU********************//
    var menu = Array.from(document.querySelectorAll(".menu > li"));
    var drop = Array.from(document.querySelectorAll(".drop_menu"));

    menu[0].addEventListener("mouseover", function(event) {
        drop[0].style.display = "block";
    });

    menu[0].addEventListener("mouseout", function(event) {
        drop[0].style.display = "none";
    });

    menu[1].addEventListener("mouseover", function(event) {
        drop[1].style.display = "block";
    });

    menu[1].addEventListener("mouseout", function(event) {
        drop[1].style.display = "none";
    });

});
