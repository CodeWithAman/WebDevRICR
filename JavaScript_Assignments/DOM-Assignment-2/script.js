function showResults(){
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;

    document.getElementById("name").value = "";
    document.getElementById("city").value = "";

    let result = document.getElementById("result");
    result.innerHTML = "Name: "+ name + "<br>" + "City: " + city;

    result.style.display = "block";
}