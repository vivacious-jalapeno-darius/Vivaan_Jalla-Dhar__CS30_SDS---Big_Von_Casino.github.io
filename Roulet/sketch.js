// Roulet

let sections = 5;
let angles = 360/sections;
let colors = [];
let labelSize = 25;
let rlabel = 1.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noStroke();
  set_pie_colors();
  noLoop(); // Run once and stop
}

function set_pie_colors() {
  for (let i=0; i < angles.length; i++) {
    let red = floor(random(10,255));
    let green = floor(random(10,255));
    let blue = floor(random(10,255));
    colors.push([red, green, blue]);
  }
}

function draw() {
  background(60);
  // colors = [];
  // set_pie_colors()
  pieChart(width / 2, height / 2, 350, angles);
}

function pieChart(xCenter, yCenter, diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
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
    let wText = textWidth(String(angles));
    let hText = textAscent()-textDescent(); 
    // console.log(wText);
    text(angles,
      width/2+cos(lastAngle+radians(angles/2))*diameter*(rlabel/2)-wText/2,
      height/2+sin(lastAngle+radians(angles/2))*diameter*(rlabel/2)+hText/2);
    lastAngle += radians(angles);
  }
}