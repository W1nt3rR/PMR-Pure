// let nav = document.getElementById("nav");
// let navButton = document.getElementById("navButton");

let nav;
let navButton;

setTimeout(() => {
    nav = document.getElementById("nav");
    navButton = document.getElementById("navButton");
}, 1000);

function navResposnive(){
    if(nav.style["max-height"] == "80px") 
        nav.style["max-height"] = "100vh"
    else
        nav.style["max-height"] = "80px";
}

setTimeout(navButton.addEventListener("click", navResposnive), 1500);
// navButton.addEventListener("click", navResposnive);