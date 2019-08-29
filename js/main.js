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

function checkForMatch() {
    if (cardInPlay.length === 2) {
        if (cardInPlay[0] === cardInPlay[1]) {
            // alert('we have a wiiiinnner')
            console.log('we have a wiiiinnner')

        } else {
            console.log('at least you\'ve tried')
                // alert('at least you\'ve tried')
        }
    }
}

function flipCard(cardID) {
    console.log(cards[cardID].rank + ' is fipped')
    console.log(cards[cardID].cardImage)
    console.log(cards[cardID].suit)
    cardInPlay.push(cards[cardID].rank)
    checkForMatch();
}

flipCard(0);
flipCard(2);