var lovers;
var hater;


function setup() {
  createCanvas(windowWidth, windowHeight);

  lovers = [];
  for (var i = 0; i < 100; i++) {
    var lover = new Mover(createVector(random(width), random(height)), 30, "😍");
    lovers.push(lover);
  }


  hater = new Mover(createVector(mouseX, mouseY), 30, "😱");
}

function draw() {
  background(50);

  addLoveForce();
  addHateForce();

  /*
  noCursor();
  fill(255);
  ellipse(mouseX, mouseY, 30, 30);
  */

  fill(75);
  for (var i=0; i<lovers.length; i++) {
    lovers[i].update();
    lovers[i].display();
  }


  fill(150);
  hater.update();
  hater.display();
  hater.checkBound();

}

function addLoveForce (){
  for (var i=0; i<lovers.length; i++) {
    var loverLoc = lovers[i].loc.copy();
    for (var j = i; j >= 0; j--) {
      var otherLoverLoc = lovers[j].loc.copy();
      var distBtwOtherLovers = otherLoverLoc.sub(loverLoc);
      if (distBtwOtherLovers.mag() < (lovers[i].size * 1.3)) {
        distBtwOtherLovers.mult(0.31);
        lovers[i].addForce(-distBtwOtherLovers);
        lovers[j].addForce(distBtwOtherLovers);
      }
    }
    var haterLoc = hater.loc.copy();
    var diff = haterLoc.sub(loverLoc);
    diff.mult(0.001);
    lovers[i].addForce(diff);
  }
}

function addHateForce () {
  for (var i=0; i<lovers.length; i++) {
    var loverLoc = lovers[i].loc.copy();
    var haterLoc = hater.loc.copy();
    var diff = haterLoc.sub(loverLoc);
    if (diff.mag() < 40) {
      diff.mult(0.02)
      hater.addForce(diff);
    }
  }
}
