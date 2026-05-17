let basicSalary = document.getElementById("basicSalary");

let calculateBtn = document.getElementById("calculateBtn");

let resetBtn = document.getElementById("resetBtn");

let error = document.getElementById("error");

let result = document.getElementById("result");

let success = document.getElementById("success");

let spinner = document.getElementById("spinner");

let btnText = document.getElementById("btnText");

calculateBtn.addEventListener("click", calculateSalary);

resetBtn.addEventListener("click", resetCalculator);

function calculateGrossSalary(basic) {
  let hra = basic * 0.2;

  let da = basic * 0.1;

  let gross = basic + hra + da;

  return { basic, hra, da, gross };
}

function formatCurrency(amount) {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimunFractionDigits: 2,
  });
}

function calculateSalary() {
  error.innerText = " ";

  let basic = parseInt(basicSalary.value);

  if (basicSalary === "" || isNaN(basic) || basic < 0) {
    error.innerText = "Please enter a valid non-negative salary";

    result.classList.add("d-none");

    success.classList.add("d-none");

    return;
  }

  calculateBtn.disabled = true;

  spinner.classList.remove("d-none");

  btnText.innerText = "Calculating...";

  setTimeout(function () {
    let salaryData = calculateGrossSalary(basic);

    document.getElementById("basicResult").innerText = formatCurrency(
      salaryData.basic,
    );

    document.getElementById("hraResult").innerText = formatCurrency(
      salaryData.hra,
    );

    document.getElementById("daResult").innerText = formatCurrency(
      salaryData.da,
    );

    document.getElementById("grossResult").innerText = formatCurrency(
      salaryData.gross,
    );

    result.classList.remove("d-none");

    success.classList.remove("d-none");

    calculateBtn.disabled = false;

    spinner.classList.add("d-none");

    btnText.innerText = "Calculate Salary";
  }, 500);
}

function resetCalculator(){
    basicSalary.value = ""

    error.innerText = ""

    result.classList.add("d-none");

    success.classList.add("d-none")
}
