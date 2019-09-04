function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40);
}

function draw() {
  r = map(mouseX, 0, windowWidth, 30, 255);
  g = map(mouseY, 0, windowWidth, 60, 190);
  b = map(mouseY, 0, windowHeight, 160, 220);

  noCursor();
  noFill();
  stroke(100, g, b);
  // ellipse(mouseX, mouseY, mouseY/2, mouseY/2);
  var circleSize = 20;
  var circleDynamic = sin(frameCount/30)*230;
  ellipse (mouseX, mouseY, circleSize + circleDynamic, circleSize + circleDynamic);
}

function mousePressed() {
  circleSize = 0;
}
