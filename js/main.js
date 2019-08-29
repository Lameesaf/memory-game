console.log('up and running');

var cards = ['queen', 'queen', 'king', 'king'];
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
    console.log(cards[cardID] + ' is fipped')
    cardInPlay.push(cardID)
    checkForMatch();
}

flipCard(0);
flipCard(2);