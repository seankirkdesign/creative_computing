var lover;
var haters;

var bgColor ={
  x:1,
  xSpeed:10.5,
  y:2,
  ySpeed:14,
  size:20,
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  haters = [];
  for (var i = 0; i < 100; i++){
    var hater = new Mover(createVector(random(width), random(height)));
    haters.push(hater);
  }

  lover = new Mover(createVector(random(5,10), random(20,30)));
  //hater = new Mover(createVector(400, height/2));
}

function draw() {
  //color
  r = map(bgColor.x, 0, windowWidth, 0, 255);
  g = map(bgColor.y, 0, windowHeight, 0, 255);
  b = map(mouseY, 0, 500, 0, 255);
  background(r, g, 150);

  //This makes circle bounce
  bgColor.x =+ bgColor.xSpeed
  bgColor.y =+ bgColor.ySpeed

  addLoverForce();
  addHaterForce();



  for (var i = 0; i < 10; i++){
    fill(255,0,0);
    lover.update();
    lover.display();
    lover.checkBound();
  }

  fill(0,0,255);
  for (var i = 0; i < haters.length; i++){
    haters[i].update();
    haters[i].display();
    haters[i].checkBound();
  }

  noCursor();
  fill(255,255,0);
  ellipse(mouseX, mouseY, 20, 20,);
}

function addLoverForce() {
  var haterLoc = createVector(mouseX, mouseY);
  var loverLoc = lover.loc.copy();
  var diffLoc = haterLoc.sub(loverLoc);
  diffLoc.mult(0.003);
  lover.applyForce(diffLoc);
}

function addHaterForce() {
  for (var i=0; i<haters.length; i++) {
    var loverLoc = lover.loc.copy();
    var haterLoc = haters[i].loc.copy();
    var diff = haterLoc.sub(loverLoc);
    if (diff.mag() < 40) {
      diff.mult(0.02)
      lover.applyForce(diff);
    }
  }
}
