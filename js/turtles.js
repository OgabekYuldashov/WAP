$(function () {
    $(window).scroll(turtles);
    turtles();
});

function turtles() {
    let win = $(window);
    let body = $(document.body);
    while (win.scrollTop() + win.height() >= body.height()){
        body.append($("<div>").addClass("turtle"));
    }
}