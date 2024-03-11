var username = document.querySelector("#username");
var email = document.querySelector("#email");
var form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.add("error");
  small.innerText = message;
}
function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmptyError = true;
      showError(input, "Can not be left blank");
    } else {
      showSuccess(input);
    }
  });
  return isEmptyError;
}

function checkEmailError(input) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  input.value = input.value.trim();
  let isEmailError = !regexEmail.test(input.value);
  if (regexEmail.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email Invalid");
  }
  return isEmailError;
}

function checkLengError(input, min, max) {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, "Must have at least 3 characters");
    return true;
  }

  if (input.value.length > max) {
    showError(input, "Cannot exceed 10 characters");
    return true;
  }

  return false;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isEmptyError = checkEmptyError([username, email]);
  let isEmailError = checkEmailError(email);
  let isUsernameLengError = checkLengError(username, 3, 10);
  if (!isEmptyError && !isEmailError && !isUsernameLengErrors) {
    alert("Thanh cong khong co loi");
  }
});
