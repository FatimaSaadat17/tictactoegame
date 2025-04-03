let main = document.querySelector(".main");
let reset = document.querySelector(".reset");
let squares = document.querySelectorAll(".squares");
let turn_player = true;
let message = document.querySelector(".msg");
const winPatterns = [[0,1,2], [0,3,6], [0,4,8],[1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]];

squares.forEach((box) => {
    box.addEventListener("click", function turn() {
        if (turn_player && box.innerText === "") {
            box.innerText = "X";
            turn_player = false;
            setTimeout(() => {
                computerTurn();
                checkWinner();
            },750) }
        })
    })
        function computerTurn() {
            arr_squares = [...squares];
            let emptySquares = arr_squares.filter(empty => empty.innerText === "");
            number = (Math.floor(Math.random() * emptySquares.length));
            if (emptySquares.length > 0) {
                emptySquares[number].innerText = "O";
                turn_player = true;
            }
            }

function checkWinner() {
    for (let pattern of winPatterns) {
        // my method
        let allX = pattern.every(position => squares[position].innerText === "X"); // checks every position and returns true if all are true
        let allO = pattern.every(position => squares[position].innerText === "O")
        if (allX) {
            message.innerText = "Congratulations! you have won the game!"
        }
        if (allO) {
            message.innerText = "Oh no! you lost! Try again?"
        }
    }
}

let endGame = reset.addEventListener("click", function end() {
    for (square of squares) {
        square.innerText = "";
    };
    message.innerText = "";
})
        // shradda's method
        /*let pos1 = squares[pattern[0]].innerText;
        let pos2 = squares[pattern[1]].innerText;
        let pos3 = squares[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner")
            }
        } */