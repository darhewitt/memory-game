const cards = document.querySelectorAll('.card');

var cardHand = []

var matchedCards = []

var board = document.getElementById("card-game")


function startGame() {
    cards.forEach(card =>card.addEventListener('click', flipCard));
}


function flipCard() {
    let clickedCard = this;
    if (clickedCard.classList.contains("card")) {
     clickedCard.classList.add("flip");
     cardHand.push(clickedCard);
        }
        if (cardHand.length === 2) {
            board.classList.add('pause')
            if (cardHand[0].dataset.framework === cardHand[1].dataset.framework){
                matched()
             } else{
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