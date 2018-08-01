var time = 0;
var circleX;
var circleY;
var space = 25;

var sizeX;
var sizeY;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  var circleX = 0.02;
  var circleY = 0.031;
  var speedX = 100;
  var speedY = 80;
}

function draw() {
  translate(width/2, height/2);
  rotate(45);
  rectMode(CENTER);

  background(255);
  time = time + 0.06;

  var circleSize = 10;
  var rectCorner = 1;

  sizeXY = 500;


  for (var circleX = 0; circleX < sizeXY; circleX += space) {
    for (var circleY = 0; circleY < sizeXY; circleY += space) {
    var noiseVal = noise(Math.sin(circleX * 10), Math.sin(circleY * 10), time);


    circleSize = noiseVal * 20;
    rectCorner = noiseVal * 10;

    fill(0);
    rect(circleX-(sizeXY/2), circleY-(sizeXY/2), circleSize, circleSize, random(10,70));
    }
  }
}

//console.log(counter);
