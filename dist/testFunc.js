// let myAdd: (x: number, y: number) => number ;
// myAdd =  function(x: number, y: number): number { return x + y; };
// let myAdd1: (baseValue: number, increment: number) => number =
//     function(x, y) { return x + y; };
// #error
// let myAdd2: (baseValue, increment) => number =
// function(x:number, y:number) { return x + y; };
// function buildName(firstName: string, lastName:string = "Smith") {
//     return firstName + " " + lastName;
// }
// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
//---------------------
// interface Card {
//     suit: string;
//     card: number;
// }
// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck,name:string): () => Card;
// }
// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     // NOTE: The function now explicitly specifies that its callee must be of type Deck
//     createCardPicker: function(this: Deck,name:string) {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
// let cardPicker = deck.createCardPicker("aa");
// let pickedCard = cardPicker();
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);
//------------------------
// interface UIElement {
//     addClickListener(onclick: (this: void, e: Event) => void): void;
// }
// class Handler {
//     info: string;
//     onClickBad(this: Handler, e: Event) {
//         // oops, used this here. using this callback would crash at runtime
//         this.info = e.type;
//         console.log('onClickBad clicked!');
//     }
//     onClickGood(this: void, e: Event) {
//         // can't use this here because it's of type void!
//         console.log('onClickGood clicked!');
//     }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickGood); // error!
//------------------
// let suits = ["hearts", "spades", "clubs", "diamonds"];
// function pickCard(x:any): any {
//     // Check to see if we're working with an object/array
//     // if so, they gave us the deck and we'll pick the card
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     // Otherwise just let them pick the card
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }
// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
var suits = ["hearts", "spades", "clubs", "diamonds"];
// function pickCard(x:any):any{
//     return x;
// }
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
//# sourceMappingURL=testFunc.js.map