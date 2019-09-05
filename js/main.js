console.log('up and running');

var cards = [{
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.jpg'
    },
    {
        rank: 'queen',
        suit: 'clubs',
        cardImage: 'images/queen-of-clubs.jpg'
    },
    {
        rank: 'king',
        suit: 'spades',
        cardImage: 'images/king-of-spades.jpg'
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.jpg'
    },
    {
        rank: 'joker',
        suit: '',
        cardImage: 'images/joker.jpg'
    }, {
        rank: 'joker',
        suit: '',
        cardImage: 'images/joker2.jpg'
    }, {
        rank: 'jack',
        suit: 'spades',
        cardImage: 'images/jack-of-spades.jpg'
    }, {
        rank: 'jack',
        suit: 'diamonds',
        cardImage: 'images/jack-of-diamonds.jpg'
    }, {
        rank: '10',
        suit: 'spades',
        cardImage: 'images/10-of-spades.jpg'
    }, {
        rank: '10',
        suit: 'diamonds',
        cardImage: 'images/10-of-diamonds.jpg'
    }, {
        rank: '8',
        suit: 'hearts',
        cardImage: 'images/8-of-hearts.jpg'
    }, {
        rank: '8',
        suit: 'clubs',
        cardImage: 'images/8-of-clubs.jpg'
    }, {
        rank: '6',
        suit: 'diamonds',
        cardImage: 'images/6-of-diamonds.jpg'
    }, {
        rank: '6',
        suit: 'clubs',
        cardImage: 'images/6-of-clubs.jpg'
    }, {
        rank: '3',
        suit: 'diamonds',
        cardImage: 'images/3-of-diamonds.jpg'
    }, {
        rank: '3',
        suit: 'clubs',
        cardImage: 'images/3-of-clubs.jpg'
    }, {
        rank: '2',
        suit: 'spades',
        cardImage: 'images/2-of-spades.jpg'
    },
    {
        rank: '2',
        suit: 'clubs',
        cardImage: 'images/2-of-clubs.jpg'
    }
];
var cardInPlay = [];
var p1score = 0;
var p2score = 0;
var turn = 9;
var winner;

function checkForMatch() {


    if (cardInPlay.length % 2 == 0) {
        if (cardInPlay[cardInPlay.length - 1] === cardInPlay[cardInPlay.length - 2]) {
            if (turn % 2 == 0) {
                p2score += 1;
                document.getElementById('p2score').innerHTML = p2score
            } else {
                p1score += 1;
                document.getElementById('p1score').innerHTML = p1score
            }
            turn += 1;
        }
        turn -= 1;
    }

    if (cardInPlay.length == 18) {
        if (p1score > p2score) {
            winner = 'first player';
        } else {
            if (p2score > p1score) {
                winner = 'second player';
            } else {
                winner = 'the game'
            }
        }
        setTimeout(() => { alert('the winner is ' + winner) }, 100)
        setTimeout(reset, 200)

    }
}
cardarray = []
cardimage = []

function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardInPlay.push(cards.find(function(card) { return card.cardImage == cardimage[cardId] }).rank)
    this.setAttribute('src', cardimage[cardId])
    checkForMatch();
}

function random() {
    for (var i = 0; i < cards.length; i++) {
        var img = document.querySelectorAll('img')[i];
        var cardId = cardarray[Math.floor(Math.random() * cardarray.length)]
        cardarray.splice(cardarray.indexOf(cardId), 1)
        cardimage.push(cards[cardId].cardImage)
        img.setAttribute('src', cards[cardId].cardImage)
    }
    setTimeout(() => {
        for (var i = 0; i < cards.length; i++) {
            img = document.querySelectorAll('img')[i];
            img.setAttribute('src', "images/back.jpg")
        }
    }, 5000)



}


function createBoard() {
    cardarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    for (var i = 0; i < 18; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.jpg")
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
    turn = 9;
    p1score = 0;
    p2score = 0;
    cardInPlay = []
    cardimage = []
    document.getElementById('p1score').innerHTML = 0
    document.getElementById('p2score').innerHTML = 0
    createBoard();
}
var start = document.getElementById("start")

start.addEventListener('click', random);
createBoard();