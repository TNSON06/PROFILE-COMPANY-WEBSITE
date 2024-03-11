const signUpBTN = document.querySelector(".js-sign-up");
const signUplink = document.querySelector(".js-sign-up-link");

const signInBTN = document.querySelector(".js-sign-in");

const closesignInBTN = document.querySelector(".js-sign-in-close");
const closesignUpBTN = document.querySelector(".js-sign-up-close");
const modalSignUp = document.querySelector(".modal-sign-up");
const modalSignIn = document.querySelector(".modal-sign-in");

signInBTN.onclick = function () {
  modalSignIn.classList.add("open");
  modalSignUp.classList.remove("open");
};

signUpBTN.onclick = function () {
  modalSignUp.classList.add("open");
  modalSignIn.classList.remove("open");
};

signUplink.onclick = function (e) {
  modalSignUp.classList.add("open");
  modalSignIn.classList.remove("open");
  e.preventDefault();
};
closesignInBTN.onclick = function () {
  modalSignUp.classList.remove("open");
};
closesignUpBTN.onclick = function () {
  modalSignUp.classList.remove("open");
};
