function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
}

function draw() {
  background(0);
  var x = width/2;
  var y = height/2;
  var numOfCircles = mouseX;
  var size = 100;

  for (var i=0; i<numOfCircles; i+=1) {
    var zeroToOne = i/numOfCircles;
    stroke(0);
    strokeWeight(2);
    fill(60 + i/numOfCircles * 50);
    var angle = zeroToOne * (Math.PI * (mouseY * 0.1));
    var spiralSize = 10 + i;
    x = width / 2 + Math.cos(angle) * spiralSize;
    y = height / 2 + Math.sin(angle) * spiralSize;
    ellipse(x, y, size, size);
  }
}
