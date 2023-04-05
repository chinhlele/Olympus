function convertMoney(num, separator) {
    separator = separator === undefined ? "." : separator;
    num = String(num).replace(/[^0-9]/g, "");
    if (!isNaN(num)) {
        var array = num.toString().split("");
        var index = -3;
        while (array.length + index > 0) {
            array.splice(index, 0, separator);
            index -= 4;
        }
        return array.join("");
    }
}
function convertNumber(str) {
    return str.replace(/[^0-9]/g, "");
}

$(function () {
    $(".quantity").change(function () {
        $quantity = $(this).find(":selected").text();
        $pricecore = $(this).closest(".content-shell").find(".pricecore").text();
        $total = parseFloat($(".check .top-check span").text());
        $sum = parseFloat($(this).closest(".content-shell").find(".sum span").text());
        $total = $total - $sum;
        $sum = $pricecore * $quantity;
        $total = $total + $sum;
        $(this).closest(".content-shell").find(".sum span").text($sum);
        $(".check .top-check span").text($total);
        $(".check .bot-check span").text($total);
    });
    $(".shell .top-shell .product-top-shell .icon-shell").click(function () {
        $total = parseFloat($(".check .top-check span").text());
        $sum = parseFloat($(this).closest(".content-shell").find(".sum span").text());
        $total = $total - $sum;
        $(this).closest(".product-top-shell").fadeOut(300);
        $(this).closest(".content-shell").find(".sum span").text($sum);
        $(".check .top-check span").text($total);
        $(".check .bot-check span").text($total);
    });
});
