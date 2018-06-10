var ballX;
var ballY;

var ballXSpeed = 0;
var ballYSpeed = 0;

var currentSpeed;

var radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballX = width/2;
  ballY = height/2;
  radius = 2.5;
}

function draw() {
  background(204, 0, 0, 50);
  displayInfo();

  displayIM();
  displayMouse();
  wallHit();
  mouseClicked();
}

function displayIM (){
    noStroke();
    fill(255);
    ellipse(ballX,ballY, radius*2);
    ballX += ballXSpeed;
    ballY += ballYSpeed;
}

function displayInfo (){
  fill(255);
  textFont('Helvetica');
  textSize(10);
  text('Desktop use only.', 20, 20);

  currentSpeed = abs(ballXSpeed) + abs(ballYSpeed);
  textFont('Krona One');
  textSize(15);
  fill(255);
  text('Press W A S D to Move', 20, 60);
  text('Click mouse to shoot', 20, 80)
  text('Speed: '+currentSpeed+'k mph', 20, height - 20);
  text('Location: '+ballX+'.'+ballY, 20, height - 40);
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

function displayMouse() {
  noCursor();
  noFill();
  strokeWeight(.5);
  stroke(255);
  ellipse(mouseX + random(-3, 3), mouseY + random (-3, 3), 30, 30);
  ellipse(mouseX + random(-3, 3), mouseY + random (-3, 3), 1, 1);
}

function mouseClicked() {
  if (mouseIsPressed){
    push();
    strokeWeight(7);
    stroke(120,150,160,40);
    line (ballX, ballY, mouseX  + random (-5, 5), mouseY  + random (-5, 5));
    pop();

    push();
    strokeWeight(5);
    stroke(140,150,160);
    line (ballX, ballY, mouseX  + random (-5, 5), mouseY  + random (-5, 5));
    pop();

    push();
    strokeWeight(2);
    stroke(255);
    line (ballX, ballY, mouseX, mouseY);
    pop();
  }
}
