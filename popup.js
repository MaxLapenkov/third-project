var btn = document.querySelector(".jsform");
var popup = document.querySelector(".modal-login");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var close = popup.querySelector(".close");
var form = popup.querySelector("form");
btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("block");
  login.focus();
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("block");
  popup.classList.remove("modal-error-login");
  popup.classList.remove("modal-error-email");
});

form.addEventListener("submit", function(evt) {
  if (!login.value) {
    evt.preventDefault();
    popup.classList.add("modal-error-login");
  } else {
    localStorage.setItem("login", login.value);
  }
  if (!email.value) {
    evt.preventDefault();
    popup.classList.add("modal-error-email");
  } else {
    localStorage.setItem("email", email.value);
  }
});
