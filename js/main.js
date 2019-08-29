console.log('up and running');

var cards = ['queen', 'queen', 'king', 'king'];
var cardInPlay = [];

var cardOne = cards[0];

cardInPlay.push(cardOne);

var cardTwo = cards[2];

cardInPlay.push(cardTwo);

if (cardInPlay.length === 2) {
    if (cardInPlay[0] === cardInPlay[1]) {
        alert('we have a wiiiinnner')
        console.log('we have a wiiiinnner')

    } else {
        console.log('at least you\'ve tried')
        alert('at least you\'ve tried')
    }
}