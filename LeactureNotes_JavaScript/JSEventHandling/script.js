// function Bulb1ON(){
//     document.getElementById("bulb1").style.backgroundColor = "blue";
// }

// function Bulb1OFF(){
//     document.getElementById("bulb1").style.backgroundColor = "";
// }

// function Bulb1Red(){
//     document.getElementById("bulb1").style.backgroundColor = "red";
// }

// function Bulb1Yellow(){
//     document.getElementById("bulb1").style.backgroundColor = "yellow";
// }

// function Bulb1Green(){
//     document.getElementById("bulb1").style.backgroundColor = "Green";
// }


// // using eventListener 

// document.getElementById("BulbRed").addEventListener("click" , Bulb1Red);
// document.getElementById("BulbYellow").addEventListener("click" , Bulb1Yellow);
// document.getElementById("BulbGreen").addEventListener("click" , Bulb1Green);



// document.getElementById("bulb1Color").addEventListener("change" , changeBulbColor);

// function changeBulbColor(){
//     const color = document.getElementById("bulb1Color").value;
//     document.getElementById("bulb1").style.backgroundColor = color;
// }


const bgPicker = document.getElementById("bgPicker");
const headingPicker = document.getElementById("headingPicker");
const paraPicker = document.getElementById("paraPicker");






bgPicker.addEventListener("input", function () {
    contentArea.style.backgroundColor = bgPicker.value;
});




headingPicker.addEventListener("input", function () {
    mainHeading.style.color = headingPicker.value;
});




paraPicker.addEventListener("input", function () {
    mainPara.style.color = paraPicker.value;
});


function reset(){
    window.location.reload();
}