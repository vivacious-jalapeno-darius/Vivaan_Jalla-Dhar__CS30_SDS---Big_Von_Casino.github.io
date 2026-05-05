// Roulette

let rouletteGreen = "#46b96d";
let casinoRed;
let casinoGold;
let rouletteBlack = "black";

let backgroundCircleDiameter = 375;
let sections;
let angles;
let colors = [];
let labelSize = 25;
let textColour = "white";
let betInput;
let amountOfSections;


// let rlabel = 1.1;

let gameStatus = "start";


function setup() {
  createCanvas(windowWidth, windowHeight);

  casinoRed = getItem('theme_red');
  casinoGold = getItem('theme_gold');
  
  betInput = createInput();
  betInput.size(200, 50);
  betInput.position(width * (3/4) - 100, height * (2/5) - 25); 

  amountOfSections = createInput();
  amountOfSections.size(200, 50);
  amountOfSections.position(width * (3/4) - 100, height * (7/10) - 25); 
}

function set_pie_colors() {
  for (let i = 0; i < sections; i++) {
    if (i === 0) {
      colors.push(rouletteGreen);
    }
    else if (i % 2 === 0) {
      colors.push(casinoRed);
    }
    else {
      colors.push(rouletteBlack);
    }
  }
}

function draw() {
  background(0);
  
  
  if (gameStatus === "start") {
    titleText();
  } 
  else if (gameStatus === "gamble") {
    betInput.hide();
    amountOfSections.hide();
    background(casinoGold);
    
    pieChart(width / 2, height / 2, 350, sections);
  }
}

function keyPressed() {
  if (keyCode === 13 && gameStatus === "start" && amountOfSections.value() > 0) {
    sections = int(amountOfSections.value());
    angles = 360 / sections; 
    set_pie_colors();
    gameStatus = "gamble";
  }
}
function titleText() {
  textAlign(CENTER, CENTER);
  textSize(150);
  fill(textColour);
  text("Roulette", width/4, height/2);

  textSize(50);
  fill(textColour);
  text("Place bet here", width*(3/4), height*(3/10));

  textSize(50);
  fill(textColour);
  text("# of sections", width*(3/4), height*(3/5));
}

function input() {
  betInput = createInput();
  betInput.size(200, 50);
  betInput.position(width*(3/4) - 100, height*(2/5) - 25); 

  amountOfSections = createInput();
  amountOfSections.size(200, 50);
  amountOfSections.position(width*(3/4) - 100, height*(7/10) - 25); 
}

function pieChart(xCenter, yCenter, diameter, data) {
  let lastAngle = 0;
  fill(rouletteBlack);
  circle(width/2, height/2, backgroundCircleDiameter);
  for (let i = 0; i < data; i++) {
    noStroke();
    fill(colors[i]);
    arc(
      xCenter,
      yCenter,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles)
    );
    lastAngle += radians(angles);
  }
  

  
} 