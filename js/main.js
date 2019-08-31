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
            document.getElementById('score').innerHTML = "<h4>score :" + score + "</h4>"

        } else {
            setTimeout(() => { alert('at least you\'ve tried') }, 100)

        }
    }
}

function flipCard() {
    var cardId = this.getAttribute('data-id')
    console.log(cards[cardId].rank + ' is fipped')
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)
    cardInPlay.push(cards[cardId].rank)
    this.setAttribute('src', cards[cardId].cardImage)
    checkForMatch();
}

function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png")
        cardElement.setAttribute('data-id', i)
        cardElement.addEventListener('click', flipCard)
        document.getElementById('game-board').appendChild(cardElement)
    }
}

var b = document.getElementById('b1');

b.addEventListener('click', reset)

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