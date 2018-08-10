rains = []
angle = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  for (var i = 0; i < 800; i++){
    rains[i] = new Rain();
  }
}

function draw() {
  background(0, 60);
  for (var i = 0; i < rains.length; i++){
    rains[i].show();
    rains[i].fall();
  }

  //RSVP Button
  push();
  strokeWeight(10);
  stroke(0);
  fill(255)
  rectMode(CENTER);
  rect(mouseX, mouseY, 150, 70);
  pop();


  push();
  fill(0);
  textAlign(CENTER);
  textSize(17);
  textStyle(BOLD);
  textFont('IBM Plex Mono');
  text('R S V P', mouseX, mouseY+5);
  pop();



}
