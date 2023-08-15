// Buttons
const confirmBtn = document.querySelector(".confBtn");
const continueBtn = document.querySelector(".continue");

// Form
const form = document.querySelector("form");

// Containers
const formContainer = document.querySelector(".form-container");
const completedContainer = document.querySelector(".completed-container");

// Inputs
const nameInput = document.getElementById("name");
const cardNumberInput = document.getElementById("card-number");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const cvcInput = document.getElementById("cvc");

// Outputs
const nameOutput = document.getElementById("name-output");
const cardNumberOutput = document.getElementById("card-number-output");
const monthOutput = document.getElementById("month-output");
const yearOutput = document.getElementById("year-output");
const cvcOutput = document.getElementById("cvc-output");

form.addEventListener("submit", validate);
confirmBtn.addEventListener("click", validate);

const cardRegex = new RegExp("^[0-9]{13,19}$");

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((input) => {
    const parent = input.parentElement;
    if (!input.value) {
      input.style.borderColor = "red";
      parent.querySelector("span").innerText = "Can't be blank";
      validator = false;
    } else if (!cardNumberInput.value.match(cardRegex)) {
      cardNumberInput.style.borderColor = "red";
      cardNumberInput.parentElement.querySelector("span").innerText =
        "Wrong format, numbers only";
      validator = false;
    } else if (monthInput.value > 12) {
      monthInput.style.borderColor = "red";
      monthInput.parentElement.querySelector("span").innerText =
        "Invalid Month";
      validator = false;
    } else if (yearInput.value < 23) {
      yearInput.style.borderColor = "red";
      monthInput.parentElement.querySelector("span").innerText = "Invalid Year";
      validator = false;
    } else if (cvcInput > 999) {
      cvcInput.style.borderColor = "red";
      cvcInput.parentElement.querySelector("span").innerText = "Invalid CVC";
      validator = false;
    } else {
      input.style.borderColor = "inherit";
      parent.querySelector("span").innerText = "";
      formContainer.classList.add("hidden");
      completedContainer.classList.remove("hidden");
      validator = true;
    }
  });
  return validator;
}

continueBtn.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
  completedContainer.classList.add("hidden");
});
