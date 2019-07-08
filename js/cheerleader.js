$(function () {
   $(window).keypress(keypress);
});

function keypress(event) {
    $("<li>").text(String.fromCharCode(event.which).toUpperCase() + "!")
        .appendTo($("#cheers"));
    setTimeout(function () {
        $("#cheers li").first().remove();
    }, 2000);
}