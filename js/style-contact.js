let name_contact = document.querySelector(".contact .enter-name");
let form_contact = document.querySelector(".contact #form-contact");
let phone_contact = document.querySelector(".contact .enter-phone");
let thanks = document.querySelector(".contact .popup-contact .thanks");
let popup_contact = document.querySelector(".contact .popup-contact");
let overlay_3 = document.querySelector(".overlay-3");
function showError(input, message) {
    let parent_input = input.parentElement;
    parent_input.classList.add("error");
    parent_input.querySelector(".error-contact").innerHTML = message;
}
function showSuccess(input) {
    let parent_input = input.parentElement;
    parent_input.classList.remove("error");
    parent_input.querySelector(".error-contact").innerHTML = "";
}
function check_name() {
    let check = true;
    if (name_contact.value.length > 15) {
        showError(name_contact, "Enter a first name");
        check = false;
    } else {
        showSuccess(name_contact);
    }
    return check;
}
function check_phone() {
    let check = true;
    if (phone_contact.value.length < 9 || phone_contact.value.length > 11) {
        showError(phone_contact, "Enter a first phone");
        check = false;
    } else {
        showSuccess(phone_contact);
    }
    return check;
}
form_contact.addEventListener("submit", function (e) {
    e.preventDefault();
    let checkName = check_name();
    let checkPhone = check_phone();
    if (checkName == true && checkPhone == true) {
        localStorage.setItem("userName", name_contact.value);
        localStorage.setItem("userPhone", phone_contact.value);
        // window.location.href = "contact-succes.html";
        let fullname = document.querySelector(".fullname");
        let phone = document.querySelector(".phone");
        fullname.innerHTML = localStorage.getItem("userName");
        phone.innerHTML = localStorage.getItem("userPhone");
        popup_contact.classList.add("popup-active");
        overlay_3.classList.add("active");
    }
});
thanks.addEventListener("click", function () {
    popup_contact.classList.remove("popup-active");
    overlay_3.classList.remove("active");
});
