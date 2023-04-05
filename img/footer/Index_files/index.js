$(function () {
    $(".navbar .icon .icon-search").click(function () {
        $(".search").addClass("active");
    });
    $(".navbar .search .top .icon").click(function () {
        $(".search").removeClass("active");
    });
    $(document).mouseup(function (e) {
        var container = $(".search");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".search").removeClass("active");
        }
    });
    $(".navbar .icon .icon-bar").click(function () {
        $(".info").addClass("active");
    });
    $(".navbar .info .top .icon").click(function () {
        $(".info").removeClass("active");
    });

    $(document).mouseup(function (e) {
        var container = $(".info");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".info").removeClass("active");
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
});
