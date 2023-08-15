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
const cbcOutput = document.getElementById("cvc-output");

form.addEventListener("submit", validate);
confirmBtn.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((input) => {
    const parent = input.parentElement;
    if (!input.value) {
      input.style.borderColor = "red";
      parent.querySelector("span").innerText = "Can't be blank";
      validator = false;
    } else if (cardNumberInput.value !== Number) {
      input.style.borderColor = "red";
      parent.querySelector("span").innerText = "Wrong format, numbers only";
      validator = false;
    }
  });
}

formContainer.classList.add("hidden");
completedContainer.classList.remove("hidden");

continueBtn.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
  completedContainer.classList.add("hidden");
});
