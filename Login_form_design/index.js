const Loginform = document.querySelector(".Loginform");
const MainButton = document.querySelector(".MainButton");
const Registerform = document.querySelector(".Registerform");
const Registerbtn = document.querySelector(".Registerbtn");
const Loginbtn = document.querySelector(".Loginbtn");

MainButton.addEventListener("click", () => {
    Loginform.classList.add("Loginform-box");
    Registerform.classList.remove("Registerform-box");
});
Registerbtn.addEventListener("click", () => {
    Registerform.classList.add("Registerform-box");
    Loginform.classList.remove("Loginform-box");
});
Loginbtn.addEventListener("click", () => {
    Loginform.classList.add("Loginform-box");
    Registerform.classList.remove("Registerform-box");
});