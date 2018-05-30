var ball = [];

function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < 400; i++){
    var ii = i * 0.1;
    ball[i] = new BouncingBall (
      random(width),
      random(height),
      50,
      ii,
      ii,
      random(255));
  }
}

function mousePressed() {
  b = new BouncingBall(
    random(width),
    random(height),
    50,
    ii,
    ii,
    random(255));
    
  ball.push(b);
}

function draw() {
  background(200);

  for (var i = 0; i < 10; i++){
    ball[i].move();
    ball[i].display();
    ball[i].bounce();
  }
}
