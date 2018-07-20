var t = 0;

function Circle(_x, _y, _dia) {
  this.x = _x;
  this.y = _y;
  this.dia = _dia;

  this.draw = function() {
    noCursor();
    noFill();
  }
}

function Line(_x1, _y1, _x2, _y2) {
  this.x1 = _x1;
  this.y1 = _y1;
  this.x2 = _x2;
  this.y2 = _y2;

  this.draw = function() {
    noFill();
    stroke(random(180,200), random(50,240), 110);
    line(this.x1, this.y1, this.x2, this.y2)
  }

  this.move = function() {

    this.x2 = this.x1 + noise(50)
    this.y2 = this.y2 + noise(t*100)*50 + 10;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

var circles = [];
var lines = [];

function mouseMoved(){
  circles.push(new Circle(mouseX, mouseY, 2));
  lines.push(new Line(mouseX, mouseY, mouseX, mouseY));
}

function draw() {
  background(0,30);
  textFont("courier");
  fill(255);
  text("Facebook NY Installation", 10, 20);
  for (var i=0; i<circles.length; i++) {
   circles[i].draw();
   lines[i].draw();
   lines[i].move();
  }



}
