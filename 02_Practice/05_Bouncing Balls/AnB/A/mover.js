class Mover {
  constructor(location){
    this.loc = location;
    this.size = random(windowWidth/20, windowHeight/20);
    this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    this.acc = createVector(0);
    this.gra = createVector(random(-0.001, 0.001), random(-0.001, 0.001));
    this.color = random(70, 255);
  }

  addForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.999);
    this.acc.mult(0);
    this.vel.add(this.gra);
  }

  checkBound() {
    if (this.loc.x + this.size/2 > width || this.loc.x - this.size/2 < 0) {
      this.vel.x *= -1;
    }

    if (this.loc.y + this.size/2 > height || this.loc.y - this.size/2 < 0) {
      this.vel.y *= -1;
    }
  }

  display() {
    push()
    translate(this.loc.x, this.loc.y);
    rotate(this.vel.heading());
    noStroke();
    fill(255);
    fill(230, this.color, 80);
    ellipse(0, 0, this.size, this.size);
    pop();
  }

  displayHater() {
    noCursor();
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, this.size, this.size);
  }
}
