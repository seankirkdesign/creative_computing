let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    bubbles[i] = new Bubble(createVector(random(width), random(height)));
  }
}

function draw() {
  background('#2283FF');

  for (let b of bubbles) {
    b.show();
    b.move();
    b.update();
    b.checkBound();
    let overlapping = false;
    for (let other of bubbles) {
      if (b !== other && b.intersects(other)) {
        overlapping = true;
      }
    }
    if (overlapping) {
      b.push();
    } else {
      
    }
  }
}
