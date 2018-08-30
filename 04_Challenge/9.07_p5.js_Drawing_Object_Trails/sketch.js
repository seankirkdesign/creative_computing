// Daniel Shiffman
// code for https://youtu.be/vqE8DMfOajk

var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(240);
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }

  //line(frameCount, 0, frameCount, height);
}
