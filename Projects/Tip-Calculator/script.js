document.getElementById("calculateBtn").addEventListener("click", calculateTip);

function calculateTip() {
  let bill = parseFloat(document.getElementById("billAmt").value);
  let services = parseFloat(document.getElementById("service").value);
  let countPerson = parseInt(document.getElementById("personCount").value);

  let results = document.getElementById("result");

  if (
    isNaN(bill) ||
    isNaN(services) ||
    isNaN(countPerson) ||
    countPerson <= 0
  ) {
    results.innerHTML = "Please fill all field correctly";

    results.classList.remove("text-success");
    results.classList.add("text-danger");

    return;
  }

  let Tip = bill * services;
  let Total = bill + Tip;
  let perPerson = Total / countPerson;

  results.classList.remove("text-danger");
  results.classList.add("text-success");

  results.innerHTML = `
    Tip Amount : ₹${Tip.toFixed(2)} <br>
    Total Bill : ₹${Total.toFixed(2)} <br>
    Per Preson : ₹${perPerson.toFixed(2)}
    `;
}
