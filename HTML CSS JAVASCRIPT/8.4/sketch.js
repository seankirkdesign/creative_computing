var bgcolor;
var rectcolor;
var rectPos;
var rectSize;

var buttonBg;
var buttonRect;
var buttonRectPos;
var buttonRectSize;

var xPos = 250;
var yPos = 250;

var xSize = 50;
var ySize = 50;

function setup() {
  canvas = createCanvas(500, 500);
  bgcolor = color(200);

  buttonBg = createButton("background");
  buttonBg.mousePressed(changebgColor);

  buttonRect = createButton("color");
  buttonRect.mousePressed(changeRectColor);

  buttonRectPos = createButton("position");
  buttonRectPos.mousePressed(changeRectPos);

  buttonRectSize = createButton("size");
  buttonRectSize.mousePressed(changeRectSize);
}

function changebgColor() {
  bgcolor = color(random(255), random(255), random(255));
}

function changeRectColor() {
  rectcolor = color(random(255), random(255), random(255));
}

function changeRectPos() {
  xPos = random(0,500);
  yPos = random(0, 500);
}

function changeRectSize() {
  xSize = random(30, 400);
  ySize = random(30, 400);
}

// function mousePressed() {
//   changeColor();
// }

function draw() {
  background(bgcolor);
  noStroke();
  fill(rectcolor, rectcolor, rectcolor);
  rectMode(CENTER);
  rect(xPos, yPos, xSize, ySize);
}
