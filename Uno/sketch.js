// Uno


let cash;

let gameStatus = "start";


let cardColourOptions = ["red", "blue", "green", "yellow", "wild"];
let cardColour;



function setup() {

  cash = getItem('casino_cash');

  createCanvas(windowWidth, windowHeight);
  cardColour = random(cardColourOptions);
  console.log(cardColour);
  console.log(cash);
}

function draw() {
  background(220);
}






// --------------- CLASSES --------------- \\
class Card {
  constructor(colour, type) {
    this.colour = colour;
    this.type = type;
  }

  distributeCards() {
    if (gameStatus === "start") {
      
    }
  }

}

