var language = document.getElementById("lang").textContent;

function changeLanguage() {
    let currentPathname = window.location.pathname.split("/");
    // currentLocation.substring(currentLocation.indexOf("/") + 1, currentLocation.lastIndexOf("/"));
    
    let currentLocation = currentPathname[currentPathname.length - 1];

    console.log(currentLocation);
    if (language == "english") {
        window.location.href = `serbian-${currentLocation}`;
    } else if (language == "serbian") {
        window.location.href = currentLocation.substring(8);
    }
}

function languageCheck() {
    const langButton = document.getElementById("langButton");
    langButton.addEventListener("click", changeLanguage);

    if (language == "english") {
        langButton.textContent = "Serbian";
    } else if (language == "serbian") {
        langButton.textContent = "English";
    } else {
        langButton.textContent("broken");
    }
}

// Load Common Footer DEPRECATED
// fetch('js/footer.html')
//     .then(res => res.text())
//     .then(text => {
//         let footer = document.getElementById("footer");
//         footer.innerHTML = text;
//     })
//     .then(setTimeout(languageCheck, 500));

// Load Common Footer *N*E*W*
async function loadFooter() {
    let result;
    if(language == "english") {
        result = await fetch("js/footer.html");
    } else if (language == "serbian") {
        result = await fetch("js/serbian-footer.html");
    }
    
    const footerText = await result.text();
    // console.log(navText);

    let footer = document.getElementById("footer");
    footer.innerHTML = footerText;

    languageCheck();
}

loadFooter();