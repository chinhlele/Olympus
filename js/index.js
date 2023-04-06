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
    $(".character .play .role .sub-role ").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $img = $(this).attr("dataimg");
        $(".character .thumb img").attr("src", $img);
        $(".character .thumb img").addClass("fade");
        setTimeout(() => {
            $(".character .thumb img").removeClass("fade");
        }, 500);
        $title = $(this).attr("dataname");

        $(".character .info-character h3").text($title);
        $contetnt = $(this).attr("datacontent");
        $(".character .info-character .content p").text($contetnt);
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
    $(".part-slide").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 665,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

let list_code = ["1234567", "1234576", "1234765"];
let list_gift = [
    {
        name: "Akali",
        img: "img/skin/Akali_9.png",
    },
    {
        name: "Kaisa",
        img: "img/skin/Kaisa_15.jpg",
    },
    {
        name: "Evelynn",
        img: "img/skin/Evelynn_6.png",
    },
    {
        name: "Ahri",
        img: "img/skin/Ahri_16.jpg",
    },
];
let submit_random = document.querySelector(".main-code .enter");
let submit_input = document.querySelector(".main-code input");
let popup_give = document.querySelector(".main-code .pop-up");
let popup_img = document.querySelector(".main-code .pop-up img");
let error = document.querySelector(".main-code .error");
let name_popup = document.querySelector(".main-code .pop-up h3");
let thanks = document.querySelector(".main-code .btn-pop-up");
let fire_works = document.querySelector(".main-code .fire-works");
let audio = document.querySelector(".main-code .music audio");
let overlay = document.querySelector(".overlay");
submit_random.addEventListener("click", function () {
    if (list_code.includes(submit_input.value)) {
        list_code.splice(list_code.indexOf(submit_input.value), 1);
        let rd = Math.floor(Math.random() * list_gift.length);
        popup_give.classList.add("active");
        fire_works.classList.add("active");
        overlay.classList.add("active");
        popup_img.setAttribute("src", list_gift[rd].img);
        name_popup.innerHTML = list_gift[rd].name;
        submit_input.value = "";
        audio.play();
        setTimeout(() => {
            popup_give.classList.remove("active");
            overlay.classList.remove("active");
            audio.pause();
        }, 5000);
        setTimeout(() => {
            fire_works.classList.remove("active");
        }, 1000);
    } else {
        error.classList.add("active");
        setTimeout(() => {
            error.classList.remove("active");
        }, 3000);
    }
});
thanks.addEventListener("click", function () {
    popup_give.classList.remove("active");
});
AOS.init();
