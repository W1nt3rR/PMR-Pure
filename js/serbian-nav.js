// Makes navbar resposive on small devices
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

// Colors current page on the navbar
function currentPage() {
    let page = document.getElementById("page").textContent;
    let elements = document.getElementsByClassName("navItem");
    elements[page].style["background-color"] = "#69006969";
    elements[page].style["color"] = "#FFFFFF"; 
}

// Load Common Nav
fetch('js/serbian-nav.html')
    .then(res => res.text())
    .then(text => {
        let nav = document.getElementById("nav");
        nav.innerHTML = text;
    })
    .then(navResponsive)
    .then(setTimeout(currentPage, 500));


setTimeout(currentPage, 2000);