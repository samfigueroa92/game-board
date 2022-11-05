const BlackJack = () => {
//   class Card {
//     constructor(face, value, suit) {
//       this.face = face;
//       this.value = value;
//       this.suit = suit;
//     }
//   }

//   class DeckOfCards {
//     constructor() {
//       this.cards = [];
//       this.createDeck();
//       this.shuffles(this.cards);
//     }

//     createDeck() {
//       const suits = ["hearts", "spades", "diamonds", "clubs"];

//       for (let j = 0; j < suits.length; j++) {
//         for (let i = 1; i <= 13; i++) {
//           if (i === 1) {
//             this.cards.push(new Card("Ace", i, suits[j]));
//           } else if (i === 11) {
//             this.cards.push(new Card("Jack", 10, suits[j]));
//           } else if (i === 12) {
//             this.cards.push(new Card("Queen", 10, suits[j]));
//           } else if (i === 13) {
//             this.cards.push(new Card("King", 10, suits[j]));
//           } else {
//             this.cards.push(new Card(i, i, suits[j]));
//           }
//         }
//       }
//     }

//     shuffles(array) {
//       let i = 0;
//       let j = array.length;

//       while (j) {
//         i = Math.floor(Math.random() * j--);
//         [array[j], array[i]] = [array[i], array[j]];
//       }
//       return array;
//     }

//     deal() {
//       let player = [];
//       let computer = [];

//       while (player.length < 2 || computer.length < 2) {
//         player.push(this.cards.pop());
//         computer.push(this.cards.pop());
//       }

//       let sumOfPlayer = player[0].value + player[1].value;
//       let sumOfComputer = computer[0].value + computer[1].value;
//       let whoWon;

//       if (sumOfPlayer > sumOfComputer) {
//         whoWon = "Player One wins!!!";
//       } else if (sumOfComputer > sumOfPlayer) {
//         whoWon = "Player Two wins!!!";
//       } else {
//         whoWon = "Draw!!";
//       }

//       return { player, computer, whoWon };
//     }
//   }

  return (
    <div>
      <h1>Black Jack</h1>
      <p>here's how to play</p>
    </div>
  );
};

export default BlackJack;
