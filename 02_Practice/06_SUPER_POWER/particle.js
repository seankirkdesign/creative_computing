class Particle {
  constructor(loc) {
    this.loc = loc.copy();
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.isDead = false;
    this.age = 0;
    this.lifeSpan = random (60, 110);
    this.size = 10;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);

    this.vel.mult(0.97);
    this.acc.mult(0);

    this.age++;
    if (this.age >= this.lifeSpan) {
      this.isDead = true;
    }
  }

  display(){
    var life= (this.lifeSpan - this.age) / this.lifeSpan;
    var size = this.size * life;
    fill(255);
    ellipse(this.loc.x, this.loc.y, size, size);
  }
}
