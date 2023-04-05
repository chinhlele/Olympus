let entername = document.querySelector("#enter-name");
let enterphone = document.querySelector("#enter-phone");
let enterpassword = document.querySelector("#enter-password");
let enterpasswordagain = document.querySelector("#enter-password-again");
let btn = document.querySelector(".btn");
let error = document.querySelector(".error");
let view = document.querySelector(".fa-eye");

btn.onclick = function () {
    console.log(entername.value);
    if (entername.value == "" || enterphone.value == "" || enterpassword.value == "" || enterpasswordagain.value == "") {
        error.innerHTML = "you have not entered information!";
    } else if (entername.value.length > 10) {
        error.innerHTML = "Full name quá 10 kí tự.";
    } else if (enterpassword.value != enterpasswordagain.value) {
        error.innerHTML = "Password chưa giống nhau.";
    } else if (enterphone.value.length > 11 || enterphone.value.length < 9) {
        error.innerHTML = "số điện thoại nhập sai.";
    } else {
        window.location.href = "success.html";
        localStorage.setItem("fullname", entername.value);
        localStorage.setItem("phone", enterphone.value);
    }
};
view.onclick = function () {
    if (enterpassword.type == "password") {
        enterpassword.type = "text";
    } else {
        enterpassword.type = "password";
    }
};
