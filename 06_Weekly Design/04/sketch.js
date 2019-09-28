
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
  background(25);
}

function draw() {

  frameRate(60);
  r = map(mouseX, 0, windowWidth, 195, 255);
  g = map(mouseY, 0, windowWidth, 70, 250);
  b = map(windowWidth, 0, windowHeight, 160, 220);


  // fill(r,g, b + 50)
  // noCursor();
  stroke(random(125, 255), random(70, 250), random(160, 220));
  var circleSize = 20;
  var circleDynamic = sin(frameCount/40)*250;


  line(mouseX, mouseY, mouseX, mouseY + random(50,windowHeight/3));
  // line(mouseX, mouseY, mouseX + random(-250,250), mouseY + random(300,320));
  // line(mouseX, mouseY, mouseX + random(-250,250), mouseY + random(300,320));
  // ellipse(circle.x, circle.y, circleDynamic);
  // circle.x += circle.xspeed
  // circle.y += circle.yspeed

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
