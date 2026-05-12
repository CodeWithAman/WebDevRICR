let kmInput = document.getElementById("kmInput");

let calculateBtn = document.getElementById("calculateBtn");

let result = document.getElementById("result");

let error = document.getElementById("error");

let breakdown = document.getElementById("breakdown");

let totalBill = document.getElementById("totalBill");

calculateBtn.addEventListener("click", calculateBill);

function calculateBill() {
  error.innerText = "";

  let km = parseInt(kmInput.value);

  if (kmInput.value === "" || isNaN(km) || km < 0) {
    error.innerText = "Please enter a non-negative number of kilometers";

    result.classList.add("d-none");

    return;
  }

  let firstSlabkm = 0;
  let secondSlabkm = 0;
  let thirdSlabkm = 0;

  let firstCost = 0;
  let secondCost = 0;
  let thirdCost = 0;

  if (km > 0) {
    firstSlabkm = Math.min(km, 10);
    firstCost = firstSlabkm * 11;
  }

  if (km > 10) {
    secondSlabkm = Math.min(km - 10, 40);
    secondCost = secondSlabkm * 10;
  }

  if (km > 50) {
    thirdSlabkm = Math.min(km - 50);
    thirdCost = thirdSlabkm * 8;
  }

  let total = firstCost + secondCost + thirdCost;

  totalBill.innerText =
    "Rs. " +total.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  breakdown.innerHTML = `
    <div class="breakdown-item d-flex justify-content-between">
        <span>
          ${firstSlabkm.toFixed(2)}
          km × Rs.11
        </span>

        <span>
          Rs.
          ${firstCost.toFixed(2)}
        </span>
    </div>

    <div class="breakdown-item d-flex justify-content-between">
        <span>
          ${secondSlabkm.toFixed(2)}
          km × Rs.10
        </span>

        <span>
          Rs.
          ${secondCost.toFixed(2)}
        </span>
    </div>

    <div class="breakdown-item d-flex justify-content-between">
        <span>
          ${thirdSlabkm.toFixed(2)}
          km × Rs.8
        </span>

        <span>
          Rs.
          ${thirdCost.toFixed(2)}
        </span>
    </div>
  `;

  result.classList.remove("d-none");
}
