var attractor;
var particle;

function setup() {
  createCanvas(400, 400);
  attractor = createVector(200, 200);
  particle = new Particle(200, 100);
}


function draw() {
  background(50);

  stroke(255);
  strokeWeight(4);
  point(attractor.x, attractor.y);
  particle.attracted(attractor);
  particle.update();
  particle.show();

}
