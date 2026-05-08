document.getElementById("redBulb").addEventListener("mouseover" , fillColorRed);
document.getElementById("redBulb").addEventListener("mouseout" , fillBaseColor);

document.getElementById("greenBulb").addEventListener("mouseover" , fillColorGreen);
document.getElementById("greenBulb").addEventListener("mouseout" , fillBaseColor);

document.getElementById("blueBulb").addEventListener("mouseover" , fillColorBlue);
document.getElementById("blueBulb").addEventListener("mouseout" , fillBaseColor);


function fillColorRed(){
    document.getElementById("bulb1").style.backgroundColor = "red";
}

function fillColorGreen(){
    document.getElementById("bulb1").style.backgroundColor = "green";
}

function fillColorBlue(){
    document.getElementById("bulb1").style.backgroundColor = "blue";
}


function fillBaseColor(){
    document.getElementById("bulb1").style.backgroundColor = "white";
}