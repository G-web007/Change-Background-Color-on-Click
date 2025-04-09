function changeColor() {
    document.body.style.backgroundColor = "#000";
}

const x = document.getElementById("color");

if(!!x.addEventListener){
    x.addEventListener("click", changeColor)
}


