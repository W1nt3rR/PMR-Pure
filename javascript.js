let nav = document.getElementById("nav");
let navButton = document.getElementById("navButton");

function navResposnive(){
    if(nav.style["max-height"] == "80px") 
        nav.style["max-height"] = "100vh"
    else
        nav.style["max-height"] = "80px";
}

// navButton.addEventListener("click", navResposnive);
setTimeout(navButton.addEventListener("click", navResposnive));