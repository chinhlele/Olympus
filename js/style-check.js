let first_name = document.querySelector(".check .first-name");
let last_name = document.querySelector(".check .last-name");
let phone = document.querySelector(".check .check-phone");
let form_check = document.querySelector("#form-check");
let pay_check = document.querySelector(".pay-check");
let overlay = document.querySelector(".overlay");
let thanks = document.querySelector(".thanks");
let email_check = document.querySelector(".email-check");
let apartment = document.querySelector(".apartment");
function showError(input, message) {
    let parent_input = input.parentElement;
    parent_input.classList.add("error");
    parent_input.querySelector(".error-check").innerHTML = message;
}
function showSuccess(input) {
    let parent_input = input.parentElement;
    parent_input.classList.remove("error");
    parent_input.querySelector(".error-check").innerHTML = "";
}
function check_first_name() {
    let check = true;
    if (first_name.value.length > 10) {
        showError(first_name, "Enter a first name");
        check = false;
    } else {
        showSuccess(first_name);
    }
    return check;
}
function check_last_name() {
    let check = true;
    if (last_name.value.length > 10) {
        showError(last_name, "Enter a first name");
        check = false;
    } else {
        showSuccess(last_name);
    }
    return check;
}
function check_phone() {
    let check = true;
    if (phone.value.length < 9 || phone.value.length > 11) {
        showError(phone, "Enter a first phone");
        check = false;
    } else {
        showSuccess(phone);
    }
    return check;
}
form_check.addEventListener("submit", function (e) {
    e.preventDefault();
    let checkFirtName = check_first_name();
    let checkLastName = check_last_name();
    let checkPhone = check_phone();
    if (checkFirtName == true && checkLastName == true && checkPhone == true) {
        let name_pay = document.querySelector(".name-pay span");
        pay_check.classList.add("pay-active");
        overlay.classList.add("active");
        name_pay.innerHTML = first_name.value;
    }
});
thanks.addEventListener("click", function () {
    pay_check.classList.remove("pay-active");
    first_name.value = "";
    last_name.value = "";
    phone.value = "";
    email_check.value = "";
    apartment.value = "";
});
$(document).mouseup(function (e) {
    var container = $(".check");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".pay-check").removeClass("pay-active");
        first_name.value = "";
        last_name.value = "";
        phone.value = "";
        email_check.value = "";
        apartment.value = "";
    }
});
