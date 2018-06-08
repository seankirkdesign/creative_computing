var ballX;
var ballY;
var radius;
var ballSpeed;

function setup() {
  createCanvas(500, 500);
  smooth();
  frameRate(70);

  ballX = width/2;
  ballY = height/2;
  radius = 5;
  ballSpeed = 10;
}

function draw() {
  background(240, 10);
  fill(255, 255, 255, 50);
  noStroke();

  fill(255, 0, 0);
  ellipse(ballX, ballY, radius*2, radius*2);
}


function keyPressed() {
  if ( (keyCode === LEFT_ARROW) && (ballX > radius) )
  {
    ballX = ballX - ballSpeed;
  }

  if ( (keyCode === RIGHT_ARROW) && (ballX < width-radius) )
  {
    ballX = ballX + ballSpeed;
  }

  if ( (keyCode === UP_ARROW) && (ballY > radius) )
  {
    ballY = ballY - ballSpeed;
  }

  if ( (keyCode === DOWN_ARROW) && (ballY < height-radius) )
  {
    ballY = ballY + ballSpeed;
  }
}
