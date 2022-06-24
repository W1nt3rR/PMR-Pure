function changeLanguage() {
    const lang = document.getElementById("lang").textContent;

    if (lang == "english") {
        window.location.href = "serbian-index.html";
    } else if (lang == "serbian") {
        window.location.href = "index.html";
    }
}

function languageCheck() {
    const lang = document.getElementById("lang").textContent;
    const langButton = document.getElementById("langButton");
    langButton.addEventListener("click", changeLanguage);

    if (lang == "english") {
        langButton.textContent = "Serbian";
    } else if (lang == "serbian") {
        langButton.textContent = "English";
    } else {
        langButton.textContent("broken");
    }
}

// Load Common Footer
fetch('js/serbian-footer.html')
    .then(res => res.text())
    .then(text => {
        let footer = document.getElementById("footer");
        footer.innerHTML = text;
    })
    .then(setTimeout(languageCheck, 500));