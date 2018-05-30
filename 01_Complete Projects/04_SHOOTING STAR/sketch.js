var lover;
var haters;

var bgColor ={
  x:1,
  xSpeed:40.5,
  y:2,
  ySpeed:14,
  size:20,
};


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
  //color
  r = map(bgColor.x, 0, windowWidth, 0, 255);
  g = map(bgColor.y, 0, windowHeight, 0, 255);
  background(30, 30, 30, 10);

  //This makes circle bounce
  bgColor.x = bgColor.x + bgColor.xSpeed
  bgColor.y = bgColor.y + bgColor.ySpeed

  if (bgColor.x < 0 || bgColor.x > width) {
    bgColor.xSpeed = bgColor.xSpeed * -1;
  }

  if (bgColor.y < 0 || bgColor.y > height) {
    bgColor.ySpeed = bgColor.ySpeed * -1;
  }


  addLoverForce();
  addHaterForce();

  fill(255);
  textSize(14);
  textFont('courier');
  text("Move mouse to travel space.", 20, 40);


  //Mouse: Lover
  fill(255);
  for (var i = 0; i < 25; i++){
    lover.update();
    lover.displayLover();
    lover.checkBound();
  }


  //Haters
  noStroke();
  fill(r, g, 100);
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
  for (var i = 0; i < haters.length; i++) {
    var loverLoc = lover.loc.copy();
    var haterLoc = haters[i].loc.copy();
    var diff = haterLoc.sub(loverLoc);
    if (diff.mag() < 40) {
      diff.mult(0.52)
      haters[i].applyForce(diff);
    }
  }
}
