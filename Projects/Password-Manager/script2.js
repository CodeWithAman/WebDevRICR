const tableBody = document.getElementById("tableBody");

const emptyMessage = document.getElementById("emptyMessage");

function loadPasswords() {
  tableBody.innerHTML = "";

  const passwords = JSON.parse(localStorage.getItem("Passwords")) || [];

  if (passwords.length === 0) {
    emptyMessage.classList.remove("d-none");
  } else {
    emptyMessage.classList.add("d-none");
  }

  passwords.forEach(function (data) {
    const row = document.createElement("tr");

    const website = document.createElement("td");
    website.innerText = data.WebsiteName;

    const username = document.createElement("td");
    username.innerText = data.UserName;

    const password = document.createElement("td");
    password.innerText = data.Password;

    row.appendChild(website);

    row.appendChild(username);

    row.appendChild(password);

    tableBody.appendChild(row);
  });
}
loadPasswords();
