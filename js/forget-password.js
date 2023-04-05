let button = document.querySelector(".forget-password form");
let email = document.querySelector(".forget-password input");
let enter_email = document.querySelector(".popup-for .fullname");
let pop_up = document.querySelector(".popup-for");
let thanks = document.querySelector(".thanks");
let overlay = document.querySelector(".overlay");
button.addEventListener("submit", function (e) {
    e.preventDefault();
    pop_up.classList.add("active");
    overlay.classList.add("active");
    enter_email.innerHTML = email.value;
});
thanks.addEventListener("click", function () {
    pop_up.classList.remove("active");
    overlay.classList.remove("active");
});
