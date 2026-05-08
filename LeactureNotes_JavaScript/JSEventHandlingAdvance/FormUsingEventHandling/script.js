document.querySelector("form").addEventListener("submit", (submission) => {
  submission.preventDefault();

  const fullname = document.getElementById("FullName").value;
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;

  const formData = {
    FullName: fullname,
    Email: email,
    Password: password,
  };

  document.getElementById("FullName").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Password").value = "";

  console.log(formData);
});

document.querySelector("form").addEventListener("reset", (reset) => {
  reset.preventDefault();

  confirm("Are you sure") && window.location.reload();
});

document.addEventListener("keydown" ,(keypress)=>{
    let keyPress = keypress.key;
    keyPress === "Escape" && window.location.reload();
})
