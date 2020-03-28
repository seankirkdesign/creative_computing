var circleSize = 70;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40);
}

function draw() {
  noCursor();
  //noStroke();
  // ellipse(mouseX, mouseY, mouseY/2, mouseY/2);

}

function mouseDragged() {
  var circleDynamic = sin(frameCount/50)*100;
  ellipse (mouseX, mouseY, circleSize + circleDynamic, circleSize + circleDynamic);
  noStroke (180);
}
