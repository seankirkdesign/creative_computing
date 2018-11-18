
// the snake is divided into small segments, which are drawn and edited on each 'draw' call
var numSegments = 5;
var direction = 'right';

var xStart = 0; //starting x coordinate for snake
var yStart = 250; //starting y coordinate for snake
var diff = 5;

var xCor = [];
var yCor = [];

function setup() {
  createCanvas(500, 500);
  // frameRate(15);
  stroke(255);
  strokeWeight(2);

  for (var i = 0; i < numSegments; i++) {
    xCor.push(xStart + (i * diff));
    yCor.push(yStart);
  }
}

function draw() {
  background(204, 0, 0, 10);

  for (var i = 0; i < numSegments - 1; i++) {
    line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
  }
  updateSnakeCoordinates();
  checkGameStatus();


  push();
  fill(255);
  textSize(14);
  textFont('courier');
  text("move Iron Man with W A S D", 20, 40)
  pop();
}

/*
The segments are updated based on the direction of the snake.
All segments from 0 to n-1 are just copied over to 1 till n, i.e. segment 0
gets the value of segment 1, segment 1 gets the value of segment 2, and so on,
and this results in the movement of the snake.

The last segment is added based on the direction in which the snake is going,
if it's going left or right, the last segment's x coordinate is increased by a
predefined value 'diff' than its second to last segment. And if it's going up
or down, the segment's y coordinate is affected.
*/

function updateSnakeCoordinates() {

  for (var i = 0; i < numSegments - 1; i++) {
    xCor[i] = xCor[i + 1];
    yCor[i] = yCor[i + 1];
  }
  switch (direction) {
    case 'right':
      xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'up':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
      break;
    case 'left':
      xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'down':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
      break;
  }
}

function keyPressed() {
  switch (keyCode) {
    case 65:
      //if (direction != 'right') {
        direction = 'left';
      //}
      break;
    case 68:
      //if (direction != 'left') {
        direction = 'right';
      //}
      break;
    case 87:
      //if (direction != 'down') {
        direction = 'up';
      //}
      break;
    case 83:
      //if (direction != 'up') {
        direction = 'down';
      //}
      break;
  }
}

// function checkGameStatus() {
//   if (xCor[xCor.length - 1] > width ||
//       xCor[xCor.length - 1] < 0 ||
//       yCor[yCor.length - 1] > height ||
//       yCor[yCor.length - 1] < 0
//       ) {
//   }
// }

function checkGameStatus() {
  if (xCor[xCor.length - 1] > width) {
    direction = 'left';
  }

  if (xCor[xCor.length - 1] < 0) {
    direction = 'right';
  }

  if (yCor[yCor.length - 1] > height) {
    direction = 'up';
  }

  if (yCor[yCor.length -1] < 0) {
    direction = 'down';
  }
}


// function hitWall(){
//   if (xCor[numSegments] > width){
//     direction = 'left';
//   }
//
//   if (xCor[numSegments] < 0){
//     direction = 'right';
//   }
//
// }
