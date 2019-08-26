const cards = document.querySelectorAll('.card');

var cardHand = []

var matchedCards = []

var board = document.getElementById("card-game")

var clickSound = new Audio;
clickSound.src = "sounds/click.mp3";

var correctSound = new Audio;
correctSound.src = "sounds/correct.mp3";

var wrongSound = new Audio;
wrongSound.src = "sounds/wrong.mp3"


function playWrong(){
    wrongSound.play();
}
function playCorrect(){
    correctSound.play();
}

function startGame() {
    cards.forEach(card =>card.addEventListener('click', flipCard));
    shuffle();
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
console.log(matchedCards);

board.classList.remove('pause');
}

function notMatched() {
    cardHand[0].classList.remove("flip");
    cardHand[1].classList.remove("flip");
    cardHand = []
    board.classList.remove('pause');

}
startGame();


