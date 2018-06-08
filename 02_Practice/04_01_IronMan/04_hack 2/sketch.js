var ballX;
var ballY;

var ballXSpeed = 0;
var ballYSpeed = 0;

var currentSpeed;

var radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballX = windowWidth/2;
  ballY = windowHeight/2;
  radius = 2;


}

function draw() {
  currentSpeed = ballXSpeed + ballYSpeed;
  if(currentSpeed < 0){
    currentSpeed *= -1;
  }
  text('Press W A S D to Move', 20, 40);
  text('current speed: '+(currentSpeed * 122.2)+'mph', 20, 60);

  text('current location: '+ballX+','+ballY, 20, 100);
  background(204, 0, 0, 10);
  display();
  wallHit();
}

function display (){
    noStroke();
    fill(255);
    ellipse(ballX,ballY, radius*2);
    ballX += ballXSpeed;
    ballY += ballYSpeed;
}

function wallHit(){
  if (ballX > width || ballX < 0){
    ballXSpeed *= -1;
  }

  if (ballY > height || ballY < 0){
    ballYSpeed *= -1;
  }
}

function keyPressed() {
  switch (keyCode){
    case 87:
    ballYSpeed = ballYSpeed - 1;
    break;

    case 83:
    ballYSpeed = ballYSpeed + 1;
    break;

    case 65:
    ballXSpeed = ballXSpeed - 1;
    break;

    case 68:
    ballXSpeed = ballXSpeed + 1;
    break;
  }
}

function mouseClicked() {

}
