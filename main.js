class Card {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}

let deck = [
    new Card("Two of Spades", "spades2.png"),
    new Card("Three of Spades", "spades3.png"),
    new Card("Four of Spades", "spades4.png"),
    new Card("Five of Spades", "spades5.png"),
    new Card("Six of Spades", "spades6.png"),
    new Card("Seven of Spades", "spades7.png"),
    new Card("Eight of Spades", "spades8.png"),
    new Card("Nine of Spades", "spades9.png"),
    new Card("Ten of Spades", "spades10.png"),
    new Card("Jack of Spades", "spadesJ.png"),
    new Card("Queen of Spades", "spadesQ.png"),
    new Card("King of Spades", "spadesK.png"),
    new Card("Ace of Spades", "spadesA.png"),

    new Card("Two of Hearts", "hearts2.png"),
    new Card("Three of Hearts", "hearts3.png"),
    new Card("Four of Hearts", "hearts4.png"),
    new Card("Five of Hearts", "hearts5.png"),
    new Card("Six of Hearts", "hearts6.png"),
    new Card("Seven of Hearts", "hearts7.png"),
    new Card("Eight of Hearts", "hearts8.png"),
    new Card("Nine of Hearts", "hearts.png"),
    new Card("Ten of Hearts", "hearts10.png"),
    new Card("Jack of Hearts", "heartsJ.png"),
    new Card("Queen of Hearts", "heartssQ.png"),
    new Card("King of Hearts", "heartsK.png"),
    new Card("Ace of Hearts", "heartsA.png"),

    new Card("Two of Clubs", "clubs2.png"),
    new Card("Three of Clubs", "clubs3.png"),
    new Card("Four of Clubs", "clubs4.png"),
    new Card("Five of Clubs", "clubs5.png"),
    new Card("Six of Clubs", "clubs6.png"),
    new Card("Seven of Clubs", "clubs7.png"),
    new Card("Eight of Clubs", "clubs8.png"),
    new Card("Nine of Clubs", "clubs9.png"),
    new Card("Ten of Clubs", "clubs10.png"),
    new Card("Jack of Clubs", "clubsJ.png"),
    new Card("Queen of Clubs", "clubsQ.png"),
    new Card("King of Clubs", "clubsK.png"),
    new Card("Ace of Clubs", "clubsA.png"),

    new Card("Two of Diamonds", "diamonds2.png"),
    new Card("Three of Diamonds", "diamonds3.png"),
    new Card("Four of Diamonds", "diamonds4.png"),
    new Card("Five of Diamonds", "diamonds5.png"),
    new Card("Six of Diamonds", "diamonds6.png"),
    new Card("Seven of Diamonds", "diamonds7.png"),
    new Card("Eight of Diamonds", "diamonds8.png"),
    new Card("Nine of Diamonds", "diamonds9.png"),
    new Card("Ten of Diamonds", "diamonds10.png"),
    new Card("Jack of Diamonds", "diamondsJ.png"),
    new Card("Queen of Diamonds", "diamondsQ.png"),
    new Card("King of Diamonds", "diamondsK.png"),
    new Card("Ace of Diamonds", "diamondsA.png"),
];

function shuffle(origDeck) {
    let shuffledDeck = [];
    let cardShuffle;
    while (origDeck.length > 0) {
        cardShuffle = Math.floor(Math.random() * origDeck.length);
        shuffledDeck.push(origDeck[cardShuffle]);
        origDeck.splice(cardShuffle, 1);
    }
    return shuffledDeck;
}

console.log("Unshuffled Deck:");
console.log("Size: " + deck.length);
for (i = 0; i < deck.length; i++) {
    console.log(deck[i].name);
}

deck = shuffle(deck);

console.log("Shuffled Deck:");
console.log("Length: " + deck.length);
for (i = 0; i < deck.length; i++) {
    console.log(deck[i].name);
}