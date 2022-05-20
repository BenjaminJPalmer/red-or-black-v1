var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();

function getDeck() {
	var deck = new Array();

	for (var i = 0; i < suits.length; i++) {
		for (var x = 0; x < cards.length; x++) {
			var card = { Value: cards[x], Suit: suits[i] };
			deck.push(card);
		}
	}
	return deck;
}

function shuffle() {
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++) {
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var temp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = temp;
	}
}

function draw() {
    let card = document.createElement("div");
    let value = document.createElement("div");
    let suit = document.createElement("div");
    card.id = "card";
    value.className = "value";
    suit.className = "suit " + deck[0].Suit;

    value.innerHTML = deck[0].Value;
    card.appendChild(value);
    card.appendChild(suit);

    const currentCard = document.getElementById("card")

    if (currentCard) {
        currentCard.remove()
    }
    
    document.getElementById("deck").appendChild(card);
    deck.shift()
}

function load() {
	deck = getDeck();
	shuffle();
}

window.onload = load();