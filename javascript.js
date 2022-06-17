let nav = document.getElementById("nav");
let navButton = document.getElementById("navButton");

function navResposnive(){
    if(nav.style.height == "80px")
        nav.style.height = "100vh";
    else
        nav.style.height = "80px";
}

navButton.addEventListener("click", navResposnive);