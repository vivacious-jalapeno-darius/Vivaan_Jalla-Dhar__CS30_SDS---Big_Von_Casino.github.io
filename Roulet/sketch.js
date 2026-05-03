// Roulet

let sections = 5;
let angles = 360/sections;
let colors = [];
let labelSize = 25;
let textColour = "white";
let betInput;
let amountOfSections;


// let rlabel = 1.1;

let gameStatus = "start";


function setup() {
  createCanvas(windowWidth, windowHeight);
  // noStroke();
  set_pie_colors();
  noLoop(); // Run once and stop
}

function set_pie_colors() {
  for (let i=0; i < sections; i++) {
    let red = floor(random(10,255));
    let green = floor(random(10,255));
    let blue = floor(random(10,255));
    colors.push([red, green, blue]);
  }
}

function draw() {
  background(0);
  // colors = [];
  // set_pie_colors()
  if (gameStatus === "start") {
    startScreen();
  }
  else if (gameStatus === "gamble") {
    pieChart(width / 2, height / 2, 350, sections);
  }
 
}

function startScreen() {
  textAlign(CENTER, CENTER);
  textSize(150);
  fill(textColour);
  text("Roulet", width/4, height/2);

  textSize(50);
  fill(textColour);
  text("Place bet here", width*(3/4), height*(3/10));

  textSize(50);
  fill(textColour);
  text("# of sections", width*(3/4), height*(3/5));

  input();
  
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
    stroke(1);
    fill(255,255,255,240);
    textSize(labelSize);
    // let wText = textWidth(String(angles));
    // let hText = textAscent()-textDescent(); 
    // // console.log(wText);
    // text(angles,
    //   width/2+cos(lastAngle+radians(angles/2))*diameter*(rlabel/2)-wText/2,
    //   height/2+sin(lastAngle+radians(angles/2))*diameter*(rlabel/2)+hText/2);
    // lastAngle += radians(angles);
  }
}