
var circleDynamic = 10;
var circle = {
  x:1,
  xspeed: 2.5,
  y:1,
  yspeed: 3,
  // size: circleDynamic,
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
}

function draw() {
  //
  // r = map(circle.x, 0, windowWidth, 195, 255);
  // g = map(circle.y, 0, windowWidth, 70, 250);
  // b = map(circle.y, 0, windowHeight, 160, 220);


  noFill();
  stroke(random(125, 255), random(70, 250), random(160, 220));
  var circleSize = 20;
  var circleDynamic = sin(frameCount/40)*250;
  ellipse(circle.x, circle.y, circleDynamic);
  circle.x += circle.xspeed
  circle.y += circle.yspeed

  if (circle.x < 0 || circle.x > width) {
    circle.xspeed = circle.xspeed * -1;
  }

  if (circle.y < 0 || circle.y > height) {
    circle.yspeed = circle.yspeed * -1;
  }



  // Mouse Circle //
  // noCursor();
  // noFill();
  // stroke(100, g, b);
  // // ellipse(mouseX, mouseY, mouseY/2, mouseY/2);
  // var circleSize = 20;
  // var circleDynamic = sin(frameCount/30)*230;
  // ellipse (mouseX, mouseY, circleSize + circleDynamic, circleSize + circleDynamic);
}

function mousePressed() {
  circleSize = 0;
}
