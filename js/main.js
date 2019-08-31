console.log('up and running');

var cards = [{
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    }
];
var cardInPlay = [];
var score = 0;

function checkForMatch() {


    if (cardInPlay.length === 2) {
        if (cardInPlay[0] === cardInPlay[1]) {
            setTimeout(() => { alert('we have a wiiiinnner') }, 100)
            score += 1;
            document.getElementById('score').innerHTML = "<h4>score : " + score + "</h4>"
            setTimeout(reset, 150)


        } else {
            setTimeout(() => { alert('at least you\'ve tried') }, 100)
            setTimeout(reset, 100)



        }
    }
}
cardarray = []

function flipCard() {

    var cardId = cardarray[Math.floor(Math.random() * cardarray.length)]
    console.log(cardId)
    cardarray.splice(cardarray.indexOf(cardId), 1)
    console.log(cards[cardId].rank + ' is fipped')
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)
    cardInPlay.push(cards[cardId].rank)
    this.setAttribute('src', cards[cardId].cardImage)
    checkForMatch();
}

function createBoard() {
    cardarray = [0, 1, 2, 3];
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png")
        cardElement.setAttribute('data-id', i)
        cardElement.addEventListener('click', flipCard)
        document.getElementById('game-board').appendChild(cardElement)
    }
}

function reset() {
    for (var i = 0; i < cards.length; i++) {
        var element = document.querySelectorAll('img')
        var div = document.getElementById('game-board');
        div.removeChild(element[0]);
    }
    cardInPlay = []
    createBoard();
}

createBoard();