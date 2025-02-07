class Card {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}

let deck = [
    new Card("Two of Spades", "card-spades-2.png"),
    new Card("Three of Spades", "card-spades-3.png"),
    new Card("Four of Spades", "card-spades-4.png"),
    new Card("Five of Spades", "card-spades-5.png"),
    new Card("Six of Spades", "card-spades-6.png"),
    new Card("Seven of Spades", "card-spades-7.png"),
    new Card("Eight of Spades", "card-spades-8.png"),
    new Card("Nine of Spades", "card-spades-9.png"),
    new Card("Ten of Spades", "card-spades-10.png"),
    new Card("Jack of Spades", "card-spades-J.png"),
    new Card("Queen of Spades", "card-spades-Q.png"),
    new Card("King of Spades", "card-spades-K.png"),
    new Card("Ace of Spades", "card-spades-A.png"),

    new Card("Two of Hearts", "card-hearts-2.png"),
    new Card("Three of Hearts", "card-hearts-3.png"),
    new Card("Four of Hearts", "card-hearts-4.png"),
    new Card("Five of Hearts", "card-hearts-5.png"),
    new Card("Six of Hearts", "card-hearts-6.png"),
    new Card("Seven of Hearts", "card-hearts-7.png"),
    new Card("Eight of Hearts", "card-hearts-8.png"),
    new Card("Nine of Hearts", "card-hearts-9.png"),
    new Card("Ten of Hearts", "card-hearts-10.png"),
    new Card("Jack of Hearts", "card-hearts-J.png"),
    new Card("Queen of Hearts", "card-heartss-Q.png"),
    new Card("King of Hearts", "card-hearts-K.png"),
    new Card("Ace of Hearts", "card-hearts-A.png"),

    new Card("Two of Clubs", "card-clubs-2.png"),
    new Card("Three of Clubs", "card-clubs-3.png"),
    new Card("Four of Clubs", "card-clubs-4.png"),
    new Card("Five of Clubs", "card-clubs-5.png"),
    new Card("Six of Clubs", "card-clubs-6.png"),
    new Card("Seven of Clubs", "card-clubs-7.png"),
    new Card("Eight of Clubs", "card-clubs-8.png"),
    new Card("Nine of Clubs", "card-clubs-9.png"),
    new Card("Ten of Clubs", "card-clubs-10.png"),
    new Card("Jack of Clubs", "card-clubs-J.png"),
    new Card("Queen of Clubs", "card-clubs-Q.png"),
    new Card("King of Clubs", "card-clubs-K.png"),
    new Card("Ace of Clubs", "card-clubs-A.png"),

    new Card("Two of Diamonds", "card-diamonds-2.png"),
    new Card("Three of Diamonds", "card-diamonds-3.png"),
    new Card("Four of Diamonds", "card-diamonds-4.png"),
    new Card("Five of Diamonds", "card-diamonds-5.png"),
    new Card("Six of Diamonds", "card-diamonds-6.png"),
    new Card("Seven of Diamonds", "card-diamonds-7.png"),
    new Card("Eight of Diamonds", "card-diamonds-8.png"),
    new Card("Nine of Diamonds", "card-diamonds-9.png"),
    new Card("Ten of Diamonds", "card-diamonds-10.png"),
    new Card("Jack of Diamonds", "card-diamonds-J.png"),
    new Card("Queen of Diamonds", "card-diamonds-Q.png"),
    new Card("King of Diamonds", "card-diamonds-K.png"),
    new Card("Ace of Diamonds", "card-diamonds-A.png"),
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