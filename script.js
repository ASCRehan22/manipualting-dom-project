let addp = document.getElementById("p-button");
let addi = document.getElementById("img-button");

let pDiv = document.getElementById("p-div");
let iDiv = document.getElementById("img-div");

pNew = document.createElement("p");
iNew = document.createElement("img");
iNew.classList.add("size");

addp.onclick = function () {
    pDiv.style.display = "";
    iDiv.style.display = "none";

    pNew.innerHTML += " I love Rubber Duckies!";
    pDiv.appendChild(pNew);
    
}

addi.onclick = function () {
    iNew = document.createElement("img");
    iNew.classList.add("size");
    iDiv.style.display = "block";
    pDiv.style.display = "none";
    iNew.src = "images/rubber.jpg";
    iDiv.appendChild(iNew);
}