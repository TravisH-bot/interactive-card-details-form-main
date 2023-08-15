const confirmBtn = document.querySelector(".confBtn");
const continueBtn = document.querySelector(".continue");
const form = document.querySelector("form");
const formContainer = document.querySelector(".form-container");
const completedContainer = document.querySelector(".completed-container");

form.addEventListener("submit", validate);
confirmBtn.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  // const inputValue = input.value.trim();

  formContainer.classList.add("hidden");
  completedContainer.classList.remove("hidden");
}

continueBtn.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
  completedContainer.classList.add("hidden");
});
