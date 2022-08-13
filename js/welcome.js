const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function submitForm(event) {
  event.preventDefault();
  loginForm.classList.remove("input-box");
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const yourName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, yourName);
  paintgreetings(yourName);
}

function paintgreetings(yourName) {
  greeting.innerText = `Hello! ${yourName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", submitForm);
} else {
  paintgreetings(savedUsername);
  loginForm.classList.remove("input-box");
}
