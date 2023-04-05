$(function () {
    $(".navbar .icon .icon-search").click(function () {
        $(".search").addClass("active");
        $(".overlay").addClass("active");
    });
    $(".navbar .search .top .icon").click(function () {
        $(".search").removeClass("active");
        $(".overlay").removeClass("active");
    });
    $(document).mouseup(function (e) {
        var container = $(".search");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".search").removeClass("active");
            $(".overlay").removeClass("active");
        }
    });
    $(".navbar .icon .icon-bar").click(function () {
        $(".info").addClass("active");
        $(".overlay-1").addClass("active");
    });
    $(".navbar .info .top .icon").click(function () {
        $(".info").removeClass("active");
        $(".overlay-1").removeClass("active");
    });

    $(document).mouseup(function (e) {
        var container = $(".info");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".info").removeClass("active");
            $(".overlay-1").removeClass("active");
        }
    });

    // sign-in----->>>>

    // $(".navbar .collapse .d-flex .in ").click(function () {
    //     $(".navbar .bacg").addClass("active");
    // });
    // $(".navbar .collapse .d-flex .in ").click(function () {
    //     $(".navbar .bacg").removeClass("active");
    // });
    // $(document).mouseup(function (e) {
    //     var container = $(".bacg .overplay");

    //     // if the target of the click isn't the container nor a descendant of the container
    //     if (!container.is(e.target) && container.has(e.target).length === 0) {
    //         $(".bacg .overplay").removeClass("active");
    //     }
    // });

    $(".navbar .navbar-nav .sub").hover(function () {
        $(".menu-main").toggleClass("active");
    });

    $(".navbar .bar").click(function () {
        $(".navbar-nav").addClass("active");
        $(".xmark").addClass("active");
    });
    $(document).mouseup(function (e) {
        var container = $(".navbar-nav");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".navbar-nav").removeClass("active");
            $(".navbar-nav").removeClass("active");
        }
    });
    $(".navbar .xmark i").click(function () {
        $(".navbar-nav").removeClass("active");
        $(".xmark").removeClass("active");
    });
    $(document).mouseup(function (e) {
        var container = $(".xmark");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".xmark").removeClass("active");
            $(".xmark").removeClass("active");
        }
    });
});
let sign_in = document.querySelector(".in");
let general = document.querySelector(".general");
let overlay2 = document.querySelector(".overlay-2");
sign_in.addEventListener("click", function () {
    general.classList.add("general-active");
    overlay2.classList.add("active");
});
$(document).mouseup(function (e) {
    var container = $(".general");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".general").removeClass("general-active");
        $(".overlay-2").removeClass("active");
    }
});
let to_top = document.querySelector(".navbar .back-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        to_top.classList.add("active");
    } else {
        to_top.classList.remove("active");
    }
});
AOS.init();
$(function () {
    $(".navbar .phone-top").click(function () {
        $(".content-phone").addClass("active");
        setTimeout(() => {
            $(".content-phone").removeClass("active");
        }, 3000);
    });
});
// sign_in

// let email_address = document.querySelector(".general #enter-email");
// let email_password = document.querySelector(".general #enter-password");
// function showError(input, message) {
//     let parent_input = input.parentElement;
//     parent_input.classList.add("error");
//     parent_input.querySelector(".error-general").innerHTML = message;
// }
// function showSuccess(input) {
//     let parent_input = input.parentElement;
//     parent_input.classList.remove("error");
//     parent_input.querySelector(".error-general").innerHTML = "";
// }
// function check_name() {
//     let check = true;
//     if (name_contact.value.length > 15) {
//         showError(name_contact, "Enter a first name");
//         check = false;
//     } else {
//         showSuccess(name_contact);
//     }
//     return check;
// }
// function check_password() {
//     let check = true;
//     if (phone_contact.value.length < 9 || phone_contact.value.length > 11) {
//         showError(phone_contact, "Enter a first phone");
//         check = false;
//     } else {
//         showSuccess(phone_contact);
//     }
//     return check;
// }
