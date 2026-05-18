document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const gender = document.querySelector(
      "input[name='gender']:checked",
    )?.value;
    const qualification = document.getElementById("qualification").value;
    const marks = document.getElementById("marks").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const pin = document.getElementById("pin").value;
    const timings = [];
    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    const regisregistrationData = {
      FullName: fullName,
      Email: email,
      Phone: phone,
      DateofBirth: dob,
      Gender: gender,
      Qualification: qualification,
      Marks: marks,
      Course: course,
      Timings: timings,
      Address: address,
      City: city,
      PinCode: pin,
    };

    validateData(regisregistrationData)
      ? (console.log("Registration Data:", regisregistrationData),
        alert("Registration successful! Check console for details."))
      : alert("Registration unsuccessfull! Enter valid Data.");
  });

document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });

function validateData(data) {
  document.querySelectorAll(".manualError").forEach((item) => {
    item.innerText = "";
  });

  let isVaild = true;

  console.log(data);

  if (!data.FullName) {
    document.getElementById("fullNameError").innerText = "Full Name Required";
    isVaild = false;
  } else if (!/^[A-Za-z\s]+$/.test(data.FullName)) {
    document.getElementById("fullNameError").innerText =
      "Only alphabets and spaces are allowed";
    isVaild = false;
  }

  if (!data.Email) {
    document.getElementById("emailError").innerText = "Email Required";
    isVaild = false;
  } else if (
    !/^[A-Za-z\d\_\.]+@(gmail.com|outlook.com|ricr.in)$/.test(data.Email)
  ) {
    document.getElementById("emailError").innerText =
      "Only standard Email format allowed";
    isVaild = false;
  }

  if (!data.Phone) {
    document.getElementById("phoneError").innerText = "Phone Number Required";
    isVaild = false;
  } else if (!/^[6-9]\d{9}$/.test(data.Phone)) {
    document.getElementById("phoneError").innerText =
      "Only Indian Mobile Number allowed";
    isVaild = false;
  }

  if (!data.DateofBirth) {
    document.getElementById("dobError").innerText = "Data of Birth Required";
    isVaild = false;
  } else {
    const birthYear = data.DateofBirth.split("-")[0];

    const currentYear = new Date().getFullYear();

    const age = currentYear - birthYear;

    if (age < 14) {
      document.getElementById("dobError").innerText =
        "Student must be at least 15 years old";
      isVaild = false;
    }
  }

  if (!data.Gender) {
    document.getElementById("genderError").innerText = "Please select gender";
    isVaild = false;
  }

  if (!data.Qualification) {
    document.getElementById("qualificationError").innerText =
      "Please select qualification";
    isVaild = false;
  }

  if (!data.Marks) {
    document.getElementById("marksError").innerText = "Marks Required";
    isVaild = false;
  } else if (!/^(100|[0-9]{1,2}|[A-Fa-f])$/.test(data.Marks)) {
    document.getElementById("marksError").innerText =
      "Enter valid percentage or grade";
    isVaild = false;
  }

  if (!data.Course) {
    document.getElementById("courseError").innerText = "Please select course";
    isValid = false;
  }

  if (data.Timings.length === 0) {
    document.getElementById("timingsError").innerText =
      "Please select batch timing";
    isValid = false;
  }

  if (!data.Address) {
    document.getElementById("addressError").innerText = "Address Required";
    isValid = false;
  }

  if (!data.City) {
    document.getElementById("cityError").innerText = "City Required";
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/.test(data.City)) {
    document.getElementById("cityError").innerText = "Only alphabets allowed";
    isValid = false;
  }

  if (!data.PinCode) {
    document.getElementById("pinError").innerText = "Pin Code Required";
    isValid = false;
  } else if (!/^\d{6}$/.test(data.PinCode)) {
    document.getElementById("pinError").innerText =
      "Enter valid 6 digit pin code";
    isValid = false;
  }

  document.getElementById("fullName").addEventListener("input", () => {
    document.getElementById("fullNameError").innerText = "";
  });

  document.getElementById("email").addEventListener("input", () => {
    document.getElementById("emailError").innerText = "";
  });

  document.getElementById("phone").addEventListener("input", () => {
    document.getElementById("phoneError").innerText = "";
  });

  document.getElementById("dob").addEventListener("change", () => {
    document.getElementById("dobError").innerText = "";
  });

  document.querySelectorAll("input[name='gender']").forEach((item) => {
    item.addEventListener("change", () => {
      document.getElementById("genderError").innerText = "";
    });
  });

  document.getElementById("qualification").addEventListener("change", () => {
    document.getElementById("qualificationError").innerText = "";
  });

  document.getElementById("marks").addEventListener("input", () => {
    document.getElementById("marksError").innerText = "";
  });

  document.getElementById("course").addEventListener("change", () => {
    document.getElementById("courseError").innerText = "";
  });

  document.querySelectorAll("input[name='timings']").forEach((item) => {
    item.addEventListener("change", () => {
      document.getElementById("timingsError").innerText = "";
    });
  });

  document.getElementById("address").addEventListener("input", () => {
    document.getElementById("addressError").innerText = "";
  });

  document.getElementById("city").addEventListener("input", () => {
    document.getElementById("cityError").innerText = "";
  });

  document.getElementById("pin").addEventListener("input", () => {
    document.getElementById("pinError").innerText = "";
  });

  return isVaild;
}
