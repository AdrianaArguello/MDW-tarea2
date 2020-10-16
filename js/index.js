window.onscroll = function() {myFunction()};
var navbar = document.getElementById("home");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function navResponsive() {
    var x = document.getElementById("navegacion");
    if (x.className === "navegacion-right") {
        x.className += " responsive";
    } else {
        x.className = "navegacion-right";
    }
}