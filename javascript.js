// let nav = document.getElementById("nav");
// let navButton = document.getElementById("navButton");


function navResposnive(){
    let nav = document.getElementById("nav");
    
    if(nav.style["max-height"] == "80px") 
        nav.style["max-height"] = "100vh"
    else
        nav.style["max-height"] = "80px";
}

// navButton.addEventListener("click", navResposnive);