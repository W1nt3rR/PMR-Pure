function dropdown(element){
    answer = element.getElementsByClassName("faqDropdownAnswer")[0];
    img = element.getElementsByTagName("img")[0];

    if(answer.style["max-height"] == "") {
        answer.style["max-height"] = "512px";
        answer.style["margin-top"] = "16px";
        img.style["rotate"] = "90deg";
    }
    else {
        answer.style["max-height"] = "";
        answer.style["margin-top"] = "";
        img.style["rotate"] = "";
    }
}