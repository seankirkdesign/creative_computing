class Mover {
  constructor(location) {
     this.loc = location
     this.vel = createVector(0, 0);
     this.acc = createVector(0, 0);
     this.gra = createVector(random(-0.1, 0.1),random(-0.1, 0.1));
  }

  applyForce(force){
    this.acc.add(force);
  }

  updateHater() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.mult(1);
    this.acc.mult(1);
    this.gra.mult(0.9);
    // Add velocity to the location.
    this.loc.add(this.vel);
    // Add gravity to velocity
    this.vel.add(this.gra);
  }

  // updateLover() {
  //   this.vel.add(this.acc);
  //   this.loc.add(this.vel);
  //   this.vel.mult(0.98);
  //   this.acc.mult(0);
  // }

  // This makes haters bounce
  // checkBound() {
  //   if (this.loc.x > width || this.loc.x < 0) {
  //     this.vel.x *= this.vel.x * -1;
  //   }
  //
  //   if (this.loc.y > height || this.loc.y < 0) {
  //     this.vel.y *= -1;
  //   }
  // }

  checkBound() {
    if (this.loc.x > width) {
      this.loc.x = 0;
    } else if (this.loc.x < 0) {
      this.loc.x = width;
    }
    if (this.loc.y > height) {
      this.loc.y = 0;
    } else if(this.loc.y < 0) {
      this.loc.y = height;
    }
  }

  // displayLover() {
  //   ellipse(this.loc.x, this.loc.y, 20 * 2);
  // }

  displayHater(){
    noStroke();
    fill(255, 0, 0);
    ellipse(this.loc.x, this.loc.y, 10 * 2);
  }
}
