var ball = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}


function mousePressed() {
  //ball.clicked();
  var b = new BouncingBall(
    mouseX,
    mouseY,
    40,
    2,
    5,
    random(255));

  ball.push(b);
}

function draw() {
  background(245);

  for (var i = 0; i < ball.length; i++){
    ball[i].move();
    ball[i].display();
    ball[i].bounce();
  }
}
