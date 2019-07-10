(function () {
    "use strict";
    let blank = {   //object that keeps track of the blank cell coordinates
        left: 300,
        top: 300,
        //Returns an array of the neigbours of the blank cell at any given position
        getNeighbours: function () {
            let neighbours = [];
            //Right neighbour
            if(this.left + 100 <= 300){
                neighbours.push({
                    left: this.left + 100,
                    top: this.top
                })
            }
            //Left neighbour
            if(this.left - 100 >= 0){
                neighbours.push({
                    left: this.left - 100,
                    top: this.top
                })
            }
            //Top neighbour
            if(this.top - 100 >= 0){
                neighbours.push({
                    left: this.left,
                    top: this.top - 100
                })
            }
            //Down neighbour
            if(this.top + 100 <= 300){
                neighbours.push({
                    left: this.left,
                    top: this.top + 100
                })
            }
            return neighbours;
        }
    };

//Initializes the pieces at the correct layout upon startup
    let init = function() {
        let divs = $("#puzzlearea div");
        // initialize each piece
        for (let i=0; i< divs.length; i++) {
            let div = $(divs[i]);

            // calculate x and y for this piece
            let x = ((i % 4) * 100) ;
            let y = (Math.floor(i / 4) * 100) ;

            // set basic style and background
            div.addClass("puzzlepiece");
            div.css({
                'left': x +'px',
                'top': y + 'px',
                'background-image': 'url("../img/background.jpg")',
                'background-position': -x + 'px ' + (-y) + 'px'
            });

            // store x and y for later
            div.x = x;
            div.y = y;
        }
    };

//Executed when the document is loaded and ready
    $(document).ready(function () {
        init();
        $("#shufflebutton").click(shuffle);
        $(".puzzlepiece").click(function (event) {
            movePuzzlepiece($(event.target));
        });
        $(".puzzlepiece").mouseover(puzzlePieceMouseOver);
    });

//performs 50 random movements
    function shuffle() {
        for(let i=0; i<50; i++){
            moveRandom();
        }
    }

//Performs a single random move of a piece
    function moveRandom() {
        let neighbours = blank.getNeighbours(); //Getting the coordinates of pieces that can be moved
        let randIndex = Math.floor(Math.random() * neighbours.length);
        let randNeighbour = neighbours[randIndex]; //choosing a random piece from the array

        //getting the actual element at the chosen position
        let piece = $(".puzzlepiece").filter(function () {
            return parseInt(this.style.top) === randNeighbour.top && parseInt(this.style.left) === randNeighbour.left;
        });
        movePuzzlepiece($(piece));  //moving the piece
    }

//Holds mouseover event logic
    function puzzlePieceMouseOver(event) {
        let target = $(event.target);
        if(isMovable(target)){
            target.addClass("movablepiece");
        }else {
            target.removeClass("movablepiece");
        }
    }

//Checks if a JQuery piece object is movable
    function isMovable(div) {
        let currLeft = parseInt(div.css("left"));
        let currTop = parseInt(div.css("top"));

        function canMoveRight() {
            return (currLeft + 100 === blank.left) && currTop === blank.top;
        }
        function canMoveLeft() {
            return (currLeft - 100 === blank.left) && currTop === blank.top;
        }
        function canMoveUp() {
            return (currTop - 100 === blank.top) && currLeft === blank.left;
        }
        function canMoveDown() {
            return (currTop + 100 === blank.top) && currLeft === blank.left;
        }

        if(canMoveUp() || canMoveDown() || canMoveLeft() || canMoveRight()){
            return true;
        }
        return false;
    }

//Takes a JQuery piece object and moves it to the blank cell
    function movePuzzlepiece(current) {
        if(isMovable(current)){
            let left = parseInt(current.css("left"));
            let top = parseInt(current.css("top"));

            current.css({
                'left': blank.left + 'px',
                'top': blank.top + 'px'
            });

            blank.left = left;
            blank.top = top;
        }
    }
})();