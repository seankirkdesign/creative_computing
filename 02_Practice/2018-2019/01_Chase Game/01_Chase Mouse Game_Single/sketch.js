var lover;
var hater;

lover = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  lover = new Mover(createVector(random(5,10), random(20,30)));
  hater = new Mover(createVector(400, height/2));
}

function draw() {
  background(30);

  addLoverForce();
  addHaterForce();

  for (var i = 0; i < 10; i++){
    fill(255,0,0);
    lover.update();
    lover.display();
  }


  fill(0,0,255);
  hater.update();
  hater.display();

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
  var haterLoc = hater.loc.copy();
  var loverLoc = lover.loc.copy();
  var diffLoc = loverLoc.sub(haterLoc);
  if (diffLoc.mag() < 30){
    diffLoc.mult(-0.3);
    hater.applyForce(diffLoc);
  }
}
