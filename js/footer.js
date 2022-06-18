fetch('js/footer.html')
    .then(res => res.text())
    .then(text => {
        let footer = document.getElementById("footer");
        footer.innerHTML = text;
    });