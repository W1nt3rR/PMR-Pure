function navResponsive() {
    let nav = document.getElementById("nav");
    let navButton = document.getElementById("navButton");

    function changeNavSize(){
        if(nav.style["max-height"] == "80px") 
            nav.style["max-height"] = "100vh"
        else
            nav.style["max-height"] = "80px";
    }

    navButton.addEventListener("click", changeNavSize);
}

setTimeout(navResponsive, 500);