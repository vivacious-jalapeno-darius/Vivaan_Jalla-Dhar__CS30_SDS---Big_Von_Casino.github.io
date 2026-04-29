// Uno





let cardColourOptions = ["red", "blue", "green", "yellow", "wild"];
let cardColour;



function setup() {

  let cash = getItem('casino_cash');

  createCanvas(windowWidth, windowHeight);
  cardColour = random(cardColourOptions);
  console.log(cardColour);
  console.log(cash);
}

function draw() {
  background(220);
}






// --------------- CLASSES --------------- \\
// class Card {
//   constructor(colour, type) {
//     this.colour = colour;
//     this.type = type;
//   }

//   // redCard() {
//   //   if (cardColour === cardColourOptions[0]) {
//   //     console.log("red");
//   //   }
//   // }

//   // blueCard() {
//   //   if (cardColour === cardColourOptions[1]) {
//   //     console.log("blue");
//   //   }
//   // }

//   // greenCard() {
//   //   if (cardColour === cardColourOptions[2]) {
//   //     console.log("green");
//   //   }
//   // }

//   // yellowCard() {
//   //   if (cardColour === cardColourOptions[3]) {
//   //     console.log("yellow");
//   //   }
//   // }

//   // wildCard() {
//   //   if (cardColour === cardColourOptions[4]) {
//   //     console.log("wild");
//   //   }
//   // }

// }

