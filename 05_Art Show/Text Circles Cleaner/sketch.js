function setup() {
  createCanvas(1400, 1024);
  colorMode(HSB, 100);
}

// function preload() {
//   var myFont = loadFont('assets/SharpGroteskMediumItalic08.otf');
// }

function draw() {
  background(0);
  var x = mouseX;
  var y = mouseY;
  var numOfCircles = mouseX;
  var size = 100;

  for (var i=0; i<numOfCircles; i+=1) {
    var zeroToOne = i/numOfCircles;
    stroke(0);
    strokeWeight(1);
    fill(255);
    textSize(20);
    // fill(60 + i/numOfCircles * 50);
    var angle = zeroToOne * (Math.PI * (mouseY * 0.01));
    var spiralSize = 0 + i;
    x = width / 2 + Math.cos(angle) * spiralSize;
    y = height / 2 + Math.sin(angle) * spiralSize;
    // ellipse(x, y, size, size);
    // textFont(myFont);
    text("Look At All These Things", x, y);
  }
}
