$(function () {
    $(".pick-shop .find ul li ").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $dataid = $(this).attr("dataid");
        if ($dataid == "#all") {
            $(".part").addClass("active");
        } else {
            $($dataid).addClass("active");
            $($dataid).siblings().removeClass("active");
        }
        $(".part-slide").slick("refresh");
    });
    $(".pick-shop-bot .title-roles").click(function () {
        $(".find").slideToggle(200);
    });
    $(".pick-shop-bot .find ul li").click(function () {
        setTimeout(() => {
            $(".find").slideUp(200);
        }, 200);
    });
    $(".sub-pick-mid .title-roles").click(function () {
        $("fa-chevron-down").addClass("active");
    });
    $(".pick-shop-bot .search-shop i").click(function () {
        $("input").slideToggle("active");
    });
});
$(".list-part .part-slide button ").click(function () {
    $(".card-header").addClass("active");
    setTimeout(() => {
        $(".card-header").removeClass("active");
    }, 2000);
});
