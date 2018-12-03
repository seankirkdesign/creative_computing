var lovers;
var hater;


function setup() {
  createCanvas(windowWidth, windowHeight);
  lovers = [];
  for (var i = 0; i < 40; i++) {
    var lover = new Mover(createVector(random(width), random(height)), 30, "😍");
    lovers.push(lover);
  }

  hater = new Mover(createVector(0, 0));
}

function draw() {
  background(0, 120, 190, 10);
  // background('#2283FF')

  addLoveForce();
  addHateForce();

  for (var i = 0; i < lovers.length; i++) {
    lovers[i].update();
    lovers[i].display();
    lovers[i].checkBound();
  }

  hater.update();
  hater.displayHater();
  hater.checkBound();
}

function addLoveForce (){
  for (var i = 0; i < lovers.length; i++) {
    var loverLoc = lovers[i].loc.copy();
    for (var j = i; j >= 0; j--) {
      var otherLoverLoc = lovers[j].loc.copy();
      var distBtwOtherLovers = otherLoverLoc.sub(loverLoc);
      if (distBtwOtherLovers.mag() < (lovers[i].size)) {
        distBtwOtherLovers.mult(0.003);
        lovers[i].addForce(-distBtwOtherLovers);
        lovers[j].addForce(distBtwOtherLovers);
      }
    }
    var haterLoc = hater.loc.copy();
    var diff = haterLoc.sub(loverLoc);
    diff.mult(0.00005);
    lovers[i].addForce(diff);
  }
}

function addHateForce() {
  var loverLoc = createVector(mouseX, mouseY);
  var haterLoc = hater.loc.copy();
  var diffLoc = loverLoc.sub(haterLoc);
  diffLoc.mult(0.003);
  hater.addForce(diffLoc);
}
