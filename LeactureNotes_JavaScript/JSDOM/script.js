function Submit() {
    console.log("Submit button Clicked");

    const input = document.getElementById("fullName").value;
    console.log(input);

    document.getElementById("myData").innerText = input;
    document.getElementById("fullName").value = "";

    document.getElementById("divCard").classList.add("divShow");
    document.getElementById("divCard").classList.remove("divHide");
}