var link = document.querySelector(".btn__write");
var feedback = document.querySelector(".modal__feedback");
var close = feedback.querySelector(".modal__close");
var form = feedback.querySelector(".form__feedback");
var user = feedback.querySelector("[name=name__field]");
var email = feedback.querySelector("[name=email__field]");
var message = feedback.querySelector("textarea");
var storage = localStorage.getItem("email")
var map = document.querySelector(".map");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("modal__show");
  user.focus();
  if (storage) {
    email.value = storage;
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("modal__show");
  feedback.classList.remove("modal__error");
});

form.addEventListener("submit", function (evt) {
  if (!user.value || !email.value || !message.value) {
  evt.preventDefault();
  feedback.classList.remove("modal__error");
  feedback.offsetWidth = feedback.offsetWidth;
  feedback.classList.add("modal__error");
  } else {
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  if (feedback.classList.contains("modal__show")) {
      feedback.classList.remove("modal__show");
      feedback.classList.remove("modal__error");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal__show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (map.classList.contains("modal__show")) {
      map.classList.remove("modal__show");
    }
  }
});