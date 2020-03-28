var mover
var direction = 'right';

var diff = 5;

var radius;

var ballX
var ballY

function setup() {
  createCanvas(500, 500);
  mover = new Mover();

  radius = 20;

  ballX = width/2;
  ballY = height/2;
}

function draw() {
  background(200);

  var gravity = createVector(0, 0.2);
  mover.applyForce(gravity);


  mover.update();
  mover.display();
  addKeyboardForce();
  // addMouseForce();
}

// function addMouseForce() {
//   var mouseLoc = createVector(mouseX, mouseY);
//   var moverLoc = mover.loc;
//   var diffLoc = mouseLoc.sub(moverLoc);
//   diffLoc.mult(0.003);
//   mover.applyForce(diffLoc);
// }


function addKeyboardForce() {
  switch (direction) {
    case 'left':
    gravity = createVector(-0.1, 0);
    break;

    case 'right':
    gravity = createVector(0.1, 0);
    break;

    case 'up':
    gravity = createVector(0, 0.1);
    break;

    case 'down':
    gravity = createVector(0, -0.1);
    break;
  }
}

function keyPressed() {
  switch (keyCode) {
    case 65:
    direction = 'left';
    break;

    case 68:
    direction = 'right';
    break;

    case 87:
    direction = 'up';
    break;

    case 83:
    direction = 'down';
    break;
  }
}
