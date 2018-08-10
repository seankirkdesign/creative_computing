
function setup() {
  createCanvas(1400, 1400, WEBGL);

}

function draw() {
  background(20);

  strokeWeight(10);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(500);

}
