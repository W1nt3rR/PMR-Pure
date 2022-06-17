let nav = `
<div id="navButton">
<img src="images/icons/menu.svg" alt="">
</div>
<div class="sideMargins"></div>

<a href="">
<img id="navLogo" src="images/cogwheel_nice_android.svg" alt="">
</a>

<div class="filler"></div>

<a href="./index.html">
<div class="navItem">Home</div>
</a>
<a href="">
<div class="navItem">Magisk</div>
</a>
<a href="./modules.html">
<div class="navItem">Modules</div>
</a>
<a href="">
<div class="navItem">Other Mods</div>
</a>
<a href="">
<div class="navItem">Contact</div>
</a>
<a href="">
<div class="navItem">Team</div>
</a>

<!-- <div class="filler"></div> -->

<div class="sideMargins"></div>
`

// let oldelem = document.querySelector("script#navbar-js");
//     let newelem = document.createElement("nav");
//     newelem.innerHTML = nav;
//     oldelem.parentNode.replaceChild(newelem,oldelem);

fetch('js/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#navbar-js");
    let newelem = document.createElement("nav");
    newelem.innerHTML = text;
    newelem.id = "nav";
    newelem.style["max-height"] = "80px";
    oldelem.parentNode.replaceChild(newelem, oldelem);
})