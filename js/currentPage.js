function fn() {
    let page = document.getElementById("page").textContent;
    let elements = document.getElementsByClassName("navItem");
    console.log(elements);
    elements[page].style["background-color"] = "#96009669";
    elements[page].style["color"] = "#960096"; 
}

setTimeout(fn, 500);