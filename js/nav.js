fetch('js/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#navbar-js");
    let newelem = document.createElement("nav");
    newelem.innerHTML = text;
    newelem.id = "nav";
    newelem.style["max-height"] = "80px";
    oldelem.parentNode.replaceChild(newelem, oldelem);
});

