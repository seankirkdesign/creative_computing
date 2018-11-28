class Mover {
  constructor(location){
    //rectMode(CENTER);
    this.loc = location;
    this.size = random(windowWidth/40, windowHeight/40);
    this.vel = createVector(0.2);
    this.acc = createVector(random(-1, 1), random(-1, 1));
    this.gra = createVector(0, 0);
    this.color = random(70, 255);
  }

  addForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(1);
    this.acc.mult(0.002);

    // Add velocity to the location.
    this.loc.add(this.vel);
    // Add gravity to velocity
    this.vel.add(this.gra);
  }

  checkBound() {
    if (this.loc.x + this.size > width || this.loc.x - this.size < 0) {
      this.vel.x = this.vel.x * -1;
    }

    if (this.loc.y + this.size > height || this.loc.y - this.size < 0) {
      this.vel.y = this.vel.y * -1;
    }
  }

  display() {
    push()
    translate(this.loc.x, this.loc.y);
    rotate(this.vel.heading());
    noStroke();
    fill(230, this.color, 80);
    ellipse(0, 0, this.size * 2);
    pop();
  }

  displayHater() {
    noCursor();
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, this.size * 2);
  }
}
