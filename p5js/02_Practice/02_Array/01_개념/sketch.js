var words = ["kim", "lee", "kirk", "choi", 21, "love", "shit"];
var colors = [255, 0, 100, 20, 167];
var colorG = [10,200,255,185,213];
var rectSize = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140];

var index = 0;
var indexColors = 0;
var indexG = 0;
var indexRectSize = 0;


var square

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);
  textSize(50);
  fill(colors[indexColors], colorG[indexG], colors[indexColors]);
  text(words[index], 200, 250);

  rectMode(CENTER);
  fill(255);
  rect(width/2, 400, rectSize[indexRectSize], rectSize[indexRectSize]);
}

function mousePressed() {
  index++;
  indexColors++;
  indexG++;
  indexRectSize++;

  if (index == words.length){
    index = 0;
  }

  if (indexColors == colors.length){
    indexColors = 0;
  }

  if (indexG == colorG.length){
    indexG = 0;
  }

  if (indexRectSize == rectSize.length){
    indexRectSize = 0;
  }
}
