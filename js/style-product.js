$(function () {
    $(".top-product").click(function () {
        $(this).toggleClass("active");
        $(this).parent().siblings().find(".top-product").removeClass("active");
        $(this).parent().find(".bot-product").slideToggle();
        $(this).parent().siblings().find(".bot-product").slideUp();
    });
});
$(".product-main .sub-product .left-product .sub-thumb img").click(function () {
    $(".thumb img").attr("src", $(this).attr("src"));
});
$(".product-main .shadow__btn ").click(function () {
    $(".card-header").addClass("active");
    setTimeout(() => {
        $(".card-header").removeClass("active");
    }, 2000);
});
