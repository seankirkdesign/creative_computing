var lover;
var haters;

function setup() {
  createCanvas(windowWidth, windowHeight);


  haters = [];
  for (var i = 0; i < 550; i++){
    var hater = new Mover(createVector(random(width), random(height)));
    haters.push(hater);
  }

  lover = new Mover(createVector(random(5,10), random(20,30)));
  //hater = new Mover(createVector(400, height/2));
}

function draw() {
  background(20,110,230,10);

  addLoverForce();
  addHaterForce();

  textSize(14);
  textFont('courier');
  text("Move mouse to travel space.", 20, 40);

  fill(255, 80, 120,);
  for (var i = 0; i < 20; i++){
    lover.update();
    lover.displayLover();
    lover.checkBound();
  }

  noStroke();
  fill(250);
  for (var i = 0; i < haters.length; i++){
    haters[i].update();
    haters[i].displayHater();
    haters[i].checkBound();
  }


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
      diff.mult(0.52)
      haters[i].applyForce(diff);
    }
  }
}
