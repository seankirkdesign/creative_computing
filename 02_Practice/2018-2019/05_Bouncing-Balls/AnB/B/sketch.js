var lover;
var haters;

function setup() {
  createCanvas(windowWidth, windowHeight);

  haters = [];
  for (var i = 0; i < 30; i++){
    var hater = new Mover(createVector(random(width), random(height)));
    haters.push(hater);
  }

  lover = new Mover(createVector(random(5,10), random(20,30)));
}

function draw() {
  background(0, 120, 190);

  addLoverForce();
  addHaterForce();

  for (var i = 0; i < 5; i++){
    lover.update();
    lover.displayLover();
  }

  noStroke();

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
  diffLoc.mult(0.005);
  lover.applyForce(diffLoc);
}

function addHaterForce (){
  for (var i = 0; i < haters.length; i++) {
    var haterLoc = haters[i].loc.copy();
    for (var j = i; j >= 0; j--) {
      var otherHaterLoc = haters[j].loc.copy();
      var distBtwOtherHaters = otherHaterLoc.sub(haterLoc);
      if (distBtwOtherHaters.mag() < (haters[i].size)) {
        distBtwOtherHaters.mult(0.02);
        haters[i].applyForce(-distBtwOtherHaters);
        haters[j].applyForce(distBtwOtherHaters);
      }
    }
    var loverLoc = lover.loc.copy();
    var diff = haterLoc.sub(loverLoc);
    if (diff.mag() < (haters[i].size)) {
      diff.mult(0.15)
      haters[i].applyForce(diff);
    }
  }
}
