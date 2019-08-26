(function(){

const cards = document.querySelectorAll('.card');

let moves = 0;
var movesCounter = document.querySelector(".moves");

var cardHand = []

var matchedCards = []

var board = document.getElementById("card-game")

restartButton = document.querySelector('.fa').addEventListener('click', restart);

var clickSound = new Audio;
clickSound.src = "sounds/click.mp3";

var correctSound = new Audio;
correctSound.src = "sounds/correct.mp3";

var wrongSound = new Audio;
wrongSound.src = "sounds/wrong.mp3"

var winSound = new Audio;
winSound.src = "sounds/win.mp3";



function movesNum() {
    moves++;
    if (moves === 1) {
        movesCounter.innerHTML = `1  Move`;
    } else {
        movesCounter.innerHTML = `${moves}  Moves`;
    }
}

function playWrong(){
    wrongSound.play();
}
function playCorrect(){
    correctSound.play();
}
function playWin(){
    winSound.play();
}

function startGame() {
    cards.forEach(card =>card.addEventListener('click', flipCard));
    shuffle();
}

function restart() {
    for (var i in matchedCards) {
        matchedCards[i].classList.remove("matched", "flip");
      }
    for (var i in cardHand) {
        cardHand[i].classList.remove("matched", "flip");
      }
    moves = 0;
    movesCounter.innerHTML = `0 Moves`;
    cardHand = []
    matchedCards = []
    setTimeout(shuffle, 700)

}

function shuffle(){
    cards.forEach(card=>{
        let randomNum= Math.floor(Math.random()*20);
        card.style.order = randomNum;
    })
}

function flipCard() {
    clickSound.play();
    let clickedCard = this;
    if (clickedCard.classList.contains("card")) {
     clickedCard.classList.add("flip");
     cardHand.push(clickedCard);
        }
        if (cardHand.length === 2) {
            board.classList.add('pause')
            movesNum();
            if (cardHand[0].dataset.framework === cardHand[1].dataset.framework){
                setTimeout(playCorrect, 800);
                matched()
             } else{
                 setTimeout(playWrong, 800)
                 setTimeout(notMatched, 700)
            }
        }       
}

function matched() {
cardHand[0].classList.add("matched");
cardHand[1].classList.add("matched");
matchedCards.push(cardHand[0]);
matchedCards.push(cardHand[1]);
cardHand = [];
board.classList.remove('pause');
if (matchedCards.length === 20) {
    setTimeout(playWin, 1000)
}
}

function notMatched() {
    cardHand[0].classList.remove("flip");
    cardHand[1].classList.remove("flip");
    cardHand = []
    board.classList.remove('pause');

}
startGame();
}());
