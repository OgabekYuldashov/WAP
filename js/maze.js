
const game = (function() {
    let touchCount = 0;
    let gameStarted = false;

    function incCount(){
        touchCount++;
    }
    function newGame() {
        touchCount = 0;
        gameStarted = true;
    }
    function gameResult() {
        if(gameStarted){
            if(touchCount === 0){
                $("#status").text("You won ;)");
            }else {
                mouseOverEffect();
                $("#status").text("You Lost ;(");
            }
            setTimeout(function () {
                $("#status").text("Click the \"S\" to begin.");
            }, 3000);
            gameStarted = false;
        }else {
            window.alert("Click 'Start' to start the game");
        }
    }

    return {
        incrementCount: incCount,
        resetCounter: newGame,
        getGameResult: gameResult
    }
})();

function mouseOverEffect() {
    $(".boundary").addClass("youlose");
    game.incrementCount();
}

function start() {
    mouseLeaveEffect();
    game.resetCounter();
}

function mouseLeaveEffect() {
    $(".boundary").removeClass("youlose");
}

$(document).ready(function () {
    let bounds = $(".boundary");
    bounds.mouseover(mouseOverEffect);
    bounds.mouseleave(mouseLeaveEffect);
    $("#start").click(start);
    $("#end").mouseover(game.getGameResult);
});
