document.querySelector("form").addEventListener("submit" , (event)=>{
    event.preventDefault();

    const DOB = document.getElementById("DOB").value;
    const currentDOB = document.getElementById("currentDOB").value;

    const Age = Number(currentDOB.split("-")[0]) - Number(DOB.split("-")[0])

    document.getElementById("DOB").value="";
    document.getElementById("currentDOB").value="";
    
})