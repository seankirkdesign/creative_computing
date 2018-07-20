/**
Bryn Mawr College, Department of Computer Science <br>
Classic starfield using 2D transformations and z-scaling.
*/

// Array of stars
var stars = []


function setup() {
  createCanvas(600, 600);
  smooth();
  stroke(255);

 stars = new Star();

  // Init all stars
  for (var i = 0; i < stars.length; i++)
    stars[i] = new Star();
}

function draw() {
  background(0);

  // Draw all stars wrt center of screen
  translate(0.5*width, 0.5*height);

  // Update and draw all stars
  for (var i=0; i<stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}


class Star {
  constructor() {
    var x;
    var y;
    var z;
  }

  Star() {
    x = random(-5000, 5000);
    y = random(-5000, 5000);
    z = random(0, 2000);
  }

  update() {
    z-=10;        // Move star closer to viewport
    if (z <= 0.0) // Reset star if it passes viewport
      reset();
  }

  reset() {
    // Reset star to a position far away
    x = random(-5000, 5000);
    y = random(-5000, 5000);
    z = 2000.0;
  }

  show() {
    // Project star only viewport
    var offsetX = 100.0*(x/z);
    var offsetY = 100.0*(y/z);
    var scaleZ = 0.0001*(2000.0-z);

    // Draw this star
    push();
    translate(offsetX, offsetY);
    scale(scaleZ);
    ellipse(0,0,20,20);
    pop();
  }
}
