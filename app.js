const cards = document.querySelectorAll('.card');

var board = document.getElementById("card-game")

function flipCard() {
    let clickedCard = this;
    if (clickedCard.classList.contains("card")) {
     clickedCard.classList.add("flip");
     cardHand.push(clickedCard);
        }
    }