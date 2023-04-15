const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function checkEmailValidation(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, "Email is not valid");
  }
}
function checkInputValues(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${input.name} is required`);
    } else {
      showSuccess(input);
    }
  });
}
/**
 *
 * @param {Element} input
 * @param {number} min
 * @param {number} max
 */
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.name} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${input.name} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputValues([username, email, password, password2]);
  checkLength(username, 3, 20);
  checkLength(password, 8, 30);
  checkEmailValidation(email);
  checkPasswordsMatch(password, password2);
});
