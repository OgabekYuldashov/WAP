$(function () {
    //Prepoulating with boys
    $("#people .person").addClass("boy");
    $("#add").click(pupulate);

    $("#kill").click(function () {
        kill(getGender());
    });

    $("#cleanup").click(cleanup);
    $("#stomp").click(stomp);
    $("#enrage").click(enrage);
    $("#patrol").click(patrol);
});

function getGender() {
    return $('input:checked').val();
}
function pupulate() {
    for(let i=0; i<5; i++){
        $("#people").append($("<div>").addClass("person " + getGender()));
    }
}

function kill(gender) {
    //let gender = getGender();
    let people = $("#people ." + gender);
    for(let i=0; i<people.length/5; i++){
        let randIndex = Math.floor(Math.random() * people.length);
        $(people[randIndex]).removeClass(gender);
        $(people[randIndex]).addClass("splat");
    }
}

function cleanup() {
    $("#people .splat").remove();
}
function stomp() {
    kill("boy");
    kill("girl");
    $("#raptor").css("top", function (idx, old) {
        let val = parseInt(old);
        return val <= 10 ? "85px" : "10px";
    })
}
function enrage() {
    $("h1").toggleClass("enrage");
    $("#raptor").toggleClass("enlarged");
}
var timer;

function patrol() {
    clearInterval(timer);
    timer = setInterval(patrolRight, 20);
}

function patrolRight() {
    $('#raptor').css('left', function(idx, old) {
        if (parseInt(old) >= 300) {
            clearInterval(timer);
            timer = setInterval(patrolLeft, 20);
        }
        return parseInt(old) + 4 + 'px'
    });
}
function patrolLeft() {
    $('#raptor').css('left', function(idx, old) {
        if (parseInt(old) <= 10) {
            clearInterval(timer);
            $(this).css({
                'top': '5px',
                'left': '10px'
            });
        }
        return parseInt(old) - 4 + 'px';
    });
}