console.log("Up and running!");



var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}



]





var cardsInPlay = [];
function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}

}
function flipCard(cardId) {
	checkForMatch();
	console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards.cardImage);
console.log(cards.suit);
}

flipCard(0);
flipCard(2);









/*
var myArray = [
{
color: 'red',
flower: 'rose',
petals: 20
},
{
color: 'blue',
flower: 'violet',
petals: 6
}
];*/

/* 

if (length.cardsInPlay === 2) {

}
else if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}

*/