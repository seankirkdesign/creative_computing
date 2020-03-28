class Mover {
  constructor(location) {
     this.loc = location;
     this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
     this.acc = createVector(0, 0);
     this.gra = createVector(random(-0.01, 0.01), random(-0.01, 0.01));
     this.size = random(40,70);
     this.color = random(70, 255);
  }

  applyForce(force){
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(0.98)
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

  displayLover() {
    ellipse(this.loc.x, this.loc.y, this.size, this.size);
    fill(255);
    // textSize(20);
    // textFont('helvetica');
    // text("AH!", this.loc.x, this.loc.y);
  }

  displayHater(){
    fill(230, this.color, 80);
    ellipse(this.loc.x, this.loc.y, this.size, this.size);
  }
}
