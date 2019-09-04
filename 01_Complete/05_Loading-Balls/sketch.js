var lover;
var haters;

var loading;
var cursor
var song;


function preload() {
  loading = loadImage('loading.png');
  cursor = loadImage('cursor.png');

  soundFormats('mp3');
  song = loadSound('tab.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // song.setVolume(0);
  // song.play();

  haters = [];
  for (var i = 0; i < 90; i++) {
    var hater = new Mover(createVector(random(width), random(height)));
    haters.push(hater);
  }

  lover = new Mover(createVector(random(5, 10), random(20, 30)));
}


function draw() {
  background(240);

  // push();
  // fill(120);
  // textSize(100);
  // // textAlign(CENTER);
  // text("Now, it's your turn", 125, 130);
  // text("made by Sean", 25, 50);
  // pop();

  addLoverForce();
  addHaterForce();

  for (var i = 0; i < 10; i++){
    lover.update();
    lover.displayLover();
  }

  for (var i = 0; i < haters.length; i++) {
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

function addHaterForce() {
  for (var i = 0; i < haters.length; i++) {
    var haterLoc = haters[i].loc.copy();
    for (var j = i; j >= 0; j--) {
      var otherHaterLoc = haters[j].loc.copy();
      var distBtwOtherHaters = otherHaterLoc.sub(haterLoc);
      if (distBtwOtherHaters.mag() < (haters[i].size-11)) {
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
      // background(60);
      // song.play();

    }
  }
}
