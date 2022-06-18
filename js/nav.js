fetch('js/nav.html')
.then(res => res.text())
.then(text => {
    // let oldelem = document.querySelector("script#navbar-js");
    let nav = document.getElementById("nav");
    // let newelem = document.createElement("nav");
    nav.innerHTML = text;
    // newelem.id = "nav";
    // newelem.style["max-height"] = "80px";
    // oldelem.parentNode.replaceChild(newelem, oldelem);
});

