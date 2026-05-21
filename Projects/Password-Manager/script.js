const passwordForm = document.getElementById("passwordForm");
const message = document.getElementById("message");

document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const password = document.getElementById("password");

    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  });

passwordForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const website = document.getElementById("website").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (website === "" || username === "" || password === "") {
    message.innerHTML = "Please Fill All Fields";
    message.className = `text-danger mt-4 fw-semibold text-center`;
    return;
  }

  const passwordObject = {
    WebsiteName: website,
    UserName: username,
    Password: password,
  };

  const existingPasswords = JSON.parse(localStorage.getItem("Passwords")) || [];
  existingPasswords.push(passwordObject);

  localStorage.setItem("Passwords", JSON.stringify(existingPasswords));

  message.innerHTML = "Password Saved Successfully";
  message.className = `text-success mt-4 fw-semibold text-center`;

  passwordForm.reset();

  loadPasswords();
});

passwordForm.addEventListener("reset", function () {
  message.innerHTML = "";
});
