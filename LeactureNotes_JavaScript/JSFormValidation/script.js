document.querySelector("form").addEventListener("submit" , (submission) =>{
    submission.preventDefault();

  const fullname = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

    let hasNumber = true;

    for(let i=0; i<fullname.length; i++)
    {
        if(!(fullname[i] >= 'A' && fullname[i] <= 'Z' || fullname[i] >= 'a' && fullname[i] <= 'z' || fullname[i] == ' '))
        {
            hasNumber = false;
        }
    }


  if(hasNumber)
  {
    const formData = {
    FullName : fullname, 
    PhoneNumber: phone,
    Email: email,
    Password: password,
  }

  document.getElementById("fullName").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  console.log(formData);
  }

  else
  {
    alert("Full Name should not contain numbers or special characters");
  }
})