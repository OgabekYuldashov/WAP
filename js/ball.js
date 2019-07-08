START = 0;
ballVelocity = 0;

$(function () {
    $("#ball").css({
        'top': '0px',
        'left': $(window).width()/2 + 'px'
    });
    setInterval(update, 10);
});


function update() {
    ballVelocity += 1;
    if (parseInt($("#ball").css('top')) > $(window).height()) {
        ballVelocity *= -.9;
    }
    $("#ball").css('top', function(idx, old) {
        return parseInt(old) + ballVelocity + 'px';
    });
}

