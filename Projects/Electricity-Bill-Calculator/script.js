let calculateBtn = document.getElementById("calculateBtn");

let resetBtn = document.getElementById("resetBtn");

calculateBtn.addEventListener("click", calculateBill);

resetBtn.addEventListener("click", resetBill);


function calculateBill() {
  let units = parseInt(document.getElementById("units").value);

  if (isNaN(units) || units < 0) {
    alert("Please enter valid units");

    return;
  }

  let slab1 = 0;
  let slab2 = 0;
  let slab3 = 0;
  let slab4 = 0;

  let charge1 = 0;
  let charge2 = 0;
  let charge3 = 0;
  let charge4 = 0;


  if (units > 0) {
    slab1 = Math.min(units, 50);

    charge1 = slab1 * 0.5;
  }

  if (units > 50) {
    slab2 = Math.min(units - 50, 150);

    charge2 = slab2 * 0.75;
  }

  if (units > 200) {
    slab3 = Math.min(units - 200, 250);

    charge3 = slab3 * 1.2;
  }


  if (units > 450) {
    slab4 = units - 450;

    charge4 = slab4 * 1.5;
  }


  let subtotal = charge1 + charge2 + charge3 + charge4;

  let surcharge = subtotal * 0.2;

  let grandTotal = subtotal + surcharge;


  document.getElementById("result").classList.remove("d-none");


  document.getElementById("slab1Units").innerText = slab1 + " Units";

  document.getElementById("slab1Charge").innerText = "₹" + charge1.toFixed(2);


  document.getElementById("slab2Units").innerText = slab2 + " Units";

  document.getElementById("slab2Charge").innerText = "₹" + charge2.toFixed(2);


  document.getElementById("slab3Units").innerText = slab3 + " Units";

  document.getElementById("slab3Charge").innerText = "₹" + charge3.toFixed(2);


  document.getElementById("slab4Units").innerText = slab4 + " Units";

  document.getElementById("slab4Charge").innerText = "₹" + charge4.toFixed(2);


  document.getElementById("subtotal").innerText = "₹" + subtotal.toFixed(2);

  document.getElementById("surcharge").innerText = "₹" + surcharge.toFixed(2);

  document.getElementById("grandTotal").innerText = "₹" + grandTotal.toFixed(2);
}

function resetBill() {
  document.getElementById("units").value = "";

  document.getElementById("result").classList.add("d-none");
}
