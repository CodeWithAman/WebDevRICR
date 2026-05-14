document.getElementById("registrationFrom").addEventListener("submit" , (event) =>{
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value;

    const timing = [];

    document.querySelectorAll("input[name='timings']:checked").forEach((item) =>{
        timing.push(item.value)
    })

    console.log(gender);

    console.log(timing);
    
})

document.getElementById("registrationFrom").addEventListener("reset" , (event) =>{
    even.preventDefault();

    window.location.reload();
})