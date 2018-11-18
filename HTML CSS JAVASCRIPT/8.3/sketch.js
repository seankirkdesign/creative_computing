var canvas;
var h1;
var x = 100;
var y = 100;

function setup() {
  canvas = createCanvas(200, 200);
  canvas.position(400, 0);
  h1 = createElement("h1", "Waiting.");
  h1.position(200, 150);
}

function mousePressed() {
  h1.html("Now I will show you my favorite numbers.")
  createP("My favorite number is" + random(0, 5));

}

function draw() {
  background(0);
  fill(255, 0, 0);
  rect(x, y, 70, 50);
  x += random(-5, 5);
  y += random(-5, 5);

  h1.position(x,y);
}
