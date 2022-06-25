var language = document.getElementById("lang").textContent;
const navSize = "80px";

function navCollapse(event) {
    // console.log(event.target.id);
    if(event.target.id != "nav" && event.target.id != "navButtonImg" && event.target.id != "navButton"){
        let nav = document.getElementById("nav");
        nav.style["max-height"] = navSize;
        // console.log("nav collapsed");
    }
}

document.addEventListener("click", navCollapse);

// Load Common Nav DEPRECATED
// fetch('js/nav.html')
//     .then(res => res.text())
//     .then(text => {
//         let nav = document.getElementById("nav");
//         nav.innerHTML = text;
//     })
//     .then(navResponsive)
//     .then(setTimeout(currentPage, 500));

// setTimeout(currentPage, 2000);


// Colors current page on the navbar
function currentPage() {
    let page = document.getElementById("page").textContent;
    let elements = document.getElementsByClassName("navItem");
    elements[page].style["background-color"] = "#69006969";
    elements[page].style["color"] = "#FFFFFF"; 
}

// Makes navbar resposive on small devices
function navResponsive() {
    let nav = document.getElementById("nav");
    let navButton = document.getElementById("navButton");

    function changeNavSize(){
        if(nav.style["max-height"] == navSize) 
            nav.style["max-height"] = "100vh"
        else
            nav.style["max-height"] = navSize;
    }

    navButton.addEventListener("click", changeNavSize);
}

// Load Common Nav *N*E*W*
async function loadNav() {
    let result;
    if(language == "english") {
        result = await fetch("js/nav.html");
    } else if (language == "serbian") {
        result = await fetch("js/serbian-nav.html");
    } else {
        addErrorMessage("Bad language");
    }
    
    const navText = await result.text();
    // console.log(navText);

    let nav = document.getElementById("nav");
    nav.innerHTML = navText;

    navResponsive();
    // currentPage();
    setTimeout(currentPage, 500);
    setTimeout(currentPage, 2000);
}

loadNav();